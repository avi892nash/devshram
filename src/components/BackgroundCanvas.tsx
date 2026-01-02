"use client";

import { useRef, useEffect } from 'react';
import defaultConfig from '../config/threegradient.json';

interface BackgroundCanvasConfig {
  dotRadius: number;
  dotSpacing: number;
  enableLightAnimation: boolean;
  lightAnimationSpeed: number;
  trailLengthPercent: number;
  trailPointCount: number;
  initialAnimationCount: number;
  colors: {
    dot: string;
    dotActive: string;
    background: string;
    backgroundGradientStart: string;
    backgroundGradientEnd: string;
  };
}

interface BackgroundCanvasProps {
  dotRadius?: number;
  dotSpacing?: number;
  enableLightAnimation?: boolean;
  lightAnimationSpeed?: number;
  trailLengthPercent?: number;
  trailPointCount?: number;
  initialAnimationCount?: number;
}

interface Dot {
  x: number;
  y: number;
  visible: boolean;
}

interface TrailPoint {
  progress: number;
}

interface Animation {
  curve: {
    p0: { x: number; y: number };
    p1: { x: number; y: number };
    p2: { x: number; y: number };
    p3: { x: number; y: number };
  };
  finalX: number;
  finalY: number;
  trailPoints: TrailPoint[];
  done?: boolean;
}

class CanvasGradientBackground {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private dots: Dot[][] = [];
  private animations: Animation[] = [];
  private animationId: number | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private isActive: boolean = true;

  constructor(
    private container: HTMLDivElement,
    private config: BackgroundCanvasConfig
  ) {
    this.canvas = document.createElement('canvas');
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = '-10';

    const ctx = this.canvas.getContext('2d');
    if (!ctx) throw new Error('Could not get 2D context');
    this.ctx = ctx;

    this.container.appendChild(this.canvas);
    this.setupCanvas();
    this.setupResizeObserver();
    this.startRandomAnimations();
  }

  private setupCanvas() {
    const oldDots = this.dots;
    this.canvas.width = this.container.clientWidth;
    this.canvas.height = this.container.clientHeight;

    // Draw background gradient
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, this.config.colors.backgroundGradientStart);
    gradient.addColorStop(1, this.config.colors.backgroundGradientEnd);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Create new dots array
    this.dots = [];
    for (let x = this.config.dotSpacing; x < this.canvas.width; x += this.config.dotSpacing) {
      const xIndex = Math.floor(x / this.config.dotSpacing) - 1;
      if (!this.dots[xIndex]) this.dots[xIndex] = [];

      for (let y = this.config.dotSpacing; y < this.canvas.height; y += this.config.dotSpacing) {
        const yIndex = Math.floor(y / this.config.dotSpacing) - 1;

        // Check if this dot existed before
        const oldDot = oldDots[xIndex]?.[yIndex];
        if (oldDot) {
          // Preserve existing dot state
          this.dots[xIndex][yIndex] = oldDot;
        } else {
          // Create new dot
          this.dots[xIndex][yIndex] = { x, y, visible: true };
        }
      }
    }

