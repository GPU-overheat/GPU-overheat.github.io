import React from "react";
import { Link } from "react-router";

const year = new Date().getFullYear();
const githubLink = "https://github.com/GPU-overheat";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#808080] text-white footer-shadow">
      <div className="max-w-4xl mx-auto p-2 flex justify-center">
        <div className="text-black text-center sm:text-left mb-2 sm:mb-0">
          <p>
            &copy; <span>{year}</span>{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#000080] hover:underline"
            >
              GPU-overheat
            </a>
            . All rights reserved.{" "}
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
