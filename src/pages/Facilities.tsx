import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Monitor, BookOpen, ShieldCheck, Bus, Map, HeartPulse, Laptop, Waves } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Facilities() {
  const facilityList = [
    {
      title: "Smart Classrooms",
      icon: Monitor,
      desc: "Our classrooms are equipped with interactive smart boards and high-definition projectors to facilitate digital learning and engagement.",
      image: "https://images.unsplash.com/photo-1544648181-3bf43c545be7?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Secure Campus",
      icon: ShieldCheck,
      desc: "The entire premises are under 24/7 CCTV surveillance, with gated security and visitor management systems for maximum safety.",
      image: "https://images.unsplash.com/photo-1557597774-9d2739fa88f9?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "GPS Enabled Transport",
      icon: Bus,
      desc: "A fleet of modern buses with GPS tracking and trained female attendants ensures a safe commute for every student.",
      image: "https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Discovery Lab",
      icon: Laptop,
      desc: "Modern computer labs and activity centers where kids learn basics of computing and digital literacy in a fun environment.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Creative Arts Hub",
      icon: Waves,
      desc: "Dedicated spaces for music, dance, and fine arts where students can explore their hidden talents and express creativity.",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Holistic Health Center",
      icon: HeartPulse,
      desc: "An in-house medical room with first-aid facilities and regular health check-ups by professional pediatricians.",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="Modern Campus Infrastructure" 
        subtitle="A space designed for comfort, security, and inspiration. Every corner at Stellar Global is built with a purpose."
        image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="World-Class Facilities for Your Child" 
            subtitle="Explore our campus" 
          />
          <div className="space-y-32">
            {facilityList.map((fac, i) => (
              <div 
                key={i} 
                className={cn(
                  "flex flex-col items-center gap-12 lg:gap-20",
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                )}
              >
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2"
                >
                  <div className="relative group">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
                      <img 
                        src={fac.image} 
                        alt={fac.title} 
                        className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                    {/* Floating Accent */}
                    <div className={cn(
                      "absolute -bottom-6 w-24 h-24 bg-secondary rounded-full z-20 flex items-center justify-center text-primary shadow-xl",
                      i % 2 === 0 ? "-right-6" : "-left-6"
                    )}>
                      <fac.icon size={40} />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 space-y-6"
                >
                  <div className="flex items-center gap-4 text-primary">
                    <span className="text-5xl font-serif font-black opacity-10">0{i + 1}</span>
                    <div className="h-0.5 flex-grow bg-gray-100" />
                  </div>
                  <h3 className="text-4xl font-display font-bold text-gray-900">{fac.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-sans">
                    {fac.desc}
                  </p>
                  <ul className="grid grid-cols-2 gap-4 pt-4">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Premium Standard</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10">
           <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-secondary font-bold text-sm tracking-widest uppercase border border-white/10">
                <ShieldCheck size={16} /> Campus Safety Protocol
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
                Your Child's Safety is Our <span className="text-secondary">Highest</span> Priority.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                 {[
                   { t: "Verified Staff", d: "Strict background checks for all academic and support staff members." },
                   { t: "Child-Safety", d: "Furniture and facilities designed specifically for early childhood ergonomics." },
                   { t: "Zero-Tolerance", d: "A strict anti-bullying and safe interaction policy across all age groups." }
                 ].map((item, i) => (
                   <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left space-y-4">
                      <h4 className="text-xl font-display font-bold text-white">{item.t}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}
