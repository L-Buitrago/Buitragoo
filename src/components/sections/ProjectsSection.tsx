import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/Buttons';

const projectsData = [
  {
    client: 'Client',
    name: 'Build Legacy',
    link: '#',
    image: '/Buitragoo/construction_web.png',
  },
  {
    client: 'Client',
    name: 'Sole District',
    link: '#',
    image: '/Buitragoo/sneaker_web.png',
  },
  {
    client: 'Client',
    name: 'Justice & Partners',
    link: '#',
    image: '/Buitragoo/lawyer_web.png',
  },
];

interface ProjectCardProps {
  project: typeof projectsData[0];
  index: number;
  progress: any;
  targetScale: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, progress, targetScale }) => {
  const { t } = useLanguage();
  
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${index * 28}px)` }}
        className="w-full max-w-7xl relative flex flex-col gap-6 md:gap-8 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <span className="font-black text-[clamp(2.5rem,6vw,80px)] leading-none text-[#D7E2EA]">
              0{index + 1}
            </span>
            <div className="flex flex-col">
              <span className="uppercase text-[#D7E2EA]/60 text-xs sm:text-sm tracking-widest">{project.client}</span>
              <h3 className="font-medium uppercase text-xl sm:text-2xl md:text-3xl text-[#D7E2EA]">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton label={t.liveProject} />
        </div>

        <div className="w-full overflow-hidden rounded-[24px] sm:rounded-[32px] md:rounded-[40px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full object-cover object-top"
            style={{ aspectRatio: '16/9' }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 sm:pt-24 md:pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mb-16 sm:mb-20 md:mb-24 flex justify-center">
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-[clamp(3rem,12vw,160px)] leading-none text-center">
            {t.projectsHeading}
          </h2>
        </FadeIn>
      </div>

      <div ref={containerRef} className="px-5 sm:px-8 md:px-10 relative" style={{ height: `${projectsData.length * 100}vh` }}>
        {projectsData.map((project, i) => {
          const targetScale = 1 - (projectsData.length - 1 - i) * 0.03;
          return (
            <ProjectCard 
              key={i} 
              index={i} 
              project={project} 
              progress={scrollYProgress} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};
