// Nav.jsx
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Logo from '../assets/Logo.png';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Цифры", href: "#" },
    { label: "Сделки онлайн", href: "#" },
    { label: "О компании", href: "#" },
    { label: "Как начать", href: "#" },
    { label: "Тарифы", href: "#" },
    { label: "Отзывы", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  const styles = {
    bmMenuWrap: {
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    bmMenu: {
      background: "#3B3B53",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
      overflow: "auto",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    bmItem: {
      display: "inline-block",
      textAlign: "center",
      marginBottom: "1em",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <nav className="bg-[#030718] flex items-center justify-center py-3">
      <div className="container flex items-center justify-between px-5">
        <div className="logo">
          <img
            src={Logo}
            alt="Trade Blade"
            className="h-15 hover:opacity-75 transition-opacity duration-300"
          />
        </div>
        <div className="block lg:hidden">
          <Menu
            right
            isOpen={isOpen}
            onStateChange={({ isOpen }) => setIsOpen(isOpen)}
            customBurgerIcon={
              <div className="text-white text-2xl hover:text-[#43a0e2] transition-colors duration-300">
                ☰
              </div>
            }
            burgerButtonClassName="focus:outline-none"
            styles={styles}
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="menu-item py-2 px-4 block text-white hover:bg-[#4a4a6a] hover:text-[#43a0e2] transition-all duration-300 rounded"
                onClick={handleMenuToggle}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#16213e] text-white px-4 py-2 rounded mt-4 block text-center hover:bg-[#1a284f] transition-colors duration-300"
              onClick={handleMenuToggle}
            >
              Вход
            </a>
            <a
              href="#"
              className="bg-[#43a0e2] text-white px-4 py-2 rounded mt-2 block text-center hover:bg-[#3591d3] transition-colors duration-300"
              onClick={handleMenuToggle}
            >
              Регистрация
            </a>
          </Menu>
        </div>
        <ul className="nav-links hidden lg:flex space-x-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="text-white hover:text-[#43a0e2] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[#43a0e2] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="auth-links hidden lg:flex space-x-4">
          <li>
            <a
              href="#"
              className="bg-[#16213e] text-white px-4 py-2 rounded hover:bg-[#1a284f] transition-colors duration-300"
            >
              Вход
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-[#43a0e2] text-white px-4 py-2 rounded hover:bg-[#3591d3] transition-colors duration-300"
            >
              Регистрация
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
