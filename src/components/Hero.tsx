import { motion } from 'framer-motion';
import { Mail, ArrowDown, FileText } from 'lucide-react';
import { config } from '../config';
import type { GitHubProfile } from '../hooks/useGitHub';

export default function Hero({ profile }: { profile: GitHubProfile | null }) {
  const startYear = Math.min(
    ...config.experience.map((e) => parseInt(e.year, 10))
  );
  const years = new Date().getFullYear() - startYear;
  const companies = config.experience.length;
  const techs = config.skills.length;

  return (
    <section id="home" className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
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
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Available for hire
        </span>
        <p className="mx-auto mb-6 max-w-xl text-zinc-400">{config.tagline}</p>
        <div className="mb-8 flex gap-8">
          <div>
            <div className="text-2xl font-bold text-emerald-400">{years}+</div>
            <div className="text-xs text-zinc-500">Years</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">{companies}</div>
            <div className="text-xs text-zinc-500">Companies</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">{techs}</div>
            <div className="text-xs text-zinc-500">Techs</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full border border-emerald-300/60 bg-gradient-to-b from-emerald-300 to-emerald-500 px-8 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:from-emerald-200 hover:to-emerald-400"
          >
            <Mail size={18} /> Contact me
          </a>
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-8 py-3 font-medium text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <FileText size={18} /> Download Resume
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
