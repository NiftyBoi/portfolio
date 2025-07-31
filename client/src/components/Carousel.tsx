// Importación de la librería de carrusel horizontal automático
import Marquee from "react-fast-marquee";

// Tipo para los íconos usados
import { IconType } from "react-icons";

// Importación de íconos específicos desde react-icons
import { RiReactjsLine, RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

// Hook de traducción para internacionalización
import { useTranslation } from 'react-i18next';

// Definimos un tipo para representar cada tecnología del stack
type TechItem = {
  name: string;     // Nombre de la tecnología
  icon: IconType;   // Ícono representativo (de tipo componente)
};

// Lista con las tecnologías que se van a mostrar en el carrusel
const Stack: TechItem[] = [
  { name: "Javascript", icon: DiJavascript },
  { name: "TypeScript", icon: BiLogoTypescript },  
  { name: "HTML", icon: DiHtml5 },
  { name: "CSS", icon: DiCss3 },
  { name: "React", icon: RiReactjsLine },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Node.JS", icon: RiNodejsLine },
];

// Componente principal: Carousel
const Carousel = () => {
  // Obtenemos la función de traducción desde el hook de i18next
  const { t } = useTranslation();

  return (
    // Fondo negro o claro dependiendo del modo (dark mode o light mode)
    <div className=" py-8 dark:bg-slate-100">

      {/* Contenedor del carrusel con ancho máximo y centrado */}
      <div className="max-w-5xl mx-auto px-4 ">

        {/* Título del carrusel, traducido con i18n */}
        <h2 className="text-center text-slate-100 font-poppins font-semibold mb-6 dark:bg-slate-100 dark:text-red-800 text-4xl">
          {t('carousel.title')}
        </h2>

        {/* Componente Marquee que desliza contenido horizontalmente */}
        <Marquee speed={50} gradient={false}>
          {/* Mapeamos cada tecnología y renderizamos su ícono y nombre */}
          {Stack.map((tech, index) => {
            const Icon = tech.icon; // Guardamos el componente del ícono
            return (
              <div
                key={index}
                className="mx-8 flex flex-col items-center justify-center pt-6"
              >
                {/* Ícono con estilo, efecto de escala de grises y hover */}
                <Icon className="text-slate-100 text-5xl grayscale hover:grayscale-0 transition dark:bg-slate-100 duration-300 dark:text-black" />
                
                {/* Nombre de la tecnología debajo del ícono */}
                <p className="text-slate-100 mt-2 dark:bg-slate-100 dark:text-black">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

// Exportamos el componente para poder usarlo en otras partes de la app
export default Carousel;
