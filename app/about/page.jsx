import Link from "next/link";
import { VALUES } from "@/data/values";
import { DISCORD_INVITE_URL } from "@/data/links";
import ValueCard from "@/components/ValueCard";

export const metadata = {
  title: "About",
  description: "Why PlayersMakingGames exists, our studio values, and our AI-assisted, human-designed development philosophy.",
  keywords: [
    "PlayersMakingGames",
    "PMG",
    "independent game studio",
    "indie card game studio",
    "Focus TCG",
    "Focus ECG",
    "expandable card game",
    "AI-assisted game development",
    "human-designed card game",
    "game studio values",
    "indie game developer",
    "fair card game",
  ],
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-20 sm:pt-24">
          <div className="eyebrow mb-5">About us</div>
          <h1 className="break-words font-display text-2xl font-bold leading-[1.15] text-[var(--parchment)] sm:text-5xl">
            About PlayersMakingGames
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-[var(--parchment-dim)]">
            We build games meant to be mastered: clear rules, real strategy, all shaped by the
            people who actually play them. Focus is where we're starting, and it won't be where
            we stop.
          </p>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 65%)" }}
        />
      </section>

      {/* Why we exist */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="eyebrow">Why we exist</div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--parchment)] sm:text-3xl">
          Most card games ask you to buy blind
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-[0.98rem] leading-relaxed text-[var(--parchment-dim)]">
          <p>
            Randomized packs turn deckbuilding into a lottery, and the strongest decks end up
            belonging to whoever spent the most, not whoever played the best. That's the part of
            traditional trading card games we set out to fix.
          </p>
          <p>
            PlayersMakingGames exists to build the alternative: games where the full card pool is
            knowable from day one, where balance changes are explained instead of buried, and
            where the people actually playing have a real say in where the game goes next. Focus
            is the first proof of that approach, not the only one we plan to build.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5">
        <div className="rule-glow" />
      </div>

      {/* Values */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="eyebrow">What we stand for</div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--parchment)] sm:text-3xl">
          Studio values
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-5">
        <div className="rule-glow" />
      </div>

      {/* Development philosophy */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
        <div className="eyebrow">Studio manifesto</div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--parchment)] sm:text-3xl">
          Our development philosophy
        </h2>
        <p className="mt-5 max-w-[62ch] leading-relaxed text-[var(--parchment-dim)]">
          We believe great games come from human heart and human ingenuity. We embrace modern
          tools to help us work faster and more efficiently, but we hold a firm boundary on
          what those tools are allowed to do.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
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
              <path d="M12 21s-7-4.3-9.5-8.8A5.4 5.4 0 0 1 12 6.4a5.4 5.4 0 0 1 9.5 5.8C19 16.7 12 21 12 21Z" />
            </svg>
            <h3 className="mt-4 font-display text-lg font-semibold text-[var(--parchment)]">Human-Driven</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--parchment-dim)]">
              Every mechanic, card ability, and design choice for Focus is crafted by our team.
              We do not use AI to generate game design or card balance decisions.
            </p>
          </div>
          <div className="panel-cut border border-[var(--neon-purple)]/30 bg-[var(--ash)]/50 p-6">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--neon-purple)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
              <path d="M19.4 13a8 8 0 0 0 0-2l2.1-1.6-2-3.4-2.5 1a8 8 0 0 0-1.7-1L15 3h-4l-.3 2.6a8 8 0 0 0-1.7 1l-2.5-1-2 3.4L6.6 11a8 8 0 0 0 0 2l-2.1 1.6 2 3.4 2.5-1c.5.4 1.1.8 1.7 1L11 21h4l.3-2.6c.6-.2 1.2-.6 1.7-1l2.5 1 2-3.4-2.1-1.6Z" />
            </svg>
            <h3 className="mt-4 font-display text-lg font-semibold text-[var(--parchment)]">AI-Assisted</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--parchment-dim)]">
              We use AI tools for brainstorming (to broaden our own creative ideas), for coding,
              to handle repetitive infrastructure tasks, and for simulating playtest scenarios to
              stress-test our mechanics.
            </p>
          </div>
        </div>

        <p className="mt-8 border-l-2 border-[var(--ember)] pl-5 font-display text-xl text-[var(--parchment)]">
          AI helps us build the tools. We build the game.
        </p>
      </section>

      {/* Community CTA */}
      <section className="border-t border-[var(--line)] bg-[var(--ash)]/40">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
          <div className="eyebrow">Join us</div>
          <h2 className="mt-3 font-display text-2xl font-semibold text-[var(--parchment)] sm:text-3xl">
            Built with our players, not just for them
          </h2>
          <p className="mt-4 max-w-[58ch] leading-relaxed text-[var(--parchment-dim)]">
            Our Discord is where balance discussions happen, bugs get reported first, and the
            roadmap gets shaped by the people actually playing. Come tell us what you'd change.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            {DISCORD_INVITE_URL ? (
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noreferrer"
                className="panel-cut border border-[var(--ember)] bg-[var(--ember)]/15 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--ember-soft)] transition-colors hover:bg-[var(--ember)]/25"
              >
                Join our Discord
              </a>
            ) : (
              <span className="panel-cut border border-[var(--line-strong)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--parchment-faint)]">
                Discord: coming soon
              </span>
            )}
            <Link
              href="/support"
              className="border-b border-[var(--line-strong)] px-1 py-3 text-sm font-medium text-[var(--parchment-dim)] transition-colors hover:border-[var(--parchment)] hover:text-[var(--parchment)]"
            >
              Other ways to reach us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
