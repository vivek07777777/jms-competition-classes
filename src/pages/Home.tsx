import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Star, 
  Award, 
  Play,
  PhoneCall,
  GraduationCap,
  Plus,
  Minus,
  Quote,
  Activity,
  Music,
  Trophy,
  Heart,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  SCHOOL_NAME, 
  STATS, 
  CONTACT_INFO, 
  HERO_VIDEO, 
  HIGHLIGHTS, 
  LEADERSHIP,
  NEWS
} from '@/constants';

const highlightIcons: Record<string, any> = {
  Activity,
  Music,
  Trophy
};

export const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true, 
  light = false 
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean; 
  light?: boolean 
}) => (
  <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
    <motion.span 
      initial={{ opacity: 0, tracking: "0.1em" }}
      whileInView={{ opacity: 1, tracking: "0.4em" }}
      viewport={{ once: true }}
      className={cn(
        "font-black uppercase text-[10px] mb-4 block",
        light ? "text-gold-light/60" : "text-gold"
      )}
    >
      {subtitle || "Intelligent Public School"}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none",
        light ? "text-white" : "text-primary"
      )}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className={cn("h-1.5 w-24 bg-gold rounded-full", centered ? "mx-auto" : "")} 
    />
  </div>
);

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-primary">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40 z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/20 text-[10px] font-black mb-10 tracking-[0.3em] uppercase backdrop-blur-md">
              <Star className="w-3 h-3 mr-2 fill-gold" />
              Admission Open for 2024-25
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.9] tracking-tighter uppercase">
              Welcome to <br />
              <span className="text-gold italic">Intelligent</span> <br />
              Public School
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-medium tracking-tight leading-relaxed">
              Experience the pinnacle of education in Lachhiya. Where traditional values meet modern innovation to shape global citizens.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/admissions"
                className="bg-gold text-primary px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] inline-flex items-center justify-center transition-all shadow-2xl hover:bg-white hover:scale-105 active:scale-95 group"
              >
                Admission Enquiry
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex items-center gap-4">
                 <a 
                    href={`tel:${CONTACT_INFO.phone[0]}`}
                    className="w-16 h-16 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
                 >
                    <PhoneCall className="w-6 h-6" />
                 </a>
                 <div className="text-white">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">Call Us Now</span>
                    <span className="text-lg font-black tracking-tight">{CONTACT_INFO.phone[0]}</span>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const Counter = ({ value, suffix }: { value: string, suffix: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const AchievementsSection = () => (
  <section className="py-24 bg-gradient-premium relative overflow-hidden">
     <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
        <span className="text-[40vw] font-black uppercase tracking-tighter text-white select-none">IPS</span>
     </div>
     
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {STATS.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md group hover:bg-gold transition-all duration-500"
          >
            <div className="text-5xl md:text-7xl font-black text-gold group-hover:text-primary mb-4 tracking-tighter transition-colors text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[10px] font-black text-slate-400 group-hover:text-primary uppercase tracking-[0.3em] transition-colors">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HighlightsSection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading 
        title="School Highlights" 
        subtitle="Experience IPS" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {HIGHLIGHTS.map((h, idx) => {
          const Icon = highlightIcons[h.icon] || Award;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -15 }}
              className="bg-slate-50 rounded-[3rem] border-2 border-transparent hover:border-gold/30 hover:bg-gold/5 transition-all group overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={(h as any).image} 
                  alt={h.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-6 left-10">
                  <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center shadow-2xl">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-primary mb-5 uppercase tracking-tight">{h.title}</h4>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">{h.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-32 bg-primary relative overflow-hidden">
     {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -ml-64 -mb-64" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-24">
        <div className="lg:w-1/2 text-center lg:text-left">
          <SectionHeading 
            title="Why Choose Us?" 
            subtitle="The IPS Advantage" 
            centered={false} 
            light 
          />
          <p className="text-slate-300 text-xl mb-12 leading-relaxed font-medium">
            We provide a dynamic learning environment where students thrive academically and personally. Our experienced faculty, engaging curriculum, and state-of-the-art facilities ensure a well-rounded education.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              { label: "Expert Educators", icon: GraduationCap },
              { label: "Engaging Curriculum", icon: Play },
              { label: "Holistic Development", icon: Heart },
              { label: "Values Driven", icon: Star }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 text-white p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                   <item.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-black uppercase text-xs tracking-widest">{item.label}</span>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-gold font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors"
          >
            Explore our Vision <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="relative group">
             <motion.div
               animate={{ rotate: 3 }}
               className="absolute inset-0 bg-gold rounded-[3rem] -z-10 group-hover:rotate-0 transition-transform duration-500"
             />
             <motion.div
               animate={{ rotate: -3 }}
               className="absolute inset-0 bg-blue-900 rounded-[3rem] -z-10 group-hover:rotate-0 transition-transform duration-500 delay-75"
             />
             <img 
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1000" 
              alt="Students" 
              className="w-full rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 hidden xl:block max-w-[280px] border-l-8 border-gold">
             <Quote className="w-10 h-10 text-gold mb-6 opacity-30" />
             <p className="text-slate-800 font-bold italic text-lg leading-relaxed mb-6">"Our focus is beyond textbooks. We prepare them for life."</p>
             <div className="flex items-center gap-3">
                <div className="p-1 rounded-full border border-gold">
                   <div className="w-10 h-10 bg-primary rounded-full" />
                </div>
                <div>
                   <span className="text-primary font-black block text-xs uppercase tracking-tight">Management Team</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NewsSection = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
     <div className="container mx-auto px-4 md:px-6">
        <SectionHeading title="Latest School News" subtitle="In the Spotlight" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {NEWS.map((item, idx) => (
              <motion.article 
                 key={idx}
                 whileHover={{ y: -10 }}
                 className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group transition-all"
              >
                 <div className="relative h-64 overflow-hidden">
                    <img 
                      src={(item as any).image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6">
                       <div className="w-14 h-14 rounded-2xl bg-primary flex flex-col items-center justify-center text-white shadow-2xl group-hover:bg-gold transition-colors duration-500">
                          <span className="text-lg font-black leading-none">{item.date.split(' ')[1].replace(',', '')}</span>
                          <span className="text-[10px] uppercase font-bold">{item.date.split(' ')[0]}</span>
                       </div>
                    </div>
                 </div>
                 <div className="p-10">
                    <h3 className="text-2xl font-black text-primary mb-6 leading-tight group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">{item.description}</p>
                    <button className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all">
                       Read Full Story <ArrowRight className="w-4 h-4 text-gold" />
                    </button>
                 </div>
              </motion.article>
           ))}
        </div>
     </div>
  </section>
);

const LeadershipShowcase = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading 
        title="Our Visionary Leadership" 
        subtitle="Meet the Pillars" 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {LEADERSHIP.map((leader, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl mb-8">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <div className="bg-gold text-primary px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest inline-block mb-3">
                    {leader.role}
                 </div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">{leader.name}</h4>
              <p className="text-slate-500 text-sm font-bold tracking-tight px-4">{leader.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const AdmissionCTA = () => (
   <section className="py-32 relative group cursor-pointer overflow-hidden">
      <div className="absolute inset-0 z-0">
         <img 
          src="https://images.unsplash.com/photo-1523050335392-463015096d8f?auto=format&fit=crop&q=80&w=2000" 
          alt="Campus" 
          className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
         <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="max-w-4xl">
            <motion.span 
               whileInView={{ opacity: [0, 1], x: [-50, 0] }}
               className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-8 block"
            >
               Ready to Start?
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black text-white mb-12 uppercase tracking-tighter leading-none">
               Secure Your Child's <br />
               <span className="text-gold">Future</span> Success
            </h2>
            <div className="flex flex-wrap gap-8">
               <Link 
                  to="/admissions"
                  className="bg-gold text-primary px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all shadow-2xl active:scale-95"
               >
                  Download Brochure
               </Link>
               <Link 
                  to="/contact"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all active:scale-95 flex items-center gap-4"
               >
                  Book a Campus Visit <ExternalLink className="w-5 h-5" />
               </Link>
            </div>
         </div>
      </div>
   </section>
)

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AchievementsSection />
      <HighlightsSection />
      <WhyChooseUs />
      <LeadershipShowcase />
      <NewsSection />
      <AdmissionCTA />
    </div>
  );
}
