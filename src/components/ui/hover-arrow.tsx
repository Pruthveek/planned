"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverArrowProps {
  hovered: boolean;
}

const HoverArrow: React.FC<HoverArrowProps> = ({ hovered }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={hovered ? "arrow" : "greater"}
        initial={{ x: -5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ y: 5, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="inline-block"
      >
        {hovered ? "→" : ">"}
      </motion.span>
    </AnimatePresence>
  );
};

export default HoverArrow;
