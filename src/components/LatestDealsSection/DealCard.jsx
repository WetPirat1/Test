// DealCard.jsx
import React from "react";
import { motion } from "framer-motion";
import DealImg from "../../assets/LatestDeals.png"; 
// Визначаємо анімаційні варіанти для картки
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 1, // Додаємо 1 секунду затримки для головної анімації
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
    },
  },
};

const DealCard = ({ pair, type, profit, level, date }) => {
  return (
    <motion.div
      className="deal-card bg-[#434CE2] text-white p-4 rounded-lg shadow-lg w-80 relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{
        once: true, // Анімація відбудеться лише раз
        margin: "0px 0px -100px 0px", // Запускається коли нижня межа елемента в 100px від нижньої межі екрану
      }}
    >
      <motion.div
        className="pair text-2xl font-bold mb-2"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 1.2, // 1 секунда базової затримки + 0.2 секунди
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        {pair}
      </motion.div>

      <motion.div
        className="type text-sm mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 1.3, // 1 секунда + 0.3 секунди
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        {type}
      </motion.div>

      <motion.div
        className="profit text-2xl font-bold mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.4, // 1 секунда + 0.4 секунди
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <p className="uppercase text-xl">ПРИБЫЛЬ</p>
        <p className="text-green-400 text-3xl">{profit}%</p>
      </motion.div>

      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5, // 1 секунда + 0.5 секунди
          duration: 0.5,
        }}
        viewport={{ once: true }}
      >
        <p className="level text-sm mb-2">Цель {level}</p>
        <p className="date text-sm">Дата закрытия {date}</p>
      </motion.div>

      <motion.img
        className="absolute top-0 right-0"
        src={DealImg}
        alt=""
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1.6, // 1 секунда + 0.6 секунди
          duration: 0.5,
        }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default DealCard;
