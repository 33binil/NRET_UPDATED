import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Search, X, BookOpen, User, Briefcase, Calendar, ArrowRight } from 'lucide-react';

export default function GlobalSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const { courses, instructorsList, internshipsList, workshopsList } = useApp();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // Toggle or open search
        if (!isOpen) {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCourses = query.trim() ? courses.filter(c =>
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase()) ||
    c.instructor.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 4) : [];

  const filteredInstructors = query.trim() ? instructorsList.filter(i =>
    i.name.toLowerCase().includes(query.toLowerCase()) ||
    i.expertise.some(e => e.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 3) : [];

  const filteredInternships = query.trim() ? internshipsList.filter(int =>
    int.title.toLowerCase().includes(query.toLowerCase()) ||
    int.category.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3) : [];

  const filteredWorkshops = query.trim() ? workshopsList.filter(w =>
    w.title.toLowerCase().includes(query.toLowerCase()) ||
    w.instructor.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 3) : [];

  const totalResults = filteredCourses.length + filteredInstructors.length + filteredInternships.length + filteredWorkshops.length;

  const handleSelect = (url) => {
    navigate(url);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-indigo-600 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search robotics, Arduino, ESP32, ROS 2, instructors, internships..."
            className="flex-1 bg-transparent text-slate-800 placeholder-slate-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-200/80 rounded-md hover:bg-slate-300 transition"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query.trim() ? (
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {['Robotics', 'ESP32', 'Arduino', 'ROS 2', 'PLC SCADA', 'Dr. Arun Kumar', 'Summer Internship'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              No results found for "<span className="font-semibold text-slate-800">{query}</span>". Try another keyword like "robotics" or "embedded".
            </div>
          ) : (
            <>
              {/* Courses */}
              {filteredCourses.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Courses ({filteredCourses.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredCourses.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleSelect(`/courses/${c.id}`)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-indigo-50/70 cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={c.thumbnail} alt={c.title} className="w-10 h-10 rounded-lg object-cover" />
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">
                              {c.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              {c.category} • {c.instructor}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-slate-900">${c.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructors */}
              {filteredInstructors.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-violet-600 mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Instructors ({filteredInstructors.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredInstructors.map((inst) => (
                      <div
                        key={inst.id}
                        onClick={() => handleSelect(`/instructors/${inst.id}`)}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-violet-50/70 cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <img src={inst.avatar} alt={inst.name} className="w-9 h-9 rounded-full object-cover" />
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-violet-600">
                              {inst.name}
                            </div>
                            <div className="text-xs text-slate-500">{inst.designation}</div>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-1 transition" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Internships */}
              {filteredInternships.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Internships ({filteredInternships.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredInternships.map((intern) => (
                      <div
                        key={intern.id}
                        onClick={() => handleSelect('/internships')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50/70 cursor-pointer transition group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700">
                            {intern.title}
                          </div>
                          <div className="text-xs text-slate-500">{intern.duration} • {intern.mode}</div>
                        </div>
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                          Apply
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Workshops */}
              {filteredWorkshops.length > 0 && (
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Workshops ({filteredWorkshops.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {filteredWorkshops.map((w) => (
                      <div
                        key={w.id}
                        onClick={() => handleSelect('/workshops')}
                        className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/70 cursor-pointer transition group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-amber-700">
                            {w.title}
                          </div>
                          <div className="text-xs text-slate-500">{w.date} • {w.mode}</div>
                        </div>
                        <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded">
                          Reserve
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
          <span>Navigate with arrow keys or mouse</span>
          <span>Press ESC to exit</span>
        </div>
      </div>
    </div>
  );
}
