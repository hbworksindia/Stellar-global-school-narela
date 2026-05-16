import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Quote, Star, UserCircle2, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Reema Kohli",
      role: "Mother of Advay (Class 3)",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      text: "Joining Stellar Global was a life-changing decision for my son. His fear of mathematics turned into curiosity, thanks to the wonderful teachers and their creative teaching methods.",
      tag: "Academic Growth"
    },
    {
      name: "Mr. Sandeep Tyagi",
      role: "Father of Ishani (Nursery)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      text: "The safety measures at the school are top-notch. Being working parents, we are always at peace knowing our child is in a secure and caring environment with live GPS bus tracking.",
      tag: "Campus Safety"
    },
    {
      name: "Mrs. Preeti Bansal",
      role: "Mother of Vivaan (Class 5)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      text: "What stands out most is the focus on extracurricular activities. My daughter has developed a profound interest in Indian classical dance, guided by expert mentors at school.",
      tag: "Holistic Development"
    },
    {
      name: "Mr. Deepak Rawat",
      role: "Father of Myra (LKG)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      text: "The smart class facility makes learning very visual and easy for toddlers. The digital curriculum is much better than traditional schools I've seen in the area.",
      tag: "Smart Learning"
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
        title="Success Stories" 
        subtitle="The true measure of our success is the growth and happiness of our students and the trust of our parents."
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Parents Say About Us" 
            subtitle="Parent Testimonials" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {testimonials.map((test, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 md:p-14 rounded-[4rem] shadow-2xl border border-gray-100 flex flex-col relative overflow-hidden group hover:bg-primary transition-all duration-500"
              >
                <div className="absolute top-10 right-10 text-primary opacity-5 group-hover:text-white transition-colors duration-500">
                   <Quote size={120} />
                </div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex gap-1 text-secondary mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-xl italic text-gray-600 font-serif leading-relaxed mb-10 group-hover:text-white/80 transition-colors duration-500">
                    "{test.text}"
                  </p>
                  <div className="mt-auto flex items-center gap-6">
                    <img src={test.image} className="w-16 h-16 rounded-3xl object-cover shadow-lg border-2 border-white" alt={test.name} />
                    <div>
                      <h4 className="text-xl font-display font-bold text-primary group-hover:text-white transition-colors duration-500">{test.name}</h4>
                      <p className="text-sm font-bold text-secondary uppercase tracking-widest">{test.role}</p>
                    </div>
                  </div>
                  <div className="absolute top-10 left-10">
                    <span className="px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-widest border border-secondary/20 group-hover:bg-white group-hover:text-primary transition-colors duration-500">
                       {test.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Section Recap */}
      <section className="py-24 bg-primary rounded-t-[5rem] overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-16">
           <h2 className="text-4xl md:text-6xl font-display font-bold text-white">Trusted by 500+ Families</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                 <div className="text-7xl font-display font-bold text-secondary italic">98%</div>
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">Parent Satisfaction Rate</h4>
              </div>
              <div className="space-y-4">
                 <div className="text-7xl font-display font-bold text-secondary italic">100%</div>
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">Safety Compliance</h4>
              </div>
              <div className="space-y-4">
                 <div className="text-7xl font-display font-bold text-secondary italic">12+</div>
                 <h4 className="text-white font-bold uppercase tracking-widest text-xs">Annual Awards Received</h4>
              </div>
           </div>
        </div>
      </section>

      {/* Trust Builder Final Block */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800" className="rounded-[4rem] shadow-2xl" alt="trust" />
             </div>
             <div className="lg:w-1/2 space-y-8">
                <SectionHeading 
                  title="Why We Stand Out from Other Schools" 
                  subtitle="Trust Is Earned" 
                  centered={false} 
                />
                <div className="space-y-6">
                   {[
                     "Direct access to Principal and Management for every parent.",
                     "Customized growth plans for children with unique needs.",
                     "State-of-the-art security with live updates.",
                     "Activity-driven evaluation instead of pressure-based grading."
                   ].map((point, i) => (
                     <div key={i} className="flex gap-4 items-center">
                       <CheckCircle2 className="text-secondary shrink-0" size={24} />
                       <p className="text-lg font-sans text-gray-700 font-medium">{point}</p>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
