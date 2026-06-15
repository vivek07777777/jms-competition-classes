import React, { useState } from "react";
import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { CONTACT_INFO } from "@/constants";
import { courses } from "./courses";

const ContactHero = () => (
  <section className="pt-40 pb-24 bg-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000"
        className="w-full h-full object-cover opacity-10 grayscale"
        alt="Contact Background"
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -mr-64 -mt-64" />
    </div>
    <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-sans">
          Connect with US
        </span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
          Get in <span className="text-gold italic">Touch</span>
        </h1>
        <p className="text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium">
          Whether you have a query about admissions, academics, or just want to
          visit our campus, our dedicated team is here to help.
        </p>
        <div className="h-1.5 w-24 bg-gold rounded-full mx-auto mt-10" />
      </motion.div>
    </div>
  </section>
);

const ContactCard = ({
  icon: Icon,
  title,
  content,
  href,
}: {
  icon: any;
  title: string;
  content: string | string[];
  href?: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-primary transition-all duration-500"
  >
    <div className="w-20 h-20 bg-slate-50 rounded-[1.5rem] flex items-center justify-center mb-8 shadow-xl group-hover:bg-gold transition-all duration-500">
      <Icon className="w-10 h-10 text-primary group-hover:text-primary" />
    </div>
    <h3 className="text-2xl font-black text-primary group-hover:text-white mb-6 uppercase tracking-tight transition-colors">
      {title}
    </h3>
    {Array.isArray(content) ? (
      <div className="space-y-2">
        {content.map((item, idx) => (
          <p
            key={idx}
            className="text-slate-600 group-hover:text-slate-300 font-medium text-lg leading-relaxed transition-colors"
          >
            {item}
          </p>
        ))}
      </div>
    ) : (
      <p className="text-slate-600 group-hover:text-slate-300 font-medium text-lg leading-relaxed transition-colors">
        {content}
      </p>
    )}
    {href && (
      <a
        href={href}
        className="mt-8 text-primary group-hover:text-gold font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
      >
        Get Directions <ArrowRight className="w-4 h-4" />
      </a>
    )}
  </motion.div>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    course: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "success" | "idle" | "submitting"
  >("idle");
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
   *New Enquiry - JMS Competition Classes*
  
   Parent Name: ${formData.parentName}
   Phone: ${formData.phone} 
   Course: ${formData.course}
  
   Message:
  ${formData.message}
  `;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <ContactHero />

      <section className="py-24 -mt-20 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            <ContactCard
              icon={MapPin}
              title="Visit Us"
              content={CONTACT_INFO.address}
              href="#map"
            />
            <ContactCard
              icon={Phone}
              title="Call Us"
              content={CONTACT_INFO.phone}
            />
            <ContactCard
              icon={Mail}
              title="Email Us"
              content={CONTACT_INFO.email}
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block font-sans">
                Enquiry Form
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-primary mb-10 tracking-tighter uppercase leading-none">
                Send us a <br />
                <span className="text-gold">Message</span>
              </h2>
              <p className="text-slate-600 text-xl mb-12 font-medium leading-relaxed max-w-xl">
                Fill out the form below and our professional admissions team
                will respond to your inquiry within 24 business hours.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-gold transition-colors duration-500">
                    <CheckCircle2 className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary uppercase text-xl mb-2 tracking-tight">
                      Direct Support
                    </h4>
                    <p className="text-slate-500 font-medium text-lg">
                      Immediate assistance for all academic and administrative
                      queries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-gold transition-colors duration-500">
                    <Clock className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-black text-primary uppercase text-xl mb-2 tracking-tight">
                      Working Hours
                    </h4>
                    <p className="text-slate-500 font-medium text-lg">
                      Mon - Sat: 08:00 AM - 04:00 PM | Sun: Closed for visits
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-gold rounded-[5rem] translate-x-4 translate-y-4 -z-10 blur-2xl opacity-10" />
              {formStatus === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary p-20 rounded-[5rem] text-center shadow-2xl border-b-8 border-gold"
                >
                  <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-10 text-primary shadow-2xl">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-lg font-medium mb-12">
                    Thank you for your interest. Expect a call or email from our
                    academic counselors shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-gold transition-all"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-primary p-12 md:p-20 rounded-[5rem] shadow-2xl border-b-[20px] border-gold space-y-8 font-sans"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gold tracking-widest ml-1">
                        Parent Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:ring-4 focus:ring-gold/20 outline-none transition-all placeholder:text-slate-600 text-white"
                        placeholder="Full Name"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-gold tracking-widest ml-1">
                        Phone Number
                      </label>
                      <input
                        required
                        type="tel"
                        className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:ring-4 focus:ring-gold/20 outline-none transition-all placeholder:text-slate-600 text-white"
                        placeholder="+91"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gold tracking-widest ml-1">
                      course
                    </label>
                    <select
                      className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:ring-4 focus:ring-gold/20 outline-none transition-all text-white appearance-none"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option className="text-primary" value="">
                        Select Course
                      </option>
                      {courses.map((course) => (
                        <option value={course.title} className="text-primary">
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase text-gold tracking-widest ml-1">
                      Inquiry Details
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-8 py-6 rounded-3xl bg-white/5 border border-white/10 focus:ring-4 focus:ring-gold/20 outline-none transition-all placeholder:text-slate-600 text-white resize-none"
                      placeholder="Share your requirements..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button
                    disabled={formStatus === "submitting"}
                    type="submit"
                    className="w-full bg-gold text-primary font-black uppercase px-8 py-8 rounded-3xl transition-all shadow-2xl flex items-center justify-center gap-6 group active:scale-[0.98] disabled:opacity-70 tracking-widest text-sm hover:bg-white"
                  >
                    {formStatus === "submitting" ? (
                      <div className="w-8 h-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry{" "}
                        <Send className="w-6 h-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[600px] w-full bg-slate-200 relative overflow-hidden transition-all duration-1000" id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d499.1310681432043!2d84.14319495128845!3d26.518953199982985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3993a555add9060f%3A0xb82f32f1f206facc!2sBagahi%20bazar!5e1!3m2!1sen!2sin!4v1781431507627!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute top-10 left-10 z-20 hidden lg:block">
          <div className="bg-primary p-10 rounded-[3rem] shadow-2xl border-l-8 border-gold">
            <h4 className="text-white font-black uppercase text-2xl mb-4 tracking-tighter">
              Campus Location
            </h4>
            <p className="text-slate-400 font-medium max-w-[200px] leading-relaxed">
              Visit our world-class school located in the heart of Bagahi.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
