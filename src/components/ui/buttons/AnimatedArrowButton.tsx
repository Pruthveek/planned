import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";

interface AnimatedArrowButtonProps {
  text: string;
  link: string;
}

const AnimatedArrowButton: React.FC<AnimatedArrowButtonProps> = ({ text, link }) => {
  return (
    <Link
      href={link}
      className="group inline-flex items-center space-x-2 text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-900 transition duration-300 cursor-pointer"
    >
      <span>{text}</span>
      <span className="relative inline-block w-4 h-3">
        <FaChevronRight
          className="absolute left-0 top-0 transition-transform duration-300 group-hover:translate-x-0.5 opacity-100 "
        />
        <FaArrowRight
          className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </span>
    </Link>
  );
};

export default AnimatedArrowButton;



