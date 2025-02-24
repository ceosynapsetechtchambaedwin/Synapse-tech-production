import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Système d'accès portique automobile",
      description: "1er prix du meilleur projet de fin d'études à l'IUT FV en 2023-2024.",
      image: "https://images.unsplash.com/photo-1567789884554-0b844b6af5cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["IoT", "React", "Node.js", "MongoDB"],
      liveUrl: "https://portique.demo.com",
      githubUrl: "https://github.com/synapsetech/portique"
    },
    {
      title: "Mon Faxe - App mobile d'apprentissage",
      description: "Application facilitant l'apprentissage pour les étudiants de l'IUT FV de Bandjoun.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React Native", "Firebase", "Express"],
      liveUrl: "https://monfaxe.demo.com"
    },
    {
      title: "Système de gestion hôtelière",
      description: "Solution numérique pour la gestion des réservations de l'Hôtel Échangeur.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js", "PostgreSQL", "Prisma"],
      liveUrl: "https://hotel.demo.com"
    }
  ];

  return (
    <section className="py-20 relative">
      <motion.div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span className="text-[#87bc2c] text-sm font-medium">
            Nos Réalisations
          </motion.span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Projets Récents</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez nos dernières réalisations et innovations technologiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

