import React from "react";
import CountUp from "react-countup";

export default function Stats() {
  return (
    <div className="text-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-around items-center text-center md:text-left">
          <div>
            <h2 className="text-xl mb-2 text-black uppercase">Цифры</h2>
            <p className="text-sm mb-4 text-black ">Сентябрь 2022</p>
          </div>
          <div>
            <p className="text-sm mt-2 uppercase text-black">
              ТОРГОВЫЙ ПРИБЫЛЬ
            </p>
            <CountUp
              start={1}
              end={2756}
              duration={4}
              suffix="%"
              className="text-4xl md:text-6xl font-bold text-[#43a0e2]"
            />
          </div>
          <div>
            <p className="text-sm mt-2 uppercase text-black">
              Фьючерсных и спотовых сделок
            </p>
            <CountUp
              start={1}
              end={67}
              duration={4}
              className="text-4xl md:text-6xl font-bold text-[#43a0e2]"
            />
          </div>
          <div>
            <p className="text-sm mt-2 uppercase text-black">
              ПРИБЫЛЬ ПОДЛИЧНИКОВ
            </p>
            <CountUp
              start={1}
              end={375000}
              duration={4}
              className="text-4xl md:text-6xl font-bold text-[#43a0e2]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
