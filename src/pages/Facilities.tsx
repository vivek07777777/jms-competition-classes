import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Home';
import { FACILITIES } from '@/constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1541829070764-84a7d30dee93?auto=format&fit=crop&q=80&w=2000" 
        alt="Facilities" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">World Class Campus</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Modern <span className="text-gold">Infrastructure</span> <br />
          For Learners
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const FacilityCard = ({ facility, idx }: any) => (
   <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="group relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-xl flex flex-col md:flex-row h-full"
   >
      <div className="md:w-2/5 relative overflow-hidden h-[300px] md:h-auto">
         <img 
            src={facility.image} 
            alt={facility.title} 
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
         />
         <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors" />
         <div className="absolute bottom-6 left-6 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white font-black uppercase text-[10px] tracking-widest">
            {facility.title}
         </div>
      </div>
      <div className="md:w-3/5 p-12 flex flex-col justify-center">
         <span className="text-gold font-black uppercase text-[10px] tracking-[0.3em] mb-4 block">Campus Feature</span>
         <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">{facility.title}</h3>
         <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">
            {facility.description}
         </p>
         <div className="flex flex-wrap gap-6 mb-12">
            {["High Tech", "Safe Access", "24/7 Security", "Expert Guided"].map((tag, idx) => (
               <div key={idx} className="flex items-center gap-3 text-slate-400 group-hover:text-primary font-bold text-xs uppercase transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                  {tag}
               </div>
            ))}
         </div>
         <button className="flex items-center gap-3 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-6 transition-all self-start">
            Show more details <ArrowRight className="w-4 h-4 text-gold" />
         </button>
      </div>
   </motion.div>
);

const Facilities = () => {
  return (
    <main className="min-h-screen bg-white pb-32">
      <Hero />
      
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="A Glimpse of the Campus" subtitle="Our Environment" />
            <div className="grid grid-cols-1 gap-12">
               {FACILITIES.map((facility, idx) => (
                  <FacilityCard key={idx} facility={facility} idx={idx} />
               ))}
            </div>
         </div>
      </section>

      {/* Campus CTA */}
      <section className="py-24 bg-primary relative overflow-hidden mx-4 md:mx-6 rounded-[5rem]">
         <div className="container mx-auto px-12 md:px-20 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">
                  Want to <span className="text-gold">Tour</span> <br />
                  The Campus?
               </h2>
               <p className="text-slate-300 text-xl font-medium max-w-xl">Book a personalized campus tour and see first-hand the infrastructure that makes us distinct in Lachhiya.</p>
            </div>
            <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-gold text-primary px-16 py-8 rounded-[2.5rem] font-black uppercase tracking-widest text-sm shadow-2xl flex items-center justify-center gap-6"
            >
               Book Campus Visit <ArrowRight className="w-6 h-6" />
            </motion.button>
         </div>
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] -mr-40 -mt-40" />
      </section>
    </main>
  );
}

export default Facilities;
