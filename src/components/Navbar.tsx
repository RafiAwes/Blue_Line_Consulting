import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Federal Growth', path: '/federal-growth' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-2 group shrink-0" onClick={() => setIsOpen(false)}>
            <img 
              src="/images/logo.jpeg" 
              alt="Blu Line Consulting Group" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors uppercase tracking-wider ${
                  location.pathname === link.path 
                    ? 'text-brand-blue border-b-2 border-brand-blue' 
                    : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:block">
              <Button variant="ghost" size="sm" className="flex items-center gap-2 font-bold text-brand-blue">
                CLIENT LOGIN
              </Button>
            </div>
            <Link to="/get-started" className="hidden sm:block">
              <Button size="sm" className="bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-6">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600 hover:text-brand-blue transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-4 text-base font-bold uppercase tracking-wider transition-colors ${
                    location.pathname === link.path
                      ? 'text-brand-blue bg-slate-50'
                      : 'text-slate-600 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Button variant="outline" className="w-full text-brand-blue font-bold">
                  CLIENT LOGIN
                </Button>
                <Link to="/get-started" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-brand-blue text-white font-bold">
                    GET STARTED
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
