import Marquee from "react-fast-marquee";
import { IconType } from "react-icons";
import { RiReactjsLine, RiTailwindCssFill  } from "react-icons/ri";
import { DiJavascript, DiHtml5, DiCss3   } from "react-icons/di";
import { TbBrandCSharp, TbSql  } from "react-icons/tb";

type TechItem = {
  name: string;
  icon: IconType;
};

const Stack: TechItem[] = [
  { name: "React", icon: RiReactjsLine},
  { name: "Javascript", icon: DiJavascript},
  { name: "HTML", icon: DiHtml5},
  { name: "css", icon: DiCss3},
  { name: "Tailwind", icon: RiTailwindCssFill},
  { name: "C sharp", icon: TbBrandCSharp},
  { name: "SQL", icon: TbSql},
];

const Carousel = () => {
  return (
    <div className="bg-black  py-8">
     <div className="max-w-5xl mx-auto px-4">
     <h2 className="text-center text-white text-3xl font-poppins font-semibold mb-6">
      Tecnologías
    </h2>
    <Marquee speed={50} gradient={false}>
      {Stack.map((tech, index) => {
        const Icon = tech.icon; // <- Componente del ícono
        return (
          <div key={index} className="mx-8 flex flex-col items-center justify-center">
            <Icon className=" text-white text-5xl grayscale hover:grayscale-0 transition duration-300" />
            <p className="text-white mt-2">{tech.name}</p>
          </div>
        );
      })}
    </Marquee>
      </div>
    </div>
  );
};

export default Carousel;
