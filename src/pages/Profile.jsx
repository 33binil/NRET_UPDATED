import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { User, Mail, Phone, MapPin, Award, CheckCircle2, Save, Shield } from 'lucide-react';

export default function Profile() {
  const { currentUser, addToast } = useApp();
  const [name, setName] = useState(currentUser?.name || 'Alex Johnson');
  const [email, setEmail] = useState(currentUser?.email || 'alex.johnson@example.com');
  const [phone, setPhone] = useState(currentUser?.phone || '+91 98765 43210');
  const [college, setCollege] = useState('National Institute of Technology');
  const [branch, setBranch] = useState('Electronics & Mechatronics');

  const handleSave = (e) => {
    e.preventDefault();
    addToast('Profile information successfully updated!');
  };

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Account Settings</h1>
          <p className="text-slate-500 text-sm mt-1">Manage your credentials, hardware shipping address, and academic profile.</p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs space-y-6">
          
          {/* Profile Picture Card */}
          <div className="flex items-center gap-5 pb-6 border-b border-slate-100">
            <img
              src={currentUser?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"}
              alt="Avatar"
              className="w-20 h-20 rounded-2xl object-cover ring-4 ring-indigo-50 border border-slate-200"
            />
            <div>
              <h2 className="text-lg font-bold text-slate-900">{name}</h2>
              <p className="text-xs text-indigo-600 font-semibold">{currentUser?.role === 'admin' ? 'Administrator' : 'Engineering Student'}</p>
              <button
                type="button"
                onClick={() => addToast('Simulated image upload completed.')}
                className="mt-2 text-xs font-semibold text-slate-600 hover:text-indigo-600 border border-slate-200 px-3 py-1 rounded-lg"
              >
                Change Avatar
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Degree & Major</label>
                <input
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">College or Organization</label>
              <input
                type="text"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="pt-3 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-md shadow-indigo-200 transition flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
}
