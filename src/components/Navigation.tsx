import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Leaf, Instagram, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [lastTap, setLastTap] = useState(0);
  const location = useLocation();

  const handleInstagramDoubleClick = () => {
    const now = Date.now();
    const timeSinceLastTap = now - lastTap;
    
    if (timeSinceLastTap < 300) {
      // Double tap detected
      setShowHeartAnimation(true);
      setTimeout(() => setShowHeartAnimation(false), 1000);
    }
    
    setLastTap(now);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-earth rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-lg font-bold hidden sm:block">CLIMATE ACTION PROJECT</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  isActive(item.href) 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-6 left-0 right-0 h-0.5 bg-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Instagram Button */}
            <motion.a
              href="https://www.instagram.com/the.climateactionproject/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramDoubleClick}
              className="relative flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              whileHover={{ 
                scale: 1.08,
                background: "linear-gradient(45deg, #ff6b6b, #ffd93d, #6bcf7a, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd)"
              }}
              whileTap={{ scale: 0.92 }}
              animate={{
                boxShadow: [
                  "0 4px 20px rgba(236, 72, 153, 0.3)",
                  "0 4px 20px rgba(168, 85, 247, 0.3)",
                  "0 4px 20px rgba(99, 102, 241, 0.3)",
                  "0 4px 20px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Sparkle particles */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="relative z-10"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Instagram className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-700" />
              </motion.div>
              
              <motion.span 
                className="hidden lg:inline relative z-10 font-semibold"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 8px rgba(255,255,255,0.8)",
                    "0 0 0px rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Follow Us
              </motion.span>
              
              {/* Floating particles */}
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top: "20%", left: "10%" }}
                animate={{
                  y: [-2, -8, -2],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{ top: "60%", right: "15%" }}
                animate={{
                  y: [2, 8, 2],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              />
              
              {/* Heart Animation */}
              <AnimatePresence>
                {showHeartAnimation && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.8, 1.2],
                      opacity: [0, 1, 0],
                      y: [0, -40, -80],
                      rotate: [0, 15, -15, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                  >
                    <Heart className="w-10 h-10 text-red-400 fill-current drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Mobile Instagram Button */}
            <motion.a
              href="https://www.instagram.com/the.climateactionproject/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramDoubleClick}
              className="md:hidden relative flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium overflow-hidden shadow-lg"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              animate={{
                boxShadow: [
                  "0 4px 15px rgba(236, 72, 153, 0.4)",
                  "0 4px 15px rgba(168, 85, 247, 0.4)",
                  "0 4px 15px rgba(99, 102, 241, 0.4)",
                  "0 4px 15px rgba(236, 72, 153, 0.4)"
                ]
              }}
              transition={{
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Instagram className="w-4 h-4" />
              </motion.div>
              
              {/* Mobile Heart Animation */}
              <AnimatePresence>
                {showHeartAnimation && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.8, 1.2],
                      opacity: [0, 1, 0],
                      y: [0, -35, -70],
                      rotate: [0, 20, -20, 0]
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
                  >
                    <Heart className="w-8 h-8 text-red-400 fill-current drop-shadow-lg" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden bg-background border-t border-border/50"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;