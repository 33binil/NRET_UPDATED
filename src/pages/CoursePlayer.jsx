import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  Play,
  CheckCircle2,
  Circle,
  ChevronLeft,
  ChevronRight,
  Download,
  MessageSquare,
  HelpCircle,
  FileCode,
  Layers,
  ArrowLeft,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { courses, enrolledCourses, markLessonComplete, addToast } = useApp();

  const course = courses.find((c) => c.id === courseId) || courses[0];
  const enrollment = enrolledCourses.find((e) => e.courseId === course.id) || {
    progress: 40,
    completedLessonIds: ['les-1', 'les-2'],
    currentLessonId: 'les-1'
  };

  // Flatten all lessons across modules
  const allLessons = (course.modules || []).flatMap((m) => m.lessons || []);
  const [activeLessonId, setActiveLessonId] = useState(
    allLessons[0]?.id || 'les-1'
  );

  const activeLesson = allLessons.find((l) => l.id === activeLessonId) || allLessons[0] || {
    id: 'les-1',
    title: 'Introduction to Robotics & Hardware Setup',
    duration: '14:20'
  };

  const currentIndex = allLessons.findIndex((l) => l.id === activeLessonId);
  const isLessonCompleted = enrollment.completedLessonIds.includes(activeLessonId);

  // Q&A state
  const [questionText, setQuestionText] = useState('');
  const [questionsList, setQuestionsList] = useState([
    {
      author: 'Alex Johnson',
      time: '2 hours ago',
      text: 'Should the motor driver enable pin jumper be left on if using software PWM from pin 9?',
      reply: 'Dr. Arun Kumar: Remove the physical jumper cap and connect the ENA pin directly to digital pin 9 (PWM) of your Arduino/STM32.'
    }
  ]);

  const handleNextLesson = () => {
    if (currentIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[currentIndex + 1].id);
    }
  };

  const handlePrevLesson = () => {
    if (currentIndex > 0) {
      setActiveLessonId(allLessons[currentIndex - 1].id);
    }
  };

  const handleToggleComplete = () => {
    markLessonComplete(course.id, activeLessonId);
    if (!isLessonCompleted) {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.7 }
      });
    }
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    setQuestionsList([
      {
        author: 'Alex Johnson',
        time: 'Just now',
        text: questionText,
        reply: 'Trainer will answer shortly within 12 hours.'
      },
      ...questionsList
    ]);
    setQuestionText('');
    addToast('Question posted to instructor discussion board!');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      
      {/* Top Learning Bar */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1 text-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Dashboard</span>
          </Link>
          <div className="h-4 w-px bg-slate-800"></div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {course.title}
            </h1>
            <div className="text-[11px] text-slate-400">
              Lesson {currentIndex + 1} of {allLessons.length}: {activeLesson.title}
            </div>
          </div>
        </div>

        {/* Course Progress Indicator */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">Your Progress:</span>
            <div className="w-28 bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${enrollment.progress}%` }}
              ></div>
            </div>
            <span className="text-xs font-bold text-indigo-400">{enrollment.progress}%</span>
          </div>

          <Link
            to="/quizzes"
            className="px-3 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Course Quiz</span>
          </Link>
        </div>
      </div>

      {/* Main LMS Layout: Left/Right Columns */}
      <div className="flex-1 flex flex-col lg:flex-row">
        
        {/* Left Column: Interactive Video Player & Lesson Details */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          
          {/* Simulated HD Video Player */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between group">
            
            {/* Embedded video or interactive preview */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-slate-950 via-slate-900 to-slate-950">
              <div className="text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-xl hover:scale-110 cursor-pointer transition">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="text-sm font-semibold text-white">
                  Lecture: {activeLesson.title}
                </div>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Click play to stream 1080p recorded lab video with Dr. Arun Kumar's hardware demo.
                </p>
              </div>
            </div>

            {/* Bottom video controls simulation bar */}
            <div className="relative z-10 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3 text-xs text-white">
                <button className="p-1 rounded hover:text-indigo-400">
                  <Play className="w-4 h-4 fill-current" />
                </button>
                <span className="text-[11px] font-mono text-slate-300">04:15 / {activeLesson.duration || '22:00'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">1080p HD</span>
                <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px] font-mono">1.0x</span>
              </div>
            </div>

          </div>

          {/* Navigation & Mark Complete Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-800">
            <button
              onClick={handlePrevLesson}
              disabled={currentIndex === 0}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 flex items-center gap-1.5 transition"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </button>

            <button
              onClick={handleToggleComplete}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-2 ${
                isLessonCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isLessonCompleted ? 'Completed ✓' : 'Mark as Complete'}</span>
            </button>

            <button
              onClick={handleNextLesson}
              disabled={currentIndex === allLessons.length - 1}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 flex items-center gap-1.5 transition"
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lesson Notes & Download Materials */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white">Lesson Summary & Technical Objectives</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              In this module, we calibrate hardware timers for precision duty cycles. Notice that hardware timer registers (`TCCR1A`, `TCCR1B`, `OCR1A`) offer millisecond precision without blocking CPU execution, unlike synchronous delay functions.
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Downloadable Lab Files
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2.5">
                    <FileCode className="w-4 h-4 text-indigo-400" />
                    <div>
                      <div className="font-semibold text-white">pwm_motor_control.ino</div>
                      <div className="text-[10px] text-slate-400">Arduino C++ Source (14 KB)</div>
                    </div>
                  </div>
                  <button
                    onClick={() => addToast('Downloaded pwm_motor_control.ino')}
                    className="p-1.5 text-slate-400 hover:text-white"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs">
                  <div className="flex items-center gap-2.5">
                    <FileCode className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">H_Bridge_Wiring_Diagram.pdf</div>
                      <div className="text-[10px] text-slate-400">Schematic & Pinout (2.4 MB)</div>
                    </div>
                  </div>
                  <button
                    onClick={() => addToast('Downloaded H_Bridge_Wiring_Diagram.pdf')}
                    className="p-1.5 text-slate-400 hover:text-white"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Student Q&A Forum */}
          <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-indigo-400" />
                <span>Instructor Discussion & Q&A</span>
              </h3>
              <span className="text-xs text-slate-400">{questionsList.length} questions</span>
            </div>

            <form onSubmit={handleAskQuestion} className="space-y-2">
              <textarea
                rows={2}
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="Ask Dr. Arun or peer engineers a question about this lesson's wiring or code..."
                className="w-full px-3 py-2 text-xs bg-slate-900 rounded-xl border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              ></textarea>
              <button
                type="submit"
                className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-full transition"
              >
                Post Question
              </button>
            </form>

            <div className="space-y-3 pt-2">
              {questionsList.map((q, idx) => (
                <div key={idx} className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-bold text-white">{q.author}</span>
                    <span>{q.time}</span>
                  </div>
                  <p className="text-slate-200">{q.text}</p>
                  {q.reply && (
                    <div className="mt-2 p-2.5 bg-indigo-950/40 border-l-2 border-indigo-500 rounded text-[11px] text-indigo-200">
                      {q.reply}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Course Curriculum Modules & Lessons Checklist */}
        <div className="w-full lg:w-96 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 p-4 space-y-4 overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Course Content</span>
            </h3>
            <span className="text-xs text-slate-400">{allLessons.length} Lessons</span>
          </div>

          <div className="space-y-3">
            {(course.modules || []).map((mod, mIdx) => (
              <div key={mod.id || mIdx} className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">
                <div className="px-3 py-2.5 bg-slate-800/80 text-xs font-bold text-slate-200">
                  {mod.title}
                </div>
                <div className="divide-y divide-slate-800/60">
                  {(mod.lessons || []).map((les, lIdx) => {
                    const isActive = les.id === activeLessonId;
                    const isDone = enrollment.completedLessonIds.includes(les.id);
                    return (
                      <button
                        key={les.id || lIdx}
                        onClick={() => setActiveLessonId(les.id)}
                        className={`w-full p-2.5 flex items-center justify-between text-left transition ${
                          isActive
                            ? 'bg-indigo-950/60 border-l-4 border-indigo-500 text-white'
                            : 'hover:bg-slate-800/50 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-600 shrink-0" />
                          )}
                          <span className={`text-xs truncate ${isActive ? 'font-bold text-white' : ''}`}>
                            {les.title}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 ml-2 shrink-0">
                          {les.duration || '15:00'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
