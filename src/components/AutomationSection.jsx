import React from 'react';
import { ArrowRight, Play, Filter, Mail, MessageSquare, Smartphone } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AutomationSection = () => {
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [diagramRef, isDiagramVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Header */}
            <div 
              ref={headerRef}
              className={`scroll-fade-left ${isHeaderVisible ? 'visible' : ''}`}
            >
              <h2 className="display-md mb-6" style={{ color: 'var(--text-primary)' }}>
                Hasta <span style={{ color: 'var(--accent-primary)' }}>×4</span> a los ingresos de la compañía a través de los envíos masivos
              </h2>
              
              <p className="body-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
                Comunicaciones segmentadas por WhatsApp, correo electrónico o sms: carrito abandonado, felicitaciones de cumpleaños, prescripción de compras, etc.
              </p>

              <button 
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 body-md transition-all hover:gap-3"
                style={{ color: 'var(--accent-primary)' }}
              >
                Saber más
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Column - Workflow Diagram */}
          <div 
            ref={diagramRef}
            className={`scroll-fade-right ${isDiagramVisible ? 'visible' : ''}`}
          >
            <div 
              className="feature-card p-8"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                minHeight: '500px'
              }}
            >
              {/* Workflow Diagram */}
              <div className="relative">
                {/* Condition Block - Top Center */}
                <div className="flex justify-center mb-8">
                  <div 
                    className="feature-card p-4 relative max-w-xs"
                    style={{
                      background: 'rgba(147, 51, 234, 0.15)',
                      border: '1px solid rgba(147, 51, 234, 0.3)',
                      borderRadius: '12px',
                      position: 'relative'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(147, 51, 234, 0.2)' }}
                      >
                        <Filter size={20} style={{ color: 'rgb(192, 132, 252)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="body-sm mb-2" style={{ color: 'rgb(192, 132, 252)', fontWeight: 600 }}>
                          Condición
                        </div>
                        <p className="body-md" style={{ color: 'var(--text-primary)' }}>
                          ¿Ha realizado un pedido durante 72 horas?
                        </p>
                      </div>
                    </div>
                    
                    {/* Condition branches */}
                    <div className="flex gap-6 mt-4 pt-4" style={{ borderTop: '1px solid rgba(147, 51, 234, 0.2)' }}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'rgb(192, 132, 252)' }}></div>
                        <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>Sí</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: 'rgb(192, 132, 252)' }}></div>
                        <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>No</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting lines from condition to actions */}
                <div className="relative hidden md:block mb-6">
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2">
                    <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(147, 51, 234, 0.4), rgba(147, 51, 234, 0.2))' }}></div>
                  </div>
                  {/* Branch lines */}
                  <div className="absolute left-1/4 top-12 transform -translate-x-1/2">
                    <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(34, 197, 94, 0.2), transparent)' }}></div>
                  </div>
                  <div className="absolute right-1/4 top-12 transform translate-x-1/2">
                    <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, rgba(34, 197, 94, 0.2), transparent)' }}></div>
                  </div>
                </div>

                {/* Action Blocks - Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {/* Action 1 - Email */}
                  <div 
                    className="feature-card p-4 hover-lift transition-all"
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '12px'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                      >
                        <Play size={20} style={{ color: 'rgb(74, 222, 128)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="body-sm mb-2" style={{ color: 'rgb(74, 222, 128)', fontWeight: 600 }}>
                          Acción
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Mail size={16} style={{ color: 'var(--text-secondary)' }} />
                          <span className="body-md" style={{ color: 'var(--text-primary)' }}>
                            Enviar un correo electrónico
                          </span>
                        </div>
                        <p className="body-sm italic" style={{ color: 'var(--text-secondary)' }}>
                          «Has olvidado los productos en tu carrito»
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action 2 - WhatsApp */}
                  <div 
                    className="feature-card p-4 hover-lift transition-all"
                    style={{
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '12px'
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(34, 197, 94, 0.2)' }}
                      >
                        <Play size={20} style={{ color: 'rgb(74, 222, 128)' }} />
                      </div>
                      <div className="flex-1">
                        <div className="body-sm mb-2" style={{ color: 'rgb(74, 222, 128)', fontWeight: 600 }}>
                          Acción
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare size={16} style={{ color: 'var(--text-secondary)' }} />
                          <span className="body-md" style={{ color: 'var(--text-primary)' }}>
                            Enviar un mensaje
                          </span>
                        </div>
                        <p className="body-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                          «Recordatorio de productos abandonados» en WhatsApp
                        </p>
                        {/* Phone preview */}
                        <div 
                          className="mt-3 p-2 rounded-lg flex items-center gap-2"
                          style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '8px'
                          }}
                        >
                          <Smartphone size={16} style={{ color: 'var(--text-muted)' }} />
                          <span className="body-sm font-semibold" style={{ color: 'var(--accent-primary)' }}>%</span>
                          <span className="body-sm" style={{ color: 'var(--text-secondary)' }}>Descuento disponible</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;

