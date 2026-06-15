import React, { useState } from "react";
import { motion } from "motion/react";
import {
  ClipboardCheck,
  MapPin,
  Calendar,
  FileText,
  UserCheck,
  PhoneCall,
  Clock,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./Home";
import { CONTACT_INFO } from "@/constants";
import { courses } from "./courses";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000"
          alt="Admission"
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
            Join our Community
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
            Admissions <span className="text-gold">Process</span> <br />
            2024 - 2025
          </h1>
          <div className="max-w-2xl mx-auto h-[1px] bg-gold/30" />
        </motion.div>
      </div>
    </section>
  );
};
const ProcessStep = ({ number, title, desc, icon: Icon, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex gap-8 relative group"
  >
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-white rounded-[1.5rem] flex items-center justify-center border-4 border-slate-50 shadow-xl relative z-10 group-hover:border-gold transition-all duration-500">
        <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-primary font-black text-sm border-4 border-white shadow-lg">
          0{number}
        </div>
      </div>
      <div className="w-[2px] flex-grow bg-gold/20 my-4" />
    </div>
    <div className="pt-2 pb-16">
      <h4 className="text-2xl font-black text-primary mb-3 uppercase tracking-tight">
        {title}
      </h4>
      <p className="text-slate-600 font-medium text-lg leading-relaxed max-w-lg">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    parentName: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "916299376671"; // Replace with your WhatsApp number

    const text = `
 *New Admission Enquiry - JMS Competition Classes*

 Student Name: ${formData.studentName}
 Course: ${formData.course}
 Parent Name: ${formData.parentName}
 Phone: ${formData.phone}
 Address: ${formData.address}

 Message:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-24">
            {/* Steps */}
            <div className="lg:w-1/2">
              <SectionHeading
                title="Steps to Success"
                subtitle="Registration Guide"
                centered={false}
              />
              <div className="mt-12">
                <ProcessStep
                  number={1}
                  title="Course Enquiry"
                  desc="Connect with our counselors to explore courses, exam requirements, batch timings, and preparation strategies."
                  icon={ClipboardCheck}
                />

                <ProcessStep
                  number={2}
                  title="Career Guidance"
                  desc="Get personalized guidance from our expert faculty to choose the most suitable course based on your goals."
                  icon={MapPin}
                  delay={0.1}
                />

                <ProcessStep
                  number={3}
                  title="Enrollment Process"
                  desc="Complete the registration process by submitting basic details and selecting your preferred batch."
                  icon={FileText}
                  delay={0.2}
                />

                <ProcessStep
                  number={4}
                  title="Start Preparation"
                  desc="Attend classes, access study materials, take mock tests, and begin your journey toward success."
                  icon={ShieldCheck}
                  delay={0.3}
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-1/2 relative">
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-primary p-12 md:p-16 rounded-[4rem] shadow-2xl relative z-10 border-b-8 border-gold"
              >
                <h3 className="text-3xl font-black text-white mb-8 tracking-tighter uppercase">
                  Admission Enquiry
                </h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                        Student Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none"
                        placeholder="Full Name"
                        value={formData.studentName}
                        onChange={handleChange}
                        name="studentName"
                      />
                    </div>
                    <div>
                      <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                        Applying For Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none appearance-none"
                      >
                        <option value="">Select Course</option>
                        {courses.map((course) => ( 
                           <option value={course.title} className="text-primary">{course.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none"
                      placeholder="Full Name"
                      value={formData.parentName}
                      onChange={handleChange}
                      name="parentName"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                      />
                    </div>
                    <div>
                      <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                        Address
                      </label>
                      <input
                        type="text"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none"
                        placeholder="Bagahi, Gopalganj"
                        value={formData.address}
                        onChange={handleChange}
                        name="address"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gold font-black uppercase text-[10px] tracking-widest mb-2 block">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:ring-2 focus:ring-gold outline-none resize-none"
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={handleChange}
                      name="message"
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gold text-primary font-black uppercase tracking-widest text-xs py-6 rounded-[2rem] shadow-2xl flex items-center justify-center gap-4 hover:bg-white transition-all"
                    type="submit"
                  >
                    Submit Application <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </motion.div>

              {/* Decorative */}
              <div className="absolute top-20 -right-10 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Admissions;
