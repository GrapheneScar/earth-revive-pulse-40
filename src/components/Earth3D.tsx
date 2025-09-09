import { useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import * as THREE from "three";

interface EarthProps {
  size?: 'small' | 'medium' | 'large' | 'intro';
  autoRotate?: boolean;
  className?: string;
}

const Earth3D = ({ size = 'large', autoRotate = true, className = '' }: EarthProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    earth: THREE.Mesh;
    clouds: THREE.Mesh;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Get dimensions based on size
    const getDimensions = () => {
      const container = mountRef.current!;
      const rect = container.getBoundingClientRect();
      
      switch (size) {
        case 'small':
          return { width: Math.min(rect.width, 300), height: Math.min(rect.height, 300) };
        case 'medium':
          return { width: Math.min(rect.width, 500), height: Math.min(rect.height, 500) };
        case 'intro':
          return { width: Math.min(rect.width, 400), height: Math.min(rect.height, 400) };
        case 'large':
        default:
          return { width: rect.width, height: Math.min(rect.height, 600) };
      }
    };

    const { width, height } = getDimensions();

    // Scene + Camera + Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // 🌍 Earth Geometry + Texture
    const earthRadius = size === 'small' ? 1 : size === 'medium' ? 1.5 : 2;
    const geometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    
    const texture = textureLoader.load(
      "https://raw.githubusercontent.com/rajiv-ranjan/3D-Earth-using-Three.js/master/images/earthmap1k.jpg"
    );
    const material = new THREE.MeshPhongMaterial({ map: texture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // ☁️ Clouds (optional)
    const cloudGeometry = new THREE.SphereGeometry(earthRadius + 0.05, 64, 64);
    const cloudTexture = textureLoader.load(
      "https://raw.githubusercontent.com/rajiv-ranjan/3D-Earth-using-Three.js/master/images/earthcloudmap.jpg"
    );
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);

    // ✨ Lighting
    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Camera position
    camera.position.z = size === 'small' ? 3 : size === 'medium' ? 4 : 5;

    // Store references
    sceneRef.current = { scene, camera, renderer, earth, clouds, animationId: 0 };

    // 🌍 Animation loop
    const animate = () => {
      if (!sceneRef.current) return;
      
      sceneRef.current.animationId = requestAnimationFrame(animate);
      
      if (autoRotate) {
        sceneRef.current.earth.rotation.y += 0.002;
        sceneRef.current.clouds.rotation.y += 0.001;
      }
      
      sceneRef.current.renderer.render(sceneRef.current.scene, sceneRef.current.camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!sceneRef.current || !mountRef.current) return;
      
      const { width: newWidth, height: newHeight } = getDimensions();
      sceneRef.current.camera.aspect = newWidth / newHeight;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
        
        sceneRef.current.renderer.dispose();
        sceneRef.current = null;
      }
    };
  }, [size, autoRotate]);

  const getContainerHeight = () => {
    switch (size) {
      case 'small': return 'h-[300px]';
      case 'medium': return 'h-[500px]';
      case 'intro': return 'h-[400px]';
      case 'large':
      default: return 'h-[600px]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`w-full ${getContainerHeight()} relative ${className}`}
    >
      <div 
        ref={mountRef} 
        className="w-full h-full flex items-center justify-center"
      />
      
      {/* Overlay gradient for better integration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none rounded-lg" />
    </motion.div>
  );
};

export default Earth3D;