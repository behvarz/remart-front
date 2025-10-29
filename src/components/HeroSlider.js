import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/eserler/04.jpg',
      title: 'KIZIL GEÇİT',
      subtitle: 'Canvas / Yağlı Boya & Rölyef Pasta',
      description: 'Bir son ile yeni bir başlangıcın arasında kalan o görünmez eşiği simgeler'
    },
    {
      id: 2,
      image: '/eserler/09.jpg',
      title: 'SONSUZ BAŞLANGIÇ',
      subtitle: '300 gr Canvas Dokulu Kağıt / Yağlı Boya',
      description: 'Antik Mısır mitolojisinde doğumun, yeniden doğuşun ve sonsuz döngünün sembolü'
    },
    {
      id: 3,
      image: '/eserler/02.jpg',
      title: 'IŞIK KANADI',
      subtitle: 'Canvas / Yağlı Boya',
      description: 'Karanlıkla aydınlık arasındaki ince çizgide doğan bir umudu temsil eder'
    }
  ];

  // Tüm eserler - mobilde kullanılacak
  const allArtworks = [
    { id: 1, image: '/eserler/01.jpg', name: 'FREYJA' },
    { id: 2, image: '/eserler/02.jpg', name: 'IŞIK KANADI' },
    { id: 3, image: '/eserler/03.jpg', name: 'ZAMAN VADİSİ\'NİN BEKÇİSİ' },
    { id: 4, image: '/eserler/04.jpg', name: 'KIZIL GEÇİT' },
    { id: 5, image: '/eserler/05.jpg', name: 'YÜZEYİN ÖTESİNDE' },
    { id: 6, image: '/eserler/06.jpg', name: 'SUSTURULMUŞ BAHAR' },
    { id: 7, image: '/eserler/07.jpg', name: 'BYAKKO' },
    { id: 8, image: '/eserler/08.jpg', name: 'LUNARIA\'NIN YANKISI' },
    { id: 9, image: '/eserler/09.jpg', name: 'SONSUZ BAŞLANGIÇ' },
    { id: 10, image: '/eserler/10.jpg', name: 'AN' },
    { id: 11, image: '/eserler/11.jpg', name: 'AURORA\'NIN DANSI' },
    { id: 12, image: '/eserler/12.jpg', name: 'ÖMÜR' },
    { id: 13, image: '/eserler/13.jpg', name: 'SIRENA' },
    { id: 14, image: '/eserler/14.jpg', name: 'NEFES' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Her 10 saniyede bir değişir

    return () => clearInterval(autoSlideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div className="slider-loader">
        <div className="slider-loader-content">
          <div className="slider-loader-spinner"></div>
          <p>Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="hero-slider">
      {/* Desktop Slider */}
      <div className="slider-container desktop-slider">
        {/* Navigation Buttons */}
        <button className="slider-nav slider-nav--prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <button className="slider-nav slider-nav--next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Slide Content */}
        <div className="slider-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="slide"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="slide-image-container">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title}
                  className="slide-image"
                />
                <div className="slide-overlay"></div>
              </div>
              
              <div className="slide-info">
                <motion.h2 
                  className="slide-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p 
                  className="slide-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                
                <motion.p 
                  className="slide-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation - Hidden */}
        <div className="slider-dots" style={{ display: 'none' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mobile Gallery - En üstte */}
      <div className="mobile-gallery">
        <div className="gallery-header">
          <h2>Seçili Eserlerim</h2>
          <p>Her eser, bir hikayenin başlangıcıdır</p>
        </div>
        <div className="gallery-grid">
          {allArtworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              className="gallery-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="gallery-image-container">
                <img 
                  src={artwork.image} 
                  alt={artwork.name}
                  className="gallery-image"
                />
              </div>
              <div className="gallery-info">
                <h3 className="gallery-title">{artwork.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
