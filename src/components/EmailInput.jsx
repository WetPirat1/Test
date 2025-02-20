// EmailInput.jsx
import React from "react";
import { motion } from "framer-motion";

export default function EmailInput() {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#3591d3",
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "#43a0e2",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div 
      className="flex items-center mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.input
        type="email"
        placeholder="ВАШ E-MAIL"
        className="bg-[#16213e] text-white p-3 rounded-l-md w-full md:w-64 border border-transparent"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.button
        className="bg-[#43a0e2] text-white px-6 py-3 rounded-r-md"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        НАЧАТЬ
      </motion.button>
    </motion.div>
  );
}