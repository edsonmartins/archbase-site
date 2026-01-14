'use client';

import { useState, useEffect } from 'react';

// Configurações
const NPM_PACKAGE = '@archbase/core';
const GITHUB_REPO = 'edsonmartins/archbase-react';
const DOWNLOADS_THRESHOLD = 1000;
const STARS_THRESHOLD = 50;

// Cache duration: 5 minutos
const CACHE_DURATION = 5 * 60 * 1000;

interface StatsData {
  downloads: string | null;
  stars: string | null;
  isLoading: boolean;
}

interface NPMDownloadsResponse {
  downloads: number;
}

interface GitHubRepoResponse {
  stargazers_count: number;
}

interface CachedStats {
  data: StatsData;
  timestamp: number;
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M+`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K+`;
  }
  return `${num}+`;
}

export function useStats(): StatsData {
  const [stats, setStats] = useState<StatsData>({
    downloads: null,
    stars: null,
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

      try {
        // Buscar downloads do NPM (último mês)
        const npmUrl = `https://api.npmjs.org/downloads/point/last-month/${NPM_PACKAGE}`;
        const npmResponse = await fetch(npmUrl);

        if (npmResponse.ok) {
          const npmData = (await npmResponse.json()) as NPMDownloadsResponse;
          if (npmData.downloads >= DOWNLOADS_THRESHOLD) {
            downloads = formatNumber(npmData.downloads);
          }
        }
      } catch {
        // Silencioso - mantém null
      }

      try {
        // Buscar estrelas do GitHub
        const githubUrl = `https://api.github.com/repos/${GITHUB_REPO}`;
        const githubResponse = await fetch(githubUrl);

        if (githubResponse.ok) {
          const githubData = (await githubResponse.json()) as GitHubRepoResponse;
          if (githubData.stargazers_count >= STARS_THRESHOLD) {
            stars = formatNumber(githubData.stargazers_count);
          }
        }
      } catch {
        // Silencioso - mantém null
      }

      const newStats: StatsData = {
        downloads,
        stars,
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
