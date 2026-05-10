import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Home';
import { EVENTS } from '@/constants';
import { Calendar, MapPin, Clock, ArrowRight, Star, Music, Trophy, Activity, MessageCircle } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2000" 
        alt="Events" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Beyond the Classroom</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Vibrant <span className="text-gold">Campus</span> <br />
          Life & Events
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const EventCard = ({ event, idx }: any) => (
   <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="bg-white rounded-[4rem] group overflow-hidden shadow-2xl border border-slate-100 h-full flex flex-col"
   >
      <div className="aspect-video relative overflow-hidden">
         <img 
            src={`https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000&sig=${idx}`} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
            alt={event.title} 
         />
         <div className="absolute top-6 left-6 bg-gold text-primary p-4 rounded-3xl flex flex-col items-center justify-center min-w-[70px] shadow-2xl border-4 border-white font-black leading-none">
            <span className="text-2xl">{event.date.split(' ')[1]}</span>
            <span className="text-[10px] uppercase">{event.date.split(' ')[0]}</span>
         </div>
      </div>
      <div className="p-12 flex-grow flex flex-col">
         <h3 className="text-3xl font-black text-primary mb-8 uppercase tracking-tighter leading-tight group-hover:text-gold transition-colors">{event.title}</h3>
         <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-gold transition-colors">
                  <Clock className="w-5 h-5 text-primary" />
               </div>
               <div>
                  <span className="text-primary font-black uppercase text-[10px] tracking-widest block opacity-70">Time</span>
                  <span className="text-slate-600 font-bold tracking-tight">09:00 AM Onwards</span>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-gold transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
               </div>
               <div>
                  <span className="text-primary font-black uppercase text-[10px] tracking-widest block opacity-70">Location</span>
                  <span className="text-slate-600 font-bold tracking-tight">Main Campus Grounds</span>
               </div>
            </div>
         </div>
         <p className="text-slate-500 font-medium text-lg leading-relaxed mb-10 flex-grow">{event.description}</p>
         <button className="bg-primary text-white p-6 rounded-2xl w-full font-black uppercase text-[10px] tracking-widest shadow-2xl hover:bg-gold hover:text-primary transition-all flex items-center justify-center gap-4 group">
            Get more details <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
         </button>
      </div>
   </motion.div>
)

const Events = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Mark Your Calendar" subtitle="Upcoming & Past Events" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {EVENTS.map((event, idx) => (
                  <EventCard key={idx} event={event} idx={idx} />
               ))}
            </div>
         </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
               <div className="text-center lg:text-left">
                  <SectionHeading title="Event Highlights" subtitle="Capturing Moments" centered={false} />
                  <p className="text-slate-600 text-xl font-medium max-w-xl">Take a peek at the excitement and energy from our most recent celebrations and competitions.</p>
               </div>
               <button className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl flex items-center gap-4">
                  Visit Full Gallery <ArrowRight className="w-5 h-5" />
               </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {[Trophy, Music, Activity, Star].map((Icon, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ y: -10, scale: 1.05 }}
                     className="aspect-square bg-white rounded-[3rem] shadow-2xl border-2 border-slate-50 flex flex-col items-center justify-center gap-6 group hover:bg-primary transition-all duration-500"
                  >
                     <div className="w-20 h-20 bg-gold/10 rounded-[1.5rem] flex items-center justify-center group-hover:bg-gold transition-colors">
                        <Icon className="w-10 h-10 text-primary" />
                     </div>
                     <span className="text-primary font-black uppercase text-[10px] tracking-widest group-hover:text-white transition-colors">Cultural Fest</span>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6">
            <div className="bg-primary rounded-[4rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 border-b-[16px] border-gold">
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-tight">Organizing an <span className="text-gold">Event?</span></h2>
                  <p className="text-slate-400 text-xl font-bold max-w-xl">Partner with IPS for educational workshops, community events, or inter-school competitions.</p>
               </div>
               <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-gold text-primary p-12 rounded-[2.5rem] shadow-2xl flex items-center justify-center group relative z-10"
               >
                  <MessageCircle className="w-10 h-10 text-primary group-hover:animate-pulse" />
               </motion.button>
               
               {/* Pattern */}
               <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none">
                  <span className="text-[20rem] font-black text-white uppercase tracking-tighter absolute -right-20 -bottom-20">VIBE</span>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

export default Events;
