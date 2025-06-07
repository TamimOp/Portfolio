import { Tilt } from "react-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  Deploy,
  isNew = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full max-w-[400px]"
      initial={isNew ? { opacity: 0, y: 30, scale: 0.95 } : false}
      animate={isNew ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: isNew ? (index - 6) * 0.1 : 0,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      layout
    >
      <Tilt
        options={{
          max: 15,
          scale: 1.01,
          speed: 450,
        }}
      >
        <motion.div
          className="relative bg-[#1a1a2e] rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-800/50 overflow-hidden group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Image container */}
          <div
            className="relative w-full h-[180px] sm:h-[220px] mb-4 sm:mb-6 rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900"
            onClick={() => window.open(Deploy, "_blank")}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <span className="text-white font-semibold text-base sm:text-lg">
                View Project
              </span>
            </div>

            {/* Action buttons */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex gap-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="View Source Code"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              </motion.button>

              <motion.button
                onClick={() => window.open(Deploy, "_blank")}
                className="w-8 h-8 sm:w-10 sm:h-10 bg-cyan-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Live Demo"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors duration-200">
              {name}
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gray-800/60 border border-gray-700/50 ${tag.color} transition-all duration-200 hover:border-cyan-500/50`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const hasMoreProjects = projects.length > 6;

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      id="projects"
    >
      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center mb-8 sm:mb-16 px-4"
      >
        <p
          className={`${styles.sectionSubText} text-cyan-400 uppercase tracking-wider text-xs sm:text-sm md:text-base mb-3 sm:mb-4`}
        >
          Portfolio
        </p>

        <div className="relative">
          <h2
            className={`${styles.sectionHeadText} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 sm:mb-8`}
          >
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          {/* Underline Design */}
          <motion.div
            className="flex justify-center mt-4 sm:mt-6"
            variants={fadeIn("up", "", 0.1, 0.6)}
          >
            <div className="relative">
              <motion.div
                className="h-0.5 w-12 sm:w-16 md:w-20 lg:w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeIn("up", "", 0.1, 0.6)}
        className="max-w-4xl mx-auto text-center mb-12 sm:mb-20 px-4"
      >
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
          Explore a curated selection of my recent work, showcasing expertise in
          modern web technologies, creative problem-solving, and attention to
          detail. Each project represents a unique challenge and demonstrates
          different aspects of full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center px-4"
        layout
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
              isNew={showAll && index >= 6}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Show More Button */}
      {hasMoreProjects && (
        <motion.div
          className="flex justify-center mt-8 sm:mt-12 lg:mt-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold overflow-hidden text-sm sm:text-base lg:text-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0"
              animate={{ opacity: showAll ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />

            <span className="relative flex items-center gap-2 sm:gap-3">
              {showAll ? "Show Less" : "View All Projects"}
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      )}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
};

export default Works;
