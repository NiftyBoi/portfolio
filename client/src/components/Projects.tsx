import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
}

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<GitHubProject[]>([]);

  const excludedRepos = ['chatbot', 'niftyboi', 'portfolio', 'uptolimit'];
 
  // 👇 Mapeo de nombres personalizados
  const customNames: { [key: string]: string } = {
    "Hotel-Veranum": "Hotel Veranum"
    // Agrega más mapeos aquí
  };

  // 👇 Mapeo de descripciones personalizadas
  const customDescriptions: { [key: string]: string } = {
    "Hotel-Veranum": "Proyecto para Hotel Veranum, con ingreso y registro de usuarios, reserva de habitaciones y paneles administrativos.",
    "Fast-Notes": "Notas con estilo para tu computadora o portátil.",
    // Agrega más descripciones aquí
  };

  // 👇 Agrega colaboraciones manualmente aquí
  const featuredCollaborations: GitHubProject[] = [
    {
      name: "My First Game",
      description: "Repositorio colaborativo con Lovnelies para crear un juego en Unity con C# como lenguaje de programación.",
      html_url: "https://github.com/lovnelies/MY_g1"
    }
  ];

  useEffect(() => {
    fetch('https://api.github.com/users/NiftyBoi/repos')
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((repo: any) => 
            !repo.fork && 
            !excludedRepos.includes(repo.name.toLowerCase())
          )
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setProjects([...featuredCollaborations, ...filtered]);
      });
  }, []);

  return (
    <section id="projects" className="bg-black py-16 font-poppins dark:bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-red-800 text-4xl font-semibold text-center mb-12">
          {t('projects.title')} <span className='text-slate-100 dark:text-black'>{t('projects.projects')}</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="rounded-lg border-4 border-red-800 dark:border-red-800 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#1d1e1e" }}
            >
              {/* Contenedor con flexbox para centrar la imagen */}
              <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <img
                  src={`/images/project${index + 1}.png`}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-semibold text-red-800">
                  {customNames[project.name] || project.name}
                </h3>
                <p className="text-slate-100 mt-2">
                  {customDescriptions[project.name] || project.description || 'No description provided.'}
                </p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
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