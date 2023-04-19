"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]  "
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-fill"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="people" className="w-full  h-full" />
        </div>
        <div className="absolute top-10 left-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="people" className="w-full  h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        {/* glow behind planet */}
        <div className="absolute rounded-[24px] left-[18%] top-[39%] w-[196px] p-[6px] h-[150px] blur-2xl bg-[#5d6680]    ">
          <img
            src="planet-02.png"
            alt="planet"
            className="w-full rounded-[24px] h-full "
          />
        </div>

        <div className="absolute rounded-[24px] left-[18%] top-[39%] w-[196px] p-[6px] h-[150px] bg-[#5d6680]  ">
          <img
            src="planet-02.png"
            alt="planet"
            className="w-full object-cover rounded-[24px] h-full "
          />
        </div>

        {/* glow behind planet */}
        <div className="absolute rounded-[24px] left-[65%] top-[15%] w-[196px] p-[6px] h-[150px] blur-2xl bg-[#5d6680]  ">
          <img
            src="planet-05.png"
            alt="planet"
            className="w-full rounded-[24px] h-full "
          />
        </div>

        <div className="absolute rounded-[24px] left-[65%] top-[15%] w-[196px] p-[6px] h-[150px] bg-[#5d6680]  ">
          <img
            src="planet-05.png"
            alt="planet"
            className="w-full object-cover rounded-[24px] h-full "
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
