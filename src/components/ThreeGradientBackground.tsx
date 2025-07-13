"use client";

import { useRef } from 'react';
import * as THREE from 'three';
import defaultConfig from '../config/threegradient.json';

interface ThreeGradientBackgroundConfig {
  dotRadius: number;
  dotSpacing: number;
  enableLightAnimation: boolean;
  lightAnimationSpeed: number;
  lightAnimationInterval: number;
  lightBrightness: number;
  colors: {
    dot: string;
    light: string;
    lightBall: string;
    lightEmissive: string;
    ambientLight: string;
    trailParticle: string;
    backgroundGradientStart: string;
    backgroundGradientEnd: string;
  };
}

interface ThreeGradientBackgroundProps {
  dotRadius?: number;
  dotSpacing?: number;
  enableLightAnimation?: boolean;
  lightAnimationSpeed?: number;
  lightAnimationInterval?: number;
  lightBrightness?: number;
}

interface DotPosition {
  x: number;
  y: number;
  z: number;
}

interface AnimatedLight {
  id: string;
  startDot: DotPosition;
  endDot: DotPosition;
  controlPoint1: DotPosition;
  controlPoint2: DotPosition;
  light: THREE.PointLight;
  lightBall: THREE.Mesh;
  progress: number;
  trailParticles: THREE.Mesh[];
  pathOpacity: number;
  speed: number;
  intensity: number;
  pathPoints: THREE.Vector3[];
  visibleSegments: number;
  curve: THREE.CubicBezierCurve3;
}

class WebGLGradientBackground {
  private renderer: THREE.WebGLRenderer | null = null;
  private scene: THREE.Scene | null = null;
  private camera: THREE.OrthographicCamera | null = null;
  private animationId: number | null = null;
  private dotPositions: DotPosition[] = [];
  private animatedLights: AnimatedLight[] = [];
  private lastLightTime: number = 0;
  private resizeObserver: ResizeObserver | null = null;
  private isActive: boolean = true;
  private currentWidth: number = 0;
  private currentHeight: number = 0;

  constructor(
    private container: HTMLDivElement,
    private config: ThreeGradientBackgroundConfig
  ) {
    this.initialize();
  }

  private initialize() {
    this.setupScene();
    this.setupResizeObserver();
    this.startAnimationLoop();
  }

  private setupScene() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    if (width === this.currentWidth && height === this.currentHeight && this.renderer) {
      return;
    }

    this.currentWidth = width;
    this.currentHeight = height;

    // Create renderer
    if (!this.renderer) {
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(this.renderer.domElement);
    } else {
      this.renderer.setSize(width, height);
    }

    // Create scene
    if (!this.scene) {
      this.scene = new THREE.Scene();
    } else {
      this.disposeScene();
      this.scene.clear();
      this.animatedLights = [];
    }

    // Create camera
    if (!this.camera) {
      this.camera = new THREE.OrthographicCamera(
        -width / 2,
        width / 2,
        height / 2,
        -height / 2,
        1,
        1000
      );
      this.camera.position.set(0, 0, 100);
      this.camera.lookAt(0, 0, 0);
    } else {
      this.camera.left = -width / 2;
      this.camera.right = width / 2;
      this.camera.top = height / 2;
      this.camera.bottom = -height / 2;
      this.camera.updateProjectionMatrix();
    }

    // Create dots grid
    this.createDotGrid(width, height);

