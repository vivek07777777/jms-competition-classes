import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './Home';
import { STATS, NEWS } from '@/constants';
import { Trophy, Star, Award, Medal, Flag, Target, Sparkles, TrendingUp, Quote } from 'lucide-react';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=2000" 
        alt="Achievements" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Legacy of Success</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Our <span className="text-gold">Glorious</span> <br />
          Milestones
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const AchievementCard = ({ title, date, desc, icon: Icon, delay = 0 }: any) => (
   <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white p-12 rounded-[4rem] border-2 border-slate-50 shadow-2xl relative group overflow-hidden"
   >
      <div className="w-20 h-20 bg-primary rounded-[1.5rem] flex items-center justify-center mb-10 shadow-2xl group-hover:bg-gold transition-colors duration-500">
         <Icon className="w-10 h-10 text-gold group-hover:text-primary transition-colors" />
      </div>
      <span className="text-gold font-black uppercase text-[10px] tracking-widest block mb-4">{date}</span>
      <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-slate-600 text-lg font-medium leading-relaxed">{desc}</p>
      
      <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
         <Icon className="w-40 h-40 text-primary" />
      </div>
   </motion.div>
);

const Achievements = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Impact by Numbers" subtitle="Statistically Superior" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
               {STATS.map((stat, idx) => (
                  <motion.div 
                     key={idx}
                     whileHover={{ y: -15 }}
                     className="bg-slate-50 p-12 rounded-[3.5rem] text-center border-t-8 border-gold shadow-xl"
                  >
                     <div className="text-6xl font-black text-primary mb-4 tracking-tighter leading-none">{stat.value}{stat.suffix}</div>
                     <span className="text-primary font-black uppercase text-[10px] tracking-[0.3em] opacity-60 block">{stat.label}</span>
                  </motion.div>
               ))}
            </div>

            <SectionHeading title="Recent Accolades" subtitle="Hall of Fame" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 font-sans">
               <AchievementCard 
                  title="Best Integrated School Award" 
                  date="October 2023" 
                  desc="Awarded for excellence in blending traditional values with high-tech science education by the State Education Board." 
                  icon={Trophy}
               />
               <AchievementCard 
                  title="Mathematics Excellence" 
                  date="August 2023" 
                  desc="Our students secured top ranks in the National Math Olympiad, demonstrating superior analytical skills." 
                  icon={Target}
                  delay={0.1}
               />
               <AchievementCard 
                  title="District Sports Champion" 
                  date="February 2023" 
                  desc="Dominating the Saran District Sports Meet with gold medals in Athletics, Kabaddi, and Yoga competitions." 
                  icon={Medal}
                  delay={0.2}
               />
               <AchievementCard 
                  title="Eco-Green Campus Award" 
                  date="June 2023" 
                  desc="Recognized for our sustainable campus initiatives and environmental awareness among students." 
                  icon={Flag}
                  delay={0.3}
               />
               <AchievementCard 
                  title="Tech Innovator's Hub" 
                  date="April 2023" 
                  desc="Launching the district's first dedicated robotics and coding lab for primary grade students." 
                  icon={Sparkles}
                  delay={0.4}
               />
               <AchievementCard 
                  title="Cultural Excellence" 
                  date="January 2023" 
                  desc="Winning the Grand Trophy at the Inter-School Cultural Fest for the third consecutive year." 
                  icon={TrendingUp}
                  delay={0.5}
               />
            </div>
         </div>
      </section>

      {/* Featured News Impact */}
      <section className="py-32 bg-primary relative overflow-hidden mx-4 md:mx-6 rounded-[5rem]">
         <div className="container mx-auto px-12 md:px-20 relative z-10">
            <SectionHeading title="Global Recognition" subtitle="Beyond Lachhiya" light centered />
            <div className="flex flex-col lg:flex-row items-center gap-20">
               <div className="lg:w-1/2">
                  <div className="space-y-12">
                     {NEWS.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex gap-8 group">
                           <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-110 transition-transform">
                              <Star className="w-8 h-8 text-primary" />
                           </div>
                           <div>
                              <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-gold transition-colors">{item.title}</h4>
                              <p className="text-slate-400 font-medium text-lg leading-relaxed">{item.description}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="bg-white/5 border border-white/10 p-16 rounded-[4rem] backdrop-blur-2xl">
                     <Quote className="w-20 h-20 text-gold mb-10 opacity-20" />
                     <p className="text-white text-3xl font-black tracking-tighter leading-tight italic uppercase mb-12">
                        "Achievements at IPS are not just about winning trophies, they represent the hard work, resilience, and curiosity we nurture every day."
                     </p>
                     <div className="flex items-center gap-6">
                        <div className="h-1 lg:h-[2px] flex-grow bg-gold" />
                        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Academic Council</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* Background pattern */}
         <div className="absolute top-0 right-0 p-20 opacity-[0.05] pointer-events-none">
            <Trophy className="w-[40vw] h-[40vw] text-white" />
         </div>
      </section>
    </main>
  );
}

export default Achievements;
