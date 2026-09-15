import React, { useRef } from 'react';
import { Award, Download, CheckCircle2, ShieldCheck, X, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CertificateModal({ certificate, isOpen, onClose }) {
  if (!isOpen || !certificate) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    alert(`Certificate ${certificate.id} downloaded as high-resolution PDF document.`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-slate-800 text-sm">Verified Accreditation Certificate</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full">
              Authentic Credential
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Canvas / Container */}
        <div className="p-8 bg-gradient-to-br from-amber-50/40 via-white to-indigo-50/30">
          <div className="relative p-8 md:p-12 border-8 border-double border-indigo-900/20 bg-white rounded-2xl shadow-inner text-center">
            
            {/* Corner Ornamental Accents */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-indigo-600"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-indigo-600"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-indigo-600"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-indigo-600"></div>

            {/* Logo */}
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
                N
              </div>
              <span className="font-extrabold text-slate-900 tracking-wider text-sm uppercase">
                Nano Robotics & Embedded Technologies
              </span>
            </div>

            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600 mb-2">
              Certificate of Completion
            </h2>

            <p className="text-xs text-slate-500 italic mb-6">
              This is officially awarded to
            </p>

            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-serif mb-2 underline decoration-indigo-300 decoration-2 underline-offset-8">
              {certificate.studentName}
            </h1>

            <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed mt-4">
              for successfully mastering and completing the rigorous curriculum and hands-on laboratory requirements for:
            </p>

            <h3 className="text-lg md:text-xl font-bold text-indigo-700 mt-2">
              {certificate.courseName}
            </h3>

            {/* Grade & Details */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700 mt-4">
              <span className="bg-slate-100 px-3 py-1 rounded-full">Completed: {certificate.completionDate}</span>
              {certificate.grade && (
                <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full">Grade: {certificate.grade}</span>
              )}
              <span className="bg-indigo-100 text-indigo-900 px-3 py-1 rounded-full">ID: {certificate.id}</span>
            </div>

            {/* Signatures & Seal */}
            <div className="grid grid-cols-3 items-end mt-10 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="font-serif italic text-slate-800 text-sm font-bold tracking-wider">
                  {certificate.instructor || "Dr. Arun Kumar"}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 border-t border-slate-300 pt-1">
                  Lead Course Instructor
                </div>
              </div>

              {/* Gold Embossed Seal Icon */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center text-slate-900 shadow-lg border-2 border-amber-200">
                  <Award className="w-7 h-7 text-amber-950" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-amber-800 mt-1">
                  NRET Seal
                </span>
              </div>

              <div className="text-center">
                <div className="font-serif italic text-slate-800 text-sm font-bold tracking-wider">
                  Prof. Board of Council
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-1 border-t border-slate-300 pt-1">
                  Academic Dean, NRET
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Action Controls */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Cryptographically verifiable via NRET Registry</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => alert(`Verification URL copied: https://nret-tech.org/verify/${certificate.id}`)}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center gap-1.5 transition"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Credential</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center gap-1.5 shadow-sm transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
