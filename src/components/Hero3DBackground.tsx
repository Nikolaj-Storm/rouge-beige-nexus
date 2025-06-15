
import { Canvas } from "@react-three/fiber";
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
        <ambientLight intensity={1} />
        <IDCard3D position={[0, 0.65, 1.4]} scale={1.35} />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
