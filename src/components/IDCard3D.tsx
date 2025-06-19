
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface IDCard3DProps {
  position: [number, number, number];
  scale?: number;
}

export const IDCard3D = ({ position, scale = 1 }: IDCard3DProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // More visible floating: gentle hover on y, subtle horizontal sway, slow turning
      groupRef.current.position.x = position[0] + Math.sin(t * 0.5) * 0.06;
      groupRef.current.position.y = position[1] + Math.sin(t * 0.72 + 0.7) * 0.11;
      groupRef.current.position.z = position[2] + Math.cos(t * 0.44) * 0.06;
      groupRef.current.rotation.x = Math.sin(t * 0.32) * 0.09 + 0.01;
      groupRef.current.rotation.y = Math.cos(t * 0.18) * 0.16 + 0.15;
      groupRef.current.rotation.z = Math.cos(t * 0.13) * 0.04 - 0.04;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main card body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 1, 0.05]} />
        <meshPhongMaterial 
          color="#B6B0C6" 
          shininess={30}
          transparent
          opacity={0.97}
        />
      </mesh>
      
      {/* Photo area - darker rectangle */}
      <mesh position={[-0.4, 0.2, 0.026]}>
        <boxGeometry args={[0.4, 0.5, 0.01]} />
        <meshPhongMaterial color="#8A8596" />
      </mesh>
      
      {/* Photo texture */}
      <mesh position={[-0.4, 0.2, 0.031]}>
        <planeGeometry args={[0.35, 0.45]} />
        <meshBasicMaterial>
          <primitive 
            object={(() => {
              const loader = new THREE.TextureLoader();
              const textureUrl = '/rouge-beige-nexus/lovable-uploads/a0465d30-8f95-45fb-8af6-4278de99132f.png';
              return loader.load(textureUrl);
            })()}
            attach="map"
          />
        </meshBasicMaterial>
      </mesh>
      
      {/* Name text */}
      <Text
        position={[0.2, 0.3, 0.026]}
        fontSize={0.085}
        color="#2d2d2d"
        anchorX="left"
        anchorY="middle"
        maxWidth={0.92}
      >
        NIKOLAJ STORM
      </Text>
      <Text
        position={[0.2, 0.2, 0.026]}
        fontSize={0.085}
        color="#2d2d2d"
        anchorX="left"
        anchorY="middle"
        maxWidth={0.92}
      >
        PETERSEN
      </Text>
      {/* ID label */}
      <Text
        position={[0.2, 0.05, 0.026]}
        fontSize={0.054}
        color="#666"
        anchorX="left"
        anchorY="middle"
      >
        DRIVER LICENSE
      </Text>
      {/* ID Number */}
      <Text
        position={[0.2, -0.1, 0.026]}
        fontSize={0.043}
        color="#888"
        anchorX="left"
        anchorY="middle"
      >
        ID: DK-2024-NSP
      </Text>
      {/* Date */}
      <Text
        position={[0.2, -0.2, 0.026]}
        fontSize={0.043}
        color="#888"
        anchorX="left"
        anchorY="middle"
      >
        EXP: 12/2029
      </Text>
      {/* Subtle border */}
      <mesh position={[0, 0, 0.027]}>
        <boxGeometry args={[1.59, 0.98, 0.01]} />
        <meshBasicMaterial color="#9A94A8" transparent opacity={0.33} />
      </mesh>
      {/* Card "shine" highlight overlay */}
      <mesh position={[0, 0.28, 0.04]} rotation={[-0.05, 0.1, 0.03]}>
        <planeGeometry args={[1.2, 0.09]} />
        <meshBasicMaterial color="#fff" transparent opacity={0.16} />
      </mesh>
    </group>
  );
};

export default IDCard3D;
