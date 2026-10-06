import type { ThumbnailType } from "../data/projects";

interface ProjectThumbnailProps {
  type: ThumbnailType;
}

export function ProjectThumbnail({ type }: ProjectThumbnailProps) {
  return (
    <div className="flex h-36 w-full items-center justify-center overflow-hidden border-b border-border bg-accentSoft/50 p-5">
      {type === "infrastructure" && <InfrastructureThumb />}
      {type === "dataQuality" && <DataQualityThumb />}
      {type === "manufacturing" && <ManufacturingThumb />}
      {type === "concorde" && <ConcordeThumb />}
      {type === "drone" && <DroneThumb />}
    </div>
  );
}

function InfrastructureThumb() {
  const gridMarkers = [
    { cx: 34, cy: 38, fill: "#2563EB" },
    { cx: 48, cy: 52, fill: "#6BAA75" },
    { cx: 62, cy: 44, fill: "#E8A838" },
    { cx: 42, cy: 58, fill: "#2563EB" },
    { cx: 56, cy: 34, fill: "#6BAA75" },
  ];

  return (
    <svg viewBox="0 0 220 120" className="h-full w-full max-w-[240px]" aria-hidden>
      <rect x="10" y="12" width="200" height="96" rx="6" fill="#FAFAF8" stroke="#E6E6E2" />
      {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`g-${row}-${col}`}
            x={18 + col * 14}
            y={28 + row * 12}
            width="11"
            height="8"
            rx="1"
            fill="#FFFFFF"
            stroke="#E6E6E2"
            strokeWidth="0.5"
          />
        )),
      )}
      {gridMarkers.map((m, i) => (
        <circle key={i} cx={m.cx} cy={m.cy} r="2.5" fill={m.fill} opacity="0.85" />
      ))}
      {[
        { label: "Lead Time", x: 88, tone: "blue" as const },
        { label: "Active Projects", x: 128, tone: "green" as const },
        { label: "Districts", x: 168, tone: "amber" as const },
      ].map(({ label, x, tone }) => {
        const stroke =
          tone === "blue" ? "#2563EB" : tone === "green" ? "#6BAA75" : "#E8A838";
        const fill =
          tone === "blue" ? "#EAF2FF" : tone === "green" ? "#E8F4EA" : "#FFF4CC";
        return (
          <g key={label}>
            <rect x={x} y="22" width="36" height="22" rx="2" fill="#FFFFFF" stroke="#E6E6E2" />
            <rect x={x + 4} y="28" width="12" height="4" rx="1" fill={fill} stroke={stroke} strokeWidth="0.5" />
            <text
              x={x + 4}
              y="40"
              fill="#666666"
              fontSize="5"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}
      {[
        { label: "Upcoming", x: 88, color: "#2563EB" },
        { label: "In Progress", x: 118, color: "#E8A838" },
        { label: "Completed", x: 158, color: "#6BAA75" },
      ].map(({ label, x, color }) => (
        <g key={label}>
          <circle cx={x} cy="78" r="2" fill={color} />
          <text x={x + 5} y="80" fill="#666666" fontSize="5" fontFamily="Inter, sans-serif">
            {label}
          </text>
        </g>
      ))}
      <line x1="86" y1="72" x2="198" y2="72" stroke="#E6E6E2" strokeWidth="0.75" />
    </svg>
  );
}

function DataQualityThumb() {
  return (
    <svg viewBox="0 0 220 120" className="h-full w-full max-w-[240px]" aria-hidden>
      <rect x="12" y="18" width="62" height="52" rx="3" fill="#FFFFFF" stroke="#E6E6E2" />
      <text x="18" y="30" fill="#666666" fontSize="7" fontFamily="Inter, sans-serif">
        Data Quality
      </text>
      <rect x="18" y="36" width="50" height="8" rx="2" fill="#E6E6E2" />
      <rect x="18" y="36" width="48" height="8" rx="2" fill="#2563EB" opacity="0.35" />
      <rect x="66" y="36" width="2" height="8" rx="1" fill="#E8836A" />
      <text x="18" y="54" fill="#E8836A" fontSize="7" fontFamily="Inter, sans-serif">
        96:4
      </text>
      <rect x="82" y="18" width="62" height="52" rx="3" fill="#FFFFFF" stroke="#E6E6E2" />
      <text x="88" y="30" fill="#666666" fontSize="7" fontFamily="Inter, sans-serif">
        Validation
      </text>
      <text x="88" y="40" fill="#2563EB" fontSize="7" fontFamily="Inter, sans-serif">
        AUC
      </text>
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x={88 + i * 9}
          y={72 - [8, 12, 10, 14, 11][i]}
          width="6"
          height={[8, 12, 10, 14, 11][i]}
          rx="1"
          fill={i === 3 ? "#2563EB" : "#EAF2FF"}
          stroke="#2563EB"
          strokeWidth="0.5"
          opacity={i === 3 ? 0.9 : 0.55}
        />
      ))}
      <rect x="152" y="18" width="56" height="52" rx="3" fill="#FFFFFF" stroke="#E6E6E2" />
      <text x="158" y="30" fill="#666666" fontSize="7" fontFamily="Inter, sans-serif">
        Scorecard
      </text>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={158 + (i % 2) * 22}
          y={36 + Math.floor(i / 2) * 16}
          width="18"
          height="12"
          rx="2"
          fill={i === 0 || i === 2 ? "#E8F4EA" : "#FCEFE8"}
          stroke={i === 0 || i === 2 ? "#6BAA75" : "#E8836A"}
          strokeWidth="0.75"
        />
      ))}
    </svg>
  );
}

