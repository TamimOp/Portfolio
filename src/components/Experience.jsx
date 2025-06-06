import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#fff",
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(100, 200, 255, 0.1)",
        borderRadius: "20px",
        padding: "1.5rem",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #1a1a2e",
      }}
      date={
        <span className="text-white font-semibold text-[16px] bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {experience.date}
        </span>
      }
      iconStyle={{
        background: experience.iconBg,
        border: "3px solid rgba(255, 255, 255, 0.2)",
        boxShadow: `0 0 20px ${experience.iconBg}50`,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="mb-6">
        <h3 className="text-white text-[26px] font-bold mb-2 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          {experience.title}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
            <span className="text-white text-[12px] font-bold">@</span>
          </div>
          <p className="text-gray-300 text-[18px] font-semibold">
            {experience.company_name}
          </p>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>

      <ul className="space-y-4">
        {experience.points.map((point, pointIndex) => (
          <li
            key={`experience-point-${pointIndex}`}
            className="text-gray-200 text-[15px] leading-relaxed flex items-start gap-3 group"
          >
            <div className="flex-shrink-0 mt-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
            </div>
            <span className="group-hover:text-white transition-colors duration-200">
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-blue-400 opacity-30"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-purple-400 opacity-30"></div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="mb-10"
      >
        <p className={`${styles.sectionSubText} text-center !text-white`}>
          What I have done so far
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center !text-white mb-4`}
        >
          Work Experience.
        </h2>

        {/* Simple animated line */}
        <div className="mx-auto w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Simple background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="mt-20 flex flex-col relative z-10">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
