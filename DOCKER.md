# 🐳 Docker Deployment Rehberi

Bu rehber, Remart projesini Docker ile nasıl çalıştıracağınızı gösterir.

---

## 📋 Gereksinimler

- Docker Engine 20.10+
- Docker Compose 2.0+
- OpenAI API Key

---

## 🚀 Hızlı Başlangıç

### 1. Environment Hazırlığı

```bash
# Backend .env dosyası oluşturun
cp backend/env-template.txt backend/.env

# .env dosyasını düzenleyin ve OpenAI API key ekleyin
nano backend/.env
```

### 2. Docker Compose ile Başlatın

```bash
# Tüm servisleri başlat (build + run)
docker-compose up -d

# Logları izleyin
docker-compose logs -f

# Servislerin durumunu kontrol edin
docker-compose ps
```

### 3. Tarayıcıda Açın

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **Health Check:** http://localhost:3001/api/health

---

## 🛠️ Komutlar

### Başlatma & Durdurma

```bash
# Başlat (detached mode)
docker-compose up -d

# Başlat (logs ile)
docker-compose up

# Durdur
docker-compose down

# Durdur + volume'leri sil
docker-compose down -v

# Yeniden başlat
docker-compose restart
```

### Build

```bash
# Yeniden build (değişiklik yaptıktan sonra)
docker-compose up -d --build

# Sadece backend'i build et
docker-compose build backend

# Sadece frontend'i build et
docker-compose build frontend

# Cache kullanmadan build
docker-compose build --no-cache
```

### Loglar

```bash
# Tüm servislerin logları
docker-compose logs -f

# Sadece backend
docker-compose logs -f backend

# Sadece frontend
docker-compose logs -f frontend

# Son 100 satır
docker-compose logs --tail=100
```

### Shell Erişimi

```bash
# Backend container'a gir
docker-compose exec backend sh

# Frontend container'a gir
docker-compose exec frontend sh
```

---

## 🔧 Yapılandırma

### Environment Variables

**Backend (.env):**
```env
OPENAI_API_KEY=sk-proj-xxxxx
NODE_ENV=production
PORT=3001
FRONTEND_URL=http://localhost:3000
```

**Frontend (docker-compose.yml):**
```yaml
args:
  - REACT_APP_API_URL=http://localhost:3001
```

### Port Değiştirme

`docker-compose.yml` dosyasında:

```yaml
services:
  backend:
    ports:
      - "8080:3001"  # 8080 → 3001
  
  frontend:
    ports:
      - "8000:80"    # 8000 → 80
```

---

## 🐳 Ayrı Ayrı Build

### Sadece Backend

```bash
cd backend

# Build
docker build -t remart-backend .

# Run
docker run -d \
  --name remart-backend \
  -p 3001:3001 \
  --env-file .env \
  remart-backend

# Logs
docker logs -f remart-backend

# Stop
docker stop remart-backend
docker rm remart-backend
```

### Sadece Frontend

```bash
cd frontend

# Build (API URL belirterek)
docker build \
  --build-arg REACT_APP_API_URL=http://localhost:3001 \
  -t remart-frontend .

# Run
docker run -d \
  --name remart-frontend \
  -p 3000:80 \
  remart-frontend

# Logs
docker logs -f remart-frontend

# Stop
docker stop remart-frontend
docker rm remart-frontend
```

---

## 🌐 Production Deployment

### Docker ile VPS'de Deploy

```bash
# VPS'e bağlanın
ssh user@your-server-ip

# Projeyi klonlayın
git clone https://github.com/your-username/remart.git
cd remart

# .env dosyası oluşturun
cp backend/env-template.txt backend/.env
nano backend/.env

# Docker Compose ile başlatın
docker-compose up -d

# Nginx reverse proxy (opsiyonel)
# Domain ile HTTPS için nginx kullanabilirsiniz
```

### Docker Hub'a Push

