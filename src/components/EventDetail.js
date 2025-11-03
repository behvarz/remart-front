import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './EventDetail.css';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

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

  // Etkinlik verilerimi burada tekrar tanımlıyorum (gerçek uygulamada API'den gelecek)
  const events = useMemo(() => [
    {
      id: 1,
      title: "Canvas Dokulu Kağıt Üzerine Akrilik Boya Workshopu",
      category: "workshop",
      date: "28/09/2025",
      time: "12:00",
      location: "Reya Akademi",
      description: "Canvas dokulu kağıt üzerinde akrilik tekniklerine giriş. Uygulamalı üretim atölyesi.",
      image: "/workshops/workshop-1.jpeg",
      price: "Bilgi için iletişime geçin",
      capacity: "Sınırlı kontenjan",
      status: "upcoming",
      fullDescription: "Canvas dokulu kağıt üzerinde akrilik tekniklerine giriş. Temel uygulamalar ve pratik çalışma ile keyifli bir üretim deneyimi.",
      highlights: ["Temel teknikler", "Uygulamalı eğitim", "Kendi çalışmanı üret"]
    },
    {
      id: 2,
      title: "Ahşap Üzerine Akrilik Boya Workshopu",
      category: "workshop",
      date: "04/10/2025",
      time: "14:00",
      location: "Reya Akademi",
      description: "Ahşap yüzeylerde akrilik uygulamaları ve doku çalışmaları.",
      image: "/workshops/workshop-2.jpeg",
      price: "Bilgi için iletişime geçin",
      capacity: "Sınırlı kontenjan",
      status: "upcoming",
      fullDescription: "Ahşap yüzeylerde akrilik boya ile çalışırken dikkat edilmesi gerekenler ve pratik doku uygulamaları.",
      highlights: ["Yüzey hazırlığı", "Doku ve katman", "Uygulamalı çalışma"]
    }
  ], []);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));
    setEvent(foundEvent);
  }, [id, events]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'workshop': return '●';
      case 'sergi': return '●';
      case 'event': return '●';
      default: return '●';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'workshop': return 'Workshop';
      case 'sergi': return 'Sergi';
      case 'event': return 'Etkinlik';
      default: return category;
    }
  };

  const handleRegister = () => {
    setIsRegistering(true);
    // Burada kayıt işlemi yapılacak
    setTimeout(() => {
      setIsRegistering(false);
      // İletişim sayfasına yönlendir
      navigate('/iletisim');
    }, 1000);
  };

  if (!event) {
    return (
      <div className="event-detail-page">
        <div className="event-not-found">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Etkinlik Bulunamadı</h1>
            <p>Aradığınız etkinlik mevcut değil veya kaldırılmış olabilir.</p>
            <button 
              className="back-btn"
              onClick={() => navigate('/etkinlikler')}
            >
              Etkinliklere Dön
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      {/* Hero Section */}
      <section className="event-hero">
        <div className="event-hero-image">
          <img src={event.image} alt={event.title} />
          <div className="event-hero-overlay">
            <div className="event-hero-content">
              <motion.div
                className="event-category-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <span className="category-icon">{getCategoryIcon(event.category)}</span>
                <span className="category-text">{getCategoryName(event.category)}</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {event.title}
              </motion.h1>
              
              <motion.div
                className="event-meta-hero"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="meta-item">
                  <span className="meta-icon">●</span>
                  <span>{event.date}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">●</span>
                  <span>{event.time}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">●</span>
                  <span>{event.location}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="event-content">
        <div className="container">
          <div className="event-layout">
            {/* Left Column - Main Content */}
            <div className="event-main">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="content-section">
                  <h2>Etkinlik Hakkında</h2>
                  <p className="event-description-full">{event.fullDescription}</p>
                </div>

                {event.highlights && (
                  <div className="content-section">
                    <h3>Öne Çıkan Özellikler</h3>
                    <ul className="highlights-list">
                      {event.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {event.prerequisites && (
                  <div className="content-section">
                    <h3>Ön Koşullar</h3>
                    <p>{event.prerequisites}</p>
                  </div>
                )}

                {event.included && (
                  <div className="content-section">
                    <h3>Dahil Olanlar</h3>
                    <p>{event.included}</p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Right Column - Event Info */}
            <div className="event-sidebar">
              <motion.div
                className="event-info-card"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="info-header">
                  <h3>Etkinlik Bilgileri</h3>
                </div>

                <div className="info-content">
                  <div className="info-item">
                    <span className="info-label">Tarih:</span>
                    <span className="info-value">{event.date}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Saat:</span>
                    <span className="info-value">{event.time}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Konum:</span>
                    <span className="info-value">{event.location}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Fiyat:</span>
                    <span className="info-value price">{event.price}</span>
                  </div>
                  
                  <div className="info-item">
                    <span className="info-label">Kapasite:</span>
                    <span className="info-value">{event.capacity}</span>
                  </div>

                  {event.organizer && (
                    <div className="info-item">
                      <span className="info-label">Organizatör:</span>
                      <span className="info-value">{event.organizer}</span>
                    </div>
                  )}

                  {event.contact && (
                    <div className="info-item">
                      <span className="info-label">İletişim:</span>
                      <span className="info-value">{event.contact}</span>
                    </div>
                  )}

                  {event.parking && (
                    <div className="info-item">
                      <span className="info-label">Park Yeri:</span>
                      <span className="info-value">{event.parking}</span>
                    </div>
                  )}

                  {event.accessibility && (
                    <div className="info-item">
                      <span className="info-label">Erişilebilirlik:</span>
                      <span className="info-value">{event.accessibility}</span>
                    </div>
                  )}
                </div>

                <div className="info-actions">
                  <button 
                    className={`register-btn-main ${isRegistering ? 'registering' : ''}`}
                    onClick={handleRegister}
                    disabled={isRegistering}
                  >
                    {isRegistering ? 'Yönlendiriliyor...' : 'Kayıt Ol'}
                  </button>
                  
                  <button 
                    className="back-btn-secondary"
                    onClick={() => navigate('/etkinlikler')}
                  >
                    Etkinliklere Dön
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
