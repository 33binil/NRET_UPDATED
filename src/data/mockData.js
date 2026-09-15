// Mock Data Architecture for NRET Learning Management System
// Ready for REST API / MongoDB integration in future phases

export const organizationInfo = {
  name: "Nano Robotics & Embedded Technologies",
  shortName: "NRET",
  tagline: "Learn. Build. Innovate.",
  heroSupport: "Industry-oriented technology education with practical training, hands-on projects and career-focused learning.",
  description: "Nano Robotics & Embedded Technologies (NRET) is an educational and technology-focused organization dedicated to providing industry-oriented training and practical learning opportunities in emerging technologies. NRET focuses on developing students' technical skills through professional courses, hands-on training, workshops, internships, projects and career-oriented certification programs.",
  vision: "To empower students and professionals with practical technological knowledge and prepare them for the future of innovation.",
  mission: "To provide accessible, practical and industry-relevant education through expert training, hands-on projects, internships and certification programs.",
  coreValues: [
    { title: "Innovation", desc: "Pushing the boundaries of robotics, embedded firmware, and intelligent hardware design.", icon: "Lightbulb" },
    { title: "Practical Learning", desc: "True mastery comes through physical breadboards, microcontrollers, and real actuators.", icon: "Wrench" },
    { title: "Excellence", desc: "Industry-standard code quality, circuit safety, and pedagogical rigor in every lesson.", icon: "Award" },
    { title: "Integrity", desc: "Ethical engineering, open-source contribution, and transparent mentorship.", icon: "ShieldCheck" },
    { title: "Continuous Learning", desc: "Staying ahead of rapid breakthroughs in IoT protocols, ROS2, and edge computing.", icon: "RefreshCw" },
    { title: "Industry Readiness", desc: "Bridging academia and engineering firms with job-ready portfolio projects.", icon: "Briefcase" }
  ],
  stats: {
    studentsTrained: "10,000+",
    learningHours: "50,000+",
    expertInstructors: "25+",
    projectsCompleted: "1,200+",
    satisfactionRate: "98%",
    partnerCompanies: "40+"
  },
  contact: {
    email: "contact@nret-tech.org",
    admissionsEmail: "admissions@nret-tech.org",
    phone: "+91 98765 43210",
    altPhone: "+91 87654 32109",
    address: "NRET Innovation Campus, Cyber Tech Park, Sector 4, Bangalore, Karnataka - 560100",
    workingHours: "Monday - Saturday: 9:00 AM - 7:00 PM IST"
  }
};

