import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import CourseCard from '../components/CourseCard';
import { Star, Users, Award, BookOpen, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function InstructorDetails() {
  const { id } = useParams();
  const { instructorsList, courses } = useApp();

  const instructor = instructorsList.find((i) => i.id === id) || instructorsList[0];
  const instructorCourses = courses.filter((c) => c.instructorId === instructor.id);

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <Link
          to="/instructors"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Instructors</span>
        </Link>

        {/* Instructor Profile Header Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={instructor.avatar}
              alt={instructor.name}
              className="w-36 h-36 rounded-3xl object-cover ring-4 ring-indigo-50 border border-slate-200 shrink-0"
            />

            <div className="flex-1 text-center md:text-left space-y-3">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold">
                  Lead Instructor
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {instructor.experience} of Research & Teaching
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {instructor.name}
              </h1>
              <p className="text-sm font-semibold text-indigo-600">{instructor.designation}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                {instructor.bio}
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-3 text-xs">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-900">{instructor.rating} Rating</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span className="font-bold text-slate-900">{instructor.studentsCount?.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-slate-900">{instructorCourses.length} Courses</span>
                </div>
              </div>

              {/* Expertise Badges */}
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                {instructor.expertise.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Taught by this instructor */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Courses by {instructor.name} ({instructorCourses.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {instructorCourses.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
