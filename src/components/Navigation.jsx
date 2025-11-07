import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'rgba(10, 14, 39, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-primary)', boxShadow: '0 0 15px var(--accent-primary-glow)' }}>
              <span className="h3" style={{ color: 'white' }}>N</span>
            </div>
            <span className="h3" style={{ color: 'var(--text-primary)' }}>NexoAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('beneficios')}>Beneficios</button>
            <button className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('servicios')}>Servicios</button>
            <button className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('planes')}>Planes</button>
            <button className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('testimonios')}>Testimonios</button>
            <button className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('faq')}>FAQ</button>
            <button className="btn-primary" onClick={() => scrollToSection('contacto')}>Contacto</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: 'var(--text-primary)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
            <div className="flex flex-col gap-4">
              <button className="body-md text-left py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('beneficios')}>Beneficios</button>
              <button className="body-md text-left py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('servicios')}>Servicios</button>
              <button className="body-md text-left py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('planes')}>Planes</button>
              <button className="body-md text-left py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('testimonios')}>Testimonios</button>
              <button className="body-md text-left py-2" style={{ color: 'var(--text-secondary)' }} onClick={() => scrollToSection('faq')}>FAQ</button>
              <button className="btn-primary mt-2" onClick={() => scrollToSection('contacto')}>Contacto</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;