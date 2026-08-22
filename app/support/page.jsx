import { DISCORD_INVITE_URL } from "@/data/links";

export const metadata = {
  title: "Support",
  description: "Common questions about Focus and PlayersMakingGames, plus how to reach us directly.",
  keywords: [
    "Focus FAQ",
    "Focus TCG help",
    "Focus card game support",
    "Focus rules questions",
    "Focus ECG",
    "PlayersMakingGames support",
    "how to play Focus",
  ],
};

const FAQ = [
  {
    q: "What is Focus?",
    a: "Focus is PlayersMakingGames’ flagship Expandable Card Game (ECG): a fixed, fully-known 88-card pool across five elements, played head-to-head with no randomized packs.",
  },
  {
    q: "Is it actually free?",
    a: "Yes. There’s nothing to buy to compete. Every card is available to build with. The Shop sells cosmetic and quality-of-life items (deck boxes, card sleeves, alternate arts) and additional elements, paid for with Gold you earn by playing.",
  },
  {
    q: "Do I need an account?",
    a: "Yes. Accounts are required to play. Signing up syncs your wallet, unlocked elements, and saved decks across every device you play on, and unlocks Friends, Gift Boxes, and daily quests.",
  },
  {
    q: "How do I play with a friend?",
    a: "Two ways: Local Hotseat, passing one device back and forth, or Remote play, where one player hosts and gets a short code, the other joins with it, and matches sync live across both devices. Best-of-3 two-deck series are supported in both modes.",
  },
  {
    q: "Can I run a tournament?",
    a: "Yes. Tournament Mode supports 4–8 remote players in a single-elimination bracket, where every match is its own Best-of-3 series. Any connected player can start the bracket or advance a finished round, so it doesn’t stall if the organizer disconnects.",
  },
  {
    q: "I found a bug, or a card isn’t working the way it’s printed: where do I report it?",
    a: "Email us at the address below with the card name or a description of what happened. Rules interpretations and known gaps are tracked openly as part of our transparent-development approach.",
  },
];

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Support</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">
        Help &amp; answers
      </h1>
      <p className="mt-4 max-w-[56ch] text-[var(--parchment-dim)]">
        Common questions about Focus and PlayersMakingGames. Can't find what you need? Reach out
        directly below.
      </p>

      <div className="mt-12 flex flex-col divide-y divide-[var(--line)] border-y border-[var(--line)]">
        {FAQ.map((item) => (
          <details key={item.q} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-[var(--parchment)] marker:content-none">
              {item.q}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--ember-soft)"
                strokeWidth="2.2"
                className="shrink-0 transition-transform group-open:rotate-45"
              >
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
            </summary>
            <p className="mt-3 max-w-[62ch] text-[0.95rem] leading-relaxed text-[var(--parchment-dim)]">
              {item.a}
            </p>
          </details>
        ))}
      </div>

      <section className="panel-cut mt-16 border border-[var(--line)] bg-[var(--ash)]/60 p-8">
        <h2 className="font-display text-xl font-semibold text-[var(--parchment)]">Still stuck?</h2>
        <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-[var(--parchment-dim)]">
          Bug reports, balance feedback, or ideas for what we build next: they all reach the
          same small team.
        </p>
        <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <a
            href="mailto:support@mail.pmg.cards"
            className="font-medium text-[var(--ember-soft)] hover:underline"
          >
            support@mail.pmg.cards
          </a>
          {DISCORD_INVITE_URL ? (
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className="font-medium text-[var(--ember-soft)] hover:underline">
              Join our Discord
            </a>
          ) : (
            <span className="text-[var(--parchment-faint)]">Discord community: coming soon</span>
          )}
        </div>
      </section>
    </div>
  );
}
