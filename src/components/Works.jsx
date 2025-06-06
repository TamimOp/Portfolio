import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  Deploy,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="w-full max-w-[400px]"
    >
      <Tilt
        options={{
          max: 25,
          scale: 1.02,
          speed: 300,
        }}
      >
        <motion.div
          className="relative bg-[#1a1a2e] rounded-2xl p-6 shadow-xl border border-gray-800/50 overflow-hidden group"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image container */}
          <div
            className="relative w-full h-[220px] mb-6 rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900"
            onClick={() => window.open(Deploy, "_blank")}
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                View Project
              </span>
            </div>

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source_code_link, "_blank");
                }}
                className="w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="View Source Code"
              >
                <img src={github} alt="github" className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={() => window.open(Deploy, "_blank")}
                className="w-10 h-10 bg-cyan-600/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-600 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Live Demo"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-300 transition-colors duration-300">
              {name}
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={`${name}-${tag.name}`}
                  className={`px-3 py-1 text-xs font-medium rounded-full bg-gray-800/60 border border-gray-700/50 ${tag.color} transition-all duration-200 hover:border-cyan-500/50`}
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
            transition={{ duration: 0.3 }}
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
    <>
      {/* Header */}
      <motion.div variants={textVariant()} className="text-center mb-16">
        <p
          className={`${styles.sectionSubText} text-cyan-400 uppercase tracking-wider`}
        >
          Portfolio
        </p>
        <div className="relative inline-block">
          <h2 className={`${styles.sectionHeadText} mt-2`}>
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            {/* Main gradient line */}
            <div className="h-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-full relative overflow-hidden">
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5,
                }}
              />
            </div>

            {/* Decorative dots */}
            <div className="flex justify-between items-center mt-2">
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.3 }}
              />
              <motion.div
                className="w-1 h-1 bg-cyan-400 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.3 }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="max-w-4xl mx-auto text-center mb-20"
      >
        <p className="text-gray-300 text-lg leading-relaxed">
          Explore a curated selection of my recent work, showcasing expertise in
          modern web technologies, creative problem-solving, and attention to
          detail. Each project represents a unique challenge and demonstrates
          different aspects of full-stack development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </motion.div>

      {/* Show More Button */}
      {hasMoreProjects && (
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600"
              initial={{ x: "-100%" }}
              animate={{ x: showAll ? "0%" : "-100%" }}
              transition={{ duration: 0.3 }}
            />

            <span className="relative flex items-center gap-3">
              {showAll ? "Show Less" : "View All Projects"}
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
