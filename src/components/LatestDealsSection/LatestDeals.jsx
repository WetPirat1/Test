// LatestDeals.jsx
import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import DealCard from "./DealCard";

// Оновлені варіанти анімацій
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    },
  },
};

export default function LatestDeals() {
  const deals = [
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.6206",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "BTC/USDT",
      type: "SPOT - 1 минута назад",
      profit: "6.02",
      level: "3",
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT - 1 минута назад",
      profit: "16.3",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "0.963",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.62",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.6206",
      level: "4",
      date: "03.10.2022",
    },
    {
      pair: "BNB/USDT",
      type: "SPOT - 1 минута назад",
      profit: "6.02",
      level: "3",
      date: "18.10.2022",
    },
    {
      pair: "SOL/USDT",
      type: "SPOT - 1 минута назад",
      profit: "2",
      level: "4",
      date: "13.10.2022",
    },
    {
      pair: "GRASS/USDT",
      type: "SPOT - 1 минута назад",
      profit: "1",
      level: "4",
      date: "10.10.2022",
    },
    {
      pair: "TRUMP/USDT",
      type: "SPOT - 1 минута назад",
      profit: "-1000",
      level: "4",
      date: "26.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.6206",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "BTC/USDT",
      type: "SPOT - 1 минута назад",
      profit: "6.02",
      level: "3",
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT - 1 минута назад",
      profit: "16.3",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "0.963",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "NEAR/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.62",
      level: "4",
      date: "06.10.2022",
    },
    {
      pair: "ETH/USDT",
      type: "SPOT - 1 минута назад",
      profit: "58.6206",
      level: "4",
      date: "03.10.2022",
    },
    {
      pair: "BNB/USDT",
      type: "SPOT - 1 минута назад",
      profit: "6.02",
      level: "3",
      date: "18.10.2022",
    },
    {
      pair: "SOL/USDT",
      type: "SPOT - 1 минута назад",
      profit: "2",
      level: "4",
      date: "13.10.2022",
    },
    {
      pair: "GRASS/USDT",
      type: "SPOT - 1 минута назад",
      profit: "1",
      level: "4",
      date: "10.10.2022",
    },
    {
      pair: "TRUMP/USDT",
      type: "SPOT - 1 минута назад",
      profit: "-1000",
      level: "4",
      date: "26.10.2022",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false,
    align: "start",
    slidesToScroll: 1 
  });
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback(() => {
    if (emblaApi) {
      setScrollProgress(emblaApi.scrollProgress() * 100);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", onScroll);
      return () => emblaApi.off("scroll", onScroll);
    }
  }, [emblaApi, onScroll]);

  return (
    <motion.section 
      className="bg-[#030718] text-white py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-8 uppercase text-center"
          variants={titleVariants}
        >
          Прошедшие сделки
        </motion.h2>
        
        <div className="embla overflow-hidden" ref={emblaRef}>
          <motion.div 
            className="embla__container flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {deals.map((deal, index) => (
              <div 
                className="embla__slide flex-none"
                key={index}
              >
                <div className="p-2">
                  <DealCard
                    pair={deal.pair}
                    type={deal.type}
                    profit={deal.profit}
                    level={deal.level}
                    date={deal.date}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="w-full h-1 bg-gray-800 mt-8 mx-auto max-w-md rounded-full overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress / 100 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}



