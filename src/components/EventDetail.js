import React, { useState, useEffect } from 'react';
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
  const events = [
    {
      id: 1,
      title: "Renklerin Sesi - Kişisel Sergi",
      category: "sergi",
      date: "15 Aralık 2024",
      time: "18:00",
      location: "Beyoğlu Sanat Galerisi",
      description: "İrem Köse'nin son dönem çalışmalarından oluşan kişisel sergisi. Renklerin duygusal dilini keşfetmeye davet ediyoruz.",
      image: "/eserler/01.jpg",
      price: "Ücretsiz",
      capacity: "Sınırsız",
      status: "upcoming",
      fullDescription: "Bu özel sergi, sanatçının iç dünyasının tuval üzerindeki yansımalarını sunar. Her renk, bir duygunun yansıması; her fırça darbesi, bir anın hikayesi. Renklerin sesi sergisi, izleyicileri derin bir duygusal yolculuğa çıkarıyor. Sanatçının 2 yıllık yoğun çalışmasının meyvesi olan bu eserler, renklerin sadece görsel değil, işitsel ve hissedilir boyutlarını da keşfetmemizi sağlıyor.",
      highlights: [
        "25 adet yeni çalışma",
        "Karma teknik uygulamaları",
        "İnteraktif renk deneyimi",
        "Sanatçı ile söyleşi"
      ],
      organizer: "Beyoğlu Sanat Galerisi",
      contact: "+90 212 555 0123",
      parking: "Otopark mevcut değil, toplu taşıma önerilir",
      accessibility: "Tekerlekli sandalye erişimi mevcut"
    },
    {
      id: 2,
      title: "Tuval Boyama Atölyesi",
      category: "workshop",
      date: "22 Aralık 2024",
      time: "14:00-18:00",
      location: "İrem Köse Atölyesi",
      description: "Temel tuval boyama teknikleri, kompozisyon ve renk teorisi üzerine 4 saatlik workshop. Tüm malzemeler dahil.",
      image: "/eserler/02.jpg",
      price: "350 TL",
      capacity: "8 kişi",
      status: "upcoming",
      fullDescription: "Bu kapsamlı workshop'ta katılımcılar temel boyama tekniklerinden başlayarak kendi eserlerini yaratacaklar. Renk teorisi, kompozisyon kuralları ve fırça teknikleri detaylı olarak anlatılacak. Hem yeni başlayanlar hem de deneyimli ressamlar için uygun olan bu atölye, herkesin yaratıcılığını keşfetmesine yardımcı olacak.",
      highlights: [
        "Kişisel malzeme seti",
        "Öğle yemeği dahil",
        "Bitmiş eserinizi evinize götürün",
        "Sertifika verilir"
      ],
      prerequisites: "Hiçbir ön koşul gerekmez",
      included: "Tuval, boya, fırça, önlük ve tüm malzemeler",
      organizer: "İrem Köse Sanat Atölyesi",
      contact: "+90 555 835 19 40",
      parking: "Ücretsiz otopark mevcut",
      accessibility: "Tekerlekli sandalye erişimi mevcut"
    },
    {
      id: 3,
      title: "Sanat Sohbetleri - Duygusal Yolculuklar",
      category: "event",
      date: "28 Aralık 2024",
      time: "19:30",
      location: "Kadıköy Sanat Merkezi",
      description: "Sanatçı İrem Köse ile sanatın duygusal boyutları üzerine samimi bir sohbet. Soru-cevap bölümü dahil.",
      image: "/eserler/03.jpg",
      price: "50 TL",
      capacity: "50 kişi",
      status: "upcoming",
      fullDescription: "Bu özel sohbet etkinliğinde, sanatçı İrem Köse'nin sanat yolculuğu, ilham kaynakları ve yaratım süreçleri ele alınacak. Katılımcılar sanatçının eserlerindeki duygusal derinlikleri keşfedecek ve kendi yaratıcılıklarını nasıl geliştirebileceklerini öğrenecekler. Etkinlik sonunda soru-cevap bölümü ile interaktif bir deneyim yaşanacak.",
      highlights: [
        "Sanatçının yaşam hikayesi",
        "Eserlerin hikayesi",
        "İlham kaynakları paylaşımı",
        "Soru-cevap oturumu"
      ],
      moderator: "Dr. Ayşe Demir - Sanat Tarihçisi",
      duration: "90 dakika",
      organizer: "Kadıköy Sanat Merkezi",
      contact: "+90 216 555 0456",
      parking: "Yakınında paralı otoparklar mevcut",
      accessibility: "Tekerlekli sandalye erişimi mevcut"
    },
    {
      id: 4,
      title: "Akrilik Teknikler Workshop'u",
      category: "workshop",
      date: "5 Ocak 2025",
      time: "10:00-15:00",
      location: "İrem Köse Atölyesi",
      description: "Akrilik boya ile çeşitli teknikler ve uygulamalar. 5 saatlik yoğun program.",
      image: "/eserler/04.jpg",
      price: "300 TL",
      capacity: "6 kişi",
      status: "upcoming",
      fullDescription: "Akrilik boyaların sınırsız olanaklarını keşfedeceğiniz bu özel workshop'ta gelişmiş teknikler öğreneceksiniz. Katmanli boyama, dokusal uygulamalar, glazing teknikleri ve modern yaklaşımlar detaylı olarak uygulanacak. Küçük grup ile yoğun ve kişiselleştirilmiş eğitim.",
      highlights: [
        "İleri seviye akrilik teknikler",
        "Kişiselleştirilmiş rehberlik",
        "Profesyonel malzeme kullanımı",
        "İki farklı eser yaratımı"
      ],
      prerequisites: "Temel resim bilgisi önerilir",
      included: "Premium akrilik boyalar, özel fırçalar, tuval ve tüm malzemeler",
      organizer: "İrem Köse Sanat Atölyesi",
      contact: "+90 555 835 19 40",
      parking: "Ücretsiz otopark mevcut",
      accessibility: "Tekerlekli sandalye erişimi mevcut"
    },
    {
      id: 5,
      title: "İç Dünyalar - Karma Sergi",
      category: "sergi",
      date: "12 Ocak 2025",
      time: "17:00",
      location: "İstanbul Modern",
      description: "Çağdaş sanatçıların iç dünyalarını yansıtan eserlerden oluşan karma sergi.",
      image: "/eserler/05.jpg",
      price: "Ücretsiz",
      capacity: "Sınırsız",
      status: "upcoming",
      fullDescription: "Bu etkileyici karma sergide, İrem Köse'nin eserleri diğer çağdaş sanatçılarla bir araya geliyor. Her sanatçının içsel yolculuğunu anlatan eserler, izleyicileri derin bir keşfe davet ediyor. Sergi, modern sanatın duygusal boyutlarını keşfetmek isteyenler için eşsiz bir fırsat sunuyor.",
      highlights: [
        "12 farklı sanatçı",
        "45 özgün eser",
        "Çoklu ortam sunumları",
        "Rehberli turlar"
      ],
      curator: "Prof. Dr. Mehmet Yılmaz",
      duration: "6 hafta sürecek",
      organizer: "İstanbul Modern Sanat Müzesi",
      contact: "+90 212 555 0789",
      parking: "Müze otoparkı mevcut",
      accessibility: "Tam erişilebilir tesis"
    },
    {
      id: 6,
      title: "Sanat Terapisi Seansı",
      category: "event",
      date: "18 Ocak 2025",
      time: "16:00-18:00",
      location: "İrem Köse Atölyesi",
      description: "Sanatın iyileştirici gücünü keşfetmek için özel tasarlanmış terapi seansı.",
      image: "/eserler/06.jpg",
      price: "200 TL",
      capacity: "12 kişi",
      status: "upcoming",
      fullDescription: "Bu özel sanat terapisi seansında, renklerin ve yaratım sürecinin iyileştirici gücü deneyimlenecek. Profesyonel sanat terapisti eşliğinde, katılımcılar içsel dünyalarını keşfedecek ve duygusal dengeyi bulma yöntemleri öğrenecekler. Hem bireysel hem de grup dinamikleri ile desteklenen seans.",
      highlights: [
        "Profesyonel sanat terapisti",
        "Kişisel keşif yolculuğu",
        "Grup dinamikleri",
        "Stres azaltma teknikleri"
      ],
      therapist: "Dr. Zeynep Kaya - Sanat Terapisti",
      ageLimit: "18 yaş ve üzeri",
      organizer: "İrem Köse Sanat Atölyesi",
      contact: "+90 555 835 19 40",
      parking: "Ücretsiz otopark mevcut",
      accessibility: "Tekerlekli sandalye erişimi mevcut"
    }
  ];

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
