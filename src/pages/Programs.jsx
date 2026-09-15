import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  FolderGit2, Sparkles, BookOpen, Briefcase, Calendar, 
  ArrowRight, CheckCircle2, ChevronRight, Search, Filter,
  Code, Cpu, Layers, Award, Terminal, Wrench, ShieldCheck, Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import CourseCard from '../components/CourseCard';
import ApplyInternshipModal from '../components/ApplyInternshipModal';
import RegisterWorkshopModal from '../components/RegisterWorkshopModal';

const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'Robotics & Automation', label: 'Robotics & Automation' },
  { id: 'Web Development', label: 'Web Development' },
  { id: 'IoT', label: 'IoT & Telemetry' },
  { id: 'IoT & Automation', label: 'IoT & Smart Home' },
  { id: 'Embedded Systems', label: 'Embedded Systems' },
  { id: 'Industrial Automation', label: 'Industrial Automation' }
];

const JOURNEY_STEPS = [
  { step: '01', title: 'Learn', desc: 'Core fundamentals & concepts' },
  { step: '02', title: 'Practice', desc: 'Hands-on lab simulations' },
  { step: '03', title: 'Build', desc: 'Modular circuit & code tasks' },
  { step: '04', title: 'Work on Live Projects', desc: 'Real industry engineering', highlight: true },
  { step: '05', title: 'Complete Assessment', desc: 'Rigorous peer code review' },
  { step: '06', title: 'Earn Certificate', desc: 'Verified cryptographic credential' }
];

