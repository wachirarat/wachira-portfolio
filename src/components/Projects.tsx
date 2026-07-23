import { motion } from 'framer-motion';
import { config } from '../config';
import { Star, GitFork, ExternalLink, Github, Loader2 } from 'lucide-react';
import type { Repo } from '../hooks/useGitHub';
import SectionHeader from './SectionHeader';

export default function Projects({
  repos,
  loading,
  error,
}: {
  repos: Repo[];
  loading: boolean;
  error: string | null;
}) {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="Projects" title="Featured work" />
      </motion.div>

      {loading && (
        <div className="flex items-center gap-3 text-zinc-400">
          <Loader2 className="animate-spin" size={20} /> Loading from GitHub...
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
          {error}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-xl border border-zinc-800 bg-zinc-950/70 p-6 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-emerald-400/50 hover:shadow-lg hover:shadow-emerald-500/10"
          >
            <div className="mb-3 flex items-start justify-between">
              <Github size={22} className="text-zinc-500 group-hover:text-emerald-400" />
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <span className="flex items-center gap-1">
                  <Star size={14} /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={14} /> {repo.forks_count}
                </span>
                {repo.homepage && <ExternalLink size={14} />}
              </div>
            </div>
            <h4 className="mb-2 font-semibold text-zinc-100 group-hover:text-emerald-300">
              {repo.name}
            </h4>
            <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
              {config.projectDescriptions[repo.name] ?? repo.description ?? 'No description'}
            </p>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              {repo.language && (
                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-emerald-300">
                  {repo.language}
                </span>
              )}
              {repo.topics.slice(0, 3).map((topic) => (
                <span key={topic} className="rounded-full bg-zinc-800/80 px-2.5 py-1 text-zinc-400">
                  {topic}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
