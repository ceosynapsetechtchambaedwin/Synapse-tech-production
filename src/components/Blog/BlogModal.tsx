import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Share2, Bookmark, ThumbsUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: {
    title: string;
    content?: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
  };
}

export default function BlogModal({ isOpen, onClose, post }: BlogModalProps) {
  const [likes, setLikes] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Empêcher le défilement du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      }
    } catch (error) {
      console.log('Erreur de partage:', error);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleBackdropClick}
      >
        <motion.div
          className="relative max-w-4xl w-full bg-gray-900 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          {/* Header Image avec overlay */}
          <div className="relative h-72 overflow-hidden rounded-t-2xl">
            <motion.img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

            {/* Boutons flottants */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleShare}
                className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 backdrop-blur-sm transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                  isBookmarked ? 'bg-[#87bc2c] text-white' : 'bg-gray-800/80 hover:bg-gray-700'
                }`}
              >
                <Bookmark className="w-5 h-5" fill={isBookmarked ? 'currentColor' : 'none'} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 bg-gray-800/80 rounded-full hover:bg-gray-700 backdrop-blur-sm transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Contenu scrollable */}
          <div className="max-h-[60vh] overflow-y-auto modal-content">
            <div className="p-8 space-y-6">
              {/* En-tête article */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#87bc2c]/10 text-[#87bc2c] rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold">{post.title}</h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
              </div>

              {/* Contenu article */}
              <div className="prose prose-invert max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {post.content ? (
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    <>
                      <p className="text-lg leading-relaxed text-gray-300">{post.excerpt}</p>
                      <div className="bg-gray-800/50 rounded-lg p-4 mt-8">
                        <p className="text-gray-400 italic">Article complet bientôt disponible...</p>
                      </div>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Actions footer */}
              <div className="border-t border-gray-800 pt-6 mt-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setLikes(prev => prev + 1)}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#87bc2c] transition-colors"
                    >
                      <ThumbsUp className="w-5 h-5" />
                      <span>{likes}</span>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-[#87bc2c] transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Commenter</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
