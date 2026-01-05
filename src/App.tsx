import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { ErrorBox } from './components/ErrorBox';
import { useVersion } from './hooks/useVersion';
import { useDarkMode } from './hooks/useDarkMode';
import { useState } from 'react';

function App() {
  const { versionInfo, error } = useVersion();
  const { isDark, toggleDarkMode } = useDarkMode();
  const [showError, setShowError] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-900">
      <Header
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        version={versionInfo?.version || 'Loading...'}
      />

      <Landing />

      <Footer
        phase={versionInfo?.phase || 'Loading...'}
        buildDate={versionInfo?.buildDate || 'Unknown'}
      />

      {/* Error Display - Sadece hata varsa göster */}
      {error && showError && (
        <ErrorBox error={error} onDismiss={() => setShowError(false)} />
      )}
    </div>
  );
}

export default App;
