import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Typewriter effect for the headline prefix
  const headlinePrefix = 'Impulsamos tu crecimiento con';
  const [typed, setTyped] = React.useState('');
  const [accentVisible, setAccentVisible] = React.useState(false);
  React.useEffect(() => {
    let i = 0;
    const speed = 50; // ms per character
    const timer = setInterval(() => {
      i++;
      setTyped(headlinePrefix.slice(0, i));
      if (i >= headlinePrefix.length) {
        clearInterval(timer);
        // Trigger accent appearance shortly after typing finishes
        setTimeout(() => setAccentVisible(true), 150);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0e27 0%, #1a0f2e 100%)' }}>
      {/* Background decorative elements with animated lights */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated glowing orbs */}
        <div 
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl" 
          style={{ 
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite, glow 8s ease-in-out infinite'
          }}
        ></div>
        <div 
          className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl" 
          style={{ 
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            animation: 'float 15s ease-in-out infinite reverse, glow 10s ease-in-out infinite'
          }}
        ></div>
        {/* Decorative light streaks removed para evitar líneas visibles intrusivas */}
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'var(--accent-bg)', border: '1px solid var(--accent-primary)' }}>
            <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} />
            <span className="body-sm" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Inteligencia Artificial para tu Negocio</span>
          </div>

          {/* Main heading */}
          <h1 className="display-lg mb-6" style={{ color: 'var(--text-primary)' }}>
            <span className="typewriter">
              {typed}
              <span
                className="typewriter-caret"
                style={{ opacity: typed === headlinePrefix ? 0.25 : 1 }}
              ></span>
            </span>{' '}
            <span className={`animated-gradient-text accent-scale-overshoot ${accentVisible ? 'visible' : ''}`}>
              tecnología de vanguardia
            </span>
          </h1>

          {/* Subtitle */}
          <p className="body-lg mb-10 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Transformamos tu marketing digital y operaciones empresariales con soluciones de IA que generan resultados reales. Aumenta tus ventas, optimiza recursos y toma decisiones inteligentes basadas en datos.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="btn-primary inline-flex items-center gap-2" onClick={scrollToContact}>
              Comienza Ahora
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}>
              Conoce Nuestros Servicios
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="display-sm" style={{ color: 'var(--accent-primary)' }}>150%</div>
              <div className="body-sm mt-1">Aumento ROI Promedio</div>
            </div>
            <div className="text-center">
              <div className="display-sm" style={{ color: 'var(--accent-primary)' }}>24/7</div>
              <div className="body-sm mt-1">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="display-sm" style={{ color: 'var(--accent-primary)' }}>+200</div>
              <div className="body-sm mt-1">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="display-sm" style={{ color: 'var(--accent-primary)' }}>85%</div>
              <div className="body-sm mt-1">Mejora Conversión</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;