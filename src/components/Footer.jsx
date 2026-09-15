import React from 'react';
import { Link } from 'react-router-dom';
import { organizationInfo } from '../data/mockData';
import {
  Bot,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter / Quick Bar */}
        <div className="pb-12 mb-12 border-b border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">Join 10,000+ Innovators</span>
            <h3 className="text-2xl font-bold text-white mt-1">Get Hardware Guides & Course Updates</h3>
            <p className="text-sm text-slate-400 mt-1">Directly to your inbox. No spam, strictly technical insights & discount drops.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              placeholder="Enter your university/work email"
              className="px-4 py-3 rounded-full bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 w-full sm:w-72"
            />
            <button
              onClick={() => alert("Thank you for subscribing to NRET updates!")}
              className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shrink-0 flex items-center gap-1.5"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Organization Branding & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-900/50">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M7 4.5v15a1 1 0 001.52.85l12-7.5a1 1 0 000-1.7l-12-7.5A1 1 0 007 4.5z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white">NRET</span>
                <p className="text-xs text-slate-400 font-medium -mt-0.5">Nano Robotics & Embedded Technologies</p>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              Nano Robotics & Embedded Technologies (NRET) is dedicated to providing industry-oriented training and hands-on learning opportunities in robotics, embedded firmware, IoT, and industrial automation.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-rose-600 hover:border-rose-600 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">About NRET</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition">Explore Courses</Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-white transition">Industrial Internships</Link>
              </li>
              <li>
                <Link to="/workshops" className="hover:text-white transition">Workshops & Labs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Portal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Student Hub</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/login" className="hover:text-white transition">Login to Portal</Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white transition">Create Account</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition">Student Dashboard</Link>
              </li>
              <li>
                <Link to="/my-courses" className="hover:text-white transition">My Enrolled Courses</Link>
              </li>
              <li>
                <Link to="/certificates" className="hover:text-white transition">Verify Certificates</Link>
              </li>
              <li>
                <Link to="/quizzes" className="hover:text-white transition">Practice Quizzes</Link>
              </li>
              <li>
                <Link to="/admin" className="text-purple-300 hover:text-white transition font-medium">Academic Admin Panel</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{organizationInfo.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${organizationInfo.contact.email}`} className="hover:text-white transition">
                  {organizationInfo.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{organizationInfo.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{organizationInfo.contact.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Nano Robotics & Embedded Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Verification Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