    this.drawAllDots();
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.isActive) return;
      requestAnimationFrame(() => {
        this.setupCanvas();
      });
    });
    this.resizeObserver.observe(this.container);
  }

  private getDot(x: number, y: number): Dot | null {
    const xIndex = Math.floor(x / this.config.dotSpacing) - 1;
    const yIndex = Math.floor(y / this.config.dotSpacing) - 1;
    return this.dots[xIndex]?.[yIndex] || null;
  }

  private drawDot(x: number, y: number, color?: string) {
    const finalColor = color || this.config.colors.dot;
    this.ctx.fillStyle = finalColor;
    this.ctx.beginPath();
    const radius = color === this.config.colors.background ? this.config.dotRadius + 2 : this.config.dotRadius;
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  private drawAllDots() {
    this.dots.forEach(column => {
      column.forEach(dot => {
        if (dot && dot.visible) this.drawDot(dot.x, dot.y);
      });
    });
  }

  private getAffectedGridKeys(x: number, y: number): string[] {
    const minX = x - this.config.dotSpacing;
    const maxX = x + this.config.dotSpacing;
    const minY = y - this.config.dotSpacing;
    const maxY = y + this.config.dotSpacing;

    const minCol = Math.floor(minX / this.config.dotSpacing);
    const maxCol = Math.ceil(maxX / this.config.dotSpacing);
    const minRow = Math.floor(minY / this.config.dotSpacing);
    const maxRow = Math.ceil(maxY / this.config.dotSpacing);

    const keys: string[] = [];

    for (let col = minCol; col <= maxCol; col++) {
      for (let row = minRow; row <= maxRow; row++) {
        const gridX = col * this.config.dotSpacing;
        const gridY = row * this.config.dotSpacing;
        keys.push(`${gridX},${gridY}`);
      }
    }

    return keys;
  }

  private generateBezierControls(start: { x: number; y: number }, end: { x: number; y: number }) {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const perpX = -dy / dist;
    const perpY = dx / dist;

    const offset1 = (Math.random() - 0.5) * dist * 0.8;
    const offset2 = (Math.random() - 0.5) * dist * 0.8;

    return {
      p0: start,
      p1: {
        x: start.x + dx * 0.25 + perpX * offset1,
        y: start.y + dy * 0.25 + perpY * offset1
      },
      p2: {
        x: start.x + dx * 0.75 + perpX * offset2,
        y: start.y + dy * 0.75 + perpY * offset2
      },
      p3: end
    };
  }

  private bezierPoint(
    p0: { x: number; y: number },
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    p3: { x: number; y: number },
    t: number
  ) {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;

    return {
      x: mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x,
      y: mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y
    };
  }

  private clearTrail(trailPoints: { x: number; y: number }[], affectedAreas: Set<string>) {
    if (trailPoints.length < 2) return;

    // Draw background gradient
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, this.config.colors.backgroundGradientStart);
    gradient.addColorStop(1, this.config.colors.backgroundGradientEnd);

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = this.config.dotRadius * 3.5;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.ctx.beginPath();
    this.ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

    for (let i = 1; i < trailPoints.length; i++) {
      this.ctx.lineTo(trailPoints[i].x, trailPoints[i].y);
    }

    this.ctx.stroke();

    trailPoints.forEach(point => {
      const keys = this.getAffectedGridKeys(point.x, point.y);
      keys.forEach(key => affectedAreas.add(key));
    });
  }

  private drawTrail(trailPoints: { x: number; y: number }[]) {
    if (trailPoints.length < 2) return;

    const gradient = this.ctx.createLinearGradient(
      trailPoints[0].x, trailPoints[0].y,
      trailPoints[trailPoints.length - 1].x, trailPoints[trailPoints.length - 1].y
    );

    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    this.ctx.strokeStyle = gradient;
    this.ctx.lineWidth = this.config.dotRadius * 3;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.ctx.beginPath();
    this.ctx.moveTo(trailPoints[0].x, trailPoints[0].y);

    for (let i = 1; i < trailPoints.length; i++) {
      this.ctx.lineTo(trailPoints[i].x, trailPoints[i].y);
    }

    this.ctx.stroke();
  }

  private animate = () => {
    if (!this.isActive) return;

    if (this.animations.length === 0) {
      this.animationId = requestAnimationFrame(this.animate);
      return;
    }

    const affectedAreas = new Set<string>();

    // PHASE 1: CLEAR OLD TRAILS AND DOTS
    this.animations.forEach(anim => {
      const activeTrailPoints = anim.trailPoints.filter(tp => tp.progress >= 0);

      if (activeTrailPoints.length > 0) {
        const trailPositions = activeTrailPoints.map(tp =>
          this.bezierPoint(anim.curve.p0, anim.curve.p1, anim.curve.p2, anim.curve.p3, Math.min(tp.progress, 1))
        );

        this.clearTrail(trailPositions, affectedAreas);

        const leadProgress = Math.min(anim.trailPoints[0].progress, 1);
        const leadPos = this.bezierPoint(anim.curve.p0, anim.curve.p1, anim.curve.p2, anim.curve.p3, leadProgress);
        this.drawDot(leadPos.x, leadPos.y, this.config.colors.background);

        const keys = this.getAffectedGridKeys(leadPos.x, leadPos.y);
        keys.forEach(key => affectedAreas.add(key));
      }
    });

    // PHASE 2: RESTORE ALL AFFECTED STATIONARY DOTS
    affectedAreas.forEach(key => {
      const [gridX, gridY] = key.split(',').map(Number);
      const dot = this.getDot(gridX, gridY);

      if (dot && dot.visible) {
        this.drawDot(gridX, gridY, this.config.colors.dot);
      }
    });

    // PHASE 3: UPDATE AND DRAW TRAIL POINTS
    this.animations.forEach(anim => {
      let allPointsComplete = true;

      anim.trailPoints.forEach(trailPoint => {
        trailPoint.progress += this.config.lightAnimationSpeed;

        if (trailPoint.progress <= 1) {
          allPointsComplete = false;
        }
      });

      // Check if lead dot has reached 80% progress
      const leadProgress = Math.min(anim.trailPoints[0].progress, 1);
      if (leadProgress >= 0.5) {
        // Check if target position is already in any animation
        const isTargetAlreadyAnimating = this.animations.some(a =>
          a !== anim && (a.curve.p0.x === anim.finalX && a.curve.p0.y === anim.finalY)
        );

        if (!isTargetAlreadyAnimating) {
          // Move target dot to random location
          this.moveTargetDotAway(anim.finalX, anim.finalY);
        }
      }

      const activeTrailPoints = anim.trailPoints.filter(tp => tp.progress >= 0);

      if (activeTrailPoints.length > 0) {
        const trailPositions = activeTrailPoints.map(tp =>
          this.bezierPoint(anim.curve.p0, anim.curve.p1, anim.curve.p2, anim.curve.p3, Math.min(tp.progress, 1))
        );

        this.drawTrail(trailPositions);

        const leadPos = this.bezierPoint(anim.curve.p0, anim.curve.p1, anim.curve.p2, anim.curve.p3, leadProgress);
        this.drawDot(leadPos.x, leadPos.y, this.config.colors.dotActive);
      }

      if (allPointsComplete) {
        const finalDot = this.getDot(anim.finalX, anim.finalY);
        if (finalDot) {
          finalDot.visible = true;
        }
        this.drawDot(anim.finalX, anim.finalY);
        anim.done = true;
      }
    });

    this.animations = this.animations.filter(a => !a.done);

    this.animationId = requestAnimationFrame(this.animate);
  }

  private moveDot(fromX: number, fromY: number, toX: number, toY: number) {
    const from = this.getDot(fromX, fromY);
    const to = this.getDot(toX, toY);

    if (!from || !to) return;

    const fromPos = { x: from.x, y: from.y };
    const toPos = { x: to.x, y: to.y };

    // SWAP dots in the array
    const fromXIndex = Math.floor(fromX / this.config.dotSpacing) - 1;
    const fromYIndex = Math.floor(fromY / this.config.dotSpacing) - 1;
    const toXIndex = Math.floor(toX / this.config.dotSpacing) - 1;
    const toYIndex = Math.floor(toY / this.config.dotSpacing) - 1;

    this.dots[fromXIndex][fromYIndex] = to;
    this.dots[toXIndex][toYIndex] = from;

    from.x = toX;
    from.y = toY;
    to.x = fromX;
    to.y = fromY;

    from.visible = false;
    to.visible = false;

    this.drawDot(fromPos.x, fromPos.y, this.config.colors.background);

    const curve = this.generateBezierControls(fromPos, toPos);

    const trailSpacing = this.config.trailLengthPercent / this.config.trailPointCount;

    const trailPoints: TrailPoint[] = [];
    for (let i = 0; i < this.config.trailPointCount; i++) {
      trailPoints.push({
        progress: -(i * trailSpacing)
      });
    }

    this.animations.push({
      curve,
      finalX: toX,
      finalY: toY,
      trailPoints
    });
  }

  private moveTargetDotAway(targetX: number, targetY: number) {
    const targetDot = this.getDot(targetX, targetY);
    if (!targetDot || targetDot.visible) return;

    // Find a random visible dot to swap with
    const nearbyDots = this.getRandomVisibleDots(5);
    if (nearbyDots.length > 0) {
      const randomNearby = nearbyDots[0];
      // Move the target away
      this.moveDot(targetX, targetY, randomNearby.x, randomNearby.y);
    }
  }

  private getRandomVisibleDots(count: number): { x: number; y: number }[] {
    const visibleDots: { x: number; y: number }[] = [];

    this.dots.forEach(column => {
      column.forEach(dot => {
        if (dot && dot.visible) {
          visibleDots.push({ x: dot.x, y: dot.y });
        }
      });
    });

    if (visibleDots.length < count) return [];

    const shuffled = [...visibleDots].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  private createRandomAnimation() {
    const randomDots = this.getRandomVisibleDots(2);
    if (randomDots.length === 2) {
      this.moveDot(randomDots[0].x, randomDots[0].y, randomDots[1].x, randomDots[1].y);
    }
  }

  private startRandomAnimations() {
    // Trigger initial animations based on config
    for (let i = 0; i < this.config.initialAnimationCount; i++) {
      this.createRandomAnimation();
    }
    this.animationId = requestAnimationFrame(this.animate);
  }

  public updateConfig(newConfig: Partial<BackgroundCanvasConfig>) {
    this.config = { ...this.config, ...newConfig };
    this.setupCanvas();
  }

  public destroy() {
    this.isActive = false;

    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }

    if (this.container && this.canvas) {
      try {
        this.container.removeChild(this.canvas);
      } catch {
        // Element might already be removed
      }
    }
  }
}

