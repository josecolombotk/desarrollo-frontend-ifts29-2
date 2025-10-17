import { useEffect } from 'react';

/**
 * Un Hook personalizado para gestionar el título y el favicon de la página.
 * @param {string} title - El nuevo título para la página.
 * @param {string} favicon - La URL del nuevo favicon.
 */
export function usePageMetadata(title, favicon) {
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;

    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    const originalFavicon = link.href;
    link.href = favicon;

    // Función de limpieza para restaurar los valores originales
    return () => {
      document.title = originalTitle;
      link.href = originalFavicon;
    };
  }, [title, favicon]); // Se ejecuta cada vez que el título o el favicon cambian
}