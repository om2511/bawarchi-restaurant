import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";

// Plate: flat cylinder - represents a serving plate
function FoodPlate({ position, color, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.004 * speed;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.15;
  });
  return (
    <Float speed={speed} floatIntensity={0.8} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position}>
        <cylinderGeometry args={[0.38, 0.34, 0.06, 28]} />
        <MeshDistortMaterial color={color} roughness={0.1} metalness={0.6} distort={0.05} speed={1.5} />
      </mesh>
    </Float>
  );
}

// Bowl: torus ring - represents a bowl from above
function FoodBowl({ position, color, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.3 + 0.5;
    meshRef.current.rotation.y += 0.007 * speed;
  });
  return (
    <Float speed={speed} floatIntensity={0.9} rotationIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.3, 0.09, 14, 32]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.4} />
      </mesh>
    </Float>
  );
}

// Spice: small icosahedron - represents aromatic spices
function FoodSpice({ position, color, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.009 * speed;
    meshRef.current.rotation.y += 0.007 * speed;
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
  });
  return (
    <Float speed={speed} floatIntensity={1.2} rotationIntensity={0.6}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.22, 0]} />
        <MeshDistortMaterial color={color} roughness={0.05} metalness={0.7} distort={0.15} speed={3} />
      </mesh>
    </Float>
  );
}

// Gem: octahedron - represents precious saffron / rare spices
function FoodGem({ position, color, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01 * speed;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.25;
  });
  return (
    <Float speed={speed} floatIntensity={0.7} rotationIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.28]} />
        <meshStandardMaterial color={color} roughness={0.05} metalness={0.8} />
      </mesh>
    </Float>
  );
}

// Teardrop bubble - represents sauce drops
function FoodDrop({ position, color, speed = 1 }) {
  const meshRef = useRef();
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.005 * speed;
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.6) * 0.18;
  });
  return (
    <Float speed={speed} floatIntensity={0.5} rotationIntensity={0.15}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <MeshDistortMaterial color={color} roughness={0.0} metalness={0.2} distort={0.3} speed={2} transparent opacity={0.85} />
      </mesh>
    </Float>
  );
}

// Steam-like particles floating up
function SteamParticles() {
  const ref = useRef();
  const count = 80;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.012;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.04) * 0.05;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.028} color="#f5d07a" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

const foodItems = [
  // Plates (shiny metallic flat discs)
  { Component: FoodPlate,  position: [-3.5,  1.6, -1.0], color: "#d4a843", speed: 0.7 },
  { Component: FoodPlate,  position: [ 3.3,  1.4, -1.2], color: "#c8922a", speed: 0.9 },
  // Bowls (torus rings - look like bowls from any angle)
  { Component: FoodBowl,   position: [-2.9, -1.6, -0.8], color: "#2c8c73", speed: 0.8 },
  { Component: FoodBowl,   position: [ 3.1, -1.3, -1.0], color: "#4a9f89", speed: 1.0 },
  // Spices (faceted gems - aromatic spices concept)
  { Component: FoodSpice,  position: [-1.4,  2.6, -1.8], color: "#e8740a", speed: 1.1 },
  { Component: FoodSpice,  position: [ 1.6, -2.6, -1.5], color: "#d4603a", speed: 0.9 },
  // Precious gems (saffron / expensive spices)
  { Component: FoodGem,    position: [ 2.6,  0.6, -0.6], color: "#f5b942", speed: 0.8 },
  { Component: FoodGem,    position: [-3.2,  0.1, -1.4], color: "#cdc474", speed: 1.2 },
  // Sauce drops (wobbly spheres)
  { Component: FoodDrop,   position: [-1.8, -0.8, -0.5], color: "#e8a020", speed: 1.0 },
  { Component: FoodDrop,   position: [ 1.2,  1.0, -0.8], color: "#f5d070", speed: 1.3 },
];

export default function Hero3DScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]}   intensity={1.4} color="#f5b942" />
      <directionalLight position={[-4, -3, -4]} intensity={0.5} color="#0f4c3a" />
      <pointLight position={[0, 4, 3]}  intensity={1.0} color="#ffd700" />
      <pointLight position={[-3, 0, 2]} intensity={0.6} color="#2c8c73" />

      <Sparkles
        count={40}
        scale={8}
        size={1.5}
        speed={0.3}
        color="#f5b942"
        opacity={0.7}
      />

      {foodItems.map(({ Component, position, color, speed }, i) => (
        <Component key={i} position={position} color={color} speed={speed} />
      ))}

      <SteamParticles />
    </Canvas>
  );
}