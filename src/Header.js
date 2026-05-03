import "./Header.css";

function Header() {
  const date = new Date().toLocaleDateString("fr-FR");

  return (
    <header className="header">
      <h1>SénTransport</h1>
      <h2>Gestion du réseau DDD</h2>
      <p>{date}</p>
    </header>
  );
}

export default Header;