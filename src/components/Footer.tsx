import React from 'react';

const Footer = () => { 
    return (
        <footer className="bg-black" >
            <div className="bg-black text-center flex justify-center items-center space-x-4 text-lg">
                <p className="text-center text-white py-4  font-poppins"> © 2025 Mi Portafolio. Todos los derechos reservados.</p>
                <a href='https://www.linkedin.com/in/matias-cruz-51b8092a8/?trk=public-profile-join-page' 
                    className='text-white text-center block py-2 hover:text-[#A52A2A] transition-colors duration-300 font-poppins' >
                    Linkedin
                </a>
                <a href='https://github.com/NiftyBoi' 
                    className='text-white text-center block py-2 hover:text-[#A52A2A] transition-colors duration-300  font-poppins'>
                    Github
                </a>
            </div>
        </footer>
    );
}


export default Footer;

