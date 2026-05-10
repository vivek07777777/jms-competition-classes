import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Camera, Play, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = ["All", "Campus", "Academic", "Sports", "Cultural", "Events"];

const GALLERY_IMAGES = [
  { id: 1, category: "Campus", title: "Main Campus", url: "https://ips.schoolaxis.info/uploads/media/ASSEMBLY.jpg" },
  { id: 2, category: "Academic", title: "Interactive Science Lab", url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800" },
  { id: 3, category: "Sports", title: "Sports Meet", url: "https://ips.schoolaxis.info/uploads/media/ACTIVITY.jpg" },
  { id: 4, category: "Cultural", title: "Cultural Fest Dance", url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" },
  { id: 5, category: "Academic", title: "Computer Education", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800" },
  { id: 6, category: "Events", title: "Prize Distribution", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" },
  { id: 7, category: "Campus", title: "School Library", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800" },
  { id: 8, category: "Sports", title: "Basketball Practice", url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800" },
  { id: 9, category: "Cultural", title: "Art & Craft Class", url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800" },
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
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Visual Journey</span>
        <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
          Our School <span className="text-gold italic">Gallery</span>
        </h1>
        <p className="text-slate-300 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
          Explore the vibrant life at IPS Lachhiya through our curated visual moments.
        </p>
      </motion.div>
    </div>
  </section>
);

export default function Gallery() {
  const [activeTab, setActiveTab] = React.useState("All");

  const filteredImages = activeTab === "All" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

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
                  : "bg-white text-slate-500 hover:bg-slate-50 border-slate-100"
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
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <span className="text-gold text-[10px] font-black uppercase tracking-widest mb-3">{image.category}</span>
                <h3 className="text-white text-2xl font-black uppercase tracking-tight mb-6">{image.title}</h3>
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
          <div className="bg-primary rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl border-b-[16px] border-gold">
            <img 
              src="https://images.unsplash.com/photo-1523050335392-463015096d8f?auto=format&fit=crop&q=80&w=2000" 
              alt="Campus" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale pointer-events-none"
            />
            <div className="relative z-10 max-w-4xl mx-auto">
              <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Cinematic Experience</span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none">Take a <span className="text-gold italic">Virtual</span> Tour</h2>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
                Experience our world-class campus atmosphere and facilities through a high-definition cinematic journey.
              </p>
              <motion.button 
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 className="w-24 h-24 bg-gold text-primary rounded-full flex items-center justify-center mx-auto shadow-2xl transition-all group"
              >
                <Play className="w-10 h-10 fill-primary ml-1 group-hover:scale-110 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
