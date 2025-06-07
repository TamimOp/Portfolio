import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={isMobile ? 1.5 : 2.5}
      rotationIntensity={isMobile ? 0.3 : 0.5}
      floatIntensity={isMobile ? 1 : 1.5}
    >
      <ambientLight intensity={isMobile ? 0.4 : 0.25} />
      <directionalLight
        position={[0, 0, 0.05]}
        intensity={isMobile ? 0.8 : 1}
      />
      <mesh castShadow={!isMobile} receiveShadow={!isMobile} scale={2.75}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const isTouch = "ontouchstart" in window;
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      setIsMobile(mediaQuery.matches || isTouch || isMobileDevice);
    };

    checkMobile();

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    mediaQuery.addEventListener("change", checkMobile);
    return () => mediaQuery.removeEventListener("change", checkMobile);
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? "demand" : "always"}
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        powerPreference: isMobile ? "default" : "high-performance",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={!isMobile} // Disable rotation on mobile
          enablePan={false}
        />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>

      {!isMobile && <Preload all />}
    </Canvas>
  );
};

export default BallCanvas;
