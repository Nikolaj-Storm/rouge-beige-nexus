
import { Canvas } from "@react-three/fiber";

export const Hero3DBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent",
          position: "absolute",
          inset: 0,
        }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#7F8CAA" />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
