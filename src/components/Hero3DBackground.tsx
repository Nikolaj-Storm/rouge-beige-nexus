
import { Canvas } from "@react-three/fiber";
import IDCard3D from "./IDCard3D";

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
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#be4444" />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} color="#822b32" />
        
        {/* Use the exact same positioning and scale as in Scene3D */}
        <IDCard3D position={[0, 0.65, 1.4]} scale={1.35} />
        
        {/* Add the spotlight that was in Scene3D */}
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
