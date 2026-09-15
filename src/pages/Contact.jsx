import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Contact() {
  const { addToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Course & Hardware Kit Inquiries',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Message received! Our academic advisor will respond within 24 hours.');
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact NRET Advisory
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Have questions about laboratory hardware kits, college batch enrollments, or our industrial internship programs? We are here to help.
          </p>
        </motion.div>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (5 cols): Office information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-2xs space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Headquarters & Laboratory</h2>
              
              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">NRET Technology Park</span>
                    <span>Building 4B, Innovation Highway, Electronic City, Bengaluru, KA 560100</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">Direct Phone & WhatsApp</span>
                    <span>+91 98765 43210 / +1 (800) 555-NRET</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">Email Inquiries</span>
                    <span>support@nret-tech.org • admissions@nret-tech.org</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">Operating Hours</span>
                    <span>Monday – Saturday: 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick response banner */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-6 text-xs text-indigo-900 space-y-2">
              <span className="font-bold flex items-center gap-1.5 text-indigo-700">
                <MessageSquare className="w-4 h-4" /> Dedicated Academic Counseling
              </span>
              <p className="text-indigo-800 leading-relaxed">
                Need a syllabus breakdown for university credit transfer or corporate team batch training? Mention it in your message and our faculty director will schedule a 1-on-1 consultation.
              </p>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-2xs">
              {submitted ? (
                <div className="text-center py-12 space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you, {formData.name}. Our academic counselor will review your request and contact you at {formData.email}.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 cursor-pointer"
                  >
                    Send Another Message
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                  <p className="text-xs text-slate-500 mb-4">
                    Fill out the form below and an NRET representative will follow up immediately.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                      >
                        <option>Course & Hardware Kit Inquiries</option>
                        <option>Internship Application Inquiry</option>
                        <option>Weekend Workshop Registration</option>
                        <option>Institutional Partnership / MOU</option>
                        <option>Certificate Verification Support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your questions regarding the robotics courses, prerequisite knowledge, or kits..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-full shadow-md shadow-indigo-200 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
