import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';
import './ArtworkDetail.css';

const ArtworkDetail = () => {
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
    
    // Not: Chatbot hafızası otomatik olarak temizlenir çünkü yeni artworkContext geçiliyor
    
    // Cleanup function
    return () => {
      document.documentElement.style.backgroundImage = "";
      document.documentElement.style.backgroundSize = "";
      document.documentElement.style.backgroundPosition = "";
      document.documentElement.style.backgroundRepeat = "";
      document.documentElement.style.backgroundAttachment = "";
    };
  }, [id]);

  const artworks = [
    {
      id: 1,
      name: "FREYJA",
      size: "40 × 90 cm",
      technique: "Canvas / Yağlı Boya & Alçı-Kumaş (dokulu)",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Mistik bir dünyanın eşiğinde duran bir kadının hikayesi. Gücü, yalnızlığı ve sezgileriyle yolunu bulan bir ruhun sembolü.",
      story: "Efsaneler, zamanın sisleri arasında kaybolsa da, bazıları rüzgârın ve dalgaların diliyle fısıldanmaya devam eder. Bu tablo, o fısıltılardan birinin yankısıdır. Kadın, dalgaların kıyısında duruyor. Elinde tuttuğu asanın ucunda, karanlığı yaran bir ışık parlıyor uzaklardaki kaleye uzanan yolu aydınlatan tek rehber. Arkasında kalan dünya, huzur ve güvenin simgesi. Önündeki deniz ise bilinmezliğin ta kendisi… Uzun, yeşil elbisesi doğanın ve yaşamın gücünü temsil ediyor; kökleri toprağa, kalbi suya ait. O, kaderin çağrısını duymuş bir bekçi, bir rehber ya da bir büyücü belki. Ama asıl yolculuğu, kaleye değil kendi iç dünyasına doğru. Çünkü orada, ışığın gerçekten parladığı yer kalbin derinlikleridir. Fırtınalar dinince, sis dağılınca, herkesin kendi içinde bir 'ışık kulesi' vardır. Sanatçı Notu: Bu tablo, o ışığı hatırlatan bir hikâyedir.",
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
      story: "Karanlığın içinden bir ışık doğar. Önce bir çizgi gibi, sonra bir kanat gibi… Bu tablo, o ilk ışığın hikayesidir. Kadın, gökyüzüne doğru yükselirken omzundan yayılan parlak bir kanat belirir. O kanat, etten değil ışıktan örülüdür. Ne bedene bağlıdır ne dünyaya… yalnızca ruha ait bir simge gibidir. Her parıltı, bir anıyı; her gölge, geride bırakılan bir korkuyu anlatır. Işık, yalnızca aydınlatmak için değil, dönüştürmek için vardır. Ve o kadın, kendi karanlığını ışığa dönüştürmeyi seçmiştir. Belki de insanın gerçek kanadı, vazgeçtikleri değil, aydınlattıklarıdır. 'Işık Kanadı' bu fark edişin, içsel bir yeniden doğuşun hikayesidir. Sanatçı Notu: Bu eser, dönüşümün sessiz anlarına ve insanın içindeki ışığın uyanışına adanmıştır.",
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
      story: "Her sabah, uzaklardan süzülen beyaz bir kuş, yıldızlardan getirdiği mesajlarla vadinin üzerinden geçerdi. O anlarda, geyik başını göğe kaldırır; sonsuz bir sabır içinde yeni başlangıçların işaretini beklerdi. Çünkü bir gün, Zaman Vadisi'nin kutsal ruhu yeniden yankılanacak; unutulmuş hikâyeler yeni bir yaşamla uyanacaktı. Bu, yalnızca bir bekleyişin değil; zamansız bir uyanışın, yeniden doğuşun ve sonsuz ihtimallerin hikayesidir. Renk Dili: Pastel tonlar, sessizliğin içindeki derin huzuru yansıtırken; altın ve mavi geçişler umudun yeniden doğuşunu simgeler. Geyik, sabrın ve doğanın bilgeliğini temsil eder. Uzaklardaki ışık ise zamanın ötesinde yankılanan yaşam enerjisidir. Sanatçı Notu: Bu eser; zamanın ötesinde kalan umutları, sessiz bekleyişi ve her yeni ışıkta doğan sonsuz olasılıkları anlatır.",
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
      story: "Ateşin içinden doğan bir ruh, gökyüzüne kanat çırpan bir turna ve kızıl ayın açtığı kapı... Bu tablo, bir son ile yeni bir başlangıcın arasındaki görünmez geçidi anlatıyor. Her uçuş, içsel bir dönüşümün sembolü; her renk, içimizdeki ateşin yankısıdır. Turna, küllerinden yeniden doğan ruhun temsilidir ve 'Kızıl Geçit', o dönüşüm anının sessiz tanığıdır. Renk Dili: Kızıl ve turuncu tonlar dönüşümün ateşini, altın yansımalar ise yeniden doğuşun ışığını temsil eder. Arka plandaki koyu geçişler, geçmişle gelecek arasındaki sınırı belirler. Işık, burada hem yakıcı hem arındırıcı bir güçtür. Sanatçı Notu: Bu eser, bitişlerin ardındaki yeni başlangıçlara ve dönüşümün ateşinde şekillenen içsel güce adanmıştır.",
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
      story: "Sadece görünenle yetinmeyenler için... Hayal gücünün taştığı, duyguların su gibi aktığı bir an. Gerçek, bazen yüzeyin ötesinde saklıdır. Kabarcıkların dansında yankılanan bir soru: 'Ne kadarını gerçekten görüyorsun?' Balık, suyun içinde değil, düşüncenin derinliğinde yüzer. Ve belki de, tüm cevaplar o mavi sessizliğin ardında gizlidir. Renk Dili: Mavinin sakin tonları huzuru ve derinliği temsil ederken, turuncu ve altın dokular canlılığı, merakı ve yaşamın döngüsünü anlatır. Rölyef yüzey, suyun hareketini ve yaşamın dokusunu vurgular. Sanatçı Notu: Bu eser, algının ötesine geçebilenlerin dünyasına bir davettir çünkü bazen en parlak gerçekler, en sessiz derinliklerde saklıdır.",
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
      story: "Her şeye rağmen bakan, gören ve unutmayan bir göz... Sessizliğin ardında yankılanan renkler ve çiçekler, susturulmuş bir baharın direnişini anlatıyor. Kelimelerin yerini renkler almış; söylenemeyen her cümle, bir yaprakta, bir çiçeğin içinde yeniden doğmuş. Belki de en derin çığlık, en sessiz bakışta gizlidir. Ve bazen, susmak bile çiçek açar. Renk Dili: Siyah ve gri tonları, bastırılmış duyguların ağırlığını ve sessizliği temsil eder. Buna karşılık sarı, pembe ve yeşilin canlı tonları; yaşam enerjisini, yeniden doğuşu ve içsel umudu simgeler. Altın yansımalar, karanlığın içinden sızan ışığı, insan ruhunun asla tamamen kararamayacağını vurgular. Eserdeki renk geçişleri, tıpkı duygular gibi ani ve organiktir; bir sessizlikten bir fısıltıya, oradan yeniden hayata uzanır. Sanatçı Notu: Bu eser, bastırılmış seslerin çiçeklere dönüştüğü bir iç yolculuğun ifadesidir. Her renk, bir kelimenin yankısı; her çiçek, susturulmuş bir duygunun yeniden doğuşudur. 'Susturulmuş Bahar' sessizliğin bile anlatacak hikâyeleri olduğunu hatırlatır.",
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
      story: "Ay ışığının huzurunda duran bir beyaz kaplan... Ne saldırıyor, ne kaçıyor — sadece var oluyor. Göğe uzanan bakışında hem özlem hem teslimiyet var. Altın izler, geçmişin yankılarını göğe taşırken; her ışık noktası, bir duanın yankısı gibi süzülüyor mavi gecenin içine. Byakko'nun gözlerinde hem göğün sonsuzluğu hem de ruhun derinliği saklı. Belki de korumak, bazen sadece sessizce beklemektir. Renk Dili: Derin mavi ve lacivert tonları, göğün gizemini ve ruhsal derinliği yansıtır. Beyaz, saflığın ve içsel aydınlanmanın simgesidir; kaplanın kürkünde hem masumiyet hem kudret aynı anda hissedilir. Altın yansımalar, ilahi enerjiyi ve evrenle kurulan bağlantıyı temsil eder. Siyah zemin, bilinçaltının karanlığını ve oradan doğan farkındalığı betimler. Tüm renk geçişleri, tıpkı evrenin döngüsü gibi yumuşak ve süreklidir. Karanlıktan ışığa, sessizlikten kudrete. Sanatçı Notu: 'Byakko', insan ruhunun içindeki sessiz güce bir övgüdür. Her fırça darbesi, içsel dengeyi arayışın bir yansımasıdır. Kaplan, göğün koruyucusu olduğu kadar, ruhun da kendi sınırlarını aşma cesaretinin sembolüdür. Bu eser, sessiz gücün, içsel huzurun ve kozmik bağlılığın hikâyesini anlatır. 'Byakko' — sessizlikle konuşan bir kudretin resmidir.",
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
      story: "Ayın ışığıyla dokunmuş bir gecede başlar bu hikâye. Bir zamanlar bir yıldızdı Lunaria — göklere aitti. Ama bir düş, bir dilek ya da belki de kader uğruna yeryüzüne düştü. Şimdi her gece, ayın en parlak olduğu anlarda uluyarak göklere sesleniyor — unutulmamak, duyulmak, geri dönmek için. Denir ki bu ses, ait olduğu göklere dönme arzusunun yankısıymış. Ve bu döngü — çağırış, cevap, sessizlik — sonsuza dek sürecekmiş. Bu yüzden tabloya bakan herkes, bir an kendi iç sesini duyar gibi olur. Çünkü o ses, Lunaria'nın yankısıdır. Renk Dili: Derin mavi ve kobalt tonları, göğün sonsuzluğunu ve ruhun derinliklerini temsil eder. Altın ve beyaz dokunuşlar, ilahi ışığı ve umut kıvılcımlarını simgeler. Maviyle karışan turkuaz geçişler, duygusal dalgalanmaları ve içsel yolculuğu betimler. Ayın etrafındaki ışık halkası, hem özlemin hem de aydınlanmanın kaynağıdır. Dokunun yoğunluğu, duyguların yoğunluğuyla paralel bir biçimde artar; sanki her fırça darbesi bir yankının titreşimi gibidir. Sanatçı Notu: 'Lunaria'nın Yankısı', ait olma ve özgürleşme arasındaki kadim çatışmayı anlatır. Her renk, bir çağrının yankısı; her ışıltı, unutulmak istemeyen bir ruhun sesi gibidir. Bu eser, insanın kendi iç sesini evrenin sessizliğine fısıldadığı anlara bir selamdır. Çünkü bazen, en derin yankı göğe değil — kalbe çarpar.",
      specialFeatures: "Ay ışığı efektleri, mavi tonlar, yıldız detayları",
      image: "/eserler/08.jpg"
    },
    {
      id: 9,
      name: "SONSUZ BAŞLANGIÇ",
      size: "30 × 42 cm",
      technique: "300 gr Canvas Dokulu Kağıt / Yağlı Boya",
      price: "Satış için WhatsApp: +90 555 835 19 40",
      description: "Antik Mısır mitolojisinde doğumun, yeniden doğuşun ve sonsuz döngünün sembolü olan Skarabe Tanrısı Khepri'den ilham alır. Eserde, karanlığın içinden doğan ışık, her sabah yeniden yükselen güneşi ve yaşamın sürekli dönüşümünü temsil eder.",
      story: "Her sabah, karanlığın içinden yeniden doğan güneşin taşıyıcısıdır o. Binlerce yıldır aynı yolculuğu sürdürür: doğurur, taşır, yeniden başlatır. Bir sonu yoktur — çünkü her son, bir başlangıcın eşiğidir. Skarabe'nin altın başlığı, ilahi enerjiyi; kanatlarındaki kırmızı ve mavi tonlar, yaşamla ölüm arasındaki geçişi simgeler. Bu döngüde hiçbir şey kaybolmaz, sadece biçim değiştirir. Ve izleyiciye sessizce şu soruyu fısıldar: 'Gerçekten bir başlangıcın sonu var mıdır?' Renk Dili: Altın tonları, güneşin ilahi ışığını ve yeniden doğuşun kutsallığını temsil eder. Koyu siyah ve lacivert alanlar, evrenin derinliğini ve bilinmeyeni simgeler. Kırmızı, yaşam enerjisini ve dönüşümün ateşini taşır. Mavi ve beyazın birleştiği alanlar, ruhsal arınmayı ve sonsuzluğu vurgular. Renk geçişleri, tıpkı doğum ve ölüm arasındaki çizgi gibi akışkandır; birbirine karışarak sürekliliği ifade eder. Sanatçı Notu: 'Sonsuz Başlangıç', bitişlerin aslında yeni doğumlara zemin hazırladığı kadim bir gerçeği anlatır. Her karanlık, bir ışığı saklar; her son, yeni bir döngünün habercisidir. Bu eser, dönüşümün kaçınılmazlığını ve insan ruhunun yeniden doğma kudretini kutlar. Çünkü her sabah, evren bir kez daha başlar — ve biz de onunla birlikte.",
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
      story: "Zaman durdu… sadece an kaldı. Her şey sustuğunda, ruh yalnızca şimdiye döner. Bir nefes, bir ritim, bir sessizlik — hepsi aynı noktada buluşur. Kulağındaki sesler artık dış dünyaya değil, iç dünyanın yankılarına aittir. Ve o anda, hiçbir şey eksik değildir. Ne geçmiş, ne gelecek… sadece 'an'. Sen en son ne zaman 'an'da kaldın? Renk Dili: Altın ve sarı tonlar, farkındalığın ve aydınlanmanın ışığını temsil eder. Siyah ve kahverenginin derin dokuları, iç dünyanın sessizliğini ve meditasyon halini yansıtır. Beyaz geçişler, zihinsel berraklığı ve zamanın durduğu saf farkındalık anını simgeler. Renkler birbirine yumuşak geçişlerle bağlanır; tıpkı düşüncelerin yavaşça susup yerini huzura bırakması gibi. Sanatçı Notu: 'An', zamanın ötesinde bir duruşun resmidir. Her fırça darbesi, bir nefesin ritmiyle atılmıştır. Bu eser, yaşamın gürültüsü içinde bile bulunabilen sessiz bir merkeze — şimdiye — bir davettir. Çünkü bazen, sadece durmak; var olmanın en saf hâlidir.",
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
      story: "Gökyüzü dans ederken, dağlar sessizce izler. Her ışık dalgası, bir fısıltı gibi göğe yükselir; her yıldız, bir düşün parıltısıdır. Bu tabloyu yaparken sanki yıldızlarla fırça darbesi atıyordum — gecenin kalbinde bir yankı, bir nefes gibi. Aurora'nın ışıltısı, hem bir doğa olayı hem de bir ruh halidir; bir anlığına evrenin nefes alışını görmek gibidir. Ve o an, zaman durur. Gecenin içinde yalnızca ışık kalır — dans eden, yaşayan, dokunan bir ışık. Renk Dili: Derin mavi ve zümrüt tonları, gökyüzünün büyüsünü ve bilinmezliğini temsil eder. Beyaz ve açık turkuaz dokunuşlar, yıldız tozunu ve aurora'nın titreşen enerjisini simgeler. Dağların gri ve siyah tonları, sessizlik ve dayanıklılığın sembolüdür. Işıkla gölge arasındaki geçişler, iç dünyayla dış dünyanın buluşma noktasını oluşturur. Her renk, bir dalganın hareketi gibi akar — huzurla, ritimle, sessiz bir müzikle. Sanatçı Notu: 'Aurora'nın Dansı', göğün müziğini duyan bir gecenin resmidir. Her fırça darbesi, yıldızların bir yankısı gibi tuvale düşmüştür. Bu eser, doğanın sessiz şiirini, ışığın ve karanlığın birlikte yarattığı büyüyü anlatır. Çünkü bazen, evren gerçekten dans eder — ve biz sadece izleriz.",
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
      story: "Bir ömür bazen bir nefese sığar… Ama o nefes galaksiler kadar derindir. Işığın içinde doğan bir varlığın sessiz yankısını anlatır. Gökyüzüyle birleşen figür, hem dünyanın hem de evrenin ötesinde bir huzuru simgeler. Her fırça darbesi, bir hatıranın, bir dokunuşun, bir nefesin izidir. Bu eser, görünmeyene, hissedilene, zamana sığmayan bir varlığa duyulan sevgiyle şekillenmiştir. Renk Dili: Derin mavi ve beyazın buluşması; hem yaşamın hem de sonsuzluğun temsili. Altın detay, ışığın ölümsüzlüğünü ve her sonun içinde saklı bir başlangıcı simgeler. Renk geçişleri tıpkı bir nefes gibi; yumuşak, içten ve derin. Sanatçı Notu: Bu tablo, bir nefesin içinde saklı bir ömrün sessiz yankısıdır. Bir veda değil, ışığın içinde yeniden doğan bir hikâyedir.",
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
      story: "Okyanusun kalbinde yankılanan bir nefes… Sirena, ne tamamen insandır ne de bütünüyle denize aittir. Işığın suya değdiği yerde, dalgaların ritmiyle dans eder; neyin yüzeye çıkması gerektiğini, neyin derinlerde kalacağını bilir. Denizanası gibi narin, ama dalgalar kadar güçlüdür. Sessizliğinde bir özgürlük, bakışında sonsuz bir huzur taşır. Belki de Sirena, suyun hafızasında saklı kalan bir hikâyedir — her kabarcıkta yeniden doğan bir hatıra. Renk Dili: Turkuaz ve mavi tonları, denizin derinliğini ve ruhun sakinliğini temsil eder. Altın ve inci yansımalar, ışığın umuda dokunuşunu; varlığın içindeki asalet duygusunu yansıtır. Beyaz vurgular, saflığın ve sezgisel farkındalığın simgesidir. Renk geçişleri, suyun akışkanlığı gibi doğal ve zarif — karanlıktan ışığa, derinlikten yüzeye bir yolculuk… Sanatçı Notu: 'Sirena', içsel sessizliğin ve dişil gücün birleşiminden doğdu. Denizin içindeki huzuru, kadının iç dünyasındaki derinliğiyle birleştiren bu eser, görünmeyeni hissetmeye davet eder. 'Sirena' — suyun kalbinde yankılanan sessiz bir özgürlük şarkısıdır.",
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
      story: "Gölgelerin içine sıkıştırılmış bir dünya… Bir kadın, yıllarca susmuş, susturulmuş, mücadele etmiş… Ama içindeki ateş hiçbir zaman sönmemiş. Alevlerin içerisinde saklı duran bir doğa — kır çiçekleri, küllerin üstünden yeniden filizlenir. Kırılmış zincir halkaları, artık geri dönüşü olmayan bir değişimin işaretidir. Karanlık taraf onun geçmişi, ateş ise geleceği.. Ve o, başını göğe kaldırdığı anda kendi hikâyesinin kahramanı olur: 'Artık kimse beni tutamaz.' 'Ben özgürlüğüm.' Her kadın bir küldür — dokunursan ateş olur! Renk Dili: Koyu Lacivert & Siyah - Baskı, travma, toplumsal karanlık. Turuncu & Alev Kırmızısı - Direniş, dönüşüm, içsel ateş. Yeşil Dokunuşlar - Umut, yeniden var oluş. Cilt tonunun aydınlanması - Bilincin yükselişi ve gurur. Sanatçı Notu: Bu tabloyu, yalnızca bir güne değil, tüm bir hayata sığan mücadeleye adadım. Zincirler kırılabilir. Yeter ki kadınların sesi önce kendi içlerinden duyulsun. Kadınlar için değil, kadınlarla birlikte… Bu eser, dünyayı değiştiren tüm emekçi kadınlara şükranla.",
      specialFeatures: "Koyu lacivert & siyah (baskı, travma), turuncu & alev kırmızısı (direniş, dönüşüm), yeşil dokunuşlar (umut, yeniden var oluş), cilt tonunun aydınlanması (bilincin yükselişi)",
      image: "/eserler/14.jpg"
    }
  ];

  const artwork = artworks.find(a => a.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="artwork-not-found">
        <h2>Eser bulunamadı</h2>
        <p>Aradığınız eser mevcut değil.</p>
      </div>
    );
  }

  const scrollToChatbot = () => {
    const chatbotSection = document.getElementById('chatbot-section');
    if (chatbotSection) {
      chatbotSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="artwork-detail-page">
      <div className="artwork-detail-container">
        <motion.div 
          className="artwork-main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="artwork-image-section">
            <img 
              src={artwork.image} 
              alt={artwork.name}
              className="artwork-detail-image"
            />
          </div>
          
          <div className="artwork-info-section">
            <h1 className="artwork-title">{artwork.name}</h1>
            
            <div className="artwork-specs">
              <div className="spec-item">
                <span className="spec-label">Ebat:</span>
                <span className="spec-value">{artwork.size}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Teknik:</span>
                <span className="spec-value">{artwork.technique}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Özel Özellikler:</span>
                <span className="spec-value">{artwork.specialFeatures}</span>
              </div>
            </div>
            
            <div className="artwork-description">
              <h3>Açıklama</h3>
              <p>{artwork.description}</p>
            </div>
            
            <div className="artwork-story">
              <h3>Hikaye</h3>
              <p>{artwork.story}</p>
            </div>
            
            <div className="artwork-actions">
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
          </div>
        </motion.div>
      </div>
        
      <div id="chatbot-section">
        <Chatbot artworkContext={artwork} />
      </div>

      <div className="other-artworks-section">
        <motion.div
          className="other-artworks-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Diğer Eserlerim</h2>
          <p>Daha fazla eser keşfetmek için aşağıdaki galeriyi inceleyebilirsiniz</p>
        </motion.div>
        <div className="other-artworks-grid">
          {artworks.filter(a => a.id !== artwork.id).slice(0, 6).map((otherArtwork) => (
            <motion.div
              key={otherArtwork.id}
              className="other-artwork-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              onClick={() => navigate(`/eser/${otherArtwork.id}`)}
            >
              <div className="other-artwork-image-container">
                <img 
                  src={otherArtwork.image} 
                  alt={otherArtwork.name}
                  className="other-artwork-image"
                />
              </div>
              <div className="other-artwork-info">
                <h4>{otherArtwork.name}</h4>
                <p>{otherArtwork.technique}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
