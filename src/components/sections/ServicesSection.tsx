import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20 -mt-10 sm:-mt-12 md:-mt-14 text-[#0C0C0C]">
      
      <FadeIn delay={0} y={40} className="w-full text-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="font-black uppercase text-[#0C0C0C] leading-none text-[clamp(3rem,12vw,160px)]">
          {t.servicesHeading}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {t.services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30} className="w-full">
            <div className={`flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-16 py-8 sm:py-10 md:py-12 ${i !== t.services.length - 1 ? 'border-b border-[#0C0C0C]/15' : ''}`}>
              
              <div className="flex-shrink-0">
                <span className="font-black leading-none text-[clamp(3rem,10vw,140px)] text-[#0C0C0C]">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-col justify-center gap-2 sm:gap-4">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] leading-none">
                  - {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                  {service.desc}
                </p>
              </div>

            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