export const categories = [
  { id: "robotics", name: "Robotics & Automation", count: "18+ Courses", icon: "Bot", color: "violet", bg: "bg-violet-50 text-violet-600 border-violet-100" },
  { id: "embedded", name: "Embedded Systems", count: "24+ Courses", icon: "Cpu", color: "emerald", bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { id: "iot", name: "IoT & Smart Tech", count: "15+ Courses", icon: "Wifi", color: "rose", bg: "bg-rose-50 text-rose-600 border-rose-100" },
  { id: "electronics", name: "Electronics & PCB", count: "12+ Courses", icon: "Zap", color: "amber", bg: "bg-amber-50 text-amber-600 border-amber-100" },
  { id: "programming", name: "Programming & ROS", count: "20+ Courses", icon: "Code", color: "indigo", bg: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  { id: "industrial", name: "Industrial Automation", count: "10+ Courses", icon: "Factory", color: "blue", bg: "bg-blue-50 text-blue-600 border-blue-100" }
];

export const instructors = [
  {
    id: "arun-kumar",
    name: "Dr. Arun Kumar",
    designation: "Lead Robotics & Embedded Systems Trainer",
    expertise: ["Robotics", "ROS 2", "STM32 Microcontrollers", "Autonomous Systems"],
    experience: "14+ Years",
    rating: 4.9,
    reviewsCount: 1420,
    coursesCount: 6,
    studentsCount: 3850,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    bio: "Former Senior Robotics Researcher at Aerospace Labs with a PhD in Mechatronics. Dr. Arun has guided thousands of engineering students from beginner breadboard circuits to complex lidar-navigated mobile robots.",
    qualifications: "Ph.D. Mechatronics (IIT Madras), M.Tech Embedded Systems, B.E. Electronics",
    social: { linkedin: "https://linkedin.com", github: "https://github.com", twitter: "https://twitter.com" }
  },
  {
    id: "anjali-menon",
    name: "Ms. Anjali Menon",
    designation: "Principal IoT & Electronics Trainer",
    expertise: ["ESP32", "MQTT Protocols", "PCB Fabrication", "Cloud Telemetry"],
    experience: "9+ Years",
    rating: 4.8,
    reviewsCount: 980,
    coursesCount: 5,
    studentsCount: 2900,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    bio: "Specialist in industrial IoT architectures and low-power connected hardware. Anjali consults with smart-grid manufacturers and mentors NRET students on edge computing and sensor telemetry.",
    qualifications: "M.Tech IoT & Embedded Hardware, B.Tech Electronics & Communication",
    social: { linkedin: "https://linkedin.com", github: "https://github.com" }
  },
  {
    id: "vikramaditya-sen",
    name: "Er. Vikramaditya Sen",
    designation: "Senior Industrial Automation Architect",
    expertise: ["PLC & SCADA", "Siemens S7-1200", "Industrial Networks", "Modbus"],
    experience: "12+ Years",
    rating: 4.9,
    reviewsCount: 810,
    coursesCount: 4,
    studentsCount: 2150,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Certified Siemens Automation Engineer with extensive field experience commissioning automotive and pharmaceutical automation assembly lines across Asia and Europe.",
    qualifications: "B.Tech Electrical & Electronics, Certified ISA Automation Professional",
    social: { linkedin: "https://linkedin.com" }
  },
  {
    id: "sneha-pillai",
    name: "Prof. Sneha Pillai",
    designation: "Embedded C & Firmware Specialist",
    expertise: ["ARM Cortex-M", "FreeRTOS", "Embedded C++", "Device Drivers"],
    experience: "11+ Years",
    rating: 4.9,
    reviewsCount: 1150,
    coursesCount: 5,
    studentsCount: 3200,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    bio: "Firmware architect who has authored bootloaders and bare-metal drivers for consumer wearables and medical diagnostic hardware. Passionate about clean, deterministic code.",
    qualifications: "M.S. Computer Engineering, B.E. Electronics & Instrumentation",
    social: { linkedin: "https://linkedin.com", github: "https://github.com" }
  }
];

export const initialCourses = [
  {
    id: "nret-rob-101",
    title: "Robotics & Automation Fundamentals",
    category: "Robotics & Automation",
    categoryId: "robotics",
    shortDesc: "Master kinematics, servo actuators, ultrasonic sensors, and build your first autonomous obstacle-avoidance robot.",
    fullDesc: "This comprehensive flagship course introduces you to the core principles of robotic engineering. Starting from basic electronics and mechanics, you will build mechanical chassis, wire motor drivers, program microcontroller PWM logic, and calibrate ultrasonic and infrared sensors to create fully autonomous wheeled robots.",
    instructor: "Dr. Arun Kumar",
    instructorId: "arun-kumar",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 1250,
    studentsCount: 3420,
    duration: "10 Weeks (45 Hours)",
    lessonsCount: 32,
    level: "Beginner to Intermediate",
    language: "English",
    price: 49.99,
    originalPrice: 99.99,
    isPopular: true,
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    badge: "Bestseller",
    outcomes: [
      "Design robotic mechanical drive trains and calculate torque requirements",
      "Interface H-Bridge motor drivers (L298N) with microcontrollers",
      "Implement PID control algorithms for smooth differential steering",
      "Process sensor data from ultrasonic, LIDAR, and wheel encoders",
      "Build a complete line-following and autonomous maze-solving rover",
      "Receive official NRET Certificate of Robotics Competency"
    ],
    requirements: [
      "No prior robotics knowledge required",
      "Basic understanding of school-level physics and math",
      "A laptop/PC with USB port (Windows, Mac, or Linux)",
      "NRET Robotics Starter Hardware Kit (or individual components)"
    ],
    whoIsThisFor: [
      "Engineering students in Electronics, Mechanical, or Mechatronics",
      "STEM educators and hobbyists wanting hands-on robotic projects",
      "Graduates seeking technical portfolio projects for automation roles"
    ],
    projects: [
      { title: "Autonomous Obstacle Avoider", desc: "Dual ultrasonic sensor scanning bot with dynamic servo pivoting." },
      { title: "High-Speed Line Follower", desc: "5-channel infrared array PID calibrated rover." },
      { title: "Bluetooth Teleoperated Rover", desc: "Smartphone telemetry dashboard via custom serial packets." }
    ],
    modules: [
      {
        id: "mod-1",
        title: "Module 01 — Introduction to Robotics & Hardware",
        lessons: [
          { id: "les-1", title: "Welcome & Course Overview", duration: "12:40", completed: true, videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ" },
          { id: "les-2", title: "Robotics Architecture & Kinematic Principles", duration: "24:15", completed: true },
          { id: "les-3", title: "Unboxing the NRET Hardware Kit & Safety", duration: "18:30", completed: true }
        ]
      },
      {
        id: "mod-2",
        title: "Module 02 — Motors, Actuators & Drivers",
        lessons: [
          { id: "les-4", title: "DC Motors vs Steppers vs Servos", duration: "28:10", completed: true },
          { id: "les-5", title: "Wiring H-Bridges & PWM Speed Modulation", duration: "32:45", completed: false },
          { id: "les-6", title: "Hands-on: Calibrating Motor Deadbands", duration: "22:00", completed: false }
        ]
      },
      {
        id: "mod-3",
        title: "Module 03 — Sensor Fusion & Obstacle Detection",
        lessons: [
          { id: "les-7", title: "Ultrasonic Echo Timing & Distance Math", duration: "21:15", completed: false },
          { id: "les-8", title: "Infrared Optical Reflectance Arrays", duration: "26:30", completed: false },
          { id: "les-9", title: "Noise Filtering with Moving Averages", duration: "19:50", completed: false }
        ]
      },
      {
        id: "mod-4",
        title: "Module 04 — Autonomous Navigation Logic",
        lessons: [
          { id: "les-10", title: "State Machines for Robotic Decisions", duration: "31:20", completed: false },
          { id: "les-11", title: "Implementing PID Control Loops", duration: "44:10", completed: false }
        ]
      },
      {
        id: "mod-5",
        title: "Module 05 — Capstone Project & Deployment",
        lessons: [
          { id: "les-12", title: "Assembling the Autonomous Maze Rover", duration: "38:40", completed: false },
          { id: "les-13", title: "Benchmarking, Debugging & Submission", duration: "25:15", completed: false }
        ]
      }
    ]
  },
  {
    id: "nret-emb-201",
    title: "Embedded Systems with Arduino & C++",
    category: "Embedded Systems",
    categoryId: "embedded",
    shortDesc: "Learn bare-metal registers, timers, interrupts, I2C/SPI communication, and robust embedded firmware design.",
    fullDesc: "Dive deep beneath high-level abstractions into bare-metal register manipulation, hardware timers, external interrupts, and protocol communication. Build industrial-grade firmware that never locks up.",
    instructor: "Prof. Sneha Pillai",
    instructorId: "sneha-pillai",
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 870,
    studentsCount: 2650,
    duration: "8 Weeks (38 Hours)",
    lessonsCount: 28,
    level: "Beginner to Intermediate",
    language: "English",
    price: 44.99,
    originalPrice: 89.99,
    isPopular: true,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    badge: "Popular",
    outcomes: [
      "Understand ATmega328P memory layout, flash, SRAM, and EEPROM",
      "Direct port manipulation without slow Arduino digitalRead/Write",
      "Configure Hardware Timers (Timer0, Timer1, Timer2) for exact tick counts",
      "Handle rising and falling edge hardware pin interrupts smoothly",
      "Master I2C and SPI buses connecting OLEDs, EEPROMs, and sensors"
    ],
    requirements: ["Basic C or C++ syntax knowledge", "Arduino Uno or Nano board with breadboard"],
    whoIsThisFor: ["Electronics students", "Firmware engineer aspirants", "Arduino hobbyists ready to level up"],
    projects: [
      { title: "Digital Oscilloscope Mini", desc: "Analog ADC sample streaming to 128x64 I2C OLED." },
      { title: "Rotary Encoder Menu System", desc: "Interrupt-driven responsive UI with non-volatile EEPROM config." }
    ],
    modules: [
      {
        id: "mod-emb-1",
        title: "Module 01 — Microcontroller Architecture",
        lessons: [
          { id: "les-emb-1", title: "Harvard vs Von Neumann Architectures", duration: "16:20", completed: true },
          { id: "les-emb-2", title: "Register Bitwise Operations in C++", duration: "25:10", completed: true }
        ]
      },
      {
        id: "mod-emb-2",
        title: "Module 02 — Interrupts & Timers",
        lessons: [
          { id: "les-emb-3", title: "Hardware ISRs vs Polling", duration: "29:40", completed: false },
          { id: "les-emb-4", title: "Timer PWM & CTC Mode Configuration", duration: "33:15", completed: false }
        ]
      }
    ]
  },
  {
    id: "nret-iot-301",
    title: "Advanced IoT Development with ESP32",
    category: "IoT & Smart Tech",
    categoryId: "iot",
    shortDesc: "Build secure edge devices connecting to AWS IoT and MQTT brokers with dual-core FreeRTOS multitasking.",
    fullDesc: "A complete professional masterclass in ESP32 dual-core programming, FreeRTOS tasks, Wi-Fi provisioning, MQTT telemetry, TLS security, and OTA (over-the-air) firmware updates.",
    instructor: "Ms. Anjali Menon",
    instructorId: "anjali-menon",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 910,
    studentsCount: 2950,
    duration: "9 Weeks (42 Hours)",
    lessonsCount: 30,
    level: "Intermediate",
    language: "English",
    price: 54.99,
    originalPrice: 109.99,
    isPopular: true,
    thumbnail: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=80",
    badge: "Trending",
    outcomes: [
      "Deploy dual-core FreeRTOS tasks with queues, mutexes, and semaphores",
      "Publish sensor telemetry via secure MQTT with TLS x.509 certs",
      "Create mobile BLE & SoftAP onboarding portals for Wi-Fi credentials",
      "Execute seamless OTA firmware updates from remote cloud servers"
    ],
    requirements: ["C++ fundamentals", "ESP32 DevKit board", "Active internet connection"],
    whoIsThisFor: ["IoT Engineers", "Cloud & hardware integration developers", "Startup founders building smart hardware"],
    projects: [
      { title: "Smart Industrial Environmental Monitor", desc: "BME280 sensor telemetry pushed to AWS IoT Core dashboard." },
      { title: "Smart Energy Meter with Cloud Analytics", desc: "Current transformer sensing with real-time tariff calculations." }
    ],
    modules: [
      {
        id: "mod-iot-1",
        title: "Module 01 — ESP32 Architecture & FreeRTOS",
        lessons: [
          { id: "les-iot-1", title: "Dual Core Xtensa & Memory Map", duration: "18:10", completed: true },
          { id: "les-iot-2", title: "Creating FreeRTOS Tasks on Core 0 and Core 1", duration: "27:45", completed: false }
        ]
      }
    ]
  },
  {
    id: "nret-elec-401",
    title: "Electronics & Microcontrollers PCB Design",
    category: "Electronics & PCB",
    categoryId: "electronics",
    shortDesc: "From schematic capture to double-sided PCB layout in KiCad, SMD soldering, and hardware debugging.",
    fullDesc: "Bridge the gap between breadboard prototypes and professional production printed circuit boards. Learn KiCad 8, schematic rule checking, differential pair routing, ground pours, and SMD soldering.",
    instructor: "Ms. Anjali Menon",
    instructorId: "anjali-menon",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 630,
    studentsCount: 1840,
    duration: "7 Weeks (30 Hours)",
    lessonsCount: 24,
    level: "All Levels",
    language: "English",
    price: 39.99,
    originalPrice: 79.99,
    isPopular: false,
    thumbnail: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    badge: "Hardware Pro",
    outcomes: [
      "Master KiCad schematic editor and custom symbol creation",
      "Calculate trace widths for power handling and impedance matching",
      "Generate Gerber and Drill files ready for fabrication houses",
      "Hand-solder 0805 passives and QFP microcontroller packages"
    ],
    requirements: ["KiCad installed on computer (Free Open Source)", "Interest in physical electronics"],
    whoIsThisFor: ["Hardware designers", "Robotics builders", "Makers"],
    projects: [
      { title: "Custom ESP32 Sensor Node Board", desc: "Integrated power regulator, USB-C UART, and sensor headers." }
    ],
    modules: []
  },
  {
    id: "nret-prog-501",
    title: "Python for Robotics & ROS 2",
    category: "Programming & ROS",
    categoryId: "programming",
    shortDesc: "Develop robotic software using modern Python, OpenCV computer vision, and ROS 2 Humble communication nodes.",
    fullDesc: "Robot Operating System (ROS 2) is the industry standard for commercial robotics. This course guides you step-by-step through publishers, subscribers, custom service interfaces, TF2 transforms, and computer vision with OpenCV.",
    instructor: "Dr. Arun Kumar",
    instructorId: "arun-kumar",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 1410,
    studentsCount: 3820,
    duration: "11 Weeks (48 Hours)",
    lessonsCount: 36,
    level: "Intermediate to Advanced",
    language: "English",
    price: 59.99,
    originalPrice: 119.99,
    isPopular: true,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
    badge: "Industry Top Pick",
    outcomes: [
      "Create Python ROS 2 nodes, topics, actions, and services",
      "Process camera video streams with OpenCV for object tracking",
      "Simulate differential drive robots inside Gazebo harmonic",
      "Deploy SLAM (Simultaneous Localization and Mapping) for 2D floor plans"
    ],
    requirements: ["Python basics", "Ubuntu 22.04 or Virtual Machine / WSL2"],
    whoIsThisFor: ["Software engineers pivoting to robotics", "Graduate students in autonomy", "AI/ML practitioners"],
    projects: [
      { title: "Vision-Guided Ball Tracker", desc: "OpenCV color mask tracking driving pan-tilt servos." },
      { title: "Nav2 Autonomous Warehouse Robot", desc: "Gazebo simulated waypoint following with obstacle avoidance." }
    ],
    modules: []
  },
  {
    id: "nret-ind-601",
    title: "Industrial Automation & PLC SCADA",
    category: "Industrial Automation",
    categoryId: "industrial",
    shortDesc: "Practical ladder logic programming, Siemens TIA Portal, HMI design, and industrial Modbus fieldbuses.",
    fullDesc: "Learn how modern factories run. Master Siemens S7-1200 PLC programming with Ladder Logic and Function Block Diagrams, design intuitive touchscreen HMIs, and interface VFD variable frequency motor drives.",
    instructor: "Er. Vikramaditya Sen",
    instructorId: "vikramaditya-sen",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    rating: 4.8,
    ratingCount: 520,
    studentsCount: 1620,
    duration: "8 Weeks (36 Hours)",
    lessonsCount: 26,
    level: "Intermediate",
    language: "English",
    price: 49.99,
    originalPrice: 99.99,
    isPopular: false,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    badge: "Factory Ready",
    outcomes: [
      "Program Ladder Logic (LD) and Function Block Diagram (FBD)",
      "Set up Siemens TIA Portal and simulate PLC run cycles",
      "Design operator control HMIs with alarms and trend charts",
      "Wire industrial 24V sensors, relays, and emergency stop interlocks"
    ],
    requirements: ["Basic electrical engineering concepts"],
    whoIsThisFor: ["Electrical engineers", "Plant maintenance technicians", "Automation students"],
    projects: [
      { title: "Automated Bottling Line Simulation", desc: "Conveyor indexing, liquid fill timer, and reject piston logic." }
    ],
    modules: []
  },
  {
    id: "nret-ai-701",
    title: "Embedded Machine Learning & TinyML",
    category: "Robotics & Automation",
    categoryId: "robotics",
    shortDesc: "Run deep neural networks directly on ARM Cortex-M4 microcontrollers for voice, gesture, and anomaly detection.",
    fullDesc: "Deploy lightweight AI models right on microcontrollers with milliwatt power consumption. Quantize TensorFlow Lite models and infer sensor anomalies in real-time.",
    instructor: "Dr. Arun Kumar",
    instructorId: "arun-kumar",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    rating: 4.9,
    ratingCount: 440,
    studentsCount: 1380,
    duration: "6 Weeks (28 Hours)",
    lessonsCount: 22,
    level: "Advanced",
    language: "English",
    price: 54.99,
    originalPrice: 109.99,
    isPopular: false,
    thumbnail: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80",
    badge: "Cutting-Edge",
    outcomes: [
      "Train edge vision & audio classification models in TensorFlow",
      "Quantize floating point weights to INT8 using TFLite Micro",
      "Deploy models on STM32 / Raspberry Pi Pico hardware",
      "Build keyword spotting and vibration bearing wear detection"
    ],
    requirements: ["Python & C++ experience", "Understanding of ML basics"],
    whoIsThisFor: ["AI engineers going embedded", "Hardware researchers", "Sensor designers"],
    projects: [],
    modules: []
  },
  {
    id: "nret-iot-801",
    title: "IoT with ESP32 & Cloud Dashboards",
    category: "IoT & Smart Tech",
    categoryId: "iot",
    shortDesc: "Connect smart sensors, build responsive real-time web dashboards, and trigger WhatsApp/Email alerts.",
    fullDesc: "An accessible hands-on course covering Node-RED, InfluxDB time-series databases, Grafana dashboards, and ESP32 HTTP/WebSockets communication.",
    instructor: "Ms. Anjali Menon",
    instructorId: "anjali-menon",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    rating: 4.7,
    ratingCount: 780,
    studentsCount: 2190,
    duration: "7 Weeks (32 Hours)",
    lessonsCount: 25,
    level: "Beginner",
    language: "English",
    price: 39.99,
    originalPrice: 79.99,
    isPopular: true,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    badge: "Great for Beginners",
    outcomes: [
      "Read analog & I2C sensors with the ESP32",
      "Stream metrics over WebSockets to live web charts",
      "Build custom IoT triggers and automation alert webhooks"
    ],
    requirements: ["Basic computer literacy", "ESP32 board"],
    whoIsThisFor: ["Beginners", "Smart home enthusiasts", "Makers"],
    projects: [],
    modules: []
  }
];

export const internships = [
  {
    id: "intern-rob-1",
    title: "Robotics & Autonomous Systems Internship",
    category: "Robotics",
    duration: "3 Months (Hybrid / On-Campus)",
    stipend: "Merit-based Stipend + Hardware Kit",
    eligibility: "B.Tech/Diploma in ECE, EEE, Mech, Mechatronics, or CS (3rd/4th Year or Recent Graduate)",
    skillsRequired: ["C/C++ basics", "Circuit fundamentals", "Curiosity for robotics"],
    seats: 25,
    startDate: "1st of Next Month",
    mode: "Hybrid (Online Modules + Hands-on Lab Sessions)",
    outcomes: [
      "Design and test 4-wheel omnidirectional mobile chassis",
      "Integrate LIDAR, depth cameras, and IMU inertial sensors",
      "Work on an enterprise client prototype under senior faculty guidance",
      "Receive official NRET Industrial Internship Certificate and recommendation"
    ],
    projectTheme: "Autonomous Hospital Sanitation Rover & Warehouse AGV",
    curriculum: [
      "Month 1: Actuator dynamics, sensor calibration, and PCB assembly",
      "Month 2: ROS 2 node architecture, Gazebo simulation & telemetry",
      "Month 3: Capstone fabrication, stress testing, and industry jury evaluation"
    ]
  },
  {
    id: "intern-emb-2",
    title: "Embedded Systems & Firmware Engineering Internship",
    category: "Embedded Systems",
    duration: "3 Months (Hybrid / Remote)",
    stipend: "Performance-linked Performance Bonus",
    eligibility: "Students & Graduates in Electronics, Electrical or CS Engineering",
    skillsRequired: ["Embedded C", "Microcontroller basics", "Debugging tools"],
    seats: 30,
    startDate: "15th of Next Month",
    mode: "Hybrid / Remote with Hardware Shipment",
    outcomes: [
      "Write bare-metal peripheral drivers for ARM Cortex-M and ESP32",
      "Implement RTOS kernel task scheduling and inter-task communication",
      "Perform power profiling and low-power sleep state optimization",
      "Receive NRET Verified Internship Credential with project repository link"
    ],
    projectTheme: "Ultra-Low Power Asset Tracker with Cellular NB-IoT",
    curriculum: [
      "Month 1: Bare-metal C registers, timer interrupts & DMA transfers",
      "Month 2: FreeRTOS architecture, memory management & bootloaders",
      "Month 3: Low-power hardware debugging, sleep modes, code reviews"
    ]
  },
  {
    id: "intern-iot-3",
    title: "Industrial IoT & Edge Intelligence Internship",
    category: "IoT",
    duration: "6 Weeks (Intensive)",
    stipend: "Certificate + Certification Voucher",
    eligibility: "Engineering students with programming interest",
    skillsRequired: ["Python or C++", "Networking fundamentals"],
    seats: 20,
    startDate: "Immediate Cohort",
    mode: "Online Live Labs",
    outcomes: [
      "Build end-to-end industrial data pipelines with MQTT and TimescaleDB",
      "Deploy edge ML anomaly detection models on Raspberry Pi / ESP32",
      "Present project to industrial advisory committee"
    ],
    projectTheme: "Smart Factory Vibration & Predictive Maintenance Edge Gateway",
    curriculum: [
      "Weeks 1-2: Sensor acquisition, filtering and edge packaging",
      "Weeks 3-4: Secure cloud integration, token authentication & REST/MQTT",
      "Weeks 5-6: Dashboard visualization, alert automation & defense presentation"
    ]
  },
  {
    id: "intern-elec-4",
    title: "PCB Design & Hardware Prototyping Internship",
    category: "Electronics",
    duration: "2 Months",
    stipend: "Hardware sponsorship",
    eligibility: "Students interested in physical hardware engineering",
    skillsRequired: ["Basic circuit theory", "KiCad / Proteus exposure"],
    seats: 15,
    startDate: "Next Month",
    mode: "On-Campus / Lab",
    outcomes: [
      "Schematic capture, high-density component placement, and routing",
      "Manufacturing design (DFM) verification for SMD production",
      "Hands-on hot air SMD assembly and test-jig design"
    ],
    projectTheme: "Multi-Sensor Smart Wearable PCB with Li-Po BMS",
    curriculum: [
      "Month 1: KiCad deep-dive, library design, power trace routing & DRC",
      "Month 2: Stencil fabrication, SMD reflow soldering, signal integrity testing"
    ]
  },
  {
    id: "intern-prog-5",
    title: "Software & Robotics Simulation Internship",
    category: "Software Development",
    duration: "3 Months (Remote)",
    stipend: "Competitive Monthly Stipend",
    eligibility: "CS / IT / Robotics students with Python or C++ proficiency",
    skillsRequired: ["Python", "Linux/Git", "Data structures"],
    seats: 25,
    startDate: "1st of Next Month",
    mode: "Remote",
    outcomes: [
      "Build ROS2 packages and integrate with simulation worlds",
      "Implement computer vision tracking algorithms with OpenCV",
      "Collaborate on production Git repositories with code reviews"
    ],
    projectTheme: "Digital Twin Robotic Arm with Inverse Kinematics",
    curriculum: [
      "Month 1: Linux CLI, ROS2 communications, URDF robot modeling",
      "Month 2: MoveIt2 motion planning and visual servoing",
      "Month 3: Full digital twin integration and benchmark report"
    ]
  },
  {
    id: "intern-auto-6",
    title: "Industrial Automation & PLC Commissioning Internship",
    category: "Automation",
    duration: "2 Months",
    stipend: "Field Training Certificate",
    eligibility: "Electrical / Mechanical / Mechatronics students",
    skillsRequired: ["Electrical schematics", "Control logic"],
    seats: 20,
    startDate: "15th of Next Month",
    mode: "On-Campus Lab",
    outcomes: [
      "Program industrial PLCs and calibrate 4-20mA instrumentation",
      "Wire 3-phase motor starters and VFD speed control loops",
      "Commission factory safety circuits with E-stop relays"
    ],
    projectTheme: "Automated Packaging Sorting Cell with Barcode Verification",
    curriculum: [
      "Month 1: Ladder Logic, TIA Portal, industrial relay wiring",
      "Month 2: HMI touch interface design, fieldbus networking & commissioning"
    ]
  }
];

export const workshops = [
  {
    id: "wk-01",
    title: "Hands-on Autonomous Wheeled Robot Building",
    date: "Saturday, Oct 24, 2026",
    duration: "2 Days (16 Hours)",
    instructor: "Dr. Arun Kumar",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    mode: "In-Person Lab & Live Stream",
    seatsTotal: 40,
    seatsRemaining: 6,
    fee: "Free for Students / Kit Optional ($25)",
    tag: "Hands-on Lab",
    description: "Build an ultrasonic obstacle-navigating robot from ground zero. Hardware kit provided for hands-on attendees.",
    prerequisites: "Laptop with Arduino IDE pre-installed."
  },
  {
    id: "wk-02",
    title: "ESP32 IoT Cloud & FreeRTOS Masterclass",
    date: "Sunday, Nov 08, 2026",
    duration: "1 Day (8 Hours)",
    instructor: "Ms. Anjali Menon",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    mode: "Live Interactive Online",
    seatsTotal: 100,
    seatsRemaining: 24,
    fee: "Free Event",
    tag: "Live Interactive",
    description: "Learn how to dispatch real-time FreeRTOS tasks, stream secure sensor telemetry, and build live web gauges.",
    prerequisites: "Basic C/C++ knowledge."
  },
  {
    id: "wk-03",
    title: "KiCad PCB Layout & Double-Layer Routing Clinic",
    date: "Saturday, Nov 21, 2026",
    duration: "1 Day (6 Hours)",
    instructor: "Ms. Anjali Menon",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    mode: "Online Live Workshop",
    seatsTotal: 60,
    seatsRemaining: 15,
    fee: "Free Event",
    tag: "Design Clinic",
    description: "Bring your schematics to life. Learn trace routing, decoupling capacitor placement, and ground plane design.",
    prerequisites: "KiCad 8 installed on laptop."
  },
  {
    id: "wk-04",
    title: "Industrial PLC & SCADA for Factory Automation",
    date: "Dec 05 - Dec 06, 2026",
    duration: "2 Days (14 Hours)",
    instructor: "Er. Vikramaditya Sen",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    mode: "NRET Bangalore Lab",
    seatsTotal: 30,
    seatsRemaining: 4,
    fee: "$35 (Lab Training Pass)",
    tag: "Industrial Tour",
    description: "Hands-on with Siemens S7-1200 hardware racks, industrial sensors, and SCADA monitoring screen development.",
    prerequisites: "Interest in industrial engineering."
  }
];

export const sampleCertificates = [
  {
    id: "NRET-CERT-88412",
    courseId: "nret-rob-101",
    courseName: "Robotics & Automation Fundamentals",
    studentName: "Alex Johnson",
    studentEmail: "alex.johnson@student.nret.org",
    completionDate: "October 14, 2026",
    grade: "Distinction (94%)",
    instructor: "Dr. Arun Kumar",
    skills: ["Robotics Kinematics", "H-Bridge Motor Control", "PID Algorithms", "Sensor Fusion"],
    credentialUrl: "https://nret-tech.org/verify/NRET-CERT-88412",
    issuedBy: "Nano Robotics & Embedded Technologies Accreditation Council"
  },
  {
    id: "NRET-CERT-79201",
    courseId: "nret-emb-201",
    courseName: "Embedded Systems with Arduino & C++",
    studentName: "Alex Johnson",
    studentEmail: "alex.johnson@student.nret.org",
    completionDate: "August 28, 2026",
    grade: "Honors (96%)",
    instructor: "Prof. Sneha Pillai",
    skills: ["Bare-Metal C++", "Hardware Timers", "ISRs", "I2C / SPI Communication"],
    credentialUrl: "https://nret-tech.org/verify/NRET-CERT-79201",
    issuedBy: "Nano Robotics & Embedded Technologies Accreditation Council"
  }
];

export const sampleQuizzes = [
  {
    id: "quiz-rob-1",
    courseId: "nret-rob-101",
    title: "Robotics Kinematics & Motor Drivers Quiz",
    durationMinutes: 15,
    passScore: 70,
    questions: [
      {
        id: "q1",
        question: "Which component is primarily used in an H-Bridge to reverse the rotational direction of a DC motor?",
        options: [
          "A bank of 4 switching transistors or MOSFETs",
          "A step-up boost converter transformer",
          "A single low-pass RC filtering capacitor",
          "An optocoupler isolation diode only"
        ],
        correctAnswerIndex: 0,
        explanation: "An H-bridge uses four switches (transistors/MOSFETs) arranged in an 'H' configuration. Closing diagonal pairs reverses the voltage polarity across the motor."
      },
      {
        id: "q2",
        question: "In differential drive wheeled steering, how does the robot execute a zero-radius in-place rotation?",
        options: [
          "Both wheels spin forward at the exact same RPM",
          "Left wheel spins forward while right wheel spins reverse at equal speeds",
          "Both wheels stop completely and the castor turns mechanically",
          "PWM duty cycle is set to 100% on the left wheel only"
        ],
        correctAnswerIndex: 1,
        explanation: "Rotating left and right wheels in opposite directions at equal velocity creates pure yaw rotation about the robot center without linear translation."
      },
      {
        id: "q3",
        question: "What physical wave speed is used to compute distance in standard HC-SR04 ultrasonic sensors in air?",
        options: [
          "Speed of light (approx 300,000 km/s)",
          "Speed of sound in air (approx 343 meters per second at room temp)",
          "Radio frequency propagation speed",
          "Resonant frequency of the piezo transducer"
        ],
        correctAnswerIndex: 1,
        explanation: "The HC-SR04 emits 40kHz acoustic pulses that travel at the speed of sound (~343 m/s). Distance = (Echo Time * Speed of Sound) / 2."
      },
      {
        id: "q4",
        question: "In a PID control loop for a line-tracking robot, what does the 'D' (Derivative) term do?",
        options: [
          "Eliminates steady-state accumulated offset error",
          "Dampens rapid oscillations by reacting to the rate of error change",
          "Amplifies motor noise at low speeds",
          "Inverts the sign of the steering command"
        ],
        correctAnswerIndex: 1,
        explanation: "The Derivative term predicts future error by measuring its slope, dampening overshoot and oscillations caused by aggressive proportional gain."
      },
      {
        id: "q5",
        question: "Why are flyback (freewheeling) diodes placed across inductive DC motor coils?",
        options: [
          "To provide decorative illumination when the motor runs",
          "To protect driver transistors from high voltage inductive back-EMF spikes when power cuts off",
          "To convert alternating current into direct current",
          "To increase maximum battery discharge rate"
        ],
        correctAnswerIndex: 1,
        explanation: "When current through an inductor is suddenly interrupted, the collapsing magnetic field creates a severe negative back-EMF voltage spike that could destroy semiconductors without clamping diodes."
      }
    ]
  }
];

export const sampleAssignments = [
  {
    id: "assign-1",
    courseId: "nret-rob-101",
    title: "PWM Speed Curve & Motor Deadband Calibration Report",
    deadline: "Friday, Next Week",
    points: 100,
    status: "Graded",
    grade: "96/100",
    feedback: "Excellent documentation of stall torque PWM thresholds across 6V and 9V supply rails. Great graph visualizations!",
    instructions: "Measure the minimum PWM duty cycle required to initiate motion on friction load. Plot velocity vs PWM in Python/Excel and submit your PDF and Arduino snippet.",
    submittedFile: "Alex_Johnson_PWM_Calibration_NRET.pdf"
  },
  {
    id: "assign-2",
    courseId: "nret-rob-101",
    title: "Obstacle Avoidance State Machine Algorithm",
    deadline: "In 4 Days",
    points: 100,
    status: "Submitted",
    instructions: "Implement a robust finite state machine (FSM) handling: IDLE, FORWARD, OBSTACLE_DETECTED, SCAN_LEFT_RIGHT, BACKOFF, and TURN_OPTIMAL. Submit your `.ino` or `.cpp` code.",
    submittedFile: "obstacle_fsm_rover_v2.ino"
  },
  {
    id: "assign-3",
    courseId: "nret-emb-201",
    title: "I2C Sensor Packet Sniffing & Data Parsing",
    deadline: "Upcoming (12 Days left)",
    points: 100,
    status: "Pending",
    instructions: "Wire a real or simulated temperature sensor on the I2C bus. Capture raw bytes using hardware registers without relying on high-level Wire.h helpers, and display on serial console."
  }
];

export const studentTestimonials = [
  {
    id: "test-1",
    name: "Rohan Varma",
    role: "Robotics Engineer at AutomateX",
    course: "Robotics & Automation Fundamentals",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Before NRET, robotics felt like disconnected theory from textbooks. Dr. Arun's hands-on projects and actual motor driver tuning gave me the confidence to build my college rover and crack my dream robotics placement."
  },
  {
    id: "test-2",
    name: "Pooja Deshmukh",
    role: "IoT Solutions Developer",
    course: "Advanced IoT Development with ESP32",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Ms. Anjali's FreeRTOS and AWS IoT sessions are unmatched. We built actual hardware telemetry pipelines with MQTT instead of toy apps. My NRET certificate was specifically praised in my interview!"
  },
  {
    id: "test-3",
    name: "Karthik Subramanian",
    role: "Embedded Firmware Engineer",
    course: "Embedded Systems with Arduino & C++",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Register-level programming demystified microcontrollers for me. The learning player with code snippets, downloadable schematics, and interactive quizzes made every lesson stick."
  }
];

export const techPartners = [
  { name: "Arduino", role: "Hardware Partner", logoText: "Arduino" },
  { name: "STMicroelectronics", role: "Silicon Partner", logoText: "STMicroelectronics" },
  { name: "Raspberry Pi", role: "Compute Platform", logoText: "Raspberry Pi" },
  { name: "ROS (Open Robotics)", role: "Open Source Ecosystem", logoText: "ROS 2" },
  { name: "Siemens", role: "Industrial Automation", logoText: "Siemens" },
  { name: "Texas Instruments", role: "Semiconductors", logoText: "Texas Instruments" }
];
