import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { BookOpen, Play, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';
import CertificateModal from '../components/CertificateModal';

export default function MyCourses() {
  const { enrolledCourses, courses, sampleCertificates } = useApp();
  const [filter, setFilter] = useState('all'); // 'all', 'in-progress', 'completed'
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const enrichedCourses = enrolledCourses.map((e) => {
    const course = courses.find((c) => c.id === e.courseId) || courses[0];
    return {
      ...e,
      course
    };
  });

  const filteredCourses = enrichedCourses.filter((item) => {
    if (filter === 'completed') return item.progress === 100;
    if (filter === 'in-progress') return item.progress < 100;
    return true;
  });

  const handleOpenCertificate = (course) => {
    const certs = sampleCertificates || [];
    const cert = certs.find((c) => c.courseId === course.id) || certs[0] || null;
    setSelectedCert(cert);
    setCertModalOpen(true);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Courses</h1>
            <p className="text-slate-500 text-sm mt-1">
              Track your enrolled hardware and robotics modules and download earned credentials.
            </p>
          </div>

          <Link
            to="/courses"
            className="px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>Explore More Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-200 pb-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Courses ({enrichedCourses.length})
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              filter === 'in-progress'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            In Progress ({enrichedCourses.filter((c) => c.progress < 100).length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition ${
              filter === 'completed'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Completed ({enrichedCourses.filter((c) => c.progress === 100).length})
          </button>
        </div>

        {/* Courses List Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No courses in this tab</h3>
            <p className="text-sm text-slate-500 mt-1">Enroll in a new course to advance your engineering career.</p>
            <Link
              to="/courses"
              className="mt-4 inline-block px-5 py-2.5 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((item) => (
              <div
                key={item.courseId}
                className="bg-white rounded-2xl border border-slate-100 shadow-2xs hover:shadow-lg transition overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] bg-slate-100">
                    <img
                      src={item.course.thumbnail}
                      alt={item.course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.course.category}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-slate-900 line-clamp-2">
                      {item.course.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Instructor: {item.course.instructor}
                    </p>

                    {/* Progress */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                        <span className="text-slate-600">Progress</span>
                        <span className={item.progress === 100 ? 'text-emerald-600' : 'text-indigo-600'}>
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.progress === 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card footer actions */}
                <div className="p-5 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-2">
                  {item.progress === 100 ? (
                    <button
                      onClick={() => handleOpenCertificate(item.course)}
                      className="text-xs font-semibold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-full flex items-center gap-1.5 transition"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Certificate</span>
                    </button>
                  ) : (
                    <span className="text-xs text-slate-400">
                      Last: {item.lastAccessed}
                    </span>
                  )}

                  <Link
                    to={`/learn/${item.course.id}`}
                    className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 transition"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>{item.progress === 100 ? 'Replay' : 'Continue'}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        certificate={selectedCert}
      />
    </div>
  );
}
