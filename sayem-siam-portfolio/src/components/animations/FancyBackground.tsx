"use client"

import { useReducedMotion } from "@/src/hooks"

function cssAnim(duration: number, delay: number, name: string) {
  return {
    animation: `${name} ${duration}s ease-in-out ${delay}s infinite`,
  } as React.CSSProperties
}

export function FancyBackground() {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -left-[15%] -top-[20%] rounded-full opacity-15 blur-2xl will-change-transform"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle at center, #3b82f6, transparent)",
          ...cssAnim(18, 0, "float-a"),
        }}
      />
      <div
        className="absolute -bottom-[20%] -right-[10%] rounded-full opacity-15 blur-2xl will-change-transform"
        style={{
          width: 450,
          height: 450,
          background:
            "radial-gradient(circle at center, #f97316, transparent)",
          ...cssAnim(22, 3, "float-b"),
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 rounded-full opacity-10 blur-2xl will-change-transform"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle at center, #8b5cf6, transparent)",
          ...cssAnim(16, 6, "float-c"),
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(0,0,0,0.3) 0.5px, transparent 0.5px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <style>{`
        @keyframes float-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -60px) scale(1.1); }
          50% { transform: translate(-40px, 50px) scale(0.95); }
          75% { transform: translate(50px, -30px) scale(1.05); }
        }
        @keyframes float-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-70px, 50px) scale(1.08); }
          50% { transform: translate(60px, -40px) scale(0.92); }
          75% { transform: translate(-30px, 60px) scale(1.03); }
        }
        @keyframes float-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 40px) scale(1.05); }
          50% { transform: translate(-60px, -50px) scale(0.95); }
          75% { transform: translate(40px, -30px) scale(1.02); }
        }
      `}</style>
    </div>
  )
}
