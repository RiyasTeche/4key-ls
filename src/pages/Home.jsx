import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroCanvas from '../canvas/HeroCanvas';
import Testimonials from '../components/Testimonials';
import { ArrowRight, Globe, GraduationCap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Reveal animation for stats
    const statsElements = statsRef.current.children;
    gsap.fromTo(
      statsElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full lg:w-[55%] space-y-6 text-left relative z-20"
            >
              <span className="hidden md:inline-block py-1 px-3 rounded-full glass text-sm font-medium tracking-wide">
                Global Education Consultancy
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter leading-tight">
                Shape Your Future with <br />
                <span className="text-gradient">Limitless Possibilities.</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl">
                We guide you to world-class universities in Karnataka and across the globe.
                Experience seamless admissions, visa support, and career counseling.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <button className="px-6 md:px-8 py-3 rounded-full bg-white text-black text-sm md:text-base font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                  Start Your Journey <ArrowRight size={18} />
                </button>
                <button className="px-6 md:px-8 py-3 rounded-full glass text-sm md:text-base hover:bg-white/10 transition-colors font-semibold">
                  Explore Universities
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="hidden lg:block w-full lg:w-[55%] h-[50vh] lg:h-[80vh] relative z-0 lg:-ml-[10%]"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
              <HeroCanvas />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-white/10 glass relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-4xl font-bold text-gradient-blue">10,000+</h3>
              <p className="text-gray-400 font-medium">Students Placed</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-4xl font-bold text-gradient-blue">50+</h3>
              <p className="text-gray-400 font-medium">Partner Countries</p>
            </div>
            <div className="space-y-3">
              <div className="mx-auto w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-4xl font-bold text-gradient-blue">500+</h3>
              <p className="text-gray-400 font-medium">Top Universities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Snippet Section */}
      <section className="py-32 relative z-10 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A premium approach to your <span className="text-gray-500">global education.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We believe in more than just admissions. We provide a holistic strategy to ensure you select the right course, in the right country, building a strong foundation for your life and career.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
