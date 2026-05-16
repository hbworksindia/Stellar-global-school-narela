import { motion } from 'motion/react';
import { ArrowRight, Star, ShieldCheck, Zap, Users, GraduationCap, Award, BookOpen, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import { SCHOOL_INFO } from '../constants';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect simulation */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://i.ibb.co/rGPHdDN6/small-children-image.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-secondary font-bold text-sm tracking-wider uppercase">
              <Star size={16} fill="currentColor" /> Trustworthy Education since day one
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">
              Building Strong <span className="text-secondary">Foundations</span> for Future Leaders
            </h1>
            <p className="text-xl text-white/80 max-w-xl font-sans leading-relaxed">
              At Stellar Global School, we nurture creativity, discipline, and academic excellence to help your child reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/admissions" 
                className="bg-secondary text-primary font-bold px-8 py-4 rounded-full shadow-xl hover:bg-white hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                ADMISSIONS OPEN <ArrowRight size={18} />
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all text-center"
              >
                OUR PHILOSOPHY
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block bg-white/5 backdrop-blur-sm p-4 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <div className="bg-white p-8 rounded-[2rem] shadow-inner">
               <h3 className="text-2xl font-display font-bold text-primary mb-2">Admission Enquiry</h3>
               <p className="text-gray-500 mb-8 text-sm">Fill the form below and we'll get back to you within 24 hours.</p>
               <EnquiryForm />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-gray-50 py-10 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, label: "Safety First", sub: "CCTV Monitored Campus" },
              { icon: Zap, label: "Smart Learning", sub: "Digital Classrooms" },
              { icon: Users, label: "Expert Faculty", sub: "Caring Educators" },
              { icon: Award, label: "Overall Growth", sub: "Holistic Development" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{item.label}</h4>
                  <p className="text-gray-500 text-xs">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000" 
                alt="School building" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Experience Box */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 bg-secondary p-8 rounded-3xl shadow-2xl z-20 hidden md:block"
            >
              <div className="text-primary font-display font-bold">
                <span className="text-6xl block leading-none tracking-tighter">10+</span>
                <span className="text-lg uppercase tracking-widest mt-2 block">Years of Excellence</span>
              </div>
            </motion.div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </div>
          
          <div className="space-y-8">
            <SectionHeading 
              title="A Legacy of Academic Excellence & Integrity" 
              subtitle="Welcome to our School" 
              centered={false} 
            />
            <p className="text-gray-600 leading-relaxed text-lg font-sans">
              Stellar Global School is more than just an educational institution; it's a family where every child is encouraged to explore their curiosity and build a path toward success. Located in the heart of Narela, we have been providing premium primary education that combines modern techniques with traditional values.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "CBSE Pattern Curriculum",
                "Qualified & Empathetic Teachers",
                "Focus on Individual Attention",
                "Modern Audio-Visual Aids"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="font-semibold text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <Link 
                to="/about" 
                className="group inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors"
              >
                 Discover More About Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Premium Facilities for Your Child's Growth" 
            subtitle="The Best Infrastructure" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Smart Classrooms", 
                desc: "Interactive digital boards and high-tech tools for engaging learning."
              },
              { 
                title: "Safe Transport", 
                desc: "GPS-enabled comfortable transport with trained attendants."
              },
              { 
                title: "Play Area", 
                desc: "Safe and spacious playground for sports and physical activities."
              },
              { 
                title: "CCTV Campus", 
                desc: "24/7 surveillance and security guards for complete peace of mind."
              },
              { 
                title: "Activity Hub", 
                desc: "Multipurpose rooms for art, dance, music, and yoga sessions."
              },
              { 
                title: "Medical Room", 
                desc: "Equipped first-aid room with professional medical support available."
              }
            ].map((fac, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-all duration-500"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{fac.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/facilities" 
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all shadow-lg"
            >
              Explore All Facilities <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, count: "500+", label: "Happy Students" },
              { icon: GraduationCap, count: "15+", label: "Expert Educators" },
              { icon: BookOpen, count: "100%", label: "Result Track" },
              { icon: Zap, count: "50+", label: "Events & Competitions" }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-secondary mx-auto mb-4">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-display font-bold text-white">{stat.count}</div>
                <div className="text-white/60 font-medium uppercase tracking-[0.2em] text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
       <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <SectionHeading 
                title="Why Stellar Global School is the Perfect Choice" 
                subtitle="Nurturing Brilliance" 
                centered={false} 
              />
              <div className="space-y-6">
                {[
                  { title: "Individual Mentorship", desc: "Small class sizes ensure every child gets the attention they deserve." },
                  { title: "Value-Based Curriculum", desc: "Incorporating moral values, discipline, and Indian culture with global outlook." },
                  { title: "Modern Pedagogy", desc: "Experience activity-based learning that makes education fun and effective." },
                  { title: "Parent-School Connect", desc: "Regular updates and workshops to keep parents involved in child development." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary font-bold shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=500" className="w-full h-80 object-cover rounded-[2rem] shadow-xl" alt="student 1" />
                <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=500" className="w-full h-60 object-cover rounded-[2rem] shadow-xl" alt="student 2" />
              </div>
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&q=80&w=500" className="w-full h-60 object-cover rounded-[2rem] shadow-xl" alt="student 3" />
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=500" className="w-full h-80 object-cover rounded-[2rem] shadow-xl" alt="student 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials Carousel Placeholder */}
       <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Voices of Happy Parents" 
            subtitle="Parent Testimonials" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
            {[
              { name: "Anjali Mehta", role: "Parent of Class 2 Student", text: "The growth I see in my daughter is phenomenal. Not just in academics, but in her confidence and social skills." },
              { name: "Vikram Singh", role: "Parent of Nursery Student", text: "Stellar Global feels like a second home for my toddler. The staff is incredibly caring and the environment is very safe." },
              { name: "Suman Sharma", role: "Parent of Class 5 Student", text: "Choosing Stellar Global was our best decision. The smart labs and activity-based learning are unique." }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-center sm:justify-start text-secondary">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">"{test.text}"</p>
                </div>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-50 pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {test.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{test.name}</h5>
                    <p className="text-gray-500 text-xs">{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="text-primary font-bold hover:underline">Read more success stories</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[3.5rem] p-8 md:p-20 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-8 text-white">
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight">Shape Your Child's Future Today</h2>
              <p className="text-white/70 text-lg md:text-xl font-sans">
                Admissions are open for session 2026-27 from Nursery to Class 5. Limited seats available for personalized attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/admissions" 
                  className="bg-secondary text-primary font-bold px-10 py-5 rounded-full hover:bg-white hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-2"
                >
                  Apply Online Now <ArrowRight size={20} />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-10 py-5 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                >
                   Visit Campus
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 pt-10 text-white/50 text-sm font-bold uppercase tracking-widest border-t border-white/10">
                <div className="flex items-center gap-2"><MapPin size={16} /> Narela, Delhi</div>
                <div className="flex items-center gap-2"><Phone size={16} /> {SCHOOL_INFO.phone}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
