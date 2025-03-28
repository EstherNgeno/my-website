import React, { useContext } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <nav className="top-0 z-50 duration-300">
            <div className="container py-2 flex justify-between items-center md:justify-between">
                <div className="px-10 py-1 font-bold font-serif text-xl text-gray-800 dark:text-white">
                    {`<EN/>`}
                </div>
                <div className="hidden md:flex items-center py-[11px] px-[6px] text-base font-serif rounded-full space-x-2 backdrop-blur-xl font-medium border-2 p-1 border-fuchsia-300 text-lg text-black dark:text-white">
                    <a href="#home" className="nav-link transition-colors m-0 font-medium px-4 py-2 rounded-full hover:bg-white focus:bg-white active:bg-white dark:hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600">Home</a>
                    <a href="#about" className="nav-link transition-colors m-0 font-medium px-4 py-2 rounded-full hover:bg-white focus:bg-white active:bg-white dark:hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600">About</a>
                    <a href="#projects" className="nav-link transition-colors m-0 font-medium px-4 py-2 rounded-full hover:bg-white focus:bg-white active:bg-white dark:hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600">Projects</a>
                    <a href="#contacts"className="nav-link transition-colors m-0 font-medium px-4 py-2 rounded-full hover:bg-white focus:bg-white active:bg-white dark:hover:bg-gray-600 focus:bg-gray-600 active:bg-gray-600">Contacts</a>
                </div>
                <button
                    onClick={() => setDarkMode((prev) => !prev)} 
                    className="p-2 transition pr-40"
                >
                    {darkMode ? (
                        <MoonIcon className="w-6 h-6 text-gray-200" />
                    ) : (
                        <SunIcon className="w-6 h-6 text-gray-900" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
