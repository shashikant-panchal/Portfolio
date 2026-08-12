import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Icosahedron,
  MeshDistortMaterial,
  Sparkles,
  RoundedBox,
  Sphere,
  Octahedron,
} from '@react-three/drei'
import * as THREE from 'three'

/**
 * Floating 3D Code / Tech Block:
 * Sleek metallic dark glass cube with glowing neon borders and emissive accents
 * representing software components (APIs, Code, Cloud, Auth, CI/CD).
 */
function SoftwareBlock({
  position,
  color,
  rotation = [0, 0, 0],
  scale = 1,
}: {
  position: [number, number, number]
  color: string
  rotation?: [number, number, number]
  scale?: number
}) {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    meshRef.current.rotation.y += 0.005
  })

  return (
    <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <Float speed={2.5} rotationIntensity={1.0} floatIntensity={1.2}>
        {/* Outer Dark Metallic Glass Cube */}
        <RoundedBox args={[0.7, 0.7, 0.7]} radius={0.12} smoothness={4}>
          <meshStandardMaterial
            color="#090d16"
            metalness={0.9}
            roughness={0.2}
            emissive={color}
            emissiveIntensity={0.25}
          />
        </RoundedBox>

        {/* Wireframe Holographic Border */}
        <RoundedBox args={[0.74, 0.74, 0.74]} radius={0.13} smoothness={4}>
          <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
        </RoundedBox>

        {/* Inner Glowing Core Energy */}
        <Octahedron args={[0.22, 0]}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
        </Octahedron>
      </Float>
    </group>
  )
}

/**
 * Connected 3D Microservice Node:
 * Glowing server node sphere with orbiting satellite points.
 */
function ServerNode({ position, color }: { position: [number, number, number]; color: string }) {
  const nodeRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!nodeRef.current) return
    nodeRef.current.rotation.y = state.clock.elapsedTime * 0.5
  })

  return (
    <group ref={nodeRef} position={position}>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.0}>
        <Sphere args={[0.18, 32, 32]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>

        {/* Orbiting Satellite Node 1 */}
        <mesh position={[0.35, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>

        {/* Orbiting Satellite Node 2 */}
        <mesh position={[-0.35, 0, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color={color} />
        </mesh>
      </Float>
    </group>
  )
}

/**
 * Central Software Architecture Core:
 * Morphing quantum engine representing software design, algorithms & systems.
 */
function ArchitectureCore() {
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
      targetY + state.clock.elapsedTime * 0.2,
      3,
      delta,
    )
    if (inner.current) {
      const s = 1 + Math.sin(state.clock.elapsedTime * 1.8) * 0.05
      inner.current.scale.setScalar(s)
    }
  })

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Main Quantum Engine Sphere */}
        <Icosahedron ref={inner} args={[1.05, 12]}>
          <MeshDistortMaterial
            color="#0284c7"
            emissive="#38bdf8"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.9}
            distort={0.42}
            speed={2.4}
          />
        </Icosahedron>

        {/* Double Holographic System Rings */}
        <Icosahedron args={[1.4, 2]}>
          <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.25} />
        </Icosahedron>

        <Icosahedron args={[1.75, 3]}>
          <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
    </group>
  )
}

/**
 * Orbiting Software Matrix:
 * System blocks (Code, API, Cloud, Security, CI/CD) drifting in 3D space.
 */
function SoftwareMatrix() {
  const matrixGroup = useRef<THREE.Group>(null)
  const { pointer } = useThree()

  const blocks = useMemo(
    () => [
      { pos: [-2.1, 1.1, 0.4] as [number, number, number], color: '#38bdf8', rot: [0.2, 0.4, 0] as [number, number, number], scale: 1.1 }, // Code/Frontend
      { pos: [2.1, -1.0, 0.4] as [number, number, number], color: '#f59e0b', rot: [-0.3, -0.2, 0.1] as [number, number, number], scale: 1.1 }, // Cloud/Backend
      { pos: [-1.9, -1.2, 0.6] as [number, number, number], color: '#10b981', rot: [0.1, -0.3, 0.2] as [number, number, number], scale: 1.0 }, // Database/Supabase
      { pos: [2.0, 1.2, 0.5] as [number, number, number], color: '#a855f7', rot: [-0.2, 0.3, -0.1] as [number, number, number], scale: 1.0 }, // Security/SSO
      { pos: [0, 1.8, -0.2] as [number, number, number], color: '#ec4899', rot: [0.4, 0.1, 0] as [number, number, number], scale: 0.95 }, // Realtime/WebSockets
      { pos: [0, -1.8, -0.2] as [number, number, number], color: '#6366f1', rot: [-0.4, -0.1, 0] as [number, number, number], scale: 0.95 }, // CI/CD Pipelines
    ],
    [],
  )

  const nodes = useMemo(
    () => [
      { pos: [-1.1, 0.4, 1.2] as [number, number, number], color: '#38bdf8' },
      { pos: [1.2, 0.5, 1.1] as [number, number, number], color: '#f59e0b' },
      { pos: [1.1, -0.6, 1.2] as [number, number, number], color: '#10b981' },
      { pos: [-1.2, -0.5, 1.1] as [number, number, number], color: '#a855f7' },
    ],
    [],
  )

  useFrame((_, delta) => {
    if (!matrixGroup.current) return
    matrixGroup.current.rotation.y = THREE.MathUtils.damp(
      matrixGroup.current.rotation.y,
      pointer.x * 0.4,
      2.5,
      delta,
    )
    matrixGroup.current.rotation.x = THREE.MathUtils.damp(
      matrixGroup.current.rotation.x,
      -pointer.y * 0.28 + 0.08,
      2.5,
      delta,
    )
  })

  return (
    <group ref={matrixGroup}>
      {/* 3D Software Component Cubes */}
      {blocks.map((b, i) => (
        <SoftwareBlock
          key={i}
          position={b.pos}
          color={b.color}
          rotation={b.rot}
          scale={b.scale}
        />
      ))}

      {/* 3D Interconnected Microservice Nodes */}
      {nodes.map((n, i) => (
        <ServerNode key={i} position={n.pos} color={n.color} />
      ))}
    </group>
  )
}

/** Digital matrix particle cloud for atmosphere. */
function DigitalMatrixField() {
  const points = useMemo(() => {
    const count = 180
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count)
      const theta = Math.PI * (1 + Math.sqrt(5)) * i
      const r = 4.2 + (i % 6) * 0.4
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  const ref = useRef<THREE.Points>(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.025
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
        size={0.04}
        color="#38bdf8"
        transparent
        opacity={0.65}
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
      camera={{ position: [0, 0, 6.8], fov: 44 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={0.5} color="#38bdf8" groundColor="#020617" />
        <directionalLight position={[5, 6, 5]} intensity={2.2} color="#38bdf8" />
        <directionalLight position={[-5, -4, 3]} intensity={1.5} color="#f59e0b" />
        <pointLight position={[0, 0, 4]} intensity={3.0} color="#c084fc" />

        <ArchitectureCore />
        <SoftwareMatrix />
        <DigitalMatrixField />

        <Sparkles
          count={50}
          scale={8}
          size={2.5}
          speed={0.4}
          color="#38bdf8"
          opacity={0.6}
        />
      </Suspense>
    </Canvas>
  )
}
