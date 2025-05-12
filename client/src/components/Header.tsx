import React, { useEffect, useState, useRef } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Header = () => {
  // Estado para controlar si el header está scrolleado (para efectos visuales)
  const [isScrolled, setIsScrolled] = useState(false);
  // Estado para controlar el modo oscuro/claro
  const [darkMode, setDarkMode] = useState(false);
  // Hook para traducción e internacionalización
  const { t, i18n } = useTranslation();
  // Estado para mostrar/ocultar el dropdown de idiomas
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  // Referencia para el dropdown (para detectar clicks fuera)
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Efecto para cerrar el dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Si hay un click fuera del dropdown, lo cerramos
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLanguageDropdown(false);
      }
    };

    // Agregamos el event listener
    document.addEventListener('mousedown', handleClickOutside);
    // Limpieza: removemos el event listener al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Efecto para manejar el scroll de la página
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll vertical es mayor a 50px, activamos el estado
      setIsScrolled(window.scrollY > 50);
    };
    
    // Agregamos el event listener
    window.addEventListener('scroll', handleScroll);
    // Limpieza: removemos el event listener al desmontar
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para manejar el modo oscuro/claro
  useEffect(() => {
    if (darkMode) {
      // Agregamos la clase 'dark' al elemento raíz
      document.documentElement.classList.add('dark');
    } else {
      // Removemos la clase 'dark' del elemento raíz
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Función para cambiar el idioma
  const changeLanguage = (lng: string) => {
    // Cambiamos el idioma usando i18n
    i18n.changeLanguage(lng);
    // Cerramos el dropdown
    setShowLanguageDropdown(false);
  };

  return (
    <header
      className={`fixed z-50 text-slate-100 backdrop-blur-md shadow-md transition-all duration-500 dark:text-slate-100 ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[73.2%] rounded-full px-6 py-2 bg-slate-100/10 dark:bg-black dark:text-black'
          : 'top-0 left-0 w-full rounded-none px-24 py-4 dark:bg-black'
      }`}
    >
      {/* Contenedor principal del header */}
      <div className={`flex justify-between items-center w-full ${isScrolled ? 'px-6 py-4' : 'px-24 py-4'}`}>
        {/* Título del portfolio */}
        <h1 className={`font-poppins font-bold ${isScrolled ? 'text-lg' : 'text-2xl'}`}>
          {t('header.title')} {/* Texto traducido */}
        </h1>
        

        {/* Barra de navegación */}
        <nav className="flex items-center space-x-4 md:space-x-8 text-base font-poppins">
          {/* Mapeamos los items del menú */}
          {['home', 'about', 'portfolio', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} className="group relative">
              {/* Texto del enlace traducido */}
              {t(`header.${item}`)}
              {/* Efecto de subrayado al hover */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-800 group-hover:w-full rounded transition-all duration-300 ease-in-out origin-left"></span>
            </a>
          ))} 
          {/* Separador visual */}
          <span className="mx-2 text-white dark:text-white">|</span>

          {/* Selector de idioma */}
          <div className="relative" ref={dropdownRef}>
            {/* Botón que abre/cierra el dropdown */}
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center text-white hover:text-red-800 transition-colors duration-200"
              aria-label="Change language"
            >
              {/* Muestra ES o EN según el idioma actual */}
              {i18n.language === 'es' ? 'ES' : 'EN'}
              {/* Icono de flecha que gira cuando el dropdown está abierto */}
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown de idiomas (solo visible cuando showLanguageDropdown es true) */}
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-16 bg-white dark:bg-gray-800 rounded-md shadow-lg z-50 overflow-hidden border border-gray-200 dark:border-gray-700">
                {/* Opción Español */}
                <button
                  onClick={() => changeLanguage('es')}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    i18n.language === 'es' 
                      ? 'bg-red-800 text-white'  // Estilo cuando está seleccionado
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'  // Estilo normal y hover
                  }`}
                >
                  ES
                </button>
                {/* Opción Inglés */}
                <button
                  onClick={() => changeLanguage('en')}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
                    i18n.language === 'en' 
                      ? 'bg-red-800 text-white'  // Estilo cuando está seleccionado
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'  // Estilo normal y hover
                  }`}
                >
                  EN
                </button>
              </div>
            )}
          </div>

          {/* Botón de modo oscuro/claro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-slate-100 hover:text-red-800 transition-colors duration-300 dark:text-yellow-500"
            aria-label="Toggle dark mode"
          >
            {/* Muestra el icono de sol o luna según el modo */}
            {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;