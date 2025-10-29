#!/usr/bin/env node

/**
 * Remart Deployment Hazırlık Kontrol Scripti
 * 
 * Bu script, projenizi deploy etmeden önce gerekli kontrolleri yapar.
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  if (exists) {
    log(`✅ ${description}`, colors.green);
  } else {
    log(`❌ ${description} - EKSIK!`, colors.red);
  }
  return exists;
}

function checkEnvFile(filePath, requiredVars) {
  if (!fs.existsSync(filePath)) {
    log(`❌ ${filePath} bulunamadı!`, colors.red);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let allFound = true;

  requiredVars.forEach(varName => {
    const regex = new RegExp(`^${varName}=.+`, 'm');
    if (regex.test(content)) {
      const value = content.match(regex)[0].split('=')[1];
      if (value && value !== 'your_key_here' && value !== 'your_openai_api_key_here') {
        log(`  ✅ ${varName} ayarlanmış`, colors.green);
      } else {
        log(`  ⚠️  ${varName} değeri varsayılan değer - güncellenmeli!`, colors.yellow);
        allFound = false;
      }
    } else {
      log(`  ❌ ${varName} bulunamadı!`, colors.red);
      allFound = false;
    }
  });

  return allFound;
}

function main() {
  log('\n╔══════════════════════════════════════════╗', colors.cyan);
  log('║   REMART DEPLOYMENT HAZIRLIK KONTROLÜ   ║', colors.cyan);
  log('╚══════════════════════════════════════════╝\n', colors.cyan);

  let allChecks = true;

  // Backend Kontrolleri
  log('📦 BACKEND KONTROLLERİ', colors.blue);
  log('─────────────────────────', colors.blue);
  
  allChecks &= checkFile('backend/package.json', 'Backend package.json');
  allChecks &= checkFile('backend/server.js', 'Backend server.js');
  allChecks &= checkFile('backend/artist-knowledge-comprehensive.js', 'Artist knowledge');
  
  log('\n🔐 BACKEND ENVIRONMENT', colors.blue);
  log('─────────────────────────', colors.blue);
  
  if (fs.existsSync('backend/.env')) {
    allChecks &= checkEnvFile('backend/.env', [
      'OPENAI_API_KEY',
      'PORT',
      'NODE_ENV',
      'FRONTEND_URL'
    ]);
  } else {
    log('❌ backend/.env dosyası bulunamadı!', colors.red);
    log('💡 backend/env-template.txt dosyasını kopyalayıp .env olarak kaydedin', colors.yellow);
    allChecks = false;
  }

  // Frontend Kontrolleri
  log('\n🎨 FRONTEND KONTROLLERİ', colors.blue);
  log('─────────────────────────', colors.blue);
  
  allChecks &= checkFile('frontend/package.json', 'Frontend package.json');
  allChecks &= checkFile('frontend/src/App.js', 'Frontend App.js');
  allChecks &= checkFile('frontend/src/components/Chatbot.js', 'Chatbot component');
  allChecks &= checkFile('frontend/public/index.html', 'Index HTML');

  // Node Modules Kontrolleri
  log('\n📚 DEPENDENCIES', colors.blue);
  log('─────────────────────────', colors.blue);
  
  const backendModules = fs.existsSync('backend/node_modules');
  const frontendModules = fs.existsSync('frontend/node_modules');
  
  if (backendModules) {
    log('✅ Backend dependencies yüklü', colors.green);
  } else {
    log('❌ Backend dependencies eksik - "cd backend && npm install" çalıştırın', colors.red);
    allChecks = false;
  }
  
  if (frontendModules) {
    log('✅ Frontend dependencies yüklü', colors.green);
  } else {
    log('❌ Frontend dependencies eksik - "cd frontend && npm install" çalıştırın', colors.red);
    allChecks = false;
  }

  // Git Kontrolleri
  log('\n🔧 GIT KONTROLLERİ', colors.blue);
  log('─────────────────────────', colors.blue);
  
  checkFile('.gitignore', '.gitignore dosyası');
  
  if (fs.existsSync('.gitignore')) {
    const gitignore = fs.readFileSync('.gitignore', 'utf8');
    if (gitignore.includes('.env')) {
      log('✅ .env dosyası .gitignore\'da', colors.green);
    } else {
      log('⚠️  .env dosyası .gitignore\'a eklenmeli!', colors.yellow);
    }
  }

  // Deployment Dosyaları
  log('\n🚀 DEPLOYMENT DOSYALARI', colors.blue);
  log('─────────────────────────', colors.blue);
  
  checkFile('backend/render.yaml', 'Render.com config');
  checkFile('DEPLOYMENT.md', 'Deployment dokümantasyonu');

  // Sonuç
  log('\n' + '═'.repeat(42), colors.cyan);
  
  if (allChecks) {
    log('✅ TÜM KONTROLLER BAŞARILI!', colors.green);
    log('\n🚀 Projeniz deploy edilmeye hazır!', colors.green);
    log('\n📚 Deployment adımları için DEPLOYMENT.md dosyasını okuyun.', colors.cyan);
  } else {
    log('⚠️  BAZI KONTROLLER BAŞARISIZ', colors.yellow);
    log('\n🔧 Lütfen yukarıdaki hataları düzeltin ve tekrar çalıştırın.', colors.yellow);
    log('💡 Detaylı bilgi için DEPLOYMENT.md dosyasını okuyun.', colors.cyan);
  }
  
  log('═'.repeat(42) + '\n', colors.cyan);

  // Deployment önerileri
  log('💡 DEPLOYMENT ÖNERİLERİ:', colors.blue);
  log('─────────────────────────', colors.blue);
  log('1. Backend için Render.com (ücretsiz)');
  log('2. Frontend için Vercel (ücretsiz)');
  log('3. Ya da Railway (full-stack, $5 ücretsiz kredi)');
  log('\n📖 Detaylar için: node deploy-check.js --help\n');

  process.exit(allChecks ? 0 : 1);
}

// Yardım mesajı
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
╔══════════════════════════════════════════════════════════╗
║         REMART DEPLOYMENT HAZIRLIK KONTROLÜ              ║
╚══════════════════════════════════════════════════════════╝

KULLANIM:
  node deploy-check.js

Bu script şunları kontrol eder:
  ✓ Gerekli dosyaların varlığı
  ✓ Environment variables ayarları
  ✓ Dependencies yüklemeleri
  ✓ Git konfigürasyonu
  ✓ Deployment dosyaları

DEPLOYMENT ADIMLARI:
  1. Bu scripti çalıştırın: node deploy-check.js
  2. Tüm kontroller başarılı ise DEPLOYMENT.md'yi okuyun
  3. Tercih ettiğiniz platformda deploy edin

POPÜLER DEPLOYMENT SEÇENEKLERİ:

  🎯 Seçenek 1: Vercel + Render (ÖNERİLEN - Ücretsiz)
     Backend:  Render.com
     Frontend: Vercel.com
     
  🎯 Seçenek 2: Railway (Full-stack - $5 ücretsiz)
     Backend + Frontend: Railway.app
     
  🎯 Seçenek 3: Kendi Sunucunuz (VPS)
     DigitalOcean, Linode, AWS EC2, vb.

📚 DAHA FAZLA BİLGİ:
  DEPLOYMENT.md dosyasını okuyun (detaylı adım adım rehber)

💬 DESTEK:
  GitHub Issues: [repo-url]
  Email: info@iremeyupoglu.com
`);
  process.exit(0);
}

// Ana fonksiyonu çalıştır
main();









