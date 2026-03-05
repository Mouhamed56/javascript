import "./Header.css";

export const Header = () => {
  return (
    <header className="header">

      <div className="navbar">

        <h1 className="logo">Outils Technologies</h1>

        <nav className="nav">

          <a href="#home">Accueil</a>
          <a href="#technologies">Technologies</a>
          <a href="#articles">Articles</a>
          <a href="#contact">Contact</a>

        </nav>

      </div>

      <div id="home" className="hero">

        <h2>Technologies du Développement Web</h2>

        <p>
          Explorez les technologies modernes utilisées pour créer
          des applications web performantes.
        </p>

      </div>

    </header>
  );
};