'use client';
import { useState } from 'react';
import {
  Box,
  Layers,
  Calculator as CalcIcon,
  BookOpen,
  AlertCircle,
  Info,
  CheckCircle,
  ArrowRight,
  Link
} from 'lucide-react';
import LiquidGlassCard from '@/src/components/LiquidGlassCard';
import GlassButton from '@/src/components/GlassButton';
import PrinterAnimation from '@/src/components/PrinterAnimation';
import FilamentFlow from '@/src/components/FilamentFlow';
import Calculator from '@/src/pages/CalculatorPage';
import GuidesSection from '@/src/components/GuidesSection';
import MaterialsPage from '@/src/pages/MaterialsPage';
import TroubleshootPage from '@/src/pages/TroubleshootPage'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      <div className="relative z-10">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 sm:px-6">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveSection('home')}
                className="flex items-center space-x-2 transition-transform hover:scale-105"
              >
                <Box className="h-8 w-8 text-[#ffda75]" />
                <span className="text-xl font-bold">Druk<span className="text-[#ffda75]">3D.pl</span></span>
              </button>
              <nav className="hidden space-x-6 md:flex">
                <button
                  onClick={() => setActiveSection('home')}
                  className={`transition-all ${activeSection === 'home' ? 'text-[#ffda75]' : 'hover:text-[#ffda75]'}`}
                >
                  Start
                </button>
                <button
                  onClick={() => setActiveSection('calculator')}
                  className={`transition-all ${activeSection === 'calculator' ? 'text-[#ffda75]' : 'hover:text-[#ffda75]'}`}
                >
                  Kalkulator
                </button>
                <button
                  onClick={() => setActiveSection('guides')}
                  className={`transition-all ${activeSection === 'guides' ? 'text-[#ffda75]' : 'hover:text-[#ffda75]'}`}
                >
                  Poradniki
                </button>
                <button
                  onClick={() => setActiveSection('materials')}
                  className={`transition-all ${activeSection === 'materials' ? 'text-[#ffda75]' : 'hover:text-[#ffda75]'}`}
                >
                  Materiały
                </button>
                <button
                  onClick={() => setActiveSection('troubleshoot')}
                  className={`transition-all ${activeSection === 'troubleshoot' ? 'text-[#ffda75]' : 'hover:text-[#ffda75]'}`}
                >
                  Problemy
                </button>
              </nav>
            </div>
          </div>
        </header>

        {activeSection === 'home' && (
          <>
            <section className="relative min-h-screen overflow-hidden border-b border-white/10">
              <div className="absolute inset-0" style={{ animation: 'grid-flow 20s linear infinite' }}>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]"></div>
              </div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ffda75] opacity-10 blur-[120px] filter" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
                <div className="absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#e6c05a] opacity-10 blur-[100px] filter" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}></div>
              </div>

              <div className="container relative mx-auto grid min-h-screen grid-cols-1 items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2">
                <div className="relative z-10 space-y-8">
                  <div className="inline-flex items-center space-x-2 rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-4 py-2 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
                    <Layers className="h-4 w-4" />
                    <span>Warstwa po warstwie</span>
                  </div>

                  <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                    Twórz
                    <span className="block bg-gradient-to-r from-[#ffda75] via-[#e6c05a] to-[#ffda75] bg-clip-text text-transparent">
                      Przyszłość
                    </span>
                    <span className="block">Warstwa po Warstwie</span>
                  </h1>

                  <p className="max-w-lg text-lg leading-relaxed text-gray-400">
                    Od pomysłu do rzeczywistości. Kompleksowy przewodnik po druku 3D dla wszystkich - od początkujących po ekspertów.
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <GlassButton variant="primary" onClick={() => setActiveSection('guides')}>
                      Rozpocznij Naukę
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </GlassButton>
                    <GlassButton variant="secondary" onClick={() => setActiveSection('calculator')}>
                      <CalcIcon className="mr-2 h-5 w-5" />
                      Kalkulator
                    </GlassButton>
                  </div>

                  <div className="flex items-center gap-8 pt-4">
                    <div>
                      <div className="text-3xl font-bold text-[#ffda75]">500+</div>
                      <div className="text-sm text-gray-500">Poradników</div>
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <div>
                      <div className="text-3xl font-bold text-[#ffda75]">50k+</div>
                      <div className="text-sm text-gray-500">Użytkowników</div>
                    </div>
                    <div className="h-8 w-px bg-white/10"></div>
                    <div>
                      <div className="text-3xl font-bold text-[#ffda75]">100%</div>
                      <div className="text-sm text-gray-500">Darmowe</div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <LiquidGlassCard className="p-8" hover={false}>
                    <PrinterAnimation />
                    <div className="absolute -right-4 -top-4 rounded-lg border border-white/10 bg-black/80 px-4 py-2 text-sm backdrop-blur-xl">
                      <div className="text-[#ffda75]">Status: Aktywny</div>
                    </div>
                    <div className="absolute -bottom-4 -left-4 rounded-lg border border-white/10 bg-black/80 px-4 py-2 text-sm backdrop-blur-xl">
                      <div className="text-gray-400">Temperatura: 210°C</div>
                    </div>
                  </LiquidGlassCard>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center text-[#ffda75]/60">
                  <div className="mb-1 text-xs">Przewiń w dół</div>
                  <div className="h-6 w-px bg-gradient-to-b from-[#ffda75] to-transparent"></div>
                </div>
              </div>
            </section>

            <section className="relative border-b border-white/10 py-24 sm:py-32">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-16 text-center">
                  <div className="mb-4 inline-block rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-4 py-1 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
                    Funkcje platformy
                  </div>
                  <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Wszystko czego potrzebujesz</h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Kompleksowe narzędzia i wiedza w jednym miejscu
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <LiquidGlassCard className="p-8" onClick={() => setActiveSection('calculator')}>
                    <div className="mb-6 inline-flex rounded-xl bg-[#ffda75]/10 p-4 text-[#ffda75] transition-transform group-hover:scale-110">
                      <CalcIcon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Kalkulator Kosztów</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Precyzyjne obliczenia kosztów druku z uwzględnieniem filamentu, energii i czasu
                    </p>
                  </LiquidGlassCard>

                  <LiquidGlassCard className="p-8" onClick={() => setActiveSection('guides')}>
                    <div className="mb-6 inline-flex rounded-xl bg-[#ffda75]/10 p-4 text-[#ffda75] transition-transform group-hover:scale-110">
                      <BookOpen className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Poradniki</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Szczegółowe przewodniki od podstaw po zaawansowane techniki druku 3D
                    </p>
                  </LiquidGlassCard>

                  <LiquidGlassCard className="p-8" onClick={() => setActiveSection('materials')}>
                    <div className="mb-6 inline-flex rounded-xl bg-[#ffda75]/10 p-4 text-[#ffda75] transition-transform group-hover:scale-110">
                      <Layers className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Baza Materiałów</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Kompendium wiedzy o filamentach, temperaturach i właściwościach
                    </p>
                  </LiquidGlassCard>

                  <LiquidGlassCard className="p-8" onClick={() => setActiveSection('troubleshoot')}>
                    <div className="mb-6 inline-flex rounded-xl bg-[#ffda75]/10 p-4 text-[#ffda75] transition-transform group-hover:scale-110">
                      <AlertCircle className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold">Rozwiązywanie Problemów</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Szybkie diagnozy i rozwiązania najczęstszych wyzwań w druku
                    </p>
                  </LiquidGlassCard>
                </div>
              </div>
            </section>

            <section className="relative border-b border-white/10 py-24 sm:py-32">
              <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-16 text-center">
                  <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Jak działa druk 3D?</h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-400">
                    Poznaj technologię która zmienia sposób tworzenia obiektów
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <LiquidGlassCard className="p-8" hover={false}>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffda75]/10">
                      <Box className="h-8 w-8 text-[#ffda75]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Technologia FDM</h3>
                    <p className="mb-6 leading-relaxed text-gray-400">
                      Roztopiony filament jest precyzyjnie nakładany warstwa po warstwie, budując trójwymiarowy obiekt od podstaw.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#ffda75]" />
                        <span className="text-sm text-gray-400">Przystępna technologia</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#ffda75]" />
                        <span className="text-sm text-gray-400">Szeroki wybór materiałów</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#ffda75]" />
                        <span className="text-sm text-gray-400">Łatwa obsługa</span>
                      </div>
                    </div>
                  </LiquidGlassCard>

                  <LiquidGlassCard className="p-8" hover={false}>
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ffda75]/10">
                      <Info className="h-8 w-8 text-[#ffda75]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold">Parametry Kluczowe</h3>
                    <p className="mb-6 leading-relaxed text-gray-400">
                      Precyzyjna kontrola temperatury, prędkości i wysokości warstw zapewnia idealne rezultaty.
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                        <div className="mb-1 font-semibold text-[#ffda75]">Wysokość Warstwy</div>
                        <div className="text-xs text-gray-500">0.1-0.3mm dla optymalnej jakości</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                        <div className="mb-1 font-semibold text-[#ffda75]">Temperatura</div>
                        <div className="text-xs text-gray-500">190-250°C w zależności od materiału</div>
                      </div>
                    </div>
                  </LiquidGlassCard>

                  <LiquidGlassCard className="p-8" hover={false}>
                    <FilamentFlow />
                    <div className="mt-6">
                      <h3 className="mb-2 text-lg font-bold">Proces Ekstrudowania</h3>
                      <p className="text-sm text-gray-400">
                        Filament jest podgrzewany i precyzyjnie nakładany, tworząc solidne połączenia między warstwami.
                      </p>
                    </div>
                  </LiquidGlassCard>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'calculator' && (
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              <Calculator />
            </div>
          </section>
        )}

        {activeSection === 'guides' && (
          <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
              <GuidesSection />
            </div>
          </section>
        )}

        {activeSection === 'materials' && <MaterialsPage />}

        {activeSection === 'troubleshoot' && <TroubleshootPage />}

        <footer className="border-t border-white/10 bg-black/50 py-8 backdrop-blur-xl">
          <div className="container mx-auto px-4 text-center text-gray-400 sm:px-6">
            <p>&copy; {new Date().getFullYear()} Druk3D.pl - Kompendium wiedzy o druku 3D</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
