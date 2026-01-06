import { Settings as SettingsIcon, Database, Key, Bell } from 'lucide-react';
import { useVersion } from '../../hooks/useVersion';

export const SettingsPage = () => {
  const { versionInfo } = useVersion();
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Ayarlar</h1>
        <p className="text-zinc-400">Sistem yapılandırması ve entegrasyonlar</p>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Firebase Data Connect */}
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Firebase Data Connect</h3>
              <p className="text-xs text-zinc-500">PostgreSQL bağlantı durumu</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">Bağlantı Durumu</span>
              <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs rounded-full">
                Aktif
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">Şema Versiyonu</span>
              <span className="text-sm text-white font-mono">v1.0.0</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Cloud SQL Instance</span>
              <span className="text-sm text-green-400">ganyanassist-instance (europe-west9)</span>
            </div>
          </div>
        </div>

        {/* Gemini Vision API */}
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
              <Key className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Gemini Vision API</h3>
              <p className="text-xs text-zinc-500">OCR servis bağlantısı</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">API Durumu</span>
              <span className="px-3 py-1 bg-zinc-700 text-zinc-400 text-xs rounded-full">
                Henüz Entegre Değil
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">API Key</span>
              <span className="text-sm text-zinc-500">Ayarlanmadı</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Model</span>
              <span className="text-sm text-zinc-500">gemini-2.0-flash-exp</span>
            </div>
          </div>
        </div>

        {/* Bildirimler */}
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <Bell className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Bildirimler</h3>
              <p className="text-xs text-zinc-500">Sistem uyarıları</p>
            </div>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Oran değişikliği bildirimleri</span>
              <input type="checkbox" className="w-4 h-4" disabled />
            </label>
            <label className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Koşu başlangıç bildirimleri</span>
              <input type="checkbox" className="w-4 h-4" disabled />
            </label>
            <label className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Sistem hata bildirimleri</span>
              <input type="checkbox" className="w-4 h-4" defaultChecked disabled />
            </label>
          </div>
        </div>

        {/* Sistem Bilgisi */}
        <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-700 flex items-center justify-center">
              <SettingsIcon className="w-5 h-5 text-zinc-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Sistem Bilgisi</h3>
              <p className="text-xs text-zinc-500">Versiyon ve build</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">Uygulama Versiyonu</span>
              <span className="text-sm text-white font-mono">v{versionInfo?.version || '0.0.4'}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-zinc-700">
              <span className="text-sm text-zinc-400">Mevcut Faz</span>
              <span className="text-sm text-white">{versionInfo?.phase || 'FAZ 1: Veri Yönetimi'}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-zinc-400">Build Tarihi</span>
              <span className="text-sm text-zinc-400">{versionInfo?.buildDate || '2026-01-05'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 bg-zinc-800 rounded-xl border border-zinc-700 p-6">
        <h3 className="text-lg font-bold text-white mb-4">Tehlikeli Bölge</h3>
        <div className="flex gap-4">
          <button
            disabled
            className="px-6 py-3 bg-zinc-700 text-zinc-500 rounded-lg cursor-not-allowed"
          >
            Veritabanını Sıfırla
          </button>
          <button
            disabled
            className="px-6 py-3 bg-zinc-700 text-zinc-500 rounded-lg cursor-not-allowed"
          >
            Önbelleği Temizle
          </button>
        </div>
        <p className="text-xs text-zinc-600 mt-4">
          Bu işlemler şu anda devre dışı. Aktivasyon için sistem yöneticisiyle iletişime geçin.
        </p>
      </div>
    </div>
  );
};
