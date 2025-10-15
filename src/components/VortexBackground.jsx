import React, { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
import { cn } from '../lib/utils';

const TAU = 2 * Math.PI;
const BASE_TTL = 50;
const RANGE_TTL = 150;
const PARTICLE_PROP_COUNT = 9;
const RANGE_HUE = 100;
const NOISE_STEPS = 3;
const X_OFF = 0.00125;
const Y_OFF = 0.00125;
const Z_OFF = 0.0005;

const VortexBackground = ({ 
  className = '', 
  containerClass = '', 
  particleCount = 700,
  rangeY = 100,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  baseHue = 220, // Blue hue
  backgroundColor = "#000000",
  children 
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlePropsRef = useRef(null);
  const centerRef = useRef([0, 0]);
  const ctxRef = useRef(null);
  const tickRef = useRef(0);
  const noise3D = useRef(createNoise3D());

  const particleCache = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
    life: 0,
    ttl: 0,
    speed: 0,
    radius: 0,
    hue: 0,
  };

  const rand = (n) => n * Math.random();
  const randRange = (n) => n - rand(2 * n);
  const fadeInOut = (t, m) => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;

  const initParticle = (i) => {
    if (!particlePropsRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    particleCache.x = rand(canvas.width);
    particleCache.y = centerRef.current[1] + randRange(rangeY);
    particleCache.vx = 0;
    particleCache.vy = 0;
    particleCache.life = 0;
    particleCache.ttl = BASE_TTL + rand(RANGE_TTL);
    particleCache.speed = baseSpeed + rand(rangeSpeed);
    particleCache.radius = baseRadius + rand(rangeRadius);
    // Alternate between blue and red hues
    particleCache.hue = i % 2 === 0 ? baseHue : (baseHue + 120) % 360; // Blue and red

    particlePropsRef.current.set(
      [
        particleCache.x,
        particleCache.y,
        particleCache.vx,
        particleCache.vy,
        particleCache.life,
        particleCache.ttl,
        particleCache.speed,
        particleCache.radius,
        particleCache.hue,
      ],
      i,
    );
  };

  const updateParticle = (i) => {
    if (!particlePropsRef.current || !canvasRef.current || !ctxRef.current) return;

    const canvas = canvasRef.current;
    const props = particlePropsRef.current;
    const context = ctxRef.current;

    particleCache.x = props[i];
    particleCache.y = props[i + 1];
    particleCache.vx = props[i + 2];
    particleCache.vy = props[i + 3];
    particleCache.life = props[i + 4];
    particleCache.ttl = props[i + 5];
    particleCache.speed = props[i + 6];
    particleCache.radius = props[i + 7];
    particleCache.hue = props[i + 8];

    const n =
      noise3D.current(particleCache.x * X_OFF, particleCache.y * Y_OFF, tickRef.current * Z_OFF) *
      NOISE_STEPS *
      TAU;

    const nextVx = lerp(particleCache.vx, Math.cos(n), 0.5);
    const nextVy = lerp(particleCache.vy, Math.sin(n), 0.5);
    const nextX = particleCache.x + nextVx * particleCache.speed;
    const nextY = particleCache.y + nextVy * particleCache.speed;

    context.save();
    context.lineCap = "round";
    context.lineWidth = particleCache.radius;
    context.strokeStyle = `hsla(${particleCache.hue},100%,60%,${fadeInOut(
      particleCache.life,
      particleCache.ttl,
    )})`;
    context.beginPath();
    context.moveTo(particleCache.x, particleCache.y);
    context.lineTo(nextX, nextY);
    context.stroke();
    context.restore();

    props[i] = nextX;
    props[i + 1] = nextY;
    props[i + 2] = nextVx;
    props[i + 3] = nextVy;
    props[i + 4] = particleCache.life + 1;

    if (
      nextX > canvas.width ||
      nextX < 0 ||
      nextY > canvas.height ||
      nextY < 0 ||
      particleCache.life > particleCache.ttl
    ) {
      initParticle(i);
    }
  };

  const draw = () => {
    if (!canvasRef.current || !ctxRef.current || !particlePropsRef.current) return;

    const canvas = canvasRef.current;
    const context = ctxRef.current;

    tickRef.current++;

    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlePropsRef.current.length; i += PARTICLE_PROP_COUNT) {
      updateParticle(i);
    }

    context.save();
    context.filter = "blur(8px) brightness(200%)";
    context.globalCompositeOperation = "lighter";
    context.drawImage(canvas, 0, 0);
    context.restore();

    context.save();
    context.filter = "blur(4px) brightness(200%)";
    context.globalCompositeOperation = "lighter";
    context.drawImage(canvas, 0, 0);
    context.restore();

    animationFrameRef.current = requestAnimationFrame(draw);
  };

  const handleResize = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    centerRef.current = [0.5 * canvas.width, 0.5 * canvas.height];
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    ctxRef.current = canvas.getContext("2d");
    if (!ctxRef.current) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerRef.current = [0.5 * canvas.width, 0.5 * canvas.height];

    const particlePropsLength = particleCount * PARTICLE_PROP_COUNT;
    particlePropsRef.current = new Float32Array(particlePropsLength);

    for (let i = 0; i < particlePropsLength; i += PARTICLE_PROP_COUNT) {
      initParticle(i);
    }

    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      ctxRef.current = null;
      particlePropsRef.current = null;
    };
  }, [particleCount, rangeY, baseSpeed, rangeSpeed, baseRadius, rangeRadius, baseHue, backgroundColor]);

  return (
    <div className={cn('relative h-full w-full', containerClass)}>
      <div
        ref={containerRef}
        className="absolute inset-0 z-0 flex size-full items-center justify-center bg-transparent"
        style={{ opacity: 1 }}
      >
        <canvas ref={canvasRef}></canvas>
      </div>

      <div className={cn('relative z-10', className)}>
        {children}
      </div>
    </div>
  );
};

export default VortexBackground;
