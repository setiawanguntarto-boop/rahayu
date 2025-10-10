import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border text-muted-foreground">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        <span className="text-lg font-extrabold tracking-tight text-primary mr-2">
          RAHAYU
        </span>
        &copy; 2024. Dicintai oleh Peternak Indonesia.
        <div className="mt-2 space-x-4">
          <Link to="/syarat-ketentuan" className="hover:text-primary transition-colors">
            Syarat & Ketentuan
          </Link>
          <Link to="/kebijakan-privasi" className="hover:text-primary transition-colors">
            Kebijakan Privasi
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
