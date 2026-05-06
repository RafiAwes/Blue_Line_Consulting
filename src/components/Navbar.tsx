import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
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
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/images/logo.jpeg" 
              alt="Blu Line Consulting Group" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

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

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex items-center gap-2 font-bold text-brand-blue">
              CLIENT LOGIN
            </Button>
            <Link to="/get-started">
              <Button size="sm" className="bg-brand-blue text-white text-xs font-bold uppercase tracking-widest px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
