import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CertificateModal from '../components/CertificateModal';
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
  Sparkles
} from 'lucide-react';

export default function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { courses, enrolledCourses, enrollCourse, currentUser, sampleCertificates } = useApp();

  const [expandedModules, setExpandedModules] = useState({ 'mod-1': true, 'mod-2': true });
  const [expandedFaq, setExpandedFaq] = useState({ 0: true });
  const [certModalOpen, setCertModalOpen] = useState(false);

  const course = courses.find((c) => c.id === id) || courses[0];
  const isEnrolled = enrolledCourses.some((e) => e.courseId === course.id);

  const toggleModule = (modId) => {
    setExpandedModules((prev) => ({ ...prev, [modId]: !prev[modId] }));
  };

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

            {/* COURSE CURRICULUM */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Course Curriculum</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {course.modules?.length || 5} Modules • {course.lessonsCount || 32} Lessons • {course.duration}
                  </p>
                </div>
                <button
                  onClick={() => {
                    const allOpen = Object.keys(expandedModules).length > 0;
                    if (allOpen) setExpandedModules({});
                    else setExpandedModules({ 'mod-1': true, 'mod-2': true, 'mod-3': true });
                  }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Toggle All
                </button>
              </div>

              {/* Modules List */}
              <div className="space-y-3">
                {(course.modules && course.modules.length > 0 ? course.modules : [
                  {
                    id: 'mod-1',
                    title: 'Module 01 — Introduction & Setup',
                    lessons: [
                      { id: 'les-1', title: 'Welcome & Hardware Kit Setup', duration: '12:40' },
                      { id: 'les-2', title: 'Basic Concepts & Electronics Basics', duration: '24:15' },
                      { id: 'les-3', title: 'Tools & IDE Installation', duration: '18:30' }
                    ]
                  },
                  {
                    id: 'mod-2',
                    title: 'Module 02 — Fundamentals & Components',
                    lessons: [
                      { id: 'les-4', title: 'Core Concepts & PWM Modulation', duration: '28:10' },
                      { id: 'les-5', title: 'Component Wiring & Safety', duration: '32:45' }
                    ]
                  },
                  {
                    id: 'mod-3',
                    title: 'Module 03 — Practical Implementation',
                    lessons: [
                      { id: 'les-6', title: 'Hands-on Breadboard Prototyping', duration: '35:20' },
                      { id: 'les-7', title: 'Project Testing & Sensor Fusion', duration: '29:40' }
                    ]
                  },
                  {
                    id: 'mod-4',
                    title: 'Module 04 — Advanced Concepts',
                    lessons: [
                      { id: 'les-8', title: 'PID Tuning & Noise Filtering', duration: '41:10' },
                      { id: 'les-9', title: 'Real-World Applications', duration: '22:15' }
                    ]
                  },
                  {
                    id: 'mod-5',
                    title: 'Module 05 — Capstone Project',
                    lessons: [
                      { id: 'les-10', title: 'Project Planning & Architecture', duration: '19:50' },
                      { id: 'les-11', title: 'Final Evaluation & Submission', duration: '30:00' }
                    ]
                  }
                ]).map((module, mIdx) => {
                  const isOpen = expandedModules[module.id];
                  return (
                    <div key={module.id || mIdx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 transition"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center">
                            0{mIdx + 1}
                          </span>
                          <div>
                            <h3 className="font-bold text-sm text-slate-900">{module.title}</h3>
                            <span className="text-[11px] text-slate-400">
                              {module.lessons?.length || 3} Lessons
                            </span>
                          </div>
                        </div>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 pt-1 divide-y divide-slate-100 border-t border-slate-100 bg-slate-50/40">
                          {(module.lessons || []).map((les, lIdx) => (
                            <div key={les.id || lIdx} className="py-2.5 flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2.5 text-slate-700">
                                <PlayCircle className="w-4 h-4 text-indigo-600 shrink-0" />
                                <span className="font-medium">{les.title}</span>
                              </div>
                              <div className="flex items-center gap-3 text-slate-400 font-mono">
                                <span>{les.duration || '15:00'}</span>
                                {isEnrolled && (
                                  <Link
                                    to={`/learn/${course.id}`}
                                    className="text-indigo-600 font-sans font-semibold hover:underline"
                                  >
                                    Play
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
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

            {/* COURSE PROJECTS */}
            {course.projects && course.projects.length > 0 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Hands-On Course Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {course.projects.map((proj, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                        Project 0{i + 1}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 mt-1">{proj.title}</h4>
                      <p className="text-xs text-slate-600 mt-1">{proj.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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

      {/* Certificate Preview Modal */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        certificate={sampleCertificates[0]}
      />
    </div>
  );
}
