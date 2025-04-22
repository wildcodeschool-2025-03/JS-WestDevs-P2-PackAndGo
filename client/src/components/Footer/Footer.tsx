import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <article>
      <p>The Adventurers of the lost code</p>
      <img className="github-logo-left" src="./logo-github.svg" alt="GitHub logo" />
      </article>
      <ul>
        <li>
          <a href="/">Mentions légales</a>
        </li>
        <li>
          <a href="/">CGU</a>
        </li>
        
        <li>
          <a
            href="https://github.com/wildcodeschool-2025-03/JS-WestDevs-P2-PackAndGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo-right" src="./logo-github.svg" alt="GitHub logo" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
