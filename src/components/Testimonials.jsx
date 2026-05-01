import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    university: 'University of Toronto',
    text: 'EduCore made my Canadian dream come true. Their visa assistance and SOP review were game-changers.',
    image: 'https://i.pravatar.cc/150?img=11'
  },
  {
    id: 2,
    name: 'Priya Patel',
    university: 'Manipal Institute of Technology',
    text: 'The career counseling I received was incredibly insightful. They helped me choose the exact right course in Karnataka.',
    image: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Arjun Reddy',
    university: 'University of Melbourne',
    text: 'A truly premium experience. From day one to post-landing, the support was seamless and extremely professional.',
    image: 'https://i.pravatar.cc/150?img=8'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Student <span className="text-gradient">Success Stories</span></h2>
          <p className="text-sm md:text-base text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass rounded-3xl p-6 md:p-12 relative">
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-8 h-8 md:w-12 md:h-12 text-white/5" />
            
            <div className="h-56 md:h-40 lg:h-32 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <p className="text-sm lg:text-2xl font-medium leading-relaxed mb-6 md:mb-8 italic text-gray-200">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-primary object-cover"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-sm md:text-base">{testimonials[currentIndex].name}</h4>
                      <p className="text-xs md:text-sm text-primary">{testimonials[currentIndex].university}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={next} className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
