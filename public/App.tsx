import React, { useState } from 'react';
import { Github, Linkedin, Mail, Database, Code, Server, ExternalLink, ChevronDown } from 'lucide-react';

type ProjectCategory = 'all' | 'data' | 'frontend' | 'backend';

interface Project {
  id: number;
  title: string;
  description: string;
  category: ProjectCategory;
  image: string;
  link: string;
}

interface Competency {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: {
    category: string;
    items: string[];
  }[];
}

const competencies: Competency[] = [
  {
    id: 'data',
    title: 'Análise de Dados',
    icon: <Database className="w-12 h-12 text-blue-500 mb-4" />,
    skills: [
      {
        category: 'Análise com Python',
        items: [
          'Pandas & NumPy',
          'Desenvolvimento de Pipeline ETL',
          'Jupyter Notebooks',
          'Limpeza e Pré-processamento de Dados'
        ]
      },
      {
        category: 'Banco de Dados & SQL',
        items: [
          'Otimização Avançada de Consultas SQL',
          'Modelagem e Design de Banco de Dados',
          'Tuning de Banco de Dados',
          'Arquitetura de Data Lakehouse'
        ]
      },
      {
        category: 'Visualização',
        items: [
          'Metabase',
          'Streamlit',
          'Power BI',
          'Matplotlib',
        ]
      }
    ]
  },
  {
    id: 'frontend',
    title: 'Desenvolvimento Frontend',
    icon: <Code className="w-12 h-12 text-blue-500 mb-4" />,
    skills: [
      {
        category: 'Tecnologias Principais',
        items: [
          'React & React Hooks',
          'TypeScript',
          'Next.js',
          'JavaScript Moderno (ES6+)'
        ]
      },
      {
        category: 'Estilização',
        items: [
          'Tailwind CSS',
          'CSS-in-JS',
          'Design Responsivo',
          'Animações & Transições'
        ]
      }
    ]
  },
  {
    id: 'backend',
    title: 'Desenvolvimento Backend',
    icon: <Server className="w-12 h-12 text-blue-500 mb-4" />,
    skills: [
      {
        category: 'Tecnologias de Servidor',
        items: [
          'Node.js & Express',
          'Design de APIs RESTful',
          'GraphQL',
          'Microsserviços'
        ]
      },
      {
        category: 'DevOps',
        items: [
          'Docker & Kubernetes',
          'Pipelines CI/CD',
          'Serviços AWS',
          'Administração Linux'
        ]
      },
      {
        category: 'Segurança',
        items: [
          'Autenticação & Autorização',
          'Segurança de APIs',
          'Criptografia de Dados',
          'Melhores Práticas de Segurança'
        ]
      }
    ]
  }
];

const projects: Project[] = [
  // {
  //   id: 1,
  //   title: "Market Trend Analysis Dashboard",
  //   description: "Interactive dashboard analyzing market trends using Python, Pandas, and SQL, with visualizations in Plotly.",
  //   category: "data",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
  //   link: "#"
  // },
  // {
  //   id: 2,
  //   title: "E-commerce Analytics Platform",
  //   description: "Customer behavior analysis and sales prediction platform using machine learning algorithms.",
  //   category: "data",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
  //   link: "#"
  // },
  {
    id: 3,
    title: "Antigo Portfólio",
    description: "Primeiro portfólio que construí, quando estava começando minha carreira na área de desenvolvimento.",
    category: "frontend",
    image: "/images/old_portfolio.png",
    link: "https://portfolio-ericson.netlify.app/"
  },
  {
    id: 4,
    title: "Clone Netflix",
    description: "Quando comecei a estudar React, este foi o primeiro projeto que fiz.",
    category: "frontend",
    image: "/images/netflix_clone.png",
    link: "https://ericsonmatheus-clone-net.netlify.app/"
  },
  {
    id: 5,
    title: "Desafio Clone Whatsapp",
    description: "Este projeto foi um desafio para uma vaga de desenvolvedor Full-Stack onde eu precisei desenvolver um clone do whatsapp. Eu fui aprovado neste desafio",
    category: "frontend",
    image: "/images/frontend_whatsapp.png",
    link: "https://ericsonmath-whats-desafio.netlify.app/"
  },
  {
    id: 6,
    title: "Desafio Clone Whatsapp",
    description: "Este projeto foi um desafio para uma vaga de desenvolvedor Full-Stack onde eu precisei desenvolver um clone do whatsapp. Neste link eu disponibilizo o código backend do desafio onde eu fui aprovado para a vaga.",
    category: "backend",
    image: "/images/backend_whatsapp.jpg",
    link: "https://github.com/ericsonmatheus/clone-whatsapp-backend"
  },
  // {
  //   id: 7,
  //   title: "Microservices Architecture",
  //   description: "Distributed system using microservices architecture with Docker and Kubernetes.",
  //   category: "backend",
  //   image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=500",
  //   link: "#"
  // }
];

function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedCompetency, setExpandedCompetency] = useState<string | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleCompetency = (id: string) => {
    setExpandedCompetency(expandedCompetency === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <img 
          src="/images/perfil.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mb-6 object-cover border-4 border-blue-500"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ericson Matheus</h1>
        <p className="text-xl text-blue-400 mb-6">Analista de Dados & Desenvolvedor Full-Stack</p>
        <div className="flex gap-4">
          <a href="https://github.com/ericsonmatheus" className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/ericson-matheus/" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:ericson.matheus.2016@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        {/* <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <p className="text-gray-300 leading-relaxed">
            With over 8 years of experience in technology, I've evolved from a data analyst into a versatile full-stack developer. 
            My journey began in data analysis, where I developed a strong foundation in transforming complex datasets into actionable insights. 
            This analytical background uniquely influences my approach to software development, allowing me to create data-driven solutions 
            that combine robust backend architecture with intuitive user interfaces.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Currently, I specialize in building scalable web applications and data visualization tools that bridge the gap between 
            data science and web development. I'm passionate about using technology to solve real-world problems and am always 
            eager to learn and adapt to new challenges in this ever-evolving field.
          </p>
        </div> */}
      </header>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Principais Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competencies.map((competency) => (
            <div 
              key={competency.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleCompetency(competency.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  {competency.icon}
                  <ChevronDown 
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      expandedCompetency === competency.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{competency.title}</h3>
                <div className={`overflow-hidden transition-all duration-300 ${
                  expandedCompetency === competency.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}>
                  {competency.skills.map((skillCategory, index) => (
                    <div key={index} className="mt-4">
                      <h4 className="text-blue-400 font-medium mb-2">{skillCategory.category}</h4>
                      <ul className="space-y-2 text-gray-300">
                        {skillCategory.items.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Portfólio de Projetos</h2>
        
        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'all' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Todos os Projetos
          </button>
          <button
            onClick={() => setActiveCategory('data')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'data' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Análise de Dados
          </button>
          <button
            onClick={() => setActiveCategory('frontend')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'frontend' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory('backend')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeCategory === 'backend' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            Backend
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-3 py-1 bg-blue-500 text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver Projeto <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Vamos conversar!</h2>
          <p className="text-gray-300 mb-8">
            Estou sempre em busca de novas oportunidades e colaborações.
            Fique à vontade para entrar em contato, seja para discutir um projeto ou apenas para dizer olá!
          </p>
          <a 
            href="mailto:ericson.matheus.2016@gmail.com"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar E-mail
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-700">
        <p>© 2024 Ericson Matheus. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;