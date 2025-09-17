import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TreePine, Sun, Droplets, Recycle, GraduationCap, Users, Waves, Calendar, Clock, MapPin, ExternalLink, Leaf, ChefHat, Palette, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
const InitiativesPage = () => {
  const ref = useRef(null);
  const upcomingRef = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const isUpcomingInView = useInView(upcomingRef, {
    once: true,
    margin: "-100px"
  });

  // Countdown timer logic
  const [timeToEvents, setTimeToEvents] = useState<{
    [key: string]: {
      days: number;
      hours: number;
      minutes: number;
    };
  }>({});
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const beachCleanup = new Date('2025-09-07T16:00:00').getTime();
      const forestCleanup = new Date('2025-09-13T10:00:00').getTime();
      const timeDiff1 = beachCleanup - now;
      const timeDiff2 = forestCleanup - now;
      setTimeToEvents({
        beach: {
          days: Math.max(0, Math.floor(timeDiff1 / (1000 * 60 * 60 * 24))),
          hours: Math.max(0, Math.floor(timeDiff1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
          minutes: Math.max(0, Math.floor(timeDiff1 % (1000 * 60 * 60) / (1000 * 60)))
        },
        forest: {
          days: Math.max(0, Math.floor(timeDiff2 / (1000 * 60 * 60 * 24))),
          hours: Math.max(0, Math.floor(timeDiff2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))),
          minutes: Math.max(0, Math.floor(timeDiff2 % (1000 * 60 * 60) / (1000 * 60)))
        }
      });
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);
  // Helper function to check if event is past
  const isEventPast = (dateString: string) => {
    const eventDate = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1') + ', 2025');
    return eventDate < new Date();
  };
  const upcomingEvents = [{
    id: 'beach',
    icon: Waves,
    title: "Post-Visarjan Beach Clean-Up",
    description: "Join Change Is Us (CIU), our school's Climate Action Project (CAP), and EcoSpire for a meaningful beach cleanup at Chowpatty Beach after Ganesh Visarjan festivities.",
    date: "7th September, 2025",
    time: "4:00 PM – 6:00 PM",
    location: "Chowpatty Beach, Girgaon",
    meetingPoint: "Entrance opposite Café Ideal, Chowpatty",
    dressCode: "JBCN PE T-shirt and comfortable pants",
    registrationLink: "https://forms.gle/UamJPc9nF6K6ozcV6",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    organizer: "Climate Action Project (CAP) & EcoSpire",
    impact: "Protecting marine life and coastal ecosystems",
    transport: "Pick up/drop arranged by parents (school transport not available)"
  }];
  const initiatives = [{
    icon: TreePine,
    title: "Global Reforestation Drive",
    description: "Planting native trees to restore degraded ecosystems and combat deforestation worldwide.",
    impact: "1.2M trees planted across 45 countries",
    progress: 75,
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
    features: ["Native species restoration", "Community-led planting programs", "Long-term forest monitoring", "Carbon sequestration tracking"]
  }, {
    icon: Sun,
    title: "Solar Energy for All",
    description: "Bringing clean, renewable solar power to underserved communities globally.",
    impact: "150K households powered with clean energy",
    progress: 60,
    color: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-600",
    features: ["Community solar installations", "Energy education programs", "Maintenance training", "Grid connectivity solutions"]
  }, {
    icon: Droplets,
    title: "Water Conservation Initiative",
    description: "Protecting water resources through conservation technology and sustainable practices.",
    impact: "2.5M liters of water saved annually",
    progress: 85,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-600",
    features: ["Rainwater harvesting systems", "Water quality monitoring", "Efficient irrigation techniques", "Community water stewardship"]
  }, {
    icon: Recycle,
    title: "Zero Waste Communities",
    description: "Transforming waste management through recycling, composting, and circular economy principles.",
    impact: "500 tons of waste diverted from landfills",
    progress: 45,
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
    features: ["Community recycling centers", "Composting programs", "Plastic reduction campaigns", "Circular economy workshops"]
  }, {
    icon: GraduationCap,
    title: "Climate Education Program",
    description: "Empowering the next generation with environmental knowledge and action skills.",
    impact: "25K students educated across 200 schools",
    progress: 90,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-600",
    features: ["Interactive climate curriculum", "Teacher training workshops", "School sustainability projects", "Youth leadership development"]
  }, {
    icon: Users,
    title: "Community Action Network",
    description: "Building local climate action groups and empowering grassroots environmental initiatives.",
    impact: "800 active community groups worldwide",
    progress: 70,
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
    features: ["Local action group formation", "Leadership training programs", "Resource sharing platforms", "Regional coordination support"]
  }];
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-balance leading-tight">
              Our{' '}
              <span className="bg-gradient-earth bg-clip-text text-transparent">
                Initiatives
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 text-balance max-w-3xl mx-auto">
              Discover our comprehensive climate action programs making real impact 
              across communities worldwide.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
              <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                1 Upcoming Event
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                9 Past Initiatives
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                75+ Countries Active
              </Badge>
              <Badge variant="secondary" className="text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2">
                500K+ Lives Impacted
              </Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      

      {/* Past Initiatives Section */}
      <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5" ref={ref}>
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 30
        }} transition={{
          duration: 0.8
        }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-earth bg-clip-text text-transparent">
                Our Past Initiatives
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our completed climate action initiatives that have made a lasting impact on our community and environment.
            </p>
          </motion.div>

          <div className="space-y-8">
            {[{
            id: 'forest-cleanup-drive-2025',
            icon: TreePine,
            title: "Forest Cleanup Drive",
            year: "2025",
            description: "Community initiative to restore and protect local green spaces at BNHS Conservation Education Centre. Help reduce litter and plastic waste while setting an inspiring example. Thank you to all participants who made this initiative a success.",
            color: "from-primary/20 to-primary/5",
            iconColor: "text-primary"
          }, {
            id: 'post-visarjan-beach-cleanup-2025',
            icon: Waves,
            title: "Post-Visarjan Beach Cleanup 2025",
            year: "2025",
            description: "Our students from JBCN International School participated in a meaningful post-Visarjan beach cleanup initiative at Chowpatty Beach, Mumbai. Working alongside community partners, our team helped restore the shoreline after the Ganesh festival celebrations, demonstrating our commitment to marine conservation and environmental stewardship.",
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-600"
          }, {
            id: 'green-initiative',
            icon: Leaf,
            title: "Green Initiative",
            year: "2024",
            description: "As part of our Green Initiative, our young learners took part in a hands-on gardening activity that connected them directly with nature. Equipped with small shovels, they carefully filled pots with soil and prepared them for planting. The activity wasn't just about gardening—it was about instilling a sense of responsibility and love for the environment from an early age.",
            color: "from-secondary/20 to-secondary/5",
            iconColor: "text-secondary"
          }, {
            id: 'beach-cleanup-2023',
            icon: Waves,
            title: "Beach Clean-Up",
            year: "2023",
            description: "In 2023, we once again came together for a Beach Clean-Up drive, determined to build on the momentum of our earlier efforts. This time, the participation was even bigger—students, teachers, and parents joined hands to restore the shoreline. With gloves on and trash bags in hand, we picked up everything from plastic bottles to tiny bits of microplastic scattered across the sand.",
            color: "from-primary/20 to-primary/5",
            iconColor: "text-primary"
          }, {
            id: 'waste-management',
            icon: Recycle,
            title: "Waste Management",
            year: "2023",
            description: "As part of our climate action journey, we focused on the crucial issue of waste management. Students researched and presented ideas on reducing, reusing, and recycling waste within our school and at home. We introduced simple yet effective practices like segregating biodegradable and non-biodegradable waste, composting kitchen scraps, and setting up collection drives for paper and e-waste.",
            color: "from-primary/20 to-primary/5",
            iconColor: "text-primary"
          }, {
            id: 'tree-plantation',
            icon: TreePine,
            title: "Tree Plantation",
            year: "2023",
            description: "With the belief that every tree planted is a gift to the future, we carried out a tree plantation drive in 2023. Armed with saplings, shovels, and watering cans, students and teachers planted a variety of native trees around the school campus and nearby areas. The activity gave us more than just the joy of getting our hands muddy—it helped us understand the long-term role trees play in combating climate change.",
            color: "from-secondary/20 to-secondary/5",
            iconColor: "text-secondary"
          }, {
            id: 'food-recipe',
            icon: ChefHat,
            title: "Food Recipe (Primary Section)",
            year: "2024",
            description: "Our youngest changemakers—the primary section—showcased their creativity through the 'Healthy & Sustainable Food Recipe' initiative. They prepared simple, nutritious dishes using local and seasonal ingredients, all while keeping the focus on minimizing food waste. What stood out was their enthusiasm—they proudly explained how their recipes reduced packaging waste or avoided ingredients that harm the environment.",
            color: "from-yellow-500/20 to-yellow-500/5",
            iconColor: "text-yellow-600"
          }, {
            id: 'inspirus',
            icon: Palette,
            title: "InspirUs (Beach Cleanup and Art Installation)",
            year: "2024",
            description: "At InspirUs, our annual interschool cultural festival, we combined creativity and climate action through a unique initiative. Alongside a large-scale beach cleanup with enthusiastic participation from visiting schools, we curated an art installation made entirely out of waste collected from the shore. Plastic bottles turned into sculptures, wrappers became patterns, and discarded items were transformed into powerful visual messages.",
            color: "from-purple-500/20 to-purple-500/5",
            iconColor: "text-purple-600"
          }, {
            id: 'beach-cleanup-2022',
            icon: Waves,
            title: "Beach Clean Up",
            year: "2022",
            description: "We organised a Beach Clean-Up Drive to contribute towards a cleaner, healthier environment and raise awareness about the impact of waste on marine ecosystems. This initiative marked our commitment to protecting coastal environments and inspired many more cleanup drives in the following years.",
            color: "from-blue-500/20 to-blue-500/5",
            iconColor: "text-blue-600"
          }, {
            id: 'earth-day',
            icon: Globe,
            title: "Earth Day - Nariman Point Dance and Posters",
            year: "2023",
            description: "We organised a Flash Mob and Walk of Awareness at Nariman Point, Mumbai, to celebrate Earth Day and promote environmental consciousness. The event featured vibrant posters created by students and an energetic dance performance that drew crowds and spread awareness about climate action in the heart of the city.",
            color: "from-accent/20 to-accent/5",
            iconColor: "text-accent"
          }].map((initiative, index) => {
            const isEvenIndex = index % 2 === 0;
            return <motion.div key={initiative.id} initial={{
              opacity: 0,
              y: 30
            }} animate={isInView ? {
              opacity: 1,
              y: 0
            } : {
              opacity: 0,
              y: 30
            }} transition={{
              duration: 0.6,
              delay: index * 0.1
            }}>
                <Card className={`shadow-hero border-2 border-primary/20 bg-gradient-to-br ${initiative.color} hover:shadow-glow transition-all duration-500 group overflow-hidden`}>
                  <div className={`flex flex-col ${isEvenIndex ? 'lg:flex-row' : 'lg:flex-row-reverse'} h-full`}>
                    {/* Initiative Image */}
                    <div className="w-full lg:w-1/2 min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] relative overflow-hidden">
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-eco text-background font-semibold">
                          COMPLETED
                        </Badge>
                      </div>
                      {initiative.id === 'forest-cleanup-drive-2025' ? <img src="/gallery/forest-cleanup-drive.jpg" alt="Forest Cleanup Drive 2025 - Students participating in forest restoration and cleanup activities at BNHS Conservation Education Centre" className="w-full h-full object-cover" /> : initiative.id === 'post-visarjan-beach-cleanup-2025' ? <img src="/lovable-uploads/ac5a0ffe-a03a-488c-ad6e-ee9e6ff71666.png" alt="Post-Visarjan Beach Cleanup 2025 - JBCN International School students holding banner during beach cleanup at Chowpatty Beach" className="w-full h-full object-cover" /> : initiative.id === 'green-initiative' ? <img src="/lovable-uploads/d7dc9d72-6f8f-42e6-a5eb-3ab3c6198f71.png" alt="Green Initiative - Students learning gardening and environmental responsibility in an outdoor classroom setting" className="w-full h-full object-cover" /> : initiative.id === 'beach-cleanup-2023' ? <img src="/lovable-uploads/6e5750b1-b79d-41a4-939a-303b742736fd.png" alt="Beach Clean-Up 2023 - Students and volunteers cleaning the shoreline with Mumbai skyline in background" className="w-full h-full object-cover" /> : initiative.id === 'waste-management' ? <img src="/lovable-uploads/3c6f412e-57fd-4e87-b17f-1fc0c0fe40f8.png" alt="Waste Management 2023 - Students attending an educational presentation about waste management and environmental sustainability" className="w-full h-full object-cover" /> : initiative.id === 'tree-plantation' ? <img src="/lovable-uploads/eb3af96b-9040-4af6-ac20-ae157e18d16e.png" alt="Tree Plantation 2023 - Students actively participating in tree planting activities for environmental restoration" className="w-full h-full object-cover" /> : initiative.id === 'inspirus' ? <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex gap-2 p-2">
                          <div className="flex-1 rounded-lg overflow-hidden">
                            <img src="/lovable-uploads/4056d3dc-ea87-4364-ac36-e56903620153.png" alt="InspirUs Art Installation - Students viewing environmental art installation made from waste materials" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 rounded-lg overflow-hidden">
                            <img src="/lovable-uploads/70ad26d4-635e-438f-b930-8ed17b459df7.png" alt="InspirUs Beach Cleanup - Large group of participants collecting waste during beach cleanup initiative" className="w-full h-full object-cover" />
                          </div>
                        </div> : initiative.id === 'beach-cleanup-2022' ? <img src="/lovable-uploads/4f4f661f-e77f-49ef-9f9f-79a5f4b7abf0.png" alt="Beach Clean Up 2022 - Students working together to collect large debris during beach cleanup initiative" className="w-full h-full object-cover" /> : <img src="/lovable-uploads/e5b71af0-81f1-48bf-9662-02e0470ba336.png" alt="Earth Day - Nariman Point awareness event with students holding climate action posters and signs" className="w-full h-full object-cover" />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <Badge variant="outline" className="text-xs font-semibold">
                          {initiative.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {initiative.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-base">
                        {initiative.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>;
          })}
          </div>
        </div>
      </section>

      {/* Global Initiatives Grid */}
      

      {/* Call to Action */}
      

      <Footer />
    </div>;
};
export default InitiativesPage;