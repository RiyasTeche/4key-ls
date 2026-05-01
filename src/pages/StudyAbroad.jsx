import { motion } from 'framer-motion';
import GlobeCanvas from '../canvas/GlobeCanvas';
import { Plane, Calendar, FileCheck, Landmark } from 'lucide-react';

const destinations = [
  { name: 'United States', flag: '🇺🇸', highlight: 'Tech & Research' },
  { name: 'United Kingdom', flag: '🇬🇧', highlight: 'History & Excellence' },
  { name: 'Canada', flag: '🇨🇦', highlight: 'Immigration Friendly' },
  { name: 'Australia', flag: '🇦🇺', highlight: 'High Quality of Life' },
  { name: 'Germany', flag: '🇩🇪', highlight: 'Engineering Hub' },
  { name: 'UAE', flag: '🇦🇪', highlight: 'Tax-Free Opportunities' },
];

const StudyAbroad = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">Study <span className="text-gradient">Abroad</span></h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 lg:mb-8 leading-relaxed">
              Take your education beyond borders. We provide comprehensive guidance to help you secure admissions and visas for top universities worldwide.
            </p>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"><Plane className="text-primary w-5 h-5"/></div>
                 <div className="text-sm font-semibold">Pre-Departure</div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"><FileCheck className="text-primary w-5 h-5"/></div>
                 <div className="text-sm font-semibold">Visa Support</div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"><Landmark className="text-primary w-5 h-5"/></div>
                 <div className="text-sm font-semibold">Scholarships</div>
              </div>
              <div className="glass p-4 rounded-xl flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"><Calendar className="text-primary w-5 h-5"/></div>
                 <div className="text-sm font-semibold">Intake Planning</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
             <div className="absolute inset-0 bg-primary/10 rounded-full blur-[100px]"></div>
             <GlobeCanvas />
          </motion.div>
        </div>

        {/* Top Destinations */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-center">Top <span className="text-gradient">Destinations</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {destinations.map((country, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-4 md:p-6 rounded-2xl text-center group hover:bg-white/10 transition-colors cursor-pointer border border-white/5 hover:border-primary/50"
              >
                <div className="text-4xl md:text-5xl mb-2 md:mb-4 group-hover:scale-110 transition-transform">{country.flag}</div>
                <h3 className="font-semibold text-sm md:text-base lg:text-lg mb-1">{country.name}</h3>
                <p className="text-[10px] md:text-xs text-gray-400">{country.highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;
