import SeasonalHighlights from './SeasonalHighlights';
import { SparklesIcon } from 'lucide-react';

export default function Available() {
  return (
    <main className="min-h-screen bg-[#FDF6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <p className="text-[#E4A08C] font-medium flex items-center justify-center gap-2 mb-4">
            <SparklesIcon className="w-5 h-5 text-black" />
            SPOTLIGHT
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-4 text-black">Explore Our</h1>
          <p className="text-4xl md:text-6xl font-serif italic text-[#E4A08C]">
            Seasonal Highlights
          </p>
        </div>
        <SeasonalHighlights />
      </div>
    </main>
  );
}