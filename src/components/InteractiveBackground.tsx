import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  z: number;
  baseZ: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface FloatingDevObject {
  type: 'laptop' | 'cube' | 'panel' | 'terminal' | 'server';
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  rotSpeedX: number;
  rotSpeedY: number;
  rotSpeedZ: number;
  floatSpeed: number;
  floatPhase: number;
  floatAmp: number;
  size: number;
  label?: string;
  codeSnippet?: string[];
  color: string;
  accent: string;
  vx: number;
  vy: number;
  vz: number;
}

interface ClickImpulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
  age: number;
  maxAge: number;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Responsive setup
    const isMobile = width < 768;
    const starCount = prefersReducedMotion ? 40 : (isMobile ? 70 : 160);

    // Mouse tracking with smooth spring
    const pointer = {
      targetX: 0,
      targetY: 0,
      x: 0,
      y: 0,
    };

    const onPointerMove = (e: MouseEvent) => {
      // Normalize to [-1, 1] relative to center
      pointer.targetX = (e.clientX - width / 2) / (width / 2);
      pointer.targetY = (e.clientY - height / 2) / (height / 2);
    };
    window.addEventListener('mousemove', onPointerMove, { passive: true });

    // Click ripples
    const impulses: ClickImpulse[] = [];
    const onPointerDown = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      // Add a subtle 3D spatial reaction
      impulses.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: Math.min(width, height) * 0.45,
        strength: 1.0,
        age: 0,
        maxAge: 45, // settles in ~0.75 seconds
      });

      // Give floating objects a gentle physical impulse away from click
      const clickNormX = (e.clientX - width / 2) / (width / 2);
      const clickNormY = (e.clientY - height / 2) / (height / 2);
      devObjects.forEach(obj => {
        const dx = obj.x - clickNormX * 300;
        const dy = obj.y - clickNormY * 200;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = Math.max(0, 1 - dist / 500) * 12;
        obj.vx += (dx / dist) * force;
        obj.vy += (dy / dist) * force;
        obj.vz += force * 0.5;
        obj.rotSpeedX += (Math.random() - 0.5) * 0.02;
        obj.rotSpeedY += (Math.random() - 0.5) * 0.02;
      });
    };
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // ── Generate 3D Starfield ──
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      const z = Math.random() * 800 + 100;
      stars.push({
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z,
        baseZ: z,
        size: Math.random() * 1.8 + 0.6,
        baseAlpha: Math.random() * 0.5 + 0.2,
        alpha: 0.5,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // ── Generate Floating 3D Developer Objects ──
    const devObjects: FloatingDevObject[] = [
      // Central Dev Workstation / Laptop
      {
        type: 'laptop',
        x: 0,
        y: -10,
        z: 420,
        baseX: 0,
        baseY: -10,
        baseZ: 420,
        rotX: 0.22,
        rotY: -0.15,
        rotZ: 0.02,
        rotSpeedX: 0.001,
        rotSpeedY: 0.002,
        rotSpeedZ: 0.0005,
        floatSpeed: 0.015,
        floatPhase: 0,
        floatAmp: 12,
        size: isMobile ? 55 : 85,
        color: '#3B82F6',
        accent: '#22C1DC',
        vx: 0,
        vy: 0,
        vz: 0,
      },
      // Floating Code Terminal / Panel (Left)
      {
        type: 'terminal',
        x: isMobile ? -140 : -320,
        y: -50,
        z: 500,
        baseX: isMobile ? -140 : -320,
        baseY: -50,
        baseZ: 500,
        rotX: 0.15,
        rotY: 0.35,
        rotZ: -0.05,
        rotSpeedX: 0.0008,
        rotSpeedY: 0.0012,
        rotSpeedZ: 0.0004,
        floatSpeed: 0.018,
        floatPhase: 1.5,
        floatAmp: 15,
        size: isMobile ? 45 : 75,
        label: 'Spring Boot API',
        codeSnippet: ['@RestController', 'getUsers() -> 200', 'mysql.pool: OK'],
        color: '#22C1DC',
        accent: '#3B82F6',
        vx: 0,
        vy: 0,
        vz: 0,
      },
      // Floating Server Node / Database Stack (Right)
      {
        type: 'server',
        x: isMobile ? 140 : 330,
        y: -30,
        z: 520,
        baseX: isMobile ? 140 : 330,
        baseY: -30,
        baseZ: 520,
        rotX: 0.1,
        rotY: -0.3,
        rotZ: 0.04,
        rotSpeedX: 0.001,
        rotSpeedY: -0.0015,
        rotSpeedZ: 0.0006,
        floatSpeed: 0.014,
        floatPhase: 3.2,
        floatAmp: 14,
        size: isMobile ? 40 : 65,
        label: 'MySQL · JDBC',
        color: '#F59E0B',
        accent: '#3B82F6',
        vx: 0,
        vy: 0,
        vz: 0,
      },
      // Floating Java Cube (Top Left)
      {
        type: 'cube',
        x: isMobile ? -110 : -240,
        y: -190,
        z: 600,
        baseX: isMobile ? -110 : -240,
        baseY: -190,
        baseZ: 600,
        rotX: 0.4,
        rotY: 0.5,
        rotZ: 0.2,
        rotSpeedX: 0.004,
        rotSpeedY: 0.006,
        rotSpeedZ: 0.002,
        floatSpeed: 0.02,
        floatPhase: 4.5,
        floatAmp: 18,
        size: isMobile ? 26 : 38,
        label: 'Java',
        color: '#E76F00',
        accent: '#3B82F6',
        vx: 0,
        vy: 0,
        vz: 0,
      },
      // Floating Docker / Container Cube (Top Right)
      {
        type: 'cube',
        x: isMobile ? 110 : 250,
        y: -170,
        z: 640,
        baseX: isMobile ? 110 : 250,
        baseY: -170,
        baseZ: 640,
        rotX: -0.3,
        rotY: -0.4,
        rotZ: 0.3,
        rotSpeedX: 0.005,
        rotSpeedY: -0.004,
        rotSpeedZ: 0.003,
        floatSpeed: 0.022,
        floatPhase: 2.1,
        floatAmp: 16,
        size: isMobile ? 24 : 36,
        label: 'Docker',
        color: '#2496ED',
        accent: '#22C1DC',
        vx: 0,
        vy: 0,
        vz: 0,
      },
      // Floating Tests / CI Verified Badge (Bottom center-right)
      {
        type: 'panel',
        x: isMobile ? 80 : 180,
        y: 130,
        z: 550,
        baseX: isMobile ? 80 : 180,
        baseY: 130,
        baseZ: 550,
        rotX: 0.2,
        rotY: -0.2,
        rotZ: 0.02,
        rotSpeedX: 0.001,
        rotSpeedY: 0.002,
        rotSpeedZ: 0.0005,
        floatSpeed: 0.017,
        floatPhase: 5.1,
        floatAmp: 10,
        size: isMobile ? 35 : 55,
        label: '266 Tests Passed',
        color: '#10B981',
        accent: '#3B82F6',
        vx: 0,
        vy: 0,
        vz: 0,
      },
    ];

    // Filter out some objects on mobile for top performance
    const activeObjects = isMobile ? devObjects.slice(0, 3) : devObjects;

    let frame = 0;

    // ── Main Render Loop ──
    const render = () => {
      frame++;

      // Smooth pointer lerp
      pointer.x += (pointer.targetX - pointer.x) * 0.06;
      pointer.y += (pointer.targetY - pointer.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      const isDark = theme === 'dark';

      // ── 1. Atmosphere Gradient ──
      const grad = ctx.createRadialGradient(
        width / 2 + pointer.x * 40,
        height * 0.45 + pointer.y * 30,
        40,
        width / 2,
        height * 0.5,
        Math.max(width, height) * 0.8
      );

      if (isDark) {
        grad.addColorStop(0, 'rgba(15, 23, 42, 0.4)'); // deep navy center glow
        grad.addColorStop(0.45, 'rgba(10, 14, 20, 0.65)');
        grad.addColorStop(1, 'rgba(8, 10, 13, 0.95)'); // charcoal near-black
      } else {
        grad.addColorStop(0, 'rgba(238, 242, 255, 0.4)');
        grad.addColorStop(0.5, 'rgba(241, 245, 249, 0.3)');
        grad.addColorStop(1, 'rgba(247, 248, 250, 0.7)');
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // ── 2. Perspective 3D Grid Floor toward bottom ──
      const fov = 350;
      const horizonY = height * 0.62 + pointer.y * 25;
      const gridColor = isDark ? 'rgba(34, 193, 220, 0.07)' : 'rgba(37, 99, 235, 0.05)';
      const gridCrossColor = isDark ? 'rgba(59, 130, 246, 0.05)' : 'rgba(15, 23, 42, 0.03)';

      ctx.save();
      ctx.beginPath();
      // Draw perspective floor lines converging to center horizon
      const vanishX = width / 2 + pointer.x * 60;
      const floorLines = isMobile ? 12 : 22;
      for (let i = -floorLines / 2; i <= floorLines / 2; i++) {
        const bottomX = width / 2 + i * (width / floorLines) * 2.2 + pointer.x * 30;
        ctx.moveTo(vanishX, horizonY);
        ctx.lineTo(bottomX, height + 40);
      }
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Horizontal depth scan lines on floor
      const hLines = 9;
      ctx.beginPath();
      for (let j = 1; j <= hLines; j++) {
        const t = (j / hLines);
        const y = horizonY + (height - horizonY) * (t * t);
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.strokeStyle = gridCrossColor;
      ctx.lineWidth = 0.9;
      ctx.stroke();
      ctx.restore();

      // ── 3. Render 3D Stars in Depth ──
      ctx.save();
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        if (!prefersReducedMotion) {
          s.pulsePhase += s.pulseSpeed;
          s.alpha = s.baseAlpha + Math.sin(s.pulsePhase) * 0.2;
        }

        // Parallax projection
        const depth = Math.max(20, s.z);
        const scale = fov / depth;
        const px = width / 2 + (s.x - pointer.x * 80) * scale;
        const py = height / 2 + (s.y - pointer.y * 60) * scale;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const drawSize = Math.max(0.5, s.size * scale);
          const starAlpha = Math.min(1, Math.max(0.05, s.alpha));
          const starColor = isDark
            ? `rgba(224, 242, 254, ${starAlpha})`
            : `rgba(59, 130, 246, ${starAlpha * 0.6})`;

          ctx.fillStyle = starColor;
          ctx.beginPath();
          ctx.arc(px, py, drawSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // ── 4. Process Click Ripples ──
      if (!prefersReducedMotion && impulses.length > 0) {
        ctx.save();
        for (let k = impulses.length - 1; k >= 0; k--) {
          const imp = impulses[k];
          imp.age++;
          const progress = imp.age / imp.maxAge;
          imp.radius = imp.maxRadius * Math.sin((progress * Math.PI) / 2);
          const alpha = (1 - progress) * 0.35;

          ctx.beginPath();
          ctx.arc(imp.x, imp.y, imp.radius, 0, Math.PI * 2);
          ctx.strokeStyle = isDark
            ? `rgba(34, 193, 220, ${alpha})`
            : `rgba(37, 99, 235, ${alpha * 0.8})`;
          ctx.lineWidth = 1.8 * (1 - progress);
          ctx.stroke();

          // Subtle second concentric wave
          if (imp.radius > 20) {
            ctx.beginPath();
            ctx.arc(imp.x, imp.y, imp.radius * 0.6, 0, Math.PI * 2);
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${alpha * 0.5})`
              : `rgba(99, 102, 241, ${alpha * 0.4})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          if (imp.age >= imp.maxAge) {
            impulses.splice(k, 1);
          }
        }
        ctx.restore();
      }

      // ── 5. Render 3D Developer Objects ──
      ctx.save();
      // Sort objects by depth for correct 3D occlusion
      activeObjects.sort((a, b) => b.z - a.z);

      for (let oIdx = 0; oIdx < activeObjects.length; oIdx++) {
        const obj = activeObjects[oIdx];

        if (!prefersReducedMotion) {
          // Floating oscillation
          obj.floatPhase += obj.floatSpeed;
          const floatOffset = Math.sin(obj.floatPhase) * obj.floatAmp;

          // Gentle rotation
          obj.rotX += obj.rotSpeedX;
          obj.rotY += obj.rotSpeedY;
          obj.rotZ += obj.rotSpeedZ;

          // Physics velocity damping from click impulse
          obj.vx *= 0.92;
          obj.vy *= 0.92;
          obj.vz *= 0.92;

          obj.x = obj.baseX + obj.vx;
          obj.y = obj.baseY + floatOffset + obj.vy;
          obj.z = obj.baseZ + obj.vz;
        }

        // 3D Perspective Projection with cursor parallax
        const effectiveZ = Math.max(120, obj.z);
        const objScale = fov / effectiveZ;
        const screenX = width / 2 + (obj.x - pointer.x * 120) * objScale;
        const screenY = height / 2 + (obj.y - pointer.y * 90) * objScale;
        const s = obj.size * objScale;

        // Render based on object type
        ctx.save();
        ctx.translate(screenX, screenY);
        ctx.rotate(obj.rotZ + pointer.x * 0.08);

        if (obj.type === 'laptop') {
          // ── Central 3D Developer Laptop ──
          const screenW = s * 1.7;
          const screenH = s * 1.1;

          // Ambient glow behind laptop
          const lapGlow = ctx.createRadialGradient(0, 0, 5, 0, 0, screenW);
          lapGlow.addColorStop(0, isDark ? 'rgba(59, 130, 246, 0.25)' : 'rgba(37, 99, 235, 0.15)');
          lapGlow.addColorStop(1, 'transparent');
          ctx.fillStyle = lapGlow;
          ctx.beginPath();
          ctx.arc(0, 0, screenW, 0, Math.PI * 2);
          ctx.fill();

          // Laptop Screen Bezel
          ctx.fillStyle = isDark ? '#111827' : '#E2E8F0';
          ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.5)' : 'rgba(37, 99, 235, 0.4)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(-screenW / 2, -screenH / 2 - s * 0.2, screenW, screenH, 6);
          ctx.fill();
          ctx.stroke();

          // Laptop Inner Code Display
          ctx.fillStyle = isDark ? '#080A0D' : '#0F172A';
          ctx.beginPath();
          ctx.roundRect(-screenW / 2 + 5, -screenH / 2 - s * 0.2 + 5, screenW - 10, screenH - 10, 4);
          ctx.fill();

          // Code syntax lines on screen
          const lineYStart = -screenH / 2 - s * 0.2 + 14;
          const codeLines = [
            { w: screenW * 0.55, c: '#3B82F6' },
            { w: screenW * 0.75, c: '#22C1DC' },
            { w: screenW * 0.4, c: '#E76F00' },
            { w: screenW * 0.65, c: '#10B981' },
          ];
          codeLines.forEach((cl, i) => {
            ctx.fillStyle = cl.c;
            ctx.beginPath();
            ctx.roundRect(-screenW / 2 + 12, lineYStart + i * 11, cl.w, 4, 2);
            ctx.fill();
          });

          // Laptop Keyboard Base with 3D perspective slant
          ctx.fillStyle = isDark ? '#1E293B' : '#CBD5E1';
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.15)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          const baseW = screenW * 1.15;
          const baseH = s * 0.45;
          const baseY = screenH / 2 - s * 0.15;
          ctx.moveTo(-baseW / 2, baseY + baseH);
          ctx.lineTo(-screenW / 2, baseY);
          ctx.lineTo(screenW / 2, baseY);
          ctx.lineTo(baseW / 2, baseY + baseH);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          // Trackpad
          ctx.fillStyle = isDark ? '#0F172A' : '#94A3B8';
          ctx.beginPath();
          ctx.roundRect(-s * 0.35, baseY + s * 0.12, s * 0.7, s * 0.22, 2);
          ctx.fill();

        } else if (obj.type === 'terminal' || obj.type === 'panel') {
          // ── Floating 3D Code Panel ──
          const panW = s * 1.8;
          const panH = s * 1.2;

          // Semi-transparent glass back
          ctx.fillStyle = isDark ? 'rgba(18, 23, 29, 0.85)' : 'rgba(255, 255, 255, 0.9)';
          ctx.strokeStyle = isDark ? 'rgba(34, 193, 220, 0.4)' : 'rgba(37, 99, 235, 0.3)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(-panW / 2, -panH / 2, panW, panH, 6);
          ctx.fill();
          ctx.stroke();

          // Window Title Bar with dots
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)';
          ctx.beginPath();
          ctx.roundRect(-panW / 2, -panH / 2, panW, 16, [6, 6, 0, 0]);
          ctx.fill();

          // 3 window buttons
          const dotColors = ['#EF4444', '#F59E0B', '#10B981'];
          dotColors.forEach((dc, i) => {
            ctx.fillStyle = dc;
            ctx.beginPath();
            ctx.arc(-panW / 2 + 10 + i * 9, -panH / 2 + 8, 2.5, 0, Math.PI * 2);
            ctx.fill();
          });

          // Label
          if (obj.label) {
            ctx.font = 'bold 9px monospace';
            ctx.fillStyle = obj.color;
            ctx.fillText(obj.label, -panW / 2 + 42, -panH / 2 + 11);
          }

          // Code lines or text inside panel
          if (obj.codeSnippet) {
            ctx.font = '8px monospace';
            obj.codeSnippet.forEach((line, li) => {
              ctx.fillStyle = li === 0 ? obj.accent : (isDark ? '#A8B0BA' : '#475569');
              ctx.fillText(line, -panW / 2 + 10, -panH / 2 + 30 + li * 13);
            });
          }

        } else if (obj.type === 'server') {
          // ── Floating Database / Server Tower ──
          const sW = s * 1.2;
          const sH = s * 1.5;

          // Server body
          ctx.fillStyle = isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(241, 245, 249, 0.9)';
          ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.roundRect(-sW / 2, -sH / 2, sW, sH, 6);
          ctx.fill();
          ctx.stroke();

          // Server rack slots
          const slots = 3;
          const slotH = (sH - 24) / slots;
          for (let si = 0; si < slots; si++) {
            const slotY = -sH / 2 + 8 + si * (slotH + 3);
            ctx.fillStyle = isDark ? '#080A0D' : '#E2E8F0';
            ctx.beginPath();
            ctx.roundRect(-sW / 2 + 6, slotY, sW - 12, slotH, 3);
            ctx.fill();

            // Blinking activity LEDs
            const ledColor = ((frame + si * 20) % 60 < 30) ? '#10B981' : '#F59E0B';
            ctx.fillStyle = ledColor;
            ctx.beginPath();
            ctx.arc(-sW / 2 + 14, slotY + slotH / 2, 2.5, 0, Math.PI * 2);
            ctx.fill();
          }

          if (obj.label) {
            ctx.font = 'bold 9px monospace';
            ctx.fillStyle = '#F59E0B';
            ctx.textAlign = 'center';
            ctx.fillText(obj.label, 0, sH / 2 + 14);
            ctx.textAlign = 'start';
          }

        } else if (obj.type === 'cube') {
          // ── Floating Isometric Tech Cube ──
          const half = s * 0.65;
          const topH = half * 0.55;

          // Top Face
          ctx.fillStyle = obj.color;
          ctx.beginPath();
          ctx.moveTo(0, -topH * 2);
          ctx.lineTo(half, -topH);
          ctx.lineTo(0, 0);
          ctx.lineTo(-half, -topH);
          ctx.closePath();
          ctx.fill();

          // Right Face
          ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.45)' : 'rgba(0, 0, 0, 0.15)';
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(half, -topH);
          ctx.lineTo(half, half);
          ctx.lineTo(0, half + topH);
          ctx.closePath();
          ctx.fill();

          // Left Face
          ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.4)';
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(-half, -topH);
          ctx.lineTo(-half, half);
          ctx.lineTo(0, half + topH);
          ctx.closePath();
          ctx.fill();

          // Edge highlight
          ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(15, 23, 42, 0.2)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Cube Tech Label
          if (obj.label) {
            ctx.font = 'bold 9px monospace';
            ctx.fillStyle = isDark ? '#FFFFFF' : '#111827';
            ctx.textAlign = 'center';
            ctx.fillText(obj.label, 0, half + topH + 13);
            ctx.textAlign = 'start';
          }
        }

        ctx.restore();
      }
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-300"
      aria-hidden="true"
    />
  );
};
