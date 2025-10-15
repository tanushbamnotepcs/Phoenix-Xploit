import React, { useState, useEffect, useMemo } from 'react';

const YouTubeVideoMask = ({
  youtubeId,
  className = "",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  children,
  startTime = 0,
  endTime = null
}) => {
  const [svgMask, setSvgMask] = useState("");

  const content = useMemo(() => {
    if (typeof children === 'string') {
      return children;
    }
    if (React.isValidElement(children)) {
      return children.props.children || "";
    }
    if (Array.isArray(children)) {
      return children.map(child => 
        typeof child === 'string' ? child : (child?.props?.children || "")
      ).join("");
    }
    return "";
  }, [children]);

  const youtubeUrl = useMemo(() => {
    let url = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&start=${startTime}`;
    if (endTime) {
      url += `&end=${endTime}`;
    }
    return url;
  }, [youtubeId, startTime, endTime]);

  const dataUrlMask = useMemo(() => 
    `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`,
    [svgMask]
  );

  const updateSvgMask = () => {
    const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
    
    // Split content by newlines and create separate text elements
    const lines = content.split('\n');
    const lineHeight = 1.2;
    const totalLines = lines.length;
    const startY = 50 - ((totalLines - 1) * lineHeight * 8);
    
    let textElements = '';
    lines.forEach((line, index) => {
      const y = startY + (index * lineHeight * 16);
      textElements += `<text x='50%' y='${y}%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${line}</text>`;
    });
    
    const svgContent = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>${textElements}</svg>`;
    setSvgMask(svgContent);
  };

  useEffect(() => {
    updateSvgMask();
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  useEffect(() => {
    const handleResize = () => {
      updateSvgMask();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  return (
    <div className={`relative size-full ${className}`}>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          maskImage: dataUrlMask,
          WebkitMaskImage: dataUrlMask,
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={youtubeUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="size-full"
          style={{
            border: 'none'
          }}
        />
      </div>
      <span className="sr-only">{content}</span>
    </div>
  );
};

export default YouTubeVideoMask;