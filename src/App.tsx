"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Transition } from "framer-motion";
import { Link } from "react-router";

function bounceEase(x: number) {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

const bounceTransition: Transition = { duration: 1.2, ease: bounceEase };
const springTransition: Transition = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const whoami = "Software Developer";
const professional = [
  "Building responsive front-end applications.",
  "Developing scalable APIs & backend services.",
  "Containerizing applications with Docker.",
  "Managing applications on Linux servers.",
  "Automating workflows with AI-powered bots.",
  "Solving complex problems with clean code.",
  "Securing and optimizing web infrastructure.",
];
const hobbies = [
  "Building gadgets with Arduino and Raspberry Pi.",
  "Following the twists and turns of Formula 1.",
  "Blundering my queen in online chess matches.",
  "Over-engineering scripts for simple tasks.",
  "Contributing to open-source projects.",
  "Exploring digital art, one brush stroke at a time.",
  "Conducting ethical security 'tests' on my network.",
];
const greetings = [
  "Hello",
  "Bonjour",
  "مرحباً",
  "Hola",
  "Ciao",
  "Olá",
  "こんにちは",
  "你好",
  "안녕하세요",
  "Guten Tag",
  "Привет",
];

const Home: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);
  const [name, setName] = useState("GPU-overheat");
  const [mode, setMode] = useState<"professional" | "hobby">("professional");

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => {
        const list = mode === "professional" ? professional : hobbies;
        return (prev + 1) % list.length;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [mode]);
  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "professional" ? "hobby" : "professional"));
    setActivityIndex(0);
  }, []);

  const handleClickName = () => {
    setName((prev) => (prev === "GPU-overheat" ? "Amine" : "GPU-overheat"));
  };

  const currentList = mode === "professional" ? professional : hobbies;
  const currentActivity = currentList[activityIndex];

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 -mt-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[greetingIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
          >
            {greetings[greetingIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <p className="text-2xl sm:text-3xl mb-4">
        I am{" "}
        <span
          className="cursor-pointer hover:text-[#000080] transition-colors"
          onClick={handleClickName}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>

      <p className="text-lg text-gray-500 mb-4">{whoami}</p>

      <div className="toggle-container flex items-center gap-x-4 my-6">
        <span
          className={`font-semibold cursor-pointer ${
            mode === "professional" ? "text-black" : "text-gray-400"
          }`}
          onClick={toggleMode}
        >
          Professional
        </span>
        <div
          className="switch"
          data-is-on={mode === "hobby"}
          onClick={toggleMode}
        >
          <motion.div
            className="ball"
            layout
            transition={
              mode === "professional" ? springTransition : bounceTransition
            }
          />
        </div>
        <span
          className={`font-semibold cursor-pointer ${
            mode === "hobby" ? "text-black" : "text-gray-400"
          }`}
          onClick={toggleMode}
        >
          Hobbies
        </span>
      </div>

      <div className="mb-10 max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentActivity}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            {currentActivity}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/about"
          className="px-6 py-3 border-2 border-[#808080] bg-[#808080] text-white rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          About me
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 border-2 border-[#808080] text-black rounded-lg hover:bg-[#808080] hover:text-white transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;