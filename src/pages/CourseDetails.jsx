import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CertificateModal from '../components/CertificateModal';
import CourseProjectModal from '../components/CourseProjectModal';
import {
  Star,
  Clock,
  BookOpen,
  Users,
  Award,
  Globe,
  CheckCircle,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Sparkles,
  FolderGit2,
  Cpu,
  Check,
  CheckCircle2,
  Layers,
  Code2,
  UserCheck,
  ExternalLink,
  PackageCheck
} from 'lucide-react';

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    courses,
    enrolledCourses,
    enrollCourse,
    currentUser,
    sampleCertificates,
    liveProjects,
    studentLiveProjects,
    enrollStudentInProject
  } = useApp();

  const [expandedFaq, setExpandedFaq] = useState({ 0: true });
  const [certModalOpen, setCertModalOpen] = useState(false);

  // Project details modal state
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectModalOpen, setProjectModalOpen] = useState(false);

  // Filter for projects (All, Course Capstones, Live Projects)
  const [projectFilter, setProjectFilter] = useState('all');

  const course = courses.find((c) => c.id === id) || courses[0] || {};
  const isEnrolled = enrolledCourses.some((e) => e.courseId === course.id);

  const toggleFaq = (index) => {
    setExpandedFaq((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleEnrollAction = () => {
    if (isEnrolled) {
      navigate(`/learn/${course.id}`);
    } else {
      enrollCourse(course.id);
      navigate(`/learn/${course.id}`);
    }
  };

  // Connected live projects matching this course
  const matchedLiveProjects = (liveProjects || []).filter(p =>
    p.published && (
      (p.relatedCourseIds && p.relatedCourseIds.includes(course?.id)) ||
      (p.category && course?.category && (
        p.category.toLowerCase().includes((course.category.toLowerCase().split(' ')[0] || '')) ||
        course.category.toLowerCase().includes((p.category.toLowerCase().split(' ')[0] || ''))
      ))
    )
  );

  const courseProjects = course.projects || [];

  const handleOpenProjectModal = (proj) => {
    setSelectedProject(proj);
    setProjectModalOpen(true);
  };

  const handleEnrollInProject = (proj) => {
    enrollStudentInProject(proj);
    // If student isn't enrolled in the course yet, automatically enroll them so they get access to materials!
    if (!isEnrolled) {
      enrollCourse(course.id);
    }
  };

  const isProjectEnrolled = (projId) => {
    return (studentLiveProjects || []).some(sp => sp.projectId === projId);
  };

  // Sample FAQs
  const faqs = [
    {
      q: "Do I get a physical hardware starter kit delivered?",
      a: "Yes! For all flagship NRET hardware courses (Robotics, Embedded, and IoT), an optional or included hardware kit containing development boards, motor drivers, sensors, and chassis is shipped directly to your address."
    },
    {
      q: "Is there any prerequisite programming knowledge required?",
      a: "Beginner-friendly courses start from absolute basics including C++ syntax and breadboard electronics. Intermediate modules build gradually with step-by-step schematics."
    },
    {
      q: "Are the NRET certifications recognized in the industry?",
      a: "Yes. NRET certificates feature unique cryptographic IDs and QR codes verifiable by recruiters on our public registry, validating your hands-on project submissions."
    },
    {
      q: "How do I ask questions if my code or circuit doesn't work?",
      a: "Every lesson has a dedicated discussion forum where our teaching assistants and Dr. Arun Kumar's team answer code and wiring debug questions within 12 hours."
    }
  ];

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <span>/</span>
          <Link to="/courses" className="hover:text-indigo-600">Courses</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold truncate">{course.title}</span>
        </div>

        {/* Main Grid: Left Details & Right Sticky Purchase/Enroll Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column (8 cols): Title, Overview, Outcomes, Curriculum, FAQs */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-bold border border-amber-200">
                    {course.badge}
                  </span>
                )}
                <span className="text-xs text-slate-500 font-medium">Level: {course.level}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-base text-slate-600 mt-4 leading-relaxed">
                {course.fullDesc || course.shortDesc}
              </p>

              {/* Meta info row */}
              <div className="flex flex-wrap items-center gap-6 mt-6 pt-6 border-t border-slate-200/80 text-xs text-slate-600">
                <Link to={`/instructors/${course.instructorId}`} className="flex items-center gap-2 group">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full object-cover border border-slate-200 group-hover:ring-2 ring-indigo-500"
                  />
                  <div>
                    <span className="text-slate-400 block text-[10px]">Created by</span>
                    <span className="font-bold text-slate-800 group-hover:text-indigo-600 transition">
                      {course.instructor}
                    </span>
                  </div>
                </Link>

                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-slate-900">{course.rating}</span>
                  <span className="text-slate-400">({course.ratingCount} reviews)</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>{course.studentsCount?.toLocaleString()} Students</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-slate-400" />
                  <span>Language: {course.language || 'English'}</span>
                </div>
              </div>

              {/* Quick Action Bar for Course Enrollment & Jump to Projects */}
              <div className="mt-6 p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 text-sm block">
                      Hands-On Engineering & Practical Projects
                    </span>
                    <span className="text-xs text-slate-600">
                      Explore detailed project specs and enroll directly below.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="#course-projects-section"
                    className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-indigo-700 text-xs font-bold border border-indigo-200 transition flex items-center gap-1.5 shadow-2xs"
                  >
                    <span>View Projects ({courseProjects.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleEnrollAction}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
                      isEnrolled
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                  >
                    {isEnrolled ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Enrolled in Course</span>
                      </>
                    ) : (
                      <>
                        <span>Enroll in Course (${course.price})</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* WHAT YOU WILL LEARN */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                <span>What You Will Learn</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {(course.outcomes || [
                  "Build kinematic wheeled platforms and calculate motor torque",
                  "Interface H-Bridge motor drivers with microcontroller PWM",
                  "Implement PID control algorithms for smooth line tracking",
                  "Process ultrasonic distance sensor echo metrics",
                  "Construct an autonomous obstacle-avoidance mobile rover",
                  "Earn official NRET Certificate of Robotics Competency"
                ]).map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 leading-snug">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COURSE CURRICULUM SUMMARY */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                {course.modules?.length || 5} Modules • {course.lessonsCount || 36} Lessons • {course.duration || '11 Weeks (48 Hours)'}
              </p>
            </div>

            {/* REQUIREMENTS & WHO THIS IS FOR */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>Course Requirements</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {(course.requirements || [
                    "Basic computer knowledge",
                    "Interest in technology & engineering",
                    "Required tools & software (provided guides)"
                  ]).map((req, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs">
                <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-600" />
                  <span>Who This Course Is For</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {(course.whoIsThisFor || [
                    "Engineering students",
                    "Recent graduates seeking core jobs",
                    "Beginners & hobbyists",
                    "Working professionals upskilling in hardware"
                  ]).map((target, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* ★ DEDICATED COURSE PROJECTS & DETAILS SECTION ★ */}
            <div id="course-projects-section" className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800 mb-1.5">
                    <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Hands-On Engineering Projects</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    Projects in this Course
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Click on any project to view complete technical details, bill of materials, and direct enrollment options.
                  </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold self-start sm:self-auto">
                  <button
                    onClick={() => setProjectFilter('all')}
                    className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                      projectFilter === 'all'
                        ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    All ({courseProjects.length + matchedLiveProjects.length})
                  </button>
                  <button
                    onClick={() => setProjectFilter('course')}
                    className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                      projectFilter === 'course'
                        ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Capstones ({courseProjects.length})
                  </button>
                  {matchedLiveProjects.length > 0 && (
                    <button
                      onClick={() => setProjectFilter('live')}
                      className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                        projectFilter === 'live'
                          ? 'bg-white text-indigo-600 shadow-2xs font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Live Teams ({matchedLiveProjects.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Grid of Course Projects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Internal Course Capstones */}
                {(projectFilter === 'all' || projectFilter === 'course') &&
                  courseProjects.map((proj, idx) => {
                    const enrolled = isProjectEnrolled(proj.id);
                    return (
                      <div
                        key={proj.id || idx}
                        className="group p-5 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wider">
                              {proj.type || `Capstone 0${idx + 1}`}
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {proj.duration || '2-3 Weeks'}
                            </span>
                          </div>

                          <h3
                            onClick={() => handleOpenProjectModal(proj)}
                            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 cursor-pointer transition line-clamp-1"
                          >
                            {proj.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {proj.shortDesc || proj.desc || proj.fullDesc}
                          </p>

                          {/* Tech Tags */}
                          {proj.technologies && (
                            <div className="flex flex-wrap gap-1 pt-1">
                              {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[10px] font-semibold text-slate-700"
                                >
                                  {tech}
                                </span>
                              ))}
                              {proj.technologies.length > 3 && (
                                <span className="text-[10px] text-slate-400 font-medium self-center">
                                  +{proj.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Deliverables snippet & Mentor */}
                        <div className="pt-3 border-t border-slate-200/70 space-y-3">
                          <div className="flex items-center justify-between text-[11px] text-slate-500">
                            <span className="flex items-center gap-1">
                              <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Mentor: <strong>{proj.mentor || course.instructor}</strong></span>
                            </span>
                            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                              {proj.difficulty || "Practical Lab"}
                            </span>
                          </div>

                          {/* Buttons: Project Details & Enroll Option */}
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => handleOpenProjectModal(proj)}
                              className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 hover:border-slate-300 transition text-center cursor-pointer"
                            >
                              Project Details
                            </button>

                            {enrolled ? (
                              <Link
                                to="/dashboard"
                                className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition flex items-center justify-center gap-1 border border-emerald-200"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Enrolled</span>
                              </Link>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleEnrollInProject(proj)}
                                className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-xs shadow-indigo-200 cursor-pointer"
                              >
                                <FolderGit2 className="w-3.5 h-3.5" />
                                <span>Enroll Project</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* 2. Connected Live Industry Projects */}
                {(projectFilter === 'all' || projectFilter === 'live') &&
                  matchedLiveProjects.map((proj) => {
                    const enrolled = isProjectEnrolled(proj.id);
                    return (
                      <div
                        key={proj.id}
                        className="group p-5 rounded-2xl bg-gradient-to-br from-indigo-50/40 via-white to-purple-50/30 border border-indigo-200/80 hover:border-indigo-400 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 uppercase tracking-wider">
                              Live Industry Team
                            </span>
                            <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-slate-400" />
                              {proj.duration}
                            </span>
                          </div>

                          <h3
                            onClick={() => handleOpenProjectModal(proj)}
                            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 cursor-pointer transition line-clamp-1"
                          >
                            {proj.title}
                          </h3>

                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {proj.shortDesc}
                          </p>

                          {/* Tech Tags */}
                          {proj.technologies && (
                            <div className="flex flex-wrap gap-1 pt-1">
                              {proj.technologies.slice(0, 3).map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded-md bg-white border border-indigo-100 text-[10px] font-semibold text-indigo-700"
                                >
                                  {tech}
                                </span>
                              ))}
                              {proj.technologies.length > 3 && (
                                <span className="text-[10px] text-slate-400 font-medium self-center">
                                  +{proj.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Deliverables snippet & Mentor */}
                        <div className="pt-3 border-t border-slate-200/70 space-y-3">
                          <div className="flex items-center justify-between text-[11px] text-slate-500">
                            <span className="flex items-center gap-1">
                              <UserCheck className="w-3.5 h-3.5 text-indigo-600" />
                              <span>Mentor: <strong>{proj.mentor}</strong></span>
                            </span>
                            <span className="font-semibold text-indigo-600">
                              {proj.enrolledStudents || 25} Students
                            </span>
                          </div>

                          {/* Buttons: Project Details & Enroll Option */}
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => handleOpenProjectModal(proj)}
                              className="flex-1 py-2 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 hover:border-slate-300 transition text-center cursor-pointer"
                            >
                              Project Details
                            </button>

                            {enrolled ? (
                              <Link
                                to="/dashboard"
                                className="flex-1 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition flex items-center justify-center gap-1 border border-emerald-200"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Enrolled</span>
                              </Link>
                            ) : (
                              <button
                                type="button"
                                onClick={() => handleEnrollInProject(proj)}
                                className="flex-1 py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition flex items-center justify-center gap-1 shadow-xs shadow-indigo-200 cursor-pointer"
                              >
                                <FolderGit2 className="w-3.5 h-3.5" />
                                <span>Enroll Project</span>
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              {/* In-Section Course Enrollment Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-sm sm:text-base flex items-center gap-2">
                    <PackageCheck className="w-4 h-4 text-emerald-400" />
                    <span>Enroll in this Course to Unlock Full Code Reviews & Certification</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">
                    Get full lifetime access to all {course.lessonsCount || 30}+ lecture videos, downloadable firmware templates, circuit diagrams, and mentor feedback.
                  </p>
                </div>
                <button
                  onClick={handleEnrollAction}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs shrink-0 transition flex items-center gap-1.5 shadow-md cursor-pointer ${
                    isEnrolled
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                      : 'bg-indigo-500 hover:bg-indigo-600 text-white shadow-indigo-500/25'
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Continue Learning</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll in Course (${course.price})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CERTIFICATION PREVIEW BANNER */}
            <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Accredited Certification
                </span>
                <h3 className="text-xl font-bold mt-1">Official NRET Certificate of Completion</h3>
                <p className="text-xs text-indigo-100 mt-2 max-w-md">
                  Complete all modules, pass the practical quiz, and submit your rover code to receive a verifiable credential.
                </p>
              </div>
              <button
                onClick={() => setCertModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-white text-indigo-900 font-bold text-xs hover:bg-indigo-50 shadow-md transition shrink-0 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-indigo-600" />
                <span>Preview Certificate</span>
              </button>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="divide-y divide-slate-100">
                {faqs.map((faq, idx) => {
                  const isOpen = expandedFaq[idx];
                  return (
                    <div key={idx} className="py-3.5">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between text-left font-bold text-sm text-slate-800 hover:text-indigo-600 transition"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {isOpen && (
                        <p className="text-xs text-slate-600 mt-2 leading-relaxed pl-1">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Sticky Enrollment / Purchase Box */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Preview Thumbnail */}
              <div className="relative aspect-video bg-slate-900">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover opacity-90"
                />
                <button
                  onClick={() => handleEnrollAction()}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition group"
                  aria-label="Preview video"
                >
                  <PlayCircle className="w-7 h-7 fill-current" />
                </button>
                <div className="absolute bottom-2 right-2 bg-slate-950/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                  Course Preview
                </div>
              </div>

              {/* Price & CTA */}
              <div className="p-6">
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-extrabold text-slate-900">${course.price}</span>
                  {course.originalPrice && (
                    <span className="text-sm text-slate-400 line-through">${course.originalPrice}</span>
                  )}
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded ml-auto">
                    50% OFF
                  </span>
                </div>

                <button
                  onClick={handleEnrollAction}
                  className={`w-full py-3.5 rounded-full font-bold text-sm shadow-md transition flex items-center justify-center gap-2 ${
                    isEnrolled
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <BookOpen className="w-4 h-4" />
                      <span>Continue Learning Player</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 mt-2">
                  30-Day Money-Back Guarantee • Instant Access
                </p>

                {/* Course Includes Checklist */}
                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    This Course Includes:
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-600">
                    <li className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-indigo-600" />
                      <span>{course.duration} on-demand video</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                      <span>{course.lessonsCount || 32} downloadable code snippets & circuit CADs</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-indigo-600" />
                      <span>Certificate of Completion</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-indigo-600" />
                      <span>Direct Q&A instructor access</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Project Details & Enrollment Modal */}
      <CourseProjectModal
        project={selectedProject}
        course={course}
        isOpen={projectModalOpen}
        onClose={() => {
          setProjectModalOpen(false);
          setSelectedProject(null);
        }}
        isProjectEnrolled={selectedProject ? isProjectEnrolled(selectedProject.id) : false}
        onEnrollProject={(proj) => {
          handleEnrollInProject(proj);
        }}
        isCourseEnrolled={isEnrolled}
        onEnrollCourse={handleEnrollAction}
      />

      {/* Certificate Preview Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        certificate={(sampleCertificates && sampleCertificates[0]) || (certificates && certificates[0]) || null}
      />

      {/* Mobile Sticky Bottom Enrollment Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3.5 shadow-2xl flex items-center justify-between gap-4">
        <div>
          <span className="text-xs text-slate-400 block leading-tight">Course Price</span>
          <span className="text-lg font-extrabold text-slate-900">${course.price}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#course-projects-section"
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Projects ({courseProjects.length})</span>
          </a>
          <button
            onClick={handleEnrollAction}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm cursor-pointer ${
              isEnrolled
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 text-white'
            }`}
          >
            {isEnrolled ? (
              <>
                <BookOpen className="w-3.5 h-3.5" />
                <span>Continue</span>
              </>
            ) : (
              <>
                <span>Enroll Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
