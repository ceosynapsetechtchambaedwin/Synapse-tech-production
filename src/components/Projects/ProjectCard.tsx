import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import ProjectModal from './ProjectModal'; // Ajout de l'import correct
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm"
      >
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-[#87bc2c] rounded-full hover:bg-[#87bc2c]/90 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                 className="p-2 bg-gray-800/90 rounded-full hover:bg-gray-800 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-[#87bc2c] transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-900/50 rounded-full text-xs text-gray-300">
                {tech}
              </span>
            ))}
          </div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-[#87bc2c] font-medium"
          >
            Voir le projet
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={{
          title,
          description,
          image,
          technologies,
          liveUrl,
          githubUrl,
          features: [
            "Interface utilisateur intuitive",
            "Performance optimisée",
            "Sécurité renforcée",
            "Responsive design"
          ],
          challenges: [
            "Optimisation des performances",
            "Intégration de multiples APIs",
            "Gestion du temps réel"
          ]
        }}
      />
    </>
  );
}
