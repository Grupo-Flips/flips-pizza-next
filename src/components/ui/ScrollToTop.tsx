import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // Implementação do scroll suave para toda a página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', (e) => {
          e.preventDefault();
        });
      });
    };
  }, []);

  return null;
};

export default ScrollToTop;
