import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EcoNewsUpdates = () => {
  const [currentNews, setCurrentNews] = useState(0);

  const newsItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop&crop=center",
      title: "COP30 Climate Conference Set for Brazil",
      description: "The pivotal COP30 conference will take place in Belém, Brazil from November 10-21, focusing on limiting global temperature rise to 1.5°C and advancing climate finance solutions.",
      link: "https://unfccc.int/cop30",
      category: "🌍 Climate Action",
      date: "November, 2025"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&h=600&fit=crop&crop=center",
      title: "AI Discovers Revolutionary Battery Alternatives",
      description: "Scientists using AI have identified five new materials that could replace lithium-ion batteries, addressing sustainability concerns and resource limitations in energy storage.",
      link: "https://scitechdaily.com/ai-just-found-the-future-of-batteries-and-its-not-lithium/",
      category: "🔋 Battery Tech",
      date: "August, 2025"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop&crop=center",
      title: "Breakthrough in Perovskite Solar Cells",
      description: "Northwestern University researchers have achieved major advances in perovskite solar cell efficiency and durability, bringing this promising technology closer to commercial viability.",
      link: "https://www.mccormick.northwestern.edu/news/articles/2025/01/advance-in-perovskite-solar-cells-improves-efficiency-durability/",
      category: "☀️ Solar Innovation",
      date: "January, 2025"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=center",
      title: "Record $386B Renewable Energy Investment",
      description: "Global renewable energy investment reached a record $386 billion in the first half of 2025, driven by offshore wind and small-scale solar projects worldwide.",
      link: "https://about.bnef.com/insights/clean-energy/global-renewable-energy-investment-reaches-new-record-as-investors-reassess-risks/",
      category: "💰 Green Finance",
      date: "August, 2025"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&h=600&fit=crop&crop=center",
      title: "China Leads Global Wind Power Expansion",
      description: "China approved almost 40 GW of wind energy projects in Q1 2025, significantly outpacing other countries and reinforcing its leadership in renewable energy development.",
      link: "https://www.ciphernews.com/articles/on-wind-power-china-blows-past-rest-of-world/",
      category: "💨 Wind Energy",
      date: "March, 2025"
    }
  ];

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const currentItem = newsItems[currentNews];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="overflow-hidden shadow-card border-none bg-gradient-to-br from-secondary/5 to-background hover-lift relative">
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4 sm:p-6 text-center">
          <motion.h2 
            className="text-xl sm:text-2xl font-bold"
            animate={{
              textShadow: [
                "0 0 0px hsl(var(--primary-foreground) / 0)", 
                "0 0 10px hsl(var(--primary-foreground) / 0.3)", 
                "0 0 0px hsl(var(--primary-foreground) / 0)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            🌍 Eco-News & Updates
          </motion.h2>
        </div>

        {/* News Content */}
        <div className="p-4 sm:p-6">
          <motion.div
            key={currentNews}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <img 
              src={currentItem.image} 
              alt={currentItem.title}
              className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
              {currentItem.title}
            </h3>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
              {currentItem.description}{' '}
              <a 
                href={currentItem.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline font-medium transition-colors"
              >
                Read full article
              </a>
            </p>
            
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span className="font-medium">{currentItem.category}</span>
              <span className="italic">{currentItem.date}</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <Button
              onClick={prevNews}
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextNews}
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNews(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentNews 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default EcoNewsUpdates;