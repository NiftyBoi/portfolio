import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => { 
    const { t } = useTranslation();
    return (
        <footer className="bg-black" >
            <div className="bg-black text-center flex justify-center items-center space-x-4 text-lg">
                <p className="text-center text-slate-100 py-4  font-poppins">{t('footer.title')}</p>
                <a href='https://www.linkedin.com/in/matias-cruz-51b8092a8/?trk=public-profile-join-page' 
                    className='text-slate-100 text-center block py-2 hover:text-red-800 transition-colors duration-300 font-poppins' >
                    Linkedin
                </a>
                <a href='https://github.com/NiftyBoi' 
                    className='text-slate-100 text-center block py-2 hover:text-red-800 transition-colors duration-300  font-poppins'>
                    Github
                </a>
            </div>
        </footer>
    );
}


export default Footer;

