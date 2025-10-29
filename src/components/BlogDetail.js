import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogDetail.css';

const BlogDetail = () => {
  const { id } = useParams();
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
  }, [id]);

  const blogPosts = {
    1: {
      id: 1,
      title: "Renklerin Duygusal Dili: Sanatta Renk Psikolojisi",
      excerpt: "Renkler sadece görsel bir deneyim değil, aynı zamanda duygularımızı ve ruh halimizi derinden etkileyen güçlü bir iletişim aracıdır. Sanat eserlerinde kullanılan renkler, izleyicinin iç dünyasına dokunur ve onu farklı duygusal yolculuklara çıkarır.",
      content: `Sanat tarihinde renklerin kullanımı, sadece estetik bir tercih değil, aynı zamanda psikolojik bir araç olarak da değerlendirilmiştir. Kırmızı, tutku ve enerjiyi temsil ederken; mavi, huzur ve sakinliği çağrıştırır. Yeşil, doğa ve yeniden doğuşu simgelerken; sarı, neşe ve umudu ifade eder.

Çağdaş sanatta renklerin kullanımı, sanatçının iç dünyasını ve duygusal durumunu yansıtır. Her renk, farklı bir hikaye anlatır ve izleyicinin kendi deneyimleriyle harmanlanarak yeni anlamlar kazanır.

Renk psikolojisi, sanat eserlerinin etkisini artırmak için kritik bir rol oynar. Doğru renk kombinasyonları, eserin mesajını güçlendirir ve izleyicinin duygusal bağ kurmasını sağlar.

## Renklerin Duygusal Etkisi

Kırmızı, kan ve ateşin rengi olarak, yaşam gücünü ve tutkuyu temsil eder. Bu renk, izleyicinin dikkatini çeker ve enerji verir. Sanat eserlerinde kırmızı kullanımı, güçlü duygusal tepkiler uyandırır.

Mavi ise gökyüzü ve denizin rengi olarak, sonsuzluğu ve huzuru çağrıştırır. Bu renk, sakinlik ve güven verir. Sanat eserlerinde mavi kullanımı, meditatif bir atmosfer yaratır.

## Sanatçının Renk Seçimi

Her sanatçı, kendi renk paletini oluştururken, sadece estetik kaygılarla değil, aynı zamanda duygusal ifade gücüyle de hareket eder. Renk seçimi, sanatçının o anki ruh halini ve eserin mesajını yansıtır.

Bu nedenle, her sanat eseri, kendine özgü bir renk dili konuşur ve izleyicinin bu dili anlaması, eserle kurduğu bağı güçlendirir.`,
      date: "15 Ekim 2024",
      category: "Sanat Teorisi",
      readTime: "5 dk",
      image: "/eserler/01.jpg",
      author: "İrem Köse"
    },
    2: {
      id: 2,
      title: "Tuval Üzerinde Duygular: İçgüdüsel Sanat Üretimi",
      excerpt: "Sanat üretimi, planlı bir süreçten ziyade, içgüdüsel bir dışavurumdur. Tuvalin başına oturduğumda, fırçamın rehberliğinde duygularımın akışına izin veririm.",
      content: `İçgüdüsel sanat üretimi, sanatçının en saf halini ortaya koyar. Bu süreçte, teknik bilgi ve deneyim, sezgisel yaratıcılıkla harmanlanır. Her fırça darbesi, o anki ruh halinin bir yansımasıdır.

Spontane üretim, sanat eserine samimiyet ve özgünlük katar. Planlanmış eserler güzel olabilir, ancak içgüdüsel olarak yaratılan eserler, sanatçının ruhunu taşır.

Bu yaklaşım, sanatçının kendini keşfetmesine ve izleyicinin de bu keşif yolculuğuna katılmasına olanak tanır. Her eser, bir anın dondurulmuş hali ve o anın duygusal yoğunluğunu taşır.

## İçgüdüsel Yaratım Süreci

Tuvalin başına oturduğumda, önceden belirlenmiş bir plan yoktur. Sadece o anki duygularım ve iç dünyamın sesi vardır. Fırçam, bu sesi takip eder ve tuval üzerinde bir hikaye anlatmaya başlar.

Bu süreçte, düşünce ve duygu arasında bir köprü kurulur. Her renk, her fırça darbesi, o anki ruh halimin bir parçasıdır. Bu nedenle, her eser benzersizdir ve tekrar edilemez.

## Spontane Yaratıcılık

Spontane yaratıcılık, sanatçının en özgün yanını ortaya koyar. Bu süreçte, teknik bilgi ve deneyim, sezgisel yaratıcılıkla harmanlanır. Sonuç, hem teknik olarak güçlü hem de duygusal olarak etkileyici bir eserdir.

Bu yaklaşım, sanat eserine samimiyet ve özgünlük katar. İzleyici, eserde sanatçının ruhunu görür ve bu bağ, eserle kurduğu ilişkiyi güçlendirir.`,
      date: "8 Ekim 2024",
      category: "Sanat Süreci",
      readTime: "4 dk",
      image: "/eserler/02.jpg",
      author: "İrem Köse"
    },
    3: {
      id: 3,
      title: "Katmanlı Yüzeyler: Rölyef ve Doku Teknikleri",
      excerpt: "Sanat eserlerinde derinlik yaratmak, sadece perspektif ve gölgelendirme ile sınırlı değildir. Rölyef pasta, kumaş ve alçı-tutkal karışımları ile fiziksel derinlik oluşturmak mümkündür.",
      content: `Katmanlı yüzey çalışmaları, sanat eserine üç boyutlu bir karakter kazandırır. Bu teknikler, sadece görsel değil, aynı zamanda dokunsal bir deneyim de sunar.

Rölyef pasta uygulamaları, yüzeyde farklı yükseklikler oluşturarak ışık-gölge oyunlarını zenginleştirir. Kumaş ve alçı-tutkal karışımları ise, organik dokular yaratarak esere doğal bir karakter kazandırır.

Bu teknikler, sanatçının yaratıcılığını genişletir ve eserlerine özgün bir kimlik kazandırır. Her katman, farklı bir hikaye anlatır ve izleyicinin eserle etkileşimini artırır.

## Rölyef Pasta Teknikleri

Rölyef pasta, sanat eserlerinde fiziksel derinlik yaratmak için kullanılan önemli bir tekniktir. Bu teknik, yüzeyde farklı yükseklikler oluşturarak ışık-gölge oyunlarını zenginleştirir.

Pasta uygulaması, sanatçının yaratıcılığını genişletir ve eserlerine özgün bir kimlik kazandırır. Her katman, farklı bir hikaye anlatır ve izleyicinin eserle etkileşimini artırır.

## Kumaş ve Alçı-Tutkal Karışımları

Kumaş ve alçı-tutkal karışımları, organik dokular yaratarak esere doğal bir karakter kazandırır. Bu teknikler, sanat eserine üç boyutlu bir karakter kazandırır.

Bu yaklaşım, sadece görsel değil, aynı zamanda dokunsal bir deneyim de sunar. İzleyici, eserde farklı dokuları hisseder ve bu deneyim, eserle kurduğu bağı güçlendirir.`,
      date: "1 Ekim 2024",
      category: "Teknik",
      readTime: "6 dk",
      image: "/eserler/03.jpg",
      author: "İrem Köse"
    },
    4: {
      id: 4,
      title: "Kadın Figürü ve Güç: Çağdaş Sanatta Dişil Temsil",
      excerpt: "Kadın figürü, sanat tarihinde farklı dönemlerde farklı şekillerde temsil edilmiştir. Çağdaş sanatta ise kadın, güçlü, bağımsız ve kendi hikayesinin kahramanı olarak karşımıza çıkar.",
      content: `Çağdaş sanatta kadın temsili, geleneksel bakış açılarından uzaklaşarak yeni bir perspektif sunar. Kadın figürü artık sadece bir obje değil, aktif bir özne olarak resmedilir.

Bu eserlerde kadın, kendi gücünü keşfeden, mücadele eden ve dönüşen bir karakter olarak karşımıza çıkar. Her eser, kadının farklı bir yönünü ortaya koyar.

Dişil güç, sadece fiziksel değil, aynı zamanda ruhsal ve duygusal bir güçtür. Bu güç, sanat eserlerinde farklı semboller ve metaforlarla ifade edilir.

## Çağdaş Sanatta Kadın Temsili

Çağdaş sanatta kadın temsili, geleneksel bakış açılarından uzaklaşarak yeni bir perspektif sunar. Kadın figürü artık sadece bir obje değil, aktif bir özne olarak resmedilir.

Bu yaklaşım, kadının toplumdaki rolünü yeniden tanımlar ve güçlendirir. Her eser, kadının farklı bir yönünü ortaya koyar ve bu çeşitlilik, kadın kimliğinin zenginliğini gösterir.

## Dişil Güç ve Semboller

Dişil güç, sadece fiziksel değil, aynı zamanda ruhsal ve duygusal bir güçtür. Bu güç, sanat eserlerinde farklı semboller ve metaforlarla ifade edilir.

Bu semboller, kadının doğal gücünü ve yaratıcılığını vurgular. Her sembol, kadının farklı bir yönünü ortaya koyar ve bu çeşitlilik, kadın kimliğinin zenginliğini gösterir.`,
      date: "24 Eylül 2024",
      category: "Sosyal Sanat",
      readTime: "7 dk",
      image: "/eserler/04.jpg",
      author: "İrem Köse"
    },
    5: {
      id: 5,
      title: "Doğa ve İnsan: Sanatta Sürdürülebilirlik Mesajı",
      excerpt: "Sanat, sadece estetik bir deneyim değil, aynı zamanda toplumsal mesajların aktarıldığı bir araçtır. Doğa ve insan arasındaki ilişki, çağdaş sanatın önemli temalarından biridir.",
      content: `Sürdürülebilirlik, sadece çevresel bir kavram değil, aynı zamanda sanatsal bir ifade biçimidir. Sanatçılar, doğa ile uyum içinde yaşamanın önemini eserlerinde vurgular.

Bu eserler, izleyicinin doğa ile olan bağını güçlendirir ve çevresel bilinci artırır. Her eser, doğanın güzelliğini ve kırılganlığını hatırlatır.

Sanat, sürdürülebilir yaşamın önemini güzel ve etkili bir şekilde aktarır. Bu mesaj, izleyicinin günlük yaşamında da yankı bulur.

## Doğa ve İnsan İlişkisi

Doğa ve insan arasındaki ilişki, çağdaş sanatın önemli temalarından biridir. Bu ilişki, sadece fiziksel değil, aynı zamanda ruhsal ve duygusal bir bağdır.

Sanat eserleri, bu bağı güçlendirir ve izleyicinin doğa ile olan ilişkisini yeniden tanımlar. Her eser, doğanın güzelliğini ve kırılganlığını hatırlatır.

## Sürdürülebilirlik Mesajı

Sürdürülebilirlik, sadece çevresel bir kavram değil, aynı zamanda sanatsal bir ifade biçimidir. Sanatçılar, doğa ile uyum içinde yaşamanın önemini eserlerinde vurgular.

Bu mesaj, izleyicinin günlük yaşamında da yankı bulur. Sanat, sürdürülebilir yaşamın önemini güzel ve etkili bir şekilde aktarır.`,
      date: "17 Eylül 2024",
      category: "Çevre Sanatı",
      readTime: "5 dk",
      image: "/eserler/05.jpg",
      author: "İrem Köse"
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="blog-detail">
        <div className="error-message">
          <h2>Blog yazısı bulunamadı</h2>
          <button onClick={() => navigate('/blog')} className="back-btn">
            Blog'a Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-header">
        <motion.button
          className="back-btn"
          onClick={() => navigate('/blog')}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ x: -5, transition: { duration: 0.2 } }}
        >
          ← Blog'a Dön
        </motion.button>
        
        <motion.div
          className="post-meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="post-date">{post.date}</span>
          <span className="post-read-time">{post.readTime} okuma</span>
        </motion.div>
      </div>

      <motion.article
        className="blog-detail-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="post-image">
          <img src={post.image} alt={post.title} />
        </div>

        <div className="post-text">
          <h1 className="post-title">{post.title}</h1>
          
          <div className="post-author">
            <span>Yazar: {post.author}</span>
          </div>

          <div className="post-content-text">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="content-heading">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="content-paragraph">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </motion.article>

      <motion.div
        className="blog-detail-footer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="related-posts">
          <h3>İlgili Yazılar</h3>
          <div className="related-links">
            {Object.values(blogPosts)
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <button
                  key={relatedPost.id}
                  className="related-link"
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                >
                  {relatedPost.title}
                </button>
              ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogDetail;
