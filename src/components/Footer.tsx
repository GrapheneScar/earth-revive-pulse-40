import { motion } from 'framer-motion';
import { Leaf, Instagram, Mail, MapPin, Phone, ArrowUp, Send, Trophy, Calculator, Award, Clock, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Initiatives", href: "/initiatives" },
      { name: "Gallery", href: "/gallery" },
      { name: "Team", href: "/team" },
      { name: "Collaborators", href: "/collaborators" }
    ],
    "Interactive Features": [
      { name: "Climate Quiz", href: "/#climate-quiz", icon: Trophy },
      { name: "Carbon Calculator", href: "/about#carbon-calculator", icon: Calculator },
      { name: "Certificate Generator", href: "/initiatives/your-initiative", icon: Award },
      { name: "Climate Countdown", href: "/#climate-countdown", icon: Clock },
      { name: "Daily Eco Challenge", href: "/#daily-challenge", icon: Sparkles },
      { name: "Your Initiative", href: "/initiatives/your-initiative", icon: Target }
    ]
  };

  const handleFeatureClick = (href: string) => {
    const [path, hash] = href.split('#');
    
    // If there's a path (could be empty string for same page)
    if (path && path !== window.location.pathname) {
      // Navigate to different page
      navigate(path);
      if (hash) {
        // Scroll to section after navigation
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 300);
      } else {
        // Just scroll to top for regular page navigation
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
      }
    } else if (path && path === window.location.pathname && !hash) {
      // Already on the page without hash, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (hash) {
      // Same page with hash, just scroll to section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Newsletter Subscription",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/the.climateactionproject/", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary/95 via-secondary to-background/5 text-secondary-foreground border-t border-primary/10 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    CLIMATE ACTION
                  </span>
                  <div className="text-xs text-secondary-foreground/60 font-medium tracking-wide">PROJECT</div>
                </div>
              </div>
              
              <p className="text-secondary-foreground/80 leading-relaxed text-sm max-w-xs mb-4">
                Global initiative for sustainable environmental solutions - 
                Empowering communities through climate action and environmental awareness.
              </p>
            </motion.div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="lg:col-span-1"
            >
              <h4 className="font-bold mb-6 text-primary text-lg relative">
                {category}
                <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </h4>
               <ul className="space-y-3">
                {links.map((link: any, linkIndex) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * linkIndex }}
                    >
                      {category === "Interactive Features" ? (
                        <button
                          onClick={() => handleFeatureClick(link.href)}
                          className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 text-sm group flex items-center gap-2"
                        >
                          {IconComponent && (
                            <IconComponent className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                          )}
                          <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                        </button>
                      ) : link.href.startsWith('/') ? (
                        <Link 
                          to={link.href} 
                          onClick={scrollToTop}
                          className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 text-sm group flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"></span>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-foreground/70 hover:text-primary transition-all duration-300 text-sm group flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-primary/40 rounded-full group-hover:bg-primary transition-colors"></span>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                        </a>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h4 className="font-bold mb-6 text-primary text-lg relative">
              Contact
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="break-all">jbcnparelclimateactionproject@gmail.com</span>
              </motion.div>
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm text-secondary-foreground/70 hover:text-primary transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>JBCN Parel, Mumbai</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gradient-to-r from-transparent via-primary/20 to-transparent pt-8 mt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-secondary-foreground/70 font-medium">CLIMATE ACTION Dev Team</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/60">
              <span>Developed by:</span>
              <span className="text-primary font-medium">CLIMATE ACTION Dev Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;