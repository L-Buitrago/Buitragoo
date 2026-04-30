import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FadeIn } from '../ui/FadeIn';
import { LiveProjectButton } from '../ui/Buttons';

const projectsData = [
  {
    client: 'Client',
    name: 'Nextlevel Studio',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    }
  },
  {
    client: 'Personal',
    name: 'Aura Brand Identity',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    }
  },
  {
    client: 'Client',
    name: 'Solaris Digital',
    images: {
      leftTop: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      leftBottom: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
      right: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    }
  }
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

        <div className="flex flex-col md:flex-row gap-4 h-full">
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            <img 
              src={project.images.leftTop} 
              alt="Project view 1" 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img 
              src={project.images.leftBottom} 
              alt="Project view 2" 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-full md:w-[60%]">
            <img 
              src={project.images.right} 
              alt="Project main view" 
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              style={{ minHeight: 'clamp(300px, 40vw, 586px)' }}
            />
          </div>
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
