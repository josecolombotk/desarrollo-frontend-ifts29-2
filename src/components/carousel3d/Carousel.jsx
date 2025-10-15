// components/SequentialCarousel.jsx
import React, { useState, useEffect } from 'react';
import '../css/estiven.css';

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
            <div className="carousel-content">
              {item.image && (
                <div className="carousel-image">
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
              )}
              <div className="carousel-text">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Controles */}
      {showControls && (
        <>
          <button className="carousel-control-prev" onClick={prevSlide}>
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" onClick={nextSlide}>
            <span className="carousel-control-next-icon"></span>
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