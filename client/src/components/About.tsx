import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto px-6 py-12 h-full'>
      {/* Contenedor de la imagen - ahora con margen derecho */}
      <div className="w-full md:w-5/12 flex justify-center">
      <img 
        src="https://c.tenor.com/4XYAgRvDR2QAAAAd/tenor.gif" 
        alt="Luffy" 
        className='h-full min-h-[385px] w-auto object-cover rounded-xl shadow-xl'
      />
      </div>

      {/* Contenedor del texto - ahora con margen izquierdo y mejor alineación */}
      <div className="w-full md:w-7/12 space-y-6 font-poppins">
        <h2 className='font-bold text-slate-100 text-4xl md:text-5xl dark:text-black'>
          <span>{t('about.title')}</span>
          <span className='text-red-800'> {t('about.me')}</span>
        </h2> 
        
        <div className='bg-slate-100/10 dark:bg-gray-100/70 dark:backdrop-blur-lg border border-transparent dark:border-red-800 rounded-lg shadow-lg p-6'>
          <p className='text-slate-100 dark:text-black text-justify text-base md:text-lg leading-relaxed'>
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;