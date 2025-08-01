import { useEffect, useState, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed z-50 left-1/2 -translate-x-1/2 transform transition-all duration-500 ease-in-out backdrop-blur-md shadow-md dark:text-slate-100 ${isScrolled
          ? 'top-4 w-[90%] max-w-4xl px-4 py-2 rounded-full scale-95 bg-slate-100/10 dark:bg-black/40 text-white'
          : 'top-0 w-full px-6 sm:px-12 py-6 rounded-none scale-100 bg-black/50 dark:bg-black/80 text-slate-200'}
      `}
    >
      <div className={`flex justify-between items-center w-full ${isScrolled ? 'px-2 sm:px-6 py-2 sm:py-3' : 'px-0'}`}>
        <h1
          onClick={handleTitleClick}
          className={`font-poppins font-bold cursor-pointer hover:text-red-800 transition-all duration-300 whitespace-nowrap transform ${
            isScrolled ? 'text-sm sm:text-lg scale-95' : 'text-2xl sm:text-3xl scale-100'
          }`}
        >
          {t('header.title')}
        </h1>

        <nav className="flex items-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-sm sm:text-base md:text-lg font-poppins">
          {['home', 'portfolio', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative whitespace-nowrap hover:text-red-800 transition-colors duration-300"
            >
              <span className="hidden sm:inline">{t(`header.${item}`)}</span>
              <span className="sm:hidden">
                {item === 'home' && 'H'}
                {item === 'portfolio' && 'P'}
                {item === 'contact' && 'C'}
              </span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-800 group-hover:w-full rounded transition-all duration-300 ease-in-out origin-left"></span>
            </a>
          ))}

          <span className="hidden sm:inline mx-2 text-white dark:text-white">|</span>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center text-white hover:text-red-800 transition-colors duration-200 text-xs sm:text-sm"
              aria-label="Change language"
            >
              {i18n.language === 'es' ? 'ES' : 'EN'}
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-200 ${
                  showLanguageDropdown ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-12 sm:w-16 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`block w-full text-left px-2 sm:px-4 py-2 text-xs sm:text-sm transition-colors duration-200 ${
                    i18n.language === 'es'
                      ? 'bg-red-800 text-white'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-2 sm:px-4 py-2 text-xs sm:text-sm transition-colors duration-200 ${
                    i18n.language === 'en'
                      ? 'bg-red-800 text-white'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-slate-100 hover:text-red-800 transition-colors duration-300 dark:text-yellow-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-lg sm:text-xl md:text-2xl" />
            ) : (
              <FaMoon className="text-lg sm:text-xl md:text-2xl" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
