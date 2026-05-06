"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Points, PointMaterial, MeshTransmissionMaterial, Environment, Float } from "@react-three/drei";

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    const cols = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      
      const r = 0.8 + Math.random() * 0.2;
      const g = 0.7 + Math.random() * 0.2;
      const b = 0.5 + Math.random() * 0.2;
      cols[i * 3] = r * 0.4;
      cols[i * 3 + 1] = g * 0.4;
      cols[i * 3 + 2] = b * 0.4;
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.02;
    ref.current.rotation.y += delta * 0.01;
    
    const targetX = mouse.x * 0.2;
    const targetY = mouse.y * 0.2;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.02;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function GlossyOrb() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = Math.sin(time * 0.4) * 0.2;
    
    // React to mouse subtly
    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.5;
    meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
    meshRef.current.position.z = Math.cos(time * 0.3) * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={1.0}
          roughness={0.05}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.06}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#ffffff"
          attenuationDistance={0.5}
          attenuationColor="#ffffff"
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#06070B"]} />
      <Environment preset="city" />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#C9A85C" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38E1FF" />
      
      <Suspense fallback={null}>
        <GlossyOrb />
        <ParticleField />
      </Suspense>
    </>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
