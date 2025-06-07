import { motion } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { styles } from "../styles";

const ComputersCanvas = lazy(() => import("./canvas/Computers"));

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen sm:h-[120vh] mx-auto">
      {/* Reduced animations for mobile */}
      {!isMobile && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-black/20 animate-pulse pointer-events-none" />

          <div className="absolute inset-0 pointer-events-none">
            {[...Array(isMobile ? 10 : 30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </>
      )}

      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5 z-10 pointer-events-none`}
      >
        {/* Enhanced timeline with glow effect */}
        <motion.div
          className="flex flex-col justify-center items-center mt-10 sm:mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50"
            animate={{
              boxShadow: [
                "0 0 20px #915eff",
                "0 0 40px #915eff",
                "0 0 20px #915eff",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-1 h-32 sm:h-40 sm:h-80 violet-gradient opacity-80" />
        </motion.div>

        {/* Enhanced text content */}
        <div className="mt-8 xs:mt-0">
          <motion.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Hi, I&#39;m <br />
            <motion.span
              className="text-[#915eff] inline-block"
              whileHover={{
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(145, 94, 255)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ pointerEvents: "auto" }}
            >
              Tamim Shad Anik
            </motion.span>
          </motion.h1>

          <motion.p
            className={`${styles.heroSubText} mt-2 sm:mt-4 text-white-100`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I create{" "}
            <motion.span
              className="text-[#915eff] font-semibold"
              whileHover={{ scale: 1.1 }}
              style={{ pointerEvents: "auto" }}
            >
              intuitive
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-[#915eff] font-semibold"
              whileHover={{ scale: 1.1 }}
              style={{ pointerEvents: "auto" }}
            >
              visually compelling
            </motion.span>{" "}
            interfaces through code, enhancing user experiences and interaction
            with web applications.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-4 mt-6 sm:mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#915eff] text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 rounded-lg font-medium xs:font-semibold text-sm xs:text-base shadow-lg hover:shadow-[#915eff]/50 w-full xs:w-auto"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(145, 94, 255, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </motion.button>
            <motion.button
              className="border-2 border-[#915eff] text-[#915eff] px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 rounded-lg font-medium xs:font-semibold text-sm xs:text-base hover:bg-[#915eff] hover:text-white transition-all duration-300 w-full xs:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Conditional 3D Canvas */}
      <div className="absolute inset-0 z-0 top-[300px] xs:top-[350px] sm:top-[280px] md:top-[220px] lg:top-[180px] xl:top-[160px]">
        <Suspense
          fallback={<div className="w-full h-full bg-black/20 animate-pulse" />}
        >
          <ComputersCanvas />
        </Suspense>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 xs:bottom-5 sm:-bottom-4 w-full flex justify-center items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="#about">
          <motion.div
            className="w-[28px] h-[50px] xs:w-[32px] xs:h-[58px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 xs:border-4 sm:border-4 border-secondary flex justify-center items-start p-1.5 xs:p-2 sm:p-2 hover:border-[#915eff] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
