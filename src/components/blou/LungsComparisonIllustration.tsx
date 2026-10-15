/**
 * Original, stylized drawing comparing a healthy lung with a smoker's lung.
 * Simple shapes only: it is an illustration, not a medical image, and the
 * caption says so. Server component (no client JS).
 */

type Palette = {
  tissue: string;
  tissueStroke: string;
  airwayWall: string;
  airwayLumen: string;
  airwayWallWidth: number;
  airwayLumenWidth: number;
  heading: string;
};

const HEALTHY: Palette = {
  tissue: "#f7c5cc",
  tissueStroke: "#e597a3",
  airwayWall: "#e597a3",
  airwayLumen: "#ffffff",
  airwayWallWidth: 8,
  airwayLumenWidth: 5,
  heading: "#0f766e",
};

const SMOKER: Palette = {
  tissue: "#a8afb8",
  tissueStroke: "#6b7280",
  airwayWall: "#4b5563",
  airwayLumen: "#c7ccd2",
  airwayWallWidth: 6,
  airwayLumenWidth: 1.5,
  heading: "#475569",
};

/** Viewer's-left lobe; the right lobe is the same path mirrored. */
const LOBE =
  "M -14,-78 C -30,-100 -92,-74 -104,-6 C -114,52 -104,104 -74,112 C -50,118 -24,104 -14,88 C -10,40 -10,-30 -14,-78 Z";

/** Branching airway tree for one side. */
const AIRWAYS =
  "M 0,-80 L -30,-48 M -30,-48 L -62,-10 M -30,-48 L -40,20 M -62,-10 L -84,30 M -62,-10 L -58,52 M -40,20 L -30,72 M -40,20 L -66,84";

/** Tar deposits on one side (cx, cy, r), mirrored for the other side. */
const TAR_SPOTS: ReadonlyArray<readonly [number, number, number]> = [
  [-80, -30, 4],
  [-92, 10, 3],
  [-70, 44, 5],
  [-50, -60, 3],
  [-88, 66, 4],
  [-46, 94, 3],
  [-24, 40, 2.5],
  [-76, 92, 2.5],
  [-56, 6, 2],
  [-98, 40, 2],
];

/** Mucus plugs sitting in the narrowed airways. */
const MUCUS: ReadonlyArray<readonly [number, number]> = [
  [-46, -29],
  [-73, 10],
  [-35, 46],
];

/** Healthy alveoli: a tight cluster of small, round sacs. */
const HEALTHY_ALVEOLI: ReadonlyArray<readonly [number, number]> = [
  [-22, -24], [-8, -26], [6, -24], [20, -20],
  [-30, -10], [-15, -11], [0, -10], [14, -8], [28, -6],
  [-26, 5], [-11, 4], [4, 5], [19, 7],
  [-20, 19], [-5, 19], [10, 20], [24, 20],
  [-10, 32], [6, 33],
];

/** Damaged alveoli: fewer, larger, merged spaces (emphysema). */
const DAMAGED_ALVEOLI: ReadonlyArray<readonly [number, number, number]> = [
  [-14, -14, 17],
  [16, -10, 14],
  [-6, 18, 15],
  [22, 20, 9],
];

function LungPair({ palette, smoker }: { palette: Palette; smoker: boolean }) {
  const side = (mirror: boolean) => (
    <g transform={mirror ? "scale(-1,1)" : undefined}>
      <path d={LOBE} fill={palette.tissue} stroke={palette.tissueStroke} strokeWidth={2} />
      {smoker
        ? TAR_SPOTS.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#1f2937" opacity={0.6} />
          ))
        : null}
      <path
        d={AIRWAYS}
        fill="none"
        stroke={palette.airwayWall}
        strokeWidth={palette.airwayWallWidth}
        strokeLinecap="round"
      />
      <path
        d={AIRWAYS}
        fill="none"
        stroke={palette.airwayLumen}
        strokeWidth={palette.airwayLumenWidth}
        strokeLinecap="round"
      />
      {smoker
        ? MUCUS.map(([cx, cy]) => (
            <ellipse key={`${cx}-${cy}`} cx={cx} cy={cy} rx={4} ry={3} fill="#c9b458" stroke="#8a7a2e" strokeWidth={0.8} />
          ))
        : null}
    </g>
  );

  return (
    <g transform="translate(150,182)">
      {side(false)}
      {side(true)}
      <rect
        x={-7}
        y={-132}
        width={14}
        height={56}
        rx={6}
        fill={smoker ? "#c7ccd2" : "#ffffff"}
        stroke={palette.airwayWall}
        strokeWidth={smoker ? 4 : 2.5}
      />
    </g>
  );
}

