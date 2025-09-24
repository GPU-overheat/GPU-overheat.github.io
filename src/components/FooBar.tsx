import React from "react";

const year = new Date().getFullYear();
const githubLink = "https://github.com/GPU-overheat"

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#808080] text-white mt-auto footer-shadow">
      <div className="max-w-4xl mx-auto p-2 flex justify-center">
        <div className="text-black text-center sm:text-left mb-2 sm:mb-0">
          <p>
            &copy; <span>{year}</span>{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              GPU-overheat
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
