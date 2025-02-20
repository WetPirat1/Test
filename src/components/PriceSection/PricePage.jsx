import React, { useState } from "react";
import PricingPlans from "./PricingPlans";
import { motion } from "framer-motion";

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

function PricePage() {
  const [isFutures, setIsFutures] = useState(false);

  return (
    <div className="bg-[#0A0A1E] min-h-screen text-white flex flex-col items-center justify-center p-4 mb-20">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
      >
        ТАРИФЫ
      </motion.h1>
      <motion.div 
        className="flex flex-col md:flex-row mb-8 gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <button
          onClick={() => setIsFutures(false)}
          className={`px-6 py-3 rounded-lg ${
            !isFutures ? "bg-[#43A0E2]" : "bg-[#3B3B53]"
          } hover:bg-[#2d8ccc] transition-colors duration-300 w-full`}
        >
          СПОТ
        </button>
        <button
          onClick={() => setIsFutures(true)}
          className={`px-6 py-3 rounded-lg ${
            isFutures ? "bg-[#43A0E2]" : "bg-[#3B3B53]"
          } hover:bg-[#2d8ccc] transition-colors duration-300 w-full`}
        >
          ФЬЮЧЕРС
        </button>
      </motion.div>
      <PricingPlans isFutures={isFutures} />
    </div>
  );
}

export default PricePage;