import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="group relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f0f23] p-8 rounded-3xl xs:w-[380px] w-full shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden border border-gradient-to-r from-purple-500/20 to-cyan-500/20"
  >
    {/* Animated background elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

    {/* Content */}
    <div className="relative z-10">
      {/* Header with stars and quote */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <motion.svg
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + i * 0.1, duration: 0.5 }}
              className="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
          </svg>
        </div>
      </div>

      {/* Testimonial text */}
      <div className="mb-8">
        <p className="text-white/90 text-[17px] leading-8 font-light italic tracking-wide group-hover:text-white transition-colors duration-300">
          &#34;{testimonial}&#34;
        </p>
      </div>

      {/* Separator line */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6" />

      {/* Author info */}
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="relative w-16 h-16 rounded-full object-cover border-2 border-white/20 shadow-xl"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#1a1a2e] shadow-lg" />
        </div>

        <div className="flex-1">
          <h4 className="text-white font-bold text-[18px] mb-1 group-hover:text-purple-300 transition-colors duration-300">
            {name}
          </h4>
          <p className="text-purple-300 font-medium text-[14px] mb-1">
            {designation}
          </p>
          <p className="text-white/60 text-[13px] font-light tracking-wider">
            @ {company}
          </p>
        </div>

        {/* Verified badge */}
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-xs text-white/50 mt-1">Verified</span>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 relative">
      {/* Main container with enhanced background */}
      <div className="bg-gradient-to-br from-black-100 via-[#0a0a0a] to-[#1a1a2e] rounded-[24px] relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Header section */}
        <div
          className={`relative bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f0f23] rounded-2xl ${styles.padding} min-h-[300px] border border-purple-500/20`}
        >
          <motion.div variants={textVariant()} className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
              <div>
                <p className="text-purple-300 text-[16px] font-medium tracking-widest uppercase">
                  Client Testimonials
                </p>
                <h2 className="text-white text-[48px] font-black leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  Success Stories
                </h2>
              </div>
            </div>
            <p className="text-white/70 text-[18px] leading-relaxed max-w-3xl">
              Discover what my clients say about their transformative
              experiences working with me. Every testimonial represents a
              successful partnership and delivered excellence.
            </p>
          </motion.div>
        </div>

        {/* Cards container - Fixed spacing */}
        <div
          className={`mt-12 pb-20 ${styles.paddingX} flex flex-wrap gap-8 justify-center relative z-10`}
        >
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
