import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Add validation
    if (!form.name || !form.email || !form.message) {
      setLoading(false);
      alert("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_se9uifw",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_o4qyvpq",
        {
          from_name: form.name,
          to_name: "Tamim Shad Anik",
          from_email: form.email,
          to_email: "tamimshadanik@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "6cWCGin5Mc1ef9nN-"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);

          // More specific error handling
          if (error.status === 422) {
            alert("Please check your email format and try again.");
          } else if (error.status === 400) {
            alert(
              "Service configuration error. Please contact the administrator."
            );
          } else {
            alert("Network error. Please check your connection and try again.");
          }
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-gradient-to-br from-black-100/90 via-black-200/95 to-black-100/90 p-8 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm relative overflow-hidden"
      >
        {/* Cool animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/10 via-transparent to-secondary/10 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl from-[#915EFF]/20 via-secondary/10 to-transparent rounded-full blur-xl animate-pulse pointer-events-none" />
        <div
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-secondary/15 via-[#915EFF]/10 to-transparent rounded-full blur-xl animate-pulse pointer-events-none"
          style={{ animationDelay: "1s" }}
        />

        {/* Animated grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative z-10">
          {/* Enhanced Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-1 h-8 bg-gradient-to-b from-[#915EFF] via-secondary to-[#915EFF] rounded-full shadow-lg shadow-[#915EFF]/50 animate-pulse" />
            <p
              className={`${styles.sectionSubText} text-white/80 tracking-wide`}
            >
              Get in touch
            </p>
          </div>
          <h3
            className={`${styles.sectionHeadText} bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent drop-shadow-lg relative`}
          >
            Contact.
            <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#915EFF] to-secondary rounded-full opacity-60" />
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col group relative">
              <span className="text-white font-medium mb-4 flex items-center gap-2 transition-all duration-300 group-focus-within:text-[#915EFF] group-focus-within:scale-105">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-[#915EFF]/30 to-[#915EFF]/10 backdrop-blur-sm border border-[#915EFF]/20 shadow-lg shadow-[#915EFF]/20">
                  <svg
                    className="w-4 h-4 text-[#915EFF] drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Your Name
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-gradient-to-r from-tertiary/80 via-tertiary/90 to-tertiary/80 py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border border-white/10 font-medium transition-all duration-500 focus:border-[#915EFF] focus:shadow-xl focus:shadow-[#915EFF]/25 focus:bg-tertiary/95 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm relative overflow-hidden"
              />
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#915EFF]/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
            </label>

            <label className="flex flex-col group relative">
              <span className="text-white font-medium mb-4 flex items-center gap-2 transition-all duration-300 group-focus-within:text-secondary group-focus-within:scale-105">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-secondary/30 to-secondary/10 backdrop-blur-sm border border-secondary/20 shadow-lg shadow-secondary/20">
                  <svg
                    className="w-4 h-4 text-secondary drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                Your Email
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-gradient-to-r from-tertiary/80 via-tertiary/90 to-tertiary/80 py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border border-white/10 font-medium transition-all duration-500 focus:border-secondary focus:shadow-xl focus:shadow-secondary/25 focus:bg-tertiary/95 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm relative overflow-hidden"
              />
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-secondary/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
            </label>

            <label className="flex flex-col group relative">
              <span className="text-white font-medium mb-4 flex items-center gap-2 transition-all duration-300 group-focus-within:text-[#915EFF] group-focus-within:scale-105">
                <div className="p-1.5 rounded-full bg-gradient-to-r from-[#915EFF]/30 to-[#915EFF]/10 backdrop-blur-sm border border-[#915EFF]/20 shadow-lg shadow-[#915EFF]/20">
                  <svg
                    className="w-4 h-4 text-[#915EFF] drop-shadow-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                Your Message
              </span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="bg-gradient-to-r from-tertiary/80 via-tertiary/90 to-tertiary/80 py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border border-white/10 font-medium transition-all duration-500 focus:border-[#915EFF] focus:shadow-xl focus:shadow-[#915EFF]/25 resize-none focus:bg-tertiary/95 hover:border-white/20 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm relative overflow-hidden"
              />
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#915EFF]/50 to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
            </label>

            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 15px 35px rgba(145, 94, 255, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#915EFF] via-[#7c3aed] to-secondary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 flex items-center gap-2 relative overflow-hidden group border border-white/10"
            >
              {/* Subtle shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 ease-out" />

              <div className="relative z-10 flex items-center gap-2">
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="tracking-wide">Sending...</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4 transition-all duration-300 group-hover:translate-x-0.5 group-hover:scale-105"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    <span className="tracking-wide">Send Message</span>
                  </>
                )}
              </div>
            </motion.button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
