import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Play, Download, Share, Eye, Sparkles, Heart, Camera, Zap, Star, Palette, Globe, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax values
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  // Mouse tracking for magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

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
    }
  ];

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'tall': return 'md:row-span-2';
      case 'wide': return 'md:col-span-2';
      default: return '';
    }
  };

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Navigation />
      
      {/* Magnetic Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: hoveredItem ? 2 : 1,
          opacity: hoveredItem ? 0.8 : 0.3
        }}
      />

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

        {/* Masonry Gallery Grid */}
        <section className="px-4 pb-32 relative">
          <div className="container mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`group relative ${getGridClasses(item.size)}`}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    rotateX: -20,
                    z: -100 
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateX: 0,
                    z: 0
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 50,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  <Card 
                    className="h-full overflow-hidden cursor-pointer relative group"
                    onClick={() => handleItemClick(item)}
                  >
                    {/* Animated Gradient Border */}
                    <motion.div
                      className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
                      style={{
                        background: `linear-gradient(45deg, ${categoryColors[item.category as keyof typeof categoryColors]})`
                      }}
                      animate={{
                        rotate: hoveredItem === item.id ? 360 : 0
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <CardContent className="p-0 h-full relative">
                      {/* Main Image */}
                      <div className="h-full relative overflow-hidden rounded-lg">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: 5
                          }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        
                        {/* Holographic Overlay */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background: `linear-gradient(
                              45deg,
                              transparent 30%,
                              rgba(255,255,255,0.3) 50%,
                              transparent 70%
                            )`,
                            backgroundSize: '200% 200%'
                          }}
                          animate={{
                            backgroundPosition: hoveredItem === item.id ? 
                              ['0% 0%', '100% 100%'] : ['0% 0%']
                          }}
                          transition={{ 
                            duration: 1.5, 
                            ease: "easeInOut"
                          }}
                        />

                        {/* Floating Category Badge */}
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                          whileHover={{ 
                            scale: 1.2,
                            rotate: [0, -10, 10, 0]
                          }}
                        >
                          <div 
                            className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/30"
                            style={{
                              background: `linear-gradient(135deg, ${categoryColors[item.category as keyof typeof categoryColors]})`
                            }}
                          >
                            {item.category}
                          </div>
                        </motion.div>

                        {/* Interactive Action Buttons */}
                        <AnimatePresence>
                          {hoveredItem === item.id && (
                            <motion.div
                              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                            >
                              <div className="flex gap-4">
                                {[Eye, Download, Share].map((Icon, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ 
                                      scale: 1, 
                                      rotate: 0,
                                      y: [0, -5, 0]
                                    }}
                                    transition={{ 
                                      delay: i * 0.1,
                                      y: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                      }
                                    }}
                                    whileHover={{ 
                                      scale: 1.3,
                                      rotate: 360
                                    }}
                                  >
                                    <Button 
                                      size="sm" 
                                      className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30"
                                    >
                                      <Icon className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Title Overlay */}
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                          initial={{ y: 100, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.7 }}
                        >
                          <h3 className="text-white font-semibold text-sm md:text-base line-clamp-2">
                            {item.title}
                          </h3>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Epic Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >

              <motion.div
                initial={{ 
                  scale: 0.5, 
                  rotateY: -90,
                  opacity: 0
                }}
                animate={{ 
                  scale: 1, 
                  rotateY: 0,
                  opacity: 1
                }}
                exit={{ 
                  scale: 0.5, 
                  rotateY: 90,
                  opacity: 0
                }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300 
                }}
                className="max-w-6xl w-full bg-card/90 backdrop-blur-2xl rounded-3xl overflow-hidden border border-primary/20 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                  boxShadow: `
                    0 0 60px hsl(var(--primary) / 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Image Container */}
                <div className="w-full h-auto bg-muted relative overflow-hidden">
                  <motion.img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto object-cover max-h-[90vh]"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  {/* Epic Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[selectedItem.category as keyof typeof categoryColors]})`
                    }}
                    animate={{
                      opacity: [0.1, 0.3, 0.1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-8 relative">
                  {/* Category Badge */}
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute -top-6 left-8"
                  >
                    <div 
                      className="px-6 py-3 rounded-full text-white font-bold backdrop-blur-md border border-white/30"
                      style={{
                        background: `linear-gradient(135deg, ${categoryColors[selectedItem.category as keyof typeof categoryColors]})`
                      }}
                    >
                      {selectedItem.category}
                    </div>
                  </motion.div>

                  <motion.h2
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-black mb-8 mt-4"
                    style={{
                      background: `linear-gradient(135deg, ${categoryColors[selectedItem.category as keyof typeof categoryColors]})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent'
                    }}
                  >
                    {selectedItem.title}
                  </motion.h2>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      <Footer />
    </>
  );
};

export default GalleryPage;