import { motion } from 'framer-motion';
import ImageLogo from '../../assets/logo_synapse.jpg';
import { scrollToSection } from '../../utils/scroll';

export default function Navbar() {

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mx-auto px-4 sm:px-6 lg:px-8 py-4"
    >
      <div className="flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          {/* Logo */}
          <div className="w-12 h-12 relative">
            <img
              src={ImageLogo}
              alt="SynapseTech Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold">SynapseTech</h2>
            <p className="text-sm text-gray-400">Connecter, Créer, Inspirer</p>
          </div>
        </motion.div>


        {/* CTA Button - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#87bc2c] to-[#a4d046] hover:opacity-90 transition"
          >
            Contactez-nous
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
