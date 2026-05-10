import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  FlaskConical, 
  Globe, 
  Brain, 
  Lightbulb, 
  Rocket, 
  Code, 
  Music, 
  Palette,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookCheck,
  GraduationCap,
  Heart
} from 'lucide-react';
import { SectionHeading } from './Home';
import { cn } from '@/lib/utils';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000" 
        alt="Academics" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Nurturing Minds</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Academic <span className="text-gold">Excellence</span> <br />
          & Rigor
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const CurriculumCard = ({ title, level, desc, icon: Icon, color = "primary" }: any) => (
   <motion.div 
      whileHover={{ y: -15 }}
      className="bg-white p-12 rounded-[4rem] border-2 border-slate-50 shadow-2xl relative group overflow-hidden"
   >
      <div className={cn(
         "w-20 h-20 rounded-[1.5rem] flex items-center justify-center mb-10 transition-colors duration-500",
         color === "primary" ? "bg-primary text-gold" : "bg-gold text-primary"
      )}>
         <Icon className="w-10 h-10 group-hover:scale-110 transition-transform" />
      </div>
      <span className="text-gold font-black uppercase text-[10px] tracking-widest block mb-4">{level}</span>
      <h3 className="text-3xl font-black text-primary mb-6 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-600 text-lg leading-relaxed font-medium mb-10">{desc}</p>
      
      <ul className="space-y-4 mb-12">
         {["Comprehensive Curriculum", "Expert Faculty", "Integrated Assessment"].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-primary font-bold text-sm">
               <CheckCircle2 className="w-4 h-4 text-gold" />
               {item}
            </li>
         ))}
      </ul>
      
      <button className="flex items-center gap-3 text-primary font-black uppercase text-[10px] tracking-widest group-hover:gap-5 transition-all">
         Full Curriculum <ArrowRight className="w-4 h-4 text-gold" />
      </button>
      
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none group-hover:rotate-12 transition-transform">
         <Icon className="w-32 h-32" />
      </div>
   </motion.div>
)

const Academics = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32 bg-white overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-24 mb-24">
               <div className="lg:w-1/2">
                  <SectionHeading title="Learning Philosophies" subtitle="How we Teach" centered={false} />
                  <p className="text-slate-600 text-xl font-medium leading-relaxed mb-10">
                     We believe in a student-centric approach that blends traditional values with modern technology. Our curriculum is designed to move beyond textbooks and encourage hands-on learning, critical thinking, and real-world problem-solving.
                  </p>
                  <div className="grid grid-cols-2 gap-8">
                     {[
                        { label: "Critical Thinking", icon: Brain },
                        { label: "Hands-on Learning", icon: FlaskConical },
                        { label: "Collaborative Projects", icon: Globe },
                        { label: "Creative Arts", icon: Palette }
                     ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 group hover:border-gold hover:bg-gold/5 transition-all">
                           <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                              <item.icon className="w-6 h-6 text-gold" />
                           </div>
                           <span className="font-black uppercase text-[10px] tracking-widest text-primary">{item.label}</span>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="lg:w-1/2 relative">
                  <div className="relative group">
                     <div className="absolute inset-4 bg-gold rounded-[4rem] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                     <img 
                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000" 
                        alt="Classroom"
                        className="w-full rounded-[4rem] shadow-2xl relative z-10"
                     />
                     <div className="absolute -bottom-10 -right-10 bg-white p-12 rounded-[3.5rem] shadow-2xl z-20 border-l-4 border-gold hidden sm:block">
                        <Sparkles className="w-10 h-10 text-gold mb-4" />
                        <span className="text-primary font-black block text-2xl tracking-tighter uppercase leading-none">Smart Classes</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-24">
               <CurriculumCard 
                  title="Primary School" 
                  level="Nursery to Grade 5" 
                  desc="Focusing on literacy, numeracy, and social development through play-way and activity-based learning." 
                  icon={BookOpen}
               />
               <CurriculumCard 
                  title="Middle School" 
                  level="Grade 6 to 8" 
                  desc="Developing deep core subject knowledge and introducing research-oriented projects and experimental labs." 
                  icon={BookCheck}
                  color="gold"
               />
               <CurriculumCard 
                  title="High School" 
                  level="Grade 9 to 10" 
                  desc="Rigorous preparation for board exams with a focus on career guidance, skill development, and specialization." 
                  icon={Rocket}
               />
            </div>
         </div>
      </section>

      <section className="py-32 bg-primary relative overflow-hidden">
         <div className="container mx-auto px-4 md:px-6">
            <SectionHeading title="Learning Departments" subtitle="Specializations" light centered />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
               {[
                  { title: "STEM Labs", desc: "Advanced science and math experiments with modern equipment.", icon: FlaskConical },
                  { title: "Digital Hub", desc: "Digital and coding integrated curriculum for tech-savvy learners.", icon: Code },
                  { title: "Vocal & Music", desc: "Nurturing the artistic side through professional music training.", icon: Music },
                  { title: "Global Languages", desc: "Developing linguistic competence for international communication.", icon: Globe },
               ].map((dept, idx) => (
                  <motion.div 
                     key={idx}
                     initial={{ opacity: 0, scale: 0.9 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center group hover:bg-gold transition-all duration-500"
                  >
                     <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary transition-colors">
                        <dept.icon className="w-8 h-8 text-gold" />
                     </div>
                     <h4 className="text-white font-black text-xl mb-4 group-hover:text-primary uppercase tracking-tight">{dept.title}</h4>
                     <p className="text-slate-400 font-medium group-hover:text-primary/70 transition-colors">{dept.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 bg-white relative">
         <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-5xl mx-auto bg-slate-50 rounded-[5rem] p-16 md:p-24 relative overflow-hidden border-2 border-slate-100 flex flex-col items-center text-center">
               <div className="w-24 h-24 bg-gold rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl">
                  <Lightbulb className="w-12 h-12 text-primary" />
               </div>
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-10 tracking-tighter uppercase leading-tight">
                  Our <span className="text-gold">Educational</span> <br />
                  Success Model
               </h2>
               <p className="text-slate-600 text-2xl font-medium leading-relaxed italic max-w-3xl mb-12">
                  "We don't just teach for exams. We build curious minds, resilient hearts, and courageous spirits prepared for a rapidly changing world."
               </p>
               <div className="flex flex-wrap justify-center gap-10">
                  {["Critical Analysis", "Self Discovery", "Ethical Logic", "Global Outreach"].map((v, i) => (
                     <div key={i} className="flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
                        <ArrowRight className="w-5 h-5 text-gold" />
                        {v}
                     </div>
                  ))}
               </div>
            </div>
         </div>
         {/* Decorative letters */}
         <div className="absolute top-20 left-20 opacity-[0.02] text-[20vw] font-black text-primary select-none pointer-events-none">A+</div>
         <div className="absolute bottom-20 right-20 opacity-[0.02] text-[20vw] font-black text-primary select-none pointer-events-none">IQ</div>
      </section>
    </main>
  );
}

export default Academics;
