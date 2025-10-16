// components/SequentialCarousel.jsx
import React, { useState, useEffect } from 'react';
import './Carousel1.css';

const SequentialCarousel = ({ 
  items, 
  autoRotate = false, 
  interval = 4000,
  showIndicators = true,
  showControls = true 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-rotación
  useEffect(() => {
    if (!autoRotate) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoRotate, interval, items.length]);

  return (
    <div className="custom-carousel">
      <div className="carousel-inner">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
          >
            {/* Layout responsive con flexbox */}
            <div className="d-flex flex-column flex-md-row align-items-center p-4">
              {/* Imagen - En móvil: arriba, en desktop: izquierda */}
              <div className="flex-shrink-0 me-md-4 mb-3 mb-md-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  style={{ 
                    width: "200px", 
                    height: "280px", 
                    objectFit: "cover", 
                    borderRadius: "15px", 
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)" 
                  }} 
                />
              </div>
              {/* Texto - En móvil: abajo, en desktop: derecha */}
              <div className="flex-grow-1 text-center text-md-start">
                <h5 className="mb-3">{item.title}</h5>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Controles */}
      {showControls && (
        <>
          <button className="carousel-control-prev" onClick={prevSlide}>       
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="carousel-control-next" onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </>
      )}
      
      {/* Indicadores */}
      {showIndicators && (
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SequentialCarousel;