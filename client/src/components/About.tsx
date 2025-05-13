// Importación de React y el hook de traducción de i18next
import { useTranslation } from 'react-i18next';

// Componente funcional About
function About() {
  // Hook que permite usar textos traducidos con i18n
  const { t } = useTranslation();

  return (
    // Contenedor principal con diseño responsivo: columna en móviles y fila en pantallas medianas o mayores
    <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 max-w-6xl mx-auto px-6 py-12 h-full'>
      
      {/* Contenedor de la imagen (50% de ancho en pantallas medianas) */}
      <div className="w-full md:w-5/12 flex justify-center">
        {/* Imagen animada (GIF) con estilos de tamaño, borde redondeado y sombra */}
        <img 
          src="https://c.tenor.com/4XYAgRvDR2QAAAAd/tenor.gif" 
          alt="Luffy" 
          className='h-full min-h-[385px] w-auto object-cover rounded-xl shadow-xl'
        />
      </div>

      {/* Contenedor del texto (70% de ancho en pantallas medianas) */}
      <div className="w-full md:w-7/12 space-y-6 font-poppins">
        
        {/* Título principal con traducción y parte resaltada en rojo */}
        <h2 className='font-bold text-slate-100 text-4xl md:text-5xl dark:text-black'>
          {/* Primera parte del título (ej: "Sobre") */}
          <span>{t('about.title')}</span>
          {/* Segunda parte resaltada (ej: "mí") */}
          <span className='text-red-800'> {t('about.me')}</span>
        </h2> 
        
        {/* Contenedor del párrafo de descripción con fondo transparente o blanco dependiendo del modo */}
        <div className='bg-slate-100/10 dark:bg-gray-100/70 dark:backdrop-blur-lg border border-transparent dark:border-red-800 rounded-lg shadow-lg p-6'>
          
          {/* Párrafo de texto justificado y traducido */}
          <p className='text-slate-100 dark:text-black text-justify text-base md:text-lg leading-relaxed'>
            {t('about.description')}
          </p>
        </div>
      </div>
    </div>
  );
}

// Exportamos el componente para poder usarlo en otros archivos
export default About;
