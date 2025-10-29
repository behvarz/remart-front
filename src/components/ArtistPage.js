import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Chatbot from './Chatbot';
import './ArtistPage.css';

const ArtistPage = () => {

  useEffect(() => {
    // Set background image
    document.documentElement.style.backgroundImage = "url('/bg.jpg')";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.backgroundPosition = "center center";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundAttachment = "fixed";
    
    // Cleanup function
    return () => {
      document.documentElement.style.backgroundImage = "";
      document.documentElement.style.backgroundSize = "";
      document.documentElement.style.backgroundPosition = "";
      document.documentElement.style.backgroundRepeat = "";
      document.documentElement.style.backgroundAttachment = "";
    };
  }, []);

  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="artist-page">
      <div className="artist-hero">
        <motion.div 
          className="artist-image-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/sanatci.jpg" 
            alt="İrem Köse"
            className="artist-image"
          />
        </motion.div>
        
        <motion.div 
          className="artist-info-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="artist-name">İrem Köse</h1>
          <p className="artist-title">Sanatçı & Ressam</p>
          
          <div className="artist-description">
            <p>
              Tuval üzerine yağlı boya ve akrilik ağırlıklı çalışan bir çağdaş sanatçıyım. 
              Boyanın yoğun, güçlü ve etkileyici dokusunu ön planda tutmayı seviyorum. 
              Zaman zaman rölyef pasta, kumaş ve alçı-tutkal karışımları kullanarak yüzeyde 
              özgün bir derinlik oluşturuyorum.
            </p>
            
            <p>
              Temel sanat eğitimimi Bolu Anadolu Güzel Sanatlar Lisesi Resim Bölümü'nde aldım. 
              Ardından Dumlupınar Üniversitesi Çizgi Film ve Animasyon Bölümü'nden mezun oldum. 
              Farklı disiplinlerde edindiğim deneyimleri bugün resimlerimde harmanlıyor, 
              kendi ifade dilimi geliştirmeye devam ediyorum.
            </p>
            
            <p>
              Üretim sürecim planlı değil, tamamen içgüdüsel. Tuvalin başına oturduğumda 
              duygularımın ve fırçamın sezgisel yönelişine izin veriyorum. Her eserim, 
              o ana özgü ruh halimin dışavurumu olarak şekilleniyor.
            </p>
          </div>
          
        </motion.div>
      </div>
      
      <motion.div 
        className="artist-stats-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="artist-stats">
          <div className="stat-item">
            <h3>13+</h3>
            <p>Eser</p>
          </div>
          <div className="stat-item">
            <h3>5+</h3>
            <p>Yıl Deneyim</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Mutlu Müşteri</p>
          </div>
        </div>
        
        <div className="artist-actions">
          <button 
            className="chatbot-button"
            onClick={scrollToChatbot}
          >
            İrem ile Konuş
          </button>
          <button 
            className="whatsapp-button"
            onClick={() => window.open('https://wa.me/905558351940', '_blank')}
          >
            WhatsApp ile İletişim
          </button>
        </div>
      </motion.div>
      
      <motion.div 
        className="artist-philosophy"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2>Sanat Felsefem</h2>
        <div className="philosophy-content">
          <div className="philosophy-item">
            <h3>Doğa ile Bağ</h3>
            <p>
              Doğanın renklerini, ışığını ve enerjisini eserlerime yansıtıyorum. 
              Her mevsim, her an, bana ilham veren bir hikaye anlatır.
            </p>
          </div>
          <div className="philosophy-item">
            <h3>İç Dünya Keşfi</h3>
            <p>
              Sanat, iç dünyamızın dışa vurumudur. Her eser, ruhun derinliklerinden 
              gelen bir mesajdır ve izleyicisini kendi iç yolculuğuna davet eder.
            </p>
          </div>
          <div className="philosophy-item">
            <h3>Renklerin Dili</h3>
            <p>
              Renkler, kelimelerin anlatamadığı duyguları ifade eder. Her ton, 
              her geçiş, özel bir anlam taşır ve izleyicisinde farklı hisler uyandırır.
            </p>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="artist-techniques"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <h2>Kullandığım Teknikler</h2>
        <div className="techniques-grid">
          <div className="technique-item">
            <h3>Yağlı Boya</h3>
            <p>Geleneksel yağlı boya teknikleri ile derinlik ve zenginlik</p>
          </div>
          <div className="technique-item">
            <h3>Akrilik</h3>
            <p>Modern akrilik boyalarla canlı ve dinamik eserler</p>
          </div>
          <div className="technique-item">
            <h3>Karma Teknik</h3>
            <p>Farklı malzemeleri birleştirerek özgün dokular</p>
          </div>
          <div className="technique-item">
            <h3>Rölyef</h3>
            <p>Üç boyutlu efektlerle eserlere derinlik kazandırma</p>
          </div>
        </div>
      </motion.div>

      <div id="chatbot-section">
        <Chatbot />
      </div>
    </div>
  );
};

export default ArtistPage;
