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
      {
        id: "cproj-rob-1",
        title: "Autonomous Obstacle-Avoidance Rover",
        category: "Robotics & Automation",
        desc: "Dual ultrasonic sensor scanning bot with dynamic servo pivoting and differential motor speed regulation.",
        fullDesc: "Build and deploy a 2-wheel differential drive mobile robot capable of continuous navigation through complex obstacle fields. You will interface HC-SR04 ultrasonic rangers with an SG90 micro-servo sweep, write non-blocking state machine algorithms, and calibrate L298N motor drivers for smooth deceleration.",
        problemStatement: "Automated warehouse rovers frequently encounter dynamic obstructions and narrow passageways where static path routing fails.",
        technologies: ["Arduino Uno", "L298N Motor Driver", "HC-SR04 Ultrasonic", "SG90 Servo", "Embedded C++", "PWM Timers"],
        deliverables: [
          "Complete H-Bridge Motor Driver Schematics & Pinouts",
          "Non-Blocking State Machine Firmware in C++",
          "Working Physical Obstacle Course Demonstration Video",
          "Component Bill of Materials (BOM) & Technical Report"
        ],
        duration: "3 Weeks",
        difficulty: "Beginner to Intermediate",
        type: "Flagship Robotics Capstone",
        hardwareNeeded: "Arduino Uno, 2x DC Gear Motors, L298N Driver, HC-SR04 Ultrasonic, 9g Servo, 2S Li-ion Battery",
        mentor: "Dr. Arun Kumar"
      },
      {
        id: "cproj-rob-2",
        title: "High-Speed PID Line Following Vehicle",
        category: "Robotics & Automation",
        desc: "5-channel optical infrared array rover with closed-loop PID control and deadband tuning.",
        fullDesc: "Develop a high-speed track navigation rover utilizing a 5-sensor infrared reflectance array. Learn how to calculate continuous error values, tune Proportional, Integral, and Derivative (PID) coefficients, and prevent motor hunting on sharp 90-degree corners.",
        problemStatement: "Factory conveyor lines require automated guided transport that travels at high speeds without swaying off designated floor markings.",
        technologies: ["PID Control Loops", "Infrared Sensor Array", "PWM Modulation", "Differential Drive", "C++"],
        deliverables: [
          "PID Tuning Graph & Step Response Analysis",
          "5-Channel Sensor Normalization Routine",
          "High-Speed Track Run Benchmark Video",
          "Motor Deadband Calibration Notes"
        ],
        duration: "2 Weeks",
        difficulty: "Intermediate",
        type: "Kinematic Control Project",
        hardwareNeeded: "TCRT5000 5-Channel IR Array, Micro Metal Gear Motors, Microcontroller, Wheel Encoders",
        mentor: "Dr. Arun Kumar"
      },
      {
        id: "cproj-rob-3",
        title: "Bluetooth Teleoperated Inspection Rover",
        category: "Robotics & Automation",
        desc: "Smartphone telemetry dashboard communicating via HC-05 serial packets for remote rover exploration.",
        fullDesc: "Construct a remote exploratory rover controlled via a mobile Bluetooth telemetry console. Design custom packet structures with start/stop framing, CRC checksums, and emergency fail-safe timeouts.",
        problemStatement: "Hazardous confined spaces require wireless robotic inspection with sub-50ms command latency and automatic safety halts if connection drops.",
        technologies: ["HC-05 Bluetooth", "Serial Packet Protocol", "Fail-Safe Watchdog", "Mobile App Telemetry", "Arduino"],
        deliverables: [
          "Serial Packet Protocol Specification Document",
          "Mobile Telemetry Joystick Controller Layout",
          "Watchdog Safety Interlock Firmware"
        ],
        duration: "2 Weeks",
        difficulty: "Beginner",
        type: "Wireless Robotics Lab",
        hardwareNeeded: "HC-05/06 Module, Dual DC Motors, Chassis Kit, Android/iOS Device",
        mentor: "Dr. Arun Kumar"
      }
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
      {
        id: "cproj-emb-1",
        title: "Digital Storage Oscilloscope Mini",
        category: "Embedded Systems",
        desc: "High-speed analog ADC sample streaming to 128x64 I2C OLED with trigger level detection.",
        fullDesc: "Dive into bare-metal peripheral programming. Configure ATmega328P ADC prescalers to capture analog waveforms at 77kHz sample rates, write an interrupt-driven ring buffer, and render real-time voltage traces with variable horizontal timebases on an SSD1306 OLED.",
        problemStatement: "Hardware debuggers require affordable, portable waveform visualization to troubleshoot PWM signals and sensor noise in the field without bulky bench oscilloscopes.",
        technologies: ["ATmega328P Registers", "Free-Running ADC", "I2C Protocol", "OLED SSD1306", "Embedded C++"],
        deliverables: [
          "Bare-Metal ADC Prescaler Configuration Code",
          "I2C Frame Buffer Fast-Render Routine",
          "Trigger Voltage Level Comparator Firmware",
          "Working Breadboard Waveform Demonstration"
        ],
        duration: "3 Weeks",
        difficulty: "Intermediate",
        type: "Embedded Instrument Capstone",
        hardwareNeeded: "Arduino Uno or Nano, 0.96-inch I2C OLED, Signal Source / Potentiometer, Passive Filter Components",
        mentor: "Prof. Sneha Pillai"
      },
      {
        id: "cproj-emb-2",
        title: "Interrupt-Driven Rotary Encoder Menu System",
        category: "Embedded Systems",
        desc: "Hardware pin-change interrupt menu UI with non-volatile EEPROM configuration storage.",
        fullDesc: "Construct a responsive industrial instrumentation user interface. Implement quadrature decoding using Pin Change Interrupts (PCINT) with hardware debouncing, build hierarchical menu state machines, and safeguard configuration parameters in EEPROM with CRC checks.",
        problemStatement: "Industrial equipment dashboards must offer lag-free parameter adjustment without missing rotary encoder detents during CPU-intensive tasks.",
        technologies: ["Pin Change Interrupts", "Quadrature Decoding", "EEPROM Persistence", "FSM State Machine", "C++"],
        deliverables: [
          "Quadrature Gray-Code Decoder ISR",
          "Multi-Level Menu Navigation State Machine",
          "EEPROM Wear-Leveling and Parameter Checksum Header",
          "Physical User Interface Demo"
        ],
        duration: "2 Weeks",
        difficulty: "Intermediate",
        type: "Firmware Architecture Lab",
        hardwareNeeded: "Rotary Encoder with Push Switch, 16x2 LCD or OLED, Microcontroller, Pull-Up Resistors",
        mentor: "Prof. Sneha Pillai"
      }
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
      {
        id: "cproj-iot-1",
        title: "Industrial BME280 Environmental Telemetry Node",
        category: "IoT & Smart Tech",
        desc: "ESP32 dual-core FreeRTOS task streaming barometric, temperature and humidity packets to AWS IoT Core via MQTT with TLS certificates.",
        fullDesc: "Deploy a resilient industrial telemetry node on ESP32 silicon. Split time-critical sensor reading and network transmission across Core 0 and Core 1 using FreeRTOS queues, establish secure TLS MQTT sessions with AWS IoT Core, and format compact JSON payloads.",
        problemStatement: "Industrial pharmaceutical and cleanroom facilities require continuous environmental tracking with sub-second anomaly detection and encrypted cloud uploads.",
        technologies: ["ESP32 Xtensa Dual-Core", "FreeRTOS Tasks", "MQTT over TLS", "AWS IoT Core", "BME280 Sensor"],
        deliverables: [
          "Dual-Core FreeRTOS Task Architecture Code",
          "AWS IoT Core X.509 Certificate Provisioning Scripts",
          "Cloud Ingestion Rule & Real-Time Telemetry Dashboard",
          "Hardware Prototype Verification Log"
        ],
        duration: "3 Weeks",
        difficulty: "Intermediate",
        type: "Industrial IoT Capstone",
        hardwareNeeded: "ESP32 DevKit V1, BME280 I2C Sensor, OLED Display, USB-C Cable",
        mentor: "Ms. Anjali Menon"
      },
      {
        id: "cproj-iot-2",
        title: "Smart Energy Meter with Over-the-Air (OTA) Updates",
        category: "IoT & Smart Tech",
        desc: "Non-invasive current transformer sensing, RMS power calculation, and remote cloud firmware upgrades.",
        fullDesc: "Build an IoT power monitoring device utilizing non-invasive split-core current transformers. Implement digital RMS voltage and current signal processing, and configure dual-partition ESP32 flash memory for failsafe Over-The-Air (OTA) firmware deployments from GitHub releases.",
        problemStatement: "Decentralized energy metering points must receive remote security patches and calibration tables without requiring field technician dispatch.",
        technologies: ["SCT-013 CT Sensor", "ESP32 OTA Updates", "RMS Current Sampling", "WebSockets", "C++"],
        deliverables: [
          "Analog Burden Resistor Interface & Calibration Math",
          "Dual-Partition OTA Firmware Rollback Handler",
          "Real-Time Kilowatt Telemetry Dashboard"
        ],
        duration: "3 Weeks",
        difficulty: "Advanced",
        type: "Smart Energy Project",
        hardwareNeeded: "ESP32, SCT-013 Current Sensor, Burden Resistor Circuit, AC Test Load",
        mentor: "Ms. Anjali Menon"
      }
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
      {
        id: "cproj-elec-1",
        title: "Production ESP32 IoT Sensor Node PCB",
        category: "Electronics & PCB",
        desc: "Complete double-sided PCB layout in KiCad 8 with USB-C UART, 3.3V LDO regulator, and ESD protection.",
        fullDesc: "Take circuit designs from loose breadboards into factory-manufactured printed circuit boards. Route double-sided boards in KiCad 8 with ground planes, bypass capacitors, differential USB pairs, and generate industry-standard Gerber fabrication packages.",
        problemStatement: "Hardware IoT sensors fail in field trials when built on temporary breadboards due to stray capacitance, loose jumper wires, and vibration.",
        technologies: ["KiCad 8", "Schematic Capture", "Gerber File Generation", "0805 SMD Soldering", "USB-C Hardware"],
        deliverables: [
          "Complete KiCad Schematic & PCB Layout Files",
          "Production Gerber, Drill, and Pick-and-Place Archives",
          "Bill of Materials with DigiKey / Mouser Part Numbers",
          "Assembled & Soldered Board Hardware Photo Proof"
        ],
        duration: "3 Weeks",
        difficulty: "All Levels",
        type: "Hardware PCB Capstone",
        hardwareNeeded: "KiCad 8 (Free), Soldering Station, Multimeter, Basic SMD Components",
        mentor: "Ms. Anjali Menon"
      },
      {
        id: "cproj-elec-2",
        title: "Dual H-Bridge Motor Driver Shield PCB",
        category: "Electronics & PCB",
        desc: "Custom high-current motor driver PCB shield with heatsink mounting, flyback diodes, and optical isolation.",
        fullDesc: "Design a high-power driver shield handling up to 5A motor currents. Calculate power trace copper widths, implement optocoupler galvanic isolation to protect logic controllers, and route star-ground topology.",
        problemStatement: "High-current motors induce severe inductive spikes and electromagnetic interference that corrupt microcontroller memory without isolated PCB layouts.",
        technologies: ["High Current Routing", "Optocoupler Isolation", "Thermal Via Relief", "KiCad", "Flyback Diodes"],
        deliverables: [
          "High-Current Thermal Calculation Sheet",
          "Optically Isolated Schematic Design",
          "Fabrication-Ready Gerber Package"
        ],
        duration: "2 Weeks",
        difficulty: "Intermediate",
        type: "Power Electronics Lab",
        hardwareNeeded: "KiCad, Optoisolators, MOSFETs / Motor Driver ICs, Screw Terminals",
        mentor: "Ms. Anjali Menon"
      }
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
      {
        id: "cproj-ros-1",
        title: "Vision-Guided Pan-Tilt Object Tracker",
        category: "Programming & ROS",
        desc: "OpenCV HSV color filtering and centroid tracking feeding dynamic pan-tilt servo commands over serial.",
        fullDesc: "Combine computer vision and hardware actuators. Write a real-time OpenCV video processing pipeline that filters camera feeds in HSV color space, calculates object contours and centroid centroids, and outputs proportional servo motor correction angles over USB serial.",
        problemStatement: "Autonomous camera gimbals must track moving subjects in dynamically changing lighting environments with zero visual stutter.",
        technologies: ["Python 3", "OpenCV 4", "NumPy", "Serial PySerial", "Servo Kinematics"],
        deliverables: [
          "OpenCV Video Ingestion & Filter Script",
          "Proportional Pan-Tilt Servo Controller Code",
          "Object Tracking Video Demonstration"
        ],
        duration: "3 Weeks",
        difficulty: "Intermediate",
        type: "Robotics Computer Vision Capstone",
        hardwareNeeded: "USB Webcam or Pi Camera, 2x Micro Servos, Pan-Tilt Gimbal Bracket",
        mentor: "Dr. Arun Kumar"
      },
      {
        id: "cproj-ros-2",
        title: "Autonomous Warehouse AMR Simulation in ROS 2 & Gazebo",
        category: "Programming & ROS",
        desc: "Full Nav2 waypoint navigation stack, LIDAR SLAM 2D floor mapping, and costmap obstacle avoidance.",
        fullDesc: "Simulate a complete commercial Autonomous Mobile Robot (AMR) inside Gazebo. Build URDF kinematic models, map virtual warehouses using Cartographer SLAM, configure Nav2 costmaps, and dispatch multi-waypoint patrol missions.",
        problemStatement: "Autonomous logistics rovers require obstacle-free path planning in cluttered warehouse corridors with dynamic workers.",
        technologies: ["ROS 2 Humble", "Gazebo Harmonic", "Nav2 Navigation", "SLAM Toolbox", "TF2 Transforms"],
        deliverables: [
          "URDF/Xacro Robot Physical Description Package",
          "Generated 2D Occupancy Grid Map of Warehouse",
          "Multi-Waypoint Autonomous Navigation Python Node"
        ],
        duration: "4 Weeks",
        difficulty: "Advanced",
        type: "ROS 2 Autonomous Systems Project",
        hardwareNeeded: "Ubuntu Linux 22.04 or WSL2 (Simulation-based)",
        mentor: "Dr. Arun Kumar"
      }
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
      {
        id: "cproj-plc-1",
        title: "Automated Factory Bottling & Capping Station",
        category: "Industrial Automation",
        desc: "Siemens S7-1200 PLC ladder logic controlling conveyor indexing, liquid filling timers, and pneumatic reject gates.",
        fullDesc: "Program a realistic automated conveyor bottling machine. Write structured Ladder Logic handling bottle presence optical sensors, solenoid liquid filling valves, pneumatic capping cylinders, and emergency stop interlocks.",
        problemStatement: "High-speed bottling packaging requires deterministic millisecond sequencing and automated ejection of misaligned caps without shutting down the entire conveyor.",
        technologies: ["Siemens TIA Portal", "Ladder Logic (LD)", "Function Blocks (FBD)", "Inductive Sensors", "Pneumatics"],
        deliverables: [
          "Complete TIA Portal PLC Program (.zap file)",
          "Machine State Cycle Timing Diagram",
          "PLCSIM Logic Verification Video Demo"
        ],
        duration: "3 Weeks",
        difficulty: "Intermediate",
        type: "Industrial PLC Capstone",
        hardwareNeeded: "Siemens TIA Portal / OpenPLC / Factory I/O Simulation",
        mentor: "Er. Vikramaditya Sen"
      },
      {
        id: "cproj-plc-2",
        title: "Supervisory SCADA Operator Console",
        category: "Industrial Automation",
        desc: "Interactive touchscreen HMI displaying real-time conveyor speeds, fault alarms, batch counters, and Modbus registers.",
        fullDesc: "Construct an operator human-machine interface (HMI). Map Modbus holding registers, design intuitive animated plant graphics, configure visual audio alarm banners, and export shift production reports.",
        problemStatement: "Plant supervisors need clear visibility into factory throughput, active machine errors, and maintenance schedules from a centralized control room screen.",
        technologies: ["SCADA Systems", "Modbus TCP/IP", "HMI Touch Screen Design", "Industrial Alarming"],
        deliverables: [
          "Interactive HMI Screen Layout Files",
          "Modbus Memory Register Mapping Document",
          "Fault Recovery Procedure Manual"
        ],
        duration: "2 Weeks",
        difficulty: "Intermediate",
        type: "SCADA Systems Project",
        hardwareNeeded: "HMI Software Simulator / Web SCADA",
        mentor: "Er. Vikramaditya Sen"
      }
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
    projects: [
      {
        id: "cproj-ai-1",
        title: "Microcontroller Keyword Spotting & Voice Trigger",
        category: "Robotics & Automation",
        desc: "Train an ultra-compact convolutional neural network in TensorFlow, quantize to INT8, and run live audio inferencing on ARM Cortex-M.",
        fullDesc: "Deploy neural networks directly on microcontrollers running under 20mW. Sample digital microphones via I2S, compute live spectrogram audio features, and classify custom spoken keywords locally with zero internet latency.",
        problemStatement: "Smart devices require offline, private voice triggers that never transmit audio recordings to cloud servers.",
        technologies: ["TensorFlow Lite Micro", "I2S Audio Ingestion", "INT8 Quantization", "ARM Cortex-M4", "Edge AI"],
        deliverables: [
          "Trained INT8 C-Array Model Header",
          "I2S Audio Sampling & FFT Feature Extraction Code",
          "Live Voice Trigger Accuracy Matrix"
        ],
        duration: "3 Weeks",
        difficulty: "Advanced",
        type: "TinyML Edge AI Capstone",
        hardwareNeeded: "ESP32 or STM32 or Raspberry Pi Pico, INMP441 I2S Digital Microphone",
        mentor: "Dr. Arun Kumar"
      },
      {
        id: "cproj-ai-2",
        title: "Predictive Vibration Motor Bearing Anomaly Detector",
        category: "Robotics & Automation",
        desc: "3-axis accelerometer vibration modeling with autoencoders on microcontroller to predict machine bearing failures.",
        fullDesc: "Implement predictive maintenance on spinning machinery. Capture high-frequency vibration signals with an MPU6050 IMU, train an autoencoder on normal baseline operating noise, and detect bearing defects before structural failure occurs.",
        problemStatement: "Industrial motors suffer sudden catastrophic mechanical breakdown when bearing lubrication dries out undetected.",
        technologies: ["Autoencoder Neural Network", "IMU Accelerometer", "Vibration Signal Processing", "Anomaly Score Logic"],
        deliverables: [
          "Vibration Telemetry Training Dataset",
          "On-Device Anomaly Detection Firmware",
          "Early-Warning Alarm Trigger Logic"
        ],
        duration: "3 Weeks",
        difficulty: "Advanced",
        type: "Industrial AI Project",
        hardwareNeeded: "Microcontroller, MPU-6050 6-DOF IMU, Vibration Test Motor",
        mentor: "Dr. Arun Kumar"
      }
    ],
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
    projects: [
      {
        id: "cproj-cloud-1",
        title: "Real-Time Environmental Telemetry & Webhook Alerting",
        category: "IoT & Smart Tech",
        desc: "ESP32 reading DHT22 temperature and soil moisture, broadcasting via HTTP/WebSockets to live web dashboard and Twilio/Webhook alerts.",
        fullDesc: "Construct an IoT environmental tracking platform. Read capacitive moisture and climate sensors, stream telemetry over local WebSockets into an interactive web dashboard, and trigger automated webhook notifications when thresholds exceed safety limits.",
        problemStatement: "Greenhouses and plant nurseries risk crop dehydration without real-time soil condition visibility and immediate mobile notification.",
        technologies: ["ESP32", "DHT22 Climate Sensor", "WebSockets", "Node-RED", "Webhook APIs"],
        deliverables: [
          "ESP32 Non-Blocking Sensor Reader Code",
          "Responsive Browser Telemetry Dashboard",
          "Automated Emergency Alert Integration"
        ],
        duration: "2 Weeks",
        difficulty: "Beginner",
        type: "Connected IoT Dashboard Capstone",
        hardwareNeeded: "ESP32 Dev Board, DHT22 Sensor, Soil Moisture Probe, Breadboard",
        mentor: "Ms. Anjali Menon"
      },
      {
        id: "cproj-cloud-2",
        title: "Smart Room Power Monitoring & Relay Control",
        category: "IoT & Smart Tech",
        desc: "Web-enabled relay controller with energy logging, scheduled timers, and manual override switches.",
        fullDesc: "Build an internet-connected appliance controller. Host an asynchronous HTTP web server directly on ESP32, toggle high-voltage relays safely with optoisolator protection, and render consumption history charts.",
        problemStatement: "Commercial offices waste significant electrical energy leaving air conditioners and lights running outside operating hours.",
        technologies: ["ESP32 Asynchronous Web Server", "Relay Control", "REST API", "JSON Serialization"],
        deliverables: [
          "Embedded Web Server & REST Endpoint Code",
          "Mobile-Friendly Switch Control Interface",
          "Electrical Safety & Relay Snubber Guide"
        ],
        duration: "3 Weeks",
        difficulty: "Beginner to Intermediate",
        type: "Smart Device Automation Lab",
        hardwareNeeded: "ESP32, 2-Channel 5V Optocoupler Relay Board, Status LEDs, Jumper Wires",
        mentor: "Ms. Anjali Menon"
      }
    ],
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

