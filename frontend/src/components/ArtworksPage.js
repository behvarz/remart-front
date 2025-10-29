import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';
import './ArtworksPage.css';

const ArtworksPage = () => {
  const navigate = useNavigate();
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [modalArtwork, setModalArtwork] = useState(null);

  useEffect(() => {
    // Set background image
    document.documentElement.style.backgroundImage = "url('/bg.jpg')";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.backgroundPosition = "center center";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundAttachment = "fixed";
    
    // Sayfa yüklendiğinde selectedArtwork'i sıfırla
    setSelectedArtwork(null);
    
    // Cleanup function
    return () => {
      document.documentElement.style.backgroundImage = "";
      document.documentElement.style.backgroundSize = "";
      document.documentElement.style.backgroundPosition = "";
      document.documentElement.style.backgroundRepeat = "";
      document.documentElement.style.backgroundAttachment = "";
    };
  }, []);

  const artworks = [
    {
      id: 1,
      name: "FREYJA",
      size: "40 × 90 cm",
      technique: "Canvas / Yağlı Boya & Alçı-Kumaş (dokulu)",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Mistik bir dünyanın eşiğinde duran bir kadının hikayesi. Gücü, yalnızlığı ve sezgileriyle yolunu bulan bir ruhun sembolü.",
      story: "Efsaneler, zamanın sisleri arasında kaybolsa da, bazıları rüzgârın ve dalgaların diliyle fısıldanmaya devam eder. Bu tablo, o fısıltılardan birinin yankısıdır.",
      specialFeatures: "Dokulu yüzey, mistik atmosfer, sınırlı sayıda üretilmiş",
      image: "/eserler/01.jpg"
    },
    {
      id: 2,
      name: "IŞIK KANADI",
      size: "35 × 50 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Karanlıkla aydınlık arasındaki ince çizgide doğan bir umudu temsil eder. İnsan ruhunun yeniden doğma, yükselme ve kendini aşma gücüne bir övgüdür.",
      story: "Karanlığın içinden bir ışık doğar. Önce bir çizgi gibi, sonra bir kanat gibi… Bu tablo, o ilk ışığın hikayesidir.",
      specialFeatures: "Işık efektleri, dönüşüm teması, özel renk geçişleri",
      image: "/eserler/02.jpg"
    },
    {
      id: 3,
      name: "ZAMAN VADİSİ'NİN BEKÇİSİ",
      size: "50 × 70 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Zamanın bile unuttuğu bir vadinin derinliklerinde, Altın Boynuzlu Geyik sessizce bekliyordu. Bu vadi, geçmişin anılarını ve geleceğin sırlarını sessiz bir sisin ardında saklardı.",
      story: "Her sabah, uzaklardan süzülen beyaz bir kuş, yıldızlardan getirdiği mesajlarla vadinin üzerinden geçerdi.",
      specialFeatures: "Pastel tonlar, altın detaylar, mistik atmosfer",
      image: "/eserler/03.jpg"
    },
    {
      id: 4,
      name: "KIZIL GEÇİT",
      size: "35 × 50 cm",
      technique: "Canvas / Yağlı Boya & Rölyef Pasta (dokulu)",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Bir son ile yeni bir başlangıcın arasında kalan o görünmez eşiği simgeler. Turna kuşu, yeniden doğuşun ve ruhsal özgürlüğün sembolü olarak; kızıl ayın altında, ateşin içinden yükselir.",
      story: "Ateşin içinden doğan bir ruh, gökyüzüne kanat çırpan bir turna ve kızıl ayın açtığı kapı... Bu tablo, bir son ile yeni bir başlangıcın arasındaki görünmez geçidi anlatıyor.",
      specialFeatures: "Rölyef pasta, kızıl tonlar, dönüşüm teması",
      image: "/eserler/04.jpg"
    },
    {
      id: 5,
      name: "YÜZEYİN ÖTESİNDE",
      size: "35 × 45 cm",
      technique: "Canvas / Yağlı Boya & Alçı-Kumaş (dokulu)",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Suyun berrak sessizliğinde saklı olan bir anı anlatır. Balık figürü, merak ve keşif duygusunun simgesidir. Görünene değil, görülemeyene odaklanır.",
      story: "Sadece görünenle yetinmeyenler için... Hayal gücünün taştığı, duyguların su gibi aktığı bir an.",
      specialFeatures: "Dokulu yüzey, mavi tonlar, derinlik hissi",
      image: "/eserler/05.jpg"
    },
    {
      id: 6,
      name: "SUSTURULMUŞ BAHAR",
      size: "50 × 70 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "İç dünyayla dış dünyanın çatışmasını sembolik bir dille anlatır. Bir yüzün sessizlikle örtülmüş yarısı, bastırılmış ifadeleri temsil ederken; çiçeklerle bezenmiş diğer yarısı yeniden doğuşu, direnci ve yaşamın inatçı güzelliğini simgeler.",
      story: "Her şeye rağmen bakan, gören ve unutmayan bir göz... Sessizliğin ardında yankılanan renkler ve çiçekler, susturulmuş bir baharın direnişini anlatıyor.",
      specialFeatures: "Kontrast renkler, çiçek detayları, duygusal derinlik",
      image: "/eserler/06.jpg"
    },
    {
      id: 7,
      name: "BYAKKO",
      size: "60 × 80 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Japon mitolojisinde Doğu'nun beyaz kaplanı olarak bilinen göksel koruyucudan ilham alır. Eserde, beyaz kaplanın dingin ve asil duruşu, hem gücün hem de bilgelikle yoğrulmuş bir sessizliğin sembolüdür.",
      story: "Ay ışığının huzurunda duran bir beyaz kaplan... Ne saldırıyor, ne kaçıyor — sadece var oluyor.",
      specialFeatures: "Beyaz kaplan figürü, altın detaylar, mistik atmosfer",
      image: "/eserler/07.jpg"
    },
    {
      id: 8,
      name: "LUNARIA'NIN YANKISI",
      size: "24 × 45 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Gökyüzü ile yeryüzü arasında sıkışmış bir ruhun hikâyesini anlatır. Bir zamanlar yıldız olan Lunaria, bir dileğin peşine düşüp dünyaya inmeyi seçmiştir.",
      story: "Ayın ışığıyla dokunmuş bir gecede başlar bu hikâye. Bir zamanlar bir yıldızdı Lunaria — göklere aitti.",
      specialFeatures: "Ay ışığı efektleri, mavi tonlar, yıldız detayları",
      image: "/eserler/08.jpg"
    },
    {
      id: 9,
      name: "SONSUZ BAŞLANGIÇ",
      size: "24 × 45 cm",
      technique: "300 gr Canvas Dokulu Kağıt / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Antik Mısır mitolojisinde doğumun, yeniden doğuşun ve sonsuz döngünün sembolü olan Skarabe Tanrısı Khepri'den ilham alır. Eserde, karanlığın içinden doğan ışık, her sabah yeniden yükselen güneşi ve yaşamın sürekli dönüşümünü temsil eder.",
      story: "Her sabah, karanlığın içinden yeniden doğan güneşin taşıyıcısıdır o. Binlerce yıldır aynı yolculuğu sürdürür: doğurur, taşır, yeniden başlatır.",
      specialFeatures: "Skarabe figürü, altın tonlar, döngüsel kompozisyon",
      image: "/eserler/09.jpg"
    },
    {
      id: 10,
      name: "AN",
      size: "25 × 35 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Zamanın akışında kaybolan insanın, kendi iç sessizliğinde bulduğu dinginliği anlatır. Eserdeki figür, gözlerini kapatmış bir halde tüm gürültüden uzaklaşırken, yalnızca 'şimdi'ye — saf farkındalık haline — dönmüştür.",
      story: "Zaman durdu… sadece an kaldı. Her şey sustuğunda, ruh yalnızca şimdiye döner.",
      specialFeatures: "Meditasyon teması, altın tonlar, huzur atmosferi",
      image: "/eserler/10.jpg"
    },
    {
      id: 11,
      name: "AURORA'NIN DANSI",
      size: "25 × 35 cm",
      technique: "Canvas / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Gecenin sessizliğinde gökyüzünün ışıkla buluştuğu o büyülü anı anlatır. Dağların dinginliğiyle gökyüzünün hareketi arasında kurulan denge, doğanın iki zıt halini — sakinlik ve coşku — aynı anda yansıtır.",
      story: "Gökyüzü dans ederken, dağlar sessizce izler. Her ışık dalgası, bir fısıltı gibi göğe yükselir; her yıldız, bir düşün parıltısıdır.",
      specialFeatures: "Aurora efektleri, mavi tonlar, doğa teması",
      image: "/eserler/11.jpg"
    },
    {
      id: 12,
      name: "ÖMÜR",
      size: "60 × 80 cm",
      technique: "Canvas / Yağlı Boya & Rölyef Pasta",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Işığın içinde doğan bir varlığın sessiz yankısını anlatır. Gökyüzüyle birleşen figür, hem dünyanın hem de evrenin ötesinde bir huzuru simgeler.",
      story: "Bir ömür bazen bir nefese sığar… Ama o nefes galaksiler kadar derindir.",
      specialFeatures: "Rölyef pasta, mavi-beyaz tonlar, sonsuzluk teması",
      image: "/eserler/12.jpg"
    },
    {
      id: 13,
      name: "SIRENA",
      size: "28 × 16 cm",
      technique: "300 gr Canvas Dokulu Kağıt / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Denizin derinliklerinde saklı olan dişil gücü, özgürlüğü ve sessiz asaleti anlatır. Deniz kızının zarif ama güçlü duruşu, yüzeyin ötesinde, görünmeyen dünyanın dengesiyle ilgilidir.",
      story: "Okyanusun kalbinde yankılanan bir nefes… Sirena, ne tamamen insandır ne de bütünüyle denize aittir.",
      specialFeatures: "Deniz kızı figürü, turkuaz tonlar, su efektleri",
      image: "/eserler/13.jpg"
    },
    {
      id: 14,
      name: "NEFES",
      size: "30 × 42 cm",
      technique: "Yağlı Boya / Canvas Dokulu Kağıt",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Kadının özgürlük mücadelesi, yeniden doğuş ve hayatta kalma gücü. Bu eser, kadınların tarih boyunca maruz kaldıkları şiddet, baskı ve eşitsizliklere rağmen her defasında küllerinden yeniden doğma gücünü anlatır.",
      story: "Gölgelerin içine sıkıştırılmış bir dünya… Bir kadın, yıllarca susmuş, susturulmuş, mücadele etmiş… Ama içindeki ateş hiçbir zaman sönmemiş. Alevlerin içerisinde saklı duran bir doğa — kır çiçekleri, küllerin üstünden yeniden filizlenir. Kırılmış zincir halkaları, artık geri dönüşü olmayan bir değişimin işaretidir. Karanlık taraf onun geçmişi, ateş ise geleceği.. Ve o, başını göğe kaldırdığı anda kendi hikâyesinin kahramanı olur: 'Artık kimse beni tutamaz.' 'Ben özgürlüğüm.' Her kadın bir küldür — dokunursan ateş olur!",
      specialFeatures: "Koyu lacivert & siyah (baskı, travma), turuncu & alev kırmızısı (direniş, dönüşüm), yeşil dokunuşlar (umut, yeniden var oluş), cilt tonunun aydınlanması (bilincin yükselişi)",
      image: "/eserler/14.jpg"
    }
  ];

  const scrollToChatbot = (artwork) => {
    setSelectedArtwork(artwork);
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="artworks-page">
      <div className="artworks-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Eserlerim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Her eser, bir hikayenin başlangıcıdır. İç dünyamın renklerle buluştuğu anların yansıması...
        </motion.p>
      </div>

      <div className="artworks-grid">
        {artworks.map((artwork, index) => (
          <motion.div
            key={artwork.id}
            className="artwork-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <div className="artwork-image-container">
              <img 
                src={artwork.image} 
                alt={artwork.name}
                className="artwork-image"
                onClick={() => setModalArtwork(artwork)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            
            <div className="artwork-info">
              <h3 className="artwork-name">{artwork.name}</h3>
              <p className="artwork-size">{artwork.size}</p>
              <p className="artwork-technique">{artwork.technique}</p>
              <p className="artwork-description">{artwork.description}</p>
              <div className="artwork-actions">
                <button 
                  className="view-details-btn"
                  onClick={() => navigate(`/eser/${artwork.id}`)}
                >
                  Detayları Gör
                </button>
                        <button 
                          className="chatbot-btn"
                          onClick={() => scrollToChatbot(artwork)}
                        >
                          İrem ile Konuş
                        </button>
              </div>
            </div>
            </motion.div>
          ))}
      </div>

      <div id="chatbot-section">
        <Chatbot artworkContext={selectedArtwork} />
      </div>

      {/* Modal */}
      {modalArtwork && (
        <div className="artwork-modal-overlay" onClick={() => setModalArtwork(null)}>
          <div className="artwork-modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close-btn"
              onClick={() => setModalArtwork(null)}
            >
              ×
            </button>
            <img 
              src={modalArtwork.image} 
              alt={modalArtwork.name}
              className="modal-artwork-image"
            />
            <div className="modal-artwork-info">
              <h3>{modalArtwork.name}</h3>
              <p>{modalArtwork.size}</p>
              <p>{modalArtwork.technique}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ArtworksPage;
