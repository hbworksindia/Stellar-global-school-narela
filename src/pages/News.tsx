import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { Calendar, Bell, ArrowRight, BookOpen, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const NEWS_UPDATES = [
  {
    id: 1,
    title: "Admissions Open for Session 2026-27",
    date: "May 15, 2026",
    category: "Announcement",
    excerpt: "Admissions are now open for Nursery to Class 5. Parents can register online or visit the campus office.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Annual Sports Day Highlights",
    date: "April 28, 2026",
    category: "Events",
    excerpt: "Our young athletes showcased incredible spirit and talent at the annual sports meet. View full gallery.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Smart Literacy Workshop for Parents",
    date: "April 12, 2026",
    category: "Workshop",
    excerpt: "Join us for an interactive session on how to support your child's digital learning at home.",
    image: "https://images.unsplash.com/photo-1544648181-3bf43c545be7?auto=format&fit=crop&q=80&w=800"
  }
];

export default function News() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="School News & Events" 
        subtitle="Keep up with the latest announcements, events, and highlights from Stellar Global School."
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main News Feed */}
            <div className="lg:col-span-2 space-y-12">
               <SectionHeading 
                title="Latest Updates" 
                subtitle="Stay Informed" 
                centered={false} 
              />
              
              <div className="space-y-12">
                {NEWS_UPDATES.map((post) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row"
                  >
                    <div className="md:w-2/5 overflow-hidden">
                       <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                       />
                    </div>
                    <div className="md:w-3/5 p-8 md:p-12 space-y-4">
                       <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-primary/50">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                          <span className="w-1 h-1 rounded-full bg-secondary" />
                          <span className="text-secondary">{post.category}</span>
                       </div>
                       <h3 className="text-2xl md:text-3xl font-display font-bold text-primary group-hover:text-secondary transition-colors italic">
                        {post.title}
                       </h3>
                       <p className="text-gray-500 leading-relaxed font-sans text-sm md:text-base">
                        {post.excerpt}
                       </p>
                       <div className="pt-4">
                          <Link to="/news" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all">
                            Read Full Story <ArrowRight size={18} />
                          </Link>
                       </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar Notices */}
            <div className="lg:col-span-1">
               <aside className="sticky top-32 space-y-8">
                  {/* Notice Board */}
                  <div className="bg-primary p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                     <h4 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
                       <Bell size={24} className="text-secondary" /> Notice Board
                     </h4>
                     <ul className="space-y-8">
                        {[
                          "Last date for term 1 exams registration is June 10th.",
                          "Parent-Teacher Meeting (PTM) scheduled for June 15th.",
                          "New school bus route added for Sector 8, Narela.",
                          "Summer camp registrations for July are now open."
                        ].map((notice, i) => (
                          <li key={i} className="flex items-start gap-4 border-b border-white/10 pb-6 last:border-0 last:pb-0">
                             <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-secondary" />
                             <p className="text-sm text-white/70 leading-relaxed font-sans italic">{notice}</p>
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* Brochure CTA */}
                  <div className="bg-secondary p-10 rounded-[3rem] text-primary shadow-2xl flex flex-col items-center text-center space-y-6">
                     <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                        <BookOpen size={32} />
                     </div>
                     <h4 className="text-2xl font-display font-bold italic">School Prospectus</h4>
                     <p className="text-primary/70 text-sm font-sans font-medium leading-relaxed">
                       Download our comprehensive guide to curriculum, fees, and campus life.
                     </p>
                     <button className="bg-primary text-white font-bold px-10 py-3 rounded-full hover:scale-105 transition-all shadow-xl">
                       DOWNLOAD PDF
                     </button>
                  </div>
               </aside>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
}
