import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  History, 
  Award, 
  Users, 
  Compass, 
  CheckCircle2,
  Quote,
  ArrowRight,
  Star,
  GraduationCap,
  Heart
} from 'lucide-react';
import { SectionHeading } from './Home';
import { LEADERSHIP, SCHOOL_NAME } from '@/constants';

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&q=80&w=2000" 
        alt="About School" 
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Legacy of Excellence</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Redefining <span className="text-gold">Education</span> <br />
          In Lachhiya
        </h1>
        <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
      </motion.div>
    </div>
  </section>
);

const VisionMission = () => (
   <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div 
               whileInView={{ opacity: [0, 1], x: [-50, 0] }}
               viewport={{ once: true }}
               className="bg-slate-50 p-12 md:p-16 rounded-[4rem] border-2 border-slate-100 group hover:border-gold/30 transition-all duration-500"
            >
               <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl group-hover:bg-gold transition-colors duration-500">
                  <Eye className="w-12 h-12 text-gold group-hover:text-primary transition-colors" />
               </div>
               <h2 className="text-4xl font-black text-primary mb-8 uppercase tracking-tighter">Our Vision</h2>
               <p className="text-slate-600 text-xl leading-relaxed font-medium mb-8 italic">
                  "To be an institution of excellence, dedicated to producing leaders and global citizens of tomorrow through a holistic and innovative education system."
               </p>
               <ul className="space-y-4">
                  {["Foster creativity and critical thinking", "Nurture moral and ethical values", "Global perspective, local roots"].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-4 text-primary font-bold">
                        <CheckCircle2 className="w-5 h-5 text-gold" />
                        {item}
                     </li>
                  ))}
               </ul>
            </motion.div>

            <motion.div 
               whileInView={{ opacity: [0, 1], x: [50, 0] }}
               viewport={{ once: true }}
               className="bg-primary p-12 md:p-16 rounded-[4rem] shadow-2xl group"
            >
               <div className="w-24 h-24 bg-gold rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl">
                  <Target className="w-12 h-12 text-primary" />
               </div>
               <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">Our Mission</h2>
               <p className="text-slate-200 text-xl leading-relaxed font-medium mb-8">
                  Intelligent Public School provides a learning environment that encourages children to bring out the best in themselves and enables them to achieve mastery over various skills.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {["Skill Mastery", "Character Building", "Integrated Learning", "Physical Fitness"].map((item, idx) => (
                     <div key={idx} className="bg-white/10 p-4 rounded-2xl border border-white/10 text-white font-black uppercase text-[10px] tracking-widest text-center">
                        {item}
                     </div>
                  ))}
               </div>
            </motion.div>
         </div>
      </div>
   </section>
);

const HistorySection = () => (
   <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
               <SectionHeading title="Our Journey" subtitle="The Legacy" centered={false} />
               <div className="space-y-12 relative before:absolute before:left-8 before:top-2 before:bottom-2 before:w-[2px] before:bg-gold/20">
                  {[
                     { year: "2009", event: "Foundation of Intelligent Public School was laid with a vision to transform rural education.", icon: History },
                     { year: "2015", event: "Achievement of 100% result in board examinations and expansion of high-tech labs.", icon: Award },
                     { year: "2023", event: "Recognized as one of the most innovative schools in Saran district with modern sports facilities.", icon: Star }
                  ].map((milestone, idx) => (
                     <motion.div 
                        key={idx}
                        whileInView={{ opacity: [0, 1], x: [-30, 0] }}
                        className="relative pl-24"
                     >
                        <div className="absolute left-0 top-0 w-16 h-16 bg-white border-4 border-gold rounded-full flex items-center justify-center z-10 shadow-xl">
                           <span className="text-primary font-black text-sm">{milestone.year}</span>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed font-medium pt-2">{milestone.event}</p>
                     </motion.div>
                  ))}
               </div>
            </div>
            
            <div className="lg:w-1/2 relative">
               <div className="relative group">
                  <div className="absolute inset-0 bg-gold rounded-[5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
                  <img 
                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1000" 
                    className="w-full rounded-[5rem] shadow-2xl relative z-10 transition-transform duration-500 group-hover:scale-105" 
                    alt="History" 
                  />
                  <div className="absolute -bottom-10 -left-10 bg-primary p-12 rounded-[3.5rem] shadow-2xl z-20 max-w-[250px] border-r-8 border-gold hidden xl:block">
                     <span className="text-5xl font-black text-gold block mb-2 leading-none">15+</span>
                     <span className="text-white font-bold uppercase tracking-widest text-[10px] block opacity-60">Years of Shaping Bright Futures</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
);

