import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { config } from '../config';
import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="About" title="Who I am" />
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-zinc-400">
            {config.about.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="flex items-center gap-2 pt-2 text-sm text-emerald-400/80">
              <MapPin size={16} />
              <span>{config.location}</span>
            </div>
          </div>

          <div className="space-y-6">
            {config.experience.map((job, i) => (
              <div
                key={i}
                className="relative rounded-xl border-l-2 border-emerald-500/40 bg-zinc-950/40 p-5 pl-6"
              >
                <span className="absolute -left-[9px] top-6 h-4 w-4 rounded-full border-2 border-black bg-emerald-500" />
                <span className="mb-1 block text-xs font-semibold text-emerald-400/80">
                  {job.year}
                </span>
                <h4 className="mb-1 font-semibold text-zinc-100">{job.title}</h4>
                <p className="mb-2 text-sm text-zinc-500">{job.company}</p>
                <p className="text-sm text-zinc-400">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