export default function Programs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'all';
  const initialProjectId = searchParams.get('id');

  const [activeTab, setActiveTab] = useState(initialTab === 'training' ? 'all' : initialTab);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Modals
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const { 
    courses, 
    liveProjects, 
    internshipsList, 
    workshopsList,
    addToast
  } = useApp();

  // Sync tab with URL search parameter
  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['all', 'projects', 'courses', 'internships', 'workshops'].includes(tab)) {
      setActiveTab(tab);
    } else if (tab === 'training') {
      setActiveTab('all');
      setSearchParams({});
    }
  }, [searchParams, setSearchParams]);

  // Open specific project if ID in query params
  useEffect(() => {
    if (initialProjectId && liveProjects?.length > 0) {
      const proj = liveProjects.find(p => p.id === initialProjectId);
      if (proj) {
        setSelectedProject(proj);
        setIsProjectModalOpen(true);
      }
    }
  }, [initialProjectId, liveProjects]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setSearchParams(newTab === 'all' ? {} : { tab: newTab });
  };

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  // Filter live projects
  const filteredProjects = (liveProjects || []).filter(p => {
    if (!p.published) return false;
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.technologies || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50/60 pb-24">
      
      {/* Top Banner / Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/30">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>NRET Academic & Practical Training Ecosystem</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Programs & Hands-On Pathways
            </h1>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our complete learning continuum: structured professional courses, immersive internships, interactive workshops, and high-impact <span className="text-white font-bold underline decoration-indigo-400">Live Projects</span>.
            </p>
          </div>

          {/* LEARNING JOURNEY FLOW BANNER */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-md">
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 mb-3">
              The NRET Practical Engineering Journey
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {JOURNEY_STEPS.map((step, idx) => (
                <div
                  key={step.step}
                  className={`p-3 rounded-xl border transition-all ${
                    step.highlight
                      ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-lg ring-1 ring-indigo-400/50'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  <span className={`text-[10px] font-bold block ${step.highlight ? 'text-indigo-200' : 'text-slate-400'}`}>
                    STEP {step.step}
                  </span>
                  <span className="font-bold text-xs block mt-0.5 text-white truncate">
                    {step.title}
                  </span>
                  <span className="text-[10px] text-slate-300 block mt-1 leading-tight line-clamp-1">
                    {step.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs Selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-white/10 no-scrollbar">
            {[
              { id: 'all', label: 'All Programs', icon: Layers },
              { id: 'projects', label: 'Live Projects ⭐', icon: FolderGit2, highlight: true },
              { id: 'courses', label: 'Professional Courses', icon: BookOpen },
              { id: 'internships', label: 'Internship Programs', icon: Briefcase },
              { id: 'workshops', label: 'Workshops', icon: Calendar }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-programs-${tab.id}`}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 shrink-0 transition-all ${
                    isActive
                      ? tab.highlight
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                        : 'bg-white text-slate-900 shadow-md'
                      : tab.highlight
                      ? 'bg-indigo-900/40 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${tab.highlight ? 'text-indigo-300' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">

        {/* ============================================================ */}
        {/* 1. LIVE PROJECTS SECTION (CORE FOCUS OF THE PROMPT)           */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <section id="live-projects" className="space-y-8 scroll-mt-24">
            
            {/* Live Projects Header */}
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-white rounded-3xl p-6 sm:p-10 border border-indigo-100 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-xs">
                    <FolderGit2 className="w-3.5 h-3.5" />
                    <span>Real-World Project-Based Learning</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Build Real Projects. Gain Real Experience.
                  </h2>
                  
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Give students the opportunity to work on practical, real-world technology projects and gain hands-on industry experience while learning.
                  </p>
                </div>

                <div className="hidden lg:block text-right">
                  <span className="text-xs font-bold text-indigo-600 block uppercase tracking-wider">
                    Practical Portfolio
                  </span>
                  <span className="text-3xl font-extrabold text-slate-900 block mt-0.5">
                    {(liveProjects || []).length} Live Projects
                  </span>
                  <span className="text-xs text-slate-500">Mentored by Technical Faculty</span>
                </div>
              </div>

              {/* Supporting message banner */}
              <div className="mt-4 p-4 rounded-2xl bg-indigo-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-indigo-300" />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-indigo-100">
                    "Go beyond theory. Work on real-world projects in robotics, embedded systems, IoT, software development and web technologies."
                  </p>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('project-cards-grid');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-xl bg-white text-indigo-950 font-bold text-xs hover:bg-indigo-50 shrink-0 transition"
                >
                  Explore Catalog
                </button>
              </div>
            </div>

            {/* Category Filter & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {PROJECT_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search live projects, tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-2xs"
                />
              </div>

            </div>

            {/* Projects Grid */}
            <div id="project-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelectProject={handleOpenProject}
                />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
                <FolderGit2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-800">No matching live projects found</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try adjusting your search query or selecting "All Projects" category.
                </p>
                <button
                  onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                  className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Workflow Showcase Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
                    Methodology
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    The 6-Phase Engineering Lifecycle
                  </h3>
                </div>
                <span className="text-xs text-slate-500">
                  Practiced by student teams under continuous faculty mentorship
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                  { step: "Idea", label: "01. Ideation", desc: "User stories & specs" },
                  { step: "Planning", label: "02. Planning", desc: "Hardware BOM & schematics" },
                  { step: "Design", label: "03. Design", desc: "CAD & UI/UX wireframes" },
                  { step: "Development", label: "04. Development", desc: "Embedded C / Web stack" },
                  { step: "Testing", label: "05. Testing", desc: "Signal & logic verification" },
                  { step: "Deployment", label: "06. Deployment", desc: "Live plant commissioning" }
                ].map((ph, pIdx) => (
                  <div key={ph.step} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                    <span className="text-xs font-bold text-indigo-600 font-mono">
                      Phase {pIdx + 1}
                    </span>
                    <h5 className="font-bold text-xs text-slate-900 mt-1">{ph.step}</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">{ph.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>
        )}

        {/* ============================================================ */}
        {/* 2. PROFESSIONAL COURSES SECTION                              */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'courses') && (
          <section id="courses" className="space-y-6 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Structured Curriculums & Assessments</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Professional Courses
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Self-paced and instructor-led courses featuring lecture videos, register-level code walk-throughs, and quizzes.
                </p>
              </div>

              <Link
                to="/courses"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View All {(courses || []).length} Courses</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(courses || []).slice(0, 3).map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 3. INTERNSHIP PROGRAMS SECTION                               */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'internships') && (
          <section id="internships" className="space-y-6 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Practical Industry Opportunities</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Internship Programs
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Work on verified industry projects with stipend support, weekly faculty mentorship, and placement assistance.
                </p>
              </div>

              <Link
                to="/internships"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View Full Internship Portal</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(internshipsList || []).slice(0, 3).map(internship => (
                <div
                  key={internship.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700">
                        {internship.domain}
                      </span>
                      <span className="text-xs font-bold text-slate-700">{internship.duration}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{internship.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{internship.description}</p>
                    
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>Stipend: <span className="font-bold text-slate-800">{internship.stipend}</span></span>
                      <span>Mode: <span className="font-semibold text-slate-700">{internship.type}</span></span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedInternship(internship)}
                    className="w-full py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold text-xs transition"
                  >
                    Apply for Internship
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* 4. WORKSHOPS SECTION                                         */}
        {/* ============================================================ */}
        {(activeTab === 'all' || activeTab === 'workshops') && (
          <section id="workshops" className="space-y-6 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Short-Term Technical Intensives</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Technical Workshops
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                  Intensive weekend bootcamps, hands-on masterclasses, and industry tool demonstrations.
                </p>
              </div>

              <Link
                to="/workshops"
                className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>View Full Workshop Calendar</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(workshopsList || []).slice(0, 3).map(workshop => (
                <div
                  key={workshop.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-800">
                        {workshop.category}
                      </span>
                      <span className="text-xs font-bold text-indigo-600">₹{workshop.fee}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900">{workshop.title}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{workshop.description}</p>
                    
                    <div className="pt-2 text-xs text-slate-500 space-y-1">
                      <div>Date: <span className="font-semibold text-slate-700">{workshop.date}</span></div>
                      <div>Seats Left: <span className="font-bold text-emerald-600">{workshop.seatsRemaining} seats</span></div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedWorkshop(workshop)}
                    className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition shadow-xs"
                  >
                    Register for Workshop
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* PROJECT DETAILS MODAL */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={() => {
          setIsProjectModalOpen(false);
          setSelectedProject(null);
        }}
      />

      {/* Internship Modal */}
      {selectedInternship && (
        <ApplyInternshipModal
          internship={selectedInternship}
          isOpen={Boolean(selectedInternship)}
          onClose={() => setSelectedInternship(null)}
        />
      )}

      {/* Workshop Modal */}
      {selectedWorkshop && (
        <RegisterWorkshopModal
          workshop={selectedWorkshop}
          isOpen={Boolean(selectedWorkshop)}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}

    </div>
  );
}
