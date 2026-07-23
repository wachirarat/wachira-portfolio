import { motion } from 'framer-motion';
import { Github, Mail, ArrowDown, FileText } from 'lucide-react';
import { config } from '../config';
import type { GitHubProfile } from '../hooks/useGitHub';

export default function Hero({ profile }: { profile: GitHubProfile | null }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {profile && (
          <img
            src={profile.avatar_url}
            alt={config.name}
            className="mx-auto mb-6 h-28 w-28 rounded-full border-2 border-emerald-400/60 shadow-lg shadow-emerald-500/25"
          />
        )}
        <p className="font-display mb-3 text-xs tracking-[0.45em] text-emerald-400/90 uppercase">
          Hello, I am
        </p>
        <h1 className="rune-glow mb-4 text-5xl font-bold tracking-tight text-emerald-100 md:text-7xl">
          {config.name}
        </h1>
        <h2 className="mb-6 text-2xl font-medium text-zinc-400 md:text-3xl">
          {config.role}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-zinc-400">{config.tagline}</p>

        <div className="flex items-center justify-center gap-4">
          {profile && (
            <a
              href={profile.html_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-emerald-300/60 bg-gradient-to-b from-emerald-300 to-emerald-500 px-6 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:from-emerald-200 hover:to-emerald-400"
            >
              <Github size={18} /> GitHub
            </a>
          )}
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <FileText size={18} /> Resume
          </a>
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-medium text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <Mail size={18} /> Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-emerald-400/50"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
