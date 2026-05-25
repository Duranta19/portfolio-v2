export function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  )
}
