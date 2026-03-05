import "./Footer.css";

export const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <h3>Mouhamed Sène</h3>

        <p>Technologies du développement web</p>

        {/* Technologies */}

        <div className="tech-icons">

          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React"/>
          </a>

          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node"/>
          </a>

          <a href="https://developer.mozilla.org/fr/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript"/>
          </a>

          <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML"/>
          </a>

          <a href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS"/>
          </a>

          <a href="https://www.mongodb.com" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB"/>
          </a>

          <a href="https://git-scm.com" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"/>
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub"/>
          </a>

        </div>

        <p className="copyright">
          © {year} Mouhamed Sène
        </p>

      </div>

    </footer>
  );
};