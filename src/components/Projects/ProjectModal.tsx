import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code2, Layers, CheckCircle2, Timer } from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    features?: string[];
    challenges?: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const slideUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 overflow-y-auto"
      >
        <div className="min-h-screen px-4 py-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl overflow-hidden z-50 max-w-4xl w-full shadow-2xl border border-gray-800/50 relative"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors z-10 backdrop-blur-sm"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="overflow-y-auto modal-content">
              <div className="relative h-72 md:h-96 group">
                <motion.img
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div className="space-y-2">
                    <motion.h2 
                      variants={slideUpVariants}
                      initial="hidden"
                      animate="visible"
                      custom={0}
                      className="text-3xl md:text-4xl font-bold text-white"
                    >
                      {project.title}
                    </motion.h2>
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <motion.a
                        variants={slideUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={1}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-[#87bc2c] rounded-lg hover:bg-[#87bc2c]/90 transition-colors backdrop-blur-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="hidden sm:inline">Voir le site</span>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        variants={slideUpVariants}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800/80 rounded-lg hover:bg-gray-700 transition-colors backdrop-blur-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">Code source</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <motion.div
                  variants={slideUpVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  className="prose prose-invert max-w-none"
                >
                  <p className="text-gray-300 text-lg leading-relaxed">{project.description}</p>
                </motion.div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 className="w-5 h-5 text-[#87bc2c]" />
                    <h3 className="text-xl font-semibold">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#87bc2c]/10 text-[#87bc2c] rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.features && (
                  <motion.div
                    variants={slideUpVariants}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <div className="p-2 bg-[#87bc2c]/10 rounded-lg">
                        <Layers className="w-5 h-5 text-[#87bc2c]" />
                      </div>
                      <h3 className="text-xl font-semibold">Fonctionnalités</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          variants={slideUpVariants}
                          initial="hidden"
                          animate="visible"
                          custom={index + 6}
                          className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#87bc2c] mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
