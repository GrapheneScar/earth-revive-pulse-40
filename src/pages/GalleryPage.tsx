import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Share, Eye, Sparkles, Heart, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  const categoryColors = {
    'Awareness': 'bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30',
    'Events': 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30',
    'Conservation': 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30',
    'Volunteers': 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 border border-purple-500/30',
    'Recognition': 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/30',
    'Nature': 'bg-gradient-to-r from-teal-500/20 to-green-500/20 text-teal-400 border border-teal-500/30'
  };

  const galleryItems = [{
    id: 1,
    type: 'image',
    title: 'Environmental Awareness Campaign',
    category: 'Awareness',
    image: '/gallery/save-earth-poster.jpeg',
    views: 1250
  }, {
    id: 2,
    type: 'image',
    title: 'Beach Cleanup Drive 2024',
    category: 'Events',
    image: '/gallery/beach-cleanup-team.jpg',
    views: 2340
  }, {
    id: 3,
    type: 'image',
    title: 'Community Beach Cleanup',
    category: 'Events',
    image: '/gallery/beach-cleanup-group.jpg',
    views: 980
  }, {
    id: 4,
    type: 'image',
    title: 'Ocean Conservation Efforts',
    category: 'Conservation',
    image: '/gallery/cleanup-activity.jpg',
    views: 1850
  }, {
    id: 5,
    type: 'image',
    title: 'Marine Debris Removal',
    category: 'Conservation',
    image: '/gallery/beach-debris-cleanup.jpg',
    views: 1500
  }, {
    id: 6,
    type: 'image',
    title: 'Environmental Volunteers',
    category: 'Volunteers',
    image: '/gallery/environmental-volunteers.jpg',
    views: 720
  }, {
    id: 7,
    type: 'image',
    title: 'Community Clean-up Initiative',
    category: 'Events',
    image: '/gallery/community-cleanup.jpg',
    views: 650
  }, {
    id: 8,
    type: 'image',
    title: 'Nature Conservation Work',
    category: 'Conservation',
    image: '/gallery/nature-conservation.jpg',
    views: 890
  }, {
    id: 9,
    type: 'image',
    title: 'Environmental Award Ceremony',
    category: 'Recognition',
    image: '/gallery/award-ceremony.jpg',
    views: 1100
  }, {
    id: 10,
    type: 'image',
    title: 'Tree Planting Initiative',
    category: 'Nature',
    image: '/gallery/tree-planting.jpg',
    views: 1300
  }];
  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };
  const closeLightbox = () => {
    setSelectedItem(null);
  };
  return <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-60 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          {/* Floating Sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                y: [-20, -60, -100],
                x: [0, 10, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`
              }}
            >
              <Sparkles className="w-4 h-4 text-primary/30" />
            </motion.div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute -top-10 -right-10 opacity-20"
            >
              <Camera className="w-32 h-32 text-primary" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6"
            >
              Our Impact Gallery
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              Witness the power of collective action through our visual journey of climate initiatives, 
              community engagement, and environmental transformation.
            </motion.p>

            {/* Floating Hearts */}
            <div className="flex justify-center gap-8 mb-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <Heart className="w-6 h-6 text-primary/40" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Gallery Grid */}
        <section className="px-4 pb-20 relative">
          <div className="container mx-auto">
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  whileHover={{ 
                    y: -8, 
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  transition={{ delay: index * 0.1 }}
                  className="group perspective-1000"
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <Card className="overflow-hidden shadow-card hover-lift cursor-pointer relative transform-gpu" onClick={() => handleItemClick(item)}>
                    <CardContent className="p-0 relative">
                      {/* Animated Border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
                      
                      {/* Actual Image */}
                      <div className="aspect-square bg-muted relative overflow-hidden rounded-t-lg">
                        <motion.img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        
                        {/* Animated Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center"
                          initial={false}
                          animate={{
                            opacity: hoveredItem === item.id ? 1 : 0,
                            scale: hoveredItem === item.id ? 1 : 0.8
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="flex gap-3">
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Button size="sm" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: -360 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              <Button size="sm" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                                <Download className="w-4 h-4" />
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 360 }}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              <Button size="sm" variant="secondary" className="rounded-full bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                                <Share className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Floating Category Badge */}
                        <motion.div
                          className="absolute top-3 left-3"
                          whileHover={{ scale: 1.1 }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${categoryColors[item.category as keyof typeof categoryColors] || 'bg-primary/20 text-primary border border-primary/30'}`}>
                            {item.category}
                          </span>
                        </motion.div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4 bg-card/50 backdrop-blur-sm">
                        <motion.h3
                          className="font-semibold text-foreground mb-2 line-clamp-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.5 }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Lightbox Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  initial={{ 
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.div
              initial={{ scale: 0.8, rotateY: -15 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.8, rotateY: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-4xl w-full bg-card/90 backdrop-blur-md rounded-2xl overflow-hidden border border-primary/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                <motion.img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative">
                {/* Floating Badge */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute -top-4 left-8"
                >
                  <span className={`px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm ${categoryColors[selectedItem.category as keyof typeof categoryColors] || 'bg-primary/20 text-primary border border-primary/30'}`}>
                    {selectedItem.category}
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6 mt-4"
                >
                  {selectedItem.title}
                </motion.h2>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                      <Share className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" onClick={closeLightbox} className="border-muted-foreground/30 hover:bg-muted/10">
                      Close
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>;
};
export default GalleryPage;