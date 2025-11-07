import React from 'react';
import { Check } from 'lucide-react';
import { plans } from '../mock';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

const Plans = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [getCardRef, isCardVisible] = useScrollAnimationStagger(plans.length, {
    threshold: 0.2,
    baseDelay: 500,
    staggerDelay: 200
  });

  return (
    <section id="planes" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
            Planes de <span style={{ color: 'var(--accent-primary)' }}>Servicios Web</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            Elige el plan perfecto para tu negocio. Todos incluyen hosting, dominio y soporte continuo.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              ref={getCardRef(index)}
              className={`feature-card hover-lift relative scroll-scale ${plan.highlight ? 'plan-highlight' : ''} ${isCardVisible(index) ? 'visible' : ''}`}
              style={{
                border: plan.highlight ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)'
              }}
            >
              {/* Highlight badge */}
              {plan.highlight && (
                <div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full body-sm"
                  style={{ background: 'var(--accent-primary)', color: 'white', fontWeight: 600, boxShadow: '0 0 20px var(--accent-primary-glow)' }}
                >
                  Más Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className="h2 mb-2" style={{ color: 'var(--text-primary)' }}>
                {plan.name}
              </h3>

              {/* Description */}
              <p className="body-md mb-6" style={{ color: 'var(--text-secondary)' }}>
                {plan.description}
              </p>

              {/* Divider */}
              <div className="mb-6" style={{ height: '1px', background: 'var(--border-subtle)' }}></div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'var(--accent-bg)' }}>
                      <Check size={14} style={{ color: 'var(--accent-primary)' }} />
                    </div>
                    <span className="body-md" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button 
                className={plan.highlight ? 'btn-primary w-full' : 'btn-secondary w-full'}
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Información
              </button>
            </div>
          ))}
        </div>

        {/* Additional services note */}
        <div className="text-center mt-12">
          <p className="body-md" style={{ color: 'var(--text-muted)' }}>
            ¿Interesado en <span style={{ color: 'var(--accent-primary)' }}>Marketing Digital con IA</span> o <span style={{ color: 'var(--accent-primary)' }}>Soluciones CRM</span>?{' '}
            <button 
              className="underline hover:no-underline transition-all"
              style={{ color: 'var(--accent-primary)' }}
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctanos para una cotización personalizada
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;