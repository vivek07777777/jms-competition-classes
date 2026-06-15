import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/pages/Home";

export const courses = [
  {
    title: "बिहार दरोगा",
    description:
      "Complete preparation for Bihar SI recruitment with syllabus-focused classes, mock tests, and interview guidance.",
  },
  {
    title: "UP दरोगा",
    description:
      "Comprehensive coaching for UP Police Sub Inspector examinations with expert mentorship and practice sessions.",
  },
  {
    title: "बिहार पुलिस",
    description:
      "Dedicated preparation for Bihar Police Constable recruitment including physical and written exam guidance.",
  },
  {
    title: "बिहार पुलिस मद्य निषेध",
    description:
      "Focused coaching for Prohibition Constable exams with updated study material and test series.",
  },
  {
    title: "बिहार पुलिस ड्राइवर",
    description:
      "Specialized preparation for Bihar Police Driver recruitment covering theory and selection requirements.",
  },
  {
    title: "UP पुलिस",
    description:
      "Structured preparation program for UP Police recruitment with regular practice and performance tracking.",
  },
  {
    title: "BSSC CGL",
    description:
      "Advanced coaching for Bihar SSC CGL exams covering aptitude, reasoning, and general studies.",
  },
  {
    title: "BSSC 10+2",
    description:
      "Targeted preparation for Bihar SSC Inter-Level examinations with comprehensive subject coverage.",
  },
  {
    title: "BSSC 10th Level",
    description:
      "Exam-oriented coaching for Bihar SSC Matric Level recruitment with regular assessments.",
  },
  {
    title: "Railway",
    description:
      "Preparation for various Railway recruitment exams including NTPC, Group D, and technical posts.",
  },
  {
    title: "Banking",
    description:
      "Professional coaching for IBPS, SBI, RBI, and other banking examinations with speed-building techniques.",
  },
  {
    title: "Indian Army",
    description:
      "Written exam preparation, physical guidance, and complete support for Army recruitment aspirants.",
  },
  {
    title: "SSC",
    description:
      "Comprehensive preparation for SSC CGL, CHSL, GD, MTS, and other SSC examinations.",
  },
  {
    title: "CTET",
    description:
      "Expert guidance for Central Teacher Eligibility Test with pedagogy and subject-specific preparation.",
  },
  {
    title: "STET",
    description:
      "Focused coaching for Bihar State Teacher Eligibility Test with updated syllabus coverage.",
  },
  {
    title: "B.Ed Entrance",
    description:
      "Systematic preparation for B.Ed entrance examinations with practice papers and concept-building sessions.",
  },
  {
    title: "D.El.Ed Entrance",
    description:
      "Complete coaching for Diploma in Elementary Education entrance exams with expert faculty support.",
  },
  {
    title: "नवोदय विद्यालय",
    description:
      "Foundation program for Jawahar Navodaya Vidyalaya entrance exams with strong conceptual learning.",
  },
  {
    title: "सैनिक स्कूल",
    description:
      "Specialized preparation for Sainik School entrance examinations with academic and aptitude training.",
  },
  {
    title: "RMS",
    description:
      "Dedicated coaching for Rashtriya Military School entrance exams with disciplined preparation methods.",
  },
  {
    title: "Class 9th",
    description:
      "Strong academic foundation with concept-focused teaching and regular progress monitoring.",
  },
  {
    title: "Class 10th",
    description:
      "Board exam-oriented coaching with detailed subject coverage, revision, and test practice.",
  },
  {
    title: "Class 11th",
    description:
      "Comprehensive guidance for higher secondary studies with strong conceptual understanding.",
  },
  {
    title: "Class 12th",
    description:
      "Board examination preparation with intensive revision, doubt-solving sessions, and mock tests.",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-black">
            JMS Competition Classes
          </span>

          <h1 className="text-5xl md:text-8xl font-black text-white mt-6 tracking-tighter">
            Our Courses
          </h1>

          <p className="text-slate-300 text-xl max-w-3xl mx-auto mt-8">
            Comprehensive preparation for Government Jobs, Competitive Exams,
            School Entrance Exams, and Academic Excellence.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <SectionHeading
            title="Programs We Offer"
            subtitle="Your Path To Success"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  delay: index * 0.03,
                }}
                className="group bg-white rounded-[3rem] p-10 shadow-xl border border-slate-100 hover:border-gold/40 hover:bg-gold/5 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-8 group-hover:bg-gold transition-colors">
                  <span className="text-gold group-hover:text-primary text-2xl font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-primary mb-6 leading-tight">
                  {course.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {course.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-gold font-black uppercase tracking-widest text-xs"
                >
                  Enquire Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
