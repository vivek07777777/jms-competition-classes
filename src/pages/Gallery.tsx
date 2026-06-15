import React from "react";
import { motion } from "motion/react";
import { Camera, Play, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Teacher", "Classes"];

const GALLERY_IMAGES = [
  {
    id: 1,
    category: "Teacher",
    title: "Director",
    url: "./anuj tiwari sir.jpeg",
  },
  {
    id: 2,
    category: "Classes",
    title: "Interactive Computer Lab",
    url: "./computer-classes.jpeg",
  },
  
  
  {
    id: 3,
    category: "Classes",
    title: "Digital Boards",
    url: "./digital-classroom.png",
  },
  {
    id: 4,
    category: "Teacher",
    title: "Mentor",
    url: "./sandeep-sir.jpeg",
  },
  {
    id: 5,
    category: "Teacher",
    title: "Educator",
    url: "./sinku-sir.jpeg",
  },
  {
    id: 6,
    category: "Teacher",
    title: "Best Faculty",
    url: "./gobinda-sir.jpeg",
  },
  {
    id: 7,
    category: "Teacher",
    title: "Best Faculty",
    url: "./aniket-sir.jpeg",
  },
  {
    id: 8,
    category: "Classes",
    title: "JMS Coaching",
    url: "./jms-logo.png",
  },
  {
    id: 9,
    category: "Classes",
    title: "Class room",
    url: "./gobinda-teaching.png",
  },
  {
    id: 10,
    category: "Classes",
    title: "Class room",
    url: "./aniket-teaching.png",
  },
  {
    id: 11,
    category: "Classes",
    title: "Class room",
    url: "./sinku-teaching.png",
  },
];

const Hero = () => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-primary">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1523050335392-463015096d8f?auto=format&fit=crop&q=80&w=2000"
        alt="Gallery"
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
          Visual Journey
        </span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          JMS <span className="text-gold italic">Gallery</span>
        </h1>
        <p className="text-slate-300 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Explore the vibrant life at JMS Bagahi through our curated visual
          moments.
        </p>
      </motion.div>
    </div>
  </section>
);

export default function Gallery() {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredImages =
    activeTab === "All"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="container mx-auto px-4 md:px-6 py-24">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 border-2",
                activeTab === tab
                  ? "bg-primary text-gold border-primary shadow-2xl"
                  : "bg-white text-slate-500 hover:bg-slate-50 border-slate-100",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredImages.map((image, idx) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              key={image.id}
              className="group relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] cursor-pointer bg-slate-100 border border-slate-100"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <span className="text-gold text-[10px] font-black uppercase tracking-widest mb-3">
                  {image.category}
                </span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-6">
                  {image.title}
                </h3>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl text-white flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl text-white flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Highlight */}
        <div className="mt-32">
          <div className="bg-primary rounded-[5rem] overflow-hidden shadow-2xl border-b-[16px] border-gold relative">
            <div className="relative aspect-video">
              <video loop className="w-full h-full object-cover" controls>
                <source src="./jms-coaching-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-10 md:p-16 text-center pointer-events-none">
                <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  JMS Competition Classes
                </span>

                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                  Experience Our
                  <span className="text-gold italic"> Campus</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
