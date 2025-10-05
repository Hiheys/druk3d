import { CheckCircle, AlertCircle } from 'lucide-react';
import LiquidGlassCard from '../components/LiquidGlassCard';

const filamentTypes = [
    {
        name: 'PLA',
        temp: '190-220°C',
        bed: '50-60°C',
        price: '30-100 zł/kg',
        pros: [
            'Łatwy w druku',
            'Niska temperatura stołu',
            'Ekologiczny (biodegradowalny w warunkach przemysłowych)',
            'Dostępny w wielu kolorach i odmianach'
        ],
        cons: [
            'Niska odporność na wysoką temperaturę',
            'Dość kruchy',
            'Mniej wytrzymały mechanicznie'
        ],
        uses: 'Figurki i modele kolekcjonerskie, prototypy koncepcyjne, dekoracje i gadżety, części mało obciążone',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'HT-PLA',
        temp: '200-230°C',
        bed: '40-60°C',
        price: '80-120 zł/kg',
        pros: [
            'Drukuje się jak PLA',
            'Po wygrzewaniu odporność cieplna do ~120-150°C',
            'Łatwy w obróbce',
            'Lepsze właściwości mechaniczne niż PLA'
        ],
        cons: [
            'Wymaga wygrzewania (annealing) do pełnych właściwości',
            'Ryzyko deformacji podczas wygrzewania',
            'Nie tak wytrzymały jak materiały inżynierskie'
        ],
        uses: 'Prototypy odporne na ciepło, narzędzia i uchwyty warsztatowe, elementy użytkowe narażone na temperaturę, łatwo drukowalne wytrzymałe części',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'ABS',
        temp: '220-250°C',
        bed: '90-110°C',
        price: '50–90 zł/kg',
        pros: [
            'Dobra odporność mechaniczna i udarowa',
            'Lepsza odporność cieplna niż PLA',
            'Możliwość obróbki chemicznej (aceton)',
            'Stosowany w przemyśle (obudowy, elementy funkcjonalne)'
        ],
        cons: [
            'Silny skurcz i warping',
            'Wymaga obudowy i wentylacji',
            'Emisja nieprzyjemnych oparów',
        ],
        uses: 'Obudowy urządzeń elektronicznych, elementy odporne na udar, części do modeli RC, detale wygładzane acetonem',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'ASA',
        temp: '230-260°C',
        bed: '90-110°C',
        price: '110–170 zł/kg',
        pros: [
            'Odporność na UV i warunki atmosferyczne',
            'Wytrzymałość mechaniczna zbliżona do ABS',
            'Możliwość obróbki chemicznej (aceton)',
            'Dobre do zastosowań outdoor'
        ],
        cons: [
            'Wysoka temperatura druku',
            'Może emitować opary',
            'Wymaga obudowy i stabilnych warunków',
        ],
        uses: 'Elementy montowane na zewnątrz, części do pojazdów narażone na UV, reklamy i oznaczenia outdoorowe, osłony odporne na warunki atmosferyczne',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'PETG',
        temp: '220-250°C',
        bed: '70-80°C',
        price: '85–140 zł/kg',
        pros: [
            'Wytrzymały',
            'Odporny na wilgoć i chemikalia',
            'Dobra elastyczność',
            'Przezroczyste warianty'
        ],
        cons: [
            'Tendencja do nitkowania',
            'Klejący się wydruk (trudniejsze wykończenie)',
        ],
        uses: 'Części użytkowe w domu, pojemniki i elementy kontaktujące się z wodą, mechaniczne elementy o średnich obciążeniach, funkcjonalne prototypy',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'TPU',
        temp: '210-230°C',
        bed: '40-60°C',
        price: '90–150 zł/kg',
        pros: [
            'Elastyczny i gumopodobny',
            'Odporny na uderzenia',
            'Dobra przyczepność warstw',
            'Świetny do elementów amortyzujących'
        ],
        cons: [
            'Trudny w druku (wymaga wolnych prędkości)',
            'Najlepiej działa z ekstruderem direct-drive',
            'Może się rozciągać w podajniku'
        ],
        uses: 'Etui na telefony, uszczelki, amortyzatory, elementy elastyczne',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'PA12-CF15',
        temp: '255-270°C',
        bed: '90-110°C',
        price: '300–400 zł/kg',
        pros: [
            'Bardzo wysoka sztywność i wytrzymałość',
            'Odporność cieplna do ~160–170 °C',
            'Dobra stabilność wymiarowa',
            'Idealny do części inżynierskich'
        ],
        cons: [
            'Bardzo higroskopijny (wymaga suszenia)',
            'Ścierny (wymaga hartowanej dyszy)',
            'Wysoka cena',
            'Wymaga obudowy i wysokich temperatur'
        ],
        uses: 'Części mechaniczne obciążone, elementy konstrukcyjne wysokotemperaturowe, detale inżynierskie zastępujące metal, komponenty w dronach i robotyce',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'PC (Poliwęglan)',
        temp: '260-310°C',
        bed: '100-120°C',
        price: '180–250 zł/kg',
        pros: [
            'Bardzo wytrzymały mechanicznie',
            'Wysoka odporność cieplna (do ~120°C)',
            'Przezroczysty',
            'Stosowany w elementach przemysłowych'
        ],
        cons: [
            'Bardzo trudny w druku (warping)',
            'Wymaga wysokiej temperatury dyszy i komory',
            'Chłonie wilgoć'
        ],
        uses: 'Osłony mechaniczne, elementy przezroczyste, części przemysłowe, prototypy funkcjonalne',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'Nylon (PA6/PA12)',
        temp: '240-270°C',
        bed: '70-100°C',
        price: '150–250 zł/kg',
        pros: [
            'Bardzo wytrzymały i elastyczny',
            'Odporny na ścieranie',
            'Dobra odporność chemiczna',
            'Trwały materiał inżynierski'
        ],
        cons: [
            'Bardzo higroskopijny (konieczne suszenie)',
            'Może się wypaczać',
            'Wymaga wysokiej temperatury'
        ],
        uses: 'Koła zębate, zawiasy, części mechaniczne, elementy zużywające się',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    },
    {
        name: 'PP (Polipropylen)',
        temp: '220-250°C',
        bed: '60-100°C',
        price: '120–160 zł/kg',
        pros: [
            'Lekki',
            'Odporny chemicznie',
            'Półprzezroczysty',
            'Dobra elastyczność'
        ],
        cons: [
            'Trudny w druku (słaba adhezja do stołu)',
            'Wysoki skurcz',
            'Ograniczona dostępność'
        ],
        uses: 'Pojemniki i butelki, zawiasy, elementy odporne chemicznie, prototypy funkcjonalne',
        szpulomat: 'Najlepsza oferta* (szpulomat.pl)'
    }
];

