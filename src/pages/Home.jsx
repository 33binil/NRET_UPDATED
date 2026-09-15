import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import CourseCard from '../components/CourseCard';
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Award,
  Clock,
  CheckCircle2,
  Bot,
  Cpu,
  Wifi,
  Zap,
  Code,
  Factory,
  ShieldCheck,
  Briefcase,
  Wrench,
  Lightbulb,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Layers,
  Smartphone,
  Laptop,
  Tablet,
  Calendar,
  MapPin
} from 'lucide-react';

export default function Home() {
  const { courses, instructorsList, internshipsList = [], workshopsList = [], organizationInfo } = useApp();
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Popular courses
  const popularCourses = courses.slice(0, 5);

  const categoryIcons = {
    robotics: <Bot className="w-6 h-6 text-violet-600" />,
    embedded: <Cpu className="w-6 h-6 text-emerald-600" />,
    iot: <Wifi className="w-6 h-6 text-rose-600" />,
    electronics: <Zap className="w-6 h-6 text-amber-600" />,
    programming: <Code className="w-6 h-6 text-indigo-600" />,
    industrial: <Factory className="w-6 h-6 text-blue-600" />
  };

  const categories = [
    { id: "robotics", name: "Robotics & Automation", count: "18+ Courses", icon: categoryIcons.robotics, bg: "bg-violet-50 text-violet-600 border-violet-100" },
    { id: "embedded", name: "Embedded Systems", count: "24+ Courses", icon: categoryIcons.embedded, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { id: "iot", name: "IoT & Smart Tech", count: "15+ Courses", icon: categoryIcons.iot, bg: "bg-rose-50 text-rose-600 border-rose-100" },
    { id: "electronics", name: "Electronics & PCB", count: "12+ Courses", icon: categoryIcons.electronics, bg: "bg-amber-50 text-amber-600 border-amber-100" },
    { id: "programming", name: "Programming & ROS", count: "20+ Courses", icon: categoryIcons.programming, bg: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { id: "industrial", name: "Industrial Automation", count: "10+ Courses", icon: categoryIcons.industrial, bg: "bg-blue-50 text-blue-600 border-blue-100" }
  ];

  return (
    <div className="bg-[#FAFAFC] min-h-screen text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION - Mirroring the primary reference image */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            
            {/* Pill Tag matching reference */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50/90 border border-indigo-100 text-indigo-700 text-xs font-semibold shadow-2xs"
            >
              <span className="font-bold text-indigo-600">#</span>
              <span>#1 Platform for Robotics & Technology Education</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Learn New Skills. <br />
              <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent">
                Advance Your Future.
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-normal">
              {organizationInfo.heroSupport} Access hands-on courses taught by industry leaders in robotics, microcontrollers, and IoT.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/courses"
                  className="px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white font-semibold text-sm shadow-lg shadow-indigo-200 transition-all flex items-center gap-2 group"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowVideoModal(true)}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 active:scale-98 text-slate-800 font-semibold text-sm transition-all flex items-center gap-2.5 shadow-2xs group"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>How It Works</span>
              </motion.button>
            </div>

            {/* Social Proof / Avatars Row matching reference */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                  alt="Learner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                  alt="Learner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                  alt="Learner"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
                  alt="Learner"
                />
              </div>

              <div>
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-slate-700 mt-0.5">
                  Trusted by 10,000+ engineers worldwide
                </p>
              </div>
            </div>

          </motion.div>

          {/* Hero Right Composition - Mirroring the reference image graphic with floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end"
          >
            
            {/* Main Center Image */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=900&auto=format&fit=crop&q=80"
                alt="Student building robotics project"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Card 1: Expert Instructors (Top-Right / Reference style) */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 sm:top-6 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[210px] hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Expert Instructors</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Learn from aerospace & IoT leaders</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2: Flexible Learning / Hands-on Kits */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-28 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[220px] hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Hardware Kits</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Real microcontrollers & sensors delivered</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3: Certificate of Completion */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-20 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[220px] hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Verified Certificate</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Boost your career & LinkedIn credentials</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 4: Lifetime Lab Access */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute -bottom-5 left-8 sm:left-12 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 max-w-[210px] hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Lifetime Access</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">Learn at your pace without limits</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* 2. POPULAR CATEGORIES - Exact layout matching reference image */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Popular Categories</h2>
          </div>
          <Link
            to="/courses"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 squircle category cards matching reference design */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to={`/courses?category=${cat.id}`}
                className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center h-full"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3.5 border transition-transform duration-300 group-hover:scale-110 ${cat.bg}`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {cat.count}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. MOST POPULAR COURSES - Exact 5-card horizontal grid from reference image */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              FEATURED COURSES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Most Popular Courses
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Handpicked courses loved by learners around the world.
            </p>
          </div>
          <Link
            to="/courses"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group shrink-0"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 4. STATS BANNER - Dark rounded-3xl container matching reference image */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1120] text-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-indigo-400 shrink-0">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  10,000+
                </div>
                <div className="text-xs text-slate-400 font-medium">Students Trained</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-700/50 flex items-center justify-center text-purple-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  50,000+
                </div>
                <div className="text-xs text-slate-400 font-medium">Learning Hours</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-700/50 flex items-center justify-center text-blue-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  25+
                </div>
                <div className="text-xs text-slate-400 font-medium">Expert Instructors</div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 flex items-center justify-center text-emerald-400 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  98%
                </div>
                <div className="text-xs text-slate-400 font-medium">Satisfaction Rate</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MULTI-DEVICE SHOWCASE - "Learn on Your Terms" matching reference image */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              LEARN ANYTIME, ANYWHERE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Learn on Your Terms
            </h2>
            <p className="text-base text-slate-600 leading-relaxed font-normal">
              Whether you're on your laptop in the hardware lab, tablet at home, or phone on the go, your NRET learning journey goes where you go.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Access on all devices with synced progress</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Download schematics, circuit models & code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-semibold text-slate-800">Interactive hardware simulation & quizzes</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/courses"
                className="px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-200 transition inline-flex items-center gap-2"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Side - Interactive Device Mockups matching reference */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Desktop / Laptop Mockup Frame */}
            <div className="w-full max-w-xl bg-slate-900 rounded-2xl p-2.5 shadow-2xl border border-slate-700">
              {/* Laptop screen top bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-800/80 rounded-t-xl text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
                <span className="font-mono text-[10px] text-slate-400">nret-lms.org/dashboard</span>
                <div className="w-4"></div>
              </div>

              {/* Mock Dashboard Screen inside Laptop */}
              <div className="bg-white rounded-b-xl p-4 text-slate-900">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">N</div>
                    <span className="text-xs font-bold">Welcome back, Alex! 👋</span>
                  </div>
                  <div className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                    Progress: 68%
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Current Course</span>
                    <div className="text-xs font-bold text-slate-900 mt-1 truncate">Robotics & Automation</div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-indigo-600 h-full w-[68%] rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Next Up</span>
                    <div className="text-xs font-bold text-slate-900 mt-1 truncate">PWM Speed Calibration</div>
                    <div className="text-[10px] text-indigo-600 font-semibold mt-1">Lesson 05 • 22 min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Mockup Overlay */}
            <div className="hidden sm:block absolute -bottom-6 -left-4 w-44 bg-slate-950 rounded-3xl p-2 shadow-2xl border-2 border-slate-800">
              <div className="w-16 h-3.5 bg-slate-900 rounded-full mx-auto mb-2"></div>
              <div className="bg-white rounded-2xl p-2.5 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-1">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-slate-900">Mobile Offline</div>
                <div className="text-[9px] text-slate-500">Download schematics & run simulations</div>
              </div>
            </div>

            {/* Tablet Certificate Mockup Overlay */}
            <div className="hidden md:block absolute -top-6 -right-4 w-52 bg-white rounded-2xl p-3 shadow-2xl border border-slate-100 text-center">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-1">
                <Award className="w-4 h-4" />
              </div>
              <div className="text-[11px] font-bold text-slate-900">Digital Credentials</div>
              <div className="text-[9px] text-slate-500">Verified QR ID on Blockchain</div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. FEATURED INTERNSHIPS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200/60">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              PRACTICAL INDUSTRIAL EXPOSURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Industry Internship Programs
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-xl">
              Build autonomous rovers, bare-metal firmware, and industrial IoT edge gateways under direct research mentorship.
            </p>
          </div>
          <Link
            to="/internships"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group shrink-0"
          >
            <span>Explore All Internships</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internshipsList.slice(0, 3).map((item, idx) => {
            const desc = item.projectTheme || item.desc || "Comprehensive project-driven industrial engineering internship.";
            const starts = item.startDate || item.deadline || "1st of Next Month";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg border border-indigo-100/60">
                        {item.category || 'Engineering'}
                      </span>
                      {item.seats && (
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          {item.seats} Seats
                        </span>
                      )}
                    </div>
                    {item.stipend && (
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full shrink-0">
                        {item.stipend}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1 mb-1">
                      <Sparkles className="w-3 h-3 text-indigo-600" />
                      <span>Capstone Theme</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium line-clamp-2">
                      {desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="truncate">{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span className="truncate">{item.mode}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                      <span>Cohort Starts: <strong className="text-slate-700">{starts}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Rolling Admissions</span>
                  <Link
                    to="/internships"
                    className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition flex items-center gap-1.5"
                  >
                    <span>View & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6B. UPCOMING WORKSHOPS SECTION */}
      <section className="py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
                HANDS-ON BOOTCAMPS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Upcoming Practical Workshops
              </h2>
              <p className="text-sm text-slate-500 mt-1 max-w-xl">
                1-to-2 day intensive technical masterclasses where you wire circuits, flash firmware, and build live prototypes.
              </p>
            </div>
            <Link
              to="/workshops"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group shrink-0"
            >
              <span>View All Workshops</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopsList.slice(0, 3).map((w, idx) => {
              const seatsPercent = Math.round((w.seatsRemaining / w.seatsTotal) * 100);
              return (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-[#FAFAFC] rounded-3xl p-6 border border-slate-200/70 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                        {w.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        {w.fee}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">{w.title}</h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{w.description || w.desc}</p>

                    <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{w.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{w.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{w.mode}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-indigo-600" />
                        <span>Instructor: {w.instructor}</span>
                      </div>
                    </div>

                    {/* Seat availability bar */}
                    <div className="mt-4 p-3 bg-white rounded-xl border border-slate-200/60">
                      <div className="flex items-center justify-between text-xs font-medium mb-1">
                        <span className="text-slate-600">Seat Availability:</span>
                        <span className="font-bold text-indigo-600">
                          {w.seatsRemaining} seats left
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full rounded-full"
                          style={{ width: `${seatsPercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/workshops"
                    className="w-full py-2.5 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Your Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE NRET - 6 Feature Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
            EXPERIENCE THE NRET DIFFERENCE
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Why Choose NRET?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Bridging technical academia and real-world engineering firms through immersive, hardware-first pedagogy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Industry-Oriented Learning</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Learn skills aligned with real-world industry requirements across automotive, IoT, and automated manufacturing.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Hands-On Projects</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Gain practical experience through project-based learning with physical microcontrollers, motor drivers, and sensors.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Expert Trainers</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Learn from experienced professionals and active hardware researchers with decades of combined engineering experience.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Internship Opportunities</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Get practical exposure through live project internships solving real-world client automation challenges.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Professional Certification</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Earn tamper-evident certificates with verifiable QR IDs after successfully completing exams and project evaluations.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.25 }}
            whileHover={{ y: -5 }}
            className="bg-white p-7 rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Career Support</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Develop technical portfolio repositories and interview-ready competence for core engineering placement growth.
            </p>
          </motion.div>

        </div>
      </section>

      {/* 8. FEATURED INSTRUCTORS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl my-8 border border-slate-100 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              LEARN FROM THE BEST
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Featured Instructors
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Industry leaders passionate about mentoring the next generation of engineers.
            </p>
          </div>
          <Link
            to="/instructors"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group shrink-0"
          >
            <span>Meet All Instructors</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructorsList.map((inst, idx) => (
            <motion.div
              key={inst.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <Link
                to={`/instructors/${inst.id}`}
                className="group bg-slate-50/70 rounded-2xl p-5 border border-slate-100 hover:bg-white hover:shadow-xl transition duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-slate-200">
                  <img
                    src={inst.avatar}
                    alt={inst.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 right-2 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>{inst.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {inst.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium line-clamp-1">
                  {inst.designation}
                </p>

                <div className="flex flex-wrap gap-1 mt-3">
                  {inst.expertise.slice(0, 2).map((exp, i) => (
                    <span key={i} className="text-[10px] bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded font-medium">
                      {exp}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>{inst.experience} Exp</span>
                  <span className="font-semibold text-indigo-600">{inst.coursesCount} Courses</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-10 sm:p-16 overflow-hidden shadow-2xl"
        >
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-200 text-xs font-semibold mb-4 border border-indigo-400/30">
              Start Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Start Your Technology Journey With NRET
            </h2>
            <p className="text-base text-indigo-100 mt-4 leading-relaxed font-normal">
              Learn practical skills, build real projects, and prepare yourself for the future of innovation in robotics and embedded engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/courses"
                  className="px-7 py-3.5 rounded-full bg-white text-indigo-900 hover:bg-indigo-50 font-bold text-sm shadow-lg transition inline-block"
                >
                  Explore Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/register"
                  className="px-7 py-3.5 rounded-full bg-indigo-600/80 hover:bg-indigo-600 border border-indigo-400/40 text-white font-semibold text-sm transition inline-block"
                >
                  Join NRET Community
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Modal Placeholder */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">How NRET Hands-On Learning Works</h3>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                &times;
              </button>
            </div>
            <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden mt-4 flex items-center justify-center text-white relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="NRET Platform Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              Experience the combination of recorded lecture modules, physical hardware kits, and live mentorship clinics.
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
