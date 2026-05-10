import React from 'react';
import { motion } from 'motion/react';
import { 
  ClipboardCheck, 
  MapPin, 
  Calendar, 
  FileText, 
  UserCheck, 
  PhoneCall,
  Clock,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { SectionHeading } from './Home';
import { CONTACT_INFO } from '@/constants';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000" 
        alt="Admission" 
        className="w-full h-full object-cover opacity-20 grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary" />
    </div>
    
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Join our Community</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Admissions <span className="text-gold">Process</span> <br />
          2024 - 2025
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const ProcessStep = ({ number, title, desc, icon: Icon, delay = 0 }: any) => (
   <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="flex gap-8 relative group"
   >
      <div className="flex flex-col items-center">
         <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center border-4 border-slate-50 shadow-xl relative z-10 group-hover:border-gold transition-all duration-500">
            <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-black text-sm border-4 border-white shadow-lg">
               0{number}
            </div>
         </div>
         <div className="w-[2px] flex-grow bg-gold/20 my-4" />
      </div>
      <div className="pt-2 pb-16">
         <h4 className="text-2xl font-black text-primary mb-3 uppercase tracking-tight">{title}</h4>
         <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-lg">{desc}</p>
      </div>
   </motion.div>
);

const Admissions = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-24">
               {/* Steps */}
               <div className="lg:w-1/2">
                  <SectionHeading title="Steps to Success" subtitle="Registration Guide" centered={false} />
                  <div className="mt-12">
                     <ProcessStep 
                        number={1} 
                        title="Registration Enquiry" 
                        desc="Start by filling out our online inquiry form or visit our campus in Lachhiya for an initial consultation." 
                        icon={ClipboardCheck}
                     />
                     <ProcessStep 
                        number={2} 
                        title="Campus Interaction" 
                        desc="Schedule a personalized tour and interaction session with our academic team to understand the environment." 
                        icon={MapPin}
                        delay={0.1}
                     />
                     <ProcessStep 
                        number={3} 
                        title="Entrance Evaluation" 
                        desc="Age-appropriate evaluation for students to assess their social, emotional, and academic potential." 
                        icon={ShieldCheck}
                        delay={0.2}
                     />
                     <ProcessStep 
                        number={4} 
                        title="Document Submission" 
                        desc="Complete the formal application by submitting previous school records, birth certificates, and ID proofs." 
                        icon={FileText}
                        delay={0.3}
                     />
                  </div>
               </div>

               {/* Form */}
               <div className="lg:w-1/2 relative">
                  <motion.div 
                     whileHover={{ y: -10 }}
                     className="bg-primary p-12 md:p-16 rounded-[4rem] shadow-2xl relative z-10 border-b-8 border-gold"
                  >
                     <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">Admission Enquiry</h3>
                     <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                              <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Student Name</label>
                              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none" placeholder="Full Name" />
                           </div>
                           <div>
                              <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Applying For Grade</label>
                              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none appearance-none">
                                 <option className="text-primary">Playgroup</option>
                                 <option className="text-primary">Nursery</option>
                                 <option className="text-primary">Grade 1-5</option>
                                 <option className="text-primary">Grade 6-10</option>
                              </select>
                           </div>
                        </div>
                        <div>
                           <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Parent/Guardian Name</label>
                           <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none" placeholder="Full Name" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <div>
                              <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Primary Phone</label>
                              <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none" placeholder="+91" />
                           </div>
                           <div>
                              <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Email Address</label>
                              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none" placeholder="example@mail.com" />
                           </div>
                        </div>
                        <div>
                           <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">Message / Inquiry</label>
                           <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none resize-none" placeholder="How can we help?"></textarea>
                        </div>
                        <motion.button 
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           className="w-full bg-gold text-primary font-black uppercase tracking-widest text-xs py-6 rounded-[2rem] shadow-2xl flex items-center justify-center gap-4 hover:bg-white transition-all"
                        >
                           Submit Application <ArrowRight className="w-5 h-5" />
                        </motion.button>
                     </form>
                  </motion.div>
                  
                  {/* Decorative */}
                  <div className="absolute top-20 -right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -z-0" />
               </div>
            </div>
         </div>
      </section>

      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Helpful Information" subtitle="Key Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {[
                  { title: "Age Criteria", items: ["Nursery: 3+ Years", "LKG: 4+ Years", "UKG: 5+ Years", "Grade 1: 6+ Years"], icon: UserCheck },
                  { title: "Documents Needed", items: ["Birth Certificate (Original)", "Previous Progress Report", "Passport size photos (4)", "Aadhar Card of Student"], icon: FileText },
                  { title: "Office Hours", items: ["Mon - Fri: 8:00 AM - 4:00 PM", "Saturday: 8:30 AM - 1:00 PM", "Sundays: Closed for visitors", "Help Desk: 24/7 Support"], icon: Clock },
               ].map((box, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100 group hover:bg-primary transition-all duration-500 overflow-hidden relative"
                  >
                     <div className="relative z-10">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-gold transition-all duration-500">
                           <box.icon className="w-8 h-8 text-primary group-hover:text-primary" />
                        </div>
                        <h4 className="text-2xl font-black text-primary mb-8 group-hover:text-white uppercase tracking-tight">{box.title}</h4>
                        <ul className="space-y-4">
                           {box.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 font-medium">
                                 <CheckCircle2 className="w-4 h-4 text-gold" />
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <box.icon className="w-40 h-40 text-primary" />
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gold rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tighter uppercase">Download prospectus</h2>
                  <p className="text-primary/70 text-xl font-bold max-w-xl">Get detailed information about our curriculum, faculty, and campus lifestyle in our latest digital brochure.</p>
               </div>
               <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-primary text-white p-10 rounded-full shadow-2xl flex items-center justify-center group relative z-10"
               >
                  <Download className="w-10 h-10 group-hover:animate-bounce" />
               </motion.button>
               
               {/* Design element */}
               <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                  <span className="text-[15rem] font-black uppercase text-primary -mr-20 leading-none">PDF</span>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

export default Admissions;
