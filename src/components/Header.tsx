import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Manejar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modo oscuro/claro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed z-50 text-white backdrop-blur-md shadow-md transition-all duration-500 ease-in-out dark:text-white ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[53.2%] rounded-full px-6 py-2 bg-white/10 dark:bg-black dark:text-black'
          : 'top-0 left-0 w-full rounded-none px-24 py-4 dark:bg-black'
      }`}
    >
      <div
        className={`flex justify-between items-center w-full transition-all duration-500 ease-in-out ${
          isScrolled ? 'px-6 py-4' : 'px-24 py-4'
        }`}
      >
        <h1
          className={`font-poppins font-bold transition-all duration-500 ease-in-out ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}
        >
          Mi Portafolio
        </h1>

        <nav className="flex items-center space-x-4 md:space-x-8 transition-all duration-500 ease-in-out text-base font-poppins">
          {['Home', 'Sobre mi', 'Portafolio', 'Contactos'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-800 transition-all duration-300 group-hover:w-full rounded"></span>
            </a>
          ))}

          <span className="mx-2 text-white dark:text-white">|</span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white hover:text-red-800 transition-colors duration-300 dark:text-yellow-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

