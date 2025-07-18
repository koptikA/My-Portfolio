import React, { useEffect } from "react";
import AnimatedText from "../components/AnimatedText";
import ResumeBtn from "../components/ResumeBtn";
import { navLinks, scaleAnimation } from "../lib/framer-motion-utils";
import { motion } from "framer-motion";
import { scrollToTop } from "../lib/utils";
import resume from "../assets/CV ALENA KOPTSIK.pdf";
type MyComponentProps = {
  heading: string;
  text: string;
};
const LandingPage: React.FC<MyComponentProps> = ({ heading, text }) => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <motion.section
      initial="hidden"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.3, // Stagger the animations of child elements by 1 second
          },
        },
      }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full px-sides h-[60dvh] min-h-[400px] max-h-[600px] flex items-center flex-col gap-3 justify-center text-white bg-black"
    >
      <AnimatedText text={heading} />
      <motion.h2
        variants={navLinks}
        className="md:text-xl text-lg font-medium text-center pb-2"
      >
        {text}
      </motion.h2>

      <motion.a
        href={resume}
        download="CV Alena Koptsik Web Designer"
        target="_blank"
        rel="noopener noreferrer"
        variants={scaleAnimation}
        className="resume_btn"
      >
        <ResumeBtn />
      </motion.a>
    </motion.section>
  );
};

export default LandingPage;
