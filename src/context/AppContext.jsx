import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialCourses,
  instructors as initialInstructors,
  internships as initialInternships,
  workshops as initialWorkshops,
  sampleCertificates,
  sampleQuizzes,
  sampleAssignments,
  organizationInfo
} from '../data/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Current user state (Default logged-in for rich interactive demo, or switchable)
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('nret_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {
      id: "std-101",
      name: "Alex Johnson",
      email: "alex.johnson@student.nret.org",
      phone: "+91 98765 12345",
      role: "student", // 'student' or 'admin'
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",
      headline: "Robotics & Embedded Systems Student",
      bio: "Passionate about building autonomous rovers, sensor fusion, and real-time embedded Linux systems.",
      location: "Bangalore, India",
      joinDate: "June 2026",
      learningHours: 48
    };
  });

  // Enrolled courses state
  const [enrolledCourses, setEnrolledCourses] = useState(() => {
    const saved = localStorage.getItem('nret_enrollments');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      {
        courseId: "nret-rob-101",
        progress: 68,
        completedLessonIds: ["les-1", "les-2", "les-3", "les-4"],
        currentLessonId: "les-5",
        enrolledAt: "2026-07-10",
        lastAccessed: "Today, 10:45 AM"
      },
      {
        courseId: "nret-emb-201",
        progress: 100,
        completedLessonIds: ["les-emb-1", "les-emb-2", "les-emb-3", "les-emb-4"],
        currentLessonId: "les-emb-4",
        enrolledAt: "2026-06-01",
        lastAccessed: "Yesterday",
        completedAt: "2026-08-28"
      },
      {
        courseId: "nret-iot-301",
        progress: 25,
        completedLessonIds: ["les-iot-1"],
        currentLessonId: "les-iot-2",
        enrolledAt: "2026-08-15",
        lastAccessed: "3 days ago"
      }
    ];
  });

  // Courses catalog
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('nret_courses');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return initialCourses;
  });

  // Instructors
  const [instructorsList] = useState(initialInstructors);
  
  // Internships
  const [internshipsList, setInternshipsList] = useState(() => {
    const saved = localStorage.getItem('nret_internships');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return initialInternships;
  });

  // Workshops
  const [workshopsList, setWorkshopsList] = useState(() => {
    const saved = localStorage.getItem('nret_workshops');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return initialWorkshops;
  });

  // All Students Directory for Administration
  const [allStudents, setAllStudents] = useState(() => {
    const saved = localStorage.getItem('nret_students');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      {
        id: "std-101",
        name: "Alex Johnson",
        email: "alex.johnson@student.nret.org",
        phone: "+91 98765 12345",
        course: "Autonomous Mobile Robotics with ROS 2",
        courseId: "nret-rob-101",
        progress: 68,
        enrolledDate: "2026-07-10",
        status: "Active",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-102",
        name: "Rohan Varma",
        email: "rohan.varma@automatex.io",
        phone: "+91 98220 44551",
        course: "Robotics & Automation Fundamentals",
        courseId: "nret-rob-101",
        progress: 100,
        enrolledDate: "2026-06-12",
        status: "Completed",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-103",
        name: "Pooja Deshmukh",
        email: "pooja.d@smartgrid.tech",
        phone: "+91 98450 67890",
        course: "Advanced IoT Development with ESP32",
        courseId: "nret-iot-301",
        progress: 95,
        enrolledDate: "2026-05-18",
        status: "Active",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-104",
        name: "Karthik Subramanian",
        email: "karthik.sub@embeddedhub.org",
        phone: "+91 97910 22334",
        course: "Embedded Systems with Arduino & C++",
        courseId: "nret-emb-201",
        progress: 100,
        enrolledDate: "2026-06-25",
        status: "Completed",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-105",
        name: "Sneha Reddy",
        email: "sneha.reddy@bmsce.ac.in",
        phone: "+91 99880 33445",
        course: "Autonomous Mobile Robotics with ROS 2",
        courseId: "nret-rob-101",
        progress: 42,
        enrolledDate: "2026-08-01",
        status: "Active",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-106",
        name: "Aman Gupta",
        email: "aman.gupta@dtu.ac.in",
        phone: "+91 98112 55667",
        course: "Industrial Automation with Siemens PLC & SCADA",
        courseId: "nret-ind-601",
        progress: 100,
        enrolledDate: "2026-04-10",
        status: "Completed",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-107",
        name: "Meera Patel",
        email: "meera.patel@bits-pilani.ac.in",
        phone: "+91 94250 88990",
        course: "High-Speed 4-Layer PCB Design with KiCad",
        courseId: "nret-pcb-401",
        progress: 18,
        enrolledDate: "2026-08-20",
        status: "Active",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80"
      },
      {
        id: "std-108",
        name: "Vikram Sen",
        email: "vikram.sen@nitk.edu.in",
        phone: "+91 93456 12378",
        course: "RTOS on ARM Cortex-M Microcontrollers",
        courseId: "nret-emb-201",
        progress: 5,
        enrolledDate: "2026-09-05",
        status: "Enrolled",
        role: "student",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
      }
    ];
  });

  // Financial transactions
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('nret_transactions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      { id: "TXN-9024", studentName: "Rohan Varma", email: "rohan.v@mit.edu", item: "ROS 2 Navigation Course", amount: 69.99, date: "2026-09-15", status: "Success", method: "Credit Card" },
      { id: "TXN-9023", studentName: "Pooja Deshmukh", email: "pooja.d@smartgrid.tech", item: "Autonomous Wheeled Robot Workshop", amount: 25.00, date: "2026-09-14", status: "Success", method: "UPI / NetBanking" },
      { id: "TXN-9022", studentName: "Sneha Reddy", email: "sneha.reddy@bmsce.ac.in", item: "Embedded Systems with Arduino & C++", amount: 44.99, date: "2026-09-12", status: "Success", method: "Debit Card" },
      { id: "TXN-9021", studentName: "Meera Patel", email: "meera.patel@bits-pilani.ac.in", item: "High-Speed PCB Design Course", amount: 49.99, date: "2026-09-10", status: "Success", method: "Stripe" },
      { id: "TXN-9020", studentName: "Aman Gupta", email: "aman.gupta@dtu.ac.in", item: "Siemens PLC & SCADA Course", amount: 59.99, date: "2026-09-08", status: "Success", method: "UPI / NetBanking" },
      { id: "TXN-9019", studentName: "Vikram Sen", email: "vikram.sen@nitk.edu.in", item: "ESP32 IoT Cloud Masterclass", amount: 35.00, date: "2026-09-05", status: "Success", method: "Credit Card" }
    ];
  });

  // System settings
  const [systemSettings, setSystemSettings] = useState(() => {
    const saved = localStorage.getItem('nret_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return {
      institutionName: "Nano Robotics & Embedded Technologies (NRET)",
      portalNotice: "Admissions open for Q4 Industrial Robotics Cohort. Lab access granted 24/7.",
      admissionsOpen: true,
      autoIssueCertificates: true,
      contactEmail: "admissions@nret-tech.org",
      supportHotline: "+91 98765 43210",
      campusAddress: "NRET Innovation Campus, Cyber Tech Park, Bangalore",
      allowGuestReview: false,
      maintenanceMode: false
    };
  });

  // Certificates
  const [certificates, setCertificates] = useState(() => {
    const saved = localStorage.getItem('nret_certificates');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return sampleCertificates;
  });

  // Assignments
  const [assignments, setAssignments] = useState(() => {
    const saved = localStorage.getItem('nret_assignments');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return sampleAssignments;
  });

  // Quizzes
  const [quizzes] = useState(sampleQuizzes);

  // Notifications
  const [notifications, setNotifications] = useState([
    {
      id: "notif-1",
      title: "Assignment Graded!",
      message: "Your 'PWM Speed Curve & Deadband Calibration Report' was graded: 96/100 (Distinction) by Dr. Arun Kumar.",
      time: "2 hours ago",
      read: false,
      type: "grade",
      link: "/assignments"
    },
    {
      id: "notif-2",
      title: "Live Hardware Workshop Tomorrow",
      message: "Autonomous Wheeled Robot Building starts tomorrow at 10:00 AM IST. Check your kit readiness.",
      time: "1 day ago",
      read: false,
      type: "event",
      link: "/workshops"
    },
    {
      id: "notif-3",
      title: "New Certificate Issued!",
      message: "Your verified credential for 'Embedded Systems with Arduino & C++' is now ready for verification.",
      time: "3 days ago",
      read: true,
      type: "certificate",
      link: "/certificates"
    }
  ]);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('nret_user', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('nret_enrollments', JSON.stringify(enrolledCourses));
  }, [enrolledCourses]);

  useEffect(() => {
    localStorage.setItem('nret_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('nret_certificates', JSON.stringify(certificates));
  }, [certificates]);

  useEffect(() => {
    localStorage.setItem('nret_assignments', JSON.stringify(assignments));
  }, [assignments]);

  useEffect(() => {
    localStorage.setItem('nret_internships', JSON.stringify(internshipsList));
  }, [internshipsList]);

  useEffect(() => {
    localStorage.setItem('nret_workshops', JSON.stringify(workshopsList));
  }, [workshopsList]);

  useEffect(() => {
    localStorage.setItem('nret_students', JSON.stringify(allStudents));
  }, [allStudents]);

  useEffect(() => {
    localStorage.setItem('nret_transactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('nret_settings', JSON.stringify(systemSettings));
  }, [systemSettings]);

  // Auth actions
  const login = (email, role = 'student') => {
    const user = {
      id: role === 'admin' ? 'adm-001' : 'std-101',
      name: role === 'admin' ? 'Admin Director' : (email.split('@')[0] || 'Alex Johnson'),
      email: email || (role === 'admin' ? 'admin@nret-tech.org' : 'student@nret.org'),
      phone: "+91 98765 12345",
      role: role,
      avatar: role === 'admin' 
        ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
        : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",
      headline: role === 'admin' ? "NRET Technical Dean & Administrator" : "Robotics & Embedded Systems Student",
      bio: "Learning and innovating at Nano Robotics & Embedded Technologies.",
      location: "Bangalore, India",
      joinDate: "June 2026",
      learningHours: 48
    };
    setCurrentUser(user);
    addToast(`Logged in successfully as ${user.name}`);
    return user;
  };

  const register = (userData) => {
    const newUser = {
      id: `std-${Date.now()}`,
      name: userData.fullName || "New Student",
      email: userData.email,
      phone: userData.phone || "+91 98765 43210",
      role: "student",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80",
      headline: "Technology Student at NRET",
      bio: "Excited to master Robotics, Embedded Systems and IoT at NRET.",
      location: "India",
      joinDate: "September 2026",
      learningHours: 0
    };
    setCurrentUser(newUser);
    addToast(`Welcome to NRET, ${newUser.name}!`);
    return newUser;
  };

  const logout = () => {
    setCurrentUser(null);
    addToast("Logged out successfully", "info");
  };

  // Enroll in course
  const enrollCourse = (courseId) => {
    if (!currentUser) {
      addToast("Please log in to enroll in this course", "warning");
      return false;
    }
    const already = enrolledCourses.some(e => e.courseId === courseId);
    if (already) {
      addToast("You are already enrolled in this course!", "info");
      return true;
    }

    const course = courses.find(c => c.id === courseId);
    const newEnrollment = {
      courseId,
      progress: 0,
      completedLessonIds: [],
      currentLessonId: course?.modules?.[0]?.lessons?.[0]?.id || "les-1",
      enrolledAt: new Date().toISOString().split('T')[0],
      lastAccessed: "Just now"
    };

    setEnrolledCourses(prev => [...prev, newEnrollment]);
    addToast(`Successfully enrolled in ${course?.title || 'course'}!`);
    return true;
  };

  // Mark lesson completed
  const markLessonComplete = (courseId, lessonId) => {
    setEnrolledCourses(prev => {
      return prev.map(item => {
        if (item.courseId === courseId) {
          const already = item.completedLessonIds.includes(lessonId);
          const newCompleted = already 
            ? item.completedLessonIds.filter(id => id !== lessonId)
            : [...item.completedLessonIds, lessonId];
          
          const course = courses.find(c => c.id === courseId);
          const totalLessons = course?.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || 10;
          const newProgress = Math.min(100, Math.round((newCompleted.length / totalLessons) * 100));

          return {
            ...item,
            completedLessonIds: newCompleted,
            progress: newProgress,
            lastAccessed: "Just now"
          };
        }
        return item;
      });
    });
    addToast("Progress updated!");
  };

  // Register for workshop
  const registerWorkshop = (workshopId) => {
    setWorkshopsList(prev => prev.map(w => {
      if (w.id === workshopId && w.seatsRemaining > 0) {
        return { ...w, seatsRemaining: w.seatsRemaining - 1 };
      }
      return w;
    }));
    addToast("Seat reserved successfully for workshop!");
  };

  // Submit assignment
  const submitAssignment = (assignmentId, fileName = "assignment_solution.pdf") => {
    setAssignments(prev => prev.map(a => {
      if (a.id === assignmentId) {
        return {
          ...a,
          status: "Submitted",
          submittedFile: fileName,
          submittedAt: "Just now"
        };
      }
      return a;
    }));
    addToast("Assignment submitted successfully!");
  };

  // Admin Course Management
  const addCourse = (newCourse) => {
    const courseWithId = {
      ...newCourse,
      id: `nret-${Date.now()}`,
      rating: 5.0,
      ratingCount: 1,
      studentsCount: 0,
      isPopular: false
    };
    setCourses(prev => [courseWithId, ...prev]);
    addToast(`Course "${newCourse.title}" created successfully!`);
  };

  const updateCourse = (id, updatedFields) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
    addToast("Course updated successfully!");
  };

  const deleteCourse = (id) => {
    setCourses(prev => prev.filter(c => c.id !== id));
    addToast("Course removed from catalog", "info");
  };

  // Student Management
  const addStudent = (studentData) => {
    const student = {
      ...studentData,
      id: `std-${Date.now()}`,
      progress: studentData.progress || 0,
      enrolledDate: studentData.enrolledDate || new Date().toISOString().split('T')[0],
      status: studentData.status || "Active",
      role: "student",
      avatar: studentData.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=80"
    };
    setAllStudents(prev => [student, ...prev]);
    addToast(`Student ${student.name} registered successfully!`);
    return student;
  };

  const updateStudent = (id, updatedFields) => {
    setAllStudents(prev => prev.map(s => s.id === id ? { ...s, ...updatedFields } : s));
    addToast("Student record updated successfully!");
  };

  const deleteStudent = (id) => {
    setAllStudents(prev => prev.filter(s => s.id !== id));
    addToast("Student record removed", "info");
  };

  // Internship Cohort Management
  const addInternship = (internshipData) => {
    const internship = {
      ...internshipData,
      id: `intern-${Date.now()}`
    };
    setInternshipsList(prev => [internship, ...prev]);
    addToast(`Internship cohort "${internship.title}" added!`);
  };

  const updateInternship = (id, updatedFields) => {
    setInternshipsList(prev => prev.map(i => i.id === id ? { ...i, ...updatedFields } : i));
    addToast("Internship details updated!");
  };

  const deleteInternship = (id) => {
    setInternshipsList(prev => prev.filter(i => i.id !== id));
    addToast("Internship removed", "info");
  };

  // Workshop Management
  const addWorkshop = (workshopData) => {
    const workshop = {
      ...workshopData,
      id: `wk-${Date.now()}`
    };
    setWorkshopsList(prev => [workshop, ...prev]);
    addToast(`Workshop "${workshop.title}" scheduled!`);
  };

  const updateWorkshop = (id, updatedFields) => {
    setWorkshopsList(prev => prev.map(w => w.id === id ? { ...w, ...updatedFields } : w));
    addToast("Workshop updated!");
  };

  const deleteWorkshop = (id) => {
    setWorkshopsList(prev => prev.filter(w => w.id !== id));
    addToast("Workshop removed", "info");
  };

  // Transactions
  const addTransaction = (txn) => {
    setTransactions(prev => [{ ...txn, id: `TXN-${Date.now()}` }, ...prev]);
  };

  // System Settings
  const updateSystemSettings = (newSettings) => {
    setSystemSettings(prev => ({ ...prev, ...newSettings }));
    addToast("System settings updated successfully!");
  };

  // Quick Role Switcher
  const toggleUserRole = () => {
    if (currentUser?.role === 'admin') {
      login('alex.johnson@student.nret.org', 'student');
      addToast("Switched to Verified Student View");
    } else {
      login('admin@nret-tech.org', 'admin');
      addToast("Switched to System Administrator View");
    }
  };

  // Computed Admin Stats
  const adminStats = {
    totalStudents: allStudents.length * 1250 + 2450,
    totalRevenue: 128450,
    activeCourses: courses.length,
    workshopRegistrations: workshopsList.reduce((acc, w) => acc + (w.seatsTotal - w.seatsRemaining), 0) + 140,
    completionRate: "89.4%",
    avgRating: "4.92 / 5.0"
  };

  // Mark all notifications read
  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <AppContext.Provider
      value={{
        organizationInfo,
        currentUser,
        setCurrentUser,
        login,
        register,
        logout,
        toggleUserRole,
        courses,
        enrolledCourses,
        enrollCourse,
        markLessonComplete,
        instructorsList,
        internshipsList,
        workshopsList,
        registerWorkshop,
        certificates,
        assignments,
        submitAssignment,
        quizzes,
        notifications,
        markAllNotificationsRead,
        toasts,
        addToast,
        removeToast,
        // Admin helpers & state
        allStudents,
        addStudent,
        updateStudent,
        deleteStudent,
        addCourse,
        updateCourse,
        deleteCourse,
        addInternship,
        updateInternship,
        deleteInternship,
        addWorkshop,
        updateWorkshop,
        deleteWorkshop,
        transactions,
        addTransaction,
        systemSettings,
        updateSystemSettings,
        adminStats
      }}
    >
      {children}
      {/* Toast Render Area */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map(t => (
          <div
            key={t.id}
            className={`pointer-events-auto px-4 py-3 rounded-xl shadow-xl text-sm font-medium flex items-center gap-3 transition-all duration-300 border ${
              t.type === 'warning'
                ? 'bg-amber-50 text-amber-900 border-amber-200'
                : t.type === 'info'
                ? 'bg-blue-50 text-blue-900 border-blue-200'
                : 'bg-emerald-50 text-emerald-900 border-emerald-200'
            }`}
          >
            <span>{t.message}</span>
            <button
              onClick={() => removeToast(t.id)}
              className="text-slate-400 hover:text-slate-700 ml-2"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
