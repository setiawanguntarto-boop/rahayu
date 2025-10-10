import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import rahayuLogo from "@/assets/rahayu-logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openMenu = () => {
    setMobileMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const navLinks = [
    { to: "/", label: "Beranda" },
    { to: "/tentang", label: "Tentang" },
    { to: "/kenapa-rahayu", label: "Kenapa Rahayu" },
    { to: "/tanya-rahayu", label: "Tanya Rahayu" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/95 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={rahayuLogo} alt="Rahayu Logo" className="w-10 h-10" />
            <span className="text-2xl font-extrabold tracking-tight text-primary">RAHAYU</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-[15px]">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/kemitraan"
              className="bg-primary text-primary-foreground px-4 py-2 rounded-xl text-sm shadow-md hover:opacity-90 transition-all transform hover:scale-[1.02]"
            >
              Rahayu untuk Kemitraan
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={openMenu}
            className="md:hidden p-2 rounded-md hover:bg-secondary transition-colors"
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <img src={rahayuLogo} alt="Rahayu Logo" className="w-10 h-10" />
                <span className="text-2xl font-extrabold tracking-tight text-primary">RAHAYU</span>
              </div>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-secondary transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4 text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className="p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/kemitraan"
                onClick={closeMenu}
                className="p-3 bg-primary text-primary-foreground rounded-xl shadow-md text-center mt-2"
              >
                Rahayu untuk Kemitraan
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
