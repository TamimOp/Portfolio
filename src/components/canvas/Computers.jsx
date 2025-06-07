import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef();

  // Keep original animations but reduce on mobile
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      if (isMobile) {
        // Reduced animations for mobile
        meshRef.current.position.y = -4 + Math.sin(time) * 0.05;
      } else {
        // Original animations for desktop
        meshRef.current.position.y = -3.25 + Math.sin(time) * 0.1;
        meshRef.current.rotation.x = -0.01 + Math.sin(time * 0.5) * 0.02;
        meshRef.current.rotation.z = -0.1 + Math.sin(time * 0.3) * 0.01;
      }
    }
  });

  return (
    <mesh>
      {/* Keep original lighting for desktop, simplify for mobile */}
      <hemisphereLight intensity={isMobile ? 1.5 : 2.5} groundColor="black" />

      {/* Enhanced spotlight with purple tint */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 1.0 : 1.5}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 1024 : 2048}
        color="#915eff"
      />

      {/* Fill light */}
      <spotLight
        position={[20, 30, 10]}
        angle={0.15}
        penumbra={1}
        intensity={isMobile ? 0.5 : 0.8}
        color="#ffffff"
      />

      {/* Enhanced point light */}
      <pointLight intensity={isMobile ? 0.8 : 1.2} color="#915eff" />

      {/* Ambient light for better visibility */}
      <ambientLight intensity={isMobile ? 0.5 : 0.3} />

      <primitive
        ref={meshRef}
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.6}
        position={isMobile ? [-3, -4, -1.5] : [0, -3.25, -1.3]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow={!isMobile}
        receiveShadow={!isMobile}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // More comprehensive mobile detection
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const isTouch = "ontouchstart" in window;
    const isMobileDevice =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    setIsMobile(mediaQuery.matches || isTouch || isMobileDevice);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "demand" : "always"} // Reduce frame rate on mobile only
      shadows={!isMobile} // Disable shadows on mobile only
      dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile only
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile, // Disable anti-aliasing on mobile only
        powerPreference: "high-performance",
        shadowMap: { enabled: !isMobile, type: "PCFSoftShadowMap" },
      }}
      performance={isMobile ? { min: 0.5 } : undefined} // Allow frame rate to drop on mobile only
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile} // Disable damping on mobile only
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
