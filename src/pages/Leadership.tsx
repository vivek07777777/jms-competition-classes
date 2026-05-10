import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Home';
import { LEADERSHIP } from '@/constants';
import { Quote, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000" 
        alt="Leadership" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Visionary Pillars</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Our <span className="text-gold">School</span> <br />
          Leadership
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const LeaderCard = ({ leader, idx }: any) => (
   <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col group h-full"
   >
      <div className="aspect-[4/5] relative overflow-hidden">
         <img 
            src={leader.image} 
            alt={leader.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
         <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">{leader.name}</h3>
            <span className="text-gold font-bold uppercase tracking-widest text-[10px]">{leader.role}</span>
         </div>
      </div>
      <div className="p-12 relative flex-grow flex flex-col">
         <div className="absolute top-8 right-8 opacity-[0.05]">
            <Quote className="w-16 h-16 text-primary" />
         </div>
         <p className="text-slate-600 text-lg font-medium leading-relaxed italic mb-10 flex-grow">
            "{leader.description}"
         </p>
         <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
            {[Linkedin, Mail, Twitter].map((Icon, i) => (
               <a key={i} href="#" className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-primary hover:bg-gold hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
               </a>
            ))}
         </div>
      </div>
   </motion.div>
);

const Leadership = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="The Visionaries Behind IPS" subtitle="Guiding the Future" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
               {LEADERSHIP.map((leader, idx) => (
                  <LeaderCard key={idx} leader={leader} idx={idx} />
               ))}
            </div>
         </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24">
               <div className="lg:w-1/2">
                  <SectionHeading title="Leadership Excellence" subtitle="Our Philosophy" centered={false} />
                  <p className="text-slate-600 text-xl font-medium leading-relaxed mb-10">
                     Our leadership team is comprised of seasoned educators and visionaries who are deeply committed to providing an exceptional learning journey for every child. They believe in fostering an environment where innovation is encouraged, character is built, and potential is unleashed.
                  </p>
                  <div className="space-y-6">
                     {["Integrity & Transparency", "Student-First Decisions", "Constant Innovation", "Empowerment Through Education"].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                           <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                              <span className="text-gold font-black">0{idx + 1}</span>
                           </div>
                           <span className="text-primary font-black uppercase text-xs tracking-widest">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-[4rem] overflow-hidden shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000" 
                        alt="Management Meeting" 
                        className="w-full h-full object-cover"
                     />
                  </div>
                  <div className="absolute top-10 right-10 bg-gold p-10 rounded-[3rem] shadow-2xl z-20 text-primary font-black uppercase text-xl leading-none">
                     Quality <br /> First
                  </div>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

export default Leadership;
