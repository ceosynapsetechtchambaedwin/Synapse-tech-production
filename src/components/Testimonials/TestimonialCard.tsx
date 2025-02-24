import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export default function TestimonialCard({ name, role, content, image, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm relative group"
    >
      <Quote className="w-10 h-10 text-[#87bc2c]/20 absolute -top-4 -left-4" />
      
      <div className="flex items-center gap-4 mb-4">
        <motion.img
          whileHover={{ scale: 1.1 }}
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-[#87bc2c]/20"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#87bc2c] text-[#87bc2c]" />
        ))}
      </div>

      <p className="text-gray-300">{content}</p>
    </motion.div>
  );
}
