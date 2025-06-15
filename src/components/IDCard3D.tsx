
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

interface IDCard3DProps {
  position: [number, number, number];
}

export const IDCard3D = ({ position }: IDCard3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const cardRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.x = position[0] + Math.sin(t * 0.4) * 0.2;
      groupRef.current.position.y = position[1] + Math.cos(t * 0.3) * 0.15;
      groupRef.current.position.z = position[2] + Math.sin(t * 0.5) * 0.1;
      
      // Gentle rotation like a card floating in space
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = Math.cos(t * 0.15) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main card body */}
      <mesh ref={cardRef} castShadow receiveShadow>
        <boxGeometry args={[1.6, 1, 0.05]} />
        <meshPhongMaterial 
          color="#B6B0C6" 
          shininess={30}
          transparent
          opacity={0.95}
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
              return loader.load('/lovable-uploads/a0465d30-8f95-45fb-8af6-4278de99132f.png');
            })()} 
            attach="map"
          />
        </meshBasicMaterial>
      </mesh>
      
      {/* Name text */}
      <Text
        position={[0.2, 0.3, 0.026]}
        fontSize={0.08}
        color="#2d2d2d"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
        maxWidth={0.8}
      >
        NIKOLAJ STORM
      </Text>
      
      <Text
        position={[0.2, 0.2, 0.026]}
        fontSize={0.08}
        color="#2d2d2d"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter-medium.woff"
        maxWidth={0.8}
      >
        PETERSEN
      </Text>
      
      {/* ID label */}
      <Text
        position={[0.2, 0.05, 0.026]}
        fontSize={0.05}
        color="#666"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        DRIVER LICENSE
      </Text>
      
      {/* ID Number */}
      <Text
        position={[0.2, -0.1, 0.026]}
        fontSize={0.04}
        color="#888"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        ID: DK-2024-NSP
      </Text>
      
      {/* Date */}
      <Text
        position={[0.2, -0.2, 0.026]}
        fontSize={0.04}
        color="#888"
        anchorX="left"
        anchorY="middle"
        font="/fonts/inter-regular.woff"
      >
        EXP: 12/2029
      </Text>
      
      {/* Subtle border */}
      <mesh position={[0, 0, 0.026]}>
        <boxGeometry args={[1.58, 0.98, 0.01]} />
        <meshBasicMaterial color="#9A94A8" transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

export default IDCard3D;
