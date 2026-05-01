import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Link as LinkIcon, Share2, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 glass mt-20 relative z-10">
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
              4Key <span className="text-primary font-medium">Learning Solution</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium education consultancy guiding students to world-class universities in Karnataka and across the globe.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                <LinkIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/universities" className="hover:text-primary transition-colors">Universities in Karnataka</Link></li>
              <li><Link to="/study-abroad" className="hover:text-primary transition-colors">Study Abroad</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Career Counseling</li>
              <li>University Admissions</li>
              <li>Visa Processing</li>
              <li>IELTS / OET Training</li>
              <li>Scholarship Assistance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Gopala Reddy Building Surjapur Road 580035, Bangalore</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98449 77556</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>fourkeyls@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} EduCore Consultancy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
