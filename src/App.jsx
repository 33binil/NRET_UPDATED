import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import GlobalSearchModal from './components/GlobalSearchModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CoursePlayer from './pages/CoursePlayer';
import Instructors from './pages/Instructors';
import InstructorDetails from './pages/InstructorDetails';
import Internships from './pages/Internships';
import Workshops from './pages/Workshops';
import Certifications from './pages/Certifications';
import StudentDashboard from './pages/StudentDashboard';
import MyCourses from './pages/MyCourses';
import Quizzes from './pages/Quizzes';
import Assignments from './pages/Assignments';
import AdminDashboard from './pages/AdminDashboard';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function AppLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { toasts } = useApp();
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
      <ScrollToTop />
      
      {/* Top Navigation */}
      <Navbar />

      {/* Global Search Dialog */}
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Main Page Routing with Motion Animated Transitions */}
      <main className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex flex-col"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home onOpenSearch={() => setSearchOpen(true)} />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/:id" element={<CourseDetails />} />
              <Route path="/learn/:courseId" element={<CoursePlayer />} />
              
              <Route path="/instructors" element={<Instructors />} />
              <Route path="/instructors/:id" element={<InstructorDetails />} />
              
              <Route path="/internships" element={<Internships />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/certificates" element={<Navigate to="/certifications" replace />} />
              
              {/* Student & Learning Routes */}
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/profile" element={<Profile />} />

              {/* Admin Route */}
              <Route path="/admin" element={<AdminDashboard />} />

              {/* Contact & Auth */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto bg-slate-900/95 text-white px-4 py-3 rounded-2xl shadow-xl border border-slate-700 text-xs font-semibold flex items-center gap-2.5 animate-in slide-in-from-bottom-5 duration-200"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </AppProvider>
  );
}
