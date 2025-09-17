import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, Leaf, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax values
  const y1 = useTransform(scrollY, [0, 1000], [0, -50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categoryColors = {
    'Awareness': 'from-orange-500 via-red-500 to-pink-500',
    'Events': 'from-blue-500 via-cyan-500 to-teal-500',
    'Conservation': 'from-green-500 via-emerald-500 to-teal-500',
    'Volunteers': 'from-purple-500 via-pink-500 to-rose-500',
    'Recognition': 'from-yellow-500 via-amber-500 to-orange-500',
    'Nature': 'from-teal-500 via-green-500 to-emerald-500'
  };

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Environmental Awareness Campaign',
      category: 'Awareness',
      image: '/gallery/save-earth-poster.jpeg',
      size: 'tall'
    },
    {
      id: 2,
      type: 'image',
      title: 'Beach Cleanup Drive 2024',
      category: 'Events',
      image: '/gallery/beach-cleanup-team.jpg',
      size: 'wide'
    },
    {
      id: 3,
      type: 'image',
      title: 'Community Beach Cleanup',
      category: 'Events',
      image: '/gallery/beach-cleanup-group.jpg',
      size: 'square'
    },
    {
      id: 4,
      type: 'image',
      title: 'Ocean Conservation Efforts',
      category: 'Conservation',
      image: '/gallery/cleanup-activity.jpg',
      size: 'tall'
    },
    {
      id: 5,
      type: 'image',
      title: 'Marine Debris Removal',
      category: 'Conservation',
      image: '/gallery/beach-debris-cleanup.jpg',
      size: 'square'
    },
    {
      id: 6,
      type: 'image',
      title: 'Environmental Volunteers',
      category: 'Volunteers',
      image: '/gallery/environmental-volunteers.jpg',
      size: 'wide'
    },
    {
      id: 7,
      type: 'image',
      title: 'Community Clean-up Initiative',
      category: 'Events',
      image: '/gallery/community-cleanup.jpg',
      size: 'square'
    },
    {
      id: 8,
      type: 'image',
      title: 'Nature Conservation Work',
      category: 'Conservation',
      image: '/gallery/nature-conservation.jpg',
      size: 'tall'
    },
    {
      id: 9,
      type: 'image',
      title: 'Environmental Award Ceremony',
      category: 'Recognition',
      image: '/gallery/award-ceremony.jpg',
      size: 'wide'
    },
    {
      id: 10,
      type: 'image',
      title: 'Tree Planting Initiative',
      category: 'Nature',
      image: '/gallery/tree-planting.jpg',
      size: 'square'
    },
    {
      id: 11,
      type: 'image',
      title: 'Beach Cleanup Volunteers',
      category: 'Volunteers',
      image: '/gallery/beach-cleanup-volunteers.jpg',
      size: 'wide'
    },
    {
      id: 12,
      type: 'image',
      title: 'Individual Cleanup Effort',
      category: 'Conservation',
      image: '/gallery/individual-cleanup-effort.jpg',
      size: 'tall'
    },
    {
      id: 13,
      type: 'image',
      title: 'Forest Conservation Team',
      category: 'Conservation',
      image: '/gallery/forest-conservation-team.jpg',
      size: 'square'
    },
    {
      id: 14,
      type: 'image',
      title: 'Community Forest Cleanup',
      category: 'Events',
      image: '/gallery/community-forest-cleanup.jpg',
      size: 'wide'
    },
    {
      id: 15,
      type: 'image',
      title: 'Environmental Action Team',
      category: 'Volunteers',
      image: '/gallery/environmental-action-team.jpg',
      size: 'square'
    },
    {
      id: 16,
      type: 'image',
      title: 'Family Beach Cleanup',
      category: 'Events',
      image: '/gallery/family-beach-cleanup.jpg',
      size: 'tall'
    },
    {
      id: 17,
      type: 'image',
      title: 'Coastal Debris Removal',
      category: 'Conservation',
      image: '/gallery/coastal-debris-removal.jpg',
      size: 'square'
    },
    {
      id: 18,
      type: 'image',
      title: 'Team Coastal Cleanup',
      category: 'Events',
      image: '/gallery/team-coastal-cleanup.jpg',
      size: 'wide'
    },
    {
      id: 19,
      type: 'image',
      title: 'Marine Conservation Effort',
      category: 'Conservation',
      image: '/gallery/marine-conservation-effort.jpg',
      size: 'square'
    },
    {
      id: 20,
      type: 'image',
      title: 'Individual Forest Cleanup',
      category: 'Conservation',
      image: '/gallery/individual-forest-cleanup.jpg',
      size: 'tall'
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'tall': return 'md:row-span-2';
      case 'wide': return 'md:col-span-2';
      default: return '';
    }
  };


  return (
    <>
      <Navigation />
      

      <main className="min-h-screen bg-background pt-20 relative overflow-hidden" ref={containerRef}>
        {/* Subtle Background */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Clean Gradient */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(135deg, 
                hsl(var(--primary) / 0.1) 0%, 
                hsl(var(--accent) / 0.1) 50%, 
                hsl(var(--background)) 100%)`
            }}
          />
        </div>

        {/* Hero Section with 3D Elements */}
        <section className="relative py-32 px-4">
          <div className="container mx-auto text-center relative">
            {/* 3D Floating Icons */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{ y: y1 }}
            >
              {[Globe, Leaf, Star, Heart].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${10 + (i % 2) * 60}%`
                  }}
                  animate={{
                    rotateY: [0, 360],
                    rotateX: [0, 180, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Icon className="w-16 h-16 text-primary/20" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateX: -45 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <motion.h1 
                className="text-5xl md:text-8xl font-black mb-8 relative"
                style={{ 
                  background: `linear-gradient(45deg, 
                    hsl(var(--primary)), 
                    hsl(var(--accent)), 
                    hsl(var(--primary))`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  backgroundSize: '200% 200%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Impact Gallery
                
                {/* Glowing outline */}
                <motion.span
                  className="absolute inset-0 text-5xl md:text-8xl font-black text-primary/20"
                  style={{
                    textShadow: `
                      0 0 10px hsl(var(--primary)),
                      0 0 20px hsl(var(--primary)),
                      0 0 40px hsl(var(--primary))
                    `
                  }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Impact Gallery
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-16 font-light"
              >
                Experience our environmental journey through stunning visuals
              </motion.p>

              {/* Interactive Stats */}
              <motion.div
                className="flex justify-center gap-12 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {['10+ Projects', '1000+ Hours', '50+ Volunteers'].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    whileHover={{ scale: 1.2, rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {stat.split(' ')[0]}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.split(' ')[1]}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Elegant Gallery Grid */}
        <section className="px-4 pb-32 relative">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500">
                    <CardContent className="p-0 relative">
                      {/* Full Size Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Subtle Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />

                        {/* Category Badge */}
                        <div 
                          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                          style={{
                            background: `linear-gradient(135deg, ${categoryColors[item.category as keyof typeof categoryColors]})`
                          }}
                        >
                          {item.category}
                        </div>

                        {/* Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <h3 className="text-white font-semibold text-lg leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>
      
      <Footer />
    </>
  );
};

export default GalleryPage;