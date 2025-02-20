import React from "react";
import Logo from "../assets/Logo.png";
function Footer() {
  return (
    <footer className="bg-[#0A0A1E] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-[#43A0E2] pt-4">
        {/* Логотип */}

        {/* Лінки */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
          <a href="#" className="hover:text-[#43A0E2]">
            ЦИФРИ
          </a>
          <a href="#" className="hover:text-[#43A0E2]">
            СДЕЛКИ ОНЛАЙН
          </a>
          <a href="#" className="hover:text-[#43A0E2]">
            О КОМПАНИИ
          </a>
          <a href="#" className="hover:text-[#43A0E2]">
            TRADEBLADE ЗТО
          </a>
          <a href="#" className="hover:text-[#43A0E2]">
            ТАРИФЫ
          </a>
          <a href="#" className="hover:text-[#43A0E2]">
            FAQ
          </a>
        </div>

        {/* Логотип TradeBlade */}
        <div className="md:justify-end">
          <img src={Logo} alt="TradeBlade Logo" className="h-30 " />
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2022 TradeBlade. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
