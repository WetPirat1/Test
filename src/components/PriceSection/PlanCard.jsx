import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

function PlanCard({ title, price, discount, features, isVip }) {
  return (
    <motion.div
      className={`p-6 rounded-lg flex flex-col justify-between ${
        isVip ? "bg-[#434CE2]" : "bg-[#1A202C]"
      } w-full md:w-80 md:h-[550px] text-white`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
    >
      <div>
        <motion.h2
          className="text-2xl font-bold mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        <ul className="mb-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start mb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-green-400 mr-2">✔</span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="mt-auto">
        <motion.div
          className="text-2xl mb-4 flex justify-between items-center gap-10 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>${price}</p>
          <p className="text-green-400 absolute top-[-5px] left-14 text-[18px]">
            -${discount}%
          </p>
          <select
            className="mb-4 bg-gray-700 text-white p-2 rounded text-[15px] 
            hover:bg-gray-600 transition-colors duration-300"
          >
            <option>12 месяцев</option>
          </select>
        </motion.div>
        <motion.button
          className="bg-[#43A0E2] text-white px-4 py-2 rounded w-full 
          hover:bg-[#2d8ccc] transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ПОПРОБОВАТЬ 5 дней бесплатно
        </motion.button>
      </div>
    </motion.div>
  );
}

export default PlanCard;
