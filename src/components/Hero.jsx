// Hero.jsx
import React from "react";
import EmailInput from "./EmailInput";
import HeroImg from "../assets/Hero.png";

export default function Hero() {
  return (
    <section className="bg-[#030718] flex items-center justify-center">
      <div className="text-white px-10 py-16 container flex flex-col md:flex-row items-center justify-between">
        <div className="order-2 md:order-1 max-w-lg mt-6 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 hover:text-[#43a0e2] transition-colors duration-300 cursor-default">
            Моментально Копируй сделки профи трейдеров
          </h1>
          <p className="mb-6 hover:text-gray-200 transition-colors duration-300">
            Начни копировать сделки с успешной командой профессиональных
            трейдеров в автоматическом режиме.
          </p>
          <EmailInput />
          <p className="text-sm hover:text-[#43a0e2] transition-colors duration-300">
            5 дней бесплатного пользования
          </p>
        </div>
        <div className="order-1 md:order-2 w-full md:w-auto">
          <img
            src={HeroImg}
            alt="Hero Image"
            className="w-full md:w-auto hover:opacity-90 hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
