export default function ValueCard({ value }) {
  return (
    <div className="panel-cut border border-[var(--line)] bg-[var(--ash)]/50 p-6">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {value.icon}
      </svg>
      <h3 className="mt-4 font-display text-lg font-semibold text-[var(--parchment)]">{value.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--parchment-dim)]">{value.body}</p>
    </div>
  );
}
