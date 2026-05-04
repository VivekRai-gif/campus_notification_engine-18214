import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // ─── Drawing Helpers ───────────────────────────
    const W = () => canvas.getBoundingClientRect().width;
    const H = () => canvas.getBoundingClientRect().height;

    // Sketchy line — gives hand-drawn feel
    function sketchyLine(x1, y1, x2, y2, roughness = 1.5) {
      const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
      const segments = Math.max(Math.floor(len / 8), 4);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      for (let i = 1; i <= segments; i++) {
        const t = i / segments;
        const x = x1 + (x2 - x1) * t + (Math.random() - 0.5) * roughness;
        const y = y1 + (y2 - y1) * t + (Math.random() - 0.5) * roughness;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // ─── Draw Pine Tree ────────────────────────────
    function drawPineTree(x, y, scale = 1, detail = true) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.strokeStyle = '#1c1c1c';
      ctx.fillStyle = '#1c1c1c';
      ctx.lineWidth = 1.2;

      // Trunk
      ctx.fillRect(-2, -5, 4, 20);

      // Layers of branches
      const layers = detail ? 4 : 3;
      for (let i = 0; i < layers; i++) {
        const w = 8 + i * 6;
        const yOff = -5 - i * 12;
        ctx.beginPath();
        ctx.moveTo(0, yOff - 15);
        ctx.lineTo(-w, yOff);
        ctx.lineTo(w, yOff);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    }

    // ─── Draw Cloud ────────────────────────────────
    function drawCloud(x, y, w, h) {
      ctx.save();
      ctx.strokeStyle = '#c8c0b4';
      ctx.fillStyle = '#FAF9F6';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.5, h * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(x - w * 0.25, y + h * 0.1, w * 0.35, h * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.ellipse(x + w * 0.3, y + h * 0.05, w * 0.3, h * 0.28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    // ─── Draw Hot Air Balloon ──────────────────────
    function drawBalloon(x, y, scale = 1) {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Balloon envelope
      ctx.beginPath();
      ctx.ellipse(0, -30, 22, 30, 0, 0, Math.PI * 2);
      
      // Gradient fill
      const grad = ctx.createLinearGradient(-22, -60, 22, 0);
      grad.addColorStop(0, '#e74c3c');
      grad.addColorStop(0.3, '#e67e22');
      grad.addColorStop(0.6, '#f1c40f');
      grad.addColorStop(1, '#e74c3c');
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Vertical stripes
      ctx.strokeStyle = 'rgba(28,28,28,0.3)';
      ctx.lineWidth = 0.8;
      for (let i = -15; i <= 15; i += 10) {
        ctx.beginPath();
        ctx.moveTo(i, -58);
        ctx.quadraticCurveTo(i * 1.1, -30, i * 0.7, 0);
        ctx.stroke();
      }

      // Ropes
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-12, 0);
      ctx.lineTo(-8, 14);
      ctx.moveTo(12, 0);
      ctx.lineTo(8, 14);
      ctx.stroke();

      // Basket
      ctx.fillStyle = '#8B6914';
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.5;
      ctx.fillRect(-8, 14, 16, 10);
      ctx.strokeRect(-8, 14, 16, 10);

      // Basket weave
      ctx.strokeStyle = 'rgba(28,28,28,0.4)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.moveTo(-8, 19);
      ctx.lineTo(8, 19);
      ctx.moveTo(0, 14);
      ctx.lineTo(0, 24);
      ctx.stroke();

      ctx.restore();
    }

    // ─── Draw Mountains ────────────────────────────
    function drawMountainRange(y, height, color, rough = 2) {
      const w = W();
      ctx.save();
      ctx.fillStyle = color;
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(0, y);
      
      const peaks = 8 + Math.floor(Math.random() * 3);
      for (let i = 0; i <= peaks; i++) {
        const px = (w / peaks) * i;
        const peakH = y - height * (0.5 + Math.sin(i * 1.7) * 0.5) + (Math.random() - 0.5) * rough * 10;
        
        if (i === 0) {
          ctx.lineTo(px, peakH);
        } else {
          const cpx = px - w / peaks / 2;
          const cpy = peakH - 10 + (Math.random() - 0.5) * rough * 5;
          ctx.quadraticCurveTo(cpx, cpy, px, peakH);
        }
      }
      
      ctx.lineTo(w, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    }

    // ─── Draw River ────────────────────────────────
    function drawRiver(y, w) {
      ctx.save();
      const width = w;

      // River body
      ctx.fillStyle = '#d4cfc4';
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(width * 0.15, y);
      ctx.quadraticCurveTo(width * 0.25, y + 25, width * 0.35, y + 15);
      ctx.quadraticCurveTo(width * 0.5, y - 5, width * 0.6, y + 10);
      ctx.quadraticCurveTo(width * 0.75, y + 30, width * 0.85, y + 20);
      ctx.quadraticCurveTo(width * 0.95, y + 10, width * 1.05, y + 25);

      // Bottom edge
      ctx.lineTo(width * 1.05, y + 45);
      ctx.quadraticCurveTo(width * 0.9, y + 50, width * 0.75, y + 55);
      ctx.quadraticCurveTo(width * 0.6, y + 45, width * 0.45, y + 50);
      ctx.quadraticCurveTo(width * 0.3, y + 55, width * 0.15, y + 40);
      ctx.closePath();

      ctx.fill();
      ctx.stroke();

      // Water ripples
      ctx.strokeStyle = 'rgba(28,28,28,0.15)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 6; i++) {
        const rx = width * (0.2 + i * 0.12);
        const ry = y + 20 + Math.sin(i) * 8;
        ctx.beginPath();
        ctx.moveTo(rx - 12, ry);
        ctx.quadraticCurveTo(rx, ry - 3, rx + 12, ry);
        ctx.stroke();
      }

      ctx.restore();
    }

    // ─── Draw Rocks ────────────────────────────────
    function drawRock(x, y, w, h) {
      ctx.save();
      ctx.fillStyle = '#e0dbd0';
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.2;

      ctx.beginPath();
      ctx.moveTo(x - w / 2, y);
      ctx.quadraticCurveTo(x - w / 3, y - h, x, y - h * 0.9);
      ctx.quadraticCurveTo(x + w / 3, y - h * 1.1, x + w / 2, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Cross-hatching detail
      ctx.strokeStyle = 'rgba(28,28,28,0.15)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 3; i++) {
        const lx = x - w / 4 + i * (w / 4);
        ctx.beginPath();
        ctx.moveTo(lx, y - h * 0.3);
        ctx.lineTo(lx + 3, y - h * 0.7);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ─── Draw Ground Texture ───────────────────────
    function drawGroundTexture(y, w, h) {
      ctx.save();
      ctx.strokeStyle = 'rgba(28,28,28,0.08)';
      ctx.lineWidth = 0.6;

      for (let i = 0; i < 60; i++) {
        const gx = Math.random() * w;
        const gy = y + Math.random() * h;
        const glen = 4 + Math.random() * 8;
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(gx + glen * (Math.random() - 0.5), gy - glen);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ─── Main Draw Loop ────────────────────────────
    function draw() {
      const w = W();
      const h = H();
      time += 0.008;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Sky gradient (warm sunset)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h * 0.7);
      skyGrad.addColorStop(0, '#FAF9F6');
      skyGrad.addColorStop(0.5, '#f5efe4');
      skyGrad.addColorStop(0.8, '#f0e4cf');
      skyGrad.addColorStop(1, '#e8d5b5');
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Horizon glow
      const horizonGrad = ctx.createRadialGradient(w * 0.6, h * 0.55, 0, w * 0.6, h * 0.55, w * 0.5);
      horizonGrad.addColorStop(0, 'rgba(245, 200, 140, 0.3)');
      horizonGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, 0, w, h);

      // Far mountains
      drawMountainRange(h * 0.55, h * 0.12, '#e0dbd0', 1);
      drawMountainRange(h * 0.58, h * 0.08, '#d4cfc4', 1.5);

      // Clouds (animated drift)
      drawCloud(w * 0.25 + Math.sin(time * 0.3) * 15, h * 0.18, 80, 35);
      drawCloud(w * 0.6 + Math.sin(time * 0.25 + 1) * 20, h * 0.12, 100, 40);
      drawCloud(w * 0.85 + Math.sin(time * 0.35 + 2) * 10, h * 0.22, 60, 28);

      // Mid-ground hills
      ctx.fillStyle = '#e8e0d0';
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.65);
      ctx.quadraticCurveTo(w * 0.15, h * 0.55, w * 0.3, h * 0.6);
      ctx.quadraticCurveTo(w * 0.45, h * 0.66, w * 0.55, h * 0.58);
      ctx.quadraticCurveTo(w * 0.7, h * 0.52, w * 0.85, h * 0.6);
      ctx.quadraticCurveTo(w * 0.95, h * 0.65, w, h * 0.62);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // River
      drawRiver(h * 0.68, w);

      // Foreground terrain
      ctx.fillStyle = '#ece5d6';
      ctx.strokeStyle = '#1c1c1c';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.78);
      ctx.quadraticCurveTo(w * 0.1, h * 0.73, w * 0.2, h * 0.76);
      ctx.quadraticCurveTo(w * 0.35, h * 0.82, w * 0.5, h * 0.78);
      ctx.quadraticCurveTo(w * 0.65, h * 0.74, w * 0.8, h * 0.8);
      ctx.quadraticCurveTo(w * 0.9, h * 0.84, w, h * 0.78);
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Ground hatching texture
      drawGroundTexture(h * 0.75, w, h * 0.25);

      // Rocks
      drawRock(w * 0.18, h * 0.78, 30, 15);
      drawRock(w * 0.72, h * 0.8, 25, 12);
      drawRock(w * 0.45, h * 0.85, 20, 10);

      // Trees — far (small)
      const farTreePositions = [0.08, 0.15, 0.22, 0.78, 0.85, 0.92, 0.95];
      farTreePositions.forEach(t => {
        drawPineTree(w * t, h * 0.57, 0.6 + Math.sin(t * 10) * 0.15, false);
      });

      // Trees — mid
      const midTreePositions = [0.02, 0.06, 0.12, 0.32, 0.65, 0.88, 0.93, 0.97];
      midTreePositions.forEach(t => {
        drawPineTree(w * t, h * 0.65 + Math.sin(t * 7) * 8, 0.9 + Math.sin(t * 5) * 0.2, true);
      });

      // Trees — foreground (large)
      drawPineTree(w * 0.03, h * 0.76, 1.4, true);
      drawPineTree(w * 0.96, h * 0.74, 1.6, true);
      drawPineTree(w * 0.9, h * 0.78, 1.2, true);

      // Hot Air Balloon (animated float)
      const balloonX = w * 0.68 + Math.sin(time * 0.5) * 12;
      const balloonY = h * 0.32 + Math.sin(time * 0.7) * 8;
      drawBalloon(balloonX, balloonY, 1.1);

      // Sketch border frame lines (decorative)
      ctx.strokeStyle = 'rgba(28,28,28,0.06)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < 15; i++) {
        const sx = Math.random() * w;
        const sy = h * 0.5 + Math.random() * h * 0.5;
        sketchyLine(sx, sy, sx + 15 + Math.random() * 20, sy + (Math.random() - 0.5) * 5, 1);
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: 'none' }}
    />
  );
}
