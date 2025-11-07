import React from 'react';
import { TrendingUp, Brain, Zap, Target, BarChart3, Clock } from 'lucide-react';
import { benefits } from '../mock';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

const iconMap = {
  TrendingUp,
  Brain,
  Zap,
  Target,
  BarChart3,
  Clock
};

const Benefits = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [getCardRef, isCardVisible] = useScrollAnimationStagger(benefits.length, {
    threshold: 0.8,
    baseDelay: 200,
    staggerDelay: 200
  });

  return (
    <section id="beneficios" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
            ¿Por qué elegir <span style={{ color: 'var(--accent-primary)' }}>NexoAI</span>?
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            Descubre cómo nuestras soluciones de inteligencia artificial transforman tu negocio y te dan ventaja competitiva.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <div
                key={benefit.id}
                ref={getCardRef(index)}
                className={`feature-card hover-lift scroll-scale ${isCardVisible(index) ? 'visible' : ''}`}
              >
                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'var(--accent-bg)' }}
                >
                  <Icon size={28} style={{ color: 'var(--accent-primary)' }} />
                </div>

                {/* Content */}
                <h3 className="h3 mb-3" style={{ color: 'var(--text-primary)' }}>
                  {benefit.title}
                </h3>
                <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;