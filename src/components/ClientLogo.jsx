import React, { useState } from 'react';

// Custom SVG Brand Logos for precision rendering
export const MEILLogo = () => (
  <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
    <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
    {/* MEIL Red & Blue Graphic Symbol */}
    <path d="M15 12 H32 L40 28 L48 12 H65 V38 H52 V22 L43 38 H37 L28 22 V38 H15 Z" fill="#004A99" />
    <path d="M72 12 H102 V20 H84 V22 H100 V29 H84 V31 H102 V38 H72 Z" fill="#004A99" />
    <path d="M108 12 H121 V38 H108 Z" fill="#004A99" />
    <path d="M127 12 H140 V30 H155 V38 H127 Z" fill="#E31E24" />
  </svg>
);

export const NCCLogo = () => (
  <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
    <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
    {/* NCC Blue Bold Typography with Red Accent Arc */}
    <text x="15" y="34" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="28" fill="#0F4C81" letterSpacing="1">
      NCC
    </text>
    <path d="M90 14 C120 10, 145 20, 150 36 C135 24, 115 18, 90 20 Z" fill="#E31E24" />
    <text x="92" y="38" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="9" fill="#475569" letterSpacing="1.5">
      LIMITED
    </text>
  </svg>
);

export const AparnaLogo = () => (
  <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
    <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
    <text x="10" y="30" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="20" fill="#C8102E" letterSpacing="0.5">
      APARNA
    </text>
    <text x="10" y="42" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" fill="#1E293B" letterSpacing="1.2">
      ENTERPRISES LTD
    </text>
    <circle cx="142" cy="25" r="12" fill="#C8102E" opacity="0.1" />
    <path d="M136 25 L142 19 L148 25 L142 31 Z" fill="#C8102E" />
  </svg>
);

export const KalpataruLogo = () => (
  <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
    <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
    {/* Kalpataru Geometric Tree Symbol & Typography */}
    <g transform="translate(12, 10)">
      <path d="M15 5 L27 25 L20 25 L30 35 L3 35 L13 25 L6 25 Z" fill="#006838" />
      <rect x="14" y="35" width="4" height="5" fill="#855934" />
    </g>
    <text x="50" y="28" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="15" fill="#006838" letterSpacing="0.8">
      KALPATARU
    </text>
    <text x="50" y="39" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="8" fill="#64748B" letterSpacing="1">
      PROJECTS INTL.
    </text>
  </svg>
);

export const TelanganaLogo = ({ imgUrl }) => {
  const [error, setError] = useState(false);

  if (imgUrl && !error) {
    return (
      <img
        src={imgUrl}
        alt="Telangana State Emblem"
        onError={() => setError(true)}
        className="w-full h-full object-contain"
      />
    );
  }

  return (
    <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
      <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
      <circle cx="28" cy="25" r="16" fill="#059669" opacity="0.15" />
      <circle cx="28" cy="25" r="14" stroke="#059669" strokeWidth="2" fill="none" />
      <text x="28" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" fill="#059669">
        TS
      </text>
      <text x="52" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="13" fill="#065F46">
        TELANGANA
      </text>
      <text x="52" y="37" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="9" fill="#047857" letterSpacing="0.5">
        STATE GOVT
      </text>
    </svg>
  );
};

export const AndhraPradeshLogo = ({ imgUrl }) => {
  const [error, setError] = useState(false);

  if (imgUrl && !error) {
    return (
      <img
        src={imgUrl}
        alt="Andhra Pradesh State Emblem"
        onError={() => setError(true)}
        className="w-full h-full object-contain"
      />
    );
  }

  return (
    <svg viewBox="0 0 160 50" className="w-full h-full object-contain">
      <rect width="160" height="50" rx="8" fill="#F8FAFC"/>
      <circle cx="28" cy="25" r="16" fill="#0284C7" opacity="0.15" />
      <circle cx="28" cy="25" r="14" stroke="#0284C7" strokeWidth="2" fill="none" />
      <text x="28" y="29" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="10" fill="#0284C7">
        AP
      </text>
      <text x="52" y="26" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="13" fill="#0369A1">
        ANDHRA PRADESH
      </text>
      <text x="52" y="37" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="9" fill="#0284C7" letterSpacing="0.5">
        GOVT AUTHORITY
      </text>
    </svg>
  );
};

const ClientLogo = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  if (client.logo && !imgError) {
    return (
      <img
        src={client.logo}
        alt={`${client.name} Logo`}
        onError={() => setImgError(true)}
        className="w-full h-full object-contain"
      />
    );
  }

  switch (client.id) {
    case 'meil':
      return <MEILLogo />;
    case 'ncc':
      return <NCCLogo />;
    case 'aparna':
      return <AparnaLogo />;
    case 'kalpataru':
      return <KalpataruLogo />;
    case 'telangana-govt':
      return <TelanganaLogo imgUrl="/clients/telangana-state.png" />;
    case 'ap-govt':
      return <AndhraPradeshLogo imgUrl="/clients/andhra-pradesh.png" />;
    default:
      return (
        <div className="w-full h-full flex items-center justify-center font-black text-xs text-logo-blue bg-slate-100 rounded-lg">
          {client.shortName.substring(0, 4)}
        </div>
      );
  }
};

export default ClientLogo;
