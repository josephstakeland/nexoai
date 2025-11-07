import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para animaciones de scroll
 * @param {Object} options - Opciones de configuración
 * @param {number} options.threshold - Umbral de intersección (0-1)
 * @param {string} options.rootMargin - Margen del root
 * @param {number} options.delay - Delay inicial en ms
 * @returns {[React.RefObject, boolean]} - [ref, isVisible]
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            // Una vez visible, no necesitamos seguir observando
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, delay]);

  return [elementRef, isVisible];
};

/**
 * Hook para animar múltiples elementos con delays escalonados
 * @param {number} count - Número de elementos
 * @param {Object} options - Opciones de configuración
 * @returns {Array} - Array de [getRef, isVisible] para cada elemento
 */
export const useScrollAnimationStagger = (count, options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    baseDelay = 0,
    staggerDelay = 100
  } = options;

  const [visibleIndexes, setVisibleIndexes] = useState(new Set());
  const refs = useRef([]);
  const observersRef = useRef([]);

  useEffect(() => {
    // Cleanup previous observers
    observersRef.current.forEach((observer) => {
      observer.disconnect();
    });
    observersRef.current = [];

    // Create observers for each ref
    refs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = baseDelay + (index * staggerDelay);
              setTimeout(() => {
                setVisibleIndexes((prev) => {
                  const newSet = new Set(prev);
                  newSet.add(index);
                  return newSet;
                });
              }, delay);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold,
          rootMargin
        }
      );

      observer.observe(ref);
      observersRef.current.push(observer);
    });

    return () => {
      observersRef.current.forEach((observer) => {
        observer.disconnect();
      });
      observersRef.current = [];
    };
  }, [threshold, rootMargin, baseDelay, staggerDelay]);

  const getRef = (index) => (el) => {
    if (el && refs.current[index] !== el) {
      refs.current[index] = el;
    }
  };

  const isVisible = (index) => visibleIndexes.has(index);

  return [getRef, isVisible];
};

