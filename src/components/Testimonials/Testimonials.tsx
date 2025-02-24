import { motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Jean Dupon",
      role: "CEO, Enterprise XYZ",
      content: "SynapseTech a complètement transformé notre infrastructure IT. Leur expertise et leur professionnalisme sont remarquables.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      name: "Marie Simo",
      role: "CTO, StartUp ABC",
      content: "Un excellent partenaire technologique. Leur équipe est réactive et trouve toujours des solutions innovantes.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    {
      name: "Paul Kamga",
      role: "Directeur, École XYZ",
      content: "La transformation digitale de notre école a été un succès grâce à SynapseTech. Je les recommande vivement.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span className="inline-block px-4 py-2 bg-[#87bc2c]/10 rounded-full text-[#87bc2c] text-sm mb-4">
            Témoignages
          </motion.span>
          <h2 className="text-4xl font-bold">Ce que disent nos clients</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Découvrez les retours d'expérience de nos clients satisfaits
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
