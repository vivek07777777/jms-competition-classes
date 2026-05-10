import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Home';
import { TESTIMONIALS } from '@/constants';
import { Quote, Star, MessageSquareQuote } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=2000" 
        alt="Testimonials" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Voices of IPS Communities</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Parent & Student <br />
          <span className="text-gold">Stories</span>
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const TestimonialPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="What they say about us" subtitle="True Stories" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {TESTIMONIALS.map((t, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="bg-slate-50 p-12 rounded-[4rem] border-2 border-slate-100 shadow-xl relative group hover:bg-gold transition-all duration-500 overflow-hidden"
                  >
                     <div className="absolute top-10 right-10 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                        <Quote className="w-40 h-40 text-primary" />
                     </div>
                     
                     <div className="relative z-10">
                        <div className="flex gap-2 mb-8">
                           {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-5 h-5 text-gold fill-current group-hover:text-primary transition-colors" />
                           ))}
                        </div>
                        
                        <p className="text-slate-600 group-hover:text-primary text-2xl font-medium leading-relaxed mb-12 italic transition-colors">
                           "{t.content}"
                        </p>
                        
                        <div className="flex items-center gap-6">
                           <div className="w-20 h-20 bg-primary rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl group-hover:border-primary transition-all duration-500">
                              <img src={t.image} className="w-full h-full object-cover" alt={t.name} />
                           </div>
                           <div>
                              <h4 className="text-2xl font-black text-primary uppercase tracking-tight leading-none mb-2">{t.name}</h4>
                              <span className="text-gold font-bold uppercase tracking-widest text-[10px] group-hover:text-primary/70 transition-colors">{t.role}</span>
                           </div>
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Quote */}
      <section className="py-32 bg-gradient-premium relative overflow-hidden mx-4 md:mx-6 rounded-[5rem]">
         <div className="container mx-auto px-12 md:px-20 text-center relative z-10">
            <MessageSquareQuote className="w-24 h-24 text-gold/30 mx-auto mb-10" />
            <div className="max-w-4xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-white mb-10 uppercase tracking-tighter leading-tight">
                  At Intelligent <span className="text-gold">Public</span> School, We prioritize student wellbeing as much as academic success.
               </h2>
               <div className="h-1.5 w-24 bg-gold rounded-full mx-auto" />
            </div>
         </div>
         {/* Background noise/pattern */}
         <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[50vw] font-black uppercase text-white leading-none">QUOTE</span>
         </div>
      </section>
    </main>
  );
}

export default TestimonialPage;
