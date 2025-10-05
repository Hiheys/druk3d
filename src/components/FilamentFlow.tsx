export default function FilamentFlow() {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[#ffda75] via-[#e6c05a] to-transparent"
               style={{ animation: 'flowDown 2s linear infinite' }}>
          </div>

          <div className="absolute bottom-8 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-[#ffda75] opacity-50 blur-md"
               style={{ animation: 'pulse 2s ease-in-out infinite' }}>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#ffda75]">
            Ekstrudowanie
          </div>
        </div>
      </div>
    </div>
  );
}
