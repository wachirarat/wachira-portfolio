import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, FileText } from 'lucide-react';
import { config } from '../config';
import SectionHeader from './SectionHeader';

export default function Contact() {
  return (
    <section className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeader fantasy="Contact" title="Let's work together" />
        <p className="mb-8 max-w-xl text-zinc-400">
          If you have an opportunity, a project idea, or just want to talk tech,
          feel free to reach out. I reply as fast as I can.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <Mail size={18} /> {config.email}
          </a>
          {config.phone && (
            <a
              href={`tel:${config.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <Phone size={18} /> {config.phone}
            </a>
          )}
          {config.linkedin && (
            <a
              href={config.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          )}
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-zinc-200 transition hover:border-emerald-400 hover:text-emerald-300"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={config.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-emerald-300/60 bg-gradient-to-b from-emerald-300 to-emerald-500 px-6 py-3 font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:from-emerald-200 hover:to-emerald-400"
          >
            <FileText size={18} /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
