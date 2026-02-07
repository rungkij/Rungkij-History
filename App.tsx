import React from 'react';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import ModernHighlights from './components/ModernHighlights';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-retro-gold selection:text-white">
      <Hero />
      
      {/* Introduction Quote Section */}
      <section className="py-20 px-6 bg-white border-b border-retro-gold/20">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-4xl leading-snug italic text-retro-brown">
            "ความสำเร็จมิได้เป็นเพียงเรื่องของโชคชะตา แต่เป็นผลลัพธ์ของวิสัยทัศน์ที่ส่งต่อผ่านดีเอ็นเอของตระกูลกิตติอุดม"
          </blockquote>
        </div>
      </section>

      <Timeline />
      
      <ModernHighlights />
      
      <Footer />
    </div>
  );
};

export default App;