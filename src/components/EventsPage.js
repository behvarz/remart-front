import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './EventsPage.css';

const EventsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    // Set background image
    document.documentElement.style.backgroundImage = "url('/bg.jpg')";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.backgroundPosition = "center center";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundAttachment = "fixed";
    
    // Sayfa yüklendiğinde en üste scroll
    window.scrollTo(0, 0);
    
    // Cleanup function
    return () => {
      document.documentElement.style.backgroundImage = "";
      document.documentElement.style.backgroundSize = "";
      document.documentElement.style.backgroundPosition = "";
      document.documentElement.style.backgroundRepeat = "";
      document.documentElement.style.backgroundAttachment = "";
    };
  }, []);

  const events = useMemo(() => [
    {
      id: 1,
      title: "Canvas Dokulu Kağıt Üzerine Akrilik Boya Workshopu",
      category: "workshop",
      date: "28/09/2025",
      time: "12:00",
      location: "Reya Akademi",
      description: "Canvas dokulu kağıt üzerinde akrilik tekniklerine giriş. Uygulamalı, keyifli bir üretim atölyesi.",
      image: "/workshops/workshop-1.jpeg",
      price: "Bilgi için iletişime geçin",
      capacity: "Sınırlı kontenjan",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Ahşap Üzerine Akrilik Boya Workshopu",
      category: "workshop",
      date: "04/10/2025",
      time: "14:00",
      location: "Reya Akademi",
      description: "Ahşap yüzeylerde akrilik uygulamaları ve doku çalışmaları. Başlangıç ve orta seviye için uygun.",
      image: "/workshops/workshop-2.jpeg",
      price: "Bilgi için iletişime geçin",
      capacity: "Sınırlı kontenjan",
      status: "upcoming"
    }
  ], []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.category === selectedCategory));
    }
  }, [selectedCategory, events]);

  const categories = [
    { id: 'all', name: 'Tümü', count: events.length },
    { id: 'workshop', name: 'Workshop', count: events.filter(e => e.category === 'workshop').length },
    { id: 'sergi', name: 'Sergi', count: events.filter(e => e.category === 'sergi').length },
    { id: 'event', name: 'Etkinlik', count: events.filter(e => e.category === 'event').length }
  ];


  return (
    <div className="events-page">
      <div className="events-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Etkinlikler
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sanat dünyasından workshop'lar, sergiler ve özel etkinlikler
        </motion.p>
      </div>

      <div className="events-content">
        {/* Filtreleme */}
        <motion.div
          className="events-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="filter-name">{category.name}</span>
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Etkinlikler Grid */}
        <div className="events-grid">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="event-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="event-image">
                <img src={event.image} alt={event.title} />
                <div className="event-category">
                  <span className="category-name">
                    {event.category === 'workshop' ? 'Workshop' : 
                     event.category === 'sergi' ? 'Sergi' : 'Etkinlik'}
                  </span>
                </div>
              </div>
              
              <div className="event-content">
                <div className="event-meta">
                  <span className="event-date">{event.date}</span>
                  <span className="event-time">{event.time}</span>
                </div>
                
                <h3 className="event-title">{event.title}</h3>
                
                <p className="event-description">{event.description}</p>
                
                <div className="event-details">
                  <div className="event-detail">
                    <span className="detail-icon">●</span>
                    <span className="detail-text">{event.location}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">●</span>
                    <span className="detail-text">{event.price}</span>
                  </div>
                  <div className="event-detail">
                    <span className="detail-icon">●</span>
                    <span className="detail-text">{event.capacity}</span>
                  </div>
                </div>
                
                <div className="event-actions">
                  <button 
                    className="register-btn"
                    onClick={() => navigate(`/etkinlik/${event.id}`)}
                  >
                    Detayları Gör
                  </button>
                  <button 
                    className="chatbot-btn"
                    onClick={() => navigate('/iletisim')}
                  >
                    Kayıt Ol
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seçili Eserler */}
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
            {[
              { id: 1, image: "/eserler/01.jpg", alt: "Renklerin Sesi" },
              { id: 2, image: "/eserler/02.jpg", alt: "Duygusal Yolculuk" },
              { id: 3, image: "/eserler/03.jpg", alt: "İç Dünyalar" },
              { id: 4, image: "/eserler/04.jpg", alt: "Renk Harmanı" },
              { id: 5, image: "/eserler/05.jpg", alt: "Duygu Paleti" },
              { id: 6, image: "/eserler/06.jpg", alt: "Sessizlik" },
              { id: 7, image: "/eserler/07.jpg", alt: "Umut" },
              { id: 8, image: "/eserler/08.jpg", alt: "Melankoli" },
              { id: 9, image: "/eserler/09.jpg", alt: "Neşe" },
              { id: 10, image: "/eserler/10.jpg", alt: "Huzur" },
              { id: 11, image: "/eserler/11.jpg", alt: "Tutku" },
              { id: 12, image: "/eserler/12.jpg", alt: "Aşk" },
              { id: 13, image: "/eserler/13.jpg", alt: "Özlem" },
              { id: 14, image: "/eserler/14.jpg", alt: "Veda" }
            ].map((artwork, index) => (
              <motion.div
                key={artwork.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <img src={artwork.image} alt={artwork.alt} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default EventsPage;
