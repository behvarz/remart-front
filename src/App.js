import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ArtistIntro from './components/ArtistIntro';
import AutoGallery from './components/AutoGallery';
import Chatbot from './components/Chatbot';
import ArtworksPage from './components/ArtworksPage';
import ArtworkDetail from './components/ArtworkDetail';
import ArtistPage from './components/ArtistPage';
import ContactPage from './components/ContactPage';
import BlogPage from './components/BlogPage';
import BlogDetail from './components/BlogDetail';
import EventsPage from './components/EventsPage';
import EventDetail from './components/EventDetail';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  useEffect(() => {
    // Set background image dynamically
    document.documentElement.style.backgroundImage = "url('/bg.jpg')";
    document.documentElement.style.backgroundSize = "cover";
    document.documentElement.style.backgroundPosition = "center center";
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundAttachment = "fixed";
    
    // Sayfa yüklendiğinde ve yenilendiğinde en üstten başla
    window.scrollTo(0, 0);
    
    // Sayfa yenilendiğinde de scroll pozisyonunu sıfırla
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
    
    // Sayfa tamamen yüklendiğinde de kontrol et
    window.addEventListener('load', () => {
      window.scrollTo(0, 0);
    });
  }, []);

  const HomePage = () => (
    <>
      <div className="desktop-hero">
        <HeroSlider />
      </div>
      <div className="mobile-hero">
        <AutoGallery />
        <div className="mobile-quote">
          <p>"Her renk, bir duygunun yankısıdır."</p>
          <span>İrem KÖSE</span>
        </div>
      </div>
      <div className="desktop-intro">
        <ArtistIntro />
      </div>
      <Chatbot />
      <div className="desktop-gallery">
        <AutoGallery />
      </div>
    </>
  );

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sanatci" element={<ArtistPage />} />
            <Route path="/eserler" element={<ArtworksPage />} />
            <Route path="/eser/:id" element={<ArtworkDetail />} />
            <Route path="/etkinlikler" element={<EventsPage />} />
            <Route path="/etkinlik/:id" element={<EventDetail />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
