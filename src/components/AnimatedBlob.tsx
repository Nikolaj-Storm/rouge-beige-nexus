
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface AnimatedBlobProps {
  position: [number, number, number];
  color: string;
  scale: number;
  speed?: number; // animation speed
  distort?: number; // intensity
}

export const AnimatedBlob = ({
  position,
  color,
  scale,
  speed = 2,
  distort = 0.6,
}: AnimatedBlobProps) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      // Organic floating
      mesh.current.position.x =
        position[0] + Math.sin(t * (0.6 + 0.1 * scale)) * 0.3 * scale;
      mesh.current.position.y =
        position[1] + Math.cos(t * (0.9 + 0.05 * scale)) * 0.3 * scale;
      mesh.current.position.z =
        position[2] + Math.sin(t * (0.43 + 0.07 * scale)) * 0.18 * scale;

      // Gentle rotation
      mesh.current.rotation.x = Math.cos(t * 0.2 * speed) * 0.7;
      mesh.current.rotation.y = Math.sin(t * 0.13 * speed) * 0.8;

      // Pulsate scale for blob
      const pulse = 1 + Math.sin(t * (speed * 0.3 + 0.1 * scale)) * 0.18;
      mesh.current.scale.setScalar(scale * pulse);
    }
  });

  return (
    <mesh ref={mesh} position={position} castShadow={false} receiveShadow={false}>
      {/* Icosahedron makes good wobbly blobs */}
      <icosahedronGeometry args={[1, 8]} />
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={speed}
        roughness={0.42}
        metalness={0.1}
        transparent
        opacity={0.88}
      />
    </mesh>
  );
};

export default AnimatedBlob;
