import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X as CloseIcon, Phone, Mail, Heart } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';

// Social media SVG icons (using simple SVG since Lucide icons are deprecated for brands)
const FacebookIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Accueil', path: '/' },
    { label: 'À Propos', path: '/about' },
    { label: 'Nos Missions', path: '/missions' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-700">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Mail size={14} /> {CONTACT_INFO.email1}</span>
          <span className="flex items-center gap-1"><Phone size={14} /> {CONTACT_INFO.phone}</span>
        </div>
        {(SOCIAL_LINKS.facebook || SOCIAL_LINKS.twitter || SOCIAL_LINKS.instagram) && (
          <div className="flex gap-3 items-center">
            <span>Suivez-nous :</span>
            {SOCIAL_LINKS.facebook && (
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="cursor-pointer hover:text-secondary transition">
                <FacebookIcon />
              </a>
            )}
            {SOCIAL_LINKS.twitter && (
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="cursor-pointer hover:text-secondary transition">
                <TwitterIcon />
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="cursor-pointer hover:text-secondary transition">
                <InstagramIcon />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Area */}
          <Link
            to="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="bg-primary text-white p-2 rounded-full font-bold text-xl">EI</div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-primary tracking-wide">MIGRANT</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Équité & Inclusion</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-bold shadow-lg transform hover:scale-105 transition-all flex items-center gap-2">
              <Heart size={16} fill="white" /> Faire un don
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  className={`text-left text-lg font-medium ${
                    location.pathname === item.path ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="bg-orange-500 text-white py-3 rounded-lg font-bold w-full flex justify-center items-center gap-2">
                 <Heart size={18} fill="white" /> Faire un don
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white pt-12 pb-6">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">EI-MIGRANT</h3>
            <p className="text-gray-300 text-sm mb-4">
              Une organisation engagée en faveur des migrants vulnérables au Sénégal.
              Équité, Inclusion, Solidarité.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Contact Rapide</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Phone size={16}/> {CONTACT_INFO.phone}</li>
              <li className="flex items-center gap-2"><Mail size={16}/> {CONTACT_INFO.email1}</li>
              <li className="flex items-center gap-2"><Mail size={16}/> {CONTACT_INFO.email2}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-secondary">Liens Utiles</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition">Notre Histoire</Link></li>
              <li><Link to="/missions" className="hover:text-white transition">Nos Actions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Devenir Bénévole</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} EI-MIGRANT. Tous droits réservés.
        </div>
      </footer>
    </div>
  );
};