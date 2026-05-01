import { motion } from 'framer-motion';
import { BookOpen, Plane, FileText, CheckCircle, GraduationCap, Compass } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Career Counseling',
    desc: 'Discover your true potential with our expert counselors who guide you in choosing the right path.',
  },
  {
    icon: GraduationCap,
    title: 'University Admissions',
    desc: 'Seamless application process for top universities in Karnataka and globally, ensuring higher acceptance rates.',
  },
  {
    icon: Plane,
    title: 'Visa Processing',
    desc: 'End-to-end visa assistance with a 98% success rate, from documentation to interview preparation.',
  },
  {
    icon: BookOpen,
    title: 'IELTS / OET Training',
    desc: 'Premium coaching with certified trainers to help you achieve your desired band scores.',
  },
  {
    icon: FileText,
    title: 'Documentation Assistance',
    desc: 'Meticulous review of SOPs, LORs, and resumes to make your profile stand out to admission committees.',
  },
  {
    icon: CheckCircle,
    title: 'Post-Landing Support',
    desc: 'We ensure a smooth transition with accommodation assistance and local orientation in your destination country.',
  },
];

const Services = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">What We Offer</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive education solutions designed to make your dream of studying in a top university a reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer border border-white/5 hover:border-primary/50"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
