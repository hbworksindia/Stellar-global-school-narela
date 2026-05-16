import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NAVIGATION, SCHOOL_INFO } from '../constants';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top Bar (Only on large screens and when not scrolled much) */}
        {!isScrolled && (
          <div className="hidden lg:flex justify-between items-center mb-4 text-sm font-medium border-b border-white/20 pb-2">
            <div className="flex items-center space-x-6 text-white">
              <span className="flex items-center gap-1">
                <Phone size={14} className="text-secondary" /> {SCHOOL_INFO.phone}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/admissions" className="text-white hover:text-secondary transition-colors uppercase tracking-wider text-xs">
                Admission Open 2026-27
              </Link>
            </div>
          </div>
        )}

        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors duration-300">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-display font-bold text-lg lg:text-xl leading-none transition-colors",
                isScrolled ? "text-primary" : "text-white"
              )}>
                STELLAR GLOBAL
              </span>
              <span className={cn(
                "text-[10px] lg:text-xs tracking-[0.2em] font-medium transition-colors",
                isScrolled ? "text-gray-500" : "text-white/80"
              )}>
                SCHOOL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "relative font-medium text-sm uppercase tracking-wider transition-colors py-2",
                  location.pathname === item.href 
                    ? (isScrolled ? "text-primary" : "text-secondary") 
                    : (isScrolled ? "text-gray-600 hover:text-primary" : "text-white/90 hover:text-white")
                )}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div 
                    layoutId="navbar-underline"
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5",
                      isScrolled ? "bg-primary" : "bg-secondary"
                    )}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/admissions"
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg",
                isScrolled ? "bg-primary text-white" : "bg-secondary text-primary"
              )}
            >
              <UserPlus size={16} />
              ADMISSIONS
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={cn(
              "lg:hidden p-2 rounded-lg",
              isScrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden shadow-xl"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-lg font-display font-semibold transition-colors py-2 border-b border-gray-100",
                    location.pathname === item.href ? "text-primary" : "text-gray-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/admissions"
                className="bg-primary text-white text-center py-4 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
              >
                ADMISSIONS OPEN
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
