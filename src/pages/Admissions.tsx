import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import { ClipboardCheck, Calendar, FileText, UserCheck, PhoneCall, HelpCircle, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';

export default function Admissions() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="Admissions 2026-27" 
        subtitle="Embark on an extraordinary educational journey. Your child's future at Stellar Global School starts here."
        image="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1920"
      />

      {/* Admission Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Simple & Transparent Process" 
            subtitle="Step by Step Guide" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-primary/20 -z-10" />
            
            {[
              { icon: FileText, title: "Registration", desc: "Submit the online enquiry form or visit our campus for a physical form." },
              { icon: PhoneCall, title: "Counseling", desc: "Our admission counselor will guide you through the curriculum and school tour." },
              { icon: UserCheck, title: "Interaction", desc: "A friendly interaction with the child and parents to understand current needs." },
              { icon: ClipboardCheck, title: "Enrollment", desc: "Complete the documentation and secure your child's seat in the stellar family." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center text-primary mx-auto mb-8 relative group-hover:bg-primary group-hover:text-white transition-all duration-500 border border-gray-50">
                  <step.icon size={36} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center text-sm shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl border border-gray-100">
               <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                    <Calendar size={28} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary">Age Eligibility</h3>
               </div>
               <div className="space-y-6">
                 {[
                   { class: "Nursery", age: "3+ Years as on 31st March" },
                   { class: "LKG", age: "4+ Years as on 31st March" },
                   { class: "UKG", age: "5+ Years as on 31st March" },
                   { class: "Class 1", age: "6+ Years as on 31st March" }
                 ].map((item, i) => (
                   <div key={i} className="flex justify-between items-center p-4 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all">
                     <span className="font-bold text-gray-700">{item.class}</span>
                     <span className="text-primary font-medium text-sm px-4 py-1.5 rounded-full bg-white border border-gray-100">{item.age}</span>
                   </div>
                 ))}
               </div>
            </div>

            {/* Documents */}
            <div className="bg-primary p-10 md:p-12 rounded-[3.5rem] shadow-xl text-white">
               <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 rounded-2xl bg-white/10 text-secondary">
                    <FileText size={28} />
                  </div>
                  <h3 className="text-3xl font-display font-bold">Required Documents</h3>
               </div>
               <ul className="space-y-6">
                 {[
                   "Original Birth Certificate for verification",
                   "Photocopy of Aadhar Card (Student & Parents)",
                   "Recent passport size photographs (Student - 4, Parents - 2)",
                   "Transfer Certificate (if applicable for Class 2+)",
                   "Medical Fitness Certificate from a Pediatrician",
                   "Previous Class Report Card (if applicable)"
                 ].map((doc, i) => (
                   <li key={i} className="flex items-start gap-4">
                     <div className="mt-1">
                        <ArrowRight size={16} className="text-secondary" />
                     </div>
                     <span className="text-white/80 font-sans">{doc}</span>
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Split Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 rounded-[4rem] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-20 space-y-8">
                <SectionHeading 
                  title="Secure Your Child's Future Today" 
                  subtitle="Enquire Now" 
                  centered={false} 
                />
                <p className="text-gray-600 leading-relaxed text-lg">
                  Admissions for our Nursery to Class 5 programs are currently open. We maintain small class sizes to ensure personalized attention for every child. 
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-primary">
                    <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none">Admission Helpline</p>
                      <p className="text-xl font-display font-bold">{SCHOOL_INFO.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                   <a 
                    href={`https://wa.me/91${SCHOOL_INFO.whatsapp.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all"
                   >
                     Direct Chat with Counselor
                   </a>
                </div>
              </div>
              <div className="bg-primary p-10 md:p-20 flex flex-col justify-center">
                <h3 className="text-2xl font-display font-bold text-white mb-8">Send Online Enquiry</h3>
                <EnquiryForm className="shadow-none border-none bg-white/5 backdrop-blur-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading 
            title="Common Admission Questions" 
            subtitle="FAQ" 
          />
          <div className="space-y-4">
            {[
              { q: "What is the teacher-student ratio?", a: "We maintain a student-teacher ratio of 15:1 to ensure every child receives individual attention and guidance." },
              { q: "Do you have school transport facilities?", a: "Yes, we provide safe and secure GPS-enabled bus services across Narela and nearby sectors with female attendants on every route." },
              { q: "Is the school affiliated to CBSE?", a: "We follow the CBSE pattern curriculum, designed to foster holistic development and prepare students for senior school transitions." },
              { q: "Are extracurricular activities included in the fee?", a: "Basic sports, arts, and music activities are part of the core curriculum. Special academy sessions might have additional charges." }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-[2rem] p-6 border border-gray-100 open:bg-white transition-all duration-300">
                <summary className="flex items-center justify-between list-none cursor-pointer">
                  <h4 className="text-lg font-display font-bold text-primary flex items-center gap-4">
                    <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm shadow-sm group-open:bg-primary group-open:text-white transition-all">{i+1}</span>
                    {faq.q}
                  </h4>
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary group-open:rotate-180 transition-transform shadow-sm">
                    <ArrowRight size={18} className="rotate-90" />
                  </div>
                </summary>
                <div className="mt-4 px-12 text-gray-500 leading-relaxed font-sans">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
