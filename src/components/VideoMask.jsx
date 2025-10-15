import React, { useState, useEffect, useMemo } from 'react';

const VideoMask = ({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  children
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

  const dataUrlMask = useMemo(() => 
    `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`,
    [svgMask]
  );

  const updateSvgMask = () => {
    const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
    const svgContent = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`;
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
        {src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg') ? (
          <video
            className="size-full object-cover"
            autoPlay={autoPlay}
            muted={muted}
            loop={loop}
            preload={preload}
          >
            <source src={src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            className="size-full object-cover"
            src={src}
            alt="Masked content"
          />
        )}
      </div>
      <span className="sr-only">{content}</span>
    </div>
  );
};

export default VideoMask;
