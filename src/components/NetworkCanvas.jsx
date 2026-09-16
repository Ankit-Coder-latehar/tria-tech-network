import React, { useEffect, useRef } from 'react';

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      active: false,
      radius: 170
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Global Hub Anchor Coordinates
    const HUB_POINTS = [
      { name: 'Silicon Valley (US West)', relX: 0.16, relY: 0.32, color: '#059669', pulse: 0 },
      { name: 'New York (US East)', relX: 0.30, relY: 0.28, color: '#10b981', pulse: 1.2 },
      { name: 'Austin (US Central)', relX: 0.22, relY: 0.44, color: '#047857', pulse: 2.1 },
      { name: 'Dubai DIFC (UAE)', relX: 0.74, relY: 0.36, color: '#10b981', pulse: 0.8 },
      { name: 'Dubai Silicon Oasis', relX: 0.80, relY: 0.45, color: '#059669', pulse: 2.8 },
      { name: 'Abu Dhabi Hub71', relX: 0.70, relY: 0.50, color: '#34d399', pulse: 1.6 }
    ];

    let nodes = [];
    const TOTAL_NODES = Math.min(Math.floor((width * height) / 18000), 55);

    class Node {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 2 + 1.2;
        this.baseColor = Math.random() > 0.4 ? '#10b981' : '#34d399';
        this.alpha = Math.random() * 0.35 + 0.15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.8;
            this.y -= (dy / dist) * force * 1.8;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor;
        ctx.globalAlpha = this.alpha;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(16, 185, 129, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < TOTAL_NODES; i++) {
        nodes.push(new Node());
      }
    }

    initNodes();

    let step = 0;

    function render() {
      ctx.clearRect(0, 0, width, height);
      step += 0.02;

      // Draw subtle connecting lines
      const maxDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].update();
        nodes[i].draw();

        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const lineAlpha = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw Transatlantic Conduit Arc (US East to Dubai DIFC)
      const usEast = { x: width * 0.30, y: height * 0.28 };
      const dubaiDifc = { x: width * 0.74, y: height * 0.36 };

      ctx.beginPath();
      ctx.moveTo(usEast.x, usEast.y);
      const cpX = (usEast.x + dubaiDifc.x) / 2;
      const cpY = Math.min(usEast.y, dubaiDifc.y) - 60;
      ctx.quadraticCurveTo(cpX, cpY, dubaiDifc.x, dubaiDifc.y);
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Traveling data packet along conduit
      const t = (Math.sin(step * 0.8) + 1) / 2;
      const packetX = (1 - t) * (1 - t) * usEast.x + 2 * (1 - t) * t * cpX + t * t * dubaiDifc.x;
      const packetY = (1 - t) * (1 - t) * usEast.y + 2 * (1 - t) * t * cpY + t * t * dubaiDifc.y;

      ctx.beginPath();
      ctx.arc(packetX, packetY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#00f5a0';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f5a0';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Global Hub Points
      HUB_POINTS.forEach((hub) => {
        const hx = hub.relX * width;
        const hy = hub.relY * height;

        hub.pulse += 0.03;
        const ringRadius = 6 + (Math.sin(hub.pulse) + 1) * 6;
        const ringAlpha = 0.4 - (ringRadius - 6) / 25;

        // Pulsing radar ring
        ctx.beginPath();
        ctx.arc(hx, hy, Math.max(0.1, ringRadius), 0, Math.PI * 2);
        ctx.strokeStyle = hub.color;
        ctx.globalAlpha = Math.max(0, ringAlpha);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1;

        // Hub Core
        ctx.beginPath();
        ctx.arc(hx, hy, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = hub.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = hub.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Hub Label (light & crisp)
        ctx.font = '500 10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#065f46';
        ctx.globalAlpha = 0.75;
        ctx.fillText(hub.name, hx + 8, hy + 3);
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    }

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ background: 'transparent' }}
    />
  );
}
