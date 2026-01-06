import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { ErrorBox } from './components/ErrorBox';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './pages/admin/Dashboard';
import { HipodromsPage } from './pages/admin/Hipodroms';
import { RaceDaysPage } from './pages/admin/RaceDays';
import { RacesPage } from './pages/admin/Races';
import { OddsPage } from './pages/admin/Odds';
import { SettingsPage } from './pages/admin/Settings';
import { useVersion } from './hooks/useVersion';
import { useDarkMode } from './hooks/useDarkMode';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const { versionInfo, error } = useVersion();
  const { isDark, toggleDarkMode } = useDarkMode();
  const [showError, setShowError] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
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
              {error && showError && (
                <ErrorBox error={error} onDismiss={() => setShowError(false)} />
              )}
            </div>
          }
        />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="hipodroms" element={<HipodromsPage />} />
          <Route path="race-days" element={<RaceDaysPage />} />
          <Route path="races" element={<RacesPage />} />
          <Route path="odds" element={<OddsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
