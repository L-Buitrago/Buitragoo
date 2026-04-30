import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  navAbout: string;
  navPrice: string;
  navProjects: string;
  navContact: string;
  heroHeading: string;
  heroSub: string;
  contactMe: string;
  aboutHeading: string;
  aboutText: string;
  servicesHeading: string;
  services: { name: string; desc: string }[];
  projectsHeading: string;
  liveProject: string;
}

const translations: Record<Language, Translations> = {
  en: {
    navAbout: 'About',
    navPrice: 'Price',
    navProjects: 'Projects',
    navContact: 'Contact',
    heroHeading: "Luis Buitrago",
    heroSub: 'a 3d creator driven by crafting striking and unforgettable projects',
    contactMe: 'Contact Me',
    aboutHeading: 'About me',
    aboutText: "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!",
    servicesHeading: 'Services',
    services: [
      { name: '3D Modeling', desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.' },
      { name: 'Rendering', desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.' },
      { name: 'Motion Design', desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.' },
      { name: 'Branding', desc: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.' },
      { name: 'Web Design', desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.' },
    ],
    projectsHeading: 'Project',
    liveProject: 'Live Project',
  },
  pt: {
    navAbout: 'Sobre',
    navPrice: 'Preço',
    navProjects: 'Projetos',
    navContact: 'Contato',
    heroHeading: "Luis Buitrago",
    heroSub: 'um criador 3d motivado por desenvolver projetos impactantes e inesquecíveis',
    contactMe: 'Fale Comigo',
    aboutHeading: 'Sobre mim',
    aboutText: "Com mais de cinco anos de experiência em design, meu foco é branding, web design e experiência do usuário. Eu realmente gosto de trabalhar com empresas que buscam se destacar e apresentar sua melhor imagem. Vamos construir algo incrível juntos!",
    servicesHeading: 'Serviços',
    services: [
      { name: 'Modelagem 3D', desc: 'Criação de objetos detalhados, personagens ou ambientes adaptados às necessidades específicas do cliente, ideal para jogos, produtos e visualizações.' },
      { name: 'Renderização', desc: 'Renders de alta qualidade e fotorrealistas que exibem designs com iluminação, texturas e materiais personalizados para dar vida aos conceitos.' },
      { name: 'Motion Design', desc: 'Animações dinâmicas e motion graphics que adicionam energia e narrativa a marcas, produtos e experiências digitais.' },
      { name: 'Branding', desc: 'Criação de identidades visuais coesas — desde logotipos até sistemas de marca completos — que comunicam uma presença clara e memorável.' },
      { name: 'Web Design', desc: 'Design de sites limpos, modernos e focados em conversão, com atenção especial ao layout, tipografia e experiência do usuário.' },
    ],
    projectsHeading: 'Projeto',
    liveProject: 'Projeto Ao Vivo',
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt'); // Default to PT based on prompt context

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
