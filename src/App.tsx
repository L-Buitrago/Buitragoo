import { LanguageProvider } from './context/LanguageContext';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
  return (
    <LanguageProvider>
      <main className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#D7E2EA] selection:text-[#0C0C0C] overflow-x-clip">
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        
        {/* Simple Footer / Contact anchor */}
        <footer id="contact" className="bg-[#0C0C0C] py-10 text-center text-[#D7E2EA]/50 text-sm">
          <p>© 2026 Luis Buitrago. All rights reserved.</p>
        </footer>
      </main>
    </LanguageProvider>
  );
}

export default App;
