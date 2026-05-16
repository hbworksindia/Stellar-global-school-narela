import { motion } from 'motion/react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import EnquiryForm from '../components/EnquiryForm';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { SCHOOL_INFO } from '../constants';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

function SchoolMap() {
  if (!API_KEY) {
    return (
      <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative bg-gray-100 flex items-center justify-center p-8 text-center">
        <div className="space-y-4 max-w-md">
           <MapPin size={48} className="text-primary mx-auto opacity-20" />
           <p className="text-gray-500 font-sans italic">
             Interactive map is currently unavailable. Please visit us at our address below or use the Google Maps link.
           </p>
           <a 
            href={SCHOOL_INFO.mapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary font-bold hover:underline"
           >
             Open in Google Maps
           </a>
        </div>
        {/* Fallback Static Map or Iframe could go here */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.593717544074!2d77.0923!3d28.8524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da97e0fc2537f%3A0x6339df900b74966!2sStellar%20Global%20School!5e0!3m2!1sen!2sin!4v1715830000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, position: 'absolute', inset: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] rounded-[3rem] overflow-hidden shadow-2xl relative">
      <APIProvider apiKey={API_KEY}>
        <Map
          defaultCenter={SCHOOL_INFO.coordinates}
          defaultZoom={15}
          mapId="STELLAR_MAP"
          style={{ width: '100%', height: '100%' }}
        >
          <AdvancedMarker position={SCHOOL_INFO.coordinates}>
            <Pin background="#003366" glyphColor="#D4AF37" borderColor="#D4AF37" />
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
}

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="bg-white"
    >
      <PageHero 
        title="Stay Connected With Us" 
        subtitle="Have questions? Our team is here to help you. Visit our campus or reach out via any of the channels below."
        image="https://images.unsplash.com/photo-1534067783941-51c9c23eccfd?auto=format&fit=crop&q=80&w=1920"
      />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Details Cards */}
            <div className="lg:col-span-1 space-y-8">
              <SectionHeading 
                title="Contact Details" 
                subtitle="Get in touch" 
                centered={false} 
              />
              
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Our Location", data: SCHOOL_INFO.address, action: "View Direction", link: SCHOOL_INFO.mapsLink },
                  { icon: Phone, title: "Phone Support", data: SCHOOL_INFO.phone, action: "Call Now", link: `tel:${SCHOOL_INFO.phone}` },
                  { icon: Mail, title: "Email Support", data: SCHOOL_INFO.email, action: "Email Us", link: `mailto:${SCHOOL_INFO.email}` },
                  { icon: Clock, title: "Office Hours", data: "Mon - Sat: 8:00 AM - 2:00 PM", action: "Nursery to Class 5", link: "#" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex gap-6 group hover:bg-white hover:shadow-xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-display font-bold text-primary">{item.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{item.data}</p>
                      <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} className="text-xs font-bold text-secondary uppercase tracking-widest inline-block pt-2 hover:underline">
                        {item.action}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h4 className="font-display font-bold text-gray-900 mb-6 uppercase tracking-[0.2em] text-xs">Follow Our Updates</h4>
                <div className="flex gap-4">
                  {['Facebook', 'Instagram', 'Youtube'].map(s => (
                    <a key={s} href="#" className="px-6 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map & Form Area */}
            <div className="lg:col-span-2 space-y-12">
              <SchoolMap />
              
              <div className="bg-primary p-10 md:p-20 rounded-[4rem] text-white">
                 <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/2 space-y-6">
                       <SectionHeading 
                        title="Send Us a Message" 
                        subtitle="Online Enquiry" 
                        centered={false} 
                        light 
                        className="mb-0 md:mb-0"
                      />
                      <p className="text-white/60 leading-relaxed">
                        Fill out the form and our admissions office will reach out to schedule a campus visit for you and your child.
                      </p>
                      <div className="flex items-center gap-4 pt-6">
                         <div className="p-4 rounded-2xl bg-secondary/20 text-secondary">
                            <MessageSquare size={32} />
                         </div>
                         <div>
                            <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Speak Directly</p>
                            <p className="text-lg font-bold">093109 63631</p>
                         </div>
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                       <EnquiryForm className="bg-white/5 backdrop-blur-md border-white/10" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
