import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, ExternalLink } from 'lucide-react';

const universities = [
  { id: 0, name: 'Krupanidhi Group of Institutions', location: 'Bangalore', type: 'Private', rating: '4.8/5' },
  { id: 1, name: 'Manipal Academy of Higher Education', location: 'Manipal', type: 'Private', rating: '4.8/5' },
  { id: 2, name: 'Visvesvaraya Technological University', location: 'Belagavi', type: 'Public', rating: '4.5/5' },
  { id: 3, name: 'Christ University', location: 'Bangalore', type: 'Private', rating: '4.7/5' },
  { id: 4, name: 'National Institute of Technology', location: 'Surathkal', type: 'Public', rating: '4.9/5' },
  { id: 5, name: 'Jain University', location: 'Bangalore', type: 'Private', rating: '4.6/5' },
  { id: 6, name: 'PES University', location: 'Bangalore', type: 'Private', rating: '4.7/5' },
];

const Universities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');

  const filteredUnis = universities.filter((uni) => {
    const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || uni.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || uni.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Top Universities in <span className="text-gradient">Karnataka</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Explore world-class educational institutions in the educational hub of India.
          </p>

          <div className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search universities or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex gap-2 justify-center">
              {['All', 'Public', 'Private'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-6 py-3 rounded-full font-medium transition-colors ${
                    filterType === type ? 'bg-primary text-white' : 'glass hover:bg-white/10'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredUnis.map((uni) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={uni.id}
                className="glass p-6 rounded-2xl group hover:-translate-y-1 transition-transform border border-white/5 hover:border-primary/30"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${uni.type === 'Public' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                    {uni.type}
                  </span>
                  <span className="text-sm font-medium text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-md">
                    ★ {uni.rating}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{uni.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
                  <MapPin size={16} />
                  <span>{uni.location}, Karnataka</span>
                </div>
                <button className="w-full py-2.5 rounded-xl glass hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm font-semibold">
                  View Details <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredUnis.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            No universities found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default Universities;
