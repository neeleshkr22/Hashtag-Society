import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  colors = ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let nt = 0;
    const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

    const drawWave = (n) => {
      nt += getSpeed();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i % colors.length];

        for (let x = 0; x < canvas.width; x += 5) {
          let y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + canvas.height * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawWave(5);
      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity, noise]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
};
