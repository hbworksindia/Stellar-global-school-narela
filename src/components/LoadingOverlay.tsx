import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function LoadingOverlay() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] bg-primary flex items-center justify-center flex-col space-y-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Pulsing ring */}
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 border-2 border-secondary rounded-2xl"
            />
            {/* Logo box */}
            <div className="bg-white p-6 rounded-2xl shadow-2xl relative z-10">
              <span className="text-primary font-display font-black text-5xl italic tracking-tighter">STELLAR</span>
            </div>
          </motion.div>

          <div className="space-y-4 text-center">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-white/20 rounded-full mx-auto overflow-hidden"
            >
              <div className="h-full bg-secondary w-full" />
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/50 text-[10px] uppercase font-bold tracking-[0.3em] ml-1"
            >
              Nurturing Future Leaders
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
