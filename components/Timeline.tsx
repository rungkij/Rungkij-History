import React from 'react';
import { ERAS } from '../constants';
import { Era, TimelineEvent } from '../types';

const EventCard: React.FC<{ event: TimelineEvent; isEven: boolean }> = ({ event, isEven }) => (
  <div className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
    
    {/* Center Line Dot */}
    <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-retro-paper border-4 border-retro-gold rounded-full z-10 transform -translate-x-1/2 flex items-center justify-center shadow-md">
      <div className="w-2 h-2 bg-retro-brown rounded-full"></div>
    </div>

    {/* Content Box - Right on mobile, alternating on desktop */}
    <div className={`w-full pl-12 md:w-5/12 ${isEven ? 'md:pl-0 md:pr-12' : 'md:pl-12'}`}>
      <div className={`p-6 bg-white border border-retro-gold/20 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm relative ${event.highlight ? 'border-l-4 border-l-retro-gold bg-retro-gold/5' : ''}`}>
        
        <span className="font-serif text-4xl text-retro-gold/20 absolute top-2 right-4 pointer-events-none">
          {event.year}
        </span>
        
        <h4 className="font-serif text-xl font-bold text-retro-brown mb-2 mt-1 relative z-10">
          {event.title}
        </h4>
        
        <div className="font-serif text-sm text-retro-accent mb-3 uppercase tracking-wider font-semibold">
           {event.year}
        </div>
        
        <p className="font-sans text-retro-ink/80 leading-relaxed text-sm">
          {event.description}
        </p>
      </div>
    </div>
    
    {/* Empty Space for Desktop Alignment */}
    <div className="hidden md:block md:w-5/12"></div>
  </div>
);

const EraSection: React.FC<{ era: Era; index: number }> = ({ era, index }) => (
  <div className="mb-24 relative">
    {/* Era Header */}
    <div className="sticky top-0 z-20 bg-retro-cream/95 backdrop-blur-sm py-8 border-b border-retro-gold/20 mb-12 shadow-sm">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="font-serif text-3xl md:text-4xl text-retro-ink mb-4">
          {era.title}
        </h3>
        <p className="font-sans text-retro-ink/60 max-w-xl mx-auto">
          {era.description}
        </p>
      </div>
    </div>

    {/* Events */}
    <div className="relative max-w-6xl mx-auto px-4">
       {/* Vertical Line */}
       <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-retro-gold/30 transform -translate-x-1/2 z-0"></div>
       
       <div className="relative z-10">
         {era.events.map((event, eventIdx) => (
           <EventCard key={eventIdx} event={event} isEven={eventIdx % 2 !== 0} />
         ))}
       </div>
    </div>
  </div>
);

const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-retro-cream overflow-hidden">
       {ERAS.map((era, idx) => (
         <EraSection key={era.id} era={era} index={idx} />
       ))}
    </section>
  );
};

export default Timeline;