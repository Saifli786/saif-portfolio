"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, scale = 1, speed = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.15;
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.6}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
}

function GeometryAccent({ position, scale = 1 }: {
  position: [number, number, number];
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.07;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.5} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 40]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#991b1b"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.35}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 80;
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const crimsonColor = new THREE.Color("#dc2626");
    const dimColor = new THREE.Color("#3f0000");

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;

      const c = Math.random() > 0.7 ? crimsonColor : dimColor;
      colors[i * 3]     = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  const ref = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ background: "transparent" }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} color="#dc2626" intensity={2} distance={20} />
      <pointLight position={[-5, -3, 3]} color="#450a0a" intensity={1.5} distance={15} />
      <pointLight position={[0, 0, 6]} color="#ffffff" intensity={0.3} distance={10} />

      {/* Main glowing orbs */}
      <FloatingOrb position={[4, 1, -2]} color="#dc2626" scale={1.8} speed={0.8} />
      <FloatingOrb position={[-5, -1, -3]} color="#7f1d1d" scale={2.4} speed={0.5} />
      <FloatingOrb position={[2, -3, -1]} color="#991b1b" scale={1} speed={1.2} />

      {/* Geometric accents */}
      <GeometryAccent position={[3, 2, -2]} scale={0.8} />
      <GeometryAccent position={[-3, -2, -1]} scale={0.5} />

      {/* Particles */}
      <Particles />

      <fog attach="fog" args={["#080808", 15, 30]} />
    </Canvas>
  );
}
