import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Share, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Environmental Awareness Campaign',
      category: 'Awareness',
      image: '/gallery/save-earth-poster.jpeg',
      views: 1250,
    },
    {
      id: 2,
      type: 'image',
      title: 'Beach Cleanup Drive 2024',
      category: 'Events',
      image: '/gallery/beach-cleanup-team.jpg',
      views: 2340,
    },
    {
      id: 3,
      type: 'image',
      title: 'Community Beach Cleanup',
      category: 'Events',
      image: '/gallery/beach-cleanup-group.jpg',
      views: 980,
    },
    {
      id: 4,
      type: 'image',
      title: 'Ocean Conservation Efforts',
      category: 'Conservation',
      image: '/gallery/cleanup-activity.jpg',
      views: 1850,
    },
    {
      id: 5,
      type: 'image',
      title: 'Marine Debris Removal',
      category: 'Conservation',
      image: '/gallery/beach-debris-cleanup.jpg',
      views: 1500,
    },
    {
      id: 6,
      type: 'image',
      title: 'Environmental Volunteers',
      category: 'Volunteers',
      image: '/gallery/environmental-volunteers.jpg',
      views: 720,
    },
    {
      id: 7,
      type: 'image',
      title: 'Community Clean-up Initiative',
      category: 'Events',
      image: '/gallery/community-cleanup.jpg',
      views: 650,
    },
    {
      id: 8,
      type: 'image',
      title: 'Nature Conservation Work',
      category: 'Conservation',
      image: '/gallery/nature-conservation.jpg',
      views: 890,
    },
    {
      id: 9,
      type: 'image',
      title: 'Environmental Award Ceremony',
      category: 'Recognition',
      image: '/gallery/award-ceremony.jpg',
      views: 1100,
    },
    {
      id: 10,
      type: 'image',
      title: 'Tree Planting Initiative',
      category: 'Nature',
      image: '/gallery/tree-planting.jpg',
      views: 1300,
    },
  ];


  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const closeLightbox = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-foreground mb-6"
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
          </div>
        </section>


        {/* Gallery Grid */}
        <section className="px-4 pb-20">
          <div className="container mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6"
            >
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden shadow-card hover-lift cursor-pointer"
                        onClick={() => handleItemClick(item)}>
                    <CardContent className="p-0 relative">
                      {/* Actual Image */}
                      <div className="aspect-square bg-muted relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Overlay on Hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="flex gap-3">
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Share className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <div className="flex justify-between items-center text-sm text-muted-foreground">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {item.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {item.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                ))}
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full bg-card rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedItem.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  Category: {selectedItem.category} • Views: {selectedItem.views.toLocaleString()}
                </p>
                <div className="flex gap-3">
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" onClick={closeLightbox}>
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default GalleryPage;