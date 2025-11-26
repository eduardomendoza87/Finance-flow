import { BarChart3, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
            <BarChart3 className="text-primary" /> FinanFlow
          </div>
          <p className="text-text-muted text-sm">
            Tu sistema operativo financiero personal.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Producto</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><a href="/#features" className="hover:text-primary">Características</a></li>
            <li><a href="/#pricing" className="hover:text-primary">Precios</a></li>
            <li><a href="#" className="hover:text-primary">Inicio</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-text-muted">
            <li><a href="#" className="hover:text-primary">Privacidad</a></li>
            <li><a href="#" className="hover:text-primary">Términos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Síguenos</h4>
          <div className="flex gap-4 text-text-muted">
            <Twitter className="hover:text-primary cursor-pointer" size={20} />
            <Instagram className="hover:text-primary cursor-pointer" size={20} />
            <Github className="hover:text-primary cursor-pointer" size={20} />
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-text-muted pt-8 border-t border-border/50">
        © 2025 FinanFlow Inc. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;