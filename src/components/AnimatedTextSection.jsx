import React, { useEffect, useRef, useState } from 'react';
import { MessageSquare, Inbox, Bot, TrendingUp } from 'lucide-react';

const AnimatedTextSection = () => {
  const [visibleWords, setVisibleWords] = useState([]);
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  // Text split into segments for animation
  const textSegments = [
    { text: 'Chatea, vende, lanza envíos masivos y chatbots,', delay: 0 },
    { text: 'aumenta los ingresos de tu negocio', delay: 0.3 },
    { text: 'y realiza un seguimiento de los indicadores', delay: 0.6 },
    { text: 'con NexoAI', delay: 0.9, highlight: true }
  ];

  const features = [
    {
      id: 1,
      icon: MessageSquare,
      label: 'CRM',
      color: 'rgba(139, 92, 246, 0.1)',
      iconColor: 'rgb(167, 139, 250)',
      borderColor: 'rgba(139, 92, 246, 0.2)'
    },
    {
      id: 2,
      icon: Inbox,
      label: 'INBOX',
      color: 'rgba(59, 130, 246, 0.1)',
      iconColor: 'rgb(96, 165, 250)',
      borderColor: 'rgba(59, 130, 246, 0.2)'
    },
    {
      id: 3,
      icon: Bot,
      label: 'CHATBOTS',
      color: 'rgba(99, 102, 241, 0.1)',
      iconColor: 'rgb(129, 140, 248)',
      borderColor: 'rgba(99, 102, 241, 0.2)'
    },
    {
      id: 4,
      icon: TrendingUp,
      label: 'MARKETING',
      color: 'rgba(168, 85, 247, 0.1)',
      iconColor: 'rgb(192, 132, 252)',
      borderColor: 'rgba(168, 85, 247, 0.2)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animations when section comes into view
            textSegments.forEach((segment, index) => {
              setTimeout(() => {
                setVisibleWords((prev) => [...prev, index]);
              }, segment.delay * 1000);
            });
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
      style={{ background: 'transparent', position: 'relative' }}
    >
      <div className="container">
        {/* Animated text */}
        <div ref={textRef} className="text-center max-w-5xl mx-auto mb-20">
          {textSegments.map((segment, index) => (
            <div
              key={index}
              className="inline transition-all duration-700"
              style={{
                opacity: visibleWords.includes(index) ? 1 : 0.15,
                transform: visibleWords.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                display: 'inline'
              }}
            >
              <span
                className="display-md"
                style={{
                  color: segment.highlight ? 'var(--accent-primary)' : 'var(--text-primary)',
                  marginRight: '12px',
                  display: 'inline'
                }}
              >
                {segment.text}
              </span>
              {' '}
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="feature-card hover-lift text-center p-8 transition-all duration-500"
                style={{
                  background: feature.color,
                  opacity: visibleWords.length >= textSegments.length ? 1 : 0,
                  transform: visibleWords.length >= textSegments.length ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <Icon size={40} style={{ color: feature.iconColor, margin: '0 auto 16px' }} />
                <h4 className="h4" style={{ color: 'var(--text-primary)' }}>
                  {feature.label}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnimatedTextSection;