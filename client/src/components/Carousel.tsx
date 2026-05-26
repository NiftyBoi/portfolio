import Marquee from "react-fast-marquee";
import { IconType } from "react-icons";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript, BiLogoPython } from "react-icons/bi";
import { TbBrandPowershell } from "react-icons/tb";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

type TechItem = {
  name: string;
  icon: IconType;
};

const Stack: TechItem[] = [
  { name: "Python", icon: BiLogoPython },
  { name: "Javascript", icon: DiJavascript },
  { name: "TypeScript", icon: BiLogoTypescript },
  { name: "PowerShell", icon: TbBrandPowershell },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];

const Carousel = () => {
  const { t } = useTranslation();

  return (
    <div className="py-8 dark:bg-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-slate-100 font-poppins font-semibold mb-6 dark:bg-slate-100 dark:text-red-800 text-4xl">
          {t('carousel.title')}
        </h2>

        <Marquee speed={50} gradient={false}>
          {Stack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="mx-8 flex flex-col items-center justify-center pt-6">
                <Icon className="text-slate-100 text-5xl grayscale hover:grayscale-0 transition dark:bg-slate-100 duration-300 dark:text-black" />
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

export default Carousel;
