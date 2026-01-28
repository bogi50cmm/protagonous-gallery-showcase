import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 py-12">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Protagonous" className="h-10" />
          </div>

          <nav className="flex gap-6">
            <Link to="/" className="nav-link text-sm">
              Početna
            </Link>
            <Link to="/galerija" className="nav-link text-sm">
              Galerija
            </Link>
          </nav>

          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Protagonous. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
