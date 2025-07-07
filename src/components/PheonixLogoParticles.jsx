import React, { useRef, useEffect } from "react";

const PheonixLogoParticles = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const particlesArray = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let logoImage = new window.Image();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((event.clientX - rect.left) / rect.width) * canvas.width;
      mouse.current.y = ((event.clientY - rect.top) / rect.height) * canvas.height;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    logoImage.src = window.innerWidth <= 768 ? "phx_logo.png" : "logo.png";
    logoImage.onload = function () {
      // Responsive logo size and image
      let logoWidth, logoHeight, verticalOffset;
      if (window.innerWidth <= 768) {
        // Mobile view
        logoWidth = 600;
        logoHeight = 600;
        verticalOffset = 0;
      } else {
        // Desktop view
        logoWidth = 1000;
        logoHeight = 700;
        verticalOffset = 10;
      }

      const logoX = canvas.width / 2 - logoWidth / 2;
      const logoY = canvas.height / 2 - logoHeight / 2 - verticalOffset;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        logoImage,
        logoX,
        logoY,
        logoWidth,
        logoHeight
      );

      const imageData = ctx.getImageData(
        logoX,
        logoY,
        logoWidth,
        logoHeight
      );
      const data = imageData.data;

      particlesArray.current = [];
      const validPositions = [];
      for (let y = 0; y < logoHeight; y += 5) {
        for (let x = 0; x < logoWidth; x += 5) {
          const i = (y * logoWidth + x) * 4;
          const a = data[i + 3];
          if (a > 128) {
            validPositions.push({
              x: x + logoX,
              y: y + logoY,
              i,
            });
          }
        }
      }

      for (const pos of validPositions) {
        const { x, y, i } = pos;
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const a = data[i + 3];
        const brightAlpha = Math.min((a / 255) * 2, 1);
        const color = `rgba(${r},${g},${b},${brightAlpha})`;

        // Pick a random valid position as the starting point
        const start = validPositions[Math.floor(Math.random() * validPositions.length)];

        particlesArray.current.push(
          new Particle(
            start.x,
            start.y,
            color,
            canvas,
            x,
            y
          )
        );
      }
      animateParticles();
    };

    class Particle {
      constructor(x, y, color, canvas, targetX, targetY) {
        this.x = x; // Start at random position
        this.y = y;
        this.color = color;
        this.size = 1.5;
        this.targetX = targetX !== undefined ? targetX : x;
        this.targetY = targetY !== undefined ? targetY : y;
        this.baseX = this.targetX;
        this.baseY = this.targetY;
        this.density = Math.random() * 30 + 1;
        this.distance = 0;
        this.speed = Math.random() * 2 + 1;
        this.easing = 0.01;
        this.hoverEffect = 0;
      }

      draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update(ctx) {
        const dx = this.targetX - this.x;
        const dy = this.targetY - this.y;
        this.distance = Math.sqrt(dx * dx + dy * dy);

        if (this.distance > 1) {
          this.x += dx * this.easing;
          this.y += dy * this.easing;
        }

        if (mouse.current.x !== null && mouse.current.y !== null) {
          const mouseDx = mouse.current.x - this.x;
          const mouseDy = mouse.current.y - this.y;
          const mouseDistance = Math.sqrt(
            mouseDx * mouseDx + mouseDy * mouseDy
          );

          if (mouseDistance < 50) {
            const pushDistance = (50 - mouseDistance) / 10;
            this.x -= (mouseDx / mouseDistance) * pushDistance;
            this.y -= (mouseDy / mouseDistance) * pushDistance;
            this.size = 2;
          } else {
            this.size = 1.5;
          }
        }

        this.draw(ctx);
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.current.length; i++) {
        particlesArray.current[i].update(ctx);
      }
      animationRef.current = requestAnimationFrame(animateParticles);
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "90vh" }}
      id="particle-canvas"
    />
  );
};

export default PheonixLogoParticles;
