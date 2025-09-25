import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { IoMoonOutline } from "react-icons/io5";
import { useMatrixText } from "../useMatrixText";

const phrases: [string, string] = ["01010111", "GPU-overheat"];
const about: [string, string] = ["01010100", "About"];
const contact: [string, string] = ["01000110", "Contact"];

const hoverAnimation = {
  scale: 1.1,
  rotate: [0, -1, 1, -1, 0],
  color: "white",
};

const Navbar: React.FC = () => {
  const animatedLogo = useMatrixText(phrases);
  const animatedAbout = useMatrixText(about);
  const animatedContact = useMatrixText(contact);

  const [showMessage, setShowMessage] = useState(false);

  const handleModeClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <nav className="bg-[#808080] flex justify-around items-center h-12 navbar-shadow relative">
      <div>
        <motion.div
          whileHover={hoverAnimation}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Link className="font-bold" to="/">
            {animatedLogo}
            <motion.span className="text-[#000080] font-bold">.</motion.span>
          </Link>
        </motion.div>
      </div>

      <div className="flex gap-x-8">
        <motion.div
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Link to="/about" className="text-black hover:text-white">
            {animatedAbout}
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Link to="/contact" className="text-black hover:text-white">
            {animatedContact}
          </Link>
        </motion.div>
      </div>

      <div className="absolute right-6 top-0 h-full flex items-center">
        <div className="relative">
          <motion.button
            onClick={handleModeClick}
            className="flex items-center gap-x-2 px-3 py-1 bg-white text-black text-sm rounded-md navbar-shadow cursor-pointer"
            whileTap={{ scale: 0.85 }}
          >
            <IoMoonOutline />
          </motion.button>
          <AnimatePresence>
            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full text-center mt-2 right-0 min-w-[150px] px-4 py-2 bg-black text-white text-xs rounded-md shadow-lg"
              >
                The current color palette is an intentional design choice, as I
                feel it best represents the site's aesthetic. 👋
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;