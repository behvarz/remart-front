# 🚀 Remart Deployment Rehberi

Bu rehber, Remart projesini canlıya almak için adım adım talimatlar içerir.

---

## 📋 Ön Hazırlık

### Gereksinimler
- ✅ GitHub hesabı
- ✅ OpenAI API Key
- ✅ Vercel hesabı (ücretsiz)
- ✅ Render hesabı (ücretsiz)

---

## 🎯 Seçenek 1: Vercel + Render (Önerilen - Ücretsiz)

### 📦 Adım 1: Backend Deployment (Render)

#### 1.1 Render.com'a Giriş Yapın
- https://render.com adresine gidin
- GitHub ile giriş yapın

#### 1.2 Yeni Web Service Oluşturun
1. Dashboard'dan **"New +"** → **"Web Service"** seçin
2. Repository'nizi bağlayın (GitHub'dan)
3. Aşağıdaki ayarları yapın:

```
Name: remart-backend
Region: Frankfurt (veya en yakın)
Branch: main
Root Directory: backend
Environment: Node
Build Command: npm install
Start Command: npm start
Plan: Free
```

#### 1.3 Environment Variables Ekleyin
**"Environment"** sekmesine gidin ve şu değişkenleri ekleyin:

```
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxx  (OpenAI API keyiniz)
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://your-app.vercel.app  (adım 2'den sonra güncellenecek)
```

#### 1.4 Deploy Edin
- **"Create Web Service"** butonuna tıklayın
- Deploy süreci 2-3 dakika sürer
- Backend URL'inizi kaydedin (örn: `https://remart-backend.onrender.com`)

⚠️ **ÖNEMLİ:** Ücretsiz planda backend 15 dakika hareketsizlikten sonra uyur. İlk istek 30-60 saniye sürebilir.

---

### 🎨 Adım 2: Frontend Deployment (Vercel)

#### 2.1 Frontend Kodunu Production'a Hazırlayın

Backend URL'ini güncellemek için `src/components/Chatbot.js` dosyasını açın ve API URL'i değiştirin:

```javascript
// DEV:
const API_URL = 'http://localhost:3001';

// PRODUCTION (Render backend URL'inizi yazın):
const API_URL = 'https://remart-backend.onrender.com';
```

#### 2.2 Vercel'e Deploy

**Yöntem 1: Vercel CLI (Hızlı)**

```bash
# Vercel CLI'yi yükleyin
npm install -g vercel

# Frontend klasörüne gidin
cd frontend

# Deploy edin
vercel

# Production deploy
vercel --prod
```

**Yöntem 2: Vercel Dashboard**

1. https://vercel.com adresine gidin
2. **"Add New..."** → **"Project"** seçin
3. Repository'nizi seçin
4. Aşağıdaki ayarları yapın:

```
Framework Preset: Create React App
Build Command: npm run build
Output Directory: build
Install Command: npm install
Root Directory: frontend
```

5. **"Deploy"** butonuna tıklayın
6. Deploy tamamlandığında URL'inizi alın (örn: `https://remart.vercel.app`)

#### 2.3 Backend'de Frontend URL'ini Güncelleyin
1. Render Dashboard'a geri dönün
2. **"Environment"** sekmesine gidin
3. `FRONTEND_URL` değişkenini Vercel URL'iniz ile güncelleyin:
   ```
   FRONTEND_URL=https://remart.vercel.app
   ```
4. Backend otomatik olarak yeniden deploy edilecek

---

## 🎯 Seçenek 2: Railway (Full Stack - Tek Platform)

Railway hem frontend hem backend'i tek platformda host edebilir.

### Railway Deployment

#### 1. Railway.app'e Giriş Yapın
- https://railway.app adresine gidin
- GitHub ile giriş yapın

#### 2. Backend Projesini Oluşturun
```bash
# Backend klasöründe
cd backend

# Railway CLI yükleyin (isteğe bağlı)
npm install -g @railway/cli

# Railway'e login
railway login

# Yeni proje oluşturun
railway init

# Environment variables ekleyin
railway variables set OPENAI_API_KEY=sk-xxxxx
railway variables set NODE_ENV=production
railway variables set FRONTEND_URL=https://your-frontend.railway.app

# Deploy edin
railway up
```

#### 3. Frontend Projesini Oluşturun
```bash
# Frontend klasöründe
cd frontend

# Yeni Railway projesi
railway init

# Deploy edin
railway up
```

#### 4. Custom Domain (İsteğe Bağlı)
Railway Dashboard'dan her servis için custom domain ekleyebilirsiniz.

**Maliyet:** Railway ilk $5 ücretsiz, sonra kullanıma göre.

---

## 🎯 Seçenek 3: Netlify + Heroku

### Backend (Heroku)

```bash
# Heroku CLI yükleyin
npm install -g heroku

# Heroku'ya login
heroku login

# Backend klasöründe
cd backend

# Heroku app oluşturun
heroku create remart-backend

# Environment variables
heroku config:set OPENAI_API_KEY=sk-xxxxx
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://remart.netlify.app

# Deploy edin
git init  # eğer git repo yoksa
heroku git:remote -a remart-backend
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### Frontend (Netlify)

```bash
# Netlify CLI yükleyin
npm install -g netlify-cli

