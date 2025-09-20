import { motion } from "framer-motion";
import EnhancedMentorCard from "@/components/EnhancedMentorCard";

const CollaboratorsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Partnership Flow - Exact Structure from Reference */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top Row - JBCN X TAG */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <motion.div
              className="w-64 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl flex items-center justify-center cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center text-white z-10">
                <h3 className="text-xl font-bold">JBCN INTERNATIONAL</h3>
                <p className="text-sm opacity-90">School Network</p>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -top-2 -right-2 w-4 h-4 bg-white/30 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              className="text-6xl font-bold text-foreground"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
            >
              ×
            </motion.div>

            <motion.div
              className="w-64 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl flex items-center justify-center cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateY: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center text-white z-10">
                <h3 className="text-xl font-bold">TAG</h3>
                <p className="text-sm opacity-90">Environmental Alliance</p>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute -top-2 -left-2 w-4 h-4 bg-white/30 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Connecting Line */}
          <motion.div
            className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent mx-auto relative"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Middle Card - JBCN X CIU */}
          <div className="flex justify-center mb-12">
            <motion.div
              className="border-2 border-blue-200 p-8 rounded-2xl bg-background/80 backdrop-blur shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-80 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center cursor-pointer group relative overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-center text-white z-10">
                  <h3 className="text-lg font-bold">JBCN × CIU</h3>
                  <p className="text-sm opacity-90">Climate Innovation Unit</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Connecting Line */}
          <motion.div
            className="w-px h-20 bg-gradient-to-b from-blue-500 to-transparent mx-auto relative"
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Bottom Row - Climate Action Cards */}
          <div className="flex justify-center gap-12">
            <motion.div
              className="w-64 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl flex items-center justify-center cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
            >
              <div className="text-center text-white p-4 z-10">
                <h3 className="text-lg font-bold mb-2">CLIMATE ACTION</h3>
                <h3 className="text-lg font-bold mb-2">PROJECT</h3>
                <p className="text-sm opacity-90">Global Initiative</p>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              {/* Animated dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    right: `${15 + i * 5}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </motion.div>

            <motion.div
              className="w-64 h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl flex items-center justify-center cursor-pointer group relative overflow-hidden"
              whileHover={{ scale: 1.05, rotateX: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <div className="text-center text-white p-4 z-10">
                <h3 className="text-lg font-bold mb-2">CLIMATE ACTION</h3>
                <h3 className="text-lg font-bold mb-2">SCHOOLS</h3>
                <p className="text-sm opacity-90">Education Program</p>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              {/* Animated dots */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white/40 rounded-full"
                  style={{
                    top: `${25 + i * 20}%`,
                    left: `${15 + i * 5}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 + 0.5 }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Spotlight */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <EnhancedMentorCard />
        </div>
      </section>
    </div>
  );
};

export default CollaboratorsPage;