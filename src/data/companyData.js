export const companyData = {
  name: "SV Infra Developers",
  shortName: "SV Infra",
  tagline: "Building a Stronger Tomorrow",
  logoUrl: "/logo.png",
  heroHeading: "Building Infrastructure. Creating Progress.",
  heroSubheading: "Precision Engineering | Safety First | Quality Assured",
  founder: "Mr. K. Sai Kishore",
  establishedYear: 2023,
  turnover: "₹1.5 Crores",
  turnoverValue: 1.5,
  safetyRecord: "100%",
  address: "2-1-21/23, Saikiran Colony, KPHB, Hyderabad, Telangana",
  shortAddress: "KPHB, Hyderabad",
  phones: ["+91 9603345669", "+91 9703346669"],
  primaryPhone: "+91 9603345669",
  email: "kishore02@svinfradeveloper.com",

  aboutShort: "Established in 2023 by Mr. K. Sai Kishore, SV Infra Developers is a rapidly growing infrastructure company with a turnover of ₹1.5 Crores. We specialize in control blasting, open blasting, chemical blasting, earthwork excavations, road works, and canal works.",
  aboutFull: "With a strong focus on safety, precision, and quality, we deliver reliable engineering solutions that drive progress and sustainability. Our mission is to build enduring infrastructure through innovation, expertise, and a commitment to excellence in every project.",

  mission: "To deliver world-class infrastructure development, rock blasting, earth excavation, and civil construction services with uncompromising safety standards, engineering precision, and client trust.",
  vision: "To be recognized as a premier infrastructure partner across India, setting benchmarks in technical execution, environmental safety, and sustainable construction engineering.",

  stats: [
    { label: "Year Established", value: "2023", numeric: 2023, isYear: true, icon: "Calendar" },
    { label: "Annual Turnover", value: "₹1.5 Cr", prefix: "₹", numeric: 1.5, suffix: " Cr", isDecimal: true, icon: "TrendingUp" },
    { label: "Major Core Services", value: "6+", numeric: 6, suffix: "+", icon: "Briefcase" },
    { label: "Safety Record", value: "100%", numeric: 100, suffix: "%", icon: "ShieldCheck" }
  ],

  services: [
    {
      id: "control-blasting",
      path: "/services/control-blasting",
      number: "01",
      title: "Control Blasting",
      seoTitle: "Control Blasting Services in Hyderabad, Telangana | SV Infra Developers",
      seoDescription: "Precision control blasting contractors in Hyderabad. Electronic delay detonator sequencing, seismic vibration monitoring & DGMS safety compliance.",
      canonical: "https://svinfradeveloper.com/services/control-blasting",
      shortDescription: "Precision-controlled blasting operations ensuring minimal vibration and maximum safety for sensitive environments.",
      fullDescription: "Control blasting utilizes state-of-the-art delayed initiation techniques, electronic detonators, and seismic monitoring devices to fragment rock formations safely in urban, suburban, or sensitive industrial environments. Our specialized engineering team calculates precise burden, spacing, and charge weights per delay to guarantee vibration mitigation, flyrock control, and complete structural integrity of surrounding assets in Hyderabad and Telangana.",
      icon: "Bomb",
      image: "/services/service-01-control-blasting.jpg",
      keyHighlights: [
        "Seismic vibration monitoring & analysis",
        "Electronic delay detonator sequencing",
        "Minimal air-overpressure & zero flyrock guarantee",
        "Compliance with DGMS safety guidelines"
      ],
      specifications: [
        { label: "Vibration Control", value: "Peak Particle Velocity (PPV) < 5 mm/s" },
        { label: "Detonator Tech", value: "Programmable Electronic Delays" },
        { label: "Safety Standard", value: "100% DGMS Compliant" },
        { label: "Target Zones", value: "Metro Corridors, Urban Foundations, Commercial Sites" }
      ],
      faqs: [
        {
          q: "What is control blasting and why is it required in urban areas like Hyderabad?",
          a: "Control blasting is a specialized rock breaking technique using electronic delays and vibration sensors to fragment hard rock safely near existing buildings, metro rails, or pipelines without structural damage."
        },
        {
          q: "How does SV Infra Developers control ground vibration during blasting?",
          a: "We utilize real-time seismograph monitoring, calibrated powder factors, and microsecond delay intervals between holes to keep Peak Particle Velocity (PPV) well below regulatory limits."
        }
      ]
    },
    {
      id: "open-blasting",
      path: "/services/open-blasting",
      number: "02",
      title: "Open Blasting",
      seoTitle: "Open Blasting & Heavy Rock Cutting Contractors | SV Infra Developers",
      seoDescription: "Large-scale open blasting contractors in Hyderabad & Telangana for mining, quarrying, and high-tonnage rock displacement with heavy crawler drills.",
      canonical: "https://svinfradeveloper.com/services/open-blasting",
      shortDescription: "Large-scale open blasting services for mining, quarrying, and major excavation projects with expert supervision.",
      fullDescription: "Our open blasting solutions cater to large-volume rock removal in open-cast quarries, heavy infrastructure cutting, and mega industrial earthworks. Leveraging high-capacity heavy drilling rigs and optimized blast patterns, we maximize fragmentation efficiency while maintaining rigorous safety zones and regulatory compliance across Telangana and India.",
      icon: "Flame",
      image: "/services/open-blasting-real.jpg",
      keyHighlights: [
        "High-tonnage rock displacement & fragmentation",
        "Heavy-duty crawler drilling rig operation",
        "Optimized powder factor & explosive distribution",
        "Full safety perimeter control and explosive logistics"
      ],
      specifications: [
        { label: "Operational Scale", value: "High-Volume Mining & Quarry Cutting" },
        { label: "Drilling Rigs", value: "Heavy Pneumatic & Hydraulic Crawlers" },
        { label: "Safety Clearance", value: "Full Perimeter Securing & Logistics" },
        { label: "Applications", value: "Highways, Reservoirs & Mining Corridors" }
      ],
      faqs: [
        {
          q: "What project types require open blasting services?",
          a: "Open blasting is ideal for open quarries, highway rock cutting, industrial site levelling, and large irrigation reservoir excavation where high rock fragmentation volume is needed."
        }
      ]
    },
    {
      id: "chemical-blasting",
      path: "/services/chemical-blasting",
      number: "03",
      title: "Chemical Blasting & Silent Rock Breaking",
      seoTitle: "Chemical Blasting & Silent Rock Breaking in Hyderabad | SV Infra",
      seoDescription: "Non-explosive chemical blasting & silent rock breaking contractors in Hyderabad. 100% vibration-free, zero flyrock expansive mortar rock cracking.",
      canonical: "https://svinfradeveloper.com/services/chemical-blasting",
      shortDescription: "Non-explosive rock breaking solutions using controlled chemical expansion for restricted areas.",
      fullDescription: "Chemical blasting (soundless non-explosive cracking agents) provides a silent, vibrationless, and zero-flyrock alternative for breaking reinforced concrete, granite, and boulders in ultra-sensitive urban zones, basement excavations, or near hospital and utility infrastructure where conventional explosives are strictly prohibited.",
      icon: "Zap",
      image: "/services/chemical-blasting-real.jpg",
      keyHighlights: [
        "100% silent and vibration-free rock cracking",
        "Zero explosive permits or blast clearance delays required",
        "Ideal for congested city foundations and basement works",
        "Eco-friendly, non-toxic expansive mortar formulations"
      ],
      specifications: [
        { label: "Noise Level", value: "0 dB (Completely Silent)" },
        { label: "Vibration", value: "Zero (Safe for Adjacent Foundations)" },
        { label: "Permit Requirements", value: "No Explosive Licenses Needed" },
        { label: "Applications", value: "Hospitals, Residential Basements, Utility Zones" }
      ],
      faqs: [
        {
          q: "How long does chemical expanding mortar take to break granite rock?",
          a: "Chemical mortar typically expands and cracks heavy granite within 8 to 24 hours depending on hole spacing, ambient temperature, and rock density."
        }
      ]
    },
    {
      id: "rock-breaking-demolition",
      path: "/services/rock-breaking-demolition",
      number: "04",
      title: "Rock Breaking & Demolition Services",
      seoTitle: "Rock Breaking & Demolition Services in Hyderabad | SV Infra",
      seoDescription: "Heavy rock breaking, mechanical hydraulic breaker operations & structural demolition contractors in Hyderabad & Telangana for mass site clearing.",
      canonical: "https://svinfradeveloper.com/services/rock-breaking-demolition",
      shortDescription: "Heavy rock breaking, mechanical hydraulic breaker operations & structural demolition contractors in Hyderabad & Telangana.",
      fullDescription: "We provide comprehensive mechanical rock breaking, excavator breaker attachments, hydraulic splitter rock removal, and heavy civil structural demolition. Our equipment fleet ensures rapid site clearing, concrete breaking, and boulder excavation for commercial and infrastructure developments across Hyderabad.",
      icon: "HardHat",
      image: "/services/service-04-earthwork-excavations.jpg",
      keyHighlights: [
        "Hydraulic breaker & excavator rock splitting",
        "Heavy concrete & rock structure demolition",
        "Debris removal & site clearance management",
        "Structural excavation for multi-story basements"
      ],
      specifications: [
        { label: "Equipment Fleet", value: "Heavy Excavators with Rock Breaker Attachments" },
        { label: "Demolition Focus", value: "Concrete Structures, Boulders, Rock Formations" },
        { label: "Site Clearing", value: "Integrated Mucking & Transportation" },
        { label: "Coverage", value: "Hyderabad Urban & Telangana Industrial Zones" }
      ],
      faqs: [
        {
          q: "When is mechanical rock breaking preferred over blasting?",
          a: "Mechanical breaking is used when blasting permissions are limited, for site trimming, or where controlled rock splitting is required near existing utility cables."
        }
      ]
    },
    {
      id: "earthwork-excavation",
      path: "/services/earthwork-excavation",
      number: "05",
      title: "Earthwork Excavation & Site Preparation",
      seoTitle: "Earthwork Excavation Contractors in Hyderabad | SV Infra",
      seoDescription: "Mass earthwork excavation, multi-basement cutouts & site grading contractors in Hyderabad & Telangana with heavy excavator fleets.",
      canonical: "https://svinfradeveloper.com/services/earthwork-excavation",
      shortDescription: "Mass earthwork excavation, multi-basement cutouts & site grading contractors in Hyderabad & Telangana.",
      fullDescription: "We execute large-capacity earth excavation, site grading, trenching, structural basement cutouts, and land development. Armed with heavy excavator fleets, dump trucks, wheel loaders, and bull dozers, we ensure rapid soil displacement, precise elevation grading, and efficient site preparation in Hyderabad and Telangana.",
      icon: "HardHat",
      image: "/services/service-04-earthwork-excavations.jpg",
      keyHighlights: [
        "Deep foundation & multi-basement mass excavation",
        "Laser-guided slope grading & site levelling",
        "Heavy fleet deployment for rapid yardage transport",
        "Soil stabilization & erosion control management"
      ],
      specifications: [
        { label: "Excavation Depth", value: "Multi-Basement Deep Cutouts (up to 20m+)" },
        { label: "Grading Precision", value: "Laser Levelled & Slope Trimmed" },
        { label: "Fleet Capacity", value: "Heavy Excavators, Tippers & Loaders" },
        { label: "Service Area", value: "Hyderabad, Rangareddy & Pan-Telangana" }
      ],
      faqs: [
        {
          q: "What machinery does SV Infra use for mass earthwork projects?",
          a: "We deploy modern fleets of heavy hydraulic excavators, rock breakers, wheel loaders, tippers, and bulldozers for rapid earthmoving."
        }
      ]
    },
    {
      id: "infrastructure-construction",
      path: "/services/infrastructure-construction",
      number: "06",
      title: "Road Works & Canal Infrastructure",
      seoTitle: "Road Works & Canal Construction Contractors | SV Infra Developers",
      seoDescription: "Road construction & RCC canal lining contractors in Hyderabad. Subgrade hill rock cutting, highway paving & irrigation channel civil engineering.",
      canonical: "https://svinfradeveloper.com/services/infrastructure-construction",
      shortDescription: "Complete road construction, subgrade rock cutting, asphalt paving, and RCC canal lining services across India.",
      fullDescription: "SV Infra Developers executes major road construction, subgrade rock cutting, WMM base course, asphalt paving, and agricultural irrigation canal lining. Working with major partners like MEIL, NCC, Aparna, Kalpataru, and State Governments, we deliver durable civil infrastructure across Telangana and Andhra Pradesh.",
      icon: "Truck",
      image: "/services/service-05-road-works.jpg",
      keyHighlights: [
        "Highway cutting, hill slope stabilization & embankment",
        "Sub-base, WBM, WMM, and bituminous asphalt paving",
        "Slip-form RCC canal lining & waterproofing",
        "Stormwater road drainage & culvert construction"
      ],
      specifications: [
        { label: "Road Types", value: "Highways, Expressways, Urban & Industrial Corridors" },
        { label: "Canal Engineering", value: "Deep Channel Cutting & Slip-Form Concrete Lining" },
        { label: "Client Track Record", value: "MEIL, NCC, Kalpataru, Telangana & AP Govt" },
        { label: "Quality Standard", value: "MoRTH & Irrigation Dept Standards" }
      ],
      faqs: [
        {
          q: "What road construction and canal works experience does SV Infra have?",
          a: "We have executed highway subgrade cutting, asphalt paving, and RCC canal lining for leading EPC primes including MEIL, NCC, and State Departments."
        }
      ]
    }
  ],

  capabilities: [
    {
      category: "Controlled & Mass Blasting",
      description: "State-of-the-art blasting engineering for precision rock fragmentation across urban, industrial, and quarry zones.",
      items: ["Control Blasting", "Open Blasting", "Chemical Rock Breaking", "Seismic Vibration Analysis"],
      image: "/services/service-01-control-blasting.jpg"
    },
    {
      category: "Heavy Earthworks & Excavation",
      description: "Mass excavation capabilities supported by high-tonnage heavy machinery fleets and precision site grading.",
      items: ["Mass Foundation Excavation", "Site Levelling & Grading", "Trenching & Rock Cutting", "Soil Embankment Works"],
      image: "/services/service-04-earthwork-excavations.jpg"
    },
    {
      category: "Civil & Water Infrastructure",
      description: "Comprehensive road construction and water canal lining projects for state and private sector clients.",
      items: ["State Highways & Expressways", "Irrigation Canal Lining", "Stormwater Drainage", "Structural Civil Engineering"],
      image: "/services/service-05-road-works.jpg"
    }
  ],

  clients: [
    {
      id: "meil",
      name: "Megha Engineering & Infrastructures Ltd (MEIL)",
      shortName: "MEIL",
      type: "Infrastructure Major",
      logo: "/clients/meil.png",
      description: "Leading infrastructure conglomerate across irrigation, energy, transport, and drinking water projects.",
      location: "India / International"
    },
    {
      id: "ncc",
      name: "NCC Limited",
      shortName: "NCC",
      type: "Construction Giant",
      logo: "/clients/ncc-limited.png",
      description: "Premier construction company executing large-scale buildings, roads, water, and industrial projects.",
      location: "Pan-India"
    },
    {
      id: "aparna",
      name: "Aparna Enterprises Ltd",
      shortName: "Aparna",
      type: "Building Materials & Real Estate",
      logo: "/clients/aparna.png",
      description: "Prominent building materials and infrastructure conglomerate delivering high-standard developments.",
      location: "Hyderabad / Telangana"
    },
    {
      id: "kalpataru",
      name: "Kalpataru Limited",
      shortName: "Kalpataru",
      type: "Engineering & Infrastructure",
      logo: "/clients/kalpataru.png",
      description: "Global EPC & infrastructure leader in power transmission, buildings, railways, and highways.",
      location: "Global / India"
    },
    {
      id: "telangana-govt",
      name: "Telangana State",
      shortName: "Telangana Govt",
      type: "Government Authority",
      logo: "/clients/telangana-state.png",
      description: "State infrastructure development, irrigation canal networks, and public works department projects.",
      location: "Telangana, India"
    },
    {
      id: "ap-govt",
      name: "Andhra Pradesh",
      shortName: "AP Govt",
      type: "Government Authority",
      logo: "/clients/andhra-pradesh.png",
      description: "State public works, road infrastructure, and regional water resource development initiatives.",
      location: "Andhra Pradesh, India"
    }
  ],

  whyChooseUs: [
    {
      title: "Professional Expertise",
      description: "Led by industry veteran Mr. K. Sai Kishore with specialized engineering capabilities in heavy blasting, rock excavation, and civil works.",
      icon: "Award"
    },
    {
      title: "Quality Execution",
      description: "Rigorous quality control standards, precision laser grading, and durable civil engineering materials across every project scale.",
      icon: "CheckCircle2"
    },
    {
      title: "Safety & Precision",
      description: "Strict adherence to DGMS safety guidelines, electronic blast delay systems, and 100% incident-free operational history.",
      icon: "ShieldAlert"
    },
    {
      title: "Reliable Delivery",
      description: "Proven track record of delivering ₹1.5Cr+ in annual project value on schedule with full regulatory compliance and client satisfaction.",
      icon: "Clock"
    }
  ],

  projects: [
    {
      id: "meil-earthwork",
      title: "Mass Earthwork & Site Excavation",
      client: "Megha Engineering & Infrastructures Ltd (MEIL)",
      location: "Telangana Corridor",
      service: "Earthwork Excavations",
      description: "Executed high-volume rock cutting and mass site levelling for major infrastructure groundwork using heavy excavators and transport fleets.",
      image: "/services/service-04-earthwork-excavations.jpg"
    },
    {
      id: "state-canal-lining",
      title: "Irrigation Canal Excavation & Concrete Lining",
      client: "Telangana State Water Resources Dept",
      location: "Telangana Region",
      service: "Canal Works",
      description: "Precision channel cutting, embankment shaping, and RCC lining for agricultural irrigation distribution canals.",
      image: "/services/service-06-canal-works.jpg"
    },
    {
      id: "ncc-control-blasting",
      title: "Controlled Rock Blasting for Urban Foundation",
      client: "NCC Limited",
      location: "Hyderabad Metro Zone",
      service: "Control Blasting",
      description: "Vibration-monitored electronic delayed control blasting adjacent to active urban structures with zero flyrock or structural impact.",
      image: "/services/service-01-control-blasting.jpg"
    },
    {
      id: "aparna-chemical-breaking",
      title: "Silent Chemical Rock Excavation",
      client: "Aparna Enterprises Ltd",
      location: "Hyderabad Project Site",
      service: "Chemical Blasting",
      description: "Non-explosive chemical expanding mortar application for soundless rock excavation in restricted commercial development area.",
      image: "/services/chemical-blasting-real.jpg"
    },
    {
      id: "ap-road-construction",
      title: "Subgrade Rock Cutting & Road Construction",
      client: "Andhra Pradesh Infrastructure Dept",
      location: "Andhra Pradesh Corridor",
      service: "Road Works",
      description: "Heavy hill cutting, subgrade stabilization, WMM base course, and asphalt highway paving for regional road connectivity.",
      image: "/services/service-05-road-works.jpg"
    },
    {
      id: "kalpataru-open-blasting",
      title: "Large-Scale Quarry & Open Rock Cutting",
      client: "Kalpataru Limited",
      location: "Industrial Corridor",
      service: "Open Blasting",
      description: "Heavy bench drilling and open blasting operations providing fragmented rock aggregate for large civil engineering works.",
      image: "/services/open-blasting-real.jpg"
    }
  ]
};