# Frontend klasöründe
cd frontend

# Build oluşturun
npm run build

# Netlify'e login
netlify login

# Deploy edin
netlify deploy --prod --dir=build
```

**Maliyet:** Heroku artık ücretsiz plan sunmuyor ($7/ay başlangıç).

---

## 🎯 Seçenek 4: Kendi Sunucunuz (VPS)

DigitalOcean, Linode, AWS EC2, Azure gibi VPS servisleri kullanabilirsiniz.

### VPS Deployment (Örnek: DigitalOcean)

#### 1. Droplet Oluşturun
- Ubuntu 22.04 LTS
- En az 1GB RAM
- $6/ay plan yeterli

#### 2. Sunucuya Bağlanın
```bash
ssh root@your-server-ip
```

#### 3. Node.js ve Nginx Yükleyin
```bash
# Node.js yükle
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Nginx yükle
sudo apt update
sudo apt install nginx -y

# PM2 yükle (process manager)
sudo npm install -g pm2
```

#### 4. Projeyi Klonlayın
```bash
cd /var/www
git clone https://github.com/your-username/remart.git
cd remart
```

#### 5. Backend'i Başlatın
```bash
cd backend
npm install

# .env dosyası oluşturun
nano .env
# OPENAI_API_KEY, PORT, vb. ekleyin

# PM2 ile başlatın
pm2 start server.js --name remart-backend
pm2 startup
pm2 save
```

#### 6. Frontend'i Build Edin
```bash
cd ../frontend
npm install
npm run build
```

#### 7. Nginx Konfigürasyonu
```bash
sudo nano /etc/nginx/sites-available/remart
```

Aşağıdaki konfigürasyonu ekleyin:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/remart/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Site'ı aktif edin
sudo ln -s /etc/nginx/sites-available/remart /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 8. SSL Sertifikası (HTTPS)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔒 Güvenlik Kontrol Listesi

Deploy etmeden önce:

- [ ] `.env` dosyası `.gitignore`'da
- [ ] API key'ler environment variables'da
- [ ] CORS ayarları production URL'leri içeriyor
- [ ] Rate limiting eklendi (production için)
- [ ] HTTPS aktif
- [ ] Error logging ayarlandı
- [ ] Database yedeği var (eğer kullanılıyorsa)

---

## 📊 Deploy Sonrası Kontroller

### Backend Health Check
```bash
curl https://your-backend-url.com/api/health
```

Beklenen yanıt:
```json
{
  "status": "ok",
  "message": "Remart AI Chatbot API is running"
}
```

### Frontend Test
1. Website'i tarayıcıda açın
2. Chatbot'u test edin
3. Tüm sayfaların çalıştığını kontrol edin
4. Mobilde test edin

---

## 🐛 Yaygın Sorunlar ve Çözümleri

### CORS Hatası
**Sorun:** Frontend backend'e istek atamıyor
**Çözüm:** Backend'de `FRONTEND_URL` environment variable'ını kontrol edin

### Chatbot Yanıt Vermiyor
**Sorun:** OpenAI API hatası
**Çözüm:** 
- `OPENAI_API_KEY` doğru mu kontrol edin
- OpenAI hesabınızda bakiye var mı kontrol edin
- Backend loglarını inceleyin

### Build Hatası
**Sorun:** `npm run build` başarısız oluyor
**Çözüm:**
```bash
# Cache temizle
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Render Backend Yavaş
**Sorun:** Ücretsiz plan 15 dk sonra uyuyor
**Çözüm:** 
- Upgrade to paid plan ($7/ay)
- Veya cron job ile her 10 dakikada ping atın:
  ```bash
  # cron-job.org kullanın
  GET https://remart-backend.onrender.com/api/health
  Her 10 dakikada bir
  ```

---

## 💰 Maliyet Karşılaştırması

| Platform | Frontend | Backend | Toplam/Ay | Özellikler |
|----------|----------|---------|-----------|------------|
| **Vercel + Render** | Ücretsiz | Ücretsiz | **$0** | Auto-sleep, yavaş |
| **Railway** | $5 | $5 | **$10** | Always on, hızlı |
| **Netlify + Heroku** | Ücretsiz | $7 | **$7** | Stabil |
| **VPS (DigitalOcean)** | - | - | **$6-12** | Tam kontrol |

**OpenAI Maliyeti:** ~$0.20 per 1000 mesaj (GPT-3.5-turbo)

---

## 📝 Güncelleme Yapmak

### Vercel Otomatik Deploy
Vercel GitHub ile entegre, her `git push` otomatik deploy olur.

### Render Otomatik Deploy
Render da GitHub ile entegre, her `git push` otomatik deploy olur.

### Manuel Deploy
```bash
# Değişiklikleri commit edin
git add .
git commit -m "Update: description"
git push origin main

# Platformlar otomatik deploy edecek
```

---

## 🎉 Tamamlandı!

Artık projeniz canlıda! 

**Yardım için:**
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app

**Başarılar! 🚀**









