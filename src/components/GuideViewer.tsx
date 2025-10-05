import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';

interface GuideViewerProps {
  guideId: string;
  onBack: () => void;
}

const guideMetadata: Record<string, { title: string; readTime: string; category: string }> = {
  'filament-choice': {
    title: 'Wybór Filamentu - Kompletny Przewodnik',
    readTime: '15 min',
    category: 'Podstawy'
  },
  'printer-calibration': {
    title: 'Kalibracja Drukarki 3D',
    readTime: '20 min',
    category: 'Zaawansowane'
  },
  'print-settings': {
    title: 'Optymalizacja Ustawień Druku',
    readTime: '18 min',
    category: 'Porady'
  },
  'troubleshooting': {
    title: 'Rozwiązywanie Problemów',
    readTime: '25 min',
    category: 'Pomoc'
  }
};

const GuideViewer: React.FC<GuideViewerProps> = ({ guideId, onBack }) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGuide = async () => {
      setLoading(true);
      try {
        const response = await fetch(`./src/guides/${guideId}.md`);
        const text = await response.text();
        const html = marked(text);
        setContent(html as string);
      } catch (error) {
        console.error('Error loading guide:', error);
        setContent('<p>Nie udało się załadować poradnika.</p>');
      } finally {
        setLoading(false);
      }
    };

    loadGuide();
  }, [guideId]);

  const metadata = guideMetadata[guideId];

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#ffda75] border-t-transparent mx-auto"></div>
          <p className="text-gray-400">Ładowanie poradnika...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl">
      <button
        onClick={onBack}
        className="mb-6 flex items-center space-x-2 text-[#ffda75] transition-colors hover:text-[#e6c05a]"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Powrót do listy poradników</span>
      </button>

      {metadata && (
        <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="inline-block rounded-lg bg-[#ffda75]/10 px-3 py-1 text-sm font-medium text-[#ffda75]">
              {metadata.category}
            </span>
            <div className="flex items-center text-sm text-gray-400">
              <Clock className="mr-2 h-4 w-4" />
              <span>{metadata.readTime} czytania</span>
            </div>
            <div className="flex items-center text-sm text-gray-400">
              <BookOpen className="mr-2 h-4 w-4" />
              <span>Przewodnik</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">{metadata.title}</h1>
        </div>
      )}

      <article
        className="prose prose-invert max-w-none rounded-xl border border-white/10 bg-white/5 p-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-8 rounded-xl border border-[#ffda75]/30 bg-gradient-to-br from-[#ffda75]/10 to-transparent p-6 text-center">
        <h3 className="mb-2 text-xl font-bold">Czy ten poradnik był pomocny?</h3>
        <p className="mb-4 text-gray-400">
          Masz pytania lub sugestie? Daj nam znać w komentarzach!
        </p>
        <button
          onClick={onBack}
          className="rounded-lg bg-[#ffda75] px-6 py-3 font-medium text-black transition-colors hover:bg-[#e6c05a]"
        >
          Zobacz Więcej Poradników
        </button>
      </div>
    </div>
  );
};

export default GuideViewer;
