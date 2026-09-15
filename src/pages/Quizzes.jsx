import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  HelpCircle,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Quizzes() {
  const { sampleQuiz, addToast } = useApp();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [isStarted, setIsStarted] = useState(false);

  // Timer countdown when started
  useEffect(() => {
    if (!isStarted || quizSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isStarted, quizSubmitted]);

  const questions = sampleQuiz.questions;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (index) => {
    if (quizSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: index
    });
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    let correctCount = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    if (scorePercentage >= 75) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      addToast(`Congratulations! You passed with ${scorePercentage}%!`);
    } else {
      addToast(`Quiz submitted: Score ${scorePercentage}%. Review answers below.`);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
    setCurrentQuestionIndex(0);
    setTimeLeft(300);
    setIsStarted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correct += 1;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const score = quizSubmitted ? calculateScore() : null;

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Knowledge Assessment
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {sampleQuiz.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {sampleQuiz.courseTitle} • Passing Score: {sampleQuiz.passingScore}%
          </p>
        </div>

        {!isStarted && !quizSubmitted ? (
          /* Start Screen */
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
              <HelpCircle className="w-8 h-8" />
            </div>
            <div className="max-w-md mx-auto space-y-2">
              <h2 className="text-xl font-bold text-slate-900">Assessment Instructions</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will have 5 minutes to answer {questions.length} questions on robotics locomotion, motor control registers, and sensor interfacing.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-900 block">{questions.length}</span> Questions
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-900 block">5 Mins</span> Time Limit
              </div>
              <div className="p-3 bg-slate-50 rounded-xl">
                <span className="font-bold text-slate-900 block">{sampleQuiz.passingScore}%</span> Pass Mark
              </div>
            </div>

            <button
              onClick={() => setIsStarted(true)}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-indigo-200 transition"
            >
              Start Assessment Now
            </button>
          </div>
        ) : (
          /* Active or Completed Quiz Screen */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6">
            
            {/* Top status bar: Question count & Timer */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-600">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>

              {!quizSubmitted && (
                <div className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 rounded-full font-mono text-xs font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{formatTime(timeLeft)}</span>
                </div>
              )}

              {quizSubmitted && (
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    score.percentage >= sampleQuiz.passingScore ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                  }`}>
                    Score: {score.percentage}% ({score.percentage >= sampleQuiz.passingScore ? 'Passed' : 'Needs Review'})
                  </span>
                </div>
              )}
            </div>

            {/* Current Question Body */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mt-6">
                {currentQ.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === idx;
                  const isCorrect = idx === currentQ.correctAnswer;
                  
                  let optionClass = "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";
                  if (isSelected && !quizSubmitted) {
                    optionClass = "bg-indigo-50 border-indigo-500 text-indigo-900 font-semibold";
                  }
                  if (quizSubmitted) {
                    if (isCorrect) {
                      optionClass = "bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold";
                    } else if (isSelected && !isCorrect) {
                      optionClass = "bg-rose-50 border-rose-500 text-rose-900 font-semibold";
                    }
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className={`p-4 rounded-2xl border text-xs sm:text-sm cursor-pointer transition flex items-center justify-between ${optionClass}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {quizSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {quizSubmitted && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation in review mode */}
              {quizSubmitted && (
                <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-bold text-indigo-600 block">Instructor Explanation:</span>
                  <p>{currentQ.explanation}</p>
                </div>
              )}
            </div>

            {/* Pagination & Next/Prev Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-40 transition"
              >
                Previous
              </button>

              <div className="flex gap-1.5">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                      i === currentQuestionIndex
                        ? 'bg-indigo-600 text-white'
                        : selectedAnswers[i] !== undefined
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {currentQuestionIndex < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Next
                </button>
              ) : !quizSubmitted ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-2 text-xs font-bold rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
                >
                  Finish & Submit
                </button>
              ) : (
                <button
                  onClick={resetQuiz}
                  className="px-5 py-2 text-xs font-bold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
