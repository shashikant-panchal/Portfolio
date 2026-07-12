import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Environment,
  Sparkles,
  RoundedBox,
} from '@react-three/drei'
import * as THREE from 'three'

/**
 * The morphing hero mesh. An icosahedron wrapped in a distortion material that
 * breathes on its own and leans toward the pointer, wrapped in a wireframe
 * shell for a "digital core" look.
 */
function MorphingCore() {
  const group = useRef<THREE.Group>(null)
  const inner = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame((state, delta) => {
    if (!group.current) return
    const targetX = pointer.y * 0.35
    const targetY = pointer.x * 0.6
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      3,
      delta,
    )
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY + state.clock.elapsedTime * 0.15,
      3,
      delta,
    )
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.03
      inner.current.scale.setScalar(s)
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
        <Icosahedron ref={inner} args={[1.15, 12]}>
          <MeshDistortMaterial
            color="#0e7490"
            emissive="#22d3ee"
            emissiveIntensity={0.25}
            roughness={0.15}
            metalness={0.9}
            distort={0.4}
            speed={2.2}
          />
        </Icosahedron>
        <Icosahedron args={[1.5, 2]}>
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.16} />
        </Icosahedron>
      </Float>
    </group>
  )
}

/** A stylised smartphone: metallic body + glowing screen + camera notch. */
function Phone({ screen }: { screen: string }) {
  return (
    <group>
      {/* Body */}
      <RoundedBox args={[0.62, 1.24, 0.07]} radius={0.09} smoothness={4}>
        <meshStandardMaterial color="#0d1117" metalness={0.85} roughness={0.35} />
      </RoundedBox>
      {/* Glowing screen */}
      <mesh position={[0, 0, 0.041]}>
        <planeGeometry args={[0.52, 1.08]} />
        <meshStandardMaterial
          color={screen}
          emissive={screen}
          emissiveIntensity={0.7}
          toneMapped={false}
        />
      </mesh>
      {/* On-screen "app bar" accent */}
      <mesh position={[0, 0.42, 0.043]}>
        <planeGeometry args={[0.52, 0.16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>
      {/* Home indicator */}
      <mesh position={[0, -0.46, 0.043]}>
        <planeGeometry args={[0.18, 0.03]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.5} />
      </mesh>
      {/* Camera notch */}
      <mesh position={[0, 0.52, 0.045]}>
        <circleGeometry args={[0.02, 16]} />
        <meshBasicMaterial color="#000000" />
      </mesh>
    </group>
  )
}

/** Small floating app-icon tile with a rounded, glowing face. */
function AppTile({ color }: { color: string }) {
  return (
    <RoundedBox args={[0.34, 0.34, 0.08]} radius={0.09} smoothness={4}>
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.3}
        roughness={0.4}
        toneMapped={false}
      />
    </RoundedBox>
  )
}

/**
 * Devices orbiting the core — the mobile-development motif. The whole ring
 * slowly rotates and leans with the pointer; each device also floats and spins
 * on its own for depth.
 */
function OrbitingDevices() {
  const ring = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  const phones = useMemo(
    () => [
      { screen: '#22d3ee', radius: 2.7, angle: 0, y: 0.25, tilt: 0.4 },
      { screen: '#f59e0b', radius: 2.7, angle: (Math.PI * 2) / 3, y: -0.35, tilt: -0.5 },
      { screen: '#a78bfa', radius: 2.7, angle: (Math.PI * 4) / 3, y: 0.1, tilt: 0.2 },
    ],
    [],
  )

  const tiles = useMemo(
    () => [
      { color: '#22d3ee', radius: 2.0, angle: 0.6, y: 0.9 },
      { color: '#34d399', radius: 2.1, angle: 1.9, y: -0.9 },
      { color: '#f59e0b', radius: 1.95, angle: 3.1, y: 1.0 },
      { color: '#f472b6', radius: 2.05, angle: 4.3, y: -0.7 },
      { color: '#60a5fa', radius: 2.0, angle: 5.4, y: 0.6 },
    ],
    [],
  )

  useFrame((_, delta) => {
    if (!ring.current) return
    ring.current.rotation.y += delta * 0.18
    // Gentle lean toward the pointer.
    ring.current.rotation.x = THREE.MathUtils.damp(
      ring.current.rotation.x,
      pointer.y * 0.25 + 0.15,
      2.5,
      delta,
    )
    ring.current.rotation.z = THREE.MathUtils.damp(
      ring.current.rotation.z,
      -pointer.x * 0.12,
      2.5,
      delta,
    )
  })

  return (
    <group ref={ring}>
      {phones.map((p, i) => (
        <group
          key={`phone-${i}`}
          position={[
            Math.cos(p.angle) * p.radius,
            p.y,
            Math.sin(p.angle) * p.radius,
          ]}
          rotation={[0, -p.angle + Math.PI / 2, p.tilt]}
        >
          <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.9}>
            <Phone screen={p.screen} />
          </Float>
        </group>
      ))}

      {tiles.map((t, i) => (
        <group
          key={`tile-${i}`}
          position={[
            Math.cos(t.angle) * t.radius,
            t.y,
            Math.sin(t.angle) * t.radius,
          ]}
        >
          <Float speed={3} rotationIntensity={1.2} floatIntensity={1.2}>
            <AppTile color={t.color} />
          </Float>
        </group>
      ))}
    </group>
  )
}

/** Slow-drifting particle field for depth. */
function Particles() {
  const points = useMemo(() => {
    const count = 140
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = 4 + (i % 5) * 0.35
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#67e8f9"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function ThreeCanvas() {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 2]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.6} color="#22d3ee" />
        <directionalLight position={[-5, -3, 2]} intensity={0.8} color="#f59e0b" />
        <pointLight position={[0, 0, 3]} intensity={2} color="#67e8f9" />

        <MorphingCore />
        <OrbitingDevices />
        <Particles />
        <Sparkles
          count={40}
          scale={7}
          size={2}
          speed={0.3}
          color="#f59e0b"
          opacity={0.5}
        />
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
