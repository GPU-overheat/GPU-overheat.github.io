import "../index.css";
import { useMatrixText } from "../useMatrixText";
import { Link } from "react-router";
import { motion } from "framer-motion";

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

  return (
    <>
      <nav className="bg-[#808080] flex justify-around items-center h-12 navbar-shadow">
        <div>
          <motion.div
            whileHover={hoverAnimation}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Link className="font-bold" to="">
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
      </nav>
    </>
  );
};

export default Navbar;
