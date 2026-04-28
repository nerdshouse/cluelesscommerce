export function FlowingLines() {
  const delays = ["0s", "0.3s", "0.6s", "0.9s", "1.2s"];
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-70"
      aria-hidden
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] justify-between overflow-hidden">
        {delays.map((delay) => (
          <div
            key={delay}
            className="flex h-full w-[2px] flex-col items-center overflow-hidden"
            style={{
              borderLeft: "1px dashed #b0ceed",
              borderRight: "1px dashed #b0ceed",
            }}
          >
            <div
              className="flowing-line h-full w-[2px]"
              style={{
                background:
                  "linear-gradient(0deg, #007bff 0%, #7db9fa 35%, #a7cbf2 67%, #d9e9fa 100%)",
                animationDelay: delay,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
