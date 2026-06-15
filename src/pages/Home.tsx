import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
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
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SCHOOL_NAME,
  STATS,
  CONTACT_INFO,
  HERO_VIDEO,
  HIGHLIGHTS,
  LEADERSHIP,
  SERVICES,
} from "@/constants";

export const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}) => (
  <div className={cn("mb-16", centered ? "text-center" : "text-left")}>
    <motion.span
      initial={{ opacity: 0, tracking: "0.1em" }}
      whileInView={{ opacity: 1, tracking: "0.4em" }}
      viewport={{ once: true }}
      className={cn(
        "font-black uppercase text-[10px] mb-4 block",
        light ? "text-gold-light/60" : "text-gold",
      )}
    >
      {subtitle || "JMS Competition Classes"}
    </motion.span>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none",
        light ? "text-white" : "text-primary",
      )}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className={cn(
        "h-1.5 w-24 bg-gold rounded-full",
        centered ? "mx-auto" : "",
      )}
    />
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen lg:h-screen flex items-center overflow-hidden bg-primary py-20 lg:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary" />

        {/* Desktop Video */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-[35%] h-[50%] z-100">
          {/* White Outer Border */}
          <div className="w-full h-full rounded-[40px] border-[12px] border-white">
            {/* Blue Inner Border */}
            <div className="w-full h-full rounded-[28px] border-[10px] border-blue-500 h-full">
              {/* Video */}
              <div className="w-full h-full rounded-[18px] overflow-hidden relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={HERO_VIDEO} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/20" />
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Fade (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-primary via-primary/95 via-primary/70 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold border border-gold/20 text-[10px] font-black mt-5 xl:mt-50 2xl:mt-0 mb-8 tracking-[0.3em] uppercase backdrop-blur-md">
              <Star className="w-3 h-3 mr-2 fill-gold" />
              Admission Open for 2024-25
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-6 leading-[0.9] tracking-tighter uppercase">
              Welcome to <br />
              <span className="text-gold italic">JMS</span> <br />
              Competition Classes
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-10 max-w-2xl font-medium tracking-tight leading-relaxed">
              Experience the pinnacle of education in Bagahi. Where traditional
              values meet modern innovation to shape global citizens.
            </p>

            {/* Buttons */}
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
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-widest">
                    Call Us Now
                  </span>
                  <span className="text-lg font-black tracking-tight">
                    {CONTACT_INFO.phone[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Video */}
            <div className="mt-10 lg:hidden">
              <div className="w-full max-w-md mx-auto h-[250px] sm:h-[300px]">
                <div className="w-full h-full rounded-[30px] border-[8px] border-white">
                  <div className="w-full h-full rounded-[22px] border-[6px] border-blue-500">
                    <div className="w-full h-full rounded-[14px] overflow-hidden relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={HERO_VIDEO} type="video/mp4" />
                      </video>

                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-primary/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="hidden lg:flex absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3"
      >
        <span className="text-[10px] font-black text-gold uppercase tracking-[0.4em]">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

const Counter = ({ value, suffix }: { value: string; suffix: string }) => {
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

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const AchievementsSection = () => (
  <section className="py-24 bg-gradient-premium relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
      <span className="text-[40vw] font-black uppercase tracking-tighter text-white select-none">
        JMS
      </span>
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
            <div className="text-[10px] font-black text-slate-400 group-hover:text-primary uppercase tracking-[0.3em] transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HighlightsSection = () => (
  <section className="py-32 bg-white relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading title="JMS Highlights" subtitle="Experience JMS" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {HIGHLIGHTS.map((h, idx) => {
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
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-black text-primary mb-5 uppercase tracking-tight">
                  {h.title}
                </h4>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  {h.description}
                </p>
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
            title="Why Choose JMS Competition Classes?"
            subtitle="The JMS Advantage"
            centered={false}
            light
          />

          <p className="text-slate-300 text-xl mb-12 leading-relaxed font-medium">
            At JMS Competition Classes, we focus on helping students achieve
            success in competitive examinations through expert guidance, regular
            practice, doubt-solving sessions, and disciplined preparation. Our
            goal is to build confidence, knowledge, and exam-ready skills in
            every student.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              { label: "Experienced Faculty", icon: GraduationCap },
              { label: "Regular Mock Tests", icon: Play },
              { label: "Personal Attention", icon: Heart },
              { label: "Proven Results", icon: Star },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 text-white p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>

                <span className="font-black uppercase text-xs tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 text-gold font-black uppercase text-xs tracking-[0.2em] hover:text-white transition-colors"
          >
            Know More About Us <ArrowRight className="w-5 h-5" />
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
              src="./all-competion.jpeg"
              alt="Students Preparing for Competitive Exams"
              className="w-full rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>

          <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl z-20 hidden xl:block max-w-[280px] border-l-8 border-gold">
            <Quote className="w-10 h-10 text-gold mb-6 opacity-30" />

            <p className="text-slate-800 font-bold italic text-lg leading-relaxed mb-6">
              "Success in competitive exams comes from consistent effort, proper
              guidance, and regular practice."
            </p>

            <div className="flex items-center gap-3">
              <div className="p-1 rounded-full border border-gold">
                <div className="w-10 h-10 bg-primary rounded-full" />
              </div>

              <div>
                <span className="text-primary font-black block text-xs uppercase tracking-tight">
                  JMS Teachers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-32 bg-slate-50">
    {" "}
    <div className="container mx-auto px-6">
      {" "}
      <SectionHeading
        title="Facilities & Services"
        subtitle="Everything You Need To Succeed"
      />{" "}
      <div className="space-y-32">
        {" "}
        {SERVICES.map((service, index) => (
          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {" "}
            <div className="relative">
              {" "}
              <img
                src={service.image}
                alt={service.title}
                className={ service.image !== "./all-competion.jpeg" ? "rounded-[3rem] w-full h-[500px] object-cover shadow-2xl" : "rounded-[3rem] w-full h-[500px] object-contain shadow-2xl" }
              />{" "}
              <div className="absolute -bottom-8 -right-8 bg-gold text-primary w-24 h-24 rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl">
                {" "}
                0{index + 1}{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <span className="uppercase tracking-[0.3em] text-gold font-black text-xs">
                {" "}
                JMS Competition Classes{" "}
              </span>{" "}
              <h3 className="text-5xl font-black text-primary mt-4 mb-8">
                {" "}
                {service.title}{" "}
              </h3>{" "}
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {" "}
                {service.description}{" "}
              </p>{" "}
              <div className="h-1 w-24 bg-gold rounded-full"></div>{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>{" "}
  </section>
);

const LeadershipShowcase = () => (
  <section className="py-32 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <SectionHeading title="Our Educators" subtitle="Meet the Pillars" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
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
              <h4 className="text-2xl font-black text-primary mb-2 uppercase tracking-tight">
                {leader.name}
              </h4>
              <p className="text-slate-500 text-sm font-bold tracking-tight px-4">
                {leader.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);


const SuccessRoadmap = () => (
  <section className="py-32 bg-primary relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[150px]" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-4xl mx-auto mb-24">
        <span className="text-gold font-black uppercase tracking-[0.4em] text-xs">
          Your Journey To Success
        </span>

        <h2 className="text-5xl md:text-7xl font-black text-white mt-6 mb-8">
          Selection Starts With
          <span className="text-gold block">The Right Preparation</span>
        </h2>

        <p className="text-slate-300 text-xl leading-relaxed">
          At JMS Competition Classes, we guide students through every stage
          of preparation, from concept building to final exam success.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {[
          {
            number: "01",
            title: "Enroll",
            desc: "Choose your target exam and join the right batch."
          },
          {
            number: "02",
            title: "Learn",
            desc: "Understand concepts through expert faculty and digital classes."
          },
          {
            number: "03",
            title: "Practice",
            desc: "Solve questions, assignments, and previous year papers."
          },
          {
            number: "04",
            title: "Test",
            desc: "Evaluate progress through regular mock tests."
          },
          {
            number: "05",
            title: "Achieve",
            desc: "Move closer to your dream government job."
          }
        ].map((step, idx) => (
          <div
            key={idx}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 hover:border-gold/40 transition-all"
          >
            <span className="text-6xl font-black text-gold/20 absolute top-4 right-4">
              {step.number}
            </span>

            <h3 className="text-2xl font-black text-white mb-4">
              {step.title}
            </h3>

            <p className="text-slate-300 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-20">
        <Link
          to="/contact"
          className="bg-gold text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all"
        >
          Join Now
        </Link>

        <Link
          to="/courses"
          className="border border-white/20 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AchievementsSection />
      <HighlightsSection />
      <WhyChooseUs />
      <LeadershipShowcase />
      <ServicesSection />
      <SuccessRoadmap />
    </div>
  );
}
