import { useTranslation } from 'react-i18next';

const Curriculum = () => {     
    const { t } = useTranslation(); 
    return(
            <section>
                {/* Botón de CV */}
                <a href="https://drive.google.com/file/d/1njgR18Ufc2rw33wFvkvTrOLVa10F0376/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                download 
                className="px-4 py-2 rounded-md bg-red-800 text-white font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                {t('curriculum.downloadCV')}
                </a>
            </section>
        );
    };
export default Curriculum;
