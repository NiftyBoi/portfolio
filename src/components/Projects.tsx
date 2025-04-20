// src/components/Projects.tsx
import React from "react";

const projects = [
  {
    title: "Proyecto 1Título",
    description: "Este es un proyecto increíble donde creamos una app móvil.",
    img: "/images/project1.jpeg",
    link: "#", // Enlace al proyecto o repositorio
  },
  {
    title: "Proyecto 2 Título",
    description: "Este proyecto trata de como el bl cambió al mundo.",
    img: "/images/project2.jpeg",
    link: "#",
  },
  {
    title: "Proyecto 3 Título",
    description: "Hola este es un proyecto que explora las características negativas del ser humano.",
    img: "/images/project3.jpeg",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-white text-4xl font-semibold text-center mb-12">
          My Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}   className="rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#1d1e1e"}}>
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <a
                  href={project.link}
                  className=" hover:underline mt-4 inline-block"
                  style={{color: "#A52A2A"}}
                >
                  View Project
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
