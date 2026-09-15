import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { User, Mail, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Register() {
  const { registerUser } = useApp();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [interest, setInterest] = useState('Robotics & Automation');

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(name, email, password);
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#FAFAFC] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xl space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto font-extrabold text-xl shadow-md shadow-indigo-200">
            N
          </div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-3">
            Join NRET Academy
          </h1>
          <p className="text-xs text-slate-500">
            Create an engineering profile to enroll in labs & projects
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Alex Johnson"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="alex@college.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Primary Area of Interest</label>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option>Robotics & Automation</option>
              <option>Embedded Systems & Microcontrollers</option>
              <option>IoT & Smart Technologies</option>
              <option>Electronics & Circuit Fabrication</option>
              <option>Programming & ROS 2</option>
              <option>Industrial Automation & SCADA</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Create Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-md shadow-indigo-200 transition flex items-center justify-center gap-2"
            >
              <span>Create Free Student Account</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

        <div className="text-center text-xs text-slate-500">
          Already registered?{' '}
          <Link to="/login" className="font-bold text-indigo-600 hover:underline">
            Log in here
          </Link>
        </div>

      </div>
    </div>
  );
}
