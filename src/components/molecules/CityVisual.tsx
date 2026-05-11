'use client'

export default function CityVisual() {
  return (
    <div className="relative w-full h-[550px] flex items-end justify-center">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" />
      </div>

      {/* SVG Illustration */}
      <svg
        viewBox="0 0 600 500"
        className="relative z-10 w-full h-full animate-glow-pulse text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid base / platform */}
        <g opacity="0.6">
          {/* Horizontal grid lines (isometric) */}
          <line x1="100" y1="420" x2="500" y2="420" stroke="#00c8ff" strokeWidth="0.5" opacity="0.3" />
          <line x1="120" y1="440" x2="480" y2="440" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="140" y1="460" x2="460" y2="460" stroke="#00c8ff" strokeWidth="0.5" opacity="0.15" />
          <line x1="80" y1="400" x2="520" y2="400" stroke="#00c8ff" strokeWidth="0.5" opacity="0.4" />
          <line x1="60" y1="380" x2="540" y2="380" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />

          {/* Vertical grid lines */}
          <line x1="150" y1="370" x2="150" y2="470" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="225" y1="370" x2="225" y2="470" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="300" y1="370" x2="300" y2="470" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="375" y1="370" x2="375" y2="470" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
          <line x1="450" y1="370" x2="450" y2="470" stroke="#00c8ff" strokeWidth="0.5" opacity="0.2" />
        </g>

        {/* Network nodes on platform */}
        <g opacity="0.7">
          {/* Connection lines */}
          <line x1="120" y1="430" x2="200" y2="410" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4" />
          <line x1="200" y1="410" x2="300" y2="425" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4" />
          <line x1="300" y1="425" x2="400" y2="415" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4" />
          <line x1="400" y1="415" x2="480" y2="435" stroke="#00c8ff" strokeWidth="0.8" opacity="0.4" />
          <line x1="200" y1="410" x2="250" y2="445" stroke="#00c8ff" strokeWidth="0.5" opacity="0.3" />
          <line x1="300" y1="425" x2="350" y2="450" stroke="#00c8ff" strokeWidth="0.5" opacity="0.3" />
          <line x1="400" y1="415" x2="450" y2="445" stroke="#00c8ff" strokeWidth="0.5" opacity="0.3" />

          {/* Nodes */}
          <circle cx="120" cy="430" r="3" fill="#00c8ff" opacity="0.8" />
          <circle cx="200" cy="410" r="3" fill="#00c8ff" opacity="0.8" />
          <circle cx="300" cy="425" r="4" fill="#00c8ff" opacity="0.9" />
          <circle cx="400" cy="415" r="3" fill="#00c8ff" opacity="0.8" />
          <circle cx="480" cy="435" r="3" fill="#00c8ff" opacity="0.8" />
          <circle cx="250" cy="445" r="2" fill="#00c8ff" opacity="0.5" />
          <circle cx="350" cy="450" r="2" fill="#00c8ff" opacity="0.5" />
          <circle cx="450" cy="445" r="2" fill="#00c8ff" opacity="0.5" />

          {/* Glowing nodes */}
          <circle cx="120" cy="430" r="6" fill="#00c8ff" opacity="0.2" />
          <circle cx="300" cy="425" r="8" fill="#00c8ff" opacity="0.15" />
          <circle cx="480" cy="435" r="6" fill="#00c8ff" opacity="0.2" />
        </g>

        {/* Buildings */}
        <defs>
          <linearGradient id="buildingGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00c8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0d1b8e" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="buildingGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#40d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0d1b8e" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="buildingGrad3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#005580" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#003355" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="arrowGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#0d1b8e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00c8ff" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Building 1 - short left */}
        <rect x="130" y="310" width="35" height="100" fill="url(#buildingGrad1)" opacity="0.7" rx="2" />
        <rect x="130" y="310" width="35" height="100" stroke="#00c8ff" strokeWidth="0.5" fill="none" opacity="0.5" rx="2" />
        {/* Windows */}
        <rect x="135" y="320" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="145" y="320" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="155" y="320" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="135" y="330" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="145" y="330" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="155" y="330" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="135" y="340" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="145" y="340" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="135" y="350" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="145" y="350" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="155" y="350" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="135" y="360" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="145" y="360" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="155" y="360" width="6" height="4" fill="#00c8ff" opacity="0.4" />

        {/* Building 2 - medium */}
        <rect x="180" y="260" width="40" height="150" fill="url(#buildingGrad1)" opacity="0.8" rx="2" />
        <rect x="180" y="260" width="40" height="150" stroke="#00c8ff" strokeWidth="0.5" fill="none" opacity="0.6" rx="2" />
        <rect x="185" y="270" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="196" y="270" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="207" y="270" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="185" y="282" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="196" y="282" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="207" y="282" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="185" y="294" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="196" y="294" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="207" y="294" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="185" y="306" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="196" y="306" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="185" y="318" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="196" y="318" width="7" height="5" fill="#00c8ff" opacity="0.3" />
        <rect x="207" y="318" width="7" height="5" fill="#00c8ff" opacity="0.4" />

        {/* Building 3 - tall */}
        <rect x="235" y="200" width="45" height="210" fill="url(#buildingGrad1)" opacity="0.85" rx="2" />
        <rect x="235" y="200" width="45" height="210" stroke="#00c8ff" strokeWidth="0.7" fill="none" opacity="0.7" rx="2" />
        {/* Side face */}
        <rect x="280" y="205" width="12" height="205" fill="url(#buildingGrad3)" opacity="0.6" />
        <rect x="240" y="210" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="252" y="210" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="264" y="210" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="240" y="222" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="252" y="222" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="264" y="222" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="240" y="234" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="252" y="234" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="264" y="234" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="240" y="246" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="252" y="246" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="240" y="258" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="252" y="258" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="264" y="258" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="240" y="270" width="8" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="252" y="270" width="8" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="264" y="270" width="8" height="5" fill="#00c8ff" opacity="0.4" />

        {/* Building 4 - tallest (center) */}
        <rect x="305" y="150" width="50" height="260" fill="url(#buildingGrad2)" opacity="0.9" rx="2" />
        <rect x="305" y="150" width="50" height="260" stroke="#00c8ff" strokeWidth="0.8" fill="none" opacity="0.8" rx="2" />
        <rect x="355" y="155" width="14" height="255" fill="url(#buildingGrad3)" opacity="0.5" />
        {/* Antenna */}
        <line x1="330" y1="150" x2="330" y2="130" stroke="#00c8ff" strokeWidth="1.5" opacity="0.8" />
        <circle cx="330" cy="127" r="3" fill="#00c8ff" opacity="0.9" />
        <circle cx="330" cy="127" r="6" fill="#00c8ff" opacity="0.2" />
        {/* Windows */}
        <rect x="312" y="160" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="324" y="160" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="336" y="160" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="312" y="174" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="324" y="174" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="336" y="174" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="312" y="188" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="324" y="188" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="336" y="188" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="312" y="202" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="324" y="202" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="336" y="202" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="312" y="216" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="324" y="216" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="336" y="216" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="312" y="230" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="324" y="230" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="312" y="244" width="8" height="6" fill="#00c8ff" opacity="0.5" />
        <rect x="324" y="244" width="8" height="6" fill="#00c8ff" opacity="0.4" />
        <rect x="336" y="244" width="8" height="6" fill="#00c8ff" opacity="0.5" />

        {/* Building 5 - medium-tall */}
        <rect x="385" y="220" width="42" height="190" fill="url(#buildingGrad1)" opacity="0.8" rx="2" />
        <rect x="385" y="220" width="42" height="190" stroke="#00c8ff" strokeWidth="0.6" fill="none" opacity="0.6" rx="2" />
        <rect x="427" y="225" width="10" height="185" fill="url(#buildingGrad3)" opacity="0.5" />
        <rect x="390" y="230" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="401" y="230" width="7" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="412" y="230" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="390" y="242" width="7" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="401" y="242" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="412" y="242" width="7" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="390" y="254" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="401" y="254" width="7" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="412" y="254" width="7" height="5" fill="#00c8ff" opacity="0.4" />
        <rect x="390" y="266" width="7" height="5" fill="#00c8ff" opacity="0.5" />
        <rect x="401" y="266" width="7" height="5" fill="#00c8ff" opacity="0.4" />

        {/* Building 6 - pointed/spire (like Empire State) */}
        <rect x="445" y="250" width="35" height="160" fill="url(#buildingGrad1)" opacity="0.75" rx="2" />
        <rect x="445" y="250" width="35" height="160" stroke="#00c8ff" strokeWidth="0.5" fill="none" opacity="0.5" rx="2" />
        {/* Spire */}
        <polygon points="462,250 455,250 462,220 469,250" fill="url(#buildingGrad2)" opacity="0.7" />
        <line x1="462" y1="220" x2="462" y2="210" stroke="#00c8ff" strokeWidth="1" opacity="0.7" />
        <rect x="450" y="260" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="460" y="260" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="470" y="260" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="450" y="272" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="460" y="272" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="470" y="272" width="6" height="4" fill="#00c8ff" opacity="0.3" />
        <rect x="450" y="284" width="6" height="4" fill="#00c8ff" opacity="0.4" />
        <rect x="460" y="284" width="6" height="4" fill="#00c8ff" opacity="0.3" />

        {/* Small buildings in background */}
        <rect x="110" y="350" width="20" height="60" fill="url(#buildingGrad1)" opacity="0.4" rx="1" />
        <rect x="490" y="330" width="25" height="80" fill="url(#buildingGrad1)" opacity="0.4" rx="1" />
        <rect x="520" y="360" width="18" height="50" fill="url(#buildingGrad1)" opacity="0.3" rx="1" />

        {/* Growth arrow */}
        <path
          d="M 140 350 C 180 340, 220 310, 260 280 C 300 250, 340 200, 380 170 C 420 140, 460 100, 500 70"
          stroke="url(#arrowGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Arrow trail glow */}
        <path
          d="M 140 350 C 180 340, 220 310, 260 280 C 300 250, 340 200, 380 170 C 420 140, 460 100, 500 70"
          stroke="#00c8ff"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          opacity="0.15"
        />
        {/* Arrowhead */}
        <polygon
          points="500,70 485,85 495,80 490,95"
          fill="#00c8ff"
          opacity="0.9"
        />
        {/* Arrow glow tip */}
        <circle cx="500" cy="70" r="8" fill="#00c8ff" opacity="0.3" />
        <circle cx="500" cy="70" r="4" fill="#00c8ff" opacity="0.6" />

        {/* Floating data particles */}
        <circle cx="180" cy="280" r="1.5" fill="#00c8ff" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="180" r="1.5" fill="#00c8ff" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="420" cy="130" r="1" fill="#00c8ff" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="240" r="1" fill="#40d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="470" cy="160" r="1.5" fill="#40d4ff" opacity="0.6">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="320" r="1" fill="#00c8ff" opacity="0.4">
          <animate attributeName="opacity" values="0.2;0.6;0.2" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="510" cy="100" r="1" fill="#40d4ff" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
