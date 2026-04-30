import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Navbar } from './Navbar';
import { FadeIn } from '../ui/FadeIn';

import { ContactButton } from '../ui/Buttons';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="h-screen w-full flex flex-col overflow-x-clip relative">
      <Navbar />

      <div className="flex-1 flex flex-col justify-between pt-10 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[9.5vw] sm:text-[10vw] md:text-[10.5vw] lg:text-[11vw] mt-6 sm:mt-4 md:-mt-5 text-center">
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


    </section>
  );
};
