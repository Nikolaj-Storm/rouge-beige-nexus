
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, Box } from '@react-three/drei';
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
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color, scale }: { position: [number, number, number], color: string, scale: number | [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
      <Box ref={meshRef} position={position} scale={scale}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} />
      </Box>
    </Float>
  );
};

const ParticleField = ({ count = 100 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

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
      <pointsMaterial color="#8B0000" size={0.05} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
};

export const Scene3D = ({ section, scrollProgress }: Scene3DProps) => {
  const getSceneElements = () => {
    switch (section) {
      case 'hero':
        return (
          <>
            <ParticleField count={150} />
            <AnimatedSphere position={[2, 1, 0]} color="#8B0000" scale={0.8} />
            <AnimatedSphere position={[-2, -1, -1]} color="#D2691E" scale={0.6} />
            <AnimatedBox position={[0, 2, -2]} color="#A0522D" scale={0.5} />
          </>
        );
      case 'blog':
        return (
          <>
            <ParticleField count={80} />
            <AnimatedBox position={[1, 0, 0]} color="#8B0000" scale={[1.2, 0.3, 0.1]} />
            <AnimatedBox position={[-1, 1, -1]} color="#D2691E" scale={[0.8, 0.2, 0.1]} />
            <AnimatedSphere position={[0, -1.5, 1]} color="#A0522D" scale={0.4} />
          </>
        );
      case 'papers':
        return (
          <>
            <ParticleField count={120} />
            <AnimatedBox position={[0, 0, 0]} color="#8B0000" scale={[1.5, 2, 0.1]} />
            <AnimatedBox position={[2, 1, -1]} color="#D2691E" scale={[1, 1.5, 0.1]} />
            <AnimatedSphere position={[-2, -0.5, 1]} color="#A0522D" scale={0.5} />
          </>
        );
      case 'projects':
        return (
          <>
            <ParticleField count={100} />
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
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.3} />
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
