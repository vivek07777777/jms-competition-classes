import React from "react";
import { motion } from "motion/react";
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
  Heart,
  ClipboardCheck,
  Monitor,
  Trophy,
} from "lucide-react";
import { SectionHeading } from "./Home";
import { LEADERSHIP, SCHOOL_NAME } from "@/constants";

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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
          Our Legacy of Excellence
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Preparing <span className="text-gold">Students</span> <br />
          In Bagahi
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
          <h2 className="text-4xl font-black text-primary mb-8 uppercase tracking-tighter">
            {" "}
            Our Vision{" "}
          </h2>{" "}
          <p className="text-slate-600 text-xl leading-relaxed font-medium mb-8 italic">
            {" "}
            "To become a trusted center of excellence for competitive exam
            preparation, helping students achieve their dream government jobs
            through quality education, discipline, and continuous
            guidance."{" "}
          </p>{" "}
          <ul className="space-y-4">
            {" "}
            {[
              "Build strong academic foundations",
              "Develop confidence and problem-solving skills",
              "Guide students towards successful careers",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-4 text-primary font-bold"
              >
                {" "}
                <CheckCircle2 className="w-5 h-5 text-gold" /> {item}{" "}
              </li>
            ))}{" "}
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
          <h2 className="text-4xl font-black text-white mb-8 uppercase tracking-tighter">
            {" "}
            Our Mission{" "}
          </h2>{" "}
          <p className="text-slate-200 text-xl leading-relaxed font-medium mb-8">
            {" "}
            At JMS Competition Classes, our mission is to provide
            result-oriented coaching through experienced faculty, digital
            classrooms, regular mock tests, and personalized guidance so that
            every student can perform at their highest potential in competitive
            examinations.{" "}
          </p>{" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {" "}
            {[
              "Expert Faculty",
              "Digital Learning",
              "Mock Test Series",
              "Selection-Oriented Preparation",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 p-4 rounded-2xl border border-white/10 text-white font-black uppercase text-[10px] tracking-widest text-center"
              >
                {" "}
                {item}{" "}
              </div>
            ))}{" "}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ExamsSection = () => (
  <section className="py-32 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading
        title="Exams We Prepare For"
        subtitle="Your Goal, Our Guidance"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          "Bihar Police",
          "Indian Army",
          "Indian Air Force",
          "Bihar Daroga",
          "SSC GD",
          "NTPC",
          "STET",
          "Other Government Exams",
        ].map((exam, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:border-gold/30 transition-all"
          >
            <div className="text-5xl font-black text-gold/20 mb-4">
              0{idx + 1}
            </div>

            <h3 className="text-2xl font-black text-primary">{exam}</h3>
          </motion.div>
        ))}
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
            <h3 className="text-white text-3xl font-black uppercase tracking-tight">
              {LEADERSHIP[0].name}
            </h3>
            <p className="text-gold font-bold uppercase tracking-widest text-xs mt-1">
              {LEADERSHIP[0].role}
            </p>
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
            Leading with <span className="text-gold">Innovation</span> <br />&
            Tradition
          </h2>
          <div className="prose prose-invert prose-lg max-w-none mb-10 text-slate-300">
            <p className="italic text-xl leading-relaxed mb-6">
              "{LEADERSHIP[0].description}"
            </p>
            <p className="font-medium text-lg leading-relaxed">
              At JMS Competition Classes, we are committed to guiding students
              toward success in competitive examinations through quality
              education, expert mentorship, and disciplined preparation.
            </p>
          </div>
          <div className="flex items-center gap-6 pt-8 border-t border-white/10">
            <div className="hidden sm:block">
              <h4 className="text-white font-black uppercase text-xl leading-none">
                {LEADERSHIP[0].name}
              </h4>
              <p className="text-gold font-bold text-xs uppercase tracking-widest mt-2">
                {LEADERSHIP[0].role}
              </p>
            </div>
            <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />
            <img
              src="https://ips.schoolaxis.info/uploads/media/signature_2.png"
              className="h-12 invert opacity-60"
              alt="Signature"
            />
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
          {
            title: "Expert Faculty",
            desc: "Learn from experienced mentors who understand competitive exam patterns and guide students strategically.",
            icon: GraduationCap,
          },
          {
            title: "Regular Mock Tests",
            desc: "Comprehensive test series and performance analysis to improve speed, accuracy, and confidence.",
            icon: ClipboardCheck,
          },
          {
            title: "Smart Learning",
            desc: "Digital classrooms, modern teaching methods, and updated study materials for effective preparation.",
            icon: Monitor,
          },
          {
            title: "Result-Oriented Approach",
            desc: "Focused preparation, personal mentorship, and continuous support to maximize selection chances.",
            icon: Trophy,
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: [0, 1], scale: [0.95, 1] }}
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-100 group hover:bg-gold transition-all duration-500"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
              <feature.icon className="w-8 h-8 text-gold" />
            </div>
            <h4 className="text-xl font-black text-primary mb-4 group-hover:text-primary uppercase tracking-tight">
              {feature.title}
            </h4>
            <p className="text-slate-600 font-medium leading-relaxed group-hover:text-primary transition-colors">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function About() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisionMission />
      <ExamsSection />
      <ChairmanMessage />
      <Features />
    </main>
  );
}
