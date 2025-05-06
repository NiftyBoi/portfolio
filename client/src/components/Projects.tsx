import React from "react";
import imgProjects1 from "../assets/project1.jpeg";
import { useTranslation } from 'react-i18next';

// 1. Define la interfaz
interface Project {
  title: string;
  description: string;
}

const Projects = () => {
  const { t } = useTranslation();
  
  // 2. Haz el type assertion
  const projects = t('projects.items', { returnObjects: true }) as Project[];
  
  return (
    <section id="projects" className="bg-black py-16 font-poppins dark:bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-red-800 text-4xl font-semibold font-poppins text-center mb-12">
          {t('projects.title')} <span className='text-slate-100 dark:text-black'>{t('projects.projects')}</span> 
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="rounded-lg border-4 border-red-800 dark:border-red-800 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#1d1e1e" }}
            >
              <img
                src={index === 0 ? imgProjects1 : `/images/project${index+1}.jpeg`}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold font-poppins text-red-800">
                  {project.title}
                </h3>
                <p className="text-slate-100 mt-2">{project.description}</p>
                <a
                  href="#"
                  className="hover:underline hover:text-red-400 mt-4 inline-block text-slate-100"
                >
                  {t('projects.viewProject')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;