function ManufacturingThumb() {
  const bars = [22, 30, 26, 34, 28];
  return (
    <svg viewBox="0 0 220 120" className="h-full w-full max-w-[240px]" aria-hidden>
      <rect x="10" y="12" width="200" height="96" rx="6" fill="#FAFAF8" stroke="#E6E6E2" />
      <text x="18" y="26" fill="#666666" fontSize="6.5" fontFamily="Inter, sans-serif">
        Forecast
      </text>
      <polyline
        points="18,58 32,52 46,54 58,48 70,50"
        fill="none"
        stroke="#2563EB"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="70" y1="50" x2="78" y2="50" stroke="#D1D5DB" strokeWidth="0.9" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={80 + i * 11}
          y={72 - h}
          width="8"
          height={h}
          rx="1"
          fill="#2563EB"
          opacity={0.35 + i * 0.1}
        />
      ))}
      <text x="118" y="26" fill="#666666" fontSize="6.5" fontFamily="Inter, sans-serif">
        Capacity
      </text>
      <rect x="118" y="38" width="36" height="28" rx="2" fill="#FFFFFF" stroke="#E6E6E2" />
      <rect x="122" y="48" width="10" height="12" rx="1" fill="#E8F4EA" stroke="#6BAA75" strokeWidth="0.75" />
      <rect x="134" y="44" width="10" height="16" rx="1" fill="#FFF4CC" stroke="#E8A838" strokeWidth="0.75" />
      <rect x="146" y="50" width="10" height="10" rx="1" fill="#EAF2FF" stroke="#2563EB" strokeWidth="0.75" />
      <text x="162" y="26" fill="#666666" fontSize="6.5" fontFamily="Inter, sans-serif">
        Schedule
      </text>
      <g transform="translate(162, 38)">
        <rect x="0" y="4" width="14" height="10" rx="1.5" fill="#FFFFFF" stroke="#2563EB" strokeWidth="0.75" />
        <circle cx="7" cy="9" r="2.5" fill="#EAF2FF" stroke="#2563EB" strokeWidth="0.75" />
        <rect x="18" y="4" width="14" height="10" rx="1.5" fill="#FFFFFF" stroke="#E6E6E2" strokeWidth="0.75" />
        <circle cx="25" cy="9" r="2.5" fill="#F7F7F5" stroke="#D1D5DB" strokeWidth="0.75" />
        <line x1="14" y1="9" x2="18" y2="9" stroke="#2563EB" strokeWidth="0.8" opacity="0.6" />
        <line x1="7" y1="14" x2="7" y2="20" stroke="#D1D5DB" strokeWidth="0.8" />
        <line x1="25" y1="14" x2="25" y2="20" stroke="#D1D5DB" strokeWidth="0.8" />
        <rect x="2" y="20" width="28" height="6" rx="1" fill="#E6E6E2" opacity="0.6" />
      </g>
      <line x1="18" y1="78" x2="130" y2="78" stroke="#E6E6E2" strokeWidth="0.75" />
      <line x1="136" y1="52" x2="162" y2="52" stroke="#D1D5DB" strokeWidth="0.75" strokeDasharray="2 2" />
    </svg>
  );
}

function ConcordeThumb() {
  const factors = [
    { label: "Cost", x: 28, y: 28, accent: false },
    { label: "Market", x: 168, y: 28, accent: false },
    { label: "Risk", x: 28, y: 88, accent: false },
    { label: "Safety", x: 168, y: 88, accent: true },
  ];

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full max-w-[220px]" aria-hidden>
      <rect x="8" y="8" width="184" height="104" rx="6" fill="#FFFFFF" stroke="#E6E6E2" />
      <path
        d="M52 62 L98 52 L148 58 L98 54 L98 46 L52 62 Z"
        fill="#EAF2FF"
        stroke="#2563EB"
        strokeWidth="1.1"
        opacity="0.85"
      />
      <line x1="98" y1="46" x2="98" y2="68" stroke="#2563EB" strokeWidth="0.75" opacity="0.4" />
      {factors.map(({ label, x, y, accent }) => (
        <g key={label}>
          <line
            x1="98"
            y1="58"
            x2={x}
            y2={y}
            stroke={accent ? "#E8A838" : "#D1D5DB"}
            strokeWidth="0.9"
            opacity={accent ? 0.9 : 0.7}
          />
          <circle
            cx={x}
            cy={y}
            r="4"
            fill={accent ? "#FFF4CC" : "#FFFFFF"}
            stroke={accent ? "#E8A838" : "#2563EB"}
            strokeWidth="1"
            opacity={accent ? 1 : 0.65}
          />
          <text
            x={x}
            y={y + (y < 60 ? -8 : 14)}
            textAnchor="middle"
            fill="#666666"
            fontSize="7"
            fontFamily="Inter, sans-serif"
          >
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

function DroneThumb() {
  const nodes = [
    [28, 72],
    [58, 72],
    [88, 72],
    [118, 72],
    [148, 72],
    [178, 72],
  ];

  return (
    <svg viewBox="0 0 200 120" className="h-full w-full max-w-[220px]" aria-hidden>
      <polyline
        points="88,72 88,48 118,48 118,72"
        fill="none"
        stroke="#E6E6E2"
        strokeWidth="1.25"
      />
      <polyline
        points={nodes.map(([x, y]) => `${x},${y}`).join(" ")}
        fill="none"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.85"
      />
      {nodes.map(([cx, cy], i) => (
        <circle
          key={`cp-${i}`}
          cx={cx}
          cy={cy}
          r="4.5"
          fill={i === 2 || i === 3 ? "#2563EB" : "#EAF2FF"}
          stroke="#2563EB"
          strokeWidth="1.25"
        />
      ))}
    </svg>
  );
}
