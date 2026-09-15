import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Users,
  BookOpen,
  DollarSign,
  TrendingUp,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  Briefcase,
  Calendar,
  Layers,
  Search,
  X,
  ShieldCheck,
  Award,
  ArrowUpRight,
  Filter,
  Download,
  Settings,
  RefreshCw,
  CheckCircle2,
  Clock,
  MapPin,
  Eye,
  AlertCircle,
  Sparkles,
  SlidersHorizontal,
  BarChart3,
  ChevronRight,
  UserPlus,
  ExternalLink,
  Save,
  FolderGit2
} from 'lucide-react';

export default function AdminDashboard() {
  const {
    courses,
    allStudents,
    adminStats,
    addCourse,
    updateCourse,
    deleteCourse,
    internshipsList,
    addInternship,
    updateInternship,
    deleteInternship,
    workshopsList,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop,
    liveProjects,
    addLiveProject,
    updateLiveProject,
    deleteLiveProject,
    toggleProjectPublish,
    addStudent,
    updateStudent,
    deleteStudent,
    transactions,
    systemSettings,
    updateSystemSettings,
    currentUser,
    toggleUserRole,
    addToast
  } = useApp();

  // Active Tab State
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'courses', 'students', 'internships', 'workshops', 'transactions', 'settings'

  // Search & Filter States
  const [courseSearch, setCourseSearch] = useState('');
  const [courseCategoryFilter, setCourseCategoryFilter] = useState('all');
  const [studentSearch, setStudentSearch] = useState('');
  const [studentStatusFilter, setStudentStatusFilter] = useState('all');

  // Modal States
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showInternshipModal, setShowInternshipModal] = useState(false);
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectSearch, setProjectSearch] = useState('');
  const [projectCategoryFilter, setProjectCategoryFilter] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState(null); // { type: 'course'|'student'|'internship'|'workshop'|'project', id: string, title: string }

  // Live Project Form State
  const initialProjectForm = {
    title: '',
    category: 'Robotics & Automation',
    type: 'Team Project',
    duration: '8 Weeks',
    level: 'Intermediate',
    status: 'Live Project',
    mentor: 'Dr. Arun Kumar',
    mentorDesignation: 'Lead Robotics Faculty',
    mentorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    shortDesc: '',
    fullDesc: '',
    problemStatement: '',
    technologies: 'Arduino, Embedded C, Sensors',
    objectives: 'Design circuit schematics\nWrite responsive firmware\nTest and validate telemetry',
    skillsGained: 'Sensor calibration, Motor control, Hardware debugging',
    studentResponsibilities: 'Develop firmware drivers\nConduct circuit tests\nDocument deliverables',
    maxTeamSize: 4,
    deadline: 'Monthly Cohorts',
    published: true,
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80'
  };
  const [projectForm, setProjectForm] = useState(initialProjectForm);

  // Course Form State
  const initialCourseForm = {
    title: '',
    category: 'Robotics & Automation',
    categoryId: 'robotics',
    instructor: 'Dr. Arun Kumar',
    instructorId: 'arun-kumar',
    price: 49.99,
    originalPrice: 99.99,
    duration: '24 Hours (6 Weeks)',
    level: 'Beginner to Intermediate',
    shortDesc: 'Comprehensive industrial training with real hardware and practical firmware lab experiments.',
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    isPopular: false
  };
  const [courseForm, setCourseForm] = useState(initialCourseForm);

  // Student Form State
  const [studentForm, setStudentForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Autonomous Mobile Robotics with ROS 2',
    status: 'Active',
    progress: 0
  });

  // Internship Form State
  const [internshipForm, setInternshipForm] = useState({
    title: '',
    category: 'Robotics & Embedded Systems',
    duration: '3 Months (Hybrid / Remote)',
    stipend: 'Competitive Monthly Stipend',
    mode: 'Hybrid / Remote with Hardware Kit',
    seats: 25,
    startDate: '1st of Next Month',
    projectTheme: 'Autonomous Mobile Robot Fleet with ROS 2 & Cloud Telemetry'
  });

  // Workshop Form State
  const [workshopForm, setWorkshopForm] = useState({
    title: '',
    date: 'Saturday, Nov 28, 2026',
    duration: '2 Days (16 Hours)',
    instructor: 'Dr. Arun Kumar',
    mode: 'In-Person Lab & Live Stream',
    seatsTotal: 50,
    seatsRemaining: 50,
    fee: 'Free for Students / Kit $25',
    tag: 'Hands-on Lab',
    description: 'Hardware masterclass with live breadboarding, oscilloscope testing, and firmware flashing.'
  });

  // Settings Form State
  const [settingsForm, setSettingsForm] = useState({ ...systemSettings });

  // Filtered Courses
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const matchSearch =
        c.title.toLowerCase().includes(courseSearch.toLowerCase()) ||
        c.instructor.toLowerCase().includes(courseSearch.toLowerCase());
      const matchCat =
        courseCategoryFilter === 'all' ||
        c.categoryId === courseCategoryFilter ||
        c.category.toLowerCase().includes(courseCategoryFilter.toLowerCase());
      return matchSearch && matchCat;
    });
  }, [courses, courseSearch, courseCategoryFilter]);

  // Filtered Students
  const filteredStudents = useMemo(() => {
    return allStudents.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(studentSearch.toLowerCase()) ||
        s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
        (s.course && s.course.toLowerCase().includes(studentSearch.toLowerCase()));
      const matchStatus =
        studentStatusFilter === 'all' || s.status.toLowerCase() === studentStatusFilter.toLowerCase();
      return matchSearch && matchStatus;
    });
  }, [allStudents, studentSearch, studentStatusFilter]);

  // Handlers
  const handleOpenAddCourse = () => {
    setEditingCourse(null);
    setCourseForm(initialCourseForm);
    setShowCourseModal(true);
  };

  const handleOpenEditCourse = (course) => {
    setEditingCourse(course);
    setCourseForm({
      title: course.title || '',
      category: course.category || 'Robotics & Automation',
      categoryId: course.categoryId || 'robotics',
      instructor: course.instructor || 'Dr. Arun Kumar',
      instructorId: course.instructorId || 'arun-kumar',
      price: course.price || 49.99,
      originalPrice: course.originalPrice || 99.99,
      duration: course.duration || '24 Hours',
      level: course.level || 'Beginner to Intermediate',
      shortDesc: course.shortDesc || '',
      thumbnail: course.thumbnail || '',
      isPopular: !!course.isPopular
    });
    setShowCourseModal(true);
  };

  const handleSaveCourse = (e) => {
    e.preventDefault();
    if (!courseForm.title.trim()) return;

    if (editingCourse) {
      updateCourse(editingCourse.id, {
        ...courseForm,
        rating: editingCourse.rating || 5.0,
        ratingCount: editingCourse.ratingCount || 1,
        studentsCount: editingCourse.studentsCount || 0
      });
    } else {
      addCourse({
        ...courseForm,
        instructorAvatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
        modules: [
          {
            id: 'mod-1',
            title: 'Module 01: Engineering Architecture & Hardware Setup',
            lessons: [
              { id: 'l-1', title: 'Hardware Overview & Pinout Analysis', duration: '15:20', completed: false },
              { id: 'l-2', title: 'Flashing Firmware & Initial Boot Test', duration: '20:45', completed: false }
            ]
          }
        ]
      });
    }
    setShowCourseModal(false);
  };

  const handleSaveStudent = (e) => {
    e.preventDefault();
    if (!studentForm.name.trim() || !studentForm.email.trim()) return;
    addStudent({
      ...studentForm,
      courseId: 'nret-rob-101'
    });
    setShowStudentModal(false);
    setStudentForm({
      name: '',
      email: '',
      phone: '',
      course: 'Autonomous Mobile Robotics with ROS 2',
      status: 'Active',
      progress: 0
    });
  };

  const handleSaveInternship = (e) => {
    e.preventDefault();
    if (!internshipForm.title.trim()) return;
    addInternship({
      ...internshipForm,
      eligibility: 'Engineering Students & Graduates',
      skillsRequired: ['C / C++', 'Microcontrollers', 'Basic Circuitry'],
      outcomes: [
        'Hands-on firmware development and PCB validation',
        'Industry capstone project deployment',
        'Official NRET Industrial Internship Credential'
      ]
    });
    setShowInternshipModal(false);
  };

  const handleSaveWorkshop = (e) => {
    e.preventDefault();
    if (!workshopForm.title.trim()) return;
    addWorkshop({
      ...workshopForm,
      instructorAvatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      prerequisites: 'Laptop with Arduino IDE / ROS pre-installed'
    });
    setShowWorkshopModal(false);
  };

  const handleConfirmDelete = () => {
    if (!deleteConfirm) return;
    const { type, id } = deleteConfirm;
    if (type === 'course') deleteCourse(id);
    if (type === 'student') deleteStudent(id);
    if (type === 'internship') deleteInternship(id);
    if (type === 'workshop') deleteWorkshop(id);
    if (type === 'project') deleteLiveProject(id);
    setDeleteConfirm(null);
  };

  const handleOpenProjectModal = (proj = null) => {
    if (proj) {
      setEditingProject(proj);
      setProjectForm({
        ...proj,
        technologies: Array.isArray(proj.technologies) ? proj.technologies.join(', ') : (proj.technologies || ''),
        objectives: Array.isArray(proj.objectives) ? proj.objectives.join('\n') : (proj.objectives || ''),
        skillsGained: Array.isArray(proj.skillsGained) ? proj.skillsGained.join(', ') : (proj.skillsGained || ''),
        studentResponsibilities: Array.isArray(proj.studentResponsibilities) ? proj.studentResponsibilities.join('\n') : (proj.studentResponsibilities || '')
      });
    } else {
      setEditingProject(null);
      setProjectForm(initialProjectForm);
    }
    setShowProjectModal(true);
  };

  const handleSaveProject = (e) => {
    e.preventDefault();
    if (!projectForm.title.trim()) return;

    const payload = {
      ...projectForm,
      technologies: typeof projectForm.technologies === 'string'
        ? projectForm.technologies.split(',').map(s => s.trim()).filter(Boolean)
        : projectForm.technologies,
      objectives: typeof projectForm.objectives === 'string'
        ? projectForm.objectives.split('\n').map(s => s.trim()).filter(Boolean)
        : projectForm.objectives,
      skillsGained: typeof projectForm.skillsGained === 'string'
        ? projectForm.skillsGained.split(',').map(s => s.trim()).filter(Boolean)
        : projectForm.skillsGained,
      studentResponsibilities: typeof projectForm.studentResponsibilities === 'string'
        ? projectForm.studentResponsibilities.split('\n').map(s => s.trim()).filter(Boolean)
        : projectForm.studentResponsibilities
    };

    if (editingProject) {
      updateLiveProject(editingProject.id, payload);
      addToast(`Live Project "${payload.title}" updated successfully!`);
    } else {
      addLiveProject(payload);
      addToast(`New Live Project "${payload.title}" created successfully!`);
    }
    setShowProjectModal(false);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    updateSystemSettings(settingsForm);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TOP ADMIN HEADER BANNER */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200/60">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                  <span>Academic Operations Console</span>
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  NRET Enterprise Edition • Academic Year 2026-27
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                NRET Learning Management Admin Portal
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
                Real-time management for course curricula, candidate enrollments, practical workshops, industrial internship pipelines, and platform financials.
              </p>
            </div>

            {/* Quick Action Buttons & Role Switcher */}
            <div className="flex flex-wrap items-center gap-2.5 self-start lg:self-center">
              <button
                onClick={toggleUserRole}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 bg-slate-100 hover:bg-slate-200/70 rounded-full border border-slate-200 transition flex items-center gap-1.5"
                title="Toggle between Student View and Admin View"
              >
                <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
                <span>
                  {currentUser?.role === 'admin' ? 'View as Student' : 'Admin Active'}
                </span>
              </button>

              <button
                onClick={handleOpenAddCourse}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white rounded-full text-xs font-bold shadow-xs transition flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Course</span>
              </button>

              <button
                onClick={() => setShowStudentModal(true)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-full text-xs font-bold shadow-xs transition flex items-center gap-1.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Register Student</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 OVERVIEW KPI STAT CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Total Revenue</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2">
              ${adminStats.totalRevenue.toLocaleString()}
            </div>
            <div className="flex items-center gap-1 mt-1 text-[11px] font-semibold text-emerald-600">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% YoY Growth</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Enrolled Candidates</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2">
              {adminStats.totalStudents.toLocaleString()}+
            </div>
            <span className="text-[11px] text-slate-400 font-medium">
              {allStudents.length} active in current roster
            </span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Published Curricula</span>
              <div className="w-8 h-8 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2">
              {courses.length} Courses
            </div>
            <span className="text-[11px] text-violet-600 font-semibold">Across 6 tech tracks</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold">Bootcamp Bookings</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-2">
              {adminStats.workshopRegistrations}
            </div>
            <span className="text-[11px] text-amber-700 font-semibold">
              {workshopsList.length} scheduled masterclasses
            </span>
          </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 text-xs font-bold scrollbar-none">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Overview & Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'courses'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Course Catalog ({courses.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('students')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'students'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Student Directory ({allStudents.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('internships')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'internships'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships ({internshipsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'workshops'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Workshops ({workshopsList.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'projects'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Live Projects ({liveProjects?.length || 0})</span>
          </button>

          <button
            onClick={() => setActiveTab('transactions')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'transactions'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Financials ({transactions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-full transition shrink-0 flex items-center gap-1.5 ${
              activeTab === 'settings'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Platform Settings</span>
          </button>
        </div>

        {/* TAB 1: OVERVIEW & ANALYTICS */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left 2 Cols: Monthly Performance & Distribution */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Visual Chart: Revenue & Enrollment Activity */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">Academic Intake & Revenue Trend</h3>
                      <p className="text-xs text-slate-500">Trailing 6 Months Enrollment Volumes</p>
                    </div>
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      Avg +14.2% MoM
                    </span>
                  </div>

                  <div className="space-y-4 pt-2">
                    {[
                      { month: 'Apr 2026', revenue: '$18,200', count: 180, pct: 55 },
                      { month: 'May 2026', revenue: '$22,400', count: 210, pct: 68 },
                      { month: 'Jun 2026', revenue: '$26,900', count: 265, pct: 82 },
                      { month: 'Jul 2026', revenue: '$21,100', count: 195, pct: 62 },
                      { month: 'Aug 2026', revenue: '$31,400', count: 310, pct: 95 },
                      { month: 'Sep 2026', revenue: '$28,450', count: 280, pct: 88 }
                    ].map((item) => (
                      <div key={item.month} className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-700">{item.month}</span>
                          <span className="text-slate-500">
                            <strong className="text-slate-900">{item.revenue}</strong> ({item.count} students)
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                            style={{ width: `${item.pct}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Domain Distribution */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs">
                  <h3 className="text-sm font-bold text-slate-900 mb-3">Enrolled Student Breakdown by Domain</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                    <div className="p-3.5 bg-violet-50/70 rounded-2xl border border-violet-100">
                      <div className="text-[11px] font-bold uppercase text-violet-700">Robotics</div>
                      <div className="text-lg font-extrabold text-slate-900 mt-1">42%</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">5,200+ Students</div>
                    </div>
                    <div className="p-3.5 bg-emerald-50/70 rounded-2xl border border-emerald-100">
                      <div className="text-[11px] font-bold uppercase text-emerald-700">Embedded</div>
                      <div className="text-lg font-extrabold text-slate-900 mt-1">28%</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">3,500+ Students</div>
                    </div>
                    <div className="p-3.5 bg-rose-50/70 rounded-2xl border border-rose-100">
                      <div className="text-[11px] font-bold uppercase text-rose-700">IoT & Edge</div>
                      <div className="text-lg font-extrabold text-slate-900 mt-1">18%</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">2,200+ Students</div>
                    </div>
                    <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-100">
                      <div className="text-[11px] font-bold uppercase text-amber-700">Industrial</div>
                      <div className="text-lg font-extrabold text-slate-900 mt-1">12%</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">1,500+ Students</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Col: Live Operations Feed & Fast Actions */}
              <div className="space-y-6">
                
                {/* Fast Action Center */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Administrative Shortcuts</h3>
                  <div className="space-y-2">
                    <button
                      onClick={handleOpenAddCourse}
                      className="w-full py-2.5 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-2xl text-xs font-semibold text-left transition flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Plus className="w-4 h-4" /> Create Course Curriculum
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setShowInternshipModal(true)}
                      className="w-full py-2.5 px-4 bg-violet-50 hover:bg-violet-100 text-violet-700 rounded-2xl text-xs font-semibold text-left transition flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> Announce Internship Cohort
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setShowWorkshopModal(true)}
                      className="w-full py-2.5 px-4 bg-amber-50 hover:bg-amber-100 text-amber-700 rounded-2xl text-xs font-semibold text-left transition flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" /> Schedule Practical Workshop
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        addToast("Exporting comprehensive enrollment CSV report...");
                      }}
                      className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl text-xs font-semibold text-left transition flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" /> Export Student & Sales CSV
                      </span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Recent System Activities</h3>
                  <div className="space-y-3.5 text-xs">
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">New Student Enrollment</div>
                        <div className="text-slate-500 text-[11px]">Rohan Varma registered for ROS 2 Navigation.</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">12 minutes ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">Assignment Evaluated</div>
                        <div className="text-slate-500 text-[11px]">Dr. Arun Kumar marked PWM Speed Curve as 96/100.</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">1 hour ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">Verified Certificate Issued</div>
                        <div className="text-slate-500 text-[11px]">Credential #NRET-EMB-8829 issued to Karthik S.</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">3 hours ago</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                      <div>
                        <div className="font-semibold text-slate-900">Workshop Booking Confirmed</div>
                        <div className="text-slate-500 text-[11px]">Pooja D booked seat for Autonomous Wheeled Robot.</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">Yesterday</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: COURSE CATALOG MANAGEMENT */}
        {activeTab === 'courses' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Course Directory & Curricula</h3>
                <span className="text-xs text-slate-400">
                  {filteredCourses.length} published courses matching filters
                </span>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search courses or instructor..."
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 w-44 sm:w-56"
                  />
                </div>

                <select
                  value={courseCategoryFilter}
                  onChange={(e) => setCourseCategoryFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white text-slate-700"
                >
                  <option value="all">All Categories</option>
                  <option value="robotics">Robotics</option>
                  <option value="embedded">Embedded</option>
                  <option value="iot">IoT</option>
                  <option value="electronics">Electronics</option>
                  <option value="programming">Programming</option>
                  <option value="industrial">Industrial</option>
                </select>

                <button
                  onClick={handleOpenAddCourse}
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold transition flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Course</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3.5 px-5">Course Title</th>
                    <th className="py-3.5 px-5">Category</th>
                    <th className="py-3.5 px-5">Instructor</th>
                    <th className="py-3.5 px-5">Enrolled</th>
                    <th className="py-3.5 px-5">Price</th>
                    <th className="py-3.5 px-5">Rating</th>
                    <th className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredCourses.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="py-8 text-center text-slate-400">
                        No courses found matching criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredCourses.map((course) => (
                      <tr key={course.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-11 h-11 rounded-xl object-cover shrink-0 border border-slate-100"
                            />
                            <div>
                              <div className="font-bold text-slate-900 line-clamp-1">{course.title}</div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {course.level} • {course.duration}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-5">
                          <span className="bg-indigo-50 text-indigo-700 font-semibold px-2.5 py-0.5 rounded-full border border-indigo-100/60">
                            {course.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-5 font-medium text-slate-800">{course.instructor}</td>
                        <td className="py-3.5 px-5 font-bold text-slate-900">
                          {course.studentsCount?.toLocaleString() || 0}
                        </td>
                        <td className="py-3.5 px-5 font-extrabold text-slate-900">
                          ${course.price}
                        </td>
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-1 font-bold text-amber-600">
                            <span>★</span>
                            <span>{course.rating || 5.0}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <Link
                              to={`/courses/${course.id}`}
                              className="p-1.5 text-slate-400 hover:text-indigo-600 transition"
                              title="Preview on Course Page"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleOpenEditCourse(course)}
                              className="p-1.5 text-slate-400 hover:text-indigo-600 transition"
                              title="Edit Course"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() =>
                                setDeleteConfirm({
                                  type: 'course',
                                  id: course.id,
                                  title: course.title
                                })
                              }
                              className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                              title="Delete Course"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: STUDENT ROSTER */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Active Engineering Candidates</h3>
                <span className="text-xs text-slate-400">
                  {filteredStudents.length} registered candidates
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate name or email..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 w-44 sm:w-56"
                  />
                </div>

                <select
                  value={studentStatusFilter}
                  onChange={(e) => setStudentStatusFilter(e.target.value)}
                  className="px-3 py-1.5 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white text-slate-700"
                >
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
                  <option value="enrolled">Enrolled</option>
                </select>

                <button
                  onClick={() => setShowStudentModal(true)}
                  className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition flex items-center gap-1.5"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Register Candidate</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3.5 px-5">Candidate</th>
                    <th className="py-3.5 px-5">Enrolled Curriculum</th>
                    <th className="py-3.5 px-5">Curriculum Progress</th>
                    <th className="py-3.5 px-5">Registration Date</th>
                    <th className="py-3.5 px-5">Status</th>
                    <th className="py-3.5 px-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredStudents.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-slate-400">
                        No candidates found.
                      </td>
                    </tr>
                  ) : (
                    filteredStudents.map((s) => (
                      <tr key={s.id} className="hover:bg-slate-50/60 transition">
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-3">
                            <img
                              src={s.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"}
                              alt={s.name}
                              className="w-9 h-9 rounded-full object-cover shrink-0 border border-slate-200"
                            />
                            <div>
                              <div className="font-bold text-slate-900">{s.name}</div>
                              <div className="text-[11px] text-slate-400">{s.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-5 font-medium text-slate-800">{s.course}</td>
                        <td className="py-3.5 px-5">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                              <div
                                className="bg-indigo-600 h-full rounded-full"
                                style={{ width: `${s.progress}%` }}
                              ></div>
                            </div>
                            <span className="font-bold text-slate-800">{s.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-5 text-slate-500">{s.enrolledDate}</td>
                        <td className="py-3.5 px-5">
                          <span
                            className={`font-semibold px-2.5 py-0.5 rounded-full text-[11px] ${
                              s.status === 'Completed'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                            }`}
                          >
                            {s.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-5 text-right">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => {
                                const newStatus = s.status === 'Completed' ? 'Active' : 'Completed';
                                updateStudent(s.id, {
                                  status: newStatus,
                                  progress: newStatus === 'Completed' ? 100 : s.progress
                                });
                              }}
                              className="p-1.5 text-slate-400 hover:text-indigo-600 transition"
                              title="Toggle Status (Completed / Active)"
                            >
                              <Award className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() =>
                                setDeleteConfirm({
                                  type: 'student',
                                  id: s.id,
                                  title: s.name
                                })
                              }
                              className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                              title="Remove Candidate"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: INTERNSHIPS MANAGEMENT */}
        {activeTab === 'internships' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Industrial Internship Programs</h3>
                <p className="text-xs text-slate-500">
                  Manage active cohorts, project deliverables, stipend schedules, and seat allocations.
                </p>
              </div>
              <button
                onClick={() => setShowInternshipModal(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Internship Cohort</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {internshipsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded border border-indigo-100">
                        {item.category || 'Engineering'}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-100">
                        {item.stipend || 'Stipend Offered'}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h4>
                    
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Capstone Deliverable</div>
                      <div className="font-medium text-slate-800 line-clamp-2">
                        {item.projectTheme || item.desc}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 block font-bold">Duration</span>
                        <span className="font-medium">{item.duration}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 block font-bold">Format</span>
                        <span className="font-medium truncate block">{item.mode}</span>
                      </div>
                      <div className="col-span-2 pt-1">
                        <span className="text-[10px] uppercase text-slate-400 block font-bold">Starts</span>
                        <span className="font-medium text-slate-900">{item.startDate || '1st of Next Month'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      <strong>{item.seats || 25}</strong> seats capacity
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() =>
                          setDeleteConfirm({
                            type: 'internship',
                            id: item.id,
                            title: item.title
                          })
                        }
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                        title="Delete Cohort"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: WORKSHOPS MANAGEMENT */}
        {activeTab === 'workshops' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Hands-on Workshops & Masterclasses</h3>
                <p className="text-xs text-slate-500">
                  Manage bootcamp dates, seat capacities, registration fees, and instructor assignments.
                </p>
              </div>
              <button
                onClick={() => setShowWorkshopModal(true)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Schedule Workshop</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshopsList.map((w) => {
                const booked = (w.seatsTotal || 50) - (w.seatsRemaining || 0);
                const pct = Math.round((booked / (w.seatsTotal || 50)) * 100);

                return (
                  <div
                    key={w.id}
                    className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                          {w.tag || 'Hands-on'}
                        </span>
                        <span className="text-xs font-bold text-slate-800">{w.fee}</span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 leading-snug">{w.title}</h4>

                      <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{w.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>{w.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                          <span>Instructor: {w.instructor}</span>
                        </div>
                      </div>

                      {/* Seat Availability Adjuster */}
                      <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-slate-600 font-medium">Booked: {booked} / {w.seatsTotal}</span>
                          <span className="font-bold text-indigo-600">{w.seatsRemaining} seats left</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-indigo-600 h-full rounded-full"
                            style={{ width: `${pct}%` }}
                          ></div>
                        </div>
                        <div className="flex items-center justify-end gap-2 pt-1 text-[11px]">
                          <button
                            onClick={() => {
                              if (w.seatsRemaining > 0) {
                                updateWorkshop(w.id, { seatsRemaining: w.seatsRemaining - 1 });
                              }
                            }}
                            className="px-2 py-0.5 bg-white border border-slate-200 rounded hover:bg-slate-100 font-bold text-slate-700"
                            title="Register 1 Seat"
                          >
                            +1 Booking
                          </button>
                          <button
                            onClick={() => {
                              if (w.seatsRemaining < w.seatsTotal) {
                                updateWorkshop(w.id, { seatsRemaining: w.seatsRemaining + 1 });
                              }
                            }}
                            className="px-2 py-0.5 bg-white border border-slate-200 rounded hover:bg-slate-100 font-bold text-slate-700"
                            title="Release 1 Seat"
                          >
                            -1 Booking
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to="/workshops"
                        className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                      >
                        <span>View on Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                      <button
                        onClick={() =>
                          setDeleteConfirm({
                            type: 'workshop',
                            id: w.id,
                            title: w.title
                          })
                        }
                        className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                        title="Delete Workshop"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 5.5: LIVE PROJECTS MANAGEMENT */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-slate-900">Live Projects Management</h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Programs / Practical Learning
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  Oversee real-world engineering projects, assign mentors, adjust team sizes, and update project specifications.
                </p>
              </div>
              <button
                onClick={() => handleOpenProjectModal()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Live Project</span>
              </button>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search live projects by title, mentor, or technology..."
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500 focus:bg-white"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                <select
                  value={projectCategoryFilter}
                  onChange={(e) => setProjectCategoryFilter(e.target.value)}
                  className="px-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-500 text-slate-700 font-medium"
                >
                  <option value="all">All Disciplines</option>
                  <option value="Robotics & Automation">Robotics & Automation</option>
                  <option value="Embedded Systems">Embedded Systems</option>
                  <option value="IoT & Automation">IoT & Automation</option>
                  <option value="Web & Cloud Development">Web & Cloud Development</option>
                  <option value="Industrial Automation">Industrial Automation</option>
                </select>
              </div>
            </div>

            {/* Projects Grid */}
            {(() => {
              const filteredProjects = (liveProjects || []).filter((p) => {
                const matchesSearch =
                  p.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
                  (p.mentor && p.mentor.toLowerCase().includes(projectSearch.toLowerCase())) ||
                  (Array.isArray(p.technologies) && p.technologies.some(t => t.toLowerCase().includes(projectSearch.toLowerCase())));
                const matchesCategory =
                  projectCategoryFilter === 'all' || p.category === projectCategoryFilter;
                return matchesSearch && matchesCategory;
              });

              if (filteredProjects.length === 0) {
                return (
                  <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80 shadow-2xs space-y-3">
                    <FolderGit2 className="w-10 h-10 text-slate-300 mx-auto" />
                    <h4 className="text-base font-bold text-slate-800">No live projects found</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      No project matches your search and filter criteria. Try adjusting your search query or add a new project.
                    </p>
                    <button
                      onClick={() => handleOpenProjectModal()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add Live Project</span>
                    </button>
                  </div>
                );
              }

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200/60">
                            {proj.category}
                          </span>
                          <button
                            onClick={() => toggleProjectPublish(proj.id)}
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition ${
                              proj.published !== false
                                ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                                : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}
                            title="Click to toggle publish status"
                          >
                            {proj.published !== false ? 'Published' : 'Draft'}
                          </button>
                        </div>

                        <div>
                          <h4 className="text-base font-bold text-slate-900 leading-snug">
                            {proj.title}
                          </h4>
                          <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                            {proj.shortDesc}
                          </p>
                        </div>

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.technologies && proj.technologies.slice(0, 3).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 text-[10px] font-medium bg-slate-100 text-slate-600 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                          {proj.technologies && proj.technologies.length > 3 && (
                            <span className="px-1.5 py-0.5 text-[10px] text-slate-400">
                              +{proj.technologies.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Project Specs */}
                        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-[10px] uppercase text-slate-400 block font-bold">Duration</span>
                            <span className="font-semibold text-slate-800">{proj.duration}</span>
                          </div>
                          <div>
                            <span className="text-[10px] uppercase text-slate-400 block font-bold">Level</span>
                            <span className="font-semibold text-slate-800">{proj.level}</span>
                          </div>
                          <div className="col-span-2 pt-1 border-t border-slate-200/50 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500">Mentor: <strong>{proj.mentor}</strong></span>
                            <span className="text-[11px] text-indigo-600 font-bold">{proj.enrolledCount || 12} Enrolled</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Action footer */}
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to={`/programs?tab=projects&id=${proj.id}`}
                          className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                        >
                          <span>Preview on Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleOpenProjectModal(proj)}
                            className="p-1.5 text-slate-400 hover:text-indigo-600 transition"
                            title="Edit Project Details"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() =>
                              setDeleteConfirm({
                                type: 'project',
                                id: proj.id,
                                title: proj.title
                              })
                            }
                            className="p-1.5 text-slate-400 hover:text-rose-600 transition"
                            title="Delete Live Project"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 6: FINANCIALS & TRANSACTIONS */}
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Financial Receipts & Ledger</h3>
                <span className="text-xs text-slate-400">
                  {transactions.length} verified candidate payments logged
                </span>
              </div>
              <button
                onClick={() => {
                  addToast("Exporting financial ledger report...");
                }}
                className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Tax Ledger</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3.5 px-5">Transaction ID</th>
                    <th className="py-3.5 px-5">Candidate</th>
                    <th className="py-3.5 px-5">Purchased Item</th>
                    <th className="py-3.5 px-5">Payment Method</th>
                    <th className="py-3.5 px-5">Date</th>
                    <th className="py-3.5 px-5">Amount</th>
                    <th className="py-3.5 px-5 text-right">Receipt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50/60 transition">
                      <td className="py-3.5 px-5 font-mono font-bold text-indigo-600">{txn.id}</td>
                      <td className="py-3.5 px-5">
                        <div className="font-bold text-slate-900">{txn.studentName}</div>
                        <div className="text-[11px] text-slate-400">{txn.email}</div>
                      </td>
                      <td className="py-3.5 px-5 font-medium text-slate-800">{txn.item}</td>
                      <td className="py-3.5 px-5 text-slate-600">{txn.method}</td>
                      <td className="py-3.5 px-5 text-slate-500">{txn.date}</td>
                      <td className="py-3.5 px-5 font-extrabold text-emerald-700">
                        ${txn.amount.toFixed(2)}
                      </td>
                      <td className="py-3.5 px-5 text-right">
                        <button
                          onClick={() => addToast(`Downloaded receipt for ${txn.id}`)}
                          className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-[11px] font-semibold transition"
                        >
                          Invoice PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 7: SYSTEM & PLATFORM SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs max-w-4xl space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Institution & System Configuration</h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Configure organizational parameters, global announcements, and student intake rules.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Institution Legal Name</label>
                  <input
                    type="text"
                    value={settingsForm.institutionName}
                    onChange={(e) => setSettingsForm({ ...settingsForm, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Admissions & Support Email</label>
                  <input
                    type="email"
                    value={settingsForm.contactEmail}
                    onChange={(e) => setSettingsForm({ ...settingsForm, contactEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Campus Support Hotline</label>
                  <input
                    type="text"
                    value={settingsForm.supportHotline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, supportHotline: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Campus Address</label>
                  <input
                    type="text"
                    value={settingsForm.campusAddress}
                    onChange={(e) => setSettingsForm({ ...settingsForm, campusAddress: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Global Portal Banner Announcement</label>
                <textarea
                  rows={2}
                  value={settingsForm.portalNotice}
                  onChange={(e) => setSettingsForm({ ...settingsForm, portalNotice: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-3">
                <h4 className="font-bold text-slate-800">Operational Switches</h4>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={settingsForm.admissionsOpen}
                    onChange={(e) => setSettingsForm({ ...settingsForm, admissionsOpen: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Allow Public Registrations & Enrollments</span>
                    <span className="text-slate-500 block text-[11px]">When disabled, new student signups are placed on a waitlist.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={settingsForm.autoIssueCertificates}
                    onChange={(e) => setSettingsForm({ ...settingsForm, autoIssueCertificates: e.target.checked })}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  <div>
                    <span className="font-bold text-slate-800">Automatic Credential Verification</span>
                    <span className="text-slate-500 block text-[11px]">Automatically issue verified QR certificate upon 100% course and quiz completion.</span>
                  </div>
                </label>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-xs transition flex items-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save System Settings</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>

      {/* MODAL 1: ADD / EDIT COURSE */}
      {showCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-sm text-slate-900">
                {editingCourse ? 'Edit Course Details' : 'Publish New Course Curriculum'}
              </h3>
              <button
                onClick={() => setShowCourseModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCourse} className="p-6 space-y-4 text-xs max-h-[80vh] overflow-y-auto">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Course Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autonomous Mobile Robotics with ROS 2 Humble"
                  value={courseForm.title}
                  onChange={(e) => setCourseForm({ ...courseForm, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Category Track</label>
                  <select
                    value={courseForm.categoryId}
                    onChange={(e) => {
                      const id = e.target.value;
                      const catNames = {
                        robotics: 'Robotics & Automation',
                        embedded: 'Embedded Systems',
                        iot: 'IoT & Smart Tech',
                        electronics: 'Electronics & PCB',
                        programming: 'Programming & ROS',
                        industrial: 'Industrial Automation'
                      };
                      setCourseForm({
                        ...courseForm,
                        categoryId: id,
                        category: catNames[id] || 'Engineering'
                      });
                    }}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
                  >
                    <option value="robotics">Robotics & Automation</option>
                    <option value="embedded">Embedded Systems</option>
                    <option value="iot">IoT & Smart Tech</option>
                    <option value="electronics">Electronics & PCB</option>
                    <option value="programming">Programming & ROS</option>
                    <option value="industrial">Industrial Automation</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Enrollment Fee ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    value={courseForm.price}
                    onChange={(e) => setCourseForm({ ...courseForm, price: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Lead Instructor</label>
                  <input
                    type="text"
                    required
                    value={courseForm.instructor}
                    onChange={(e) => setCourseForm({ ...courseForm, instructor: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Experience Level</label>
                  <select
                    value={courseForm.level}
                    onChange={(e) => setCourseForm({ ...courseForm, level: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Beginner to Intermediate">Beginner to Intermediate</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Intermediate to Advanced">Intermediate to Advanced</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Duration Format</label>
                  <input
                    type="text"
                    required
                    value={courseForm.duration}
                    onChange={(e) => setCourseForm({ ...courseForm, duration: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Thumbnail URL</label>
                  <input
                    type="text"
                    value={courseForm.thumbnail}
                    onChange={(e) => setCourseForm({ ...courseForm, thumbnail: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
                <textarea
                  rows={2}
                  required
                  value={courseForm.shortDesc}
                  onChange={(e) => setCourseForm({ ...courseForm, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCourseModal(false)}
                  className="px-4 py-2 rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition"
                >
                  {editingCourse ? 'Save Changes' : 'Publish Course'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: REGISTER STUDENT */}
      {showStudentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-sm text-slate-900">Register Engineering Candidate</h3>
              <button
                onClick={() => setShowStudentModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sanya Iyer"
                  value={studentForm.name}
                  onChange={(e) => setStudentForm({ ...studentForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">University / Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="sanya.i@iitb.ac.in"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Contact Phone</label>
                <input
                  type="text"
                  placeholder="+91 98765 43210"
                  value={studentForm.phone}
                  onChange={(e) => setStudentForm({ ...studentForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Assign Curriculum</label>
                <select
                  value={studentForm.course}
                  onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 bg-white"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowStudentModal(false)}
                  className="px-4 py-2 rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition"
                >
                  Confirm Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: ADD INTERNSHIP COHORT */}
      {showInternshipModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-sm text-slate-900">Create Internship Cohort</h3>
              <button
                onClick={() => setShowInternshipModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveInternship} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Cohort Program Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Quadruped Robotics & Kinematics Internship"
                  value={internshipForm.title}
                  onChange={(e) => setInternshipForm({ ...internshipForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    value={internshipForm.duration}
                    onChange={(e) => setInternshipForm({ ...internshipForm, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Available Seats</label>
                  <input
                    type="number"
                    required
                    value={internshipForm.seats}
                    onChange={(e) => setInternshipForm({ ...internshipForm, seats: parseInt(e.target.value) || 20 })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Stipend Details</label>
                  <input
                    type="text"
                    value={internshipForm.stipend}
                    onChange={(e) => setInternshipForm({ ...internshipForm, stipend: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Format Mode</label>
                  <input
                    type="text"
                    value={internshipForm.mode}
                    onChange={(e) => setInternshipForm({ ...internshipForm, mode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Capstone Theme</label>
                <textarea
                  rows={2}
                  value={internshipForm.projectTheme}
                  onChange={(e) => setInternshipForm({ ...internshipForm, projectTheme: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowInternshipModal(false)}
                  className="px-4 py-2 rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition"
                >
                  Launch Cohort
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 4: SCHEDULE WORKSHOP */}
      {showWorkshopModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
              <h3 className="font-bold text-sm text-slate-900">Schedule Practical Workshop</h3>
              <button
                onClick={() => setShowWorkshopModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveWorkshop} className="p-6 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Workshop Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FreeRTOS Multitasking & Driver Development"
                  value={workshopForm.title}
                  onChange={(e) => setWorkshopForm({ ...workshopForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Date & Schedule</label>
                  <input
                    type="text"
                    required
                    value={workshopForm.date}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, date: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    value={workshopForm.duration}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Instructor</label>
                  <input
                    type="text"
                    required
                    value={workshopForm.instructor}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, instructor: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Seats Capacity</label>
                  <input
                    type="number"
                    required
                    value={workshopForm.seatsTotal}
                    onChange={(e) => {
                      const total = parseInt(e.target.value) || 40;
                      setWorkshopForm({
                        ...workshopForm,
                        seatsTotal: total,
                        seatsRemaining: total
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Fee</label>
                  <input
                    type="text"
                    required
                    value={workshopForm.fee}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, fee: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mode / Location</label>
                  <input
                    type="text"
                    value={workshopForm.mode}
                    onChange={(e) => setWorkshopForm({ ...workshopForm, mode: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowWorkshopModal(false)}
                  className="px-4 py-2 rounded-full text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition"
                >
                  Publish Workshop
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 5: CREATE / EDIT LIVE PROJECT */}
      {showProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 shrink-0">
              <div className="flex items-center gap-2">
                <FolderGit2 className="w-4 h-4 text-indigo-600" />
                <h3 className="font-bold text-sm text-slate-900">
                  {editingProject ? 'Edit Live Engineering Project' : 'Create New Live Project'}
                </h3>
              </div>
              <button
                onClick={() => setShowProjectModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="p-6 overflow-y-auto space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Autonomous Mobile Robot with ROS 2 & LiDAR SLAM"
                  value={projectForm.title}
                  onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Discipline / Category</label>
                  <select
                    value={projectForm.category}
                    onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                  >
                    <option value="Robotics & Automation">Robotics & Automation</option>
                    <option value="Embedded Systems">Embedded Systems</option>
                    <option value="IoT & Automation">IoT & Automation</option>
                    <option value="Web & Cloud Development">Web & Cloud Development</option>
                    <option value="Industrial Automation">Industrial Automation</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Duration</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8 Weeks (40 hrs)"
                    value={projectForm.duration}
                    onChange={(e) => setProjectForm({ ...projectForm, duration: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Difficulty Level</label>
                  <select
                    value={projectForm.level}
                    onChange={(e) => setProjectForm({ ...projectForm, level: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Assigned Mentor</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arun Kumar"
                    value={projectForm.mentor}
                    onChange={(e) => setProjectForm({ ...projectForm, mentor: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mentor Designation</label>
                  <input
                    type="text"
                    placeholder="e.g. Lead Robotics & Autonomous Systems Faculty"
                    value={projectForm.mentorDesignation}
                    onChange={(e) => setProjectForm({ ...projectForm, mentorDesignation: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Short Description (Summary)</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Concise 1-2 sentence overview of what this project builds..."
                  value={projectForm.shortDesc}
                  onChange={(e) => setProjectForm({ ...projectForm, shortDesc: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Real-World Problem Statement</label>
                <textarea
                  rows={2}
                  placeholder="Explain the actual industry challenge this project addresses..."
                  value={projectForm.problemStatement}
                  onChange={(e) => setProjectForm({ ...projectForm, problemStatement: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Technologies & Tools (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. ROS 2 Humble, Python, C++, LiDAR, OpenCV, Gazebo"
                  value={projectForm.technologies}
                  onChange={(e) => setProjectForm({ ...projectForm, technologies: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Key Learning Objectives (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="Hardware integration&#10;Driver development&#10;Validation testing"
                    value={projectForm.objectives}
                    onChange={(e) => setProjectForm({ ...projectForm, objectives: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Student Responsibilities (One per line)</label>
                  <textarea
                    rows={3}
                    placeholder="Develop firmware drivers&#10;Implement SLAM mapping&#10;Conduct team sprint reviews"
                    value={projectForm.studentResponsibilities}
                    onChange={(e) => setProjectForm({ ...projectForm, studentResponsibilities: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Max Team Size</label>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    value={projectForm.maxTeamSize}
                    onChange={(e) => setProjectForm({ ...projectForm, maxTeamSize: parseInt(e.target.value) || 4 })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="flex items-center gap-2 pt-5">
                  <input
                    type="checkbox"
                    id="projectPublishedCheckbox"
                    checked={projectForm.published !== false}
                    onChange={(e) => setProjectForm({ ...projectForm, published: e.target.checked })}
                    className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <label htmlFor="projectPublishedCheckbox" className="font-semibold text-slate-800 cursor-pointer">
                    Publish immediately to Programs Catalog
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowProjectModal(false)}
                  className="px-4 py-2 rounded-full text-slate-600 hover:bg-slate-100 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition shadow-xs flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>{editingProject ? 'Update Live Project' : 'Publish Live Project'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 text-center space-y-4 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Confirm Removal</h3>
              <p className="text-xs text-slate-500 mt-1">
                Are you sure you want to remove <strong>"{deleteConfirm.title}"</strong>? This operation cannot be undone.
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-5 py-2 rounded-full text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white transition shadow-xs"
              >
                Yes, Remove
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
