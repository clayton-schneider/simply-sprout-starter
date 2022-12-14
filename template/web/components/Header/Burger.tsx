import { FunctionComponent, useState } from "react";
import { motion } from "framer-motion";

interface IBurgerProps {
  className?: string;
  toggle: () => void;
}

const Burger: FunctionComponent<IBurgerProps> = ({ className, toggle }) => {
  const topLineVariant = {
    open: { x1: 1, x2: 21, y1: 1, y2: 21 },
    closed: { x1: 0, x2: 40, y1: 1, y2: 1 },
  };

  const middleLineVariant = {
    open: { x1: 0, x2: 0, y1: 7, y2: 7, transition: { duration: 0.1 } },
    closed: { x1: 0, x2: 40, y1: 7, y2: 7 },
  };

  const bottomLineVariant = {
    open: { x1: 1, x2: 21, y1: 21, y2: 1 },
    closed: { x1: 0, x2: 40, y1: 13, y2: 13 },
  };

  return (
    <motion.svg
      className={className + " z-[100] cursor-pointer"}
      height={22}
      width={40}
      onClick={toggle}
    >
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        variants={topLineVariant}
      ></motion.line>
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        variants={middleLineVariant}
      ></motion.line>
      <motion.line
        stroke="#000000"
        strokeWidth={2}
        variants={bottomLineVariant}
      ></motion.line>
    </motion.svg>
  );
};

export default Burger;
