import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 bg-grey/90 text-white backdrop-blur-md shadow-md transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'top-4 left-1/2 -translate-x-1/2 w-[50%] rounded-full px-6 py-2'
          : 'top-0 left-0 w-full rounded-none px-24 py-4'
      }`}
    >
      <div className="flex justify-between items-center w-full transition-all duration-500 ease-in-out">
        <h1
          className={`font-poppins font-bold transition-all duration-500 ease-in-out ${
            isScrolled ? 'text-lg' : 'text-2xl'
          }`}
        >
          Mi Portafolio
        </h1>
        <nav className="space-x-4 md:space-x-8 transition-all duration-500 ease-in-out">
          {['Home', 'About', 'Portafolio', 'Contactos'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="group relative text-base font-poppins text-white"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A52A2A] transition-all duration-300 group-hover:w-full rounded"></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;

