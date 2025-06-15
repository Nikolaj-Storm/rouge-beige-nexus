
import { Canvas } from "@react-three/fiber";
import AnimatedBlob from "./AnimatedBlob";
import IDCard3D from "./IDCard3D";

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
        <ambientLight intensity={0.65} />
        <directionalLight position={[6, 8, 8]} intensity={0.8} color="#fffbe6" />
        {/* Main blobs (match hero section of Scene3D) */}
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
        {/* The prominent floating ID Card */}
        <IDCard3D position={[0, 0.65, 1.4]} scale={1.35} />
        {/* Gentle spotlight for the card */}
        <spotLight
          position={[0, 2.2, 2.2]}
          intensity={1.0}
          distance={7}
          angle={0.24}
          penumbra={0.6}
          color="#bea6ff"
          castShadow={false}
          target-position={[0, 0.65, 1.4]}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
