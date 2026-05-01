import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll('.timeline-item');
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Story</span></h1>
          <p className="text-xl text-gray-400">
            Pioneering global education consultancy from the heart of Karnataka. We empower students to transcend boundaries and achieve academic excellence worldwide.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Target, title: 'Mission', desc: 'To provide transparent, premium, and personalized guidance for global admissions.' },
            { icon: Lightbulb, title: 'Vision', desc: 'To be the most trusted education consultancy globally, synonymous with success.' },
            { icon: Heart, title: 'Values', desc: 'Integrity, Empathy, Excellence, and a Student-First approach in everything we do.' }
          ].map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <val.icon className="text-primary w-12 h-12 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{val.title}</h3>
              <p className="text-gray-400 leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto" ref={timelineRef}>
          <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-gradient">Journey</span></h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary before:to-transparent">
            
            {[
              { year: '2015', title: 'The Beginning', desc: 'Started in Bangalore with a small team of 3 counselors, focusing on Karnataka universities.' },
              { year: '2018', title: 'Going Global', desc: 'Expanded our services to include UK, USA, and Australian university admissions.' },
              { year: '2021', title: 'Digital Transformation', desc: 'Launched our proprietary student tracking portal and virtual counseling.' },
              { year: '2024', title: 'Industry Leaders', desc: 'Recognized as the top premium consultancy with a 98% visa success rate.' },
            ].map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active timeline-item`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-[#0a0a0a] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl">
                  <span className="text-primary font-bold text-sm tracking-widest">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-2 mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
