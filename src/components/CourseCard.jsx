import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Clock, Users, BookOpen, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CourseCard({ course }) {
  const { enrolledCourses, enrollCourse } = useApp();
  const navigate = useNavigate();

  const isEnrolled = enrolledCourses.some(e => e.courseId === course.id);

  const handleEnrollClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isEnrolled) {
      navigate(`/learn/${course.id}`);
    } else {
      enrollCourse(course.id);
      navigate(`/courses/${course.id}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
    >
      {/* Course Thumbnail */}
      <Link to={`/courses/${course.id}`} className="relative block aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badge / Category Pill */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm">
          <span>{course.category}</span>
        </div>

        {course.badge && (
          <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            {course.badge}
          </div>
        )}
      </Link>

      {/* Course Details Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <Link
            to={`/courses/${course.id}`}
            className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 leading-snug"
          >
            {course.title}
          </Link>

          {/* Instructor Row matching reference */}
          <div className="flex items-center gap-2 mt-3">
            <img
              src={course.instructorAvatar}
              alt={course.instructor}
              className="w-6 h-6 rounded-full object-cover border border-slate-200"
            />
            <span className="text-xs text-slate-600 font-medium truncate">{course.instructor}</span>
          </div>

          {/* Rating Row with Stars */}
          <div className="flex items-center gap-1.5 mt-2.5">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(course.rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-200 fill-slate-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-slate-800">{course.rating}</span>
            <span className="text-xs text-slate-400">({course.ratingCount?.toLocaleString()})</span>
          </div>
        </div>

        {/* Price & Action Row matching reference */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-extrabold text-slate-900">${course.price}</span>
            {course.originalPrice && (
              <span className="text-xs text-slate-400 line-through">${course.originalPrice}</span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.94 }}
            onClick={handleEnrollClick}
            className={`text-xs font-semibold px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
              isEnrolled
                ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white'
            }`}
          >
            {isEnrolled ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Enrolled</span>
              </>
            ) : (
              <>
                <span>Enroll</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
