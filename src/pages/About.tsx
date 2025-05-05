import {FC, useContext} from 'react'
import ParentComp from '../components/ParentComp'
import GradientText from '../components/GradientText';
import { MyContext } from '../ContextComp';
import { motion } from "framer-motion"
// import { scaleAnimation2 } from "../lib/framer-motion-utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const About: FC = () => {
    const contents = useContext(MyContext);
  return (
    <ParentComp landingHeading="About-me" landingText="IT'S ME HELEN">
      <GradientText
        heading="About Me"
        text="I’m UI/UX designer with over three years of experience in creating visually stunning and user-friendly designs. I specialize in web design, branding, UI/UX, and motion, bringing ideas to life through creativity and thoughtful design solutions.
In addition to design, I’m diving into frontend development, expanding my skill set to bridge the gap between aesthetics and functionality. My goal is to craft seamless, engaging, and interactive digital experiences that not only look great but also feel intuitive to users.
Every project I take on is a mix of strategy, innovation, and attention to detail—whether it’s designing a sleek website, crafting a unique brand identity, or adding motion to enhance storytelling.
<br>Let’s create something amazing together!"
      />
      <GradientText heading="My Skills">
        <motion.div
          className="md:w-1/2 items-center flex flex-wrap md:justify-start justify-center w-full  gap-4"
          initial="hidden"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
        {contents && contents?.techStack.map(stack => {
            return <span className="rounded-full px-2 py-1 text-sm bg-gradient">{stack}</span>
          })}
        </motion.div>
      </GradientText>
      <GradientText
        heading="My experiences"
        experiences={contents?.experiences}
      />
      <section className="flex items-center justify-center pt-6 gap-4 md:gap-8 px-sides w-full  flex-wrap ">
        <button
          className="Btn text-sm font-normal"
          onClick={() => contents?.navigation("/projects")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
          All Projects
        </button>
        <button
          className="Btn text-sm font-normal"
          onClick={() => contents?.navigation("/contact")}
        >
          <FontAwesomeIcon icon={faArrowRightLong} className="mr-2" />
          Contact Me
        </button>
      </section>
    </ParentComp>
  );
}

export default About
