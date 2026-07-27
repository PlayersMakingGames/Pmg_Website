import Link from "next/link";
import { MONO_ELEMENTS, HYBRID_ELEMENTS } from "@/data/elements";

export const metadata = {
  title: "Games",
  description: "Focus, PlayersMakingGames' flagship Expandable Card Game, plus what's next on the roadmap.",
};

const FEATURES = [
  "Free to play — no randomized packs, ever",
  "117-card pool across 8 elements, fully known from day one",
  "Local hotseat, remote 1v1, and 4–8 player tournaments",
  "Balance evolves through patches, not reprints",
];

function FaceDownSlot({ title, status }) {
  return (
    <div className="panel-cut group relative overflow-hidden border border-[var(--line)] bg-[var(--ash)]/40 p-6">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--parchment) 0px, var(--parchment) 1px, transparent 1px, transparent 14px)",
        }}
      />
      <div className="relative flex h-full flex-col justify-between gap-10">
        <div className="eyebrow text-[var(--parchment-faint)]">{status}</div>
        <div>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--parchment-faint)" strokeWidth="1.3">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M8 4v16" />
          </svg>
          <h3 className="mt-3 font-display text-lg font-semibold text-[var(--parchment-dim)]">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function Games() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Our games</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">Games</h1>
      <p className="mt-4 max-w-[56ch] text-[var(--parchment-dim)]">
        One flagship game, live today, and a roadmap built to hold whatever we make next.
      </p>

      {/* Featured: Focus */}
      <section className="panel-cut mt-12 border border-[var(--ember)]/30 bg-[var(--ash)]/60 p-7 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="panel-cut-sm inline-block border border-[var(--ember)]/50 bg-[var(--ember)]/10 px-3 py-1 font-mono text-xs tracking-wide text-[var(--ember-soft)]">
              FLAGSHIP · ECG
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-[var(--parchment)] sm:text-4xl">Focus</h2>
            <p className="mt-2 text-lg text-[var(--parchment-dim)]">Eight elements. One fair fight.</p>

            <p className="mt-5 leading-relaxed text-[var(--parchment-dim)]">
              Focus is an Expandable Card Game — not a Trading one. There's no randomized pack to
              chase: every card in the 117-card pool is knowable and buildable from the start, so
              matches are decided by deckbuilding and play, not by who bought more boosters.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--parchment-dim)]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.2" className="mt-0.5 shrink-0">
                    <path d="M4 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="panel-cut border border-[var(--ember)] bg-[var(--ember)]/15 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--ember-soft)] transition-colors hover:bg-[var(--ember)]/25"
              >
                Play Now
              </a>
              <a
                href="#"
                className="border-b border-[var(--line-strong)] px-1 py-3 text-sm font-medium text-[var(--parchment-dim)] transition-colors hover:border-[var(--parchment)] hover:text-[var(--parchment)]"
              >
                Read the rulebook →
              </a>
            </div>
          </div>

          <div className="panel-cut border border-[var(--line)] bg-[var(--void)]/50 p-6">
            <div className="eyebrow">Mono elements</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {MONO_ELEMENTS.map((e) => (
                <span
                  key={e.name}
                  title={e.tag}
                  className="panel-cut-sm border border-[var(--line-strong)] bg-[var(--ash)]/70 px-3 py-1.5 text-xs font-medium text-[var(--parchment)]"
                >
                  {e.name}
                </span>
              ))}
            </div>
            <div className="eyebrow mt-5">Hybrid elements</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {HYBRID_ELEMENTS.map((e) => (
                <span
                  key={e.name}
                  title={e.tag}
                  className="panel-cut-sm border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-3 py-1.5 text-xs font-medium text-[var(--parchment)]"
                >
                  {e.name}
                </span>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[var(--parchment-faint)]">
              Start with two mono elements at Onboarding. Unlock the rest — including all three
              hybrids — through the Shop.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mt-20">
        <div className="eyebrow">What's next</div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--parchment)]">In development</h2>
        <p className="mt-3 max-w-[60ch] text-sm text-[var(--parchment-dim)]">
          Focus is the first game, not the only one. Future titles land in this lineup as they
          leave the concepting table.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FaceDownSlot title="Project Two" status="In development" />
          <FaceDownSlot title="Project Three" status="Concepting" />
          <div className="panel-cut flex flex-col items-start justify-center gap-2 border border-dashed border-[var(--line-strong)] p-6">
            <span className="eyebrow">Got an idea?</span>
            <p className="text-sm text-[var(--parchment-dim)]">
              We build with our community. Tell us what you want to see next.
            </p>
            <Link href="/support" className="mt-1 text-sm font-medium text-[var(--ember-soft)] hover:underline">
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
