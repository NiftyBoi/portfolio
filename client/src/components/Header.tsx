import { useEffect, useState, useRef } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  const handleTitleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
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

        {/* Botón hamburguesa (solo móvil) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-red-800 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm md:text-lg font-poppins">
          {['home', 'portfolio', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative whitespace-nowrap hover:text-red-800 transition-colors duration-300"
            >
              {t(`header.${item}`)}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-800 group-hover:w-full rounded transition-all duration-300 ease-in-out origin-left"></span>
            </a>
          ))}

          <span className="mx-2 text-white dark:text-white">|</span>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center text-white hover:text-red-800 transition-colors duration-200 text-sm"
              aria-label="Change language"
            >
              {i18n.language === 'es' ? 'ES' : 'EN'}
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-16 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => changeLanguage('es')}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    i18n.language === 'es'
                      ? 'bg-red-800 text-white'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
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
            {darkMode ? <FaSun className="text-xl md:text-2xl" /> : <FaMoon className="text-xl md:text-2xl" />}
          </button>
        </nav>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 flex flex-col items-center gap-4 font-poppins border-t border-white/10 pt-4">
          {['home', 'portfolio', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={handleNavClick}
              className="text-lg hover:text-red-800 transition-colors duration-300"
            >
              {t(`header.${item}`)}
            </a>
          ))}

          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                i18n.language === 'es' ? 'bg-red-800 text-white' : 'text-white hover:text-red-800'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                i18n.language === 'en' ? 'bg-red-800 text-white' : 'text-white hover:text-red-800'
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-slate-100 hover:text-red-800 transition-colors duration-300 dark:text-yellow-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
