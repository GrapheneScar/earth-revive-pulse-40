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

        <div className="relative">
          {/* SVG Lines for connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* JBCN to TAG main line */}
            <motion.path
              d="M 400 100 Q 500 150 600 200"
              stroke="url(#gradient1)"
              strokeWidth="4"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* TAG to Climate Action Project */}
            <motion.path
              d="M 600 200 Q 650 250 700 350"
              stroke="url(#gradient2)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* TAG to Climate Action Schools */}
            <motion.path
              d="M 600 200 Q 550 250 500 350"
              stroke="url(#gradient3)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
            
            {/* JBCN to CIU branch */}
            <motion.path
              d="M 400 100 Q 300 180 250 280"
              stroke="url(#gradient4)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* Gradients for the lines */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Flow Cards */}
          <div className="relative" style={{ zIndex: 2 }}>
            {/* JBCN - Root Node */}
            <motion.div
              className="absolute top-8 left-8 md:left-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-80 hover-lift transition-smooth group border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-300">JBCN</h3>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400">Climate Education Pioneer</p>
                    </div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Foundation Partner
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* TAG - Main Partner */}
            <motion.div
              className="absolute top-32 right-8 md:right-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-80 hover-lift transition-smooth group border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-700 dark:text-cyan-300">Take Action Global</h3>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400">Global Network Platform</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 mr-2">
                      500+ Schools
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      40 Countries
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Climate Action Project - Branch */}
            <motion.div
              className="absolute top-80 right-8 md:right-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-72 hover-lift transition-smooth group border-2 border-purple-500/30 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-purple-700 dark:text-purple-300">Climate Action Project</h4>
                      <p className="text-xs text-purple-600 dark:text-purple-400">1-Month Global Program</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-purple-600 border-purple-200 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-800 dark:hover:bg-purple-950/50"
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

            {/* Climate Action Schools - Branch */}
            <motion.div
              className="absolute top-80 left-32 md:left-48"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-72 hover-lift transition-smooth group border-2 border-amber-500/30 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-amber-700 dark:text-amber-300">Climate Action Schools</h4>
                      <p className="text-xs text-amber-600 dark:text-amber-400">Year-Long Recognition</p>
                    </div>
                  </div>
                  <div className="text-center p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <div className="text-lg font-bold text-amber-800 dark:text-amber-200">3 Years</div>
                    <div className="text-xs text-amber-600 dark:text-amber-400">JBCN Achievement</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* CIU - Side Branch */}
            <motion.div
              className="absolute top-64 left-8 md:left-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.54, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Card className="w-64 hover-lift transition-smooth group border-2 border-green-500/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-green-700 dark:text-green-300">Change In Us (CIU)</h4>
                      <p className="text-xs text-green-600 dark:text-green-400">Mumbai Local Action</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/lovable-uploads/ciu-logo.png"
                      alt="CIU Logo"
                      className="w-6 h-6"
                    />
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">
                      Community Focus
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Connection Labels */}
            <motion.div
              className="absolute top-24 left-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                JBCN × TAG
              </div>
            </motion.div>

            <motion.div
              className="absolute top-48 left-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                JBCN × CIU
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFlow;