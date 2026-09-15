import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Bell,
  ChevronDown,
  Menu,
  X,
  GraduationCap,
  Cpu,
  Bot,
  User,
  LogOut,
  LayoutDashboard,
  ShieldCheck,
  BookOpen,
  Award,
  Calendar,
  Briefcase,
  CheckCircle2
} from 'lucide-react';

export default function Navbar() {
  const { currentUser, logout, notifications, markAllNotificationsRead } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
    setProgramsDropdownOpen(false);
    setNotifOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Brand Logo matching reference style */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              {/* Modern geometric delta/play symbol */}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M7 4.5v15a1 1 0 001.52.85l12-7.5a1 1 0 000-1.7l-12-7.5A1 1 0 007 4.5z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                <span>NRET</span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-100">
                  LMS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-tight -mt-0.5 hidden sm:block">
                Nano Robotics & Embedded Tech
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links matching reference */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-[15px] text-slate-700">
            {/* Courses Dropdown */}
            <div className="relative" onMouseLeave={() => setCoursesDropdownOpen(false)}>
              <button
                onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                <span>Courses</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to="/courses"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">All Courses</div>
                      <div className="text-xs text-slate-500">Browse complete 20+ curriculum</div>
                    </div>
                  </Link>
                  <Link
                    to="/courses?category=robotics"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-violet-50 hover:text-violet-600 transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Robotics & Automation</div>
                      <div className="text-xs text-slate-500">Kinematics, motors, sensors</div>
                    </div>
                  </Link>
                  <Link
                    to="/courses?category=embedded"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 hover:text-emerald-600 transition"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">Embedded Systems</div>
                      <div className="text-xs text-slate-500">Arduino, ARM, FreeRTOS</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative" onMouseLeave={() => setProgramsDropdownOpen(false)}>
              <button
                onClick={() => setProgramsDropdownOpen(!programsDropdownOpen)}
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                className="flex items-center gap-1 px-3.5 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                <span>Programs</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {programsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                  <Link
                    to="/internships"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition"
                  >
                    <Briefcase className="w-4 h-4 text-indigo-500" />
                    <div>
                      <div className="font-semibold text-sm">Industrial Internships</div>
                      <div className="text-xs text-slate-500">Project-based hardware training</div>
                    </div>
                  </Link>
                  <Link
                    to="/workshops"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition"
                  >
                    <Calendar className="w-4 h-4 text-amber-500" />
                    <div>
                      <div className="font-semibold text-sm">Hands-on Workshops</div>
                      <div className="text-xs text-slate-500">Weekend robotics & IoT labs</div>
                    </div>
                  </Link>
                  <Link
                    to="/certificates"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition"
                  >
                    <Award className="w-4 h-4 text-emerald-500" />
                    <div>
                      <div className="font-semibold text-sm">Certifications</div>
                      <div className="text-xs text-slate-500">Verify credentials & diplomas</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/instructors"
              className="px-3.5 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              Instructors
            </Link>

            <Link
              to="/about"
              className="px-3.5 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              About NRET
            </Link>

            <Link
              to="/contact"
              className="px-3.5 py-2 rounded-lg hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              Contact
            </Link>

            {/* Admin Panel Quick Link */}
            <Link
              to="/admin"
              className="ml-1 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200/70 transition shadow-2xs"
              title="Open Academic Administration Portal"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
              <span>Admin Panel</span>
            </Link>
          </nav>

          {/* User Controls & CTA matching reference */}
          <div className="flex items-center gap-2.5">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="relative p-2.5 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-full transition"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Notification Popover */}
              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
                    <span className="font-semibold text-sm text-slate-900">Notifications</span>
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Mark all as read
                    </button>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-50 mt-1">
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-xs text-slate-400">No notifications</div>
                    ) : (
                      notifications.map(notif => (
                        <Link
                          key={notif.id}
                          to={notif.link}
                          onClick={() => setNotifOpen(false)}
                          className={`block p-3 rounded-xl transition ${notif.read ? 'hover:bg-slate-50 opacity-75' : 'bg-indigo-50/50 hover:bg-indigo-50'}`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-xs font-bold text-slate-900">{notif.title}</h4>
                            <span className="text-[10px] text-slate-400 whitespace-nowrap">{notif.time}</span>
                          </div>
                          <p className="text-xs text-slate-600 mt-1 line-clamp-2">{notif.message}</p>
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* If logged in */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pl-2.5 rounded-full hover:bg-slate-100 border border-slate-200 transition"
                >
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline-block max-w-[100px] truncate">
                    {currentUser.name}
                  </span>
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/30"
                  />
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 pr-1" />
                </button>

                {/* User Dropdown */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                    <div className="px-3 py-2.5 border-b border-slate-100 mb-1">
                      <div className="font-bold text-sm text-slate-900">{currentUser.name}</div>
                      <div className="text-xs text-slate-500 truncate">{currentUser.email}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1 text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                        {currentUser.role === 'admin' ? 'Administrator' : 'Verified Student'}
                      </div>
                    </div>

                    <Link
                      to="/dashboard"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      <LayoutDashboard className="w-4 h-4 text-indigo-600" />
                      <span>Student Dashboard</span>
                    </Link>

                    <Link
                      to="/my-courses"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>My Enrolled Courses</span>
                    </Link>

                    <Link
                      to="/admin"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-purple-700 bg-purple-50/50 hover:bg-purple-100 transition"
                    >
                      <ShieldCheck className="w-4 h-4 text-purple-600" />
                      <span>Admin Management</span>
                    </Link>

                    <Link
                      to="/profile"
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      <span>Profile & Settings</span>
                    </Link>

                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2.5 px-3 py-2 mt-1 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50 transition text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-full shadow-sm shadow-indigo-200 transition"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4">
          <div className="font-semibold text-xs text-slate-400 uppercase tracking-wider px-3 pt-2">
            Navigation
          </div>
          <Link
            to="/"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            All Courses
          </Link>
          <Link
            to="/internships"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Internships
          </Link>
          <Link
            to="/workshops"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Workshops
          </Link>
          <Link
            to="/certificates"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Certificates
          </Link>
          <Link
            to="/instructors"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Instructors
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            About NRET
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-800 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className="block px-3 py-2 rounded-lg text-base font-bold text-purple-700 bg-purple-50 hover:bg-purple-100"
          >
            Admin Panel Console
          </Link>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            {currentUser ? (
              <>
                <Link
                  to="/dashboard"
                  className="w-full text-center py-2.5 rounded-full font-semibold text-white bg-indigo-600"
                >
                  Go to Student Dashboard
                </Link>
                <Link
                  to="/admin"
                  className="w-full text-center py-2.5 rounded-full font-semibold text-purple-700 bg-purple-100"
                >
                  Admin Management
                </Link>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/login"
                  className="text-center py-2.5 rounded-full font-semibold border border-slate-200 text-slate-700"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="text-center py-2.5 rounded-full font-semibold text-white bg-indigo-600"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
