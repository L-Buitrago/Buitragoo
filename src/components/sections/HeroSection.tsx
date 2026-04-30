import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Navbar } from './Navbar';
import { FadeIn } from '../ui/FadeIn';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/Buttons';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      <Navbar />

      <div className="flex-1 flex flex-col justify-between pt-10 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[12vw] md:text-[13vw] lg:text-[14vw] mt-6 sm:mt-4 md:-mt-5">
              {t.heroHeading}
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
              {t.heroSub}
            </p>
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton label={t.contactMe} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.6} y={30} className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <Magnet padding={150} strength={3} className="pointer-events-auto">
          <img 
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
            alt="Luis Buitrago"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
