import React, { useState } from 'react';
import { 
  X, Clock, Calendar, Users, Award, CheckCircle2, ChevronRight,
  ExternalLink, Sparkles, AlertCircle, FileText, Cpu, Target,
  Share2, ArrowRight, BookOpen, Check
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Link } from 'react-router-dom';

const WORKFLOW_STEPS = [
  { step: "Idea", label: "Idea & Requirements", icon: "01" },
  { step: "Planning", label: "Planning & Architecture", icon: "02" },
  { step: "Design", label: "Design & Schematics", icon: "03" },
  { step: "Development", label: "Hardware & Code Development", icon: "04" },
  { step: "Testing", label: "Testing & Signal Calibration", icon: "05" },
  { step: "Deployment", label: "Deployment & Commissioning", icon: "06" }
];

export default function ProjectModal({ project, isOpen, onClose }) {
  const { studentLiveProjects, enrollStudentInProject, courses, addToast } = useApp();
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);

  if (!isOpen || !project) return null;

  const isEnrolled = studentLiveProjects?.some(sp => sp.projectId === project.id);

  // Find related courses from mock database
  const relatedCourses = (project.relatedCourseIds || [])
    .map(id => courses.find(c => c.id === id))
    .filter(Boolean);

  const handleEnroll = () => {
    enrollStudentInProject(project);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.origin + `/programs?tab=projects&id=${project.id}`);
      addToast("Project link copied to clipboard!");
    } else {
      addToast("Share link ready!");
    }
  };

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shrink-0">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/90 text-white shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  {project.status || 'Live Project'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-indigo-200">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
                  {project.type || 'Team Project'}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShare}
                title="Share Project"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Bar inside Header */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Duration</span>
              <span className="font-semibold text-white mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {project.duration}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Difficulty</span>
              <span className="font-semibold text-white mt-0.5">{project.level}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Enrollment</span>
              <span className="font-semibold text-white mt-0.5">{project.enrolledStudents || 32} Enrolled</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 block uppercase font-bold">Assigned Mentor</span>
              <span className="font-semibold text-white mt-0.5 truncate block">{project.mentor}</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* VISUAL WORKFLOW TRACKER: Idea → Planning → Design → Development → Testing → Deployment */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block">
                  Project Execution Lifecycle
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Six-Stage Practical Project Workflow
                </h3>
              </div>
              <span className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                Industry Agile Model
              </span>
            </div>

            {/* Stepper Chain */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {WORKFLOW_STEPS.map((stepItem, idx) => {
                const isActive = activeWorkflowTab === idx;
                const workflowDetail = (project.workflow && project.workflow[idx]) || {
                  label: stepItem.label,
                  desc: "Core implementation sprint with mentor guidance."
                };
                return (
                  <button
                    key={stepItem.step}
                    onClick={() => setActiveWorkflowTab(idx)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isActive
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-300/50'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-bold">
                      <span className={isActive ? 'text-indigo-200' : 'text-slate-400'}>
                        {stepItem.icon}
                      </span>
                      {idx < 3 ? (
                        <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-300' : 'bg-emerald-500'}`} />
                      ) : null}
                    </div>
                    <span className="block font-bold text-xs mt-1.5 truncate">
                      {stepItem.step}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Workflow Stage Detail Card */}
            {project.workflow && project.workflow[activeWorkflowTab] && (
              <div className="mt-4 p-4 rounded-xl bg-white border border-indigo-100 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{activeWorkflowTab + 1}
                </div>
                <div className="text-xs">
                  <h4 className="font-bold text-slate-900 text-sm">
                    {project.workflow[activeWorkflowTab].label}
                  </h4>
                  <p className="text-slate-600 mt-1 leading-relaxed">
                    {project.workflow[activeWorkflowTab].desc}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* TWO COLUMN CONTENT: Left Details + Right Info & Related Courses */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Main Info */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Project Overview */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-indigo-600" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.fullDesc || project.shortDesc}
                </p>
              </div>

              {/* Problem Statement */}
              {project.problemStatement && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                  <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wide flex items-center gap-1.5 mb-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>Problem Statement</span>
                  </h4>
                  <p className="text-xs text-amber-950 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              )}

              {/* Objectives */}
              {project.objectives && project.objectives.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Project Objectives</span>
                  </h3>
                  <div className="space-y-2.5">
                    {project.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-indigo-600" />
                  <span>Technologies & Hardware Used</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(project.technologies || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200/80 hover:border-indigo-300 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Student Responsibilities */}
              {project.studentResponsibilities && project.studentResponsibilities.length > 0 && (
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Student Responsibilities</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {project.studentResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills Gained */}
              {project.skillsGained && project.skillsGained.length > 0 && (
                <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100">
                  <h3 className="text-sm font-bold text-indigo-950 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Industry Skills Gained</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.skillsGained.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-indigo-900">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 1 Col: Specs & Related Programs / Courses */}
            <div className="space-y-6">
              
              {/* Enrollment / Mentor Action Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={project.mentorAvatar}
                    alt={project.mentor}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-indigo-100"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Project Mentor</span>
                    <h4 className="font-bold text-slate-900 text-sm">{project.mentor}</h4>
                    <span className="text-[11px] text-slate-500 block leading-tight">{project.mentorDesignation}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Team Size:</span>
                    <span className="font-semibold text-slate-800">Up to {project.maxTeamSize || 4} Students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Batch Deadline:</span>
                    <span className="font-semibold text-slate-800">{project.deadline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Prerequisites:</span>
                    <span className="font-semibold text-slate-800">Basic Programming</span>
                  </div>
                </div>

                <button
                  onClick={handleEnroll}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-xs ${
                    isEnrolled
                      ? 'bg-emerald-600 text-white cursor-default'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
                  }`}
                >
                  {isEnrolled ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Enrolled (Active in Dashboard)</span>
                    </>
                  ) : (
                    <>
                      <span>Enroll in Live Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {/* Accredited Certification Info */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white space-y-2 shadow-md">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Project Certification</span>
                </div>
                <h4 className="font-bold text-sm text-white">NRET Verified Project Credential</h4>
                <p className="text-[11px] text-indigo-100 leading-relaxed">
                  {project.certificationInfo || "Students receive a verified certificate upon submitting their project deliverables and passing peer code review."}
                </p>
              </div>

              {/* RELATED COURSES / PROGRAMS */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Related Programs & Courses</span>
                  </h4>
                  <Link
                    to="/courses"
                    onClick={onClose}
                    className="text-[11px] text-indigo-600 font-semibold hover:underline"
                  >
                    View all
                  </Link>
                </div>

                <div className="space-y-2.5">
                  {relatedCourses.length > 0 ? (
                    relatedCourses.map((c) => (
                      <Link
                        key={c.id}
                        to={`/courses/${c.id}`}
                        onClick={onClose}
                        className="block p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition group"
                      >
                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
                          {c.category}
                        </span>
                        <h5 className="font-bold text-xs text-slate-900 group-hover:text-indigo-600 transition line-clamp-1 mt-0.5">
                          {c.title}
                        </h5>
                        <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
                          <span>{c.duration}</span>
                          <span className="font-semibold text-slate-700">₹{c.price?.toLocaleString() || 'Free'}</span>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="text-xs text-slate-500 italic p-2">
                      Connected to NRET Core Hardware & Embedded Systems Curriculums.
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            Questions? Contact mentor at <span className="font-medium text-slate-800">{project.mentor}</span>
          </div>
          <div className="flex items-center gap-2.5 ml-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              Close
            </button>
            <button
              onClick={handleEnroll}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                isEnrolled
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md'
              }`}
            >
              {isEnrolled ? 'Enrolled' : 'Apply for Live Project'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