    // Reset animation timing
    this.lastLightTime = performance.now();
  }

  private setupResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.isActive) return;
      requestAnimationFrame(() => {
        this.setupScene();
      });
    });
    this.resizeObserver.observe(this.container);
  }

  private createDotGrid(width: number, height: number) {
    if (!this.scene) return;

    const cols = Math.ceil(width / this.config.dotSpacing) + 4;
    const rows = Math.ceil(height / this.config.dotSpacing) + 4;
    
    const startX = -(cols - 1) * this.config.dotSpacing / 2;
    const startY = -(rows - 1) * this.config.dotSpacing / 2;
    
    const dotGeometry = new THREE.CircleGeometry(this.config.dotRadius, 8);
    const dotMaterial = new THREE.MeshLambertMaterial({ 
      color: parseInt(this.config.colors.dot),
      transparent: true,
      opacity: 0.4
    });
    
    this.dotPositions = [];
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const dot = new THREE.Mesh(dotGeometry, dotMaterial);
        
        const posX = startX + col * this.config.dotSpacing;
        const posY = startY + row * this.config.dotSpacing;
        const posZ = 0;
        
        dot.position.set(posX, posY, posZ);
        this.scene.add(dot);
        
        this.dotPositions.push({ x: posX, y: posY, z: posZ });
      }
    }
    
    const ambientLight = new THREE.AmbientLight(parseInt(this.config.colors.ambientLight), 0.8);
    this.scene.add(ambientLight);
  }

  private createBezierCurve(start: DotPosition, end: DotPosition): [DotPosition, DotPosition] {
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    
    const distance = Math.sqrt(
      Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
    );
    
    const offset = distance * 0.3;
    const angle1 = Math.random() * Math.PI * 2;
    const angle2 = angle1 + Math.PI;
    
    const controlPoint1: DotPosition = {
      x: midX + Math.cos(angle1) * offset,
      y: midY + Math.sin(angle1) * offset,
      z: 0
    };
    
    const controlPoint2: DotPosition = {
      x: midX + Math.cos(angle2) * offset,
      y: midY + Math.sin(angle2) * offset,
      z: 0
    };
    
    return [controlPoint1, controlPoint2];
  }

  private createTrailSystem(start: DotPosition, end: DotPosition, cp1: DotPosition, cp2: DotPosition): [THREE.Vector3[], THREE.CubicBezierCurve3] {
    const curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(start.x, start.y, start.z),
      new THREE.Vector3(cp1.x, cp1.y, cp1.z),
      new THREE.Vector3(cp2.x, cp2.y, cp2.z),
      new THREE.Vector3(end.x, end.y, end.z)
    );
    
    const points = curve.getPoints(100);
    return [points, curve];
  }

  private getBezierPoint(t: number, start: DotPosition, cp1: DotPosition, cp2: DotPosition, end: DotPosition): DotPosition {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;
    
    return {
      x: mt3 * start.x + 3 * mt2 * t * cp1.x + 3 * mt * t2 * cp2.x + t3 * end.x,
      y: mt3 * start.y + 3 * mt2 * t * cp1.y + 3 * mt * t2 * cp2.y + t3 * end.y,
      z: mt3 * start.z + 3 * mt2 * t * cp1.z + 3 * mt * t2 * cp2.z + t3 * end.z
    };
  }

  private createRandomLight() {
    if (!this.scene || this.dotPositions.length < 2) return;
    
    const startIndex = Math.floor(Math.random() * this.dotPositions.length);
    let endIndex = Math.floor(Math.random() * this.dotPositions.length);
    
    while (endIndex === startIndex) {
      endIndex = Math.floor(Math.random() * this.dotPositions.length);
    }
    
    const startDot = this.dotPositions[startIndex];
    const endDot = this.dotPositions[endIndex];
    const [controlPoint1, controlPoint2] = this.createBezierCurve(startDot, endDot);
    
    const light = new THREE.PointLight(parseInt(this.config.colors.light), this.config.lightBrightness, 300);
    light.position.set(startDot.x, startDot.y, startDot.z + 5);
    this.scene.add(light);
    
    // Create visible light ball
    const lightBallGeometry = new THREE.SphereGeometry(this.config.dotRadius * 2, 16, 16);
    const lightBallMaterial = new THREE.MeshStandardMaterial({ 
      color: parseInt(this.config.colors.lightBall),
      transparent: true,
      opacity: 0.9,
      emissive: parseInt(this.config.colors.lightEmissive),
      emissiveIntensity: 0.5
    });
    const lightBall = new THREE.Mesh(lightBallGeometry, lightBallMaterial);
    lightBall.position.set(startDot.x, startDot.y, startDot.z + 2);
    this.scene.add(lightBall);
    
    const [pathPoints, curve] = this.createTrailSystem(startDot, endDot, controlPoint1, controlPoint2);
    
    const intensity = 0.3 + Math.random() * 0.7;
    
    const animatedLight: AnimatedLight = {
      id: Math.random().toString(36).substr(2, 9),
      startDot,
      endDot,
      controlPoint1,
      controlPoint2,
      light,
      lightBall,
      progress: 0,
      trailParticles: [],
      pathOpacity: intensity,
      speed: this.config.lightAnimationSpeed,
      intensity,
      pathPoints,
      visibleSegments: 0,
      curve
    };
    
    this.animatedLights.push(animatedLight);
  }

  private updateLights() {
    if (!this.scene) return;

    this.animatedLights = this.animatedLights.filter(animatedLight => {
      animatedLight.progress += animatedLight.speed;
      
      if (animatedLight.progress <= 1) {
        const currentPos = this.getBezierPoint(
          animatedLight.progress,
          animatedLight.startDot,
          animatedLight.controlPoint1,
          animatedLight.controlPoint2,
          animatedLight.endDot
        );
        
        // Update light position
        animatedLight.light.position.set(currentPos.x, currentPos.y, currentPos.z + 5);
        
        // Update light ball position
        animatedLight.lightBall.position.set(currentPos.x, currentPos.y, currentPos.z + 2);
        
        // Create trailing effect with particles
        const trailLength = 200;
        const currentIndex = Math.floor(animatedLight.progress * animatedLight.pathPoints.length);
        
        // Add new trail particle at current position
        if (currentIndex > 0 && animatedLight.progress > 0.01) {
          const trailGeometry = new THREE.SphereGeometry(this.config.dotRadius * 0.8, 8, 8);
          const trailMaterial = new THREE.MeshBasicMaterial({ 
            color: parseInt(this.config.colors.trailParticle),
            transparent: true,
            opacity: animatedLight.intensity * 0.8
          });
          const trailParticle = new THREE.Mesh(trailGeometry, trailMaterial);
          trailParticle.position.copy(new THREE.Vector3(currentPos.x, currentPos.y, currentPos.z));
          this.scene!.add(trailParticle);
          
          animatedLight.trailParticles.push(trailParticle);
        }
        
        // Update existing trail particles with fading effect
        animatedLight.trailParticles.forEach((particle, index) => {
          const age = animatedLight.trailParticles.length - index;
          const fadeRatio = Math.max(0, 1 - (age / trailLength));
          const material = particle.material as THREE.MeshBasicMaterial;
          material.opacity = animatedLight.intensity * fadeRatio * 0.8;
        });
        
        // Remove old trail particles
        if (animatedLight.trailParticles.length > trailLength) {
          const oldParticles = animatedLight.trailParticles.splice(0, animatedLight.trailParticles.length - trailLength);
          oldParticles.forEach(particle => {
            this.scene!.remove(particle);
            particle.geometry.dispose();
            (particle.material as THREE.Material).dispose();
          });
        }
        
        return true;
      } else {
        // Light finished, start fading trail particles
        const fadeSpeed = 0.02 * (1 / animatedLight.intensity);
        animatedLight.pathOpacity -= fadeSpeed;
        
        // Fade all trail particles
        animatedLight.trailParticles.forEach(particle => {
          const material = particle.material as THREE.MeshBasicMaterial;
          material.opacity = Math.max(0, material.opacity - fadeSpeed);
        });
        
        // Remove trail particles that are completely faded
        animatedLight.trailParticles = animatedLight.trailParticles.filter(particle => {
          const material = particle.material as THREE.MeshBasicMaterial;
          if (material.opacity <= 0) {
            this.scene!.remove(particle);
            particle.geometry.dispose();
            material.dispose();
            return false;
          }
          return true;
        });
        
        if (animatedLight.pathOpacity <= 0 && animatedLight.trailParticles.length === 0) {
          // Remove light and light ball when everything is faded
          this.scene!.remove(animatedLight.light);
          this.scene!.remove(animatedLight.lightBall);
          animatedLight.lightBall.geometry.dispose();
          (animatedLight.lightBall.material as THREE.Material).dispose();
          return false;
        }
        
        // Remove light and light ball but keep fading trail
        if (this.scene!.getObjectById(animatedLight.light.id)) {
          this.scene!.remove(animatedLight.light);
        }
        if (this.scene!.getObjectById(animatedLight.lightBall.id)) {
          this.scene!.remove(animatedLight.lightBall);
        }
        return true;
      }
    });
  }

  private startAnimationLoop() {
    const animate = (currentTime: number) => {
      if (!this.isActive || !this.scene || !this.camera || !this.renderer) return;
      
      // Create new lights periodically
      if (this.config.enableLightAnimation && currentTime - this.lastLightTime > this.config.lightAnimationInterval) {
        this.createRandomLight();
        this.lastLightTime = currentTime;
      }
      
      // Update existing lights
      if (this.config.enableLightAnimation) {
        this.updateLights();
      }
      
      this.renderer.render(this.scene, this.camera);
      this.animationId = requestAnimationFrame(animate);
    };

    this.animationId = requestAnimationFrame(animate);
  }

  private disposeScene() {
    if (!this.scene) return;
    
    this.scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        if (object.geometry) {
          object.geometry.dispose();
        }
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      }
    });
  }

  public updateConfig(newConfig: Partial<typeof this.config>) {
    this.config = { ...this.config, ...newConfig };
    this.setupScene();
  }

  public destroy() {
    this.isActive = false;
    
    // Cancel animation frame
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    // Disconnect resize observer
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    
    // Clean up animated lights
    this.animatedLights.forEach(animatedLight => {
      if (this.scene) {
        this.scene.remove(animatedLight.light);
        this.scene.remove(animatedLight.lightBall);
        // Clean up trail particles
        animatedLight.trailParticles.forEach(particle => {
          this.scene!.remove(particle);
          particle.geometry.dispose();
          (particle.material as THREE.Material).dispose();
        });
      }
      animatedLight.lightBall.geometry.dispose();
      (animatedLight.lightBall.material as THREE.Material).dispose();
    });
    this.animatedLights = [];
    
    // Dispose of scene objects
    if (this.scene) {
      this.disposeScene();
    }
    
    // Remove renderer DOM element
    if (this.container && this.renderer?.domElement) {
      try {
        this.container.removeChild(this.renderer.domElement);
      } catch {
        // Element might already be removed
      }
    }
    
    // Dispose of renderer
    if (this.renderer) {
      this.renderer.dispose();
    }
    
    // Clear references
    this.renderer = null;
    this.scene = null;
    this.camera = null;
  }
}

