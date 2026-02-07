import React from 'react';
import { RECENT_PROJECTS } from '../constants';

const ModernHighlights: React.FC = () => {
  return (
    <section className="py-24 bg-retro-ink text-retro-paper">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl mb-6 text-retro-gold">
            Live The Next Level
          </h2>
          <p className="font-sans text-lg text-retro-paper/80 max-w-2xl mx-auto">
            ประสบการณ์การอยู่อาศัยที่เหนือระดับ ด้วยดีไซน์สถาปัตยกรรมระดับโลกและการก่อสร้างที่ใส่ใจในทุกรายละเอียด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {RECENT_PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-retro-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="font-sans text-xs tracking-widest text-retro-gold mb-2 uppercase">
                {project.style}
              </div>
              
              <h3 className="font-serif text-xl font-bold mb-4 min-h-[3.5rem] flex items-center">
                {project.name}
              </h3>

              <ul className="space-y-3 font-sans text-sm text-retro-paper/70">
                 <li className="flex items-start">
                   <span className="text-retro-gold mr-2 shrink-0">location:</span> 
                   <span className="break-words">{project.location}</span>
                 </li>
                 <li className="flex items-start">
                   <span className="text-retro-gold mr-2 shrink-0">units:</span> {project.units}
                 </li>
                 <li className="flex items-start">
                   <span className="text-retro-gold mr-2 shrink-0">highlight:</span> {project.highlight}
                 </li>
              </ul>

              <div className="mt-8 text-right">
                <span className="text-xs font-serif italic text-retro-paper/40">Opened: {project.opening}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernHighlights;