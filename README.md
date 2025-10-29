# 🎨 Remart - İrem Eyüpoğlu Sanat Portalı

Modern, şık ve AI destekli sanatçı portfolio websitesi.

![Status](https://img.shields.io/badge/status-production%20ready-success)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT--3.5-blue)

---

## ✨ Özellikler

### 🎨 **Frontend**
- Modern ve minimalist tasarım
- Responsive (mobil uyumlu)
- 3D slider efektleri
- Otomatik kaydırmalı eserler galerisi
- Glassmorphism ve blur efektleri
- Optimize edilmiş performans

### 🤖 **AI Chatbot**
- OpenAI GPT-3.5 Turbo entegrasyonu
- İrem Eyüpoğlu karakterinde kişiselleştirilmiş yanıtlar
- Bağlamsal konuşma (conversation history)
- Detaylı sanatçı bilgi bankası
- Backend API ile güvenli yapı
- Session yönetimi

### 📚 **İçerik**
- Sanatçı biyografisi
- Eser galerisi
- Workshop bilgileri
- İletişim formu
- Sosyal medya linkleri

---

## 🚀 Hızlı Başlangıç

### 1. Backend Kurulumu
```bash
cd backend
npm install
```

`.env` dosyası oluşturun:
```env
OPENAI_API_KEY=your_key_here
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

Backend'i başlatın:
```bash
npm run dev
```

### 2. Frontend Kurulumu

```bash
# index.html dosyasını bir web sunucusu ile açın
python -m http.server 8000
# veya
npx http-server -p 8000
```

Tarayıcıda `http://localhost:8000` açın.

**Detaylı kurulum için:** [SETUP.md](./SETUP.md)

---

## 📁 Proje Yapısı

```
Website/
├── backend/                    # Backend API
│   ├── server.js              # Express sunucusu
│   ├── artist-knowledge.js    # Sanatçı bilgi bankası
│   ├── package.json
│   ├── .env                   # (oluşturulacak)
│   └── README.md
│
├── index.html                  # Ana sayfa
├── logo.png                    # Logo
├── bg.jpg                      # Arka plan
├── *.png                       # Eser görselleri
├── SETUP.md                    # Kurulum talimatları
└── README.md                   # Bu dosya
```

---

## 🎯 Kullanım

### Ziyaretçi Deneyimi
1. Website'i ziyaret edin
2. Eserler galerisin göz atın
3. Chatbot ile İrem ile sohbet edin
4. Workshop bilgilerini öğrenin

### Yönetici Görevleri
1. **Sanatçı bilgilerini güncelleme:**
   - `backend/artist-knowledge.js` dosyasını düzenleyin
   - Backend'i yeniden başlatın

2. **Görselleri değiştirme:**
   - Ana klasördeki `.png` ve `.jpg` dosyalarını güncelleyin
   - `index.html`'de path'leri kontrol edin

3. **Chatbot karakterini ayarlama:**
   - `artist-knowledge.js` → `generateSystemPrompt()` fonksiyonunu düzenleyin

---

## 🔧 Teknolojiler

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- CSS Grid & Flexbox
- CSS Animations
- Fetch API

### Backend
- Node.js
- Express.js
- OpenAI API (GPT-3.5-turbo)
- dotenv
- CORS

---

## 🔒 Güvenlik

✅ API key backend'de güvenli şekilde saklanır  
✅ Client-side'da API key maruziyeti YOK  
✅ CORS koruması aktif  
✅ Input validation  
✅ Session yönetimi  
✅ .gitignore ile hassas dosyalar korunur  

---

## 💰 Maliyet

### OpenAI API (GPT-3.5-turbo)
- **Input:** ~$0.0005 / 1K tokens
- **Output:** ~$0.0015 / 1K tokens
- **Ortalama mesaj:** ~$0.0002
- **1000 mesaj:** ~$0.20

### Hosting (Örnek)
- **Frontend:** Ücretsiz (Vercel, Netlify)
- **Backend:** $5-10/ay (Railway, Render, Heroku)

---

## 📊 Performans

- ⚡ Optimize edilmiş slider (throttling & debouncing)
- 🚀 Hızlı API yanıtları (2-4 saniye)
- 📱 Mobil uyumlu
- 🎨 60 FPS animasyonlar
- 💾 Hafif bundle (< 100KB)

---

## 🌐 Deployment

### 🚀 Hızlı Başlangıç
**15 dakikada deploy edin:**
```bash
# 1. Deployment kontrolü
node deploy-check.js

# 2. Backend .env oluşturun
cp backend/env-template.txt backend/.env
# OpenAI API key'inizi ekleyin

# 3. Deploy edin (seçeneklerden birini)
cd frontend && npm run deploy:vercel
```

### 📚 Detaylı Rehberler
- **Hızlı Başlangıç:** [HIZLI-BASLANGIC.md](./HIZLI-BASLANGIC.md) - 15 dakikada deploy
- **Detaylı Rehber:** [DEPLOYMENT.md](./DEPLOYMENT.md) - Tüm seçenekler ve detaylar
- **Kurulum:** [SETUP.md](./SETUP.md) - Development ortamı kurulumu

### ☁️ Önerilen Platformlar
| Platform | Tip | Maliyet | Link |
|----------|-----|---------|------|
| **Vercel** | Frontend | Ücretsiz | https://vercel.com |
| **Render** | Backend | Ücretsiz* | https://render.com |
| **Railway** | Full-stack | $5 kredi | https://railway.app |

*Ücretsiz planda backend 15 dk sonra uyur

**Hızlı Deploy:** `node deploy-check.js` → HIZLI-BASLANGIC.md

---

## 🐛 Bilinen Sorunlar

- [ ] Session storage memory'de (Redis önerilir)
- [ ] Rate limiting yok (production için ekleyin)
- [ ] Image lazy loading yok (optimize edilebilir)

---

## 🔮 Gelecek Planları

- [ ] React'e geçiş
- [ ] Admin panel
- [ ] Eser yönetim sistemi
- [ ] Newsletter entegrasyonu
- [ ] Çok dilli destek
- [ ] GPT-4 upgrade
- [ ] Voice chat özelliği

---

## 📄 Lisans

Bu proje özel bir proje olup, tüm hakları saklıdır.

---

## 👤 İletişim

**İrem Eyüpoğlu**  
📧 info@iremeyupoglu.com  
📍 Beyoğlu, İstanbul  

---

## 🙏 Teşekkürler

- https://openai.com - GPT-3.5 API
- https://expressjs.com - Backend framework
- https://fontshare.com - Tipografi

---

**Made with ❤️ by OrScale**