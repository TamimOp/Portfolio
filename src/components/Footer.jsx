import { motion } from "framer-motion";
import { socials } from "../constants";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="!px-[47px] !py-10 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black-200/50 via-transparent to-transparent pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="caption text-white/60 lg:block font-medium"
        >
          © {new Date().getFullYear()}. All rights reserved.
          <span className="block text-xs text-white/40 mt-1">
            Built with passion and code
          </span>
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-5"
        >
          {socials.map((item, index) => (
            <motion.a
              href={item.url}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -2,
                boxShadow: "0 10px 25px rgba(145, 94, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-tertiary/80 to-tertiary rounded-full transition-all duration-300 hover:from-[#915EFF]/20 hover:to-secondary/20 border border-white/10 hover:border-[#915EFF]/30 backdrop-blur-sm group relative overflow-hidden"
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />

              <img
                src={item.iconUrl}
                alt={item.title}
                width={16}
                height={16}
                className="relative z-10 transition-all duration-300 group-hover:scale-110 drop-shadow-sm filter group-hover:brightness-110"
              />
            </motion.a>
          ))}
        </motion.ul>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#915EFF]/5 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/5 to-transparent rounded-full blur-xl pointer-events-none" />
    </motion.div>
  );
};

export default Footer;
