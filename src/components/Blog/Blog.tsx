import { motion } from 'framer-motion';
import BlogCard from './BlogCard';

export default function Blog() {
  const posts = [
    {
      title: "L'Intelligence Artificielle au Cameroun",
      excerpt: "Découvrez comment l'IA transforme le paysage technologique camerounais...",
      date: "2024-02-15",
      author: "Edwin TCHAMBA",
      category: "Intelligence Artificielle",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Sécurité des données en entreprise",
      excerpt: "Les meilleures pratiques pour protéger vos données sensibles...",
      date: "2024-02-10",
      author: "Edwin TCHAMBA",
      category: "Cybersécurité",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Cloud Computing au Cameroun",
      excerpt: "L'adoption du cloud computing par les entreprises camerounaises...",
      date: "2024-02-05",
      author: "Edwin TCHAMBA",
      category: "Cloud",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Développement Mobile en Afrique",
      excerpt: "L'essor des applications mobiles dans le contexte africain...",
      date: "2024-02-01",
      author: "Edwin TCHAMBA",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Actualités & Insights</h2>
          <p className="text-gray-400 mt-4">
            Restez informé des dernières tendances technologiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
