# 🚀 Remart Website - Kurulum Talimatları

## 📁 Proje Yapısı

```
Website/
├── backend/                  # Backend API (Node.js + Express)
│   ├── server.js            # API sunucusu
│   ├── artist-knowledge.js  # Sanatçı bilgi bankası
│   ├── package.json         # Backend bağımlılıkları
│   ├── .env                 # Çevre değişkenleri (oluşturulacak)
│   ├── .gitignore          # Git ignore dosyası
│   └── README.md           # Backend dokümantasyonu
│
├── index.html              # Ana website (Frontend)
├── *.png, *.jpg           # Görseller
└── SETUP.md               # Bu dosya
```

---

## ⚙️ Kurulum Adımları

### 1. Backend Kurulumu

#### a) Backend Klasörüne Gidin
```bash
cd backend
```

#### b) Node.js Bağımlılıklarını Yükleyin
```bash
npm install
```

#### c) .env Dosyası Oluşturun

Backend klasöründe `.env` dosyası oluşturun ve aşağıdaki içeriği ekleyin:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration (Frontend URL)
FRONTEND_URL=http://localhost:3000
```

**ÖNEMLİ:** `your_openai_api_key_here` yerine kendi OpenAI API key'inizi yazın.

#### d) OpenAI API Key Nasıl Alınır?

1. [OpenAI Platform](https://platform.openai.com/api-keys) adresine gidin
2. Hesabınıza giriş yapın (yoksa oluşturun)
3. "Create new secret key" butonuna tıklayın
4. Key'i kopyalayın
5. `.env` dosyasına yapıştırın

#### e) Backend Sunucusunu Başlatın

**Development Mode (önerilen):**
```bash
npm run dev
```

**Veya Production Mode:**
```bash
npm start
```

✅ Başarılı olursa göreceksiniz:
```
🚀 Remart AI Chatbot API running on port 3001
📍 Frontend URL: http://localhost:3000
✅ OpenAI API Key: Configured
```

---

### 2. Frontend Kurulumu

#### a) index.html Dosyasını Açın

Website ana klasöründe `index.html` dosyasını bir web sunucusu ile çalıştırın.

**Seçenek 1 - Live Server (VS Code Extension):**
1. VS Code'da "Live Server" extension'ı yükleyin
2. `index.html` dosyasına sağ tıklayın
3. "Open with Live Server" seçeneğini seçin
4. Tarayıcıda `http://localhost:5500` (veya farklı port) açılacak

**Seçenek 2 - Python Simple Server:**
```bash
# Python 3
python -m http.server 8000

# Tarayıcıda: http://localhost:8000
```

**Seçenek 3 - Node.js http-server:**
```bash
npx http-server -p 8000

# Tarayıcıda: http://localhost:8000
```

#### b) API URL'i Kontrol Edin

`index.html` dosyasında (satır ~1067):
```javascript
const API_URL = 'http://localhost:3001/api';
```

Eğer backend farklı bir portta çalışıyorsa buradan değiştirin.

---

## 🧪 Test Etme

### 1. Backend Testi

Terminal'de:
```bash
curl http://localhost:3001/api/health
```

Yanıt:
```json
{
  "status": "ok",
  "message": "Remart AI Chatbot API is running"
}
```

### 2. Chatbot Testi

1. Tarayıcıda website'i açın
2. Chat input'a "Merhaba" yazın
3. Enter'a basın
4. AI yanıtını bekleyin (3-5 saniye)

Başarılı ise İrem Eyüpoğlu karakterinde bir yanıt alacaksınız! 🎨

---

## 📝 Sanatçı Bilgilerini Güncelleme

### artist-knowledge.js Dosyasını Düzenleyin

1. `backend/artist-knowledge.js` dosyasını açın
2. İlgili bölümleri güncelleyin:
   - `basicInfo` - Temel bilgiler
   - `philosophy` - Sanat felsefesi
   - `workshops` - Workshop detayları
   - `artworks` - Eser bilgileri
   - `events` - Etkinlikler
   - `faq` - Sık sorulan sorular
3. Dosyayı kaydedin
4. Backend sunucusunu yeniden başlatın (`npm run dev` otomatik yapar)

Artık chatbot güncellenmiş bilgilerle yanıt verecek!

---

## 🌐 Production'a Alma

### 1. Backend Deployment (Örnek: Heroku, Railway, Render)

```bash
# .env dosyasını production'a ekleyin
# Environment variables panelinden:
OPENAI_API_KEY=your_key
PORT=443
NODE_ENV=production
FRONTEND_URL=https://yourdomain.com
```

### 2. Frontend Deployment

`index.html` dosyasında API URL'i güncelleyin:
```javascript
const API_URL = 'https://your-backend-domain.com/api';
```

### 3. CORS Ayarları

Backend'de `server.js` dosyasında production domain'i ekleyin:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com', // Frontend domain
  credentials: true
}));
```

---

## 🔒 Güvenlik Notları

✅ **API key backend'de** - Ziyaretçiler göremez  
✅ **CORS koruması** - Sadece belirtilen domain'den isteklere izin verir  
✅ **Session yönetimi** - Her kullanıcı için ayrı session  
✅ **.gitignore** - .env dosyası Git'e eklenmez  

---

## 🐛 Sorun Giderme

### Backend çalışmıyor
```bash
# Port kullanımda mı kontrol edin
lsof -i :3001

# Farklı port deneyin
PORT=3002 npm run dev
```

### API Key hatası
- OpenAI hesabınızı kontrol edin
- Kredi limitiniz dolmuş olabilir
- API key'in doğru kopyalandığından emin olun

### CORS hatası
- Backend ve frontend farklı portlarda çalışmalı
- `.env` dosyasında `FRONTEND_URL` doğru olmalı

### Chatbot yanıt vermiyor
1. Backend çalışıyor mu? → `curl http://localhost:3001/api/health`
2. Console'da hata var mı? → F12 > Console
3. Network tab'da istek gidiyor mu? → F12 > Network

---

## 📚 Ek Kaynaklar

- [OpenAI API Dokümantasyonu](https://platform.openai.com/docs)
- [Express.js](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

---

## 💡 İpuçları

1. **Development'da** `npm run dev` kullanın (auto-restart)
2. **Maliyet kontrolü** için OpenAI dashboard'u takip edin
3. **Logları** kontrol edin: `console.log` veya Winston
4. **Rate limiting** ekleyin yoğun trafikte
5. **Cache** mekanizması ekleyin maliyeti azaltmak için

---

## 🎨 Chatbot Kişiliğini Değiştirme

`artist-knowledge.js` → `generateSystemPrompt()` fonksiyonunu düzenleyin.

Örnek:
```javascript
// Daha samimi yapın
content: "Sen İrem, sıcak ve arkadaş canlısı bir sanatçısın..."

// Daha profesyonel yapın
content: "Sen İrem Eyüpoğlu, ödüllü bir ressamsın..."
```

---

Sorularınız için: info@iremeyupoglu.com 📧


