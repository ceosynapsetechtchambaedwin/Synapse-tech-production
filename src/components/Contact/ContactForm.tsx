import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm, UseFormRegister } from 'react-hook-form';
import { ArrowUpRight } from 'react-feather';

interface FormInputs {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  message: string;
}

interface AnimatedInputProps {
  label: string;
  name: keyof FormInputs;
  error?: { message?: string };
  placeholder: string;
  register: UseFormRegister<FormInputs>;
}

function AnimatedInput({ label, register, name, error, placeholder }: AnimatedInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium mb-2 transition-colors">
        {label}
      </label>
      <input
        {...register(name)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 bg-gray-900/50 rounded-lg border transition-all duration-300 ${
          isFocused ? 'border-[#87bc2c] ring-1 ring-[#87bc2c]/20' : 'border-gray-700'
        }`}
        placeholder={placeholder}
      />
      {error && error.message && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-sm mt-1"
        >
          {error.message}
        </motion.p>
      )}
    </div>
  );
}

function AnimatedBackground({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-[#87bc2c] to-[#a4d046]"
      initial={{ x: "100%" }}
      animate={{ x: isSubmitting ? "0%" : "100%" }}
      transition={{ duration: 0.5 }}
    />
  );
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    try {
      // API call simulation
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      // Show success message
    } catch (_error) {
      // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative rounded-2xl overflow-hidden"
    >
      {/* Card background with glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl" />
      
      {/* Animated background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-[#87bc2c]/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.2, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative p-8 space-y-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-[#87bc2c] to-[#a4d046]" />
          <h3 className="text-2xl font-bold">Envoyez-nous un message</h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedInput
              label="Nom"
              register={register}
              name="name"
              error={errors.name}
              placeholder="Votre nom"
            />
            <AnimatedInput
              label="Entreprise"
              register={register}
              name="companyName"
              error={errors.companyName}
              placeholder="Nom de votre entreprise"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedInput
              label="Téléphone"
              register={register}
              name="phone"
              error={errors.phone}
              placeholder="+237 XXX XXX XXX"
            />
            <AnimatedInput
              label="Email"
              register={register}
              name="email"
              error={errors.email}
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              className="w-full px-4 py-3 bg-gray-900/50 rounded-lg border border-gray-700 focus:border-[#87bc2c] focus:ring-1 focus:ring-[#87bc2c]/20 transition-all resize-none"
              placeholder="Décrivez votre projet..."
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-[#87bc2c] to-[#a4d046] hover:opacity-90 transition-all duration-300 font-medium relative overflow-hidden group"
          >
            <AnimatedBackground isSubmitting={isSubmitting} />
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <motion.div 
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Discutons de votre projet
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </span>
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}
