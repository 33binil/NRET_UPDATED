import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Star, BookOpen, Users, Award, Mail, ArrowRight, Search } from 'lucide-react';

export default function Instructors() {
  const { instructorsList, courses } = useApp();
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = instructorsList.filter((inst) =>
    inst.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inst.expertise.some((e) => e.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              WORLD-CLASS FACULTY
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Meet Our Expert Instructors
            </h1>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Learn robotics, embedded firmware, and IoT from active researchers, patent holders, and senior engineering leads.
            </p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search faculty or domain..."
              className="w-full pl-10 pr-4 py-2 bg-white rounded-xl text-xs border border-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </motion.div>

        {/* Instructors Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filtered.map((inst, idx) => {
              const instCourses = courses.filter((c) => c.instructorId === inst.id);
              return (
                <motion.div
                  layout
                  key={inst.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src={inst.avatar}
                        alt={inst.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{inst.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900">{inst.name}</h3>
                    <p className="text-xs font-semibold text-indigo-600 mt-0.5">{inst.designation}</p>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{inst.bio}</p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {inst.expertise.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-slate-50 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      <span className="font-bold text-slate-900">{inst.studentsCount.toLocaleString()}</span> students
                    </div>
                    <Link
                      to={`/instructors/${inst.id}`}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
