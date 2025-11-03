import React from 'react';
import { motion } from 'framer-motion';
import './ArtistIntro.css';

const ArtistIntro = () => {
  return (
    <motion.section 
      className="artist-intro"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        “Benim için sanat, görüleni değil hissedileni anlatmaktır.<br />
        <br />
        Tuval, kalbimin sessizce nefes aldığı yerdir.<br />
        Orada kelimeler susar, sadece iç sesimin rengi kalır.”
      </motion.p>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        – İrem Köse
      </motion.span>
    </motion.section>
  );
};

export default ArtistIntro;





