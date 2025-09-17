import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';

const ImageCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  const carouselItems = [
    {
      id: 1,
      title: 'Beach Clean-Up Drive 2022',
      description: 'We organised a Beach Clean-Up Drive to contribute towards a cleaner, healthier environment and raise awareness about marine ecosystems',
      type: 'image',
      image: '/lovable-uploads/3c9667b7-7a63-4a7c-85f5-e45d2d175fa7.png',
      category: 'Ocean Conservation'
    },
    {
      id: 2,
      title: 'Earth Day 2023 - Nariman Point',
      description: 'Flash Mob and Walk of Awareness at Nariman Point, Mumbai, to celebrate Earth Day and promote environmental consciousness',
      type: 'image',
      image: '/lovable-uploads/ba782914-aa75-44e8-b33c-c0e12eefd1ef.png',
      category: 'Environmental Awareness'
    },
    {
      id: 3,
      title: 'Nature Reserve Conservation',
      description: 'Our dedicated team working together at SGNP Nature Reserve for environmental conservation',
      type: 'image',
      image: '/lovable-uploads/nature-reserve-team.jpg',
      category: 'Conservation'
    },
    {
      id: 4,
      title: 'Community Cleanup Initiative',
      description: 'Students actively participating in environmental cleanup drives across Mumbai',
      type: 'image',
      image: '/lovable-uploads/719fd2ef-bbbe-4090-a132-92aa8efe7bc3.png',
      category: 'Community Action'
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      const newCurrent = api.selectedScrollSnap() + 1;
      setCurrent(newCurrent);
      
      // Control video playback based on current slide
      const currentItem = carouselItems[newCurrent - 1];
      setIsVideoPlaying(currentItem?.type === 'streamable');
    });
  }, [api]);

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Impact in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Witness the transformative power of climate action through our community-driven initiatives
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Carousel 
            setApi={setApi} 
            className="w-full max-w-6xl mx-auto"
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {carouselItems.map((item, index) => (
                <CarouselItem key={item.id}>
                  <Card className="shadow-hero overflow-hidden border-0">
                    <CardContent className="p-0">
                      <div className="relative w-full min-h-[200px] sm:min-h-[280px] md:min-h-[380px] lg:min-h-[480px] xl:min-h-[520px] overflow-hidden bg-gradient-earth">
                        {item.type === 'streamable' ? (
                          <div 
                            style={{position:'relative', width:'100%', height:'0px', paddingBottom:'56.604%'}}
                            className="bg-gradient-to-br from-primary/20 to-secondary/20"
                          >
                            {/* Only load video iframe when this slide is active */}
                            {current === index + 1 ? (
                              <iframe 
                                ref={videoRef}
                                allow="fullscreen;autoplay" 
                                allowFullScreen 
                                height="100%" 
                                src="https://streamable.com/e/cw49u8?autoplay=1&nocontrols=1" 
                                width="100%" 
                                style={{border:'none', width:'100%', height:'100%', position:'absolute', left:'0px', top:'0px', overflow:'hidden'}}
                                title={item.title}
                              />
                            ) : (
                              // Placeholder when video is not active
                              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                                <div className="text-center text-white">
                                  <Play className="w-16 h-16 mx-auto mb-4 opacity-60" />
                                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                  <p className="text-sm opacity-80">{item.description}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : item.type === 'image' && item.image ? (
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        ) : item.type === 'video' ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                            <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary">
                              <Play className="w-6 h-6 ml-1" />
                            </Button>
                          </div>
                        ) : null}
                        
                        {/* Overlay with title and description for images */}
                        {item.type === 'image' && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                            <div className="p-4 md:p-6 text-white">
                              <div className="inline-block px-2 py-1 bg-primary/80 rounded text-xs font-medium mb-2">
                                {item.category}
                              </div>
                              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                              <p className="text-sm md:text-base opacity-90 line-clamp-2">{item.description}</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Fallback gradient for items without images */}
                        {!item.image && item.type !== 'streamable' && (
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 sm:left-4 bg-card/80 hover:bg-card border-border/50 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
            <CarouselNext className="right-2 sm:right-4 bg-card/80 hover:bg-card border-border/50 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
          </Carousel>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current - 1
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-primary/50'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full max-w-md mx-auto mt-4 bg-muted rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              animate={{ width: `${(current / count) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageCarousel;