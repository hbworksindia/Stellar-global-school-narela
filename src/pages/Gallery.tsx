import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { cn } from '../lib/utils';
import { Maximize2, Play } from 'lucide-react';

const CATEGORIES = ["All", "Events", "Sports", "Classroom", "Campus", "Celebrations"];

const GALLERY_IMAGES = [
  { id: 1, category: "Campus", image: "https://i.ibb.co/TDL2MqNF/steller-global-school-narela.webp", title: "Stellar Global School Campus" },
  { id: 2, category: "Classroom", image: "https://i.ibb.co/Pzz8nXh1/2026-04-05.webp", title: "Interactive Learning Sessions" },
  { id: 3, category: "Classroom", image: "https://i.ibb.co/JwkhwVZs/2026-04-05-1.webp", title: "Smart Education in Progress" },
  { id: 4, category: "Events", image: "https://i.ibb.co/PsPrSfNt/2026-04-05-2.webp", title: "School Celebration Event" },
  { id: 5, category: "Celebrations", image: "https://i.ibb.co/1f4S2T6j/2026-04-05-3.webp", title: "Student Achievement Moments" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = activeCategory === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="Visualizing Success" 
        subtitle="A glimpse into the vibrant world of Stellar Global School. Moments of joy, learning, and celebration captured forever."
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Moments That Matter" 
            subtitle="Our Photo Gallery" 
          />

          {/* Filtering System */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-xl scale-105" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry-style Gallery Grid */}
          <motion.div 
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative group cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="overflow-hidden rounded-[2.5rem] shadow-xl border border-gray-100 relative">
                     <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-1000" 
                    />
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <div className="text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                          <Maximize2 className="text-white mx-auto mb-4" size={32} />
                          <h4 className="text-white font-display font-bold text-xl">{item.title}</h4>
                          <span className="text-secondary text-xs uppercase font-bold tracking-widest mt-2 block">{item.category}</span>
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
           <SectionHeading 
            title="Experience the Energy in Motion" 
            subtitle="Video Gallery" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map(v => (
              <div key={v} className="relative group rounded-[3.5rem] overflow-hidden shadow-2xl aspect-video">
                <img 
                  src={`https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200`} 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                   <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={32} fill="currentColor" />
                   </div>
                </div>
                <div className="absolute bottom-10 left-10 text-white">
                   <h4 className="text-2xl font-display font-bold">Annual Function Highlights</h4>
                   <p className="text-white/70 text-sm">Session 2024-25 • Cinematic Recap</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-20"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-6xl w-full text-center space-y-4"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="w-full h-auto max-h-[80vh] object-contain rounded-3xl"
              />
              <h3 className="text-3xl font-display font-bold text-white mt-8">{selectedImage.title}</h3>
              <p className="text-secondary font-bold uppercase tracking-widest text-sm">{selectedImage.category}</p>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-10 right-10 text-white hover:text-secondary p-2 transition-colors"
              >
                <Maximize2 size={40} className="rotate-45" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
