import { motion } from 'framer-motion';
import { Clock, Shield, MessageSquare } from 'lucide-react';

interface TimelineItemProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  estimatedTime: string;
  status: string;
}

function TimelineItem({ number, title, description, icon, estimatedTime, status }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true }}
      className="flex gap-6 relative group"
    >
      {/* Connecteur animé */}
      <div className="absolute left-6 top-16 bottom-0 w-0.5">
        <div className="h-full w-full bg-gradient-to-b from-[#87bc2c] to-transparent" />
        <motion.div 
          className="absolute top-0 h-16 w-full bg-[#87bc2c]"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="relative">
        <motion.div 
          className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#87bc2c]/10 text-[#87bc2c] backdrop-blur-sm border border-[#87bc2c]/20"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          {icon}
        </motion.div>
      </div>

      <div className="flex-1">
        <motion.div 
          className="flex items-center gap-3 mb-2"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#87bc2c] to-[#a4d046]">
            {number}
          </span>
          <h3 className="text-xl font-semibold">{title}</h3>
        </motion.div>

        <motion.p 
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm space-y-3"
        >
          <div className="flex items-center gap-2 text-sm text-[#87bc2c]">
            <Clock className="w-4 h-4" />
            <span>Temps de réponse: {estimatedTime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">Status: {status}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const items = [
    {
      number: "01",
      title: "Priorité Haute",
      description: "Si vous avez un problème qui affecte l'ensemble de votre entreprise, nous garantissons une réponse dans l'heure.",
      icon: <Shield className="w-6 h-6" />,
      estimatedTime: "< 1 heure",
      status: "Service Premium"
    },
    {
      number: "02",
      title: "Priorité Moyenne",
      description: "Pour les problèmes affectant plusieurs utilisateurs, nous garantissons une réponse dans les 4 heures.",
      icon: <Clock className="w-6 h-6" />,
      estimatedTime: "< 4 heures",
      status: "Service Standard"
    },
    {
      number: "03",
      title: "Priorité Basse",
      description: "Pour les demandes non urgentes, nous garantissons une réponse dans les 8 heures.",
      icon: <MessageSquare className="w-6 h-6" />,
      estimatedTime: "< 8 heures",
      status: "Service Basique"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#87bc2c]/5 backdrop-blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block px-4 py-2 bg-[#87bc2c]/10 rounded-full text-[#87bc2c] text-sm"
              whileHover={{ scale: 1.05 }}
            >
              Notre Processus
            </motion.div>
            <h2 className="text-4xl font-bold">Comment ça marche ?</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Un processus simple et efficace pour résoudre vos problèmes informatiques, avec des garanties de temps de réponse adaptées à vos besoins.
            </p>
          </motion.div>

          <div className="space-y-12">
            {items.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#87bc2c] to-[#a4d046] hover:opacity-90 transition"
            >
              Commencer maintenant
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
