import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import ClimateActionIntro from '@/components/ClimateActionIntro';
import Navigation from '@/components/Navigation';
import ProjectSummary from '@/components/ProjectSummary';
import HeroSection from '@/components/HeroSection';
import ImageCarousel from '@/components/ImageCarousel';
import AboutSection from '@/components/AboutSection';
import ImpactSection from '@/components/ImpactSection';
import GetInvolvedSection from '@/components/GetInvolvedSection';
import Footer from '@/components/Footer';
import VisitorCounter from '@/components/VisitorCounter';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introSeen = localStorage.getItem('climate-intro-seen');
    const introSkipped = localStorage.getItem('climate-intro-skipped'); // Backward compatibility
    if (introSeen === 'true' || introSkipped === 'true') {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    localStorage.setItem('climate-intro-seen', 'true');
    setShowIntro(false);
  };

  const handleSkipPermanently = () => {
    localStorage.setItem('climate-intro-seen', 'true');
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <ClimateActionIntro 
            key="intro" 
            onComplete={handleIntroComplete}
            onSkipPermanently={handleSkipPermanently}
          />
        )}
      </AnimatePresence>
      
      {!showIntro && (
        <>
          <Navigation />
          <VisitorCounter />
          <main className="overflow-x-hidden relative">
            <HeroSection />
            <ProjectSummary />
            <ImageCarousel />
            <AboutSection />
            <ImpactSection />
            <GetInvolvedSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
