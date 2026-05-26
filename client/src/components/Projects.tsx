import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface GitHubProject {
  name: string;
  description: string;
  html_url: string;
}

// Mapeo de nombre de proyecto → imagen
const projectImages: Record<string, string> = {
  "My First Game": "/images/project1.png",
  "Proyecto-cuentos-AI": "/images/project2.png",
  "Chatbot": "/images/project3.png",
  "eda-grupal-2025": "/images/project4.png",
};

const DEFAULT_IMAGE = "/images/project1.png";

// Datos fuera del componente para evitar recrearlos en cada render
const excludedRepos = ['niftyboi', 'portfolio', 'uptolimit', 'hotel-veranum', 'fast-notes'];

const featuredCollaborations: GitHubProject[] = [
  {
    name: "My First Game",
    description: "Repositorio colaborativo con Lovnelies para crear un juego en Unity con C# como lenguaje de programación.",
    html_url: "https://github.com/lovnelies/MY_g1"
  }
];

// Fallback local en caso de que la API de GitHub falle
const fallbackProjects: GitHubProject[] = [
  ...featuredCollaborations,
  {
    name: "Proyecto-cuentos-AI",
    description: "Mini proyecto para probar funcionalidades y la conexión a la API de GPT para generar cuentos para niños de primaria.",
    html_url: "https://github.com/NiftyBoi/Proyecto-cuentos-AI"
  },
  {
    name: "Chatbot",
    description: "Chatbot interactivo construido con inteligencia artificial.",
    html_url: "https://github.com/NiftyBoi/Chatbot"
  },
  {
    name: "eda-grupal-2025",
    description: "Proyecto del diplomado en Machine Learning e IA. Análisis Exploratorio de Datos mínimo y reproducible sobre un dataset CSV, con buenas prácticas de Python, POO y pruebas automáticas.",
    html_url: "https://github.com/NiftyBoi/eda-grupal-2025"
  },
];

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/users/NiftyBoi/repos')
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const filtered = data
          .filter((repo: any) =>
            !repo.fork &&
            !excludedRepos.includes(repo.name.toLowerCase())
          )
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        setProjects([...featuredCollaborations, ...filtered]);
      })
      .catch(() => {
        setError(true);
        setProjects(fallbackProjects);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-16 font-poppins dark:bg-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-red-800 text-4xl font-semibold text-center mb-12">
          {t('projects.title')} <span className='text-slate-100 dark:text-black'>{t('projects.projects')}</span>
        </h2>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-red-800 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {error && (
          <p className="text-center text-slate-400 text-sm mb-6">
            No se pudo conectar con GitHub — mostrando proyectos guardados.
          </p>
        )}

        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-lg border-4 border-red-800 dark:border-red-800 overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#1d1e1e" }}
              >
                <div className="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                  <img
                    src={projectImages[project.name] || DEFAULT_IMAGE}
                    alt={project.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-red-800">
                    {t(`projectData.${project.name}.title`, { defaultValue: project.name })}
                  </h3>
                  <p className="text-slate-100 mt-2">
                    {t(`projectData.${project.name}.description`, { defaultValue: project.description || 'No description provided.' })}
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
        )}
      </div>
    </section>
  );
};

export default Projects;
