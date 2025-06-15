
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
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
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </mesh>
  );
};

const AnimatedBox = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number | [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
    </mesh>
  );
};

const ParticleField = ({ count = 50 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
  }

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
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
      <pointsMaterial color="#8B0000" size={0.02} sizeAttenuation={true} />
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
            <AnimatedSphere position={[2, 1, 0]} color="#8B0000" scale={0.8} />
            <AnimatedSphere position={[-2, -1, -1]} color="#D2691E" scale={0.6} />
            <AnimatedBox position={[0, 2, -2]} color="#A0522D" scale={0.5} />
          </>
        );
      case 'blog':
        return (
          <>
            <ParticleField count={60} />
            <AnimatedBox position={[1, 0, 0]} color="#8B0000" scale={[1.2, 0.3, 0.1]} />
            <AnimatedBox position={[-1, 1, -1]} color="#D2691E" scale={[0.8, 0.2, 0.1]} />
            <AnimatedSphere position={[0, -1.5, 1]} color="#A0522D" scale={0.4} />
          </>
        );
      case 'papers':
        return (
          <>
            <ParticleField count={70} />
            <AnimatedBox position={[0, 0, 0]} color="#8B0000" scale={[1.5, 2, 0.1]} />
            <AnimatedBox position={[2, 1, -1]} color="#D2691E" scale={[1, 1.5, 0.1]} />
            <AnimatedSphere position={[-2, -0.5, 1]} color="#A0522D" scale={0.5} />
          </>
        );
      case 'projects':
        return (
          <>
            <ParticleField count={90} />
            <AnimatedSphere position={[1.5, 1, 0]} color="#8B0000" scale={0.7} />
            <AnimatedBox position={[-1, 0, -1]} color="#D2691E" scale={0.8} />
            <AnimatedSphere position={[0, -1, 1]} color="#A0522D" scale={0.6} />
            <AnimatedBox position={[2, -1.5, -0.5]} color="#8B0000" scale={0.4} />
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
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#D2691E" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#8B0000" />
      
      {getSceneElements()}
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
