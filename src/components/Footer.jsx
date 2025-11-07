import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16" style={{ background: 'transparent', borderTop: '1px solid rgba(255, 255, 255, 0.1)', position: 'relative' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'var(--accent-primary)', boxShadow: '0 0 20px var(--accent-primary-glow)' }}>
                <span className="h3" style={{ color: 'white' }}>N</span>
              </div>
              <span className="h3" style={{ color: 'var(--text-primary)' }}>NexoAI</span>
            </div>
            <p className="body-md mb-6" style={{ color: 'var(--text-secondary)' }}>
              Transformamos negocios con soluciones de inteligencia artificial de vanguardia.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                  e.currentTarget.querySelector('svg').style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)';
                }}
              >
                <Facebook size={20} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                  e.currentTarget.querySelector('svg').style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)';
                }}
              >
                <Twitter size={20} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                  e.currentTarget.querySelector('svg').style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)';
                }}
              >
                <Linkedin size={20} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                  e.currentTarget.querySelector('svg').style.color = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)';
                }}
              >
                <Instagram size={20} style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Servicios</h4>
            <ul className="space-y-3">
              <li>
                <a href="#servicios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Marketing Digital con IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Soluciones CRM
                </a>
              </li>
              <li>
                <a href="#servicios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Servicios Web Inteligentes
                </a>
              </li>
              <li>
                <a href="#servicios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Chatbots con IA
                </a>
              </li>
              <li>
                <a href="#servicios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Automatización de Procesos
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#testimonios" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="h4 mb-4" style={{ color: 'var(--text-primary)' }}>Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                <a href="mailto:info@nexoai.com" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  info@nexoai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                <a href="tel:+525512345678" className="body-md hover:text-accent transition-colors" style={{ color: 'var(--text-secondary)' }}>
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                <span className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  Trujillo, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: '1px solid var(--border-subtle)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="body-sm" style={{ color: 'var(--text-muted)' }}>
              © {currentYear} NexoAI. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="body-sm hover:text-accent transition-colors" style={{ color: 'var(--text-muted)' }}>
                Privacidad
              </a>
              <a href="#" className="body-sm hover:text-accent transition-colors" style={{ color: 'var(--text-muted)' }}>
                Términos
              </a>
              <a href="#" className="body-sm hover:text-accent transition-colors" style={{ color: 'var(--text-muted)' }}>
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;