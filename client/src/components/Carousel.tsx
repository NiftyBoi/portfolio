import Marquee from "react-fast-marquee";
import { IconType } from "react-icons";
import { RiReactjsLine, RiTailwindCssFill, RiNodejsLine } from "react-icons/ri";
import { DiJavascript, DiHtml5, DiCss3   } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

type TechItem = {
  name: string;
  icon: IconType;
};

const Stack: TechItem[] = [
  { name: "Javascript", icon: DiJavascript},
  { name: "TypeScript", icon: BiLogoTypescript},  
  { name: "HTML", icon: DiHtml5},
  { name: "CSS", icon: DiCss3},
  { name: "React", icon: RiReactjsLine},
  { name: "Tailwind", icon: RiTailwindCssFill},
  { name: "Node.JS", icon: RiNodejsLine},
  
];

const Carousel = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-8 dark:bg-slate-100">
     <div className="max-w-5xl mx-auto px-4 ">
     <h2 className="text-center text-slate-100 font-poppins font-semibold mb-6 dark:bg-slate-100 dark:text-red-800 text-4xl">
      {t('carousel.title')}
    </h2>
    <Marquee speed={50} gradient={false}>
      {Stack.map((tech, index) => {
        const Icon = tech.icon; // <- Componente del ícono
        return (
          <div key={index} className="mx-8 flex flex-col items-center justify-center pt-6">
            <Icon className=" text-slate-100 text-5xl grayscale hover:grayscale-0 transition dark:bg-slate-100 duration-300 dark:text-black " />
            <p className="text-slate-100 mt-2 dark:bg-slate-100 dark:text-black">{tech.name}</p>
          </div>
        );
      })}
    </Marquee>
      </div>
    </div>
  );
};

export default Carousel;