export default function MaterialsPage() {
    return (
        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <div className="mb-6 inline-block rounded-full border border-[#ffda75]/30 bg-[#ffda75]/10 px-6 py-2 text-sm font-medium text-[#ffda75] backdrop-blur-xl">
                        Kompletna baza wiedzy
                    </div>
                    <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                        <span className="bg-gradient-to-r from-white via-[#ffda75] to-white bg-clip-text text-transparent">
                            Materiały do Druku 3D
                        </span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-400">
                        Porównaj właściwości różnych filamentów i wybierz idealny do swojego projektu
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {filamentTypes.map((filament, index) => (
                        <LiquidGlassCard key={index} className="p-8" hover={false}>
                            <div className="mb-6 flex items-start justify-between">
                                <div>
                                    <h3 className="mb-2 text-3xl font-bold text-[#ffda75]">{filament.name}</h3>
                                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                                        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                                            <span className="text-gray-500">Stół:</span> <span className="font-semibold text-white">{filament.bed}</span>
                                        </div>
                                        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-sm">
                                            <span className="text-gray-500">Dysza:</span> <span className="font-semibold text-white">{filament.temp}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                                    <div className="mb-1 text-xs text-gray-400">Cena (+/-)</div>
                                    <div className="text-sm font-bold text-[#ffda75]">{filament.price}</div>
                                </div>
                            </div>

                            <div className="mb-6 grid gap-4 md:grid-cols-2">
                                <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4 backdrop-blur-sm">
                                    <div className="mb-3 flex items-center text-sm font-semibold text-green-400">
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        Zalety
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {filament.pros.map((pro, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-400" />
                                                <span>{pro}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4 backdrop-blur-sm">
                                    <div className="mb-3 flex items-center text-sm font-semibold text-red-400">
                                        <AlertCircle className="mr-2 h-4 w-4" />
                                        Wady
                                    </div>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        {filament.cons.map((con, i) => (
                                            <li key={i} className="flex items-start">
                                                <div className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-400" />
                                                <span>{con}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                                    <div className="mb-2 text-sm font-semibold text-[#ffda75]">Najlepsze Zastosowania</div>
                                    <div className="text-sm leading-relaxed text-gray-400">{filament.uses}</div>
                                </div>

                                <div className="rounded-xl border border-[#ffda75]/20 bg-[#ffda75]/5 p-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-400">Gdzie kupić:</span>
                                        <span className="text-sm font-semibold text-[#ffda75]">{filament.szpulomat}</span>
                                    </div>
                                </div>
                            </div>
                        </LiquidGlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