const BackgroundCanvas = ({
  dotRadius = defaultConfig.dotRadius,
  dotSpacing = defaultConfig.dotSpacing,
  enableLightAnimation = defaultConfig.enableLightAnimation,
  lightAnimationSpeed = defaultConfig.lightAnimationSpeed,
  trailLengthPercent = defaultConfig.trailLengthPercent,
  trailPointCount = defaultConfig.trailPointCount,
  initialAnimationCount = defaultConfig.initialAnimationCount
}: BackgroundCanvasProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasSystemRef = useRef<CanvasGradientBackground | null>(null);

  const config: BackgroundCanvasConfig = {
    dotRadius,
    dotSpacing,
    enableLightAnimation,
    lightAnimationSpeed,
    trailLengthPercent,
    trailPointCount,
    initialAnimationCount,
    colors: defaultConfig.colors
  };

  useEffect(() => {
    if (!mountRef.current) return;

    canvasSystemRef.current = new CanvasGradientBackground(mountRef.current, config);

    return () => {
      if (canvasSystemRef.current) {
        canvasSystemRef.current.destroy();
        canvasSystemRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: `linear-gradient(to bottom, ${config.colors.backgroundGradientStart} 0%, ${config.colors.backgroundGradientEnd} 100%)` }}
    />
  );
};

export default BackgroundCanvas;
