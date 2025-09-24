import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaCopy } from "react-icons/fa";

const linkedLink = "https://www.linkedin.com/in/amine-errahimi/";
const gitLink = "https://www.github.com/GPU-overheat";
const emailLink = "mailto:jsamin3@gmail.com";

const ContactPage: React.FC = () => {
  const [contact, setContact] = useState<"contact" | "summon">("contact");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const emailAddress = emailLink.replace("mailto:", "");
    await navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const contactLinks = [
    { name: "LinkedIn", href: linkedLink, icon: <FaLinkedin size={32} /> },
    { name: "GitHub", href: gitLink, icon: <FaGithub size={32} /> },
    { name: "Email", href: emailLink, icon: <FaEnvelope size={32} /> },
  ];

  return (
    <div className="prose lg:prose-lg mx-auto px-4 py-16 text-center">
      <p className="text-xl">
        You can{" "}
        <span
          className="text-[#000080] cursor-pointer font-semibold"
          onClick={() =>
            setContact((prev) => (prev === "contact" ? "summon" : "contact"))
          }
          aria-label={`Click to ${
            contact === "contact" ? "summon" : "contact"
          } me`}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={contact}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              {contact}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        me through these channels:
      </p>

      <div className="flex justify-center items-center gap-12 mt-12 not-prose">
        {contactLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-[#808080] hover:text-black transition-colors duration-300"
            aria-label={`Visit my ${link.name}`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
            <span className="text-base font-medium">{link.name}</span>
          </motion.a>
        ))}
      </div>

      <div className="relative mt-12 flex justify-center not-prose">
        <p className="flex items-center gap-2 text-sm text-[#909090]">
          Email button does not work?{" "}
          <span
            onClick={handleCopy}
            className="cursor-pointer hover:text-[#000080] transition-opacity duration-300"
          >
            click here.
          </span>
        </p>
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 px-3 py-1 bg-black text-white text-xs rounded-md flex items-center gap-2"
            >
              <span>Email copied!</span>
              <FaCopy />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactPage;
