import { Moon, Sun, Activity } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  toggleDarkMode: () => void;
  version: string;
}

export const Header = ({ isDark, toggleDarkMode, version }: HeaderProps) => {
  return (
    <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo ve Başlık */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
                HRAI
              </h1>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Horse Racing Analytics Intelligence
              </p>
            </div>
          </div>

          {/* Sağ Taraf: Versiyon ve Dark Mode */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-mono text-zinc-600 dark:text-zinc-400">
              {version}
            </span>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
