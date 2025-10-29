import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './AutoGallery.css';

const AutoGallery = () => {
  const navigate = useNavigate();
  
  const artworks = [
    { id: 1, image: '/eserler/01.jpg', alt: 'FREYJA', name: 'FREYJA' },
    { id: 2, image: '/eserler/02.jpg', alt: 'IŞIK KANADI', name: 'IŞIK KANADI' },
    { id: 3, image: '/eserler/03.jpg', alt: 'ZAMAN VADİSİ\'NİN BEKÇİSİ', name: 'ZAMAN VADİSİ\'NİN BEKÇİSİ' },
    { id: 4, image: '/eserler/04.jpg', alt: 'KIZIL GEÇİT', name: 'KIZIL GEÇİT' },
    { id: 5, image: '/eserler/05.jpg', alt: 'YÜZEYİN ÖTESİNDE', name: 'YÜZEYİN ÖTESİNDE' },
    { id: 6, image: '/eserler/06.jpg', alt: 'SUSTURULMUŞ BAHAR', name: 'SUSTURULMUŞ BAHAR' },
    { id: 7, image: '/eserler/07.jpg', alt: 'BYAKKO', name: 'BYAKKO' },
    { id: 8, image: '/eserler/08.jpg', alt: 'LUNARIA\'NIN YANKISI', name: 'LUNARIA\'NIN YANKISI' },
    { id: 9, image: '/eserler/09.jpg', alt: 'SONSUZ BAŞLANGIÇ', name: 'SONSUZ BAŞLANGIÇ' },
    { id: 10, image: '/eserler/10.jpg', alt: 'AN', name: 'AN' },
    { id: 11, image: '/eserler/11.jpg', alt: 'AURORA\'NIN DANSI', name: 'AURORA\'NIN DANSI' },
    { id: 12, image: '/eserler/12.jpg', alt: 'ÖMÜR', name: 'ÖMÜR' },
    { id: 13, image: '/eserler/13.jpg', alt: 'SIRENA', name: 'SIRENA' },
    { id: 14, image: '/eserler/14.jpg', alt: 'NEFES', name: 'NEFES' }
  ];

  return (
    <motion.section 
      className="gallery-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="gallery-title desktop-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Seçili Eserler</h2>
        <p>Son çalışmalarımdan bir seçki</p>
      </motion.div>
      
      <div className="gallery-track">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            className="gallery-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            onClick={() => navigate(`/eser/${artwork.id}`)}
            style={{ cursor: 'pointer' }}
          >
            <img src={artwork.image} alt={artwork.alt} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AutoGallery;
