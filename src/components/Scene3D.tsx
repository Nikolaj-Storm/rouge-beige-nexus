
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Scene3DProps {
  section: 'hero' | 'blog' | 'papers' | 'projects';
  scrollProgress: number;
}

const AnimatedSphere = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Organic rotation with varying speeds
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.5;
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = Math.cos(time * 0.4) * 0.3;
      
      // Lava lamp floating motion
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3 + Math.cos(time * 0.3) * 0.1;
      meshRef.current.position.x = position[0] + Math.cos(time * 0.4) * 0.1;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.6) * 0.1;
      
      // Pulsating scale effect
      const pulseScale = 1 + Math.sin(time * 0.8) * 0.2 + Math.cos(time * 1.2) * 0.1;
      meshRef.current.scale.setScalar(scale * pulseScale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.3} 
        roughness={0.4}
        transparent={true}
        opacity={0.8}
      />
    </mesh>
  );
};

const AnimatedBox = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number | [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      
      // Organic morphing rotation
      meshRef.current.rotation.x = Math.sin(time * 0.6) * 0.4;
      meshRef.current.rotation.y = time * 0.3;
      meshRef.current.rotation.z = Math.cos(time * 0.5) * 0.6;
      
      // Floating motion with multiple sine waves for organic feel
      meshRef.current.position.x = position[0] + Math.cos(time * 0.4) * 0.2 + Math.sin(time * 0.7) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.25 + Math.cos(time * 0.9) * 0.15;
      meshRef.current.position.z = position[2] + Math.sin(time * 0.5) * 0.15;
      
      // Morphing scale with different axes
      const scaleX = 1 + Math.sin(time * 1.1) * 0.3;
      const scaleY = 1 + Math.cos(time * 0.9) * 0.25;
      const scaleZ = 1 + Math.sin(time * 1.3) * 0.2;
      
      if (typeof scale === 'number') {
        meshRef.current.scale.set(scale * scaleX, scale * scaleY, scale * scaleZ);
      } else {
        meshRef.current.scale.set(scale[0] * scaleX, scale[1] * scaleY, scale[2] * scaleZ);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color={color} 
        metalness={0.4} 
        roughness={0.3}
        transparent={true}
        opacity={0.7}
      />
    </mesh>
  );
};

const ParticleField = ({ count = 50 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      // Slow organic rotation with pulsing
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      
      // Subtle pulsing effect
      const pulse = 1 + Math.sin(time * 0.5) * 0.1;
      pointsRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        color="#1e3a8a" 
        size={0.03} 
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
      />
    </points>
  );
};

export const Scene3D = ({ section, scrollProgress }: Scene3DProps) => {
  const getSceneElements = () => {
    switch (section) {
      case 'hero':
        return (
          <>
            <ParticleField count={80} />
            <AnimatedSphere position={[2, 1, 0]} color="#1e40af" scale={0.8} />
            <AnimatedSphere position={[-2, -1, -1]} color="#3b82f6" scale={0.6} />
            <AnimatedBox position={[0, 2, -2]} color="#2563eb" scale={0.5} />
          </>
        );
      case 'blog':
        return (
          <>
            <ParticleField count={60} />
            <AnimatedBox position={[1, 0, 0]} color="#1e40af" scale={[1.2, 0.3, 0.1]} />
            <AnimatedBox position={[-1, 1, -1]} color="#3b82f6" scale={[0.8, 0.2, 0.1]} />
            <AnimatedSphere position={[0, -1.5, 1]} color="#2563eb" scale={0.4} />
          </>
        );
      case 'papers':
        return (
          <>
            <ParticleField count={70} />
            <AnimatedBox position={[0, 0, 0]} color="#1e40af" scale={[1.5, 2, 0.1]} />
            <AnimatedBox position={[2, 1, -1]} color="#3b82f6" scale={[1, 1.5, 0.1]} />
            <AnimatedSphere position={[-2, -0.5, 1]} color="#2563eb" scale={0.5} />
          </>
        );
      case 'projects':
        return (
          <>
            <ParticleField count={90} />
            <AnimatedSphere position={[1.5, 1, 0]} color="#1e40af" scale={0.7} />
            <AnimatedBox position={[-1, 0, -1]} color="#3b82f6" scale={0.8} />
            <AnimatedSphere position={[0, -1, 1]} color="#2563eb" scale={0.6} />
            <AnimatedBox position={[2, -1.5, -0.5]} color="#1d4ed8" scale={0.4} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Canvas 
      camera={{ position: [0, 0, 5], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#60a5fa" />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#1e40af" />
      
      {getSceneElements()}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.3} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
