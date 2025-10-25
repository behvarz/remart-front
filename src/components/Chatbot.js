import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './Chatbot.css';

// API URL configuration
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const Chatbot = ({ artworkContext = null }) => {
  const getInitialMessage = () => {
    if (artworkContext) {
      return `Merhaba! Ben İrem Köse'nin dijital temsilcisiyim. Şu anda "${artworkContext.name}" eseri hakkında konuşuyoruz. Bu eserle ilgili ne öğrenmek istersiniz?`;
    }
    return "Merhaba! Ben İrem Köse'nin dijital temsilcisiyim. Her renk, bir duygunun yankısıdır... Sizinle sanat dünyamı paylaşmaktan mutluluk duyarım. Ne öğrenmek istersiniz?";
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: getInitialMessage(),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    // Sadece chatbot container'ı içinde scroll yap, sayfa scroll yapmasın
    const chatbotMessages = document.querySelector('.chatbot-messages');
    if (chatbotMessages) {
      // Smooth scroll yerine instant scroll kullan
      chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Sayfa değiştiğinde veya context değiştiğinde hafızayı temizle
  useEffect(() => {
    if (artworkContext) {
      // Yeni eser context'i geldiğinde hafızayı temizle
      setMessages([
        {
          id: 1,
          text: `Merhaba! Ben İrem Köse'nin dijital temsilcisiyim. Şu anda "${artworkContext.name}" eseri hakkında konuşuyoruz. Bu eserle ilgili ne öğrenmek istersiniz?`,
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
      setSessionId(null); // Session ID'yi sıfırla
    }
  }, [artworkContext]);

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    // Sayfa scroll'unu engelle
    const currentScrollY = window.scrollY;
    
    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Scroll pozisyonunu koru
    setTimeout(() => {
      window.scrollTo(0, currentScrollY);
    }, 0);

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: inputMessage,
        sessionId: sessionId,
        artworkContext: artworkContext
      });

      const botMessage = {
        id: Date.now() + 1,
        text: response.data.message,
        sender: 'bot',
        timestamp: new Date()
      };

      setSessionId(response.data.sessionId);
      setMessages(prev => [...prev, botMessage]);
      
      // Bot mesajı geldiğinde de scroll pozisyonunu koru
      setTimeout(() => {
        window.scrollTo(0, currentScrollY);
      }, 0);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        text: '❌ Bağlantı hatası. Backend sunucusunun çalıştığından emin olun.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Mesajları formatla
  const formatMessage = (text) => {
    if (!text) return text;
    
    // Eser adlarını bold yap
    let formattedText = text.replace(/\b(FREYJA|IŞIK KANADI|ZAMAN VADİSİ'NİN BEKÇİSİ|KIZIL GEÇİT|YÜZEYİN ÖTESİNDE|SUSTURULMUŞ BAHAR|BYAKKO|LUNARIA'NIN YANKISI|SONSUZ BAŞLANGIÇ|AN|AURORA'NIN DANSI|ÖMÜR|SIRENA|NEFES)\b/g, (match) => {
      return `<strong>${match}</strong>`;
    });
    
    // WhatsApp numarasını özel stil yap
    formattedText = formattedText.replace(/(\+90 555 835 19 40)/g, '<span class="whatsapp-link">$1</span>');
    
    // Satır sonlarını koru
    formattedText = formattedText.replace(/\n/g, '<br>');
    
    return formattedText;
  };

  return (
    <motion.section 
      className="chatbot-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="chatbot-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>İrem ile Sohbet Edin</h2>
        <p>
          Merhaba! Ben <span className="accent-text">İrem Köse'nin dijital asistanıyım.</span><br />
          Sanat eserlerim, workshop programlarım ve yaratım sürecim hakkında merak ettiklerinizi sorabilirsiniz.
        </p>
      </motion.div>
      
      <motion.div 
        className="chatbot-container"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="chatbot-header">
          <h3>İrem Köse</h3>
          <p>Sanatçı</p>
        </div>
        
        <div className="chatbot-messages">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`message ${message.sender}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="message-avatar">
                  {message.sender === 'bot' ? '🎨' : '👤'}
                </div>
                <div className="message-content" dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              className="message bot typing-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="message-avatar">🎨</div>
              <div className="message-content">
                <span className="typing-dots">
                  <span>.</span>
                  <span>.</span>
                  <span>.</span>
                </span>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chatbot-input-area">
          <input
            type="text"
            className="chatbot-input"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Mesajınızı yazın..."
            disabled={isLoading}
          />
          <button
            className="chatbot-send"
            onClick={sendMessage}
            disabled={isLoading || !inputMessage.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Chatbot;





