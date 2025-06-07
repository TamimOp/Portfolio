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
    className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-2xl p-10 rounded-[2rem] xs:w-[450px] w-full shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 border border-gray-700/30 hover:border-cyan-400/40"
  >
    {/* Minimal background accent */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-t-[2rem]" />

    <div className="relative z-10">
      {/* Company logo placeholder / rating */}
      <div className="flex justify-between items-start mb-8">
        <div className="text-cyan-400 font-mono text-sm tracking-wider">
          ★★★★★ 5.0
        </div>
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">★</span>
        </div>
      </div>

      {/* Large testimonial text */}
      <div className="mb-10">
        <p className="text-white text-[20px] leading-relaxed font-light tracking-wide">
          &#34;{testimonial}&#34;
        </p>
      </div>

      {/* Clean author section */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-700/50">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-xl object-cover"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full border-2 border-gray-900" />
        </div>
        <div className="flex-1">
          <h4 className="text-white font-medium text-[17px] mb-1">{name}</h4>
          <p className="text-gray-400 text-[14px]">{designation}</p>
          <p className="text-cyan-400 text-[13px] font-medium">{company}</p>
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
