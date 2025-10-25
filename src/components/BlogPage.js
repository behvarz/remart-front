import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './BlogPage.css';

const BlogPage = () => {
  const navigate = useNavigate();

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

  const blogPosts = [
    {
      id: 1,
      title: "Renklerin Duygusal Dili: Sanatta Renk Psikolojisi",
      excerpt: "Renkler sadece görsel bir deneyim değil, aynı zamanda duygularımızı ve ruh halimizi derinden etkileyen güçlü bir iletişim aracıdır. Sanat eserlerinde kullanılan renkler, izleyicinin iç dünyasına dokunur ve onu farklı duygusal yolculuklara çıkarır.",
      content: "Sanat tarihinde renklerin kullanımı, sadece estetik bir tercih değil, aynı zamanda psikolojik bir araç olarak da değerlendirilmiştir. Kırmızı, tutku ve enerjiyi temsil ederken; mavi, huzur ve sakinliği çağrıştırır. Yeşil, doğa ve yeniden doğuşu simgelerken; sarı, neşe ve umudu ifade eder.\n\nÇağdaş sanatta renklerin kullanımı, sanatçının iç dünyasını ve duygusal durumunu yansıtır. Her renk, farklı bir hikaye anlatır ve izleyicinin kendi deneyimleriyle harmanlanarak yeni anlamlar kazanır.\n\nRenk psikolojisi, sanat eserlerinin etkisini artırmak için kritik bir rol oynar. Doğru renk kombinasyonları, eserin mesajını güçlendirir ve izleyicinin duygusal bağ kurmasını sağlar.",
      date: "15 Ekim 2024",
      category: "Sanat Teorisi",
      readTime: "5 dk",
      image: "/eserler/01.jpg"
    },
    {
      id: 2,
      title: "Tuval Üzerinde Duygular: İçgüdüsel Sanat Üretimi",
      excerpt: "Sanat üretimi, planlı bir süreçten ziyade, içgüdüsel bir dışavurumdur. Tuvalin başına oturduğumda, fırçamın rehberliğinde duygularımın akışına izin veririm.",
      content: "İçgüdüsel sanat üretimi, sanatçının en saf halini ortaya koyar. Bu süreçte, teknik bilgi ve deneyim, sezgisel yaratıcılıkla harmanlanır. Her fırça darbesi, o anki ruh halinin bir yansımasıdır.\n\nSpontane üretim, sanat eserine samimiyet ve özgünlük katar. Planlanmış eserler güzel olabilir, ancak içgüdüsel olarak yaratılan eserler, sanatçının ruhunu taşır.\n\nBu yaklaşım, sanatçının kendini keşfetmesine ve izleyicinin de bu keşif yolculuğuna katılmasına olanak tanır. Her eser, bir anın dondurulmuş hali ve o anın duygusal yoğunluğunu taşır.",
      date: "8 Ekim 2024",
      category: "Sanat Süreci",
      readTime: "4 dk",
      image: "/eserler/02.jpg"
    },
    {
      id: 3,
      title: "Katmanlı Yüzeyler: Rölyef ve Doku Teknikleri",
      excerpt: "Sanat eserlerinde derinlik yaratmak, sadece perspektif ve gölgelendirme ile sınırlı değildir. Rölyef pasta, kumaş ve alçı-tutkal karışımları ile fiziksel derinlik oluşturmak mümkündür.",
      content: "Katmanlı yüzey çalışmaları, sanat eserine üç boyutlu bir karakter kazandırır. Bu teknikler, sadece görsel değil, aynı zamanda dokunsal bir deneyim de sunar.\n\nRölyef pasta uygulamaları, yüzeyde farklı yükseklikler oluşturarak ışık-gölge oyunlarını zenginleştirir. Kumaş ve alçı-tutkal karışımları ise, organik dokular yaratarak esere doğal bir karakter kazandırır.\n\nBu teknikler, sanatçının yaratıcılığını genişletir ve eserlerine özgün bir kimlik kazandırır. Her katman, farklı bir hikaye anlatır ve izleyicinin eserle etkileşimini artırır.",
      date: "1 Ekim 2024",
      category: "Teknik",
      readTime: "6 dk",
      image: "/eserler/03.jpg"
    },
    {
      id: 4,
      title: "Kadın Figürü ve Güç: Çağdaş Sanatta Dişil Temsil",
      excerpt: "Kadın figürü, sanat tarihinde farklı dönemlerde farklı şekillerde temsil edilmiştir. Çağdaş sanatta ise kadın, güçlü, bağımsız ve kendi hikayesinin kahramanı olarak karşımıza çıkar.",
      content: "Çağdaş sanatta kadın temsili, geleneksel bakış açılarından uzaklaşarak yeni bir perspektif sunar. Kadın figürü artık sadece bir obje değil, aktif bir özne olarak resmedilir.\n\nBu eserlerde kadın, kendi gücünü keşfeden, mücadele eden ve dönüşen bir karakter olarak karşımıza çıkar. Her eser, kadının farklı bir yönünü ortaya koyar.\n\nDişil güç, sadece fiziksel değil, aynı zamanda ruhsal ve duygusal bir güçtür. Bu güç, sanat eserlerinde farklı semboller ve metaforlarla ifade edilir.",
      date: "24 Eylül 2024",
      category: "Sosyal Sanat",
      readTime: "7 dk",
      image: "/eserler/04.jpg"
    },
    {
      id: 5,
      title: "Doğa ve İnsan: Sanatta Sürdürülebilirlik Mesajı",
      excerpt: "Sanat, sadece estetik bir deneyim değil, aynı zamanda toplumsal mesajların aktarıldığı bir araçtır. Doğa ve insan arasındaki ilişki, çağdaş sanatın önemli temalarından biridir.",
      content: "Sürdürülebilirlik, sadece çevresel bir kavram değil, aynı zamanda sanatsal bir ifade biçimidir. Sanatçılar, doğa ile uyum içinde yaşamanın önemini eserlerinde vurgular.\n\nBu eserler, izleyicinin doğa ile olan bağını güçlendirir ve çevresel bilinci artırır. Her eser, doğanın güzelliğini ve kırılganlığını hatırlatır.\n\nSanat, sürdürülebilir yaşamın önemini güzel ve etkili bir şekilde aktarır. Bu mesaj, izleyicinin günlük yaşamında da yankı bulur.",
      date: "17 Eylül 2024",
      category: "Çevre Sanatı",
      readTime: "5 dk",
      image: "/eserler/05.jpg"
    }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Sanat dünyasından düşünceler, teknikler ve ilham verici hikayeler
        </motion.p>
      </div>

      <div className="blog-content">
        <div className="blog-posts">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-post"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <div className="post-category">
                  {post.category}
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime} okuma</span>
                </div>
                
                <h2 className="post-title">{post.title}</h2>
                
                <p className="post-excerpt">{post.excerpt}</p>
                
                <div className="post-actions">
                  <button 
                    className="read-more-btn"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Devamını Oku
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="blog-newsletter"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Yeni Yazılardan Haberdar Olun</h3>
          <p>Sanat dünyasından en güncel yazıları e-posta ile alın</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              Abone Ol
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
