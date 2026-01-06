import { Calendar, Trophy, TrendingUp, Database } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-zinc-400">HRAI Veri Yönetim Merkezi</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">0</h3>
          <p className="text-sm text-zinc-400">Yarış Günü</p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Trophy className="w-6 h-6 text-secondary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">0</h3>
          <p className="text-sm text-zinc-400">Toplam Koşu</p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">0</h3>
          <p className="text-sm text-zinc-400">Oran Snapshot</p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <Database className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">Aktif</h3>
          <p className="text-sm text-zinc-400">DB Bağlantısı</p>
        </div>
      </div>

      {/* Hızlı Eylemler */}
      <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Hızlı İşlemler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-primary hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left">
            <Calendar className="w-5 h-5 mb-2" />
            <div>Yeni Yarış Günü</div>
            <p className="text-xs opacity-80 mt-1">Hipodrom ve tarih seç</p>
          </button>

          <button className="bg-secondary hover:bg-secondary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left">
            <Trophy className="w-5 h-5 mb-2" />
            <div>Koşu Ekle</div>
            <p className="text-xs opacity-80 mt-1">Yarış gününe koşu ekle</p>
          </button>

          <button className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-left">
            <TrendingUp className="w-5 h-5 mb-2" />
            <div>Oran Yükle</div>
            <p className="text-xs opacity-80 mt-1">OCR ile oran ekle</p>
          </button>
        </div>
      </div>

      {/* Sistem Durumu */}
      <div className="mt-8 bg-zinc-800 rounded-xl border border-zinc-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Sistem Durumu</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Firebase Data Connect</span>
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm rounded-full">
              Yapılandırma Bekleniyor
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Gemini Vision API</span>
            <span className="px-3 py-1 bg-zinc-700 text-zinc-400 text-sm rounded-full">
              Henüz Entegre Değil
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Şema Versiyonu</span>
            <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm rounded-full">
              v1.0.0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
