import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import {
  Bot,
  Cpu,
  Wifi,
  Zap,
  Code,
  Factory,
  CheckCircle2,
  Award,
  ShieldCheck,
  Users,
  Target,
  Eye,
  Building,
  Wrench,
  ArrowRight
} from 'lucide-react';

export default function About() {
  const { instructorsList, organizationInfo } = useApp();

  const focusAreas = [
    { title: "Robotics & Automation", desc: "Kinematics, ROS 2, mobile robot platforms, motor drivers and autonomous navigation.", icon: <Bot className="w-5 h-5 text-indigo-600" /> },
    { title: "Embedded Systems", desc: "Bare-metal firmware, FreeRTOS, STM32, ARM Cortex-M, and low-level C/C++ development.", icon: <Cpu className="w-5 h-5 text-emerald-600" /> },
    { title: "IoT & Smart Technologies", desc: "ESP32, MQTT protocols, cloud telematics, dashboard telemetry and edge intelligence.", icon: <Wifi className="w-5 h-5 text-rose-600" /> },
    { title: "Electronics & PCB Design", desc: "Schematics CAD, Altium/KiCad circuit layout, component fabrication and signal analysis.", icon: <Zap className="w-5 h-5 text-amber-600" /> },
    { title: "Programming & Software", desc: "Python for computer vision, OpenCV, modern C++20 for robotics, and Linux toolchains.", icon: <Code className="w-5 h-5 text-blue-600" /> },
    { title: "Industrial Training", desc: "PLC programming (Siemens/Allen-Bradley), SCADA architectures, and 4.0 factory automation.", icon: <Factory className="w-5 h-5 text-purple-600" /> }
  ];

  return (
    <div className="bg-[#FAFAFC] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
            <Building className="w-3.5 h-3.5" />
            <span>About Our Institution</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Nano Robotics & Embedded Technologies
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Bridging the gap between theoretical textbook academia and the high-demand demands of hardware, robotics, and industrial technology firms.
          </p>
        </motion.div>

        {/* Organization Story & Facilities Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-5"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Empowering the Next Generation of Hardware Innovators
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded by veteran roboticists and embedded engineers, Nano Robotics & Embedded Technologies (NRET) was established with a singular mission: to make practical, hardware-first engineering education accessible, rigorous, and directly aligned with modern industrial employment.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike purely theoretical coding bootcamps, NRET mandates physical hardware experimentation. Our students wire motor drivers, program real microcontrollers, debug oscilloscopes, and assemble autonomous robotic rovers from scratch.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="text-2xl font-bold text-indigo-600">10,000+</div>
                <div className="text-xs text-slate-500 mt-0.5">Engineers Trained</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="text-2xl font-bold text-emerald-600">95%</div>
                <div className="text-xs text-slate-500 mt-0.5">Placement & Internship Rate</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&auto=format&fit=crop&q=80"
                alt="NRET Robotics Hardware Laboratory"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xs hover:shadow-lg transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower engineering students and professionals with hands-on, industry-relevant competencies in robotics, embedded systems, and automation through rigorous lab curriculum, real-world project portfolios, and mentorship from core hardware leaders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xs hover:shadow-lg transition-all space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To establish a premier global center for emerging technology training, pioneering innovation in smart robotics, green automation, and next-generation microelectronics that propel industrial advancement worldwide.
            </p>
          </motion.div>
        </div>

        {/* Focus Areas */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              COMPREHENSIVE CURRICULUM
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Our Core Technology Focus Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-2xs hover:shadow-md transition space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  {area.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900">{area.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership & Instructors */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">
              ACADEMIC COUNCIL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Meet Our Senior Faculty & Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructorsList.map((inst, idx) => (
              <motion.div
                key={inst.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 border border-slate-100 text-center shadow-2xs hover:shadow-lg transition"
              >
                <img
                  src={inst.avatar}
                  alt={inst.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover mb-4 ring-4 ring-indigo-50"
                />
                <h3 className="font-bold text-base text-slate-900">{inst.name}</h3>
                <p className="text-xs text-indigo-600 font-medium">{inst.designation}</p>
                <p className="text-[11px] text-slate-500 mt-2">{inst.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-10 text-white text-center space-y-6 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Join the NRET Technology Community?</h2>
          <p className="text-sm text-indigo-100 max-w-xl mx-auto">
            Whether you are a university student preparing for campus recruitment or a working engineer looking to master ROS 2 and STM32 microcontrollers, we have a program designed for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/courses"
                className="px-7 py-3 rounded-full bg-white text-indigo-900 font-bold text-xs hover:bg-indigo-50 shadow-md transition inline-block"
              >
                Browse All Courses
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-full bg-indigo-700/60 hover:bg-indigo-700 border border-indigo-400/40 text-white font-semibold text-xs transition inline-block"
              >
                Contact Advisory Team
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
