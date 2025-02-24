import { Phone, Mail, MapPin, ArrowUpRight, Linkedin, Twitter, Github, Globe } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ContactForm from './ContactForm';
import React from 'react';

export default function Contact() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const contactInfo = [
    { 
      icon: <Phone className="w-5 h-5" />, 
      text: "+237 659 902 191",
      label: "Téléphone direct",
      href: "tel:+237659902191"
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      text: "tchambaedwin.synapsetech@gmail.com",
      label: "Email professionnel",
      href: "mailto:tchambaedwin.synapsetech@gmail.com"
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      text: "Douala - Cameroun",
      label: "Siège social",
      href: "https://maps.google.com/?q=Douala,Cameroun"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin />, href: "#", label: "LinkedIn" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
    { icon: <Github />, href: "#", label: "GitHub" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden min-h-[90vh]">
      {/* Background amélioré */}
      <motion.div 
        className="absolute inset-0"
        style={{ opacity }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#87bc2c]/10 via-transparent to-transparent opacity-30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#87bc2c]/5 to-transparent"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.3, 0.1, 0.3] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </motion.div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#87bc2c]/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:sticky lg:top-10 space-y-6 md:space-y-8"
          >
            {/* Header Section avec meilleur responsive */}
            <div className="space-y-4 md:space-y-6">
              <motion.div 
                className="flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 rounded-full bg-[#87bc2c] animate-ping" />
                <span className="text-[#87bc2c] font-medium">En ligne - Prêt à vous aider</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Commençons votre{' '}
                <span className="bg-gradient-to-r from-[#87bc2c] to-[#a4d046] bg-clip-text text-transparent">
                  transformation numérique
                </span>
              </h2>
              
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl">
                Notre équipe d'experts est disponible pour vous accompagner dans votre projet. 
                Contactez-nous pour une consultation gratuite.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} {...info} index={index} />
              ))}
            </div>

            {/* Social Links avec meilleur responsive */}
            <motion.div 
              className="pt-6 md:pt-8 border-t border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 md:mb-6">
                <Globe className="w-5 h-5 text-[#87bc2c]" />
                <h3 className="text-lg font-semibold">Rejoignez notre communauté</h3>
              </div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form Column avec meilleur responsive */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  icon: React.ReactNode;
  label: string;
  text: string;
  href: string;
  index: number;
}

function ContactCard({ icon, label, text, href, index }: ContactCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, x: 5 }}
      transition={{ delay: index * 0.1 }}
      className="group flex items-center gap-3 p-3 sm:gap-4 sm:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all"
    >
      <motion.div 
        className="p-2 sm:p-3 bg-[#87bc2c]/10 rounded-lg text-[#87bc2c]"
        whileHover={{ rotate: 10 }}
      >
        {icon}
      </motion.div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm text-gray-400">{label}</p>
        <p className="text-sm sm:text-base text-white group-hover:text-[#87bc2c] transition-colors truncate">
          {text}
        </p>
      </div>
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-[#87bc2c] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </motion.a>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 backdrop-blur-sm hover:bg-[#87bc2c]/20 hover:border-[#87bc2c]/30 transition-all group"
      title={label}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: "w-5 h-5 text-gray-400 group-hover:text-[#87bc2c] transition-colors"
      })}
    </motion.a>
  );
}
