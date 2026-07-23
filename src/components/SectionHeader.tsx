export default function SectionHeader({
  fantasy,
  title,
}: {
  fantasy: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <h3 className="font-display mb-2 text-xs tracking-[0.45em] text-emerald-400/90 uppercase">
        {fantasy}
      </h3>
      <h2 className="text-3xl font-semibold text-zinc-100">{title}</h2>
    </div>
  );
}
