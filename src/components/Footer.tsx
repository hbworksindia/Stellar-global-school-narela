import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO, NAVIGATION } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-lg">
                <span className="text-primary font-bold text-2xl uppercase">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-none">STELLAR GLOBAL</span>
                <span className="text-xs tracking-[0.2em] font-medium text-white/80">SCHOOL</span>
              </div>
            </Link>
            <p className="text-white/70 leading-relaxed font-sans text-sm">
              Building a strong foundation for future generations through academic excellence and holistic development. Trusted by parents in Narela since inception.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {NAVIGATION.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href} 
                    className="text-white/70 hover:text-secondary hover:translate-x-2 flex items-center transition-all text-sm group"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="font-display font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Important Info
            </h3>
            <ul className="space-y-4 text-sm font-sans">
              <li>
                <Link to="/admissions" className="text-white/70 hover:text-secondary flex items-center transition-colors">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-white/70 hover:text-secondary flex items-center transition-colors">
                  Curriculum Overview
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/70 hover:text-secondary flex items-center transition-colors">
                  School Gallery
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-white/70 hover:text-secondary flex items-center transition-colors">
                  Circulars & Notices
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-white/70 hover:text-secondary flex items-center transition-colors">
                  Parent Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold text-xl mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-secondary transition-colors">
                  <MapPin size={18} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {SCHOOL_INFO.address}
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-secondary transition-colors">
                  <Phone size={18} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-white/70 text-sm">
                  {SCHOOL_INFO.phone}
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-white/10 p-2 rounded-lg group-hover:bg-secondary transition-colors">
                  <Mail size={18} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <p className="text-white/70 text-sm">
                  {SCHOOL_INFO.email}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/50 text-xs tracking-wider font-medium">
          <p>© {currentYear} {SCHOOL_INFO.name}. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
