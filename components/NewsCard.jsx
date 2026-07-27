function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsCard({ item, expanded = false }) {
  return (
    <article className="panel-cut border border-[var(--line)] bg-[var(--ash)]/60 p-6 transition-colors hover:border-[var(--line-strong)]">
      <div className="font-mono text-xs tracking-wide text-[var(--parchment-faint)]">{formatDate(item.date)}</div>
      <h3 className="mt-2 font-display text-xl font-semibold text-[var(--parchment)]">{item.title}</h3>
      {expanded ? (
        <div className="mt-3 flex flex-col gap-3">
          {item.body.map((p, i) => (
            <p key={i} className="text-[0.95rem] leading-relaxed text-[var(--parchment-dim)]">
              {p}
            </p>
          ))}
        </div>
      ) : (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--parchment-dim)]">{item.excerpt}</p>
      )}
    </article>
  );
}
