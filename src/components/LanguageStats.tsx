import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Java: '#b07219',
  'C#': '#178600',
  'C++': '#f34b7d',
  C: '#555555',
  Go: '#00ADD8',
  Rust: '#dea584',
  PHP: '#4F5D95',
  Ruby: '#701516',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Svelte: '#ff3e00',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Dart: '#00B4AB',
  Shell: '#89e051',
};

export default function LanguageStats({
  languages,
  loading,
}: {
  languages: Record<string, number>;
  loading: boolean;
}) {
  const entries = Object.entries(languages).sort((a, b) => b[1] - a[1]);
  const total = entries.reduce((sum, [, count]) => sum + count, 0);

  if (loading || entries.length === 0) return null;

  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="Languages" title="Languages I use" />

        {/* Stacked bar */}
        <div className="mb-6 flex h-3 w-full overflow-hidden rounded-full border border-zinc-800 bg-zinc-950/80">
          {entries.map(([lang, count]) => (
            <motion.div
              key={lang}
              initial={{ width: 0 }}
              whileInView={{ width: `${(count / total) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ backgroundColor: LANGUAGE_COLORS[lang] ?? '#8b8b8b' }}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {entries.map(([lang, count]) => (
            <div key={lang} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: LANGUAGE_COLORS[lang] ?? '#8b8b8b' }}
              />
              <span className="text-zinc-300">{lang}</span>
              <span className="text-zinc-500">{((count / total) * 100).toFixed(0)}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
