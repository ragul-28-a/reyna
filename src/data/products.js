export const productCategories = [
  { id: "all", label: "All Products" },
  { id: "wtg-lifting", label: "WTG & Lifting Tools" },
  { id: "platforms", label: "Hanging Platforms" },
  { id: "solar-mms", label: "Solar MMS Structures" },
  { id: "peb-steel", label: "Pre-Engineered Steel" }
];

export const productsData = [
  {
    id: "nosecone-replacement-crane",
    name: "Nosecone Replacement Crane",
    category: "wtg-lifting",
    capacity: "3.5 Ton Capacity",
    image: "/images/wtg_crane.jpg",
    shortDesc: "Specialized up-tower crane for wind turbine nosecone removal and pitch bearing alignment without requiring heavy ground cranes.",
    specs: [
      { label: "Lifting Capacity", value: "3.5 Ton SWL" },
      { label: "Working Height", value: "Up to 140 Meters" },
      { label: "Operation Type", value: "Hydraulic / Electric Winch" },
      { label: "Certification", value: "CE Marked & Proof Tested" }
    ],
    features: [
      "Lightweight modular aluminum/steel alloy sections",
      "Compact footprint fits standard nacelle top hatch",
      "Integrated emergency automatic braking mechanism",
      "Drastically reduces ground crane mobilization costs"
    ],
    brochure: "/documents/Nosecone_Crane_Datasheet.pdf"
  },
  {
    id: "geared-trolley-5t",
    name: "Geared Trolley – 5 Ton",
    category: "wtg-lifting",
    capacity: "5 Ton SWL",
    image: "/images/wtg_crane.jpg",
    shortDesc: "Precision heavy-duty beam trolley designed for smooth lateral traverse of nacelle components during internal overhaul.",
    specs: [
      { label: "Rated Capacity", value: "5,000 kg (5 Ton)" },
      { label: "Beam Width Range", value: "100 mm - 305 mm" },
      { label: "Wheel Material", value: "Forged Alloy Steel with Sealed Ball Bearings" },
      { label: "Test Load", value: "6.25 Ton (125% SWL)" }
    ],
    features: [
      "Drop-forged heat-treated steel wheels",
      "Precision hand chain drive with safety locking pin",
      "Corrosion-resistant epoxy yellow coating",
      "Compatible with I-beams and H-beams"
    ],
    brochure: "/documents/Geared_Trolley_5T.pdf"
  },
  {
    id: "tower-dent-removal-tool-35t",
    name: "Tower Dent Removal Tool – 35 Ton",
    category: "wtg-lifting",
    capacity: "35 Ton Hydraulic Force",
    image: "/images/wtg_crane.jpg",
    shortDesc: "Patented high-tonnage hydraulic jacking fixture for cold-rectification of tubular wind turbine tower dents and shell deformations.",
    specs: [
      { label: "Hydraulic Force", value: "35 Ton Dual-Acting Ram" },
      { label: "Working Pressure", value: "700 Bar (10,000 PSI)" },
      { label: "Curvature Radius", value: "Custom radius dies for 2.5m - 4.8m towers" },
      { label: "Weight", value: "145 kg modular frame" }
    ],
    features: [
      "Rectifies internal/external shell indentations in-situ",
      "Eliminates section replacement cut & weld risks",
      "Includes digital laser ovality measuring gauge",
      "Operated via portable electric/manual hydraulic power pack"
    ],
    brochure: "/documents/Tower_Dent_Tool_35T.pdf"
  },
  {
    id: "chair-hanging-platform-1p",
    name: "Chair Hanging Platform – 1 Person",
    category: "platforms",
    capacity: "1 Person (150 kg)",
    image: "/images/wtg_crane.jpg",
    shortDesc: "Single-man powered suspended chair platform for blade cleaning, NDT inspection, touch-up painting, and tower bolt torque checks.",
    specs: [
      { label: "Payload Capacity", value: "1 Person + Tools (150 kg)" },
      { label: "Ascent Speed", value: "8.5 meters / min" },
      { label: "Safety Wire Rope", value: "8.3 mm Galvanized Anti-Twist" },
      { label: "Safety Lock", value: "Fall Arrest Secondary Wire Lock" }
    ],
    features: [
      "Ergonomic seating with harness anchorage points",
      "Overload sensing protection unit",
      "Manual descent control in case of power failure",
      "Compact design for quick transport in pick-up trucks"
    ],
    brochure: "/documents/Chair_Platform_1P.pdf"
  },
  {
    id: "180-degree-platform-3p",
    name: "180 Degree Semi-Circular Platform – 3 Persons",
    category: "platforms",
    capacity: "3 Persons (360 kg)",
    image: "/images/wtg_crane.jpg",
    shortDesc: "Semi-circular suspended platform wrapping 180 degrees around tower shell for rapid joint welding, flange sealing, and painting.",
    specs: [
      { label: "Payload Capacity", value: "3 Persons + Equipment (360 kg)" },
      { label: "Platform Length", value: "4.5 Meters Arc Length" },
      { label: "Hoist Units", value: "Twin Electric Traction Hoists" },
      { label: "Protection", value: "Hot-Dip Galvanized Floor Grating" }
    ],
    features: [
      "180-degree wrap-around access to tower perimeter",
      "Non-slip aluminum checkered floor panels",
      "Integrated 110V/220V power outlets on deck",
      "Equipped with polyurethane bumper rollers to prevent tower scratching"
    ],
    brochure: "/documents/180_Platform_3P.pdf"
  },
  {
    id: "dual-hoist-platform-2p",
    name: "Dual Hoist Suspended Platform – 2 Persons",
    category: "platforms",
    capacity: "2 Persons (250 kg)",
    image: "/images/wtg_crane.jpg",
    shortDesc: "High-stability dual-hoist modular suspended platform ideal for WTG blade repair, structural glass cleaning, and facade maintenance.",
    specs: [
      { label: "Payload Capacity", value: "2 Persons (250 kg)" },
      { label: "Hoist Capacity", value: "Twin 800 kg Electric Hoists" },
      { label: "Platform Width", value: "0.7 Meters" },
      { label: "Working Height", value: "150 Meters Max" }
    ],
    features: [
      "Modular pin-joint aluminum sections (2m / 3m / 6m combination)",
      "Automatic tilt-prevention leveling switch",
      "Emergency manual lowering brake release",
      "Fully compliant with EN 1808 safety standards"
    ],
    brochure: "/documents/Dual_Hoist_Platform.pdf"
  },
  {
    id: "pv-mounting-structures",
    name: "Solar PV Module Mounting Structures (MMS)",
    category: "solar-mms",
    capacity: "Custom MW Scale",
    image: "/images/solar_mms.jpg",
    shortDesc: "Engineered hot-dip galvanized cold-formed steel and aluminum racking systems for ground-mount, seasonal tilt, and rooftop solar installations.",
    specs: [
      { label: "Material Grade", value: "IS 2062 E250 / E350, High Tensile Steel" },
      { label: "Coating", value: "Hot-Dip Galvanized 80-120 Microns (ASTM A123)" },
      { label: "Wind Rating", value: "Engineered up to 180 km/h wind velocity" },
      { label: "Design Life", value: "25+ Years Corrosion Warranty" }
    ],
    features: [
      "Pre-punched purlins & rafters for fast bolt-together assembly",
      "3D STAAD.Pro structural wind tunnel tested",
      "Compatible with all mono/bifacial PV panel dimensions",
      "Proven field performance across 1.2 GW installations"
    ],
    brochure: "/documents/Reyna_Solar_MMS_Catalog.pdf"
  },
  {
    id: "pre-engineered-buildings",
    name: "Pre-Engineered Buildings (PEB) & Sheds",
    category: "peb-steel",
    capacity: "Clear Span up to 60m",
    image: "/images/hero_bg.jpg",
    shortDesc: "Custom designed heavy industrial steel factory buildings, warehouse sheds, logistics hubs, and crane-enabled manufacturing facilities.",
    specs: [
      { label: "Structure Type", value: "Built-up Tapered I-Beams & Cold Rolled Z/C Purlins" },
      { label: "Roofing", value: "Galvalume / Color Coated Profile Sheets" },
      { label: "Crane Integration", value: "EOT Crane gantry supports up to 50 Ton capacity" },
      { label: "Compliance", value: "IS 800:2007 & MBMA Design Standards" }
    ],
    features: [
      "Zero column clear-span layouts for maximum floor space utilization",
      "Includes thermal insulation, turbo ventilators, & daylight skylights",
      "Rapid erection schedule—50% faster than RCC construction",
      "Complete turn-key design, fabrication, supply, & erection"
    ],
    brochure: "/documents/Reyna_PEB_Brochure.pdf"
  }
];
