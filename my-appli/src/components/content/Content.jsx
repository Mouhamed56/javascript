import "./Content.css";

export const Content = () => {

  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Bibliothèque JavaScript pour créer des interfaces modernes."
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "Environnement JavaScript côté serveur."
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      description: "Langage qui rend les sites interactifs."
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      description: "Structure des pages web."
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      description: "Stylisation des pages web."
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "Base de données NoSQL moderne."
    },
    {
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Framework backend pour Node.js."
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      description: "Système de gestion de versions."
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      description: "Plateforme de collaboration pour développeurs."
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description: "Plateforme de conteneurisation."
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      description: "Langage puissant pour le web et l'IA."
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "JavaScript avec typage statique."
    }
  ];

  return (
    <main className="content">

      <h2 className="title">Technologies du Développement Web</h2>

      <div className="tech-grid">

        {technologies.map((tech, index) => (

          <div className="tech-card" key={index}>

            <img src={tech.icon} alt={tech.name} className="tech-icon" />

            <h3>{tech.name}</h3>

            <p>{tech.description}</p>

          </div>

        ))}

      </div>

    </main>
  );
};