const ThreeGradientBackground = ({ 
  dotRadius = defaultConfig.dotRadius, 
  dotSpacing = defaultConfig.dotSpacing, 
  enableLightAnimation = defaultConfig.enableLightAnimation,
  lightAnimationSpeed = defaultConfig.lightAnimationSpeed,
  lightAnimationInterval = defaultConfig.lightAnimationInterval,
  lightBrightness = defaultConfig.lightBrightness
}: ThreeGradientBackgroundProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const webglSystemRef = useRef<WebGLGradientBackground | null>(null);

  // Create config object from JSON defaults and props
  const config: ThreeGradientBackgroundConfig = {
    dotRadius,
    dotSpacing,
    enableLightAnimation,
    lightAnimationSpeed,
    lightAnimationInterval,
    lightBrightness,
    colors: defaultConfig.colors
  };

  // Initialize WebGL system immediately when component mounts
  const initializeWebGL = () => {
    if (!mountRef.current || webglSystemRef.current) return;

    webglSystemRef.current = new WebGLGradientBackground(mountRef.current, config);
  };

  // Update config when props change
  const updateConfig = () => {
    if (webglSystemRef.current) {
      webglSystemRef.current.updateConfig(config);
    }
  };

  return (
    <div 
      ref={(ref) => {
        mountRef.current = ref;
        if (ref) {
          initializeWebGL();
          updateConfig();
        } else if (webglSystemRef.current) {
          webglSystemRef.current.destroy();
          webglSystemRef.current = null;
        }
      }}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: `linear-gradient(to bottom, ${config.colors.backgroundGradientStart} 0%, ${config.colors.backgroundGradientEnd} 100%)` }}
    />
  );
};

export default ThreeGradientBackground; 