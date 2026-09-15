import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import RegisterWorkshopModal from '../components/RegisterWorkshopModal';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Workshops() {
  const { workshopsList } = useApp();
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegister = (workshop) => {
    setSelectedWorkshop(workshop);
    setModalOpen(true);
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold">
            <Calendar className="w-3.5 h-3.5" />
            <span>Interactive Weekend Bootcamps</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Upcoming Practical Workshops
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Intensive 1-to-2 day hands-on masterclasses where you wire circuits, flash firmware, and build working prototypes with real-time mentor feedback.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshopsList.map((w, idx) => {
            const seatsPercent = Math.round((w.seatsRemaining / w.seatsTotal) * 100);
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
                      {w.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-800">
                      {w.fee}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{w.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-2">{w.description || w.desc}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{w.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{w.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                      <span>{w.mode}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-indigo-600" />
                      <span>Instructor: {w.instructor}</span>
                    </div>
                  </div>

                  {/* Seat availability bar */}
                  <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="flex items-center justify-between text-xs font-medium mb-1">
                      <span className="text-slate-600">Seat Availability:</span>
                      <span className="font-bold text-indigo-600">
                        {w.seatsRemaining} seats left
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-indigo-600 h-full rounded-full"
                        style={{ width: `${seatsPercent}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleRegister(w)}
                  disabled={w.seatsRemaining <= 0}
                  className="w-full py-2.5 rounded-full text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white shadow-xs transition flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>{w.seatsRemaining > 0 ? 'Reserve Your Seat' : 'Sold Out'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

      </div>

      <RegisterWorkshopModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        workshop={selectedWorkshop}
      />
    </div>
  );
}