export const initialLiveProjects = [
  {
    id: "proj-rob-1",
    title: "Machine Robotics Systems",
    category: "Robotics & Automation",
    categoryId: "robotics",
    shortDesc: "Students work on practical machine robotics systems involving automation, sensors, controllers, motors and robotic mechanisms.",
    fullDesc: "Machine Robotics Systems is an intensive, practical industry project where students design, build, and deploy high-precision robotic mechanisms. Participants combine mechanical chassis design with motor driver circuitry, closed-loop PID motion control, ultrasonic and infrared sensing, and bare-metal microcontroller programming to solve real-world industrial transport and automated guidance challenges.",
    problemStatement: "Modern manufacturing plants, smart warehouses, and medical facilities face severe bottlenecks with manual cargo transport and repetitive kinematic sorting. Traditional automated guided vehicles (AGVs) often fail on dynamic obstacle avoidance and require costly rewiring.",
    objectives: [
      "Design durable differential-drive mechanical chassis and calculate gear torque requirements",
      "Interface high-current motor drivers (L298N/VNH5019) with microcontroller PWM timers",
      "Implement multi-sensor fusion combining ultrasonic rangers, IR obstacle detectors, and wheel encoders",
      "Program deterministic PID closed-loop algorithms for smooth navigation and trajectory stabilization",
      "Deploy real-world fail-safe emergency brakes and automated obstacle-rerouting state machines"
    ],
    technologies: ["Arduino", "Sensors", "Motors", "Embedded C", "Robotics", "PID Control", "PWM Modulation"],
    workflow: [
      { step: "Idea", label: "Idea & Requirements", desc: "Kinematic specifications, load payload analysis, sensor range assessment, and safety bounds." },
      { step: "Planning", label: "Hardware BOM & Planning", desc: "Component sourcing, battery discharge calculations, motor torque sizing, and electrical schematics." },
      { step: "Design", label: "CAD & Circuit Design", desc: "Chassis structural layout, breadboard wiring diagrams, power distribution, and driver isolation." },
      { step: "Development", label: "Firmware & Assembly", desc: "Writing bare-metal Embedded C drivers, interrupt timing loops, and physical robot chassis fabrication." },
      { step: "Testing", label: "Sensor & PID Calibration", desc: "Oscilloscope signal verification, sensor noise filtering, deadband tuning, and obstacle course validation." },
      { step: "Deployment", label: "Real-World Commissioning", desc: "Live operational testing in simulated warehouse environments, benchmark runs, and technical report defense." }
    ],
    studentResponsibilities: [
      "Assemble and solder motor drivers, logic level shifters, and power regulator modules",
      "Write modular, non-blocking microcontroller code for PWM motor regulation and encoder counting",
      "Calibrate ultrasonic and IR distance sensors under various optical and acoustic lighting conditions",
      "Document sprint commits, participate in weekly mentor standups, and present the functioning hardware demo"
    ],
    skillsGained: [
      "Robotics system design & mechanical assembly",
      "Sensors & actuators interfacing",
      "Motor control & PWM pulse calibration",
      "Microcontroller firmware engineering (Embedded C)",
      "PID control loops & closed-loop state machines",
      "Hardware troubleshooting and real-world implementation"
    ],
    duration: "8 Weeks",
    level: "Intermediate",
    type: "Team Project",
    status: "Live Project",
    published: true,
    mentor: "Dr. Arun Kumar",
    mentorId: "arun-kumar",
    mentorDesignation: "Lead Robotics & Embedded Systems Trainer",
    mentorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 38,
    maxTeamSize: 4,
    deadline: "October 30, 2026",
    startDate: "September 1, 2026",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-rob-101", "nret-emb-201"],
    certificationInfo: "Eligible students who successfully complete all testing milestones and present their working machine receive an official NRET Verified Live Project Certification with cryptographic credential ID."
  },
  {
    id: "proj-web-2",
    title: "Website Development & Selling Platform",
    category: "Web Development",
    categoryId: "programming",
    shortDesc: "Students work on developing a real-world website and selling/e-commerce platform, gaining practical experience in frontend development, backend integration, product management and online business workflows.",
    fullDesc: "This comprehensive web development live project places students inside a real agile product engineering team building a commercial hardware & embedded components e-commerce platform. From high-converting UI/UX design to RESTful microservices, stateful shopping cart flows, payment gateway integrations, and order dispatch pipelines, students ship production-grade code.",
    problemStatement: "Specialized engineering hardware vendors struggle with clunky legacy catalog systems that lack real-time stock sync, modern component parameter filtering, fast checkout, and intuitive interactive user experiences.",
    objectives: [
      "Craft a responsive, accessible UI/UX with modern design systems and intuitive filtering",
      "Build dynamic product catalogs with multi-category search, parameter filters, and inventory tracking",
      "Implement secure JWT authentication, role-based dashboards (Buyer, Merchant, Admin)",
      "Integrate automated shopping carts, discount coupons, and transactional payment checkout workflows",
      "Deploy scalable backend APIs with database persistence, rate-limiting, and error telemetry"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS", "REST APIs", "JWT"],
    workflow: [
      { step: "Idea", label: "Product Discovery", desc: "User personas, competitive benchmarking, e-commerce workflow mapping, and feature prioritization." },
      { step: "Planning", label: "Architecture & DB Schema", desc: "Designing MongoDB database schemas (Users, Products, Orders, Reviews) and API contract routes." },
      { step: "Design", label: "UI/UX & Wireframing", desc: "Component styling in Tailwind CSS, responsive mobile breakpoints, and checkout UX optimization." },
      { step: "Development", label: "Full-Stack Implementation", desc: "React frontend state management, Express server routing, Stripe webhook processing, and cart logic." },
      { step: "Testing", label: "End-to-End QA", desc: "API endpoint verification, unit testing cart calculations, and simulated card payment stress testing." },
      { step: "Deployment", label: "Cloud Launch & Monitoring", desc: "Continuous integration, cloud container hosting, SSL setup, and Google Lighthouse performance audits." }
    ],
    studentResponsibilities: [
      "Develop responsive client-side pages (Home, Product Detail, Cart, Checkout, Merchant Portal)",
      "Write Express backend controllers for CRUD product management, inventory decrementing, and payment intents",
      "Configure webhooks to listen for asynchronous payment confirmations and trigger confirmation receipts",
      "Perform code reviews, manage Git branches, and ensure 90+ performance scores across devices"
    ],
    skillsGained: [
      "Modern UI/UX Design principles and component hierarchy",
      "Frontend Development with React & Tailwind CSS",
      "Backend Integration with Node.js & Express REST APIs",
      "Product Management & inventory data modeling",
      "E-commerce functionality & state persistence",
      "Payment / checkout workflow integration",
      "Responsive web development and production deployment"
    ],
    duration: "6–8 Weeks",
    level: "Intermediate",
    type: "Team Project",
    status: "Live Project",
    published: true,
    mentor: "Prof. Sneha Pillai",
    mentorId: "sneha-pillai",
    mentorDesignation: "Software & Systems Specialist",
    mentorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 45,
    maxTeamSize: 3,
    deadline: "November 15, 2026",
    startDate: "September 15, 2026",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-iot-801", "nret-emb-201"],
    certificationInfo: "Graduates receive the NRET Verified Full-Stack Web Engineering Project Credential, demonstrating real commercial software delivery capability."
  },
  {
    id: "proj-iot-3",
    title: "IoT Smart Monitoring System",
    category: "IoT",
    categoryId: "iot",
    shortDesc: "A practical IoT project involving sensors, data collection, monitoring and connected devices.",
    fullDesc: "Build an end-to-end industrial IoT telemetry solution that acquires multi-sensor physical parameters (temperature, vibration, pressure, humidity) via ESP32 microcontrollers, packages metrics into compact MQTT payloads, and streams them into time-series cloud dashboards with automated alerting.",
    problemStatement: "Critical industrial facilities and cold-storage supply chains suffer unexpected equipment failures due to lack of continuous real-time condition monitoring and prompt early warning indicators.",
    objectives: [
      "Acquire analog and I2C/SPI environmental sensor signals with noise filtering",
      "Establish low-latency wireless connectivity using ESP32 WiFi and lightweight MQTT protocols",
      "Ingest high-frequency sensor points into an InfluxDB time-series database",
      "Design real-time web telemetry charts with custom thresholds and operational heatmaps",
      "Configure automated email and webhook notifications for threshold violation triggers"
    ],
    technologies: ["ESP32", "MQTT", "InfluxDB", "Grafana", "C++", "Sensors", "WebSockets", "Cloud APIs"],
    workflow: [
      { step: "Idea", label: "Sensor Sizing", desc: "Selecting industrial thermocouple, pressure, and accelerometer sensors with appropriate measurement ranges." },
      { step: "Planning", label: "Network Protocol Stack", desc: "Setting up MQTT broker topics, QoS levels, and payload JSON/binary byte serialization." },
      { step: "Design", label: "Circuit & Breadboarding", desc: "Wiring ESP32 with sensors, pull-up resistors, ADC filtering caps, and power supply regulation." },
      { step: "Development", label: "Firmware & Ingestion", desc: "Programming ESP32 FreeRTOS tasks for sampling, WiFi reconnect handlers, and cloud REST ingest." },
      { step: "Testing", label: "Stress & Signal Calibration", desc: "Testing communication under packet drop, temperature chamber tests, and accuracy benchmarks." },
      { step: "Deployment", label: "Live Dashboard Launch", desc: "Publishing Grafana dashboard, setting up alerting webhooks, and battery longevity tuning." }
    ],
    studentResponsibilities: [
      "Wire hardware sensor circuits and interface with ESP32 GPIOs and ADC channels",
      "Write deterministic C++ firmware using asynchronous WiFi and MQTT client libraries",
      "Build live interactive charts and dashboards for real-time remote monitoring",
      "Test threshold alarm conditions and log data integrity over continuous 48-hour burn-in"
    ],
    skillsGained: [
      "Sensor data collection & signal conditioning",
      "ESP32 firmware & FreeRTOS task handling",
      "MQTT protocol communication & pub/sub architecture",
      "Time-series database modeling with InfluxDB",
      "Real-time visualization and web dashboard creation",
      "Automated alert dispatch and industrial telemetry"
    ],
    duration: "6 Weeks",
    level: "Beginner to Intermediate",
    type: "Individual / Team",
    status: "Live Project",
    published: true,
    mentor: "Ms. Anjali Menon",
    mentorId: "anjali-menon",
    mentorDesignation: "Principal IoT & Electronics Trainer",
    mentorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 52,
    maxTeamSize: 2,
    deadline: "November 5, 2026",
    startDate: "September 20, 2026",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-iot-301", "nret-iot-801"],
    certificationInfo: "Students receive the NRET IoT Practical Systems Engineering Credential upon presenting their live streaming dashboard."
  },
  {
    id: "proj-home-4",
    title: "Smart Home Automation",
    category: "IoT & Automation",
    categoryId: "iot",
    shortDesc: "A practical automation project involving smart devices, sensors and remote control.",
    fullDesc: "Create an interconnected smart living space automation system combining multi-channel relay modules, environmental sensing, local mesh network control, voice assistant integration, and an intuitive mobile dashboard with zero cloud dependency requirements for privacy.",
    problemStatement: "Commercial smart home appliances are fragmented across proprietary apps, suffer privacy leaks to external cloud servers, and fail completely when local internet connectivity drops.",
    objectives: [
      "Interface solid-state relays and optoisolators to safely switch domestic appliances",
      "Configure local Zigbee/WiFi mesh network with central open-source Home Assistant gateway",
      "Integrate voice commands via local voice assistants and responsive web apps",
      "Build automated scene routines based on ambient light, presence, and room temperature",
      "Implement physical manual override switches ensuring appliances work even if the controller reboots"
    ],
    technologies: ["ESP8266/ESP32", "Zigbee/WiFi", "Home Assistant", "Node-RED", "React Native", "Relays"],
    workflow: [
      { step: "Idea", label: "Smart Scene Scenarios", desc: "Defining automation trigger conditions (Morning, Energy Saver, Away Mode, Night Shift)." },
      { step: "Planning", label: "Safety & Electrical Planning", desc: "Mains voltage safety isolation, optocoupler protections, and fuse sizing." },
      { step: "Design", label: "Enclosure & UI Mockups", desc: "3D CAD wall box enclosure modeling and mobile touch control screen design." },
      { step: "Development", label: "Relay Node Programming", desc: "Flashing ESPHome firmware, configuring Node-RED logic flows, and mobile UI binding." },
      { step: "Testing", label: "Safety & Latency Testing", desc: "Relay cycle endurance testing, power surge protection verification, and latency benchmarks." },
      { step: "Deployment", label: "Room Installation Demo", desc: "Mounting prototype inside demonstration lab room and stress testing voice commands." }
    ],
    studentResponsibilities: [
      "Assemble relay control boards with optoisolators and snubber circuits for inductive loads",
      "Configure Node-RED automation workflows connecting sensors to state triggers",
      "Build a responsive web/mobile dashboard for lighting and climate controls",
      "Conduct electrical safety checks under faculty supervision"
    ],
    skillsGained: [
      "Smart device hardware interfacing & mains electrical safety",
      "Sensors & environmental telemetry",
      "Local mesh networking (Zigbee / WiFi)",
      "Open-source home automation ecosystems (Home Assistant / Node-RED)",
      "Mobile control dashboard integration",
      "Fail-safe system design & power redundancy"
    ],
    duration: "6 Weeks",
    level: "Beginner",
    type: "Individual",
    status: "Live Project",
    published: true,
    mentor: "Ms. Anjali Menon",
    mentorId: "anjali-menon",
    mentorDesignation: "Principal IoT & Electronics Trainer",
    mentorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 31,
    maxTeamSize: 1,
    deadline: "November 10, 2026",
    startDate: "September 25, 2026",
    thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-iot-301", "nret-emb-201"],
    certificationInfo: "Includes an accredited NRET Certificate in Smart Automation Systems upon completing the project showcase."
  },
  {
    id: "proj-emb-5",
    title: "Embedded Control System",
    category: "Embedded Systems",
    categoryId: "embedded",
    shortDesc: "A real-world embedded system project using microcontrollers, sensors and control mechanisms.",
    fullDesc: "Step into high-reliability automotive and aerospace firmware engineering. Students implement a deterministic embedded control unit on 32-bit ARM Cortex-M microcontrollers using FreeRTOS, hardware timers, direct memory access (DMA), CAN bus networking, and closed-loop motor control algorithms.",
    problemStatement: "Critical industrial actuators require sub-millisecond response latency and absolute deterministic reliability. Standard single-threaded firmware crashes or misses sensor deadlines when overloaded.",
    objectives: [
      "Write bare-metal peripheral drivers for timers, UART, SPI, and ADC without abstraction overhead",
      "Configure FreeRTOS preemptive multitasking kernel with mutexes, semaphores, and queues",
      "Implement Controller Area Network (CAN 2.0B) packet broadcast between microcontrollers",
      "Design digital filtering and closed-loop velocity regulation algorithms",
      "Integrate hardware watchdog timers and brownout detection for fault tolerance"
    ],
    technologies: ["STM32", "ARM Cortex-M", "FreeRTOS", "Embedded C", "CAN Bus", "Logic Analyzers"],
    workflow: [
      { step: "Idea", label: "Timing & Deadlines", desc: "Defining strict real-time deadline budgets and task priority hierarchies." },
      { step: "Planning", label: "Memory Map & Peripherals", desc: "SRAM allocation, stack sizing per task, and DMA channel routing." },
      { step: "Design", label: "State Transition Diagrams", desc: "Designing deterministic state charts and CAN message ID frames." },
      { step: "Development", label: "Driver & RTOS Coding", desc: "Writing bare-metal C drivers, FreeRTOS queue pipelines, and PID mathematical functions." },
      { step: "Testing", label: "Logic Analyzer Tracing", desc: "Measuring context switch latency, jitter analysis, and stack overflow assertions." },
      { step: "Deployment", label: "HIL Rig Commissioning", desc: "Hardware-in-the-loop (HIL) bench verification and thermal run stress testing." }
    ],
    studentResponsibilities: [
      "Configure microcontroller clock tree, PLL multipliers, and hardware timer registers",
      "Implement preemptive task scheduling and inter-task communication with FreeRTOS",
      "Sniff and validate CAN bus frames using USB-to-CAN logic analyzers",
      "Perform timing analysis to guarantee hard real-time latency bounds"
    ],
    skillsGained: [
      "Bare-metal microcontroller programming in Embedded C",
      "Real-time operating system (FreeRTOS) task architecture",
      "CAN Bus protocol and automotive networking",
      "Hardware timers, interrupts & DMA controllers",
      "Closed-loop control mechanisms & PID tuning",
      "Firmware fault analysis with hardware debuggers"
    ],
    duration: "8 Weeks",
    level: "Advanced",
    type: "Team Project",
    status: "Live Project",
    published: true,
    mentor: "Prof. Sneha Pillai",
    mentorId: "sneha-pillai",
    mentorDesignation: "Firmware & Systems Specialist",
    mentorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 27,
    maxTeamSize: 3,
    deadline: "November 25, 2026",
    startDate: "September 10, 2026",
    thumbnail: "https://images.unsplash.com/photo-1517055729441-db3a4e40294c?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-emb-201", "nret-ind-601"],
    certificationInfo: "Students receive the NRET Certified Embedded Control Engineer credential, a prestigious hardware portfolio asset."
  },
  {
    id: "proj-ind-6",
    title: "Industrial Automation Prototype",
    category: "Industrial Automation",
    categoryId: "industrial",
    shortDesc: "A practical automation project designed around industrial control and monitoring concepts.",
    fullDesc: "Design and program a functional factory automation cell featuring programmable logic controllers (Siemens S7-1200), pneumatic cylinder sorting arms, variable frequency motor drives (VFD), inductive proximity sensors, and a supervisory SCADA touch control console.",
    problemStatement: "High-speed packaging and manufacturing plants face costly downtime when legacy relay systems fail. Plants require modernized, modular PLC logic and centralized SCADA telemetry with predictive safety interlocking.",
    objectives: [
      "Program complex industrial sequences using Ladder Logic (LD) and Function Block Diagram (FBD)",
      "Interface industrial 24V DC inductive sensors, optical color sorters, and pneumatic solenoids",
      "Design interactive operator HMI screens with live alarms, conveyor speed dials, and batch counters",
      "Network PLCs and remote I/O islands over industrial Modbus TCP and PROFINET",
      "Implement Category-3 safety circuits with dual-channel emergency stop pushbuttons"
    ],
    technologies: ["Siemens S7-1200 PLC", "TIA Portal", "SCADA", "Modbus", "Industrial Sensors", "Pneumatics"],
    workflow: [
      { step: "Idea", label: "Machine Cycle Chart", desc: "Drafting timing bar graphs for conveyor indexing, clamping, testing, and sorting cycles." },
      { step: "Planning", label: "Electrical Schematics", desc: "Designing 24V control cabinet schematics, terminal blocks, fuse distribution, and relay panels." },
      { step: "Design", label: "HMI & SCADA Layout", desc: "Creating operator touchscreen screens, emergency alarm annunciators, and live animated mimics." },
      { step: "Development", label: "PLC Ladder Programming", desc: "Writing structured logic in Siemens TIA Portal, configuring data blocks, and timer sequences." },
      { step: "Testing", label: "Dry Run & Simulation", desc: "Simulating PLC logic with PLCSIM, validating safety interlocks, and pneumatic leak checks." },
      { step: "Deployment", label: "Live Plant Demonstration", desc: "Commissioning hardware prototype, running high-speed component sorting trials, and sign-off." }
    ],
    studentResponsibilities: [
      "Wire industrial sensors, safety contactors, and pneumatic solenoid valves to PLC I/O cards",
      "Write clean, modular Ladder Logic following IEC 61131-3 industrial programming standards",
      "Build touchscreen HMI graphics for machine start, manual jog, auto cycle, and alarm acknowledgment",
      "Conduct safety fail-safe tests ensuring instant pneumatic shut-off upon emergency stop press"
    ],
    skillsGained: [
      "Industrial PLC programming (Ladder Logic & FBD)",
      "HMI / SCADA graphic design and alarm handling",
      "Factory sensor interfacing (inductive, capacitive, photoelectric)",
      "Pneumatics & electro-mechanical actuator integration",
      "Industrial communication protocols (Modbus TCP & PROFINET)",
      "Industrial plant safety standards & fault diagnosis"
    ],
    duration: "8 Weeks",
    level: "Intermediate to Advanced",
    type: "Team Project",
    status: "Live Project",
    published: true,
    mentor: "Er. Vikramaditya Sen",
    mentorId: "vikramaditya-sen",
    mentorDesignation: "Senior Industrial Automation Architect",
    mentorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    enrolledStudents: 22,
    maxTeamSize: 4,
    deadline: "November 20, 2026",
    startDate: "September 15, 2026",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
    relatedCourseIds: ["nret-ind-601", "nret-emb-201"],
    certificationInfo: "Graduates earn the NRET Verified Industrial Automation Professional Certificate, backed by industry plant case studies."
  }
];

