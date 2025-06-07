import { useState, useEffect } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isLowEnd = /Android.*Chrome\/[1-6][0-9]/i.test(navigator.userAgent); // Older Chrome versions

      setIsMobile(mediaQuery.matches || isAndroid || isLowEnd);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Mobile fallback with static images
  if (isMobile) {
    return (
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-tertiary rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain filter drop-shadow-lg"
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop version with 3D balls
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
