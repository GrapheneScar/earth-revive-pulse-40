import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award, Building2, Globe, Target, Users } from "lucide-react";

const PartnershipFlow = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-400 bg-clip-text text-transparent">
            Partnership Network Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our collaborative partnerships create a powerful ecosystem for global climate action
          </p>
        </motion.div>

        <div className="relative min-h-[600px]">
          {/* Enhanced SVG Lines for sophisticated branching */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Main trunk - JBCN to TAG */}
            <motion.path
              d="M 300 80 Q 400 120 500 160"
              stroke="url(#gradientTrunk)"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8,4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Branch 1: TAG to Climate Action Project */}
            <motion.path
              d="M 500 160 Q 580 200 640 280"
              stroke="url(#gradientBranch1)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Branch 2: TAG to Climate Action Schools */}
            <motion.path
              d="M 500 160 Q 420 200 360 280"
              stroke="url(#gradientBranch2)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.8, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* Side branch: JBCN to CIU */}
            <motion.path
              d="M 300 80 Q 220 140 180 220"
              stroke="url(#gradientSide)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* Flowing particle animations */}
            <motion.circle
              r="3"
              fill="#10b981"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 300 80 Q 400 120 500 160"
                begin="2s"
              />
            </motion.circle>

            <motion.circle
              r="2"
              fill="#06b6d4"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 3 }}
            >
              <animateMotion
                dur="2.5s"
                repeatCount="indefinite"
                path="M 500 160 Q 580 200 640 280"
                begin="3s"
              />
            </motion.circle>

            {/* Enhanced Gradients for sophisticated branching */}
            <defs>
              <linearGradient id="gradientTrunk" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#059669" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="gradientBranch1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradientBranch2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="gradientSide" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
              </linearGradient>
              
              {/* Glow effects */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Sophisticated Flow Cards with Tree Structure */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* JBCN - Root Node (Top Center) */}
            <motion.div
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-72 hover:scale-105 transition-all duration-500 group border-3 border-emerald-500/40 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-950/30 dark:via-background dark:to-teal-950/30 shadow-2xl shadow-emerald-500/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">JBCN</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">Climate Education Pioneer</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 dark:from-emerald-900 dark:to-teal-900 dark:text-emerald-200 px-3 py-1">
                    🌳 Foundation Partner
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* TAG - Main Partner (Center Right) */}
            <motion.div
              className="absolute top-24 right-8 md:right-24"
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-80 hover:scale-105 transition-all duration-500 group border-3 border-cyan-500/40 bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-cyan-950/30 dark:via-background dark:to-blue-950/30 shadow-2xl shadow-cyan-500/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Globe className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">Take Action Global</h3>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">Global Network Platform</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 dark:from-cyan-900 dark:to-blue-900 dark:text-cyan-200">
                      🌍 500+ Schools
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900 dark:to-indigo-900 dark:text-blue-200">
                      🚀 40 Countries
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Climate Action Project - Right Branch */}
            <motion.div
              className="absolute top-60 right-4 md:right-8"
              initial={{ opacity: 0, y: 50, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-64 hover:scale-105 transition-all duration-500 group border-2 border-purple-500/40 bg-gradient-to-br from-purple-50 via-white to-indigo-50 dark:from-purple-950/30 dark:via-background dark:to-indigo-950/30 shadow-xl shadow-purple-500/15">
                <CardContent className="p-5 text-center">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300">Climate Action Project</h4>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">🎯 1-Month Global Program</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-purple-600 border-purple-300 hover:bg-purple-50 hover:border-purple-400 dark:text-purple-400 dark:border-purple-700 dark:hover:bg-purple-950/50 transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.climateactionproject.org/" target="_blank" rel="noopener noreferrer">
                      <span>Explore Project</span>
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Climate Action Schools - Left Branch */}
            <motion.div
              className="absolute top-60 left-16 md:left-24"
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.7, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-64 hover:scale-105 transition-all duration-500 group border-2 border-amber-500/40 bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/30 dark:via-background dark:to-orange-950/30 shadow-xl shadow-amber-500/15">
                <CardContent className="p-5 text-center">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300">Climate Action Schools</h4>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">🏆 Year-Long Recognition</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 p-3 rounded-xl border border-amber-200 dark:border-amber-800">
                    <div className="text-2xl font-bold text-amber-800 dark:text-amber-200">3 Years</div>
                    <div className="text-xs text-amber-600 dark:text-amber-400 font-semibold">JBCN Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CIU - Side Branch (Left) */}
            <motion.div
              className="absolute top-40 left-4 md:left-8"
              initial={{ opacity: 0, x: -50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 2, duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-60 hover:scale-105 transition-all duration-500 group border-2 border-green-500/40 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-green-950/30 dark:via-background dark:to-emerald-950/30 shadow-xl shadow-green-500/15">
                <CardContent className="p-5 text-center">
                  <div className="mb-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-green-700 dark:text-green-300">Change In Us</h4>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">🏙️ Mumbai Local Action</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40 p-2 rounded-lg border border-green-200 dark:border-green-800">
                    <img
                      src="/lovable-uploads/ciu-logo.png"
                      alt="CIU Logo"
                      className="w-5 h-5"
                    />
                    <Badge className="bg-white dark:bg-background text-green-800 dark:text-green-200 text-xs border border-green-300 dark:border-green-700">
                      🤝 Community Focus
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Connection Labels */}
            <motion.div
              className="absolute top-12 left-1/2 transform -translate-x-1/2 translate-x-16"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-2xl border-2 border-white/20 backdrop-blur-sm">
                🌟 JBCN × TAG
              </div>
            </motion.div>

            <motion.div
              className="absolute top-20 left-8 md:left-16"
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 2.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl border-2 border-white/20 backdrop-blur-sm">
                🤝 JBCN × CIU
              </div>
            </motion.div>

            {/* Branch indicators */}
            <motion.div
              className="absolute top-48 right-20 md:right-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Branch 1
              </div>
            </motion.div>

            <motion.div
              className="absolute top-48 left-20 md:left-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                Branch 2
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFlow;