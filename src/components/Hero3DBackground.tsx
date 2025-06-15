
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const SpinningBox = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2.2, 2.2, 2.2]} />
      <meshStandardMaterial color="#822b32" metalness={0.4} roughness={0.3} />
    </mesh>
  );
};

export const Hero3DBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6] }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent",
          position: "absolute",
          inset: 0,
        }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[6, 8, 8]} intensity={0.8} color="#fffbe6" />
        <SpinningBox />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
