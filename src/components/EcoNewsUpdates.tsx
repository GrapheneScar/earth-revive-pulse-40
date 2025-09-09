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
      image: "https://renewableaffairs.com/wp-content/uploads/2024/09/featured-image-1-1.png",
      title: "India's Push for Green Hydrogen",
      description: "India has launched a ₹45,000 thousand crore green hydrogen initiative to promote renewable energy and reduce carbon emissions. The government aims to make India a global hub for green hydrogen production.",
      link: "https://www.reuters.com/world/india/indias-green-hydrogen-push-challenges-2023-07-10/",
      category: "🌱 Renewable Energy",
      date: "10 July, 2023"
    },
    {
      id: 2,
      image: "https://www.spc.int/sites/default/files/styles/featured_image/public/featuredimages/events/2025-01/UNFCCC_0.jpg?itok=vj_UdlU9",
      title: "2025 UN Climate Change Conference (UNFCCC COP 30)",
      description: "The 2025 UN Climate Change Conference (COP 30) will bring together world leaders to discuss climate action, including key meetings under the Kyoto Protocol and Paris Agreement.",
      link: "https://sdg.iisd.org/events/2025-un-climate-change-conference-unfccc-cop-30/",
      category: "🌍 Climate Change",
      date: "January, 2025"
    },
    {
      id: 3,
      image: "https://i.ytimg.com/vi/m3sDZYk0-TE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD1ugcsmUqjNLgo1pmsoR8QWdeg4w",
      title: "India Becomes Third-Largest Solar Market",
      description: "India has surpassed Germany to become the third-largest solar energy market in the world, with massive investments in renewable energy projects nationwide.",
      link: "https://ddnews.gov.in/en/india-becomes-worlds-third-largest-solar-power-generator-overtakes-japan-report/",
      category: "☀️ Solar Power",
      date: "9 May, 2024"
    },
    {
      id: 4,
      image: "https://westmed-initiative.ec.europa.eu/wp-content/uploads/2024/12/UN.Ocean-conference-2025-poster.jpg",
      title: "2025 United Nations Ocean Conference",
      description: "The 2025 UN Ocean Conference, co-hosted by France and Costa Rica will focus on accelerating action to conserve and sustainably use the ocean. It aims to support SDG 14 by mobilizing global efforts.",
      link: "https://www.nationalgeographic.com",
      category: "🌊 Ocean Conservation",
      date: "21 Feb, 2025"
    },
    {
      id: 5,
      image: "https://www.braunability.com/us/en/blog/mobility-solutions/electric-vehicles-ev-tax-credit-state-regulations/_jcr_content/root/responsivegrid/image.coreimg.jpeg/1674077116969/ev-future.jpeg",
      title: "India's Electric Vehicle Industry Booming",
      description: "India's electric vehicle industry is experiencing a surge in growth, with new government incentives and major automakers launching affordable EVs.",
      link: "https://ciiblog.in/indias-booming-electric-vehicle-industry/",
      category: "🚗 EV Revolution",
      date: "25 Oct, 2023"
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