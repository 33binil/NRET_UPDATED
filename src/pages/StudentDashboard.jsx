import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  LayoutDashboard,
  BookOpen,
  CheckCircle2,
  Award,
  Clock,
  ArrowRight,
  Play,
  Calendar,
  FileText,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Sparkles,
  User,
  Settings,
  LogOut,
  Bell,
  FolderGit2,
  Users,
  Cpu
} from 'lucide-react';

export default function StudentDashboard() {
  const { 
    currentUser, 
    enrolledCourses, 
    courses, 
    certificates, 
    assignments, 
    logout,
    studentLiveProjects,
    liveProjects,
    updateStudentProjectProgress
  } = useApp();
  const navigate = useNavigate();

  // Enrolled courses details
  const enrolledCourseDetails = enrolledCourses.map((e) => {
    const course = courses.find((c) => c.id === e.courseId) || courses[0];
    return {
      ...e,
      course
    };
  });

  const completedCount = enrolledCourses.filter((e) => e.progress === 100).length;
  const inProgressCount = enrolledCourses.filter((e) => e.progress < 100).length;

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dashboard Top Header matching reference */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={currentUser?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"}
              alt={currentUser?.name}
              className="w-16 h-16 rounded-2xl object-cover ring-4 ring-indigo-50 border border-slate-200"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Student Portal
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Welcome back, {currentUser?.name || "Student"}! 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Keep up the great momentum. You're on track to complete your Robotics certification!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/courses"
              className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition"
            >
              Browse Courses
            </Link>
            <Link
              to="/profile"
              className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        {/* 4 Overview Statistics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Enrolled Courses</span>
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-3">{enrolledCourses.length}</div>
            <div className="text-[11px] text-slate-400 mt-1">{inProgressCount} in progress</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Completed Courses</span>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-3">{completedCount}</div>
            <div className="text-[11px] text-emerald-600 font-semibold mt-1">100% finished</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Certificates</span>
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-3">{certificates.length}</div>
            <div className="text-[11px] text-slate-400 mt-1">Verified credentials</div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-2xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Learning Hours</span>
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl font-extrabold text-slate-900 mt-3">
              {currentUser?.learningHours || 48}h
            </div>
            <div className="text-[11px] text-purple-600 font-semibold mt-1">+4h this week</div>
          </div>

        </div>

        {/* Main Content Grid: Continue Learning + Right Column (Tasks & Activity) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (8 cols): Continue Learning */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">Continue Learning</h2>
                <p className="text-xs text-slate-500">Pick up right where you left off</p>
              </div>
              <Link to="/my-courses" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                View All My Courses →
              </Link>
            </div>

            <div className="space-y-4">
              {enrolledCourseDetails.map((item) => (
                <div
                  key={item.courseId}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.course.thumbnail}
                      alt={item.course.title}
                      className="w-20 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                        {item.course.category}
                      </span>
                      <h3 className="font-bold text-sm text-slate-900 mt-1">
                        {item.course.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Trainer: {item.course.instructor} • Last accessed: {item.lastAccessed}
                      </p>
                      
                      {/* Progress Bar */}
                      <div className="flex items-center gap-2 mt-2 w-48 sm:w-64">
                        <div className="flex-1 bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                            style={{ width: `${item.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-700">{item.progress}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-full sm:w-auto">
                    <Link
                      to={`/learn/${item.course.id}`}
                      className={`w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold transition flex items-center justify-center gap-2 ${
                        item.progress === 100
                          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm'
                      }`}
                    >
                      {item.progress === 100 ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Review Material</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Continue Learning</span>
                        </>
                      )}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* MY LIVE PROJECTS (PRACTICAL PROGRAM LEARNING) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">My Live Projects</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {studentLiveProjects?.length || 0} Active
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Real-world industry engineering projects under faculty mentorship</p>
                </div>
                <Link to="/programs?tab=projects" className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                  <span>Explore Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {studentLiveProjects && studentLiveProjects.length > 0 ? (
                <div className="space-y-4">
                  {studentLiveProjects.map((sp) => {
                    const project = (liveProjects || []).find(p => p.id === sp.projectId) || {
                      title: 'Live Engineering Project',
                      category: 'Robotics & Automation',
                      mentor: 'Faculty Mentor',
                      duration: '8 Weeks'
                    };

                    return (
                      <div
                        key={sp.projectId}
                        className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs hover:shadow-md transition space-y-4"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-emerald-50 text-emerald-700 uppercase tracking-wide">
                                Live Project
                              </span>
                              <span className="text-[11px] font-medium text-slate-500">
                                {project.category}
                              </span>
                            </div>
                            <h3 className="font-bold text-base text-slate-900">
                              {project.title}
                            </h3>
                            <div className="text-xs text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
                              <span>Mentor: <strong className="text-slate-700 font-semibold">{project.mentor}</strong></span>
                              <span>•</span>
                              <span>Role: <strong className="text-slate-700 font-semibold">{sp.role || 'Embedded Firmware Lead'}</strong></span>
                              <span>•</span>
                              <span>Team: <strong className="text-slate-700 font-semibold">{sp.teamMembers?.length || 3} Students</strong></span>
                            </div>
                          </div>

                          <Link
                            to={`/programs?tab=projects&id=${sp.projectId}`}
                            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs transition flex items-center justify-center gap-1.5 shrink-0 shadow-xs"
                          >
                            <span>Open Project Workspace</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Progress Bar & Current Phase */}
                        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <div className="space-y-1.5 flex-1 max-w-md">
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold text-slate-700">Project Milestone Progress</span>
                              <span className="font-bold text-indigo-600">{sp.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                              <div
                                className="bg-indigo-600 h-full rounded-full transition-all duration-500"
                                style={{ width: `${sp.progress}%` }}
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-3 shrink-0">
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 uppercase font-bold block">Current Phase</span>
                              <span className="font-bold text-slate-800 text-xs">{sp.currentPhase || 'Phase 4: Development'}</span>
                            </div>
                            <button
                              onClick={() => {
                                const nextProgress = Math.min(100, sp.progress + 15);
                                updateStudentProjectProgress(sp.projectId, nextProgress);
                              }}
                              className="px-2.5 py-1 text-[11px] font-semibold bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700"
                            >
                              + Update Sprint
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white border border-dashed border-slate-200 text-center space-y-3">
                  <FolderGit2 className="w-8 h-8 text-slate-300 mx-auto" />
                  <div>
                    <h4 className="font-bold text-sm text-slate-800">No active live projects</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Join an active live robotics, IoT, or web engineering team under faculty guidance.
                    </p>
                  </div>
                  <Link
                    to="/programs?tab=projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition"
                  >
                    <span>Browse Live Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Quick Links Banner */}
            <div className="bg-gradient-to-r from-indigo-900 to-purple-950 rounded-2xl p-6 text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                  Ready to test your knowledge?
                </span>
                <h3 className="text-lg font-bold mt-1">Take the Robotics Hardware Quiz</h3>
                <p className="text-xs text-indigo-200 mt-1">
                  15-minute timed interactive exam with immediate certificate qualification.
                </p>
              </div>
              <Link
                to="/quizzes"
                className="px-5 py-2.5 rounded-full bg-white text-indigo-900 text-xs font-bold hover:bg-indigo-50 transition shrink-0"
              >
                Start Quiz
              </Link>
            </div>

          </div>

          {/* Right Column (4 cols): Upcoming Tasks & Recent Activity */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Upcoming Tasks */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <span>Upcoming Tasks</span>
                </h3>
                <Link to="/assignments" className="text-xs text-indigo-600 hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {assignments.slice(0, 3).map((task) => (
                  <div key={task.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        task.status === 'Graded' ? 'bg-emerald-100 text-emerald-800' :
                        task.status === 'Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {task.status}
                      </span>
                      <span className="text-slate-400 text-[11px]">{task.deadline}</span>
                    </div>
                    <div className="font-semibold text-slate-800 mt-1.5">{task.title}</div>
                    {task.grade && (
                      <div className="text-emerald-600 font-bold text-[11px] mt-1">Score: {task.grade}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity Timeline */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs space-y-4">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Recent Activity</span>
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-800">Completed Lesson 04</span>
                    <p className="text-slate-500 text-[11px]">DC Motors vs Steppers vs Servos (28m)</p>
                    <span className="text-[10px] text-slate-400">Today, 10:45 AM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-800">Submitted Assignment</span>
                    <p className="text-slate-500 text-[11px]">Obstacle Avoidance State Machine Code</p>
                    <span className="text-[10px] text-slate-400">Yesterday, 4:20 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0"></div>
                  <div>
                    <span className="font-semibold text-slate-800">Earned Certificate</span>
                    <p className="text-slate-500 text-[11px]">Embedded Systems with Arduino (Honors)</p>
                    <span className="text-[10px] text-slate-400">August 28, 2026</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
