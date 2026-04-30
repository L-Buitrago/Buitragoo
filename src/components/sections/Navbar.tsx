import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <FadeIn delay={0} y={-20} className="w-full">
      <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 w-full max-w-[1440px] mx-auto">
        <div className="flex justify-between items-center w-full max-w-[80%]">
          <a href="#about" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {t.navAbout}
          </a>
          <a href="#price" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {t.navPrice}
          </a>
          <a href="#projects" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {t.navProjects}
          </a>
          <a href="#contact" className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200">
            {t.navContact}
          </a>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`text-sm md:text-base font-medium transition-opacity ${language === 'en' ? 'text-[#D7E2EA] underline' : 'text-[#D7E2EA]/50 hover:opacity-70'}`}
          >
            EN
          </button>
          <span className="text-[#D7E2EA]/50">|</span>
          <button
            onClick={() => setLanguage('pt')}
            className={`text-sm md:text-base font-medium transition-opacity ${language === 'pt' ? 'text-[#D7E2EA] underline' : 'text-[#D7E2EA]/50 hover:opacity-70'}`}
          >
            PT
          </button>
        </div>
      </nav>
    </FadeIn>
  );
};
