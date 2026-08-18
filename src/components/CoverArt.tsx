/**
 * Generated cover art for projects that have no photograph.
 * Deterministic from the slug, so a given project always renders the same
 * plot — a schematic "signal trace" over a blueprint grid.
 */

function hash(seed: string) {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function CoverArt({
  seed,
  label,
  className = "",
}: {
  seed: string;
  label?: string;
  className?: string;
}) {
  const rand = hash(seed);
  const W = 640;
  const H = 360;
  const points = 26;

  // A decaying, noisy trace — reads as sensor data without pretending to be any.
  const path: string[] = [];
  const nodes: { x: number; y: number }[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * W;
    const envelope = Math.exp(-i / (points * 0.55));
    const y =
      H * 0.58 -
      Math.sin(i * 0.72 + rand() * 0.4) * H * 0.26 * envelope -
      (rand() - 0.5) * H * 0.07;
    path.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
    if (i % 5 === 0) nodes.push({ x, y });
  }

  const bars = Array.from({ length: 14 }, () => 0.18 + rand() * 0.82);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-[#070c15] ${className}`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`g-${seed}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id={`f-${seed}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <pattern
            id={`grid-${seed}`}
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="rgba(148,178,214,0.13)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width={W} height={H} fill={`url(#grid-${seed})`} />
        <circle cx={W * 0.16} cy={H * 0.2} r={150} fill="#22d3ee" opacity="0.09" />
        <circle cx={W * 0.86} cy={H * 0.85} r={130} fill="#a78bfa" opacity="0.08" />

        {/* histogram along the floor */}
        {bars.map((v, i) => (
          <rect
            key={i}
            x={22 + i * 44}
            y={H - 26 - v * 62}
            width="9"
            height={v * 62}
            rx="2"
            fill="#22d3ee"
            opacity={0.16 + v * 0.2}
          />
        ))}

        {/* trace */}
        <path
          d={`${path.join(" ")} L${W},${H} L0,${H} Z`}
          fill={`url(#f-${seed})`}
        />
        <path
          d={path.join(" ")}
          fill="none"
          stroke={`url(#g-${seed})`}
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {nodes.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="3.5"
            fill="#05070d"
            stroke="#22d3ee"
            strokeWidth="1.75"
          />
        ))}

        {/* crosshair reticle */}
        <g stroke="rgba(34,211,238,0.4)" strokeWidth="1" fill="none">
          <path d={`M18,18 H46 M18,18 V46`} />
          <path d={`M${W - 18},${H - 18} H${W - 46} M${W - 18},${H - 18} V${H - 46}`} />
        </g>
      </svg>

      <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />

      {label && (
        <span className="label absolute bottom-3 left-4 text-[10px] text-cyan-300/70">
          {label}
        </span>
      )}
    </div>
  );
}
