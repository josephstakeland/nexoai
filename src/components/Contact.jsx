import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [headerRef, isHeaderVisible] = useScrollAnimation({ threshold: 0.2 });
  const [formRef, isFormVisible] = useScrollAnimation({ threshold: 0.2, delay: 200 });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - storing in browser localStorage
    const submissions = JSON.parse(localStorage.getItem('nexoai_contacts') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('nexoai_contacts', JSON.stringify(submissions));
    
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contacto" className="py-24" style={{ background: 'transparent', position: 'relative' }}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div 
            ref={headerRef}
            className={`text-center mb-12 scroll-fade-up ${isHeaderVisible ? 'visible' : ''}`}
          >
            <h2 className="display-md mb-4" style={{ color: 'var(--text-primary)' }}>
              ¿Listo para <span style={{ color: 'var(--accent-primary)' }}>transformar</span> tu negocio?
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
              Contáctanos y descubre cómo la inteligencia artificial puede impulsar tu crecimiento.
            </p>
          </div>

          {/* Contact form */}
          <div 
            ref={formRef}
            className={`feature-card scroll-scale ${isFormVisible ? 'visible' : ''}`}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="body-md block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="body-md block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="body-md block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label className="body-md block mb-2" style={{ color: 'var(--text-primary)' }}>
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Cuéntanos sobre tu proyecto o necesidades..."
                    rows="5"
                  />
                </div>

                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                  Enviar Mensaje
                  <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'var(--accent-bg)' }}>
                  <CheckCircle2 size={48} style={{ color: 'var(--accent-primary)' }} />
                </div>
                <h3 className="h2 mb-2" style={{ color: 'var(--text-primary)' }}>¡Mensaje Enviado!</h3>
                <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                  Gracias por contactarnos. Nuestro equipo te responderá pronto.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;