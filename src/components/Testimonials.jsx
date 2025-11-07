import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardRef, isCardVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonios" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
            Lo que dicen nuestros <span style={{ color: 'var(--accent-primary)' }}>clientes</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            Historias de éxito reales de empresas que transformaron su negocio con NexoAI.
          </p>
        </div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto">
          <div 
            ref={cardRef}
            className={`feature-card relative scroll-scale ${isCardVisible ? 'visible' : ''}`}
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote size={64} style={{ color: 'var(--accent-primary)' }} />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} size={20} fill="var(--accent-primary)" style={{ color: 'var(--accent-primary)' }} />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="body-lg mb-8 relative z-10" style={{ color: 'var(--text-secondary)' }}>
              "{currentTestimonial.text}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                <span className="h3" style={{ color: 'var(--accent-primary)' }}>{currentTestimonial.name[0]}</span>
              </div>
              <div>
                <div className="h4" style={{ color: 'var(--text-primary)' }}>{currentTestimonial.name}</div>
                <div className="body-sm" style={{ color: 'var(--text-muted)' }}>{currentTestimonial.role} en {currentTestimonial.company}</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ChevronLeft size={24} style={{ color: 'var(--text-primary)' }} />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      background: index === currentIndex ? 'var(--accent-primary)' : 'var(--border-primary)',
                      width: index === currentIndex ? '24px' : '8px'
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all hover-lift"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 15px var(--accent-primary-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <ChevronRight size={24} style={{ color: 'var(--text-primary)' }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;