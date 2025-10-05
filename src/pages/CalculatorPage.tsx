import { useState } from 'react';
import { Calculator as CalcIcon } from 'lucide-react';
import LiquidGlassCard from '@/src/components/LiquidGlassCard';

export default function Calculator() {
  const [weight, setWeight] = useState('');
  const [pricePerKg, setPricePerKg] = useState('');
  const [printTime, setPrintTime] = useState('');
  const [powerConsumption, setPowerConsumption] = useState('250');
  const [electricityPrice, setElectricityPrice] = useState('0.80');

  const calculateCosts = () => {
    const weightNum = parseFloat(weight) || 0;
    const pricePerKgNum = parseFloat(pricePerKg) || 0;
    const printTimeNum = parseFloat(printTime) || 0;
    const powerNum = parseFloat(powerConsumption) || 0;
    const electricityNum = parseFloat(electricityPrice) || 0;

    const materialCost = (weightNum / 1000) * pricePerKgNum;
    const energyCost = (powerNum / 1000) * printTimeNum * electricityNum;
    const totalCost = materialCost + energyCost;

    return {
      material: materialCost.toFixed(2),
      energy: energyCost.toFixed(2),
      total: totalCost.toFixed(2)
    };
  };

  const costs = calculateCosts();

  return (
    <div className="mx-auto max-w-4xl">
      <div className="mb-12 text-center">
        <div className="mb-6 inline-block rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-6 py-2 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
          Narzędzie kalkulacji
        </div>
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
          <span className="bg-gradient-to-r from-white via-[#ffda75] to-white bg-clip-text text-transparent">
            Kalkulator Kosztów Druku
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-400">
          Oblicz precyzyjnie koszty swojego wydruku z uwzględnieniem materiału i energii
        </p>
      </div>

      <LiquidGlassCard className="p-8" hover={false}>
        <div className="mb-8 flex items-center gap-3">
          <div className="rounded-xl bg-[#ffda75]/10 p-3">
            <CalcIcon className="h-6 w-6 text-[#ffda75]" />
          </div>
          <h3 className="text-2xl font-bold">Parametry wydruku</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Waga filamentu (g)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all focus:border-[#ffda75]/30 focus:outline-none focus:ring-2 focus:ring-[#ffda75]/20"
              placeholder="np. 50"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Cena za kg (zł)
            </label>
            <input
              type="number"
              value={pricePerKg}
              onChange={(e) => setPricePerKg(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all focus:border-[#ffda75]/30 focus:outline-none focus:ring-2 focus:ring-[#ffda75]/20"
              placeholder="np. 80"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Czas druku (h)
            </label>
            <input
              type="number"
              value={printTime}
              onChange={(e) => setPrintTime(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all focus:border-[#ffda75]/30 focus:outline-none focus:ring-2 focus:ring-[#ffda75]/20"
              placeholder="np. 5"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Pobór mocy (W)
            </label>
            <input
              type="number"
              value={powerConsumption}
              onChange={(e) => setPowerConsumption(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all focus:border-[#ffda75]/30 focus:outline-none focus:ring-2 focus:ring-[#ffda75]/20"
              placeholder="np. 250"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Cena prądu (zł/kWh)
            </label>
            <input
              type="number"
              value={electricityPrice}
              onChange={(e) => setElectricityPrice(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white backdrop-blur-xl transition-all focus:border-[#ffda75]/30 focus:outline-none focus:ring-2 focus:ring-[#ffda75]/20"
              placeholder="np. 0.80"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-sm text-gray-400">Koszt materiału</div>
            <div className="text-3xl font-bold text-[#ffda75]">{costs.material} zł</div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-sm text-gray-400">Koszt energii</div>
            <div className="text-3xl font-bold text-[#ffda75]">{costs.energy} zł</div>
          </div>

          <div className="rounded-xl border border-[#ffda75]/30 bg-[#ffda75]/10 p-6 text-center backdrop-blur-sm">
            <div className="mb-2 text-sm text-gray-300">Całkowity koszt</div>
            <div className="text-3xl font-bold text-[#ffda75]">{costs.total} zł</div>
          </div>
        </div>
      </LiquidGlassCard>
    </div>
  );
}
