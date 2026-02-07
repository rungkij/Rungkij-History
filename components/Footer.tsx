import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-retro-cream border-t border-retro-gold/30 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h2 className="font-serif text-2xl font-bold text-retro-ink">RUNGKIJ</h2>
          <p className="font-sans text-sm text-retro-accent mt-1">SINCE 1972</p>
        </div>
        
        <p className="font-sans text-retro-ink/70 leading-relaxed max-w-lg mx-auto mb-8 text-sm">
          "คุณภาพชีวิตในระดับที่สูงขึ้น สามารถเกิดขึ้นได้จากรากฐานที่มั่นคงและการมองการณ์ไกลในทุกๆ เจเนอเรชัน"
        </p>

        <div className="w-12 h-px bg-retro-gold mx-auto mb-8"></div>

        <p className="font-sans text-xs text-retro-ink/40">
          &copy; {new Date().getFullYear()} Rungkit Property Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;