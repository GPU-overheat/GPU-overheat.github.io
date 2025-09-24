import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const whoami = "Software Devoloper.";
const whatidonow = [""];
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

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("GPU-overheat.");
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setName(name === "GPU-overheat." ? "Amine." : "GPU-overheat.");
  };

  return (
    <div>
      <div className="flex items-center justify-center h-20 my-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <p className="text-2xl">
        I am{" "}
        <span className="hover:text-[#000080]" onClick={handleClick}>
          {" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {name}
            </motion.span>
          </AnimatePresence>
        </span>
      </p>
      <p className="opacity-60">{whoami}</p>
      <p>{whatidonow}</p>
    </div>
  );
};

export default App;
