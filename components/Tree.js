export default function Tree() {
  return (
    <div className="tree-wrap">
      <div className="snow" />
      <svg className="tree-svg" viewBox="0 0 900 1300" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <defs>
          <linearGradient id="trunkWood" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3b2a1b" />
            <stop offset="100%" stopColor="#1f150d" />
          </linearGradient>
          <radialGradient id="pineGlow" cx="50%" cy="0%" r="90%">
            <stop offset="0%" stopColor="#1c3a1f" />
            <stop offset="60%" stopColor="#0f2a16" />
            <stop offset="100%" stopColor="#08170c" />
          </radialGradient>
          <filter id="softLight" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feBlend in="SourceGraphic" in2="blur" mode="screen" />
          </filter>
          <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="45" stdDeviation="38" floodColor="#000" floodOpacity="0.7" />
          </filter>
          <radialGradient id="baubleGold" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#fff2c4" />
            <stop offset="35%" stopColor="#e8c35e" />
            <stop offset="100%" stopColor="#7a5b10" />
          </radialGradient>
          <radialGradient id="baubleRuby" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffd0dc" />
            <stop offset="35%" stopColor="#e5556e" />
            <stop offset="100%" stopColor="#5a1020" />
          </radialGradient>
          <radialGradient id="baubleSapphire" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#d0f2ff" />
            <stop offset="35%" stopColor="#3aa7e0" />
            <stop offset="100%" stopColor="#0a2946" />
          </radialGradient>
          <radialGradient id="lightGlowWarm" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff4d6" stopOpacity="1" />
            <stop offset="100%" stopColor="#ffd166" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="lightGlowCool" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e6f7ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#8bd1ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g filter="url(#dropShadow)">
          <rect x="410" y="1120" width="80" height="140" rx="6" fill="url(#trunkWood)" />

          <g id="star" transform="translate(450,100)">
            <g filter="url(#softLight)">
              <circle cx="0" cy="0" r="48" fill="url(#lightGlowWarm)" opacity="0.9">
                <animate attributeName="opacity" values="0.6;0.95;0.6" dur="3.2s" repeatCount="indefinite" />
              </circle>
            </g>
            <g fill="#e6c979">
              <polygon points="0,-42 8,-8 42,0 8,8 0,42 -8,8 -42,0 -8,-8" />
            </g>
          </g>

          <g id="tier1" transform="translate(450,240)">
            <ellipse cx="0" cy="90" rx="280" ry="120" fill="url(#pineGlow)" />
            <path d="M -260 90 Q 0 -120 260 90 Z" fill="url(#pineGlow)" />
          </g>
          <g id="tier2" transform="translate(450,430)">
            <ellipse cx="0" cy="90" rx="320" ry="135" fill="url(#pineGlow)" />
            <path d="M -300 90 Q 0 -130 300 90 Z" fill="url(#pineGlow)" />
          </g>
          <g id="tier3" transform="translate(450,650)">
            <ellipse cx="0" cy="110" rx="360" ry="160" fill="url(#pineGlow)" />
            <path d="M -340 110 Q 0 -120 340 110 Z" fill="url(#pineGlow)" />
          </g>
          <g id="tier4" transform="translate(450,900)">
            <ellipse cx="0" cy="120" rx="380" ry="170" fill="url(#pineGlow)" />
            <path d="M -360 120 Q 0 -100 360 120 Z" fill="url(#pineGlow)" />
          </g>

          <g id="garlands" stroke="#c9a227" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.75">
            <path d="M120,380 C260,460 640,460 780,380" />
            <path d="M80,610 C240,700 660,700 820,610" />
            <path d="M40,860 C230,950 670,950 860,860" />
          </g>

          <g id="baubles">
            <circle cx="260" cy="370" r="18" fill="url(#baubleGold)" />
            <circle cx="640" cy="360" r="16" fill="url(#baubleRuby)" />
            <circle cx="210" cy="600" r="20" fill="url(#baubleSapphire)" />
            <circle cx="710" cy="590" r="17" fill="url(#baubleGold)" />
            <circle cx="170" cy="850" r="22" fill="url(#baubleRuby)" />
            <circle cx="750" cy="840" r="19" fill="url(#baubleSapphire)" />
            <circle cx="450" cy="500" r="16" fill="url(#baubleGold)" />
            <circle cx="530" cy="760" r="18" fill="url(#baubleRuby)" />
            <circle cx="370" cy="920" r="18" fill="url(#baubleGold)" />
          </g>

          <g id="stringLightsWarm" opacity="0.95">
            <g>
              <circle cx="180" cy="420" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="260" cy="440" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="340" cy="455" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" begin="0.8s" repeatCount="indefinite" />
              </circle>
              <circle cx="420" cy="460" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.7s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="500" cy="455" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="580" cy="440" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="0.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="660" cy="420" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin="0.7s" repeatCount="indefinite" />
              </circle>
            </g>
            <g>
              <circle cx="150" cy="660" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.8s" begin="0.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="240" cy="680" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.3s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="330" cy="700" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="420" cy="710" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.9s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="510" cy="700" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="600" cy="680" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin="0.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="690" cy="660" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" begin="0.8s" repeatCount="indefinite" />
              </circle>
            </g>
            <g>
              <circle cx="110" cy="900" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="220" cy="920" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.1s" begin="0.4s" repeatCount="indefinite" />
              </circle>
              <circle cx="330" cy="940" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.7s" begin="0.6s" repeatCount="indefinite" />
              </circle>
              <circle cx="440" cy="950" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.2s" begin="0.1s" repeatCount="indefinite" />
              </circle>
              <circle cx="550" cy="940" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.4s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="660" cy="920" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.6s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              <circle cx="770" cy="900" r="4" fill="#ffd166">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="2.9s" begin="0.7s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>

          <g id="lightGlows">
            <circle cx="180" cy="420" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="260" cy="440" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="340" cy="455" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="420" cy="460" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="500" cy="455" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="580" cy="440" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="660" cy="420" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />

            <circle cx="150" cy="660" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="240" cy="680" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="330" cy="700" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="420" cy="710" r="22" fill="url(#lightGlowWarm)" opacity="0.8" />
            <circle cx="510" cy="700" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="600" cy="680" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="690" cy="660" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />

            <circle cx="110" cy="900" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="220" cy="920" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="330" cy="940" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="440" cy="950" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="550" cy="940" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
            <circle cx="660" cy="920" r="22" fill="url(#lightGlowWarm)" opacity="0.6" />
            <circle cx="770" cy="900" r="22" fill="url(#lightGlowWarm)" opacity="0.7" />
          </g>
        </g>
      </svg>
    </div>
  );
}
