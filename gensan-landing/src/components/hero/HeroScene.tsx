"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function OrbitingGlow() {
  const group = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.rotation.y = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={2.2} rotationIntensity={0.35} floatIntensity={1.2}>
        <Sphere args={[1.35, 64, 64]} scale={1.65}>
          <MeshDistortMaterial
            color="#5C2D0E"
            roughness={0.25}
            metalness={0.55}
            distort={0.38}
            speed={2.2}
          />
        </Sphere>
      </Float>
      <Sparkles
        count={160}
        scale={14}
        size={2.2}
        speed={0.35}
        color="#E8A840"
        opacity={0.45}
      />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-90">
      <Canvas
        camera={{ position: [0, 0.2, 9], fov: 42 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl, scene }) => {
          scene.background = null;
          gl.setClearColor(0x000000, 0);
        }}
      >
        <ambientLight intensity={0.45} />
        <directionalLight
          position={[6, 8, 4]}
          intensity={1.1}
          color="#f5eed8"
        />
        <pointLight position={[-8, -4, -6]} intensity={0.9} color="#E8A840" />
        <OrbitingGlow />
      </Canvas>
    </div>
  );
}