const ChairmanMessage = () => (
   <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
         <div className="bg-primary rounded-[5rem] overflow-hidden flex flex-col xl:flex-row shadow-2xl">
            <div className="xl:w-1/2 relative">
               <img 
                  src={LEADERSHIP[0].image} 
                  className="w-full h-full object-cover min-h-[500px]" 
                  alt={LEADERSHIP[0].name} 
               />
               <div className="absolute inset-0 bg-gradient-to-l from-primary via-transparent to-transparent hidden xl:block" />
               <div className="absolute bottom-12 left-12 right-12 p-8 glass-dark rounded-[2rem] border-l-4 border-gold lg:hidden">
                  <h3 className="text-white text-3xl font-black uppercase tracking-tight">{LEADERSHIP[0].name}</h3>
                  <p className="text-gold font-bold uppercase tracking-widest text-xs mt-1">{LEADERSHIP[0].role}</p>
               </div>
            </div>
            <div className="xl:w-1/2 p-12 md:p-20 flex flex-col justify-center relative">
               <div className="absolute top-12 right-12 opacity-[0.05]">
                  <Quote className="w-40 h-40 text-white" />
               </div>
               <motion.span 
                  whileInView={{ opacity: [0, 1], y: [20, 0] }}
                  className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-8 block"
               >
                  Chairman's Message
               </motion.span>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
                  Leading with <span className="text-gold">Innovation</span> <br />
                  & Tradition
               </h2>
               <div className="prose prose-invert prose-lg max-w-none mb-10 text-slate-300">
                  <p className="italic text-xl leading-relaxed mb-6">
                     "{LEADERSHIP[0].description}"
                  </p>
                  <p className="font-medium text-lg leading-relaxed">
                     At Intelligent Public School, our commitment is to provide a world-class education that empowers students to challenge the ordinary and strive for extraordinary success in every facet of life.
                  </p>
               </div>
               <div className="flex items-center gap-6 pt-8 border-t border-white/10">
                  <div className="hidden sm:block">
                     <h4 className="text-white font-black uppercase text-xl leading-none">{LEADERSHIP[0].name}</h4>
                     <p className="text-gold font-bold text-xs uppercase tracking-widest mt-2">{LEADERSHIP[0].role}</p>
                  </div>
                  <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />
                  <img src="https://ips.schoolaxis.info/uploads/media/signature_2.png" className="h-12 invert opacity-60" alt="Signature" />
               </div>
            </div>
         </div>
      </div>
   </section>
);

const Features = () => (
   <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
         <SectionHeading title="Our Core Values" subtitle="The Pillars" />
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
               { title: "Academic Rigor", desc: "Pushing boundaries of knowledge and understanding through a comprehensive curriculum.", icon: GraduationCap },
               { title: "Character Development", desc: "Building integrity, empathy, and resilience in every student through life-skill programs.", icon: Heart },
               { title: "Global Citizenship", desc: "Inculcating awareness and responsibility towards local and global communities.", icon: Compass },
               { title: "Inclusive Culture", desc: "Fostering an environment where every voice is heard and every talent is nurtured.", icon: Users },
            ].map((feature, idx) => (
               <motion.div 
                  key={idx}
                  whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:bg-gold transition-all duration-500"
               >
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                     <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="text-xl font-black text-primary mb-4 group-hover:text-primary uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed group-hover:text-primary transition-colors">{feature.desc}</p>
               </motion.div>
            ))}
         </div>
      </div>
   </section>
)

export default function About() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisionMission />
      <HistorySection />
      <ChairmanMessage />
      <Features />
      
      {/* Call to Action */}
      <section className="py-24 bg-white">
         <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tighter uppercase">Join Our Legacy</h2>
               <p className="text-slate-600 text-xl mb-12 font-medium">Ready to provide your child with an education that truly matters? Explore our admissions process today.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl flex items-center gap-4 justify-center"
                  >
                     Review Admission <ArrowRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="bg-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl flex items-center gap-4 justify-center"
                  >
                     Download Brochure
                  </motion.button>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
