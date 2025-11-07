import React from 'react';
import { Megaphone, Users, Globe, ChevronRight } from 'lucide-react';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

const Services = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [getCardRef, isCardVisible] = useScrollAnimationStagger(3, {
    threshold: 0.1,
    baseDelay: 200,
    staggerDelay: 150
  });

  const services = [
    {
      id: 1,
      icon: Megaphone,
      title: 'Marketing Digital con IA',
      description: 'Decisiones inteligentes basadas en datos que transforman tu estrategia digital.',
      features: [
        'Estrategia y briefs personalizados',
        'Análisis predictivo de contenido',
        'Creación de assets multiformato con IA',
        'Optimización continua y reportes en tiempo real',
        'Mejora continua con feedback inteligente'
      ]
    },
    {
      id: 2,
      icon: Users,
      title: 'Soluciones CRM',
      description: 'Automatiza procesos y optimiza la gestión de clientes con inteligencia artificial.',
      features: [
        'CRM y optimización de procesos',
        'Chatbots inteligentes 24/7',
        'Agentes de IA avanzados',
        'Automatización multicanal',
        'Gestión y filtrado inteligente de leads'
      ]
    },
    {
      id: 3,
      icon: Globe,
      title: 'Servicios Web Inteligentes',
      description: 'Diseñamos, alojamos y potenciamos sitios web con herramientas que trabajan 24/7.',
      features: [
        'Diseño responsive y adaptado',
        'Hosting y dominio incluido',
        'Integraciones con CRM',
        'Automatización avanzada',
        'Seguridad y encriptación',
        'E-commerce con IA'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
            Nuestros <span style={{ color: 'var(--accent-primary)' }}>Servicios</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            Soluciones completas de inteligencia artificial para impulsar cada área de tu negocio.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id} 
                ref={getCardRef(index)}
                className={`feature-card hover-lift scroll-scale ${isCardVisible(index) ? 'visible' : ''}`}
              >
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'var(--accent-bg)' }}
                >
                  <Icon size={32} style={{ color: 'var(--accent-primary)' }} />
                </div>

                {/* Content */}
                <h3 className="h2 mb-3" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p className="body-md mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;