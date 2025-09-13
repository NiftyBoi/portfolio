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
            
            {/* Sección de atribuciones */}
            <div className="bg-black-900/30 backdrop-blur-sm text-center px-4 py-2 border-t border-slate-700/30">
                <p className="text-slate-400 text-sm font-poppins">
                    3D Model: "
                    <a 
                        href="https://sketchfab.com/3d-models/cute-cat-in-cute-banana-fb3eee24c9fc422ea256b95d5148931f"
                        className="text-slate-300 hover:text-red-400 transition-colors duration-300 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Cute cat in cute banana
                    </a>
                    " by SOBOL licensed under{' '}
                    <a 
                        href="https://creativecommons.org/licenses/by/4.0/"
                        className="text-slate-300 hover:text-red-400 transition-colors duration-300 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CC BY 4.0
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;