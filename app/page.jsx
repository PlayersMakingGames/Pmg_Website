import Link from "next/link";
import { NEWS } from "@/data/news";
import { MONO_ELEMENTS } from "@/data/elements";
import { VALUES } from "@/data/values";
import { FOCUS_HUB_PATH } from "@/data/links";
import NewsCard from "@/components/NewsCard";
import ValueCard from "@/components/ValueCard";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col items-start px-5 pb-20 pt-20 sm:pt-28">
          <div className="eyebrow mb-5">PlayersMakingGames</div>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.15] text-[var(--parchment)] sm:text-5xl md:text-6xl">
            Card games worth <span className="text-[var(--ember-soft)]">mastering</span>.
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-[var(--parchment-dim)]">
            We build games meant to be mastered: clear rules, real strategy, all shaped by the
            people who actually play them. Focus is where we're starting, and it won't be where we
            stop.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href={FOCUS_HUB_PATH}
              className="panel-cut border border-[var(--ember)] bg-[var(--ember)]/15 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--ember-soft)] transition-colors hover:bg-[var(--ember)]/25"
            >
              Check it out
            </Link>
            <Link
              href="/games"
              className="border-b border-[var(--line-strong)] px-1 py-3 text-sm font-medium text-[var(--parchment-dim)] transition-colors hover:border-[var(--parchment)] hover:text-[var(--parchment)]"
            >
              See our games →
            </Link>
          </div>
        </div>

        {/* Ambient glow + rule */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--neon-purple), transparent 65%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--ember), transparent 65%)" }}
        />
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">What we stand for</div>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-[var(--parchment)]">
              Studio values
            </h2>
          </div>
          <Link
            href="/about"
            className="hidden shrink-0 text-sm font-medium text-[var(--parchment-dim)] hover:text-[var(--parchment)] sm:block"
          >
            More about us →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {VALUES.map((v) => (
            <ValueCard key={v.title} value={v} />
          ))}
        </div>
        <Link href="/about" className="mt-8 block text-sm font-medium text-[var(--parchment-dim)] hover:text-[var(--parchment)] sm:hidden">
          More about us →
        </Link>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <div className="rule-glow" />
      </div>

      {/* Focus spotlight */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="eyebrow">Flagship game</div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--parchment)] sm:text-4xl">
              Focus
            </h2>
            <p className="mt-5 leading-relaxed text-[var(--parchment-dim)]">
              Focus is where that philosophy gets tested first. Built as an{" "}
              <span className="text-[var(--parchment)]">ECG: an Expandable, not Trading, Card Game</span>
              , Focus throws out the randomized-pack model that makes traditional TCGs expensive
              and uneven, replacing it with one fixed, fully-known 88-card pool across five
              elements that every player can master on equal footing.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--parchment-dim)]">
              It's digital-first by design: real-time Skill resolution, cross-device remote and
              tournament play, and a ruleset that evolves through balance patches instead of
              reprints. Focus is the clearest expression of what PlayersMakingGames is building,
              and the proving ground for every game we make next.
            </p>
            <Link
              href="/games"
              className="mt-6 inline-block border-b border-[var(--line-strong)] py-1 text-sm font-medium text-[var(--parchment)] transition-colors hover:border-[var(--ember-soft)] hover:text-[var(--ember-soft)]"
            >
              Learn more about Focus →
            </Link>
          </div>

          <div className="panel-cut border border-[var(--line)] bg-[var(--ash)]/60 p-7">
            <div className="eyebrow">Five elements, one pool</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {MONO_ELEMENTS.map((e) => (
                <span
                  key={e.name}
                  className="panel-cut-sm border border-[var(--line-strong)] bg-[var(--void)]/60 px-3 py-1.5 text-xs font-medium text-[var(--parchment)]"
                >
                  {e.name}
                </span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[var(--parchment-faint)]">
              No randomized packs. Every card in the pool is knowable from day one.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <div className="rule-glow" />
      </div>

      {/* News teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">From the dev log</div>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[var(--parchment)]">
              Latest updates
            </h2>
          </div>
          <Link
            href="/news"
            className="hidden shrink-0 text-sm font-medium text-[var(--parchment-dim)] hover:text-[var(--parchment)] sm:block"
          >
            All news →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {NEWS.slice(0, 3).map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
        <Link href="/news" className="mt-8 block text-sm font-medium text-[var(--parchment-dim)] hover:text-[var(--parchment)] sm:hidden">
          All news →
        </Link>
      </section>

      {/* CTA band */}
      <section className="border-t border-[var(--line)] bg-[var(--ash)]/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">
              Pick two elements. Start your first match.
            </h2>
            <p className="mt-2 text-[var(--parchment-dim)]">Free to play, no packs to buy.</p>
          </div>
          <Link
            href={FOCUS_HUB_PATH}
            className="panel-cut shrink-0 border border-[var(--ember)] bg-[var(--ember)]/15 px-6 py-3 text-sm font-semibold tracking-wide text-[var(--ember-soft)] transition-colors hover:bg-[var(--ember)]/25"
          >
            Check it out
          </Link>
        </div>
      </section>
    </>
  );
}
