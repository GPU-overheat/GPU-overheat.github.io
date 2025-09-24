import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage: React.FC = () => {
  const [contact, setContact] = useState("contact");
  const handleClick = () => {
    setContact(contact === "contact" ? "summon" : "contact");
  };
  return (
    <>
      <div>
        <p className="my-6">
          You can{" "}
          <span className="text-[#000080] cursor-pointer" onClick={handleClick}>
            {" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={contact}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {contact}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          me through these channels:
        </p>
      </div>
    </>
  );
};

export default ContactPage;
