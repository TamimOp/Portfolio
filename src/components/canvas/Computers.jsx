import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  // Floating animation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.position.y =
        (isMobile ? -4 : -3.25) + Math.sin(time) * 0.1;
      meshRef.current.rotation.x = -0.01 + Math.sin(time * 0.5) * 0.02;
      meshRef.current.rotation.z = -0.1 + Math.sin(time * 0.3) * 0.01;
    }
  });

  return (
    <mesh>
      {/* Enhanced lighting */}
      <hemisphereLight intensity={2.5} groundColor="black" />

      {/* Enhanced spotlight with purple tint */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={2048}
        color="#915eff"
      />

      {/* Fill light */}
      <spotLight
        position={[20, 30, 10]}
        angle={0.15}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
      />

      {/* Enhanced point light */}
      <pointLight intensity={1.2} color="#915eff" />

      {/* Ambient light for better visibility */}
      <ambientLight intensity={0.3} />

      <primitive
        ref={meshRef}
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.6}
        position={isMobile ? [-3, -4, -1.5] : [0, -3.25, -1.3]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: true,
        shadowMap: { enabled: true, type: "PCFSoftShadowMap" },
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
