import { MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';
import { motion } from 'motion/react';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/91${SCHOOL_INFO.whatsapp.replace(/\s+/g, '')}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <div className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with Admissions
      </div>
      <MessageCircle size={28} />
    </motion.a>
  );
}
