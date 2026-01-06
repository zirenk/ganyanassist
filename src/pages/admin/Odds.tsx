import { LineChart } from 'lucide-react';

export const OddsPage = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Oranlar</h1>
        <p className="text-zinc-400">OCR ile oran yükleme ve snapshot yönetimi</p>
      </div>

      {/* Placeholder */}
      <div className="bg-zinc-800 rounded-xl border border-zinc-700 p-12 text-center">
        <LineChart className="w-16 h-16 text-zinc-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-zinc-400 mb-2">
          Oran Yönetimi & OCR
        </h3>
        <p className="text-zinc-500 mb-6">
          Bu sayfa FAZ 1.3'te aktif olacak. Ekran görüntülerini yükleyip Gemini Vision ile oranları otomatik çıkarabileceksiniz.
        </p>
        <div className="space-y-3">
          <div className="inline-block px-4 py-2 bg-zinc-700 rounded-lg">
            <span className="text-sm text-zinc-400">Gemini Vision API Entegrasyonu Bekleniyor</span>
          </div>
          <div className="inline-block px-4 py-2 bg-zinc-700 rounded-lg ml-2">
            <span className="text-sm text-zinc-400">Split-Screen Onay Ekranı</span>
          </div>
        </div>
      </div>
    </div>
  );
};
