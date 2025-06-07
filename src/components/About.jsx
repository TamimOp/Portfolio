import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          y: -10,
          transition: { duration: 0.3 },
        }}
      >
        {/* Animated background overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-[20px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Sparkle effect */}
        <motion.div
          className="absolute top-4 right-4 w-2 h-2 bg-cyan-300 rounded-full"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />

        <div className="bg-tertiary rounded-[20px] py-8 px-12 min-h-[280px] flex justify-evenly items-center flex-col relative z-10 backdrop-blur-sm">
          <motion.div
            className="relative"
            whileHover={{
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            <img
              src={icon}
              alt={title}
              className="w-20 h-20 object-contain filter drop-shadow-lg"
            />
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"
              animate={{
                scale: isHovered ? 1.5 : 1,
                opacity: isHovered ? 0.8 : 0.3,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.h3
            className="text-white text-[20px] font-bold text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {title}
          </motion.h3>

          {/* Decorative line */}
          <motion.div
            className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 48 : 24 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      <motion.div variants={textVariant()} className="relative z-10">
        <motion.p
          className={`${styles.sectionSubText} bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent`}
          whileHover={{ scale: 1.05 }}
        >
          Introduction
        </motion.p>
        <motion.h2
          className={`${styles.sectionHeadText} relative`}
          whileHover={{ scale: 1.02 }}
        >
          Overview.
          {/* Animated underline */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 relative z-10"
      >
        <motion.div className="text-secondary text-[17px] max-w-3xl leading-[30px] relative p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
          <span className="absolute top-0 left-6 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"></span>
          As a seasoned software developer fluent in{" "}
          <motion.span
            className="text-purple-400 font-semibold"
            whileHover={{ color: "#22d3ee" }}
          >
            TypeScript
          </motion.span>{" "}
          and{" "}
          <motion.span
            className="text-cyan-400 font-semibold"
            whileHover={{ color: "#a855f7" }}
          >
            JavaScript
          </motion.span>
          , I specialize in crafting robust solutions with{" "}
          <motion.span
            className="text-purple-300 font-medium"
            whileHover={{ color: "#67e8f9" }}
          >
            React
          </motion.span>
          ,{" "}
          <motion.span
            className="text-cyan-300 font-medium"
            whileHover={{ color: "#c084fc" }}
          >
            Node.js
          </motion.span>
          , and{" "}
          <motion.span
            className="text-purple-300 font-medium"
            whileHover={{ color: "#67e8f9" }}
          >
            Next.js
          </motion.span>
          . With a passion for innovation, I thrive on collaborating closely
          with clients to deliver efficient, scalable, and user-centric
          applications that tackle real-world challenges. Let&#39;s team up and
          turn your concepts into captivating realities!
          {/* Floating particles */}
          <motion.div
            className="absolute top-2 right-4 w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-4 right-8 w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute top-1/2 left-4 w-0.5 h-0.5 bg-purple-300 rounded-full"
            animate={{
              x: [0, 6, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-20 flex flex-wrap gap-10 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(About, "about");
