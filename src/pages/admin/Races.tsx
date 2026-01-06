import { Trophy } from 'lucide-react';

export const RacesPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Koşular</h1>
        <p className="text-zinc-400">Yarış günlerine ait koşu yönetimi</p>
      </div>

      {/* Placeholder */}
      <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-12 text-center">
        <Trophy className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-zinc-400 mb-2">
          Koşu Yönetimi
        </h3>
        <p className="text-zinc-500 mb-6">
          Bu sayfa FAZ 1.2'de aktif olacak. Yarış günlerine ait koşuları buradan ekleyip yönetebileceksiniz.
        </p>
        <div className="inline-block px-4 py-2 bg-zinc-700 rounded-lg">
          <span className="text-sm text-zinc-400">Yakında...</span>
        </div>
      </div>
    </div>
  );
};
