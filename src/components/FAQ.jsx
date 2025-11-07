import React from 'react';
import { faqs } from '../mock';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { useScrollAnimation, useScrollAnimationStagger } from '../hooks/useScrollAnimation';

const FAQ = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [getItemRef, isItemVisible] = useScrollAnimationStagger(faqs.length, {
    threshold: 0.1,
    baseDelay: 200,
    staggerDelay: 50
  });

  return (
    <section id="faq" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        {/* Section header */}
        <div 
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
        >
          <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
            Preguntas <span style={{ color: 'var(--accent-primary)' }}>Frecuentes</span>
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de IA.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                ref={getItemRef(index)}
                key={faq.id}
                value={`item-${faq.id}`}
                className={`feature-card border-none scroll-scale ${isItemVisible(index) ? 'visible' : ''}`}
              >
                <AccordionTrigger className="text-left h3 hover:no-underline" style={{ color: 'var(--text-primary)' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="body-md pt-2" style={{ color: 'var(--text-secondary)' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="body-lg mb-4" style={{ color: 'var(--text-secondary)' }}>
            ¿Aún tienes preguntas?
          </p>
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;