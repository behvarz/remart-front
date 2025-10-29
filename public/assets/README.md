# 📁 Assets Klasörü

Bu klasöre tüm görselleri kopyalayın:

## Gerekli Dosyalar

```
assets/
├── logo.png          # Navbar logosu
├── bg.jpg           # Arka plan görseli
├── 11.png           # Slider görseli 1
├── 7.png            # Slider görseli 2
├── 13.png           # Slider görseli 3
└── favicon.ico      # Site ikonu (opsiyonel)
```

## Kopyalama Komutu

Ana klasörden:
```bash
cp ../logo.png .
cp ../bg.jpg .
cp ../11.png .
cp ../7.png .
cp ../13.png .
```

## React'te Kullanım

```javascript
// Component'lerde
<img src="/assets/logo.png" alt="Logo" />
<img src="/assets/bg.jpg" alt="Background" />
```

## Optimizasyon

- Görselleri WebP formatına çevirin (daha hızlı yükleme)
- Resize edin (mobil için küçük, desktop için büyük)
- Lazy loading ekleyin (performans için)














