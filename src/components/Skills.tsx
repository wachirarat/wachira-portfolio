import { motion } from 'framer-motion';
import { Database, Network, Code2 } from 'lucide-react';
import { config } from '../config';
import SectionHeader from './SectionHeader';

const FALLBACK_ICONS: Record<string, typeof Code2> = {
  SQL: Database,
  'REST API': Network,
};

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  if (icon) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${icon}`}
        alt=""
        loading="lazy"
        className="h-4 w-4 opacity-90"
      />
    );
  }
  const Fallback = FALLBACK_ICONS[name] ?? Code2;
  return <Fallback size={16} className="text-emerald-400/80" />;
}

export default function Skills() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="Tech Stack" title="Technologies I work with" />
        <div className="flex flex-wrap gap-3">
          {config.skills.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-emerald-400/60 hover:text-emerald-300 hover:shadow-md hover:shadow-emerald-500/10"
            >
              <SkillIcon name={skill.name} icon={skill.icon} />
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
