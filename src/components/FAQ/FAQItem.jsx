import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen: initialOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: { 
      backgroundColor: "#1A202C",
      transition: { duration: 0.3 }
    }
  };

  const answerVariants = {
    hidden: { 
      height: 0, 
      opacity: 0 
    },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="border border-gray-700 rounded-lg overflow-hidden"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <button
        className="w-full text-left p-4 flex justify-between items-center bg-[#0A0A1E] text-white 
        hover:bg-[#1A202C] transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="p-4 bg-[#0A0A1E] text-gray-300 whitespace-pre-line"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FAQItem;