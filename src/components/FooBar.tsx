import React from "react";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#808080] text-white mt-auto">
      <div className="max-w-4xl mx-auto p-2 flex flex-col sm:flex-row justify-between items-center">
        <div className="text-black text-center sm:text-left mb-2 sm:mb-0">
          <p>
            &copy; <span>{year}</span> GPU-overheat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
