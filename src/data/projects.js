export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "wind-services", label: "Wind Energy" },
  { id: "solar-projects", label: "Solar MMS" },
  { id: "construction-projects", label: "Structural & PEB" },
  { id: "design-projects", label: "Design Consultancy" }
];

export const projectsData = [
  {
    id: "bpcl-hosur-60kw",
    title: "60 KW Solar MMS Installation & Commissioning",
    client: "Bharat Petroleum Corporation Ltd. (BPCL)",
    location: "Hosur, Tamil Nadu",
    category: "solar-projects",
    year: "2024",
    image: "/images/solar_mms.jpg",
    scope: "Design, fabrication, hot-dip galvanizing, and complete mechanical/electrical installation of 60 KW solar MMS rooftop structure.",
    keyMetrics: [
      { label: "Capacity", value: "60 KW" },
      { label: "MMS Weight", value: "4.8 Tons" },
      { label: "Execution Time", value: "12 Days" },
      { label: "Wind Rating", value: "160 km/h" }
    ],
    highlights: [
      "Zero penetration ballast foundation system over RCC roof",
      "High anti-corrosive HDG coating certified for chemical environment",
      "Successfully commissioned without disrupting daily LPG bottling plant operations"
    ]
  },
  {
    id: "dindigul-1mw-erection",
    title: "1 MW Solar MMS Supply & Mechanical Erection",
    client: "Renewable Energy EPC Developer",
    location: "Dindigul, Tamil Nadu",
    category: "solar-projects",
    year: "2024",
    image: "/images/solar_mms.jpg",
    scope: "Supply of 45 Tons of galvanized steel solar MMS profiles and turn-key pile ramming, structural assembly, & module mounting for 1 MW solar park.",
    keyMetrics: [
      { label: "Capacity", value: "1 MW (1,000 KW)" },
      { label: "Steel Supplied", value: "45 Tons" },
      { label: "Land Area", value: "3.5 Acres" },
      { label: "Piles Rammed", value: "720 Posts" }
    ],
    highlights: [
      "Completed pile ramming in rocky soil using automated hydraulic pile drivers",
      "Achieved 100% alignment within 2mm tilt tolerance",
      "Handed over 3 days ahead of PPA milestone target"
    ]
  },
  {
    id: "bpcl-ulundurpet-30kw",
    title: "30 KW Solar Installation & Commissioning",
    client: "Bharat Petroleum Corporation Ltd. (BPCL)",
    location: "Ulundurpet, Tamil Nadu",
    category: "solar-projects",
    year: "2023",
    image: "/images/solar_mms.jpg",
    scope: "Turnkey design, supply, civil foundations, structural installation, and inverter grid synchronization for 30 KW solar installation.",
    keyMetrics: [
      { label: "Capacity", value: "30 KW" },
      { label: "Structure", value: "Custom HDG Racking" },
      { label: "Status", value: "Operational" }
    ],
    highlights: [
      "Integrated elevated canopy structure over retail outlet driveway",
      "Delivered complete shadow analysis report using PVsyst simulation"
    ]
  },
  {
    id: "dint-repair-wtg-tamilnadu",
    title: "35-Ton Hydraulic Tower Dent Repair",
    client: "Major WTG OEM Operator",
    location: "Kavalkinaru Wind Farm, Tamil Nadu",
    category: "wind-services",
    year: "2024",
    image: "/images/wtg_crane.jpg",
    scope: "In-situ cold rectification of a 45mm deep transportation indentation on the bottom tubular section of a 2.1 MW wind turbine tower.",
    keyMetrics: [
      { label: "Hydraulic Force", value: "35 Tons" },
      { label: "Tolerance Met", value: "< 1.5mm" },
      { label: "Time Saved", value: "4 Weeks" }
    ],
    highlights: [
      "Deployed proprietary 35-Ton hydraulic dent removal fixture with custom curvature radius dies",
      "Restored tower roundness without cutting steel or damaging internal weld seams",
      "Re-certified by third-party structural inspector for turbine erection approval"
    ]
  },
  {
    id: "uptower-bearing-replacement",
    title: "DE/NDE Generator Bearing Replacement",
    client: "Independent Power Producer (IPP)",
    location: "Muppandal Wind Zone, Tamil Nadu",
    category: "wind-services",
    year: "2024",
    image: "/images/wtg_crane.jpg",
    scope: "Emergency up-tower extraction and replacement of damaged Drive-End (DE) and Non-Drive-End (NDE) bearings on a 1.5 MW wind turbine generator.",
    keyMetrics: [
      { label: "Turbine Rating", value: "1.5 MW" },
      { label: "Hub Height", value: "90 Meters" },
      { label: "Downtime", value: "36 Hours" }
    ],
    highlights: [
      "Executed in-situ induction heating and puller dismantling without lowering generator to ground",
      "Performed laser alignment of generator to gearbox high-speed shaft coupling",
      "Restored turbine generation at peak seasonal wind speed"
    ]
  },
  {
    id: "peb-factory-shed-hosur",
    title: "24,000 Sq.Ft Pre-Engineered Factory Shed",
    client: "Heavy Engineering Manufacturing Unit",
    location: "SIPCOT Industrial Estate, Hosur",
    category: "construction-projects",
    year: "2023",
    image: "/images/hero_bg.jpg",
    scope: "Turnkey design, FEA structural calculation, shop fabrication, hot-dip galvanizing, and site erection of PEB factory building with 15-Ton EOT crane gantry.",
    keyMetrics: [
      { label: "Area", value: "24,000 Sq.Ft" },
      { label: "Clear Span", value: "28 Meters" },
      { label: "EOT Crane Gantry", value: "15 Ton Capacity" }
    ],
    highlights: [
      "High tensile steel built-up columns with custom bracket gantry beams",
      "Galvalume roof sheets with standing seam leak-proof design",
      "Erected safely within 45 operational days"
    ]
  },
  {
    id: "kangeyam-10kw-solar",
    title: "10 KW Solar Installation & Structure",
    client: "Industrial Textile Mill",
    location: "Kangeyam, Tamil Nadu",
    category: "solar-projects",
    year: "2023",
    image: "/images/solar_mms.jpg",
    scope: "Supply of elevated solar MMS framework and mounting 10 KW solar array over mill administrative roof.",
    keyMetrics: [
      { label: "Capacity", value: "10 KW" },
      { label: "Payback Period", value: "3.2 Years" }
    ],
    highlights: [
      "Resisted high wind gusts during monsoon season",
      "Integrated walking platform channels for easy glass washing"
    ]
  },
  {
    id: "custom-rethreading-helicoil",
    title: "Up-Tower Rethreading & Helicoil Fixing",
    client: "Wind Farm Operation & Maintenance",
    location: "Theni Wind Belt, Tamil Nadu",
    category: "design-projects",
    year: "2024",
    image: "/images/wtg_crane.jpg",
    scope: "In-situ precision drilling, tapping, and heavy-duty stainless steel Helicoil insert installation for damaged M36 pitch bearing mounting bolt holes.",
    keyMetrics: [
      { label: "Bolts Restored", value: "28 Stud Holes" },
      { label: "Torque Rating", value: "100% Design Load" }
    ],
    highlights: [
      "Avoided main hub demounting and crane mobilization",
      "Restored bolt clamping torque to OEM specification"
    ]
  }
];
