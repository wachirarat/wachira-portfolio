import { useEffect, useState } from 'react';
import { config } from '../config';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

interface GitHubData {
  profile: GitHubProfile | null;
  repos: Repo[];
  languages: Record<string, number>;
  loading: boolean;
  error: string | null;
}

export function useGitHub(): GitHubData {
  const [data, setData] = useState<GitHubData>({
    profile: null,
    repos: [],
    languages: {},
    loading: true,
    error: null,
  });

  useEffect(() => {
    const user = config.githubUsername;
    if (!user || user === 'YOUR_GITHUB_USERNAME') {
      setData((d) => ({
        ...d,
        loading: false,
        error: 'กรุณาตั้งค่า githubUsername ใน src/config.ts',
      }));
      return;
    }

    const controller = new AbortController();

    async function load() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${user}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=100`, {
            signal: controller.signal,
          }),
        ]);

        if (!profileRes.ok) throw new Error(`GitHub user "${user}" not found`);
        if (!reposRes.ok) throw new Error('Failed to fetch repositories');

        const profile: GitHubProfile = await profileRes.json();
        const allRepos: Repo[] = await reposRes.json();

        const ownRepos = allRepos.filter((r) => !r.fork);

        // Aggregate language usage across repos
        const languages: Record<string, number> = {};
        for (const repo of ownRepos) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] ?? 0) + 1;
          }
        }

        const repos = [...ownRepos]
          .sort(
            (a, b) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
          )
          .slice(0, config.maxRepos);

        setData({ profile, repos, languages, loading: false, error: null });
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        setData((d) => ({ ...d, loading: false, error: (err as Error).message }));
      }
    }

    load();
    return () => controller.abort();
  }, []);

  return data;
}
