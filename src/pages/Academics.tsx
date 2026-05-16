import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { BookOpen, Palette, Music, Dumbbell, Globe, Monitor, Users, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Academics() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="Nurturing Academic Excellence" 
        subtitle="A holistic approach to learning that balances core academics with creative exploration."
        image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Curriculum Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeading 
                title="Curriculum Beyond Textbooks" 
                subtitle="Learning Pedagogy" 
                centered={false} 
              />
              <p className="text-gray-600 leading-relaxed text-lg">
                Our academic framework is designed according to the latest CBSE guidelines, focused on **National Education Policy (NEP) 2020** principles. We believe in "Learning by Doing," where concepts are introduced through hands-on activities, storytelling, and digital interaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "Activity-Based Learning" },
                  { icon: Monitor, text: "Digital Smart Classes" },
                  { icon: Globe, text: "Global Communication" },
                  { icon: Users, text: "Peer Collaboration" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                    <item.icon size={20} className="text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-gray-700 text-sm italic">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=800" 
                alt="Kid reading" 
                className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Program Tiers */}
       <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Tailored Programs for Every Milestone" 
            subtitle="Foundation Stages" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Pre-Primary (Nursery - UKG)", 
                focus: "Play, Social Skills, Motor Development",
                desc: "Our early learners explore the world through play-way methods. We focus on phonics, basic numeracy, and fostering a love for school.",
                bg: "bg-white"
              },
              { 
                title: "Primary (Class 1 - 2)", 
                focus: "Literacy, Numeracy, Curiosity",
                desc: "Transitioning to formal education with focus on reading proficiency, logical thinking, and environmental consciousness.",
                bg: "bg-primary text-white"
              },
              { 
                title: "Elementary (Class 3 - 5)", 
                focus: "Independence, Analysis, Excellence",
                desc: "Building a solid conceptual foundation in core subjects while encouraging self-expression and project-based learning.",
                bg: "bg-white"
              }
            ].map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-12 rounded-[3.5rem] shadow-xl space-y-6 flex flex-col",
                  tier.bg
                )}
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-lg">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold leading-tight">{tier.title}</h3>
                <div className="text-secondary font-bold text-xs uppercase tracking-widest">{tier.focus}</div>
                <p className={cn(
                  "text-sm leading-relaxed",
                  tier.bg.includes('primary') ? "text-white/70" : "text-gray-500"
                )}>
                  {tier.desc}
                </p>
                <div className="pt-4 mt-auto">
                   <div className={cn(
                     "h-1 w-20 rounded-full",
                     tier.bg.includes('primary') ? "bg-white/20" : "bg-primary/10"
                   )} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular & Specialities */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Beyond the Classroom" 
            subtitle="Holistic Development" 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Palette, title: "Art & Craft", color: "bg-orange-100 text-orange-600" },
              { icon: Music, title: "Dance & Music", color: "bg-purple-100 text-purple-600" },
              { icon: Dumbbell, title: "Sports & Yoga", color: "bg-blue-100 text-blue-600" },
              { icon: BookOpen, title: "Public Speaking", color: "bg-green-100 text-green-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-6 p-10 rounded-[3rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className={cn("w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-lg transition-transform", item.color)}>
                  <item.icon size={32} />
                </div>
                <h4 className="font-display font-bold text-primary group-hover:text-secondary">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Learning Banner */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-[4rem] p-12 md:p-24 relative overflow-hidden text-center text-white">
            <div className="max-w-3xl mx-auto space-y-8 relative z-10">
               <h3 className="text-4xl md:text-5xl font-display font-bold">Experiential Learning with Global Standards</h3>
               <p className="text-white/70 text-lg leading-relaxed">
                 We incorporate modern educational tools like 3D visualizations, interactive coding for kids, and language labs to ensure your child stays ahead in an increasingly digital world.
               </p>
               <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-white/10">
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-display font-bold text-secondary italic">Smart</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Boards</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-display font-bold text-secondary italic">AV</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Library</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-3xl font-display font-bold text-secondary italic">Kids</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/50">Computing</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
