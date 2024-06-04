import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/cerine-logo-min.png" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Landing</Link>
            </li>
            <li>
              <Link href="/bio">Bio</Link>
            </li>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className="copyright">
            Made with 💙 and ☕ by <span>Cerine Gousmine</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
