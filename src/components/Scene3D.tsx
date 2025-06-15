import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import AnimatedBlob from "./AnimatedBlob";

interface Scene3DProps {
  section: 'hero' | 'blog' | 'papers' | 'projects';
  scrollProgress: number;
}

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
        color="#822b32" // A strong bordeaux/dark red
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
      case "hero":
        return (
          <>
            <ParticleField count={80} />
            <AnimatedBlob
              position={[2, 1, 0]}
              color="#822b32"
              scale={0.8}
              speed={2.5}
              distort={0.7}
            />
            <AnimatedBlob
              position={[-2, -1, -1]}
              color="#be4444"
              scale={0.66}
              speed={2.1}
              distort={0.9}
            />
            <AnimatedBlob
              position={[0.2, 2, -2]}
              color="#ab2346"
              scale={0.47}
              speed={2.9}
              distort={1.0}
            />
          </>
        );
      case "blog":
        return (
          <>
            <ParticleField count={60} />
            <AnimatedBlob
              position={[1, 0, 0]}
              color="#822b32"
              scale={1.2}
              speed={2.2}
              distort={0.82}
            />
            <AnimatedBlob
              position={[-1, 1, -1]}
              color="#be4444"
              scale={0.82}
              speed={2.1}
              distort={1.1}
            />
            <AnimatedBlob
              position={[0, -1.5, 1]}
              color="#ab2346"
              scale={0.49}
              speed={1.8}
              distort={1.05}
            />
          </>
        );
      case "papers":
        return (
          <>
            <ParticleField count={70} />
            <AnimatedBlob
              position={[0, 0, 0]}
              color="#822b32"
              scale={1.6}
              speed={2.5}
              distort={0.63}
            />
            <AnimatedBlob
              position={[2, 1, -1]}
              color="#be4444"
              scale={1}
              speed={2.7}
              distort={1.04}
            />
            <AnimatedBlob
              position={[-2, -0.5, 1]}
              color="#ab2346"
              scale={0.57}
              speed={2.3}
              distort={1.25}
            />
          </>
        );
      case "projects":
        return (
          <>
            <ParticleField count={90} />
            <AnimatedBlob
              position={[1.5, 1, 0]}
              color="#822b32"
              scale={0.7}
              speed={2.35}
              distort={0.8}
            />
            <AnimatedBlob
              position={[-1, 0, -1]}
              color="#be4444"
              scale={0.82}
              speed={2.3}
              distort={0.98}
            />
            <AnimatedBlob
              position={[0, -1, 1]}
              color="#ab2346"
              scale={0.62}
              speed={2.8}
              distort={1.1}
            />
            <AnimatedBlob
              position={[2, -1.5, -0.5]}
              color="#630f19"
              scale={0.45}
              speed={2.6}
              distort={1.2}
            />
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
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#be4444" />
      <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#822b32" />
      
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