```bash
# Login
docker login

# Tag
docker tag remart-backend:latest yourusername/remart-backend:latest
docker tag remart-frontend:latest yourusername/remart-frontend:latest

# Push
docker push yourusername/remart-backend:latest
docker push yourusername/remart-frontend:latest

# VPS'de pull & run
docker pull yourusername/remart-backend:latest
docker pull yourusername/remart-frontend:latest
```

---

## 🔍 Troubleshooting

### Container Başlamıyor

```bash
# Logları kontrol edin
docker-compose logs backend
docker-compose logs frontend

# Health check durumu
docker-compose ps
```

### Port Zaten Kullanımda

```bash
# Portları kontrol edin
netstat -ano | findstr :3000
netstat -ano | findstr :3001

# Docker'da kullanılan portları göster
docker ps

# Port değiştirin (docker-compose.yml)
ports:
  - "3002:3001"  # 3002 kullan
```

### .env Dosyası Yüklenmiyor

```bash
# .env dosyasının varlığını kontrol edin
ls -la backend/.env

# Docker container'da environment'ı kontrol edin
docker-compose exec backend env | grep OPENAI
```

### Build Hataları

```bash
# Cache temizle
docker-compose build --no-cache

# Eski image'leri sil
docker system prune -a

# Volumes temizle
docker volume prune
```

### Frontend Backend'e Bağlanamıyor

**Sorun:** CORS hatası veya connection refused

**Çözüm 1:** API URL'i kontrol edin
```bash
# Frontend build sırasında API URL'i geç
docker-compose build --build-arg REACT_APP_API_URL=http://localhost:3001 frontend
```

**Çözüm 2:** Backend CORS ayarlarını kontrol edin
```javascript
// server.js
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
```

---

## 📊 Monitoring

### Resource Kullanımı

```bash
# Tüm container'ların resource kullanımı
docker stats

# Sadece Remart container'ları
docker stats remart-backend remart-frontend
```

### Health Checks

```bash
# Backend health
curl http://localhost:3001/api/health

# Frontend health
curl http://localhost:3000

# Docker health status
docker inspect --format='{{.State.Health.Status}}' remart-backend
```

---

## 🚀 CI/CD ile Docker

### GitHub Actions Örneği

`.github/workflows/docker.yml`:

```yaml
name: Docker Build & Push

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push Backend
        uses: docker/build-push-action@v4
        with:
          context: ./backend
          push: true
          tags: yourusername/remart-backend:latest
      
      - name: Build and push Frontend
        uses: docker/build-push-action@v4
        with:
          context: ./frontend
          push: true
          tags: yourusername/remart-frontend:latest
          build-args: |
            REACT_APP_API_URL=https://api.yourdomain.com
```

---

## 💡 Best Practices

### Security

1. **Secrets yönetimi:**
   ```bash
   # Docker secrets kullanın (Swarm mode)
   echo "sk-proj-xxxxx" | docker secret create openai_key -
   ```

2. **.env dosyasını Git'e eklemeyin:**
   ```gitignore
   .env
   .env.*
   ```

3. **Non-root user kullanın:**
   ```dockerfile
   USER node
   ```

### Performance

1. **Multi-stage builds kullanın** (Frontend Dockerfile'da zaten var)
2. **Layer caching optimize edin**
3. **.dockerignore kullanın** (zaten var)

### Production

1. **Health checks ekleyin** (zaten var)
2. **Resource limits belirleyin:**
   ```yaml
   services:
     backend:
       deploy:
         resources:
           limits:
             cpus: '0.5'
             memory: 512M
   ```

3. **Restart policy ayarlayın:**
   ```yaml
   restart: unless-stopped
   ```

---

## 📚 Daha Fazla Bilgi

- **Docker Docs:** https://docs.docker.com
- **Docker Compose:** https://docs.docker.com/compose
- **Best Practices:** https://docs.docker.com/develop/dev-best-practices

---

**🐳 Happy Dockerizing!**







