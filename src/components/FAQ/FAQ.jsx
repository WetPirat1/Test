import React from 'react';
import FAQItem from './FAQItem';
import { motion } from "framer-motion";

const faqData = [
  {
    question: 'Что такое TradeBlade',
    answer: 'Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. \n\n На предоставляет полноценный доступ, так как базе высоких скоростей, сетевой инфраструктуры API и возможности сдачи учетных записей Binance через платформу TradeBlade всего в 1 клик.'
  },
  {
    question: 'Что TradeBlade предлагает инвесторам',
    answer: 'TradeBlade предлагает инвесторам различные инвестиционные возможности, включая доступ к стратегиям наших опытных трейдеров и управление рисками.'
  },
  {
    question: 'Должен ли я перевести свои средства на TradeBlade',
    answer: 'Нет, вам не обязательно переводить свои средства на TradeBlade. Мы работаем напрямую с вашим аккаунтом на Binance через API, что обеспечивает безопасность ваших средств.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function FAQ() {
  return (
    <motion.div 
      className="container flex justify-center flex-col mx-auto items-center p-4 w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mb-20 text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 
        className="text-2xl sm:text-3xl font-bold mb-6 text-center"
        variants={titleVariants}
      >
        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
      </motion.h2>
      <div className="space-y-4 w-full">
        {faqData.map((item, index) => (
          <FAQItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
            isOpen={index === 0}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default FAQ;
