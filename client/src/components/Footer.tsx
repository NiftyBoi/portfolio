import { useTranslation } from 'react-i18next';

const Footer = () => { 
    const { t } = useTranslation();
    return (
        <footer>
            <div className="bg-black-800/20 backdrop-blur-sm text-center flex flex-wrap justify-center items-center gap-4 text-lg px-4 py-4">
                <p className="text-slate-100 font-poppins">{t('footer.title')}</p>
                <a
                href="https://www.linkedin.com/in/matias-cruz-51b8092a8/?trk=public-profile-join-page"
                className="text-slate-100 hover:text-red-800 transition-colors duration-300 font-poppins"
                >
                Linkedin
                </a>
                <a
                href="https://github.com/NiftyBoi"
                className="text-slate-100 hover:text-red-800 transition-colors duration-300 font-poppins"
                >
                Github
                </a>
            </div>
        </footer>
    );
}


export default Footer;

