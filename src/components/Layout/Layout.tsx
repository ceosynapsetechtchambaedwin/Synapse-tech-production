import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { ArrowUp } from "react-feather";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#020817] text-white selection:bg-primary-light selection:text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-primary-muted/5 via-transparent to-primary-muted/10 pointer-events-none" />
      <div className="mx-auto">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {children}
        </motion.main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsVisible(latest > 400);
    });
  }, [scrollY]);

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-primary-light/20 text-primary-light hover:bg-primary-light/30 transition-colors"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
}
