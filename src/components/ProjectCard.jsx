import React from 'react';
import { Clock, Users, BarChart2, ArrowRight, CheckCircle2, Cpu, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProjectCard({ project, onSelectProject }) {
  const { studentLiveProjects } = useApp();
  const isEnrolled = studentLiveProjects?.some(sp => sp.projectId === project.id);

  return (
    <div
      id={`project-card-${project.id}`}
      className="group bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
    >
      {/* Card Image Header */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

        {/* Status & Category Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2 items-center">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/90 text-white backdrop-blur-md shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            {project.status || 'Live Project'}
          </span>
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-black/60 text-slate-200 backdrop-blur-md">
            {project.category}
          </span>
        </div>

        {/* Type Badge Top Right */}
        <div className="absolute top-3.5 right-3.5">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-slate-800 backdrop-blur-md shadow-xs flex items-center gap-1">
            <Users className="w-3 h-3 text-indigo-600" />
            <span>{project.type || 'Team Project'}</span>
          </span>
        </div>

        {/* Bottom overlay in image */}
        <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-slate-200 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-indigo-300" />
            {project.duration}
          </span>
          <span className="flex items-center gap-1">
            <BarChart2 className="w-3.5 h-3.5 text-emerald-300" />
            {project.level}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title */}
          <h3
            onClick={() => onSelectProject && onSelectProject(project)}
            className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer leading-snug line-clamp-1"
          >
            {project.title}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {project.shortDesc}
          </p>

          {/* Key Topics / Include Checklist */}
          {project.skillsGained && (
            <div className="mt-3.5 space-y-1.5">
              {project.skillsGained.slice(0, 3).map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {(project.technologies || []).slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies && project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-indigo-50 text-indigo-700">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={project.mentorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
              alt={project.mentor}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-200 shrink-0"
            />
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block uppercase font-medium leading-none">Mentor</span>
              <span className="text-xs font-semibold text-slate-800 truncate block mt-0.5">{project.mentor}</span>
            </div>
          </div>

          <button
            id={`btn-view-project-${project.id}`}
            onClick={() => onSelectProject && onSelectProject(project)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
              isEnrolled
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-xs hover:shadow-md'
            }`}
          >
            {isEnrolled ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Enrolled</span>
              </>
            ) : (
              <>
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