export const initialTrainingPrograms = [
  {
    id: "train-rob-1",
    title: "Robotics & Autonomous Mobile Systems Industrial Track",
    category: "Robotics & Automation",
    duration: "12 Weeks (60 Hours)",
    mode: "Hybrid / On-Campus Lab",
    level: "Comprehensive (Beginner to Pro)",
    badge: "Flagship Track",
    description: "An intensive technology-focused training program covering mechanical design, motor drivers, sensor fusion, ROS 2, and autonomous rover deployment with industrial hardware kits.",
    curriculumHighlights: ["Chassis Mechanics & Kinematics", "Microcontroller & PWM Actuation", "LIDAR & SLAM Navigation", "ROS 2 Architecture & Gazebo", "Capstone Live Project"],
    hardwareKitIncluded: true,
    seats: 25,
    upcomingBatch: "October 10, 2026",
    mentor: "Dr. Arun Kumar",
    enrolledCount: 420
  },
  {
    id: "train-emb-2",
    title: "Advanced Embedded Systems & Bare-Metal C++ Track",
    category: "Embedded Systems",
    duration: "10 Weeks (50 Hours)",
    mode: "Hybrid / Remote with Kit",
    level: "Intermediate to Advanced",
    badge: "Industry Favorite",
    description: "Deep-dive into bare-metal registers, ARM Cortex-M architecture, FreeRTOS preemptive multitasking, communication buses (I2C/SPI/CAN), and hardware debugging.",
    curriculumHighlights: ["Hardware Timers & Interrupts", "Bare-Metal Register Programming", "FreeRTOS Scheduling & Semaphores", "I2C, SPI & CAN Bus Protocols", "Low-Power Optimization"],
    hardwareKitIncluded: true,
    seats: 30,
    upcomingBatch: "October 15, 2026",
    mentor: "Prof. Sneha Pillai",
    enrolledCount: 380
  },
  {
    id: "train-iot-3",
    title: "Industrial IoT, Edge Computing & Telemetry Systems",
    category: "IoT & Smart Tech",
    duration: "8 Weeks (40 Hours)",
    mode: "Online Live Interactive",
    level: "Beginner to Intermediate",
    badge: "High Demand",
    description: "Learn connected device engineering with ESP32, MQTT brokers, time-series telemetry databases, responsive web dashboards, and remote cloud triggers.",
    curriculumHighlights: ["Sensor Conditioning & ADC", "WiFi & MQTT Telemetry", "InfluxDB & Grafana Visuals", "Edge Machine Learning TinyML", "Security & Webhook Automation"],
    hardwareKitIncluded: true,
    seats: 35,
    upcomingBatch: "October 20, 2026",
    mentor: "Ms. Anjali Menon",
    enrolledCount: 340
  },
  {
    id: "train-ind-4",
    title: "Industrial Automation, Siemens PLC & SCADA Track",
    category: "Industrial Automation",
    duration: "8 Weeks (45 Hours)",
    mode: "Hybrid Lab Sessions",
    level: "Practical Industrial",
    badge: "Factory Ready",
    description: "Hands-on industrial automation training with Siemens S7-1200 PLCs, TIA Portal software, Ladder Logic, pneumatic actuation, and HMI SCADA panel design.",
    curriculumHighlights: ["Ladder Logic & Function Blocks", "TIA Portal Simulation & Debugging", "Pneumatic Valves & Sensors", "HMI Touchscreen Design", "Factory Safety Standards"],
    hardwareKitIncluded: false,
    seats: 20,
    upcomingBatch: "October 25, 2026",
    mentor: "Er. Vikramaditya Sen",
    enrolledCount: 290
  }
];

