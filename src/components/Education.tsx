import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { config } from '../config';
import SectionHeader from './SectionHeader';

export default function Education() {
  return (
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="Education" title="Academic background" />
        <div className="grid gap-5 md:grid-cols-2">
          {config.education.map((edu, i) => (
            <div
              key={i}
              className="flex items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-950/50 p-6 transition hover:border-emerald-400/40"
            >
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="block text-xs font-semibold text-emerald-400/80">
                  {edu.year}
                </span>
                <h4 className="mb-1 text-lg font-semibold text-zinc-100">
                  {edu.degree}
                </h4>
                <p className="text-sm text-zinc-400">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
