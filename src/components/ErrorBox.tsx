import { AlertTriangle, Copy, X } from 'lucide-react';
import { useState } from 'react';

interface ErrorBoxProps {
  error: Error;
  onDismiss?: () => void;
}

export const ErrorBox = ({ error, onDismiss }: ErrorBoxProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const errorText = `Error: ${error.message}\nStack: ${error.stack || 'N/A'}`;
    navigator.clipboard.writeText(errorText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-4 right-4 max-w-md w-full bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg shadow-lg z-50">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <h3 className="font-bold text-red-800 dark:text-red-300">
              Sistem Hatası
            </h3>
          </div>
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Error Message */}
        <div className="bg-red-100 dark:bg-red-950/50 rounded p-3 mb-3">
          <p className="text-sm font-mono text-red-900 dark:text-red-200 break-words">
            {error.message}
          </p>
        </div>

        {/* Stack Trace (collapsed) */}
        {error.stack && (
          <details className="mb-3">
            <summary className="text-xs text-red-700 dark:text-red-400 cursor-pointer hover:underline">
              Stack Trace
            </summary>
            <pre className="mt-2 text-xs font-mono text-red-800 dark:text-red-300 bg-red-100 dark:bg-red-950/50 p-2 rounded overflow-x-auto">
              {error.stack}
            </pre>
          </details>
        )}

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
        >
          <Copy className="w-4 h-4" />
          <span className="text-sm font-medium">
            {copied ? 'Kopyalandı!' : 'Hatayı Kopyala'}
          </span>
        </button>
      </div>
    </div>
  );
};
