import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen mx-auto">
      {/* Animated background gradient - behind everything */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-black/20 animate-pulse pointer-events-none" />

      {/* Floating particles effect - behind content */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3 sm:gap-5 z-10 pointer-events-none`}
      >
        {/* Enhanced timeline with responsive sizing */}
        <motion.div
          className="flex flex-col justify-center items-center mt-3 sm:mt-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915eff] shadow-lg shadow-[#915eff]/50"
            animate={{
              boxShadow: [
                "0 0 15px #915eff",
                "0 0 30px #915eff",
                "0 0 15px #915eff",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="w-1 h-32 sm:h-80 violet-gradient opacity-80" />
        </motion.div>

        {/* Enhanced text content with better mobile spacing */}
        <div className="flex-1">
          <motion.h1
            className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2"
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
            className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 sm:mt-4"
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
            interfaces through code, enhancing user experiences.
          </motion.p>

          {/* Responsive call-to-action buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 xs:gap-4 mt-6 sm:mt-8 pointer-events-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#915eff] text-white px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 rounded-lg font-medium text-sm xs:text-base shadow-lg hover:shadow-[#915eff]/50 w-full xs:w-auto"
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
              className="border-2 border-[#915eff] text-[#915eff] px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 rounded-lg font-medium text-sm xs:text-base hover:bg-[#915eff] hover:text-white transition-all duration-300 w-full xs:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ComputersCanvas with better mobile positioning */}
      <div className="absolute inset-0 z-0 top-[320px] xs:top-[350px] sm:top-[280px] md:top-[220px] lg:top-[180px]">
        <ComputersCanvas />
      </div>

      {/* Enhanced scroll indicator with mobile optimization */}
      <motion.div
        className="absolute bottom-8 xs:bottom-10 sm:bottom-5 w-full flex justify-center items-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <a href="#about">
          <motion.div
            className="w-[28px] h-[50px] xs:w-[32px] xs:h-[60px] sm:w-[35px] sm:h-[64px] rounded-3xl border-3 xs:border-4 border-secondary flex justify-center items-start p-1.5 xs:p-2 hover:border-[#915eff] transition-colors duration-300"
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
