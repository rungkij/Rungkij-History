import React from 'react';
import { INTRO_CONTENT } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-retro-cream text-retro-ink border-b-8 border-double border-retro-gold/30">
      <div className="max-w-4xl w-full text-center space-y-8 z-10">
        
        {/* Decorative Element */}
        <div className="flex justify-center mb-6">
          <svg className="w-12 h-12 text-retro-gold opacity-80" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/>
          </svg>
        </div>

        <h2 className="font-serif text-xl md:text-2xl tracking-[0.3em] uppercase text-retro-brown mb-2">
          SINCE 1972
        </h2>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-retro-ink mb-6">
          {INTRO_CONTENT.title}
        </h1>
        
        <div className="w-24 h-1 bg-retro-gold mx-auto mb-8"></div>

        <p className="font-serif text-2xl md:text-3xl text-retro-accent italic mb-8">
          "{INTRO_CONTENT.subtitle}"
        </p>

        <p className="font-sans text-lg md:text-xl leading-relaxed text-retro-ink/80 max-w-2xl mx-auto text-balance">
          {INTRO_CONTENT.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 border-t border-retro-gold/20 pt-10">
          {INTRO_CONTENT.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="font-serif text-4xl md:text-5xl font-bold text-retro-brown">{stat.value}</span>
              <span className="font-serif text-sm tracking-widest uppercase mt-2 text-retro-ink/60">{stat.label} ({stat.unit})</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 animate-bounce">
        <svg className="w-6 h-6 text-retro-brown" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;