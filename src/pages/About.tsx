import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Target, Heart, Eye, Users, ShieldCheck, Sun, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="About Stellar Global" 
        subtitle="Discover our legacy, our mission, and the people who make our school a stellar place for learning."
        image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Intro Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeading 
                title="Empowering the Leaders of Tomorrow" 
                subtitle="School Philosophy" 
                centered={false} 
              />
              <p className="text-gray-600 leading-relaxed text-lg font-sans">
                Stellar Global School was founded with a singular vision: to create an educational environment where children are not just taught, but inspired. We believe that the early years of education (Nursery to Class 5) are the most critical in shaping a child's character and intellectual curiosity.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-sans">
                Our approach integrates the best of modern pedagogical research with time-tested values of discipline, empathy, and integrity. We strive to provide a safe, smart, and nurturing environment where every child feels valued and capable.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&q=80&w=800" 
                alt="Children learning together" 
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[2.5rem] shadow-2xl hidden md:block border border-gray-50">
                <div className="flex items-center gap-6">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                    <Users size={32} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-bold text-primary">15:1</h4>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Student-Teacher Ratio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 flex flex-col items-center text-center space-y-6"
            >
              <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-primary/20">
                <Target size={40} />
              </div>
              <h3 className="text-3xl font-display font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                To provide a high-quality, holistic education that prepares students for academic success while fostering critical thinking, creativity, and moral character in a safe, technologically advanced environment.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-primary p-12 rounded-[3.5rem] shadow-xl border border-white/5 flex flex-col items-center text-center space-y-6 text-white"
            >
              <div className="w-20 h-20 bg-secondary rounded-[2rem] flex items-center justify-center text-primary shadow-2xl shadow-secondary/20">
                <Eye size={40} />
              </div>
              <h3 className="text-3xl font-display font-bold">Our Vision</h3>
              <p className="text-white/70 leading-relaxed font-sans">
                To be the most trusted and premium early-childhood education provider in North Delhi, recognized for producing well-rounded, compassionate, and bright future global citizens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-[4rem] p-10 md:p-20 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
              <div className="lg:col-span-1">
                 <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" 
                      alt="Principal" 
                      className="rounded-[3rem] shadow-2xl w-full h-[450px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 border-2 border-secondary/30 rounded-[3.3rem] translate-x-4 translate-y-4 -z-10" />
                 </div>
                 <div className="mt-8 text-center lg:text-left">
                    <h4 className="text-2xl font-display font-bold text-primary">Dr. Savita Gupta</h4>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Principal's Desk</p>
                 </div>
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="relative">
                   <span className="text-9xl font-serif text-secondary/10 absolute -top-16 -left-8">"</span>
                   <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                    Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
                  </h2>
                </div>
                <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-lg">
                  <p>
                    Dear Parents and Guardians, at Stellar Global School, we are committed to making the foundational years of your child's education truly transformative. We don't just follow a curriculum; we follow the child.
                  </p>
                  <p>
                    Our focus is on three core pillars: **Safety**, **Excellence**, and **Happiness**. When a child feels safe and happy, learning becomes natural. We invite you to be a part of this beautiful journey as your child takes their first steps towards greatness.
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Signature_of_Savita_Gupta.png" className="h-16 opacity-30 grayscale invert" alt="signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values & Ethics" 
            subtitle="The Stellar Way" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Compassion", desc: "Teaching children to be kind, empathetic, and respectful to everyone." },
              { icon: ShieldCheck, title: "Integrity", desc: "Honesty and strong moral principles are the bedrock of our culture." },
              { icon: Sun, title: "Creativity", desc: "Encouraging unconventional thinking and artistic expression in every class." },
              { icon: GraduationCap, title: "Excellence", desc: "Pushing boundaries to achieve the best results in academics and beyond." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500 text-center space-y-6"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-secondary mx-auto">
                  <value.icon size={28} />
                </div>
                <h4 className="text-xl font-display font-bold text-primary">{value.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
