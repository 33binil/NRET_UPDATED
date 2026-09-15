import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useApp } from '../context/AppContext';
import ApplyInternshipModal from '../components/ApplyInternshipModal';
import {
  Briefcase,
  Clock,
  MapPin,
  Award,
  DollarSign,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Search,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Cpu,
  Bot,
  Zap,
  ShieldCheck,
  Users,
  Layers,
  GraduationCap,
  Eye,
  EyeOff
} from 'lucide-react';

export default function Internships() {
  const { internshipsList = [] } = useApp();
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMode, setSelectedMode] = useState('All');
  
  // Track which internship cards are expanded to view details
  const [expandedCardIds, setExpandedCardIds] = useState({});

  // Extract unique categories safely
  const categories = useMemo(() => {
    const set = new Set(['All']);
    internshipsList.forEach(item => {
      if (item.category) set.add(item.category);
    });
    return Array.from(set);
  }, [internshipsList]);

  // Filter internships
  const filteredInternships = useMemo(() => {
    return internshipsList.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category?.toLowerCase() === activeCategory.toLowerCase();
      
      const matchesMode = selectedMode === 'All' || 
        (selectedMode === 'Remote' && item.mode?.toLowerCase().includes('remote')) ||
        (selectedMode === 'Hybrid' && item.mode?.toLowerCase().includes('hybrid')) ||
        (selectedMode === 'On-Campus' && (item.mode?.toLowerCase().includes('campus') || item.mode?.toLowerCase().includes('lab')));

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query || 
        item.title?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query) ||
        item.projectTheme?.toLowerCase().includes(query) ||
        item.skillsRequired?.some(s => s.toLowerCase().includes(query)) ||
        item.outcomes?.some(o => o.toLowerCase().includes(query));

      return matchesCategory && matchesMode && matchesQuery;
    });
  }, [internshipsList, activeCategory, selectedMode, searchQuery]);

  const toggleCardDetails = (id) => {
    setExpandedCardIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleApply = (internship) => {
    setSelectedInternship(internship);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>Practical Industrial Exposure</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Industry Internship Programs
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Bridge academic theory and commercial engineering. Build production-grade autonomous rovers, bare-metal embedded firmware, and industrial IoT systems under direct mentorship from veteran hardware engineers.
          </p>
        </motion.div>

        {/* Value Proposition / Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Industry Credential</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Official internship completion letter, verified digital certificate, and personalized recommendation letter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Stipend & Hardware Kits</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Merit-based stipends and full hardware dev-kits shipped directly to your doorstep for practical execution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">1-on-1 Mentor Guidance</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Weekly code reviews, hardware debugging clinic sessions, and capstone presentation feedback.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-md transition"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Direct Placement Referrals</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Fast-track interview pipelines to our 40+ robotics, automotive, and industrial automation hiring partners.
            </p>
          </motion.div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by role, skill (e.g., ROS2, Python, C++, KiCad)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-indigo-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Mode Select */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <span className="text-xs text-slate-500 font-medium">Format:</span>
              <div className="inline-flex rounded-xl p-1 bg-slate-100 text-xs">
                {['All', 'Hybrid', 'Remote', 'On-Campus'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSelectedMode(mode)}
                    className={`px-3 py-1.5 rounded-lg font-medium transition ${
                      selectedMode === mode
                        ? 'bg-white text-indigo-600 shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-slate-700">
            Showing <span className="text-indigo-600 font-bold">{filteredInternships.length}</span> open positions
          </div>
          <span className="text-xs text-slate-400">Click any position to review requirements and apply</span>
        </div>

        {/* Empty State */}
        {filteredInternships.length === 0 && (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">No internship positions matched</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search terms or filter criteria to see available opportunities.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setSelectedMode('All'); setSearchQuery(''); }}
              className="px-4 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-full text-xs hover:bg-indigo-100 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Internships Grid - Compact short cards by default */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredInternships.map((item) => {
              const isExpanded = !!expandedCardIds[item.id];
              const highlights = item.outcomes || item.highlights || [];
              const syllabus = item.curriculum || [];
              const skills = item.skillsRequired || [];
              const desc = item.projectTheme || item.desc || "Comprehensive project-driven industrial engineering internship.";
              const starts = item.startDate || item.deadline || "1st of Next Month";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className={`bg-white rounded-3xl border transition-all duration-200 flex flex-col justify-between ${
                    isExpanded
                      ? 'border-indigo-200 shadow-xl ring-2 ring-indigo-500/10 md:col-span-2 lg:col-span-3 p-7 sm:p-9'
                      : 'border-slate-100 shadow-2xs hover:shadow-lg p-6 sm:p-7'
                  }`}
                >
                <div>
                  {/* Category & Stipend Badges */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100/60">
                        {item.category || 'Engineering'}
                      </span>
                      {item.seats && (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {item.seats} Seats
                        </span>
                      )}
                    </div>

                    {item.stipend && (
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full shrink-0">
                        {item.stipend}
                      </span>
                    )}
                  </div>

                  {/* Position Title */}
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h2>

                  {/* Capstone Project Theme */}
                  <div className="mt-3.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>Capstone Project Theme</span>
                    </div>
                    <p className={`text-xs font-semibold text-slate-800 ${isExpanded ? '' : 'line-clamp-2'}`}>
                      {desc}
                    </p>
                  </div>

                  {/* Short Specs Row: Duration, Mode, Starts */}
                  <div className="grid grid-cols-3 gap-2 mt-4 pt-3.5 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium">Duration</span>
                      <span className="font-semibold text-slate-800 truncate mt-0.5" title={item.duration}>
                        {item.duration}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium">Mode</span>
                      <span className="font-semibold text-slate-800 truncate mt-0.5" title={item.mode}>
                        {item.mode}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-medium">Cohort Starts</span>
                      <span className="font-semibold text-slate-800 truncate mt-0.5" title={starts}>
                        {starts}
                      </span>
                    </div>
                  </div>

                  {/* ============================================================ */}
                  {/* EXPANDED SECTION: ONLY SHOWN AFTER CLICKING VIEW DETAILS    */}
                  {/* ============================================================ */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-100 space-y-6 animate-in fade-in duration-200">
                      
                      {/* Eligibility Banner */}
                      {item.eligibility && (
                        <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100 text-xs text-slate-700">
                          <span className="font-bold text-amber-900 block mb-1">Eligibility Criteria:</span>
                          <span className="leading-relaxed">{item.eligibility}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Left Col: Prerequisites & Skills */}
                        <div className="space-y-4">
                          {skills.length > 0 && (
                            <div className="space-y-2">
                              <span className="text-xs font-bold text-slate-800 block">Prerequisites & Desired Skills:</span>
                              <div className="flex flex-wrap gap-1.5">
                                {skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Outcomes Checklist */}
                          {highlights.length > 0 && (
                            <div className="space-y-2.5 pt-2">
                              <span className="text-xs font-bold text-slate-800 block">What You Will Master & Build:</span>
                              <div className="space-y-2">
                                {highlights.map((outcome, idx) => (
                                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{outcome}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Right Col: Milestone Syllabus */}
                        <div className="space-y-4">
                          {syllabus.length > 0 && (
                            <div className="p-5 bg-indigo-50/40 rounded-2xl border border-indigo-100/60 space-y-3">
                              <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-indigo-600" />
                                <span>Program Milestone Syllabus</span>
                              </span>
                              <div className="space-y-2.5 pt-1">
                                {syllabus.map((milestone, mIdx) => (
                                  <div key={mIdx} className="flex items-start gap-3 text-xs text-slate-700">
                                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                      {mIdx + 1}
                                    </span>
                                    <span className="leading-snug">{milestone}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-500 space-y-1">
                            <div className="font-semibold text-slate-700">Selection Method:</div>
                            <p>Merit selection via profile review & technical questionnaire. Rolling admissions until all {item.seats || 25} seats are filled.</p>
                          </div>
                        </div>

                      </div>

                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {!isExpanded ? (
                    <>
                      <span className="text-[11px] text-slate-400 font-medium">
                        Admissions open
                      </span>
                      <button
                        onClick={() => toggleCardDetails(item.id)}
                        className="px-4 py-2 rounded-full bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to View Details</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-300 ml-0.5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleCardDetails(item.id)}
                        className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 text-xs font-semibold transition flex items-center gap-1.5"
                      >
                        <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                        <span>Hide Details</span>
                        <ChevronUp className="w-3.5 h-3.5 text-slate-400" />
                      </button>

                      {/* Application Button is only shown after expanding details */}
                      <button
                        onClick={() => handleApply(item)}
                        className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-semibold shadow-md shadow-indigo-100 hover:shadow-indigo-200 transition flex items-center gap-2"
                      >
                        <span>Apply for Program</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </>
                  )}
                </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* How The Internship Works / 4 Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-2xs space-y-8"
        >
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              SELECTION & TRAINING JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How The NRET Internship Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              From online application to final industry jury defense, our structured 4-phase process ensures tangible career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2.5 transition">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900">Online Profile Review</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Submit your degree details, technical interests, and why you want to build hardware prototypes.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2.5 transition">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900">Hardware Kit Onboarding</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Receive the microcontroller, sensor array, and development kit with lab access credentials.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2.5 transition">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900">Weekly Mentor Sprints</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Iterate on your capstone rover or firmware with bi-weekly code reviews and circuit debug clinics.
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2.5 transition">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-sm flex items-center justify-center mx-auto">
                4
              </div>
              <h3 className="font-bold text-sm text-slate-900">Jury Defense & Placement</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Present your working prototype to industrial experts, earn certified credentials, and interview referrals.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Interactive Application Modal */}
      <ApplyInternshipModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        internship={selectedInternship}
      />
    </div>
  );
}
