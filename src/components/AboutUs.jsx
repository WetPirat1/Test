import React from "react";
import { motion } from "framer-motion";
import EmailInput from "./EmailInput";

export default function AboutUs() {
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="container mx-auto my-20 flex flex-col md:flex-row items-center md:items-start gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Текстовый блок */}
      <motion.div
        className="w-full md:w-1/2 px-6 md:px-10"
        variants={textVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl mb-6  hover:text-[#43a0e2] transition-colors duration-300 text-center md:text-left"
          variants={textVariants}
        >
          О компании
        </motion.h2>
        <motion.p
          className="text-gray-700  transition-colors duration-300 text-center md:text-left"
          variants={textVariants}
        >
          Мы опытная команда, для которой трейдинг – профессия. TradeBlade
          является авторизованным официальным брокером биржи Binance.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-700  transition-colors duration-300 text-center md:text-left"
          variants={textVariants}
        >
          Он представляет пользователям множество преимуществ, таких как более
          высокая скорость синхронизации API и возможность создать учетную
          запись Binance через платформу TradeBlade всего в 1 клик.
        </motion.p>
      </motion.div>

      {/* Карточка с EmailInput */}
      <motion.div
        className="bg-[#6A54FF] flex flex-col items-center px-6 md:px-20 py-10 md:h-60 w-full md:w-1/2 rounded-lg"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-center text-2xl md:text-3xl text-white mb-6 hover:text-[#43a0e2] transition-colors duration-300"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Попробуйте сейчас и получите <br /> 5 дней бесплатного пользования
        </motion.h3>
        <EmailInput />
      </motion.div>
    </motion.div>
  );
}
