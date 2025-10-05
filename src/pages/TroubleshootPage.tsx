import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import LiquidGlassCard from '../components/LiquidGlassCard';

const troubleshooting = [
  {
    problem: 'Warping (Odkształcanie)',
    description: 'Rogi wydruku unoszą się lub model odkształca się podczas druku',
    solution: 'Zwiększ temperaturę łoża, użyj brim/raft, sprawdź wentylację, wyczyść stół',
    severity: 'high',
    tips: [
      'Użyj kleju w sztyfcie lub lakieru do włosów na stole',
      'Zmniejsz prędkość wentylatorów chłodzących',
      'Rozważ użycie obudowy drukarki'
    ]
  },
  {
    problem: 'Stringing (Ciągnięcie)',
    description: 'Cienkie nitki filamentu między częściami wydruku',
    solution: 'Włącz retrakcję, obniż temperaturę, zwiększ prędkość ruchu',
    severity: 'medium',
    tips: [
      'Zwiększ dystans i prędkość retrakcji',
      'Obniż temperaturę o 5-10°C',
      'Zwiększ prędkość ruchu bez druku'
    ]
  },
  {
    problem: 'Under-extrusion',
    description: 'Widoczne luki i słabe warstwy w wydruku',
    solution: 'Sprawdź czy filament się nie zacina, zwiększ temperaturę, wyczyść dyszę',
    severity: 'high',
    tips: [
      'Sprawdź przepływ filamentu i napięcie ekstrudera',
      'Wyczyść lub wymień dyszę',
      'Zwiększ mnożnik przepływu o 5%'
    ]
  },
  {
    problem: 'Słaba Przyczepność Warstw',
    description: 'Warstwy łatwo się rozdzielają lub pękają',
    solution: 'Zwiększ temperaturę, zmniejsz wysokość warstwy, zwolnij prędkość',
    severity: 'high',
    tips: [
      'Zwiększ temperaturę dyszy o 5-10°C',
      'Zmniejsz wysokość warstwy',
      'Sprawdź czy filament nie jest wilgotny'
    ]
  },
  {
    problem: 'Over-extrusion',
    description: 'Nadmiar materiału, wypukłe ściany, nieczyste krawędzie',
    solution: 'Zmniejsz mnożnik przepływu, obniż temperaturę, skalibruj ekstruder',
    severity: 'medium',
    tips: [
      'Zmniejsz flow rate o 5%',
      'Skalibruj E-steps ekstrudera',
      'Obniż temperaturę o 5°C'
    ]
  },
  {
    problem: 'Elephant Foot',
    description: 'Pierwsza warstwa jest szersza niż pozostałe',
    solution: 'Zmniejsz temperaturę stołu, zwiększ wysokość Z, użyj chamfer',
    severity: 'low',
    tips: [
      'Obniż temperaturę stołu o 5-10°C',
      'Zwiększ offset Z o 0.05mm',
      'Włącz horizontal expansion compensation'
    ]
  },
  {
    problem: 'Clogging (Zapchana dysza)',
    description: 'Filament przestaje wychodzić z dyszy',
    solution: 'Wykonaj cold pull, wyczyść lub wymień dyszę, sprawdź temperaturę',
    severity: 'high',
    tips: [
      'Wykonaj procedurę cold pull',
      'Użyj cleaning filament',
      'Sprawdź czy temperatura jest odpowiednia dla filamentu'
    ]
  },
  {
    problem: 'Layer Shifting',
    description: 'Warstwy są przesunięte względem siebie',
    solution: 'Sprawdź pasy i śruby, zmniejsz prędkość, zwiększ prąd silników',
    severity: 'high',
    tips: [
      'Dokręć pasy i śruby',
      'Zmniejsz prędkość druku i przyspieszenia',
      'Sprawdź czy coś nie blokuje ruchu'
    ]
  }
];

const severityConfig = {
  high: {
    icon: XCircle,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    label: 'Krytyczny'
  },
  medium: {
    icon: AlertTriangle,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    label: 'Średni'
  },
  low: {
    icon: AlertTriangle,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    label: 'Niski'
  }
};

export default function TroubleshootPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-6 py-2 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
            Diagnostyka i Naprawy
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-[#ffda75] to-white bg-clip-text text-transparent">
              Rozwiązywanie Problemów
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Szybkie diagnozy i sprawdzone rozwiązania najczęstszych wyzwań w druku 3D
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-6">
          {troubleshooting.map((item, index) => {
            const config = severityConfig[item.severity as keyof typeof severityConfig];
            const Icon = config.icon;

            return (
              <LiquidGlassCard key={index} className="p-8" hover={false}>
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-4">
                      <h3 className="text-2xl font-bold text-white">{item.problem}</h3>
                      <span className={`
                        inline-flex items-center gap-2 rounded-full
                        ${config.bgColor} ${config.borderColor}
                        border px-3 py-1 text-xs font-medium ${config.color}
                        backdrop-blur-sm
                      `}>
                        <Icon className="h-3.5 w-3.5" />
                        {config.label}
                      </span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                <div className="mb-6 rounded-xl border border-[#ffda75]/20 bg-[#ffda75]/5 p-6 backdrop-blur-sm">
                  <div className="mb-2 flex items-center text-[#ffda75]">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    <span className="font-semibold">Rozwiązanie</span>
                  </div>
                  <p className="text-gray-300">{item.solution}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-4 text-sm font-semibold text-gray-300">Dodatkowe wskazówki:</div>
                  <ul className="space-y-3">
                    {item.tips.map((tip, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <div className="mr-3 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#ffda75]" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </LiquidGlassCard>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <LiquidGlassCard className="mx-auto inline-block p-8" hover={false}>
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-[#ffda75]/10 p-3">
                <CheckCircle className="h-6 w-6 text-[#ffda75]" />
              </div>
              <div className="text-left">
                <div className="mb-1 font-semibold text-white">Potrzebujesz więcej pomocy?</div>
                <div className="text-sm text-gray-400">Dołącz do naszej społeczności i zadaj pytanie ekspertom</div>
              </div>
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </section>
  );
}
