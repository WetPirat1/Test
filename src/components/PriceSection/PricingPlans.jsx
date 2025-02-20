import React from "react";
import PlanCard from "./PlanCard";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const plans = {
  spot: {
    standard: {
      price: 111,
      discount: 10,
      features: [
        "Тестове речення споту стандарт",
        "Автоматическое и полуавтоматическое комбинированное скальп",
        "Личный кабинет со статистикой",
        "Среднесрочные сделки с уровнями на бора порфтренда",
      ],
    },
    vip: {
      price: 222,
      discount: 20,
      features: [
        "Тестове речення споту віп",
        "Автоматическое и полуавтоматическое комбинированное скальп",
        "Личный кабинет со статистикой",
        "Краткосрочные, среднесрочные и инвест сделки",
        "Доступ в Vip чат с команда",
        "Наш авторский курс по трейдингу",
      ],
    },
  },
  futures: {
    standard: {
      price: 333,
      discount: 30,
      features: [
        "Тестове речення фьючерсу стандарт",
        "Автоматическое и полуавтоматическое комбинированное скальп",
        "Личный кабинет со статистикой",
        "Среднесрочные сделки с уровнями на бора порфтренда",
      ],
    },
    vip: {
      price: 444,
      discount: 40,
      features: [
        "Тестове речення фьючерсу віп",
        "Автоматическое и полуавтоматическое комбинированное скальп",
        "Личный кабинет со статистикой",
        "Краткосрочные, среднесрочные и инвест сделки",
        "Доступ в Vip чат с команда",
        "Наш авторский курс по трейдингу",
      ],
    },
  },
};

function PricingPlans({ isFutures }) {
  const selectedPlans = isFutures ? plans.futures : plans.spot;

  return (
    <motion.div
      className="xl: block md:flex space-x-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PlanCard
        title="STANDARD"
        price={selectedPlans.standard.price}
        discount={selectedPlans.standard.discount}
        features={selectedPlans.standard.features}
      />
      <PlanCard
        title="VIP"
        price={selectedPlans.vip.price}
        discount={selectedPlans.vip.discount}
        features={selectedPlans.vip.features}
        isVip={true}
      />
    </motion.div>
  );
}

export default PricingPlans;
