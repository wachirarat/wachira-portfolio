export default function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 py-2" aria-hidden>
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-emerald-500/40" />
      <span className="h-1.5 w-1.5 rotate-45 border border-emerald-500/60" />
      <span className="h-px w-24 bg-gradient-to-l from-transparent to-emerald-500/40" />
    </div>
  );
}