function AlveoliInset({ smoker }: { smoker: boolean }) {
  return (
    <g transform="translate(262,272)">
      <line x1={-40} y1={-40} x2={-24} y2={-24} stroke="#0f766e" strokeWidth={1.5} strokeDasharray="3 3" />
      <circle r={42} fill="#ffffff" stroke="#0f766e" strokeWidth={2} />
      <clipPath id={smoker ? "alv-clip-smoker" : "alv-clip-healthy"}>
        <circle r={39} />
      </clipPath>
      <g clipPath={`url(#${smoker ? "alv-clip-smoker" : "alv-clip-healthy"})`}>
        {smoker ? (
          <>
            <rect x={-42} y={-42} width={84} height={84} fill="#d5d9de" />
            {DAMAGED_ALVEOLI.map(([cx, cy, r]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#f1f3f5" stroke="#4b5563" strokeWidth={1.5} />
            ))}
            <circle cx={-26} cy={6} r={2} fill="#1f2937" opacity={0.7} />
            <circle cx={4} cy={0} r={2.5} fill="#1f2937" opacity={0.7} />
            <circle cx={30} cy={2} r={1.8} fill="#1f2937" opacity={0.7} />
          </>
        ) : (
          <>
            <rect x={-42} y={-42} width={84} height={84} fill="#fbe3e7" />
            {HEALTHY_ALVEOLI.map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={7} fill="#f7c5cc" stroke="#e597a3" strokeWidth={1.2} />
            ))}
          </>
        )}
      </g>
    </g>
  );
}

function Panel({
  title,
  labels,
  smoker,
}: {
  title: string;
  labels: readonly string[];
  smoker: boolean;
}) {
  const palette = smoker ? SMOKER : HEALTHY;
  return (
    <svg
      viewBox="0 0 320 440"
      aria-hidden="true"
      focusable="false"
      className="h-auto w-full rounded-card border border-line bg-surface"
    >
      <text x={160} y={30} textAnchor="middle" fontSize={18} fontWeight={600} fill={palette.heading}>
        {title}
      </text>
      <LungPair palette={palette} smoker={smoker} />
      <AlveoliInset smoker={smoker} />
      <text x={262} y={330} textAnchor="middle" fontSize={11} fill="#31514e">
        Air sacs, magnified
      </text>
      {labels.map((label, i) => (
        <g key={label} transform={`translate(28, ${362 + i * 22})`}>
          <circle cx={0} cy={-4} r={4} fill={smoker ? "#6b7280" : "#e597a3"} />
          <text x={12} y={0} fontSize={14} fill="#0b2f2c">
            {label}
          </text>
        </g>
      ))}
    </svg>
  );
}

const HEALTHY_LABELS = [
  "Pink, healthy tissue",
  "Clear, open airways",
  "Cilia sweep mucus out",
  "Many small, stretchy air sacs",
] as const;

const SMOKER_LABELS = [
  "Grey tissue with tar deposits",
  "Narrowed, inflamed airways",
  "Extra mucus, slowed cilia",
  "Merged air sacs (emphysema)",
] as const;

export function LungsComparisonIllustration({ className = "" }: { className?: string }) {
  return (
    <figure className={`w-full ${className}`.trim()}>
      <div
        role="img"
        aria-label="Illustration comparing healthy lungs with a smoker's lungs. On the left, healthy lungs are pink with wide, open airways, and a magnified view shows many small, round air sacs. On the right, a smoker's lungs are grey with dark tar spots, narrowed airways with mucus, and a magnified view shows fewer, larger, merged air sacs, as seen in emphysema."
        className="grid gap-4 sm:grid-cols-2"
      >
        <Panel title="Healthy lungs" labels={HEALTHY_LABELS} smoker={false} />
        <Panel title="Smoker's lungs" labels={SMOKER_LABELS} smoker />
      </div>
      <figcaption className="mt-3 text-center text-xs text-ink-muted">
        Illustration, not a medical image. Simplified to show the main differences.
      </figcaption>
    </figure>
  );
}
