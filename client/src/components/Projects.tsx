// Importa React para poder usar JSX
import React from "react";

// Importa una imagen para mostrar en el primer proyecto
import imgProjects1 from "../assets/project1.jpeg";

// Importa el hook useTranslation del paquete 'react-i18next' para usar traducciones
import { useTranslation } from 'react-i18next';

// 1. Define la interfaz Project que indica qué propiedades debe tener cada proyecto
interface Project {
  title: string;        // Título del proyecto
  description: string;  // Descripción del proyecto
}

// Componente funcional Projects
const Projects = () => {
  // Hook de traducción. 't' es la función que permite acceder a los textos traducidos
  const { t } = useTranslation();
  
  // 2. Obtiene la lista de proyectos desde el archivo de traducciones
  // 'returnObjects: true' permite que se devuelva un array de objetos en lugar de una cadena
  const projects = t('projects.items', { returnObjects: true }) as Project[];
  
  return (
    // Sección HTML con identificador 'projects' y estilos de fondo y espaciado
    <section id="projects" className="bg-black py-16 font-poppins dark:bg-slate-100">
      {/* Contenedor con ancho máximo y padding lateral */}
      <div className="max-w-6xl mx-auto px-4">
        {/* Título principal de la sección con estilos */}
        <h2 className="text-red-800 text-4xl font-semibold font-poppins text-center mb-12">
          {t('projects.title')} <span className='text-slate-100 dark:text-black'>{t('projects.projects')}</span> 
        </h2>

        {/* Grid responsiva: 2 columnas en pantallas medianas y 3 en grandes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapea cada proyecto y crea una tarjeta visual para cada uno */}
          {projects.map((project, index) => (
            <div 
              key={index} // Clave única para cada elemento del mapa
              className="rounded-lg border-4 border-red-800 dark:border-red-800 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#1d1e1e" }} // Color de fondo personalizado
            >
              {/* Imagen del proyecto. La primera usa una importación directa; las demás, rutas dinámicas */}
              <img
                src={index === 0 ? imgProjects1 : `/images/project${index+1}.jpeg`}
                alt={project.title}
                className="w-full h-64 object-cover" // Ocupa todo el ancho y 64 de alto, recortando según sea necesario
              />

              {/* Contenedor de texto de la tarjeta */}
              <div className="p-4">
                {/* Título del proyecto */}
                <h3 className="text-2xl font-semibold font-poppins text-red-800">
                  {project.title}
                </h3>

                {/* Descripción del proyecto */}
                <p className="text-slate-100 mt-2">{project.description}</p>

                {/* Enlace para ver más sobre el proyecto (actualmente sin funcionalidad) */}
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

// Exporta el componente para poder ser usado en otros archivos
export default Projects;
