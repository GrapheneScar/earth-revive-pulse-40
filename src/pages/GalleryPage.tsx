import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Play, Download, Share, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const galleryItems = [
    { id: 1, type: 'image', title: 'Tree Planting Drive - Phase 1', category: 'Projects', views: 1234 },
    { id: 2, type: 'video', title: 'Climate Action Documentary', category: 'Videos', views: 2567 },
    { id: 3, type: 'image', title: 'Solar Panel Installation', category: 'Renewable Energy', views: 892 },
    { id: 4, type: 'image', title: 'Community Clean-up Day', category: 'Community', views: 1456 },
    { id: 5, type: 'video', title: 'Ocean Conservation Efforts', category: 'Videos', views: 3421 },
    { id: 6, type: 'image', title: 'Vertical Garden Project', category: 'Projects', views: 987 },
    { id: 7, type: 'image', title: 'Waste Recycling Workshop', category: 'Education', views: 654 },
    { id: 8, type: 'video', title: 'Youth Climate Summit 2024', category: 'Videos', views: 4567 },
    { id: 9, type: 'image', title: 'Green Building Initiative', category: 'Projects', views: 1234 },
    { id: 10, type: 'image', title: 'Biodiversity Conservation', category: 'Environment', views: 2890 },
    { id: 11, type: 'video', title: 'Sustainable Living Guide', category: 'Videos', views: 1876 },
    { id: 12, type: 'image', title: 'Air Quality Monitoring', category: 'Research', views: 743 },
  ];

  const filters = [
    { key: 'all', label: 'All Media' },
    { key: 'image', label: 'Images' },
    { key: 'video', label: 'Videos' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

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

        {/* Filter Section */}
        <section className="px-4 mb-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {filters.map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeFilter === filter.key ? 'default' : 'outline'}
                  onClick={() => setActiveFilter(filter.key)}
                  className="transition-smooth hover-lift"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4 pb-20">
          <div className="container mx-auto">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredItems.map((item, index) => (
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
                      {/* Placeholder Image/Video */}
                      <div className="aspect-square bg-gradient-earth relative overflow-hidden">
                        {item.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                            <Play className="w-12 h-12 text-primary" />
                          </div>
                        )}
                        
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
              <div className="aspect-video bg-gradient-nature relative">
                {selectedItem.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-primary" />
                  </div>
                )}
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