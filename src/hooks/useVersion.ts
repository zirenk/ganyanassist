import { useEffect, useState } from 'react';

interface VersionInfo {
  version: string;
  buildDate: string;
  phase: string;
}

export const useVersion = () => {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        // Cache busting için timestamp ekliyoruz
        const timestamp = new Date().getTime();
        const response = await fetch(`/version.json?t=${timestamp}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setVersionInfo(data);
      } catch (err) {
        setError(err as Error);
        console.error('Version fetch error:', err);
      }
    };

    fetchVersion();
  }, []);

  return { versionInfo, error };
};
