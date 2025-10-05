export default function PrinterAnimation() {
  return (
    <div className="relative h-64 w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-48 w-48">
          <div className="absolute inset-0 rounded-2xl border-2 border-[#ffda75]/30 bg-gradient-to-br from-[#ffda75]/10 to-transparent backdrop-blur-sm"
               style={{ animation: 'pulse 2s ease-in-out infinite' }}>
          </div>

          <div className="absolute left-1/2 top-8 h-2 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#ffda75] to-[#e6c05a]"
               style={{ animation: 'moveDown 3s ease-in-out infinite' }}>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <div className="h-16 w-20 rounded-lg border-2 border-[#ffda75]/50 bg-gradient-to-t from-[#ffda75]/20 to-transparent"
                 style={{ animation: 'buildUp 3s ease-in-out infinite' }}>
            </div>
          </div>

          <div className="absolute left-4 top-4 h-2 w-2 rounded-full bg-green-400"
               style={{ animation: 'blink 1s ease-in-out infinite' }}>
          </div>
        </div>
      </div>
    </div>
  );
}
