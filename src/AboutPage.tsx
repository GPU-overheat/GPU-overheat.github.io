import React from "react";
import { motion } from "framer-motion";

const gridSquare = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const gridVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <motion.section
        variants={gridSquare}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridVariants}
          className="bg-[#808080] aspect-square rounded-lg"
        ></motion.div>
        <motion.div
          variants={gridVariants}
          className="bg-[#808080] aspect-square rounded-lg"
        ></motion.div>
        <motion.div
          variants={gridVariants}
          className="bg-[#808080] aspect-square rounded-lg"
        ></motion.div>
        <motion.div
          variants={gridVariants}
          className="bg-[#808080] aspect-square rounded-lg"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
