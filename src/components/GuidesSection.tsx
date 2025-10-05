import { BookOpen, Layers, Settings, Zap } from 'lucide-react';
import LiquidGlassCard from './LiquidGlassCard';

const guides = [
  {
    icon: BookOpen,
    title: 'Podstawy Druku 3D',
    description: 'Wprowadzenie do technologii FDM, wybór drukarki i pierwszego filamentu',
    level: 'Początkujący',
    duration: '15 min',
    topics: ['Technologia FDM', 'Wybór drukarki', 'Pierwsze kroki',]
  },
  {
    icon: Layers,
    title: 'Optymalizacja Warstw',
    description: 'Jak uzyskać najlepszą jakość wydruku poprzez prawidłowe ustawienia',
    level: 'Średniozaawansowany',
    duration: '20 min',
    topics: ['Wysokość warstwy', 'Prędkość druku', 'Wypełnienie', 'Ściany']
  },
  {
    icon: Settings,
    title: 'Kalibracja Drukarki',
    description: 'Precyzyjna kalibracja stołu, przepływu i temperatur dla idealnych wydruków',
    level: 'Średniozaawansowany',
    duration: '30 min',
    topics: ['Level stołu', 'E-steps', 'PID tuning', 'Offset Z']
  },
  {
    icon: Zap,
    title: 'Zaawansowane Techniki',
    description: 'Multi-material, supporty, mosty i optymalizacja pod konkretne cele',
    level: 'Zaawansowany',
    duration: '45 min',
    topics: ['Multi-color', 'Custom supports', 'Post-processing', 'Optymalizacja']
  }
];

const levelColors = {
  'Początkujący': 'bg-green-500/10 text-green-400 border-green-500/30',
  'Średniozaawansowany': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  'Zaawansowany': 'bg-red-500/10 text-red-400 border-red-500/30'
};

export default function GuidesSection() {
  return (
    <div>
      <div className="mb-12 text-center">
        <div className="mb-6 inline-block rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-6 py-2 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
          Kompletna wiedza
        </div>
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-[#ffda75] to-white bg-clip-text text-transparent">
            Przewodniki i Poradniki
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Od podstaw po zaawansowane techniki - ucz się w swoim tempie
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <LiquidGlassCard key={index} className="p-8">
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-xl bg-[#ffda75]/10 p-4">
                  <Icon className="h-8 w-8 text-[#ffda75]" />
                </div>
                <div className="flex gap-2">
                  <span className={`rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-sm ${levelColors[guide.level as keyof typeof levelColors]}`}>
                    {guide.level}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 backdrop-blur-sm">
                    {guide.duration}
                  </span>
                </div>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-white">{guide.title}</h3>
              <p className="mb-6 leading-relaxed text-gray-400">{guide.description}</p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <div className="mb-3 text-sm font-semibold text-gray-300">Tematy:</div>
                <div className="flex flex-wrap gap-2">
                  {guide.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-[#ffda75]/20 bg-[#ffda75]/5 px-3 py-1 text-xs text-[#ffda75] backdrop-blur-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 py-3 font-semibold text-white backdrop-blur-xl transition-all hover:border-[#ffda75]/30 hover:bg-white/10">
                Rozpocznij naukę
              </button>
            </LiquidGlassCard>
          );
        })}
      </div>
    </div>
  );
}
