import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
  description: string;
  technologies: string[];
  image?: string;
}

export default function ServiceCard({ title, icon, features, description, technologies, image }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      className="group bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer border border-gray-700/50 backdrop-blur-sm relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ mixBlendMode: 'overlay' }}
      />

      <motion.div
        animate={{
          scale: isHovered ? 1.05 : 1,
          y: isHovered ? -5 : 0
        }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="p-3 bg-[#87bc2c]/10 rounded-lg text-[#87bc2c]"
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <p className="text-gray-400 mb-6">{description}</p>

        {image && (
          <motion.div 
            className="mb-6 overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
          </motion.div>
        )}

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Fonctionnalités</h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <ArrowRight className="w-4 h-4 text-[#87bc2c]" /> 
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-300 mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 bg-[#87bc2c]/10 text-[#87bc2c] rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
