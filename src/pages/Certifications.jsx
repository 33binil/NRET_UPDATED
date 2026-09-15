import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import CertificateModal from '../components/CertificateModal';
import {
  ShieldCheck,
  Search,
  Award,
  CheckCircle2,
  ExternalLink,
  Download,
  AlertCircle,
  FileCheck
} from 'lucide-react';

export default function Certifications() {
  const { sampleCertificates, certificates } = useApp();
  const [certIdInput, setCertIdInput] = useState('NRET-ROB-2026-8941');
  const [verifiedResult, setVerifiedResult] = useState(null);
  const [searched, setSearched] = useState(false);
  const [modalCert, setModalCert] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setSearched(true);
    const idToSearch = certIdInput.trim().toUpperCase();
    const allCerts = [...(sampleCertificates || []), ...(certificates || [])];
    const match = allCerts.find((c) => c.id && c.id.toUpperCase() === idToSearch);
    setVerifiedResult(match || null);
  };

  const handlePreview = (cert) => {
    setModalCert(cert);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cryptographically Verifiable Registry</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            NRET Certification Verification
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Employers, university councils, and clients can authenticate certificates issued by Nano Robotics & Embedded Technologies.
          </p>
        </motion.div>

        {/* Verification Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg"
        >
          <h2 className="text-base font-bold text-slate-900 mb-2">
            Verify Certificate Authenticity
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            Enter the unique Serial Number printed on the bottom corner of the certificate or scanned from the QR code.
          </p>

          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={certIdInput}
                onChange={(e) => setCertIdInput(e.target.value)}
                placeholder="e.g. NRET-ROB-2026-8941"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl text-sm font-mono border border-slate-200 focus:outline-none focus:border-indigo-500 focus:bg-white transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition shadow-xs cursor-pointer"
            >
              Verify Credential
            </motion.button>
          </form>

          {/* Verification Result Display */}
          {searched && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 pt-6 border-t border-slate-100"
            >
              {verifiedResult ? (
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Verified Authentic Credential</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Recipient:</span>
                      <span className="font-bold text-slate-900">{verifiedResult.studentName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Course Completed:</span>
                      <span className="font-bold text-slate-900">{verifiedResult.courseName}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Date of Issue:</span>
                      <span className="font-bold text-slate-900">{verifiedResult.completionDate}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Evaluation Grade:</span>
                      <span className="font-bold text-emerald-700">{verifiedResult.grade || 'Passed with Distinction'}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handlePreview(verifiedResult)}
                      className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Official Certificate</span>
                    </motion.button>
                  </div>
                </div>
              ) : (
                <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-rose-800 text-xs flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <span className="font-bold">Record Not Found</span>
                    <p className="text-rose-700 mt-0.5">
                      No certificate found matching ID "{certIdInput}". Please double check the serial digits or contact certificates@nret-tech.org.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Certificate Standards & Quality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs transition"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <FileCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Project-Based Validation</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Certificates require 100% course module completion and submission of working firmware and circuit videos reviewed by evaluators.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs transition"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Cryptographic QR Verification</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Each document features a persistent tamper-evident URL and QR code that recruiters can inspect directly from resume links.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-2xl border border-slate-100 shadow-2xs transition"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-sm text-slate-900">Industry Recognition</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              NRET credentials are accepted by automotive tier-1 suppliers, IoT startups, and smart manufacturing enterprises.
            </p>
          </motion.div>
        </div>

      </div>

      <CertificateModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        certificate={modalCert}
      />
    </div>
  );
}
