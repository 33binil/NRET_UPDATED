import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Mail, Lock, LogIn, ShieldAlert, ArrowRight, UserCheck } from 'lucide-react';

export default function Login() {
  const { login, addToast } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('student@nret-tech.org');
  const [password, setPassword] = useState('password123');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, 'student');
    navigate('/dashboard');
  };

  const handleQuickLogin = (role) => {
    if (role === 'admin') {
      login('admin@nret-tech.org', 'admin');
      navigate('/admin');
    } else {
      login('student@nret-tech.org', 'student');
      navigate('/dashboard');
    }
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
            Sign in to NRET LMS
          </h1>
          <p className="text-xs text-slate-500">
            Access your courses, lab projects, and credentials
          </p>
        </div>

        {/* Demo Fast Login Buttons */}
        <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/60 space-y-2">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block text-center">
            One-Click Demo Access
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickLogin('student')}
              className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200/60 flex items-center justify-center gap-1.5 transition"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Student Portal</span>
            </button>
            <button
              type="button"
              onClick={() => handleQuickLogin('admin')}
              className="px-3 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-bold rounded-xl border border-rose-200/60 flex items-center justify-center gap-1.5 transition"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="font-semibold text-slate-700">Password</label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); addToast('Password reset link dispatched.'); }} className="text-[11px] text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-indigo-500 font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-md shadow-indigo-200 transition flex items-center justify-center gap-2"
          >
            <span>Sign In to Learning Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500">
          Don't have an account yet?{' '}
          <Link to="/register" className="font-bold text-indigo-600 hover:underline">
            Register now
          </Link>
        </div>

      </div>
    </div>
  );
}
