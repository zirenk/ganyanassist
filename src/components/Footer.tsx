import { Shield, Zap } from 'lucide-react';

interface FooterProps {
  phase: string;
  buildDate: string;
}

export const Footer = ({ phase, buildDate }: FooterProps) => {
  return (
    <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Sol: Faz Bilgisi */}
          <div className="flex items-center gap-2 text-sm">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-zinc-600 dark:text-zinc-400">
              {phase}
            </span>
          </div>

          {/* Orta: Sıfır Halüsinasyon Garantisi */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
              %100 Matematiksel Tutarlılık
            </span>
          </div>

          {/* Sağ: Build Date */}
          <div className="text-xs text-zinc-500 dark:text-zinc-500">
            Build: {buildDate}
          </div>
        </div>
      </div>
    </footer>
  );
};
