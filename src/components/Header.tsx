import React from 'react';

const Header = () => {
    return(
        <header className="fixed top-0 left-0 w-full bg-black text-white py-3 px-6 shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center px-24">
                <h1 className="text-2xl font-Lato">Mi Portafolio</h1>
                <nav className="space-x-8">
                <a href="#Home" className="group relative text-lg text-white">
                Home
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#About" className="group relative text-lg text-white">
                About
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#Portfolio" className="group relative text-lg text-white">
                Portfolio
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#Proyectos" className="group relative text-lg text-white">
                Proyectos
                    <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;