import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function FloatingShape({ position, color, shape, speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.006 * speed;
    meshRef.current.rotation.x =
      Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.2;
  });

  return (
    <Float speed={speed} floatIntensity={0.6} rotationIntensity={0.3}>
      <mesh ref={meshRef} position={position}>
        {shape === "sphere" && (
          <sphereGeometry args={[0.32, 24, 24]} />
        )}
        {shape === "torus" && (
          <torusGeometry args={[0.28, 0.1, 12, 28]} />
        )}
        {shape === "cylinder" && (
          <cylinderGeometry args={[0.18, 0.22, 0.45, 14]} />
        )}
        {shape === "octahedron" && (
          <octahedronGeometry args={[0.35]} />
        )}
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.15}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef();
  const count = 60;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#cdc474"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

const shapes = [
  { position: [-3.5,  1.5, -1.0], color: "#cdc474", shape: "sphere",     speed: 0.8 },
  { position: [ 3.2,  1.8, -1.0], color: "#f5b942", shape: "torus",      speed: 1.1 },
  { position: [-2.8, -1.5, -0.5], color: "#2c8c73", shape: "octahedron", speed: 0.6 },
  { position: [ 3.0, -1.2, -1.0], color: "#e8a020", shape: "cylinder",   speed: 1.0 },
  { position: [-1.2,  2.5, -2.0], color: "#cdc474", shape: "torus",      speed: 0.9 },
  { position: [ 1.5, -2.5, -1.5], color: "#f5b942", shape: "sphere",     speed: 1.2 },
  { position: [ 2.5,  0.5, -0.5], color: "#4a9f89", shape: "octahedron", speed: 0.7 },
  { position: [-3.0,  0.2, -1.5], color: "#e8a020", shape: "torus",      speed: 1.3 },
];

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]}  intensity={1.2} color="#f5b942" />
      <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#0f4c3a" />
      <pointLight position={[0, 3, 2]} intensity={0.8} color="#cdc474" />

      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
      <Particles />
    </Canvas>
  );
}