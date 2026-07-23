import { Github, Mail } from 'lucide-react';
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 text-center">
        <div className="flex gap-5">
          <a
            href={`https://github.com/${config.githubUsername}`}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 transition hover:text-emerald-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${config.email}`}
            className="text-zinc-500 transition hover:text-emerald-300"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} {config.name} — Built with React, Vite & TailwindCSS
        </p>
      </div>
    </footer>
  );
}
