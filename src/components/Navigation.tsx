import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { NAVIGATION, CONTACT_INFO, SCHOOL_NAME, LOGO_URL } from '@/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-primary/95 backdrop-blur-lg shadow-2xl py-2 border-b border-gold/20' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
                <img 
                  src={LOGO_URL} 
                  alt={SCHOOL_NAME} 
                  className="w-12 h-12 object-contain bg-white rounded-full p-1 border-2 border-gold transition-transform group-hover:scale-110 duration-300" 
                />
            </div>
            <div className="flex flex-col">
              <span className={cn("font-extrabold text-xl leading-tight uppercase font-sans tracking-tight", isScrolled ? "text-white" : "text-white drop-shadow-xl")}>
                Intelligent <span className="text-gold">Public</span> School
              </span>
              <span className={cn("text-[10px] uppercase font-bold tracking-[0.3em]", isScrolled ? "text-gold-light/80" : "text-white/80")}>
                Excellence Redefined
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'text-xs font-bold uppercase tracking-wider transition-all hover:text-gold relative group',
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-white/90'
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300",
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-gold text-primary hover:bg-white hover:text-primary px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl hover:shadow-gold/20 active:scale-95"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white focus:outline-none p-2 rounded-lg bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gold" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-0 h-screen w-full bg-primary z-[60] flex flex-col p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
               <div className="flex items-center space-x-3">
                  <img src={LOGO_URL} className="w-10 h-10 bg-white rounded-full p-1" alt="Logo" />
                  <span className="font-bold text-white uppercase text-sm">IPS Lachhiya</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2">
                  <X className="w-8 h-8 text-gold" />
               </button>
            </div>
            
            <div className="flex flex-col space-y-2">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-2xl font-black uppercase tracking-tight py-4 border-b border-white/5 flex items-center justify-between',
                    location.pathname === item.path ? 'text-gold' : 'text-white'
                  )}
                >
                  {item.name}
                  <ArrowRight className="w-5 h-5 opacity-50" />
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 space-y-8">
               <Link
                to="/admissions"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full bg-gold text-primary text-center py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
              >
                Enroll Now
              </Link>
              <div className="flex justify-center space-x-6">
                 {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                    <div key={idx} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white">
                       <Icon className="w-6 h-6" />
                    </div>
                 ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-gradient-premium pt-24 pb-12 overflow-hidden relative">
      {/* Decorative text background */}
      <div className="absolute top-20 right-0 pointer-events-none opacity-[0.03] select-none scale-150 origin-right">
         <span className="text-9xl font-black uppercase tracking-tighter text-white">LEARNING</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <img src={LOGO_URL} alt="Logo" className="w-14 h-14 bg-white rounded-full p-1 shadow-lg" />
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white leading-tight uppercase font-sans tracking-tight">
                  IPS <span className="text-gold">LACHHIYA</span>
                </span>
                <span className="text-[9px] text-gold-light uppercase tracking-[0.4em] font-bold">
                  School of Innovation
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300/80 font-medium">
              A community of learners, innovators, and leaders dedicated to excellence in education and character building since 2009.
            </p>
            <div className="flex items-center space-x-4">
              {[
                { icon: Facebook, href: CONTACT_INFO.socials.facebook },
                { icon: Instagram, href: CONTACT_INFO.socials.instagram },
                { icon: Youtube, href: CONTACT_INFO.socials.youtube },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div className="space-y-8">
            <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] border-l-2 border-gold pl-4 leading-none">Explore</h4>
            <ul className="grid grid-cols-1 gap-y-4">
              {NAVIGATION.slice(0, 8).map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-slate-400 hover:text-gold transition-all flex items-center font-bold tracking-tight">
                    <span className="w-1 h-1 bg-gold mr-3 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-8">
             <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] border-l-2 border-gold pl-4 leading-none">Connect</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 border border-gold/20">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm text-slate-300/80 leading-relaxed font-medium">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 border border-gold/20">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div className="text-sm text-slate-300/80 font-bold">
                  {CONTACT_INFO.phone[0]}
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center shrink-0 border border-gold/20">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm text-slate-300/80 font-bold">{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
             <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] border-l-2 border-gold pl-4 leading-none">Stay Updated</h4>
            <p className="text-sm text-slate-400 font-medium">
              Subscribe to our weekly news and event updates.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white focus:ring-2 focus:ring-gold focus:border-transparent outline-none transition-all placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-gold text-primary font-black text-[10px] uppercase px-6 rounded-xl hover:bg-white transition-all transform group-focus-within:scale-105 shadow-lg">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            © {new Date().getFullYear()} {SCHOOL_NAME} • Excellence in education
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            <Link to="/about" className="hover:text-gold transition-colors">Vision</Link>
            <Link to="/admissions" className="hover:text-gold transition-colors">Admissions</Link>
            <Link to="/contact" className="hover:text-gold transition-colors">Feedback</Link>
            <a href="https://ipslachhiya.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors border border-white/10 px-4 py-1 rounded-full">Official Portal</a>
          </div>
        </div>
      </div>

      {/* Modern Floating Action buttons */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
        <motion.a
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href={CONTACT_INFO.socials.whatsapp}
          target="_blank"
          className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl relative group"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="absolute right-20 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Whatsapp</span>
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          href={`tel:${CONTACT_INFO.phone[0]}`}
          className="w-16 h-16 bg-gold text-primary rounded-2xl flex items-center justify-center shadow-2xl relative group"
        >
          <Phone className="w-8 h-8" />
          <span className="absolute right-20 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">Admission Call</span>
        </motion.a>
      </div>
    </footer>
  );
};
