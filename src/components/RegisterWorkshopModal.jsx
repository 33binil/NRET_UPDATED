import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function RegisterWorkshopModal({ workshop, isOpen, onClose }) {
  const { registerWorkshop, currentUser } = useApp();
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen || !workshop) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    registerWorkshop(workshop.id);
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="font-bold text-slate-800 text-sm">Reserve Workshop Seat</span>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 text-slate-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Seat Reserved!</h3>
            <p className="text-xs text-slate-600">
              Your pass for <span className="font-semibold">{workshop.title}</span> has been issued. Workshop calendar invite sent to {email}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="p-6 space-y-4">
            <div>
              <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                {workshop.tag}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">{workshop.title}</h3>
              <div className="text-xs text-slate-500 mt-1 flex flex-col gap-1">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {workshop.date} ({workshop.duration})</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {workshop.mode}</span>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600">
              <div className="flex justify-between font-medium">
                <span>Seats remaining:</span>
                <span className="font-bold text-indigo-600">{workshop.seatsRemaining} of {workshop.seatsTotal}</span>
              </div>
              <div className="flex justify-between font-medium mt-1">
                <span>Fee:</span>
                <span className="font-bold text-emerald-600">{workshop.fee}</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-full"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={workshop.seatsRemaining <= 0}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 rounded-full shadow-md shadow-indigo-200 transition"
              >
                {workshop.seatsRemaining > 0 ? 'Confirm Reservation' : 'Waitlist Only'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
