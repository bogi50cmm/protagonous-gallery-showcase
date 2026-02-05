import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Početna",
    path: "/"
  }, {
    name: "Reference",
    path: "/galerija"
  }];
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Protagonous" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`nav-link ${location.pathname === item.path ? "active" : ""}`}>
                {item.name}
              </Link>)}
            <button onClick={scrollToContact} className="btn-primary text-sm py-3 px-6">
              Kontaktirajte nas
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50 animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navItems.map(item => <Link key={item.name} to={item.path} className={`nav-link text-lg ${location.pathname === item.path ? "active" : ""}`} onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>)}
              <button onClick={scrollToContact} className="btn-primary text-sm py-3 px-6 mt-2">
                Kontaktirajte nas
              </button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;