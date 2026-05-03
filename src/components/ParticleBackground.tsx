import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let pixelRatio = window.devicePixelRatio || 1;
    let particles: Particle[] = [];
    let ripples: Ripple[] = [];

    const pointer = {
      x: -999,
      y: -999,
      active: false,
      down: false,
      moved: false,
    };

    const getParticleCount = (width: number, height: number) => {
      const area = width * height;
      // Reduced particle count to free up CPU for main animations
      return Math.min(80, Math.max(30, Math.round(area / 20000)));
    };

    const resetParticles = () => {
      particles = [];
      const count = getParticleCount(canvas.width / pixelRatio, canvas.height / pixelRatio);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * (canvas.width / pixelRatio),
          y: Math.random() * (canvas.height / pixelRatio),
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          size: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.25,
        });
      }
    };

    const getCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      return {
        width: rect.width || window.innerWidth,
        height: rect.height || window.innerHeight,
      };
    };

    let accentHsl = "203, 100%, 52%";
    const updateThemeColors = () => {
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      if (accent) {
        accentHsl = accent.replace(/\s+/g, ', ');
      }
    };

    const resize = () => {
      pixelRatio = window.devicePixelRatio || 1;
      const { width, height } = getCanvasSize();
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      updateThemeColors();
      resetParticles();
    };

    const updatePointer = (x: number, y: number, active = true) => {
      pointer.x = x;
      pointer.y = y;
      pointer.active = active;
      pointer.moved = true;
    };

    const createRipple = (x: number, y: number) => {
      ripples.push({ x, y, radius: 0, alpha: 0.5 });
      if (ripples.length > 8) ripples.shift();
    };

    const getThemeMode = () => {
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    };

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const handlePointerDown = (event: PointerEvent) => {
      pointer.down = true;
      updatePointer(event.clientX, event.clientY);
      createRipple(event.clientX, event.clientY);
    };

    const handlePointerUp = () => {
      pointer.down = false;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.moved = false;
    };

    const applyInteraction = (particle: Particle) => {
      if (!pointer.active) return;
      const dx = pointer.x - particle.x;
      const dy = pointer.y - particle.y;
      const dist = Math.hypot(dx, dy);
      const radius = 140;
      if (dist < radius) {
        const force = (1 - dist / radius) * 0.08;
        const direction = pointer.down ? -1 : 1;
        particle.vx += (dx / dist) * force * direction;
        particle.vy += (dy / dist) * force * direction;
      }
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const isDarkTheme = getThemeMode() === "dark";
      const themeL = isDarkTheme ? "100%" : "0%";

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "transparent";
      ctx.fillRect(0, 0, width, height);

      if (pointer.active && pointer.moved) {
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 90, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${accentHsl}, 0.2)`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      particles.forEach((p, i) => {
        applyInteraction(p);

        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.995;
        p.vy *= 0.995;

        if (p.x < -20) p.x = width + 20;
        if (p.y < -20) p.y = height + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y > height + 20) p.y = -20;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        const dxP = pointer.x - p.x;
        const dyP = pointer.y - p.y;
        const distP = pointer.active ? Math.hypot(dxP, dyP) : 999;
        
        if (distP < 140) {
           ctx.fillStyle = `hsla(${accentHsl}, ${p.alpha + 0.4})`;
        } else {
           ctx.fillStyle = `hsla(0, 0%, ${themeL}, ${p.alpha})`;
        }
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);
          const threshold = 120;
          if (dist < threshold) {
            const connectionAlpha = (1 - dist / threshold) * 0.13;
            ctx.beginPath();
            ctx.shadowBlur = 0; // Reset shadow for lines
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            if (distP < 140 && pointer.active && Math.hypot(pointer.x - p2.x, pointer.y - p2.y) < 140) {
              ctx.strokeStyle = `hsla(${accentHsl}, ${connectionAlpha * 3})`;
              ctx.lineWidth = 0.8;
            } else {
              ctx.strokeStyle = `hsla(0, 0%, ${themeL}, ${connectionAlpha})`;
              ctx.lineWidth = 0.45;
            }
            ctx.stroke();
          }
        }
      });

      ripples = ripples
        .map((r) => ({ x: r.x, y: r.y, radius: r.radius + 1.8, alpha: r.alpha - 0.018 }))
        .filter((r) => r.alpha > 0);

      ripples.forEach((r) => {
        ctx.beginPath();
        ctx.shadowBlur = 0;
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${accentHsl}, ${r.alpha * 0.35})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
    requestAnimationFrame(() => {
      resize();
      draw();
    });
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

export default ParticleBackground;
