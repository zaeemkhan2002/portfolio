import {
  Bot,
  Cctv,
  Eye,
  Gauge,
  Hand,
  Map as MapIcon,
  Ship,
  ShieldAlert,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/**
 * Templated project cover art.
 *
 * Every project renders from the same layout — blueprint grid, instrument
 * frame, mono labels — so the /projects grid reads as one set. Only two
 * things vary: the glyph (chosen per project below) and a deterministic
 * signal trace seeded from the slug, which keeps the covers from looking
 * literally identical without breaking the template.
 */

const ICONS: Record<string, LucideIcon> = {
  "misleading-thumbnails": Eye,
  "youtube-kids-ad-detection": ShieldCheck,
  "llm-guardrail-red-teaming": ShieldAlert,
  "mobile-robotics-research": Hand,
  "mastani-fetch": Bot,
  "autonomous-trash-skimming-boat": Ship,
  "ai-security-cam": Cctv,
  lumscape: MapIcon,
  "platform-stabilization-imu": Gauge,
};

function seeded(seed: string) {
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
  year,
  variant = "card",
  className = "",
}: {
  seed: string;
  label?: string;
  year?: string;
  variant?: "card" | "hero";
  className?: string;
}) {
  const Icon = ICONS[seed] ?? Bot;
  const rand = seeded(seed);

  const W = 640;
  const H = 360;

  // Low-amplitude trace along the floor — texture, not a chart.
  const points = 30;
  const path: string[] = [];
  for (let i = 0; i < points; i++) {
    const x = (i / (points - 1)) * W;
    const y =
      H * 0.78 -
      Math.sin(i * 0.55 + rand() * 0.5) * H * 0.055 -
      (rand() - 0.5) * H * 0.03;
    path.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`);
  }

  const isHero = variant === "hero";

  return (
    <div
      className={`relative h-full w-full overflow-hidden bg-[#070c15] ${className}`}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${seed}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M32 0H0V32"
              fill="none"
              stroke="rgba(148,178,214,0.12)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id={`glow-${seed}`} cx="30%" cy="28%" r="70%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`glow2-${seed}`} cx="82%" cy="88%" r="60%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width={W} height={H} fill={`url(#grid-${seed})`} />
        <rect width={W} height={H} fill={`url(#glow-${seed})`} />
        <rect width={W} height={H} fill={`url(#glow2-${seed})`} />

        <path
          d={path.join(" ")}
          fill="none"
          stroke="#22d3ee"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* corner reticles */}
        <g stroke="rgba(34,211,238,0.35)" strokeWidth="1.25" fill="none">
          <path d="M16,16 H44 M16,16 V44" />
          <path d={`M${W - 16},16 H${W - 44} M${W - 16},16 V44`} />
          <path d={`M16,${H - 16} H44 M16,${H - 16} V${H - 44}`} />
          <path d={`M${W - 16},${H - 16} H${W - 44} M${W - 16},${H - 16} V${H - 44}`} />
        </g>
      </svg>

      {/* instrument frame + glyph */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={[
            "relative flex items-center justify-center rounded-2xl",
            "border border-cyan-400/25 bg-cyan-400/[0.06]",
            "shadow-[0_0_40px_-8px_rgba(34,211,238,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]",
            "backdrop-blur-[2px]",
            isHero ? "h-28 w-28" : "h-[4.5rem] w-[4.5rem] sm:h-20 sm:w-20",
          ].join(" ")}
        >
          <Icon
            className={isHero ? "h-12 w-12" : "h-8 w-8 sm:h-9 sm:w-9"}
            strokeWidth={1.25}
            color="#67e8f9"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* mono readout */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-3">
        {label && (
          <span className="label text-[10px] text-cyan-300/70">{label}</span>
        )}
        {year && <span className="label text-[10px] text-slate-500">{year}</span>}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
    </div>
  );
}
