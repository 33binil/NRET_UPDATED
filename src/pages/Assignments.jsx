import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  ExternalLink,
  Code,
  FolderArchive,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function Assignments() {
  const { assignments, submitAssignment, addToast } = useApp();
  const [selectedTask, setSelectedTask] = useState(assignments[0]);
  const [githubUrl, setGithubUrl] = useState('');
  const [comments, setComments] = useState('');
  const [simulatedFile, setSimulatedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!githubUrl.trim() && !simulatedFile) {
      addToast('Please provide a GitHub repo link or circuit diagram file.');
      return;
    }
    submitAssignment(selectedTask.id, {
      githubUrl,
      comments,
      fileName: simulatedFile?.name || 'robotics_project_code.ino'
    });
    setGithubUrl('');
    setComments('');
    setSimulatedFile(null);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Laboratory Submissions
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
            Practical Project Assignments
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Submit your hardware schematics, firmware code, and rover testing links for evaluator grading.
          </p>
        </div>

        {/* Two column layout: List & Submission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Assignments List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Assignments ({assignments.length})
            </h2>

            {assignments.map((item) => {
              const isSelected = selectedTask.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedTask(item)}
                  className={`p-5 rounded-2xl border cursor-pointer transition ${
                    isSelected
                      ? 'bg-white border-indigo-500 shadow-md ring-2 ring-indigo-50'
                      : 'bg-white border-slate-200/70 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                      {item.courseTitle}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.status === 'Graded'
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.status === 'Submitted'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
                  <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Due: {item.deadline}
                    </span>
                    {item.grade && (
                      <span className="font-bold text-emerald-600">
                        Score: {item.grade}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submission Details & Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">
                    Due Date: {selectedTask.deadline}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    selectedTask.status === 'Graded'
                      ? 'bg-emerald-100 text-emerald-800'
                      : selectedTask.status === 'Submitted'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {selectedTask.status}
                  </span>
                </div>

                <h2 className="text-2xl font-extrabold text-slate-900 mt-2">
                  {selectedTask.title}
                </h2>
                <p className="text-xs text-indigo-600 font-semibold mt-0.5">
                  Course: {selectedTask.courseTitle}
                </p>

                <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-2">
                  <span className="font-bold text-slate-800 block">Brief & Requirements:</span>
                  <p>
                    Implement a state machine in C++ for the two ultrasonic sensors and differential DC motors. The platform must slow down when approaching obstacles closer than 20cm, execute a 90-degree turn, and resume cruising velocity.
                  </p>
                </div>
              </div>

              {/* Feedback if Graded */}
              {selectedTask.status === 'Graded' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-emerald-900 font-bold">
                    <span>Instructor Grade: {selectedTask.grade}</span>
                    <span>Reviewed by: Dr. Arun Kumar</span>
                  </div>
                  <p className="text-emerald-800">
                    "Excellent debounce handling in your ISR and great separation of the motor driver timer logic. Approved for final certificate clearance."
                  </p>
                </div>
              )}

              {/* Submission Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">
                  {selectedTask.status === 'Pending' ? 'Submit Your Solution' : 'Resubmit Project Update'}
                </h3>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    GitHub / GitLab Repository URL
                  </label>
                  <div className="relative">
                    <Code className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      placeholder="https://github.com/username/robotics-obstacle-rover"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-mono"
                    />
                  </div>
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Upload Firmware / Circuit Diagram (.ino, .cpp, .zip, .pdf)
                  </label>
                  <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center hover:bg-slate-50 transition cursor-pointer relative">
                    <input
                      type="file"
                      onChange={(e) => setSimulatedFile(e.target.files[0])}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                    {simulatedFile ? (
                      <div className="text-xs font-bold text-indigo-600">
                        Selected: {simulatedFile.name} ({(simulatedFile.size / 1024).toFixed(1)} KB)
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500">
                        Drag and drop file here, or <span className="text-indigo-600 font-semibold">browse files</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Notes for Instructor
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your testing setup, pinout connections, or challenges encountered..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full p-3 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                  ></textarea>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-full shadow-md shadow-indigo-200 transition"
                  >
                    Submit Assignment
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
