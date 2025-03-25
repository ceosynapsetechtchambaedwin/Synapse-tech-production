import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ChevronRight, Users, Building, Star, ArrowDown } from 'lucide-react';
import { scrollToSection } from '../../utils/scroll';

import Image from '../../assets/edwin.png';

interface StatItemProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

function StatItem({ value, label, icon }: StatItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 bg-gray-800/30 p-4 rounded-xl backdrop-blur-sm"
    >
      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </motion.div>
  );
}

function ParallaxImage({ y }: { y: MotionValue<number> }) {
  return (
    <motion.div style={{ y }} className="relative lg:mt-0 mt-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 rounded-2xl blur-3xl" />
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <img 
          src={Image}
          alt="Tech Innovation"
          className="rounded-2xl w-full object-cover h-[600px] relative z-10"
        />
        <motion.div 
          className="absolute -left-6 top-1/4 bg-white/5 backdrop-blur-lg rounded-lg p-4 shadow-xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8"> {/* Mise à jour du conteneur */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className="inline-block px-4 py-2 bg-[#87bc2c]/10 rounded-full text-[#87bc2c] text-sm mb-4"
                whileHover={{ scale: 1.05 }}
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(135, 188, 44, 0)", "0 0 0 8px rgba(135, 188, 44, 0)"],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🏆 Leader en Solutions IT au Cameroun
              </motion.div>
              <h1 className="text-5xl font-bold leading-tight">
                Solutions Technologiques{' '}
                <span className="bg-gradient-to-r from-[#87bc2c] to-[#a4d046] bg-clip-text text-transparent">
                  Innovantes
                </span>{' '}
                Pour Votre Organisation
              </h1>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Synapse Tech est la solution parfaite pour toutes les entreprises qui souhaitent innover et optimiser leur infrastructure technologique.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.button 
                onClick={() => scrollToSection('contact')}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(135, 188, 44, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#87bc2c] to-[#a4d046] hover:opacity-90 transition flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Obtenir un devis</span>
                <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition flex items-center gap-2"
              >
                <span>+237 659 902 191</span>
                <motion.span 
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1.5 }}
                >
                  📞
                </motion.span>
              </motion.button>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-4 pt-8"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              initial="hidden"
              animate="show"
            >
              <StatItem value="500+" label="Clients" icon={<Users className="w-5 h-5" />} />
              <StatItem value="50+" label="Entreprises" icon={<Building className="w-5 h-5" />} />
              <StatItem value="98%" label="Satisfaction" icon={<Star className="w-5 h-5" />} />
            </motion.div>

            <motion.div 
              className="flex justify-center pt-12 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </motion.div>
          </div>

          <ParallaxImage y={y} />
        </motion.div>
      </div>
    </div>
  );
}
