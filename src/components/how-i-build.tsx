"use client";

import { useState } from "react";

const steps = [
  { num: "01", title: "Understand" },
  { num: "02", title: "Define" },
  { num: "03", title: "Prototype" },
  { num: "04", title: "Design the System" },
  { num: "05", title: "Build" },
  { num: "06", title: "Validate" },
  { num: "07", title: "Ship" },
  { num: "08", title: "Improve" },
];

export function HowIBuild() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="build" className="max-w-6xl mx-auto px-6 md:px-10 py-16">
      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest mb-4">
        How I Build
      </p>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
        <h2 className="text-[40px] md:text-[52px] font-black tracking-tighter leading-[0.92] text-foreground">
          How I think
          <br />
          <span className="text-foreground/30">through a product.</span>
        </h2>
        <p className="text-sm text-muted-foreground max-w-xs shrink-0 md:text-right leading-relaxed">
          Eight steps, roughly in order. The loop at the end is the part most
          people skip.
        </p>
      </div>
      <div className="w-full overflow-x-auto rounded-2xl border border-border">
        <div className="min-w-[700px]">
          <svg
            viewBox="0 0 760 420"
            className="w-full"
            style={{ height: "420px", fontFamily: "inherit", display: "block" }}
          >
            <defs>
              <pattern id="lldots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.75" fill="#ebebeb" />
              </pattern>
              <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0.5 L3,3 L0,5.5" fill="none" stroke="#c4c4c4" strokeWidth="1" />
              </marker>
              <marker id="arr-rev" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto-start-reverse">
                <path d="M0,0.5 L3,3 L0,5.5" fill="none" stroke="#c4c4c4" strokeWidth="1" />
              </marker>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#000000" floodOpacity="0.18" />
              </filter>
            </defs>
            <rect width="760" height="420" fill="url(#lcdots)" rx="16" />
            {/* Arrows */}
            <line x1="187" y1="93" x2="197" y2="93" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <line x1="364" y1="93" x2="374" y2="93" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <line x1="541" y1="93" x2="551" y2="93" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <path d="M 716 93 L 742 93 Q 752 93 752 103 L 752 313 Q 752 323 742 323 L 716 323" fill="none" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <line x1="551" y1="323" x2="541" y2="323" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <line x1="374" y1="323" x2="364" y2="323" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <line x1="197" y1="323" x2="187" y2="323" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#arr)" />
            <path d="M 22 323 L 10 323 Q 2 323 2 313 L 2 103 Q 2 93 10 93 L 22 93" fill="none" stroke="#c8c8c8" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.45" markerEnd="url(#arr)" />
            <text x="4" y="212" fontSize="7" fontFamily="monospace" fill="#bbb" textAnchor="middle" transform="rotate(-90, 4, 208)">
              iterate
            </text>
            {/* Step cards */}
            {steps.map((step, i) => {
              const isTop = i < 4;
              const col = isTop ? i : 7 - i;
              const x = 22 + col * 177;
              const y = isTop ? 28 : 258;
              const isHovered = hovered === i;
              return (
                <g
                  key={step.num}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <rect x={x} y={y} width="163" height="130" rx="6" fill={isHovered ? "#f8f8f8" : "#ffffff"} stroke={isHovered ? "#d0d0d0" : "#e2e2e2"} strokeWidth="1" opacity="1" style={{ transition: "fill 0.2s, opacity 0.2s" }} />
                  <rect x={x} y={y} width="3" height="130" rx="2" fill={isHovered ? "#c8c8c8" : "#e2e2e2"} opacity="1" style={{ transition: "fill 0.2s" }} />
                  <text x={x + 157} y={y + 132} fontSize="72" fontWeight="900" textAnchor="end" fill="rgba(0,0,0,0.04)" style={{ userSelect: "none", transition: "fill 0.2s" }} opacity="1">
                    {step.num}
                  </text>
                  <text x={x + 13} y={y + 20} fontSize="8.5" fontFamily="monospace" fill={isHovered ? "#888" : "#bbb"} style={{ transition: "fill 0.2s" }} opacity="1">
                    {step.num}
                  </text>
                  <text x={x + 13} y={y + 72} fontSize="12" fontWeight="700" fill={isHovered ? "#000" : "#111"} style={{ transition: "all 0.2s", letterSpacing: "0.01em" }} opacity="1">
                    {step.title}
                  </text>
                </g>
              );
            })}
            <text x="744" y="408" fontSize="8" fontFamily="monospace" fill="#c4c4c4" textAnchor="end">
              hover any step to read it
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
