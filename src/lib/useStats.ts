'use client';

import { useState, useEffect } from 'react';

// Configurações - repositórios Archbase
const GITHUB_MAIN_REPO = 'edsonmartins/archbase-react';
const GITHUB_REACT_REPO = 'edsonmartins/archbase-react';
const NPM_PACKAGE = '@archbase/core';

// Cache duration: 5 minutos
const CACHE_DURATION = 5 * 60 * 1000;

interface StatsData {
  downloads: string | null;
  stars: string | null;
  forks: string | null;
  version: string | null;
  isLoading: boolean;
}

interface NPMDownloadsResponse {
  downloads: number;
}

interface NPMPackageResponse {
  'dist-tags': {
    latest: string;
  };
}

interface GitHubRepoResponse {
  stargazers_count: number;
  forks_count: number;
  default_branch: {
    name: string;
  };
  open_issues_count: number;
}

interface CachedStats {
  data: StatsData;
  timestamp: number;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return `${num}`;
}

export function useStats(): StatsData {
  const [stats, setStats] = useState<StatsData>({
    downloads: null,
    stars: null,
    forks: null,
    version: null,
    isLoading: true,
  });

  useEffect(() => {
    // Verificar cache
    const getCachedStats = (): CachedStats | null => {
      try {
        const cached = localStorage.getItem('archbase-stats');
        if (cached) {
          const parsed = JSON.parse(cached) as CachedStats;
          const now = Date.now();
          if (now - parsed.timestamp < CACHE_DURATION) {
            return parsed;
          }
        }
      } catch {
        // Ignorar erro de cache
      }
      return null;
    };

    const fetchStats = async () => {
      // Verificar cache primeiro
      const cached = getCachedStats();
      if (cached) {
        setStats(cached.data);
        return;
      }

      let downloads: string | null = null;
      let stars: string | null = null;
      let forks: string | null = null;
      let version: string | null = null;

      // Fetch em paralelo para melhor performance
      const promises = [
        // Buscar downloads do NPM (último mês)
        (async () => {
          try {
            const npmUrl = `https://api.npmjs.org/downloads/point/last-month/${NPM_PACKAGE}`;
            const npmResponse = await fetch(npmUrl);
            if (npmResponse.ok) {
              const npmData = (await npmResponse.json()) as NPMDownloadsResponse;
              if (npmData.downloads > 0) {
                downloads = formatNumber(npmData.downloads);
              }
            }
          } catch {
            // Silencioso
          }
        })(),

        // Buscar versão do NPM
        (async () => {
          try {
            const npmUrl = `https://registry.npmjs.org/${NPM_PACKAGE}`;
            const npmResponse = await fetch(npmUrl);
            if (npmResponse.ok) {
              const npmData = (await npmResponse.json()) as NPMPackageResponse;
              version = npmData['dist-tags'].latest;
            }
          } catch {
            // Silencioso
          }
        })(),

        // Buscar dados do GitHub (estrelas e forks)
        (async () => {
          try {
            const githubUrl = `https://api.github.com/repos/${GITHUB_MAIN_REPO}`;
            const githubResponse = await fetch(githubUrl, {
              headers: {
                'Accept': 'application/vnd.github.v3+json',
              },
            });
            if (githubResponse.ok) {
              const githubData = (await githubResponse.json()) as GitHubRepoResponse;
              if (githubData.stargazers_count >= 0) {
                stars = formatNumber(githubData.stargazers_count);
              }
              if (githubData.forks_count >= 0) {
                forks = formatNumber(githubData.forks_count);
              }
            }
          } catch {
            // Silencioso
          }
        })(),
      ];

      await Promise.all(promises);

      const newStats: StatsData = {
        downloads,
        stars,
        forks,
        version,
        isLoading: false,
      };

      // Salvar no cache
      try {
        localStorage.setItem(
          'archbase-stats',
          JSON.stringify({
            data: newStats,
            timestamp: Date.now(),
          } as CachedStats)
        );
      } catch {
        // Ignorar erro de cache
      }

      setStats(newStats);
    };

    fetchStats();
  }, []);

  return stats;
}
