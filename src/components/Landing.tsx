import { CheckCircle2, TrendingUp, Shield, Zap } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg">
            <TrendingUp className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            System Online
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Matematiksel tutarlılığa dayalı, halüsinasyonsuz finansal analiz platformu
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Sıfır Halüsinasyon
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Gerçek veriye dayalı, asla tahmin veya uydurma içermeyen analiz
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg mb-4">
              <CheckCircle2 className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Matematiksel Sigorta
            </h3>
            <p className="text-sm text-zinc-600 dark:dark:text-zinc-400">
              Risk algınıza göre optimize edilmiş bahis stratejileri
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
              Gerçek Zamanlı
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Sahada veya ofiste, mobil uyumlu hızlı erişim
            </p>
          </div>
        </div>

        {/* Status Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 dark:bg-primary-900/30 border-2 border-primary rounded-full">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-primary-700 dark:text-primary-400">
              FAZ 0: Altyapı Hazır
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
