import { useTranslation } from 'react-i18next';
import Cat3d from './models3d/Cat3d';

function About() {
  const { t } = useTranslation();

  const paragraphClass =
    'text-slate-100 dark:text-black text-justify text-base md:text-xl leading-snug'; // más ancho, menos alto

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl px-6 mx-auto py-12">
      
      {/* Modelo 3D */}
      <div className="w-full md:w-4/12 flex justify-center md:mr-20">
        <Cat3d />
      </div>


      {/* Texto descriptivo */}
      <div className="w-full md:w-8/12 space-y-6 font-poppins">
        <h2 className="font-bold text-slate-100 text-5xl md:text-6xl dark:text-black">
          <span>{t('about.title')}</span>
          <span className="text-red-800"> {t('about.me')}</span>
        </h2>

        <div className="bg-slate-100/10 dark:bg-gray-100/70 dark:backdrop-blur-lg border border-transparent dark:border-red-800 rounded-lg shadow-lg p-8 space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <p key={i} className={paragraphClass}>
              {t(`about.description.p${i}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
