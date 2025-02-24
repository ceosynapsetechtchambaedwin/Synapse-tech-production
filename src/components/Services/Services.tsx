import { 
  Code2, 
  Palette, 
  GraduationCap,
  Database,
} from 'lucide-react';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      title: "Développement Web & Mobile",
      icon: <Code2 className="w-6 h-6" />,
      features: [
        'Applications web sur mesure',
        'Applications mobiles natives',
        'Solutions e-commerce',
        'Interfaces utilisateur modernes'
      ],
      description: "Conception et réalisation d'applications web et mobiles adaptées à vos besoins spécifiques.",
      technologies: ['React', 'Next.js', 'Flutter', 'Node.js'],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Systèmes d'Information",
      icon: <Database className="w-6 h-6" />,
      features: [
        'Gestion dentreprise',
        'Automatisation des processus',
        'Intégration de services',
        'Solutions cloud'
      ],
      description: "Solutions informatiques personnalisées pour optimiser la gestion de votre organisation.",
      technologies: ['SQL', 'Cloud Computing', 'API REST', 'DevOps'],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Design Graphique",
      icon: <Palette className="w-6 h-6" />,
      features: [
        'Identité visuelle',
        'Supports marketing',
        'UI/UX Design',
        'Motion Design'
      ],
      description: "Création d'identités visuelles percutantes et de supports de communication efficaces.",
      technologies: ['Figma', 'Adobe Suite', 'After Effects'],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80"
    },
    {
      title: "Consulting & Formation",
      icon: <GraduationCap className="w-6 h-6" />,
      features: [
        'Accompagnement digital',
        'Formation technique',
        'Audit informatique',
        'Stratégie numérique'
      ],
      description: "Renforcement des compétences et accompagnement dans la transformation numérique.",
      technologies: ['Méthodologies Agiles', 'Gestion de projet', 'DevOps'],
      image: "https://images.unsplash.com/photo-1515168833906-d503a853e1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8"> {/* Mise à jour du conteneur */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block px-4 py-2 bg-[#87bc2c]/10 rounded-full text-[#87bc2c] text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Nos Solutions
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Services Professionnels</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des solutions technologiques innovantes et adaptées aux besoins locaux, 
            conçues pour propulser votre organisation vers l'avenir numérique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
