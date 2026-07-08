function ChurnAnalyticsArt() {
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" fill="none">
      {/* Credit card */}
      <rect x="36" y="30" width="88" height="56" rx="8" fill="white" fillOpacity="0.22" />
      <rect x="36" y="42" width="88" height="10" fill="white" fillOpacity="0.35" />
      <rect x="46" y="64" width="30" height="6" rx="3" fill="white" fillOpacity="0.5" />
      <rect x="46" y="74" width="18" height="5" rx="2.5" fill="white" fillOpacity="0.35" />

      {/* Bar chart trending down then recovering */}
      <g fillOpacity="0.85" fill="white">
        <rect x="150" y="60" width="14" height="26" rx="2" />
        <rect x="172" y="45" width="14" height="41" rx="2" />
        <rect x="194" y="66" width="14" height="20" rx="2" />
        <rect x="216" y="72" width="14" height="14" rx="2" />
        <rect x="238" y="52" width="14" height="34" rx="2" />
      </g>

      {/* Trend line */}
      <polyline
        points="157,58 179,70 201,50 223,78 245,40"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="245" cy="40" r="4" fill="white" />

      {/* Risk badge */}
      <rect x="278" y="34" width="86" height="52" rx="10" fill="white" fillOpacity="0.18" />
      <text x="321" y="58" textAnchor="middle" fontSize="18" fontWeight="700" fill="white">16%</text>
      <text x="321" y="72" textAnchor="middle" fontSize="8" fill="white" fillOpacity="0.7">churn rate</text>
    </svg>
  );
}

function StudySmartArt() {
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" fill="none">
      {/* Open book / document */}
      <path d="M40 40 L110 34 L110 88 L40 94 Z" fill="white" fillOpacity="0.22" />
      <path d="M118 34 L188 40 L188 94 L118 88 Z" fill="white" fillOpacity="0.3" />
      {[42, 50, 58, 66, 74].map((y) => (
        <rect key={`l-${y}`} x="50" y={y} width="50" height="3.5" rx="1.75" fill="white" fillOpacity="0.5" />
      ))}
      {[42, 50, 58, 66, 74].map((y) => (
        <rect key={`r-${y}`} x="128" y={y + 2} width="50" height="3.5" rx="1.75" fill="white" fillOpacity="0.45" />
      ))}

      {/* Magnifier over text (retrieval) */}
      <circle cx="230" cy="50" r="20" stroke="white" strokeOpacity="0.9" strokeWidth="3" />
      <line x1="244" y1="64" x2="258" y2="78" stroke="white" strokeOpacity="0.9" strokeWidth="4" strokeLinecap="round" />

      {/* Vector dots (embedding space) */}
      <circle cx="222" cy="44" r="2.5" fill="white" fillOpacity="0.8" />
      <circle cx="234" cy="55" r="2" fill="white" fillOpacity="0.6" />
      <circle cx="226" cy="58" r="1.5" fill="white" fillOpacity="0.5" />

      {/* Chat bubble with spark (AI answer) */}
      <rect x="290" y="60" width="76" height="34" rx="10" fill="white" fillOpacity="0.22" />
      <path d="M300 94 L300 104 L312 94 Z" fill="white" fillOpacity="0.22" />
      <path
        d="M328 68 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z"
        fill="white"
        fillOpacity="0.9"
      />
      <rect x="345" y="73" width="14" height="3" rx="1.5" fill="white" fillOpacity="0.6" />
      <rect x="345" y="80" width="10" height="3" rx="1.5" fill="white" fillOpacity="0.5" />
    </svg>
  );
}

function RecipeHubArt() {
  return (
    <svg viewBox="0 0 400 120" className="h-full w-full" fill="none">
      {/* Plate */}
      <circle cx="90" cy="60" r="42" fill="white" fillOpacity="0.16" />
      <circle cx="90" cy="60" r="28" fill="white" fillOpacity="0.22" />
      <circle cx="90" cy="60" r="14" fill="white" fillOpacity="0.3" />

      {/* Fork */}
      <g stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round">
        <line x1="46" y1="30" x2="46" y2="90" />
        <line x1="40" y1="30" x2="40" y2="44" />
        <line x1="52" y1="30" x2="52" y2="44" />
      </g>
      {/* Knife */}
      <path d="M138 30 L138 90" stroke="white" strokeOpacity="0.85" strokeWidth="3" strokeLinecap="round" />
      <path d="M134 30 Q138 20 142 30 L142 46 L134 46 Z" fill="white" fillOpacity="0.7" />

      {/* Steam */}
      <g stroke="white" strokeOpacity="0.55" strokeWidth="2.5" strokeLinecap="round" fill="none">
        <path d="M78 24 q4 -8 0 -14 q-4 -6 0 -12" />
        <path d="M92 24 q4 -8 0 -14 q-4 -6 0 -12" />
        <path d="M106 24 q4 -8 0 -14 q-4 -6 0 -12" />
      </g>

      {/* Recipe card */}
      <rect x="200" y="28" width="100" height="64" rx="10" fill="white" fillOpacity="0.2" />
      <rect x="214" y="42" width="72" height="6" rx="3" fill="white" fillOpacity="0.55" />
      <rect x="214" y="56" width="56" height="4" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="214" y="65" width="60" height="4" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="214" y="74" width="44" height="4" rx="2" fill="white" fillOpacity="0.4" />
      <path
        d="M275 46 c-3 -4 -9 -1 -9 4 c0 5 9 10 9 10 s9 -5 9 -10 c0 -5 -6 -8 -9 -4z"
        fill="white"
        fillOpacity="0.75"
      />

      {/* Match percentage badge */}
      <rect x="318" y="42" width="52" height="36" rx="9" fill="white" fillOpacity="0.2" />
      <text x="344" y="64" textAnchor="middle" fontSize="15" fontWeight="700" fill="white">92%</text>
      <text x="344" y="74" textAnchor="middle" fontSize="6.5" fill="white" fillOpacity="0.7">match</text>
    </svg>
  );
}

const CASE_STUDY_ART: Record<string, () => JSX.Element> = {
  "credit-card-churn": ChurnAnalyticsArt,
  "study-smart": StudySmartArt,
  recipehub: RecipeHubArt,
};

export default function CaseStudyArt({ id }: { id: string }) {
  const Art = CASE_STUDY_ART[id];
  if (!Art) return null;
  return <Art />;
}
