"use client"
import React, { useState } from "react";
import { ButtonWhatsApp } from "../buttonwhatsapp";



export function Navbar() {
    const [active, setActive] = useState("Home");

    const menuItems = [
        { label: "Home", href: "#Home" },
        { label: "Quem sou eu", href: "#Soueu" },
        { label: "Depoimentos", href: "#testimonials" },
        { label: "Parceiros", href: "#costumer" },
        { label: "Contato", href: "#contact" },
    ];

    return (
        <div className="px-0 my-0 dark:bg-dark rounded-xl ">
            <nav className="fixed top-0 bg-[#111111] dark:bg-dark shadow-xl w-full z-50 px-12">
                <div className="w-full px-0">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="#" className="lg:text-xl md:text-lg text-sm font-bold text-gray-700 dark:text-white capitalize">
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">R</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">A</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">F</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">A</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">E</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1.5s_linear_infinite]">L</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_1s_linear_infinite]">M</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2s_linear_infinite]">A</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">R</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">C</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">O</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">L</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">I</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">N</span>
                                <span className="px-1 bg-green-400 dark:bg-lime-400 rounded-full animate-[ping_2S_linear_infinite]">O</span>
                            </a>
                        </div>

                        {/* Menu Items */}
                        <div className="hidden md:flex space-x-8">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActive(item.label)}
                                    className={
                                        active === item.label
                                            ? "text-lime-400 border-b-2 border-lime-400 pb-1 transition-colors"
                                            : "text-white hover:text-lime-400 transition-colors"
                                    }
                                >
                                    {item.label}

                                </a>
                            ))}
                            <ButtonWhatsApp size="sm"/>
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button id="mobile-menu-button" className="text-blue-700 dark:text-blue-700 hover:text-blue-700 focus:outline-none">
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}