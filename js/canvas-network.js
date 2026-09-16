/**
 * TriaTechNetwork - Interactive Global Conduit Canvas
 * Visualizes cyber data & talent pipelines between the US and Dubai
 */
(function () {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  let mouse = {
    x: width / 2,
    y: height / 2,
    active: false,
    radius: 160
  };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initNodes();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Hub anchor coordinates for US & Dubai visual representation
  const HUB_POINTS = [
    { name: 'Silicon Valley (US West)', relX: 0.18, relY: 0.38, color: '#3b82f6', pulse: 0 },
    { name: 'New York (US East)', relX: 0.32, relY: 0.35, color: '#00d2ff', pulse: 1.2 },
    { name: 'Austin (US Central)', relX: 0.24, relY: 0.48, color: '#6366f1', pulse: 2.5 },
    { name: 'Dubai DIFC (UAE)', relX: 0.72, relY: 0.42, color: '#00f5a0', pulse: 0.8 },
    { name: 'Dubai Silicon Oasis', relX: 0.78, relY: 0.48, color: '#ffb703', pulse: 3.1 },
    { name: 'Abu Dhabi Hub71', relX: 0.68, relY: 0.52, color: '#00f5a0', pulse: 1.9 }
  ];

  let nodes = [];
  const TOTAL_NODES = Math.min(Math.floor((width * height) / 16000), 65);

  class Node {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1.2;
      this.baseColor = Math.random() > 0.5 ? '#00f5a0' : '#00d2ff';
      this.alpha = Math.random() * 0.5 + 0.25;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.active) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 2.2;
          this.y -= (dy / dist) * force * 2.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.baseColor;
      ctx.globalAlpha = this.alpha;
      ctx.shadowBlur = 8;
      ctx.shadowColor = this.baseColor;
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

  // Data pipeline packets flowing between US hubs & Dubai hubs
  class DataPacket {
    constructor(startHub, endHub) {
      this.startHub = startHub;
      this.endHub = endHub;
      this.progress = Math.random();
      this.speed = 0.0035 + Math.random() * 0.003;
      this.color = Math.random() > 0.5 ? '#00f5a0' : '#00d2ff';
    }

    update() {
      this.progress += this.speed;
      if (this.progress > 1) {
        this.progress = 0;
      }
    }

    draw() {
      const sx = this.startHub.relX * width;
      const sy = this.startHub.relY * height;
      const ex = this.endHub.relX * width;
      const ey = this.endHub.relY * height;

      // Curved bezier trajectory
      const cx = (sx + ex) / 2;
      const cy = Math.min(sy, ey) - 70;

      const t = this.progress;
      const invT = 1 - t;
      const px = invT * invT * sx + 2 * invT * t * cx + t * t * ex;
      const py = invT * invT * sy + 2 * invT * t * cy + t * t * ey;

      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  const packets = [
    new DataPacket(HUB_POINTS[0], HUB_POINTS[3]), // SV to Dubai DIFC
    new DataPacket(HUB_POINTS[1], HUB_POINTS[3]), // NY to Dubai DIFC
    new DataPacket(HUB_POINTS[2], HUB_POINTS[4]), // Austin to Silicon Oasis
    new DataPacket(HUB_POINTS[3], HUB_POINTS[0]), // Dubai to SV reverse
    new DataPacket(HUB_POINTS[4], HUB_POINTS[1])  // Dubai to NY reverse
  ];

  initNodes();

  let time = 0;
  function animate() {
    time += 0.02;
    ctx.clearRect(0, 0, width, height);

    // 1. Draw subtle connecting grid lines
    ctx.lineWidth = 0.75;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const alpha = (1 - dist / 110) * 0.18;
          ctx.strokeStyle = `rgba(0, 245, 160, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
      nodes[i].update();
      nodes[i].draw();
    }

    // 2. Draw Main High-Speed Beams between US and Dubai
    const usHub = HUB_POINTS[0];
    const dubaiHub = HUB_POINTS[3];
    const sx = usHub.relX * width;
    const sy = usHub.relY * height;
    const ex = dubaiHub.relX * width;
    const ey = dubaiHub.relY * height;
    const cx = (sx + ex) / 2;
    const cy = Math.min(sy, ey) - 70;

    // Glowing arc beam
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.quadraticCurveTo(cx, cy, ex, ey);
    ctx.strokeStyle = 'rgba(0, 245, 160, 0.12)';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);

    // Secondary beam
    const nyHub = HUB_POINTS[1];
    const nySx = nyHub.relX * width;
    const nySy = nyHub.relY * height;
    ctx.beginPath();
    ctx.moveTo(nySx, nySy);
    ctx.quadraticCurveTo((nySx + ex) / 2, Math.min(nySy, ey) - 50, ex, ey);
    ctx.strokeStyle = 'rgba(0, 210, 255, 0.1)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // 3. Draw Active Data Packets
    packets.forEach((p) => {
      p.update();
      p.draw();
    });

    // 4. Draw Anchor Hub Pulses
    HUB_POINTS.forEach((hub) => {
      const hx = hub.relX * width;
      const hy = hub.relY * height;
      const pulseSize = 4 + Math.sin(time + hub.pulse) * 2;

      ctx.beginPath();
      ctx.arc(hx, hy, pulseSize + 4, 0, Math.PI * 2);
      ctx.fillStyle = hub.color;
      ctx.globalAlpha = 0.15;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(hx, hy, 4, 0, Math.PI * 2);
      ctx.fillStyle = hub.color;
      ctx.globalAlpha = 0.85;
      ctx.shadowColor = hub.color;
      ctx.shadowBlur = 14;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
