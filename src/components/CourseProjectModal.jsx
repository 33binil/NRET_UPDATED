import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  X,
  CheckCircle2,
  Clock,
  Award,
  Cpu,
  Layers,
  Code,
  Check,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  UserCheck,
  FolderGit2
} from 'lucide-react';

export default function CourseProjectModal({
  project,
  course,
  isOpen,
  onClose,
  isProjectEnrolled,
  onEnrollProject,
  isCourseEnrolled,
  onEnrollCourse
}) {
  if (!isOpen || !project) return null;

  const deliverables = project.deliverables || [
    "Complete Schematics & Pinout Wiring Diagram",
    "Source Code & Tested Firmware Repository",
    "Prototype Demonstration Video & Milestone Defense",
    "Bill of Materials (BOM) & Engineering Technical Report"
  ];

  const technologies = project.technologies || ["Embedded C++", "Microcontroller", "Sensors", "Circuit Design"];

  const workflow = project.workflow || [
    {
      step: "Phase 1",
      label: "Architecture & Circuit Schematics",
      desc: "Define I/O pin budgets, power calculations, sensor interfaces, and driver topologies."
    },
    {
      step: "Phase 2",
      label: "Hardware Assembly & Prototyping",
      desc: "Assemble breadboard or custom PCB, verify supply rails, and prevent noise."
    },
    {
      step: "Phase 3",
      label: "Firmware & Algorithm Implementation",
      desc: "Write modular non-blocking code, timer interrupts, state machines, and sensor filters."
    },
    {
      step: "Phase 4",
      label: "Testing, Calibration & Portfolio Defense",
      desc: "Stress test edge conditions, log telemetry, calibrate deadbands, and submit report."
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200/80 z-10 overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="p-6 pb-5 border-b border-slate-100 flex items-start justify-between gap-4 bg-gradient-to-r from-slate-50 to-indigo-50/30">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-100 text-indigo-800">
                  {project.type || "Hands-On Capstone"}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-100 text-slate-700">
                  {project.category || course?.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  {project.duration || "2-3 Weeks"}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                {project.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 space-y-6 overflow-y-auto flex-1 text-slate-700">
            {/* Overview / Problem Statement */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Project Overview & Challenge
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.fullDesc || project.desc || project.shortDesc}
              </p>
              {project.problemStatement && (
                <div className="mt-2 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-xs text-amber-900 space-y-1">
                  <span className="font-bold flex items-center gap-1 text-amber-800">
                    <Sparkles className="w-3.5 h-3.5" />
                    Problem Solved
                  </span>
                  <p>{project.problemStatement}</p>
                </div>
              )}
            </div>

            {/* Hardware & Technologies */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                <span>Technologies & Hardware Used</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.hardwareNeeded && (
                <p className="text-xs text-slate-500 pt-1">
                  <strong className="text-slate-700 font-medium">Required Hardware Kit: </strong>
                  {project.hardwareNeeded}
                </p>
              )}
            </div>

            {/* Key Deliverables */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Project Deliverables & Outcomes</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Roadmap / Implementation Workflow */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-600" />
                <span>Execution Phases</span>
              </h3>
              <div className="space-y-2">
                {workflow.map((w, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                  >
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase shrink-0 mt-0.5">
                      {w.step || `Phase 0${idx + 1}`}
                    </span>
                    <div className="text-xs">
                      <h4 className="font-bold text-slate-900">{w.label || w.title}</h4>
                      <p className="text-slate-500 mt-0.5">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor & Certification info */}
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-600 block">Faculty Mentorship</span>
                  <span className="font-bold text-slate-800 text-sm">
                    {project.mentor || course?.instructor || "Dr. Arun Kumar"}
                  </span>
                  <span className="text-slate-500 block text-[11px]">Code reviews & hardware debugging guidance</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/60 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Accredited Credential</span>
              </div>
            </div>
          </div>

          {/* Footer Action Bar with Project Enrollment Option */}
          <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs">
              {isProjectEnrolled ? (
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>You are enrolled in this project</span>
                </div>
              ) : (
                <div className="text-slate-500">
                  <span className="font-semibold text-slate-800">Included with Course</span>
                  <p className="text-[11px]">Submit milestones to earn your official project certificate.</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 transition"
              >
                Close
              </button>

              {isProjectEnrolled ? (
                <Link
                  to="/dashboard"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                >
                  <span>Open in Student Dashboard</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => onEnrollProject(project)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-indigo-200 cursor-pointer"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Enroll in this Project</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
