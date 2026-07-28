export const metadata = {
  title: "How to Play",
  description: "Learn the rules of Focus: turn structure, zones, Skills, Rally cards, and how to win.",
};

const PHASES = [
  {
    name: "Gather",
    text: "At the start of each of your turns you automatically draw back up to your minimum hand size (5 cards by default).",
  },
  {
    name: "Focus",
    text: "Cards from the top of your deck are automatically added to your Focus zone. How many is printed on your Leader — this is the resource you'll tap to pay costs.",
  },
  {
    name: "Main",
    text: "The bulk of the turn. Play Units by paying their Focus cost, play Skills under your Units, cast Skills you've already played, set Skills face-down, play a Rally card under your Leader, and activate abilities.",
  },
  {
    name: "Return",
    text: "End your turn. Everything face-up you didn't spend — cast Skills, used Focus, an uncast Rally card — sweeps to the Drop pile. Only face-down cards stay in play for next turn.",
  },
];

const ZONES = [
  {
    name: "Leader",
    text: "Your Element's champion. Sets your Focus generation, carries a per-turn activated ability, and is what your opponent is really trying to kill.",
  },
  {
    name: "Focus",
    text: "Your resource. Tap Focus cards to pay for Units, Skills, and abilities.",
  },
  {
    name: "Units",
    text: "Played to a lane for a Focus cost. Each carries a Skill Zone underneath it.",
  },
  {
    name: "Skills",
    text: "Go three stages: Play (free, face-up under a Unit), Cast (pay its cost), Resolve (its effect happens). Any Skill can instead be set face-down to hide it — your opponent can't tell what it is until you cast it, it resolves, or it's revealed.",
  },
  {
    name: "Standby Skills",
    text: "A special kind of Skill that reacts to something your opponent does — always played face-down. It sits hidden until its trigger condition happens, then you choose whether to pay its cost and react. You never cast it yourself.",
  },
  {
    name: "Rally",
    text: "Works like a Skill, but plays under your Leader instead of a Unit.",
  },
  {
    name: "Drop Pile & Oblivion",
    text: "Spent, face-up cards land in your Drop pile at Return. Cards removed from the game entirely go to Oblivion instead.",
  },
];

const SKILL_STAGES = [
  { name: "Play", text: "Place a Skill under one of your Units. Always free." },
  { name: "Cast", text: "Pay the Skill's Focus cost to activate it." },
  {
    name: "Resolve",
    text: "Its effect happens. An untargeted attack hits whatever sits directly across it — the enemy unit in the same lane, or their Leader if that lane is empty.",
  },
];

const WATCH_FOR = [
  {
    name: "Surge",
    text: "A passive bonus that switches on for any card at 25 HP or less — a reward for playing on when you're behind.",
  },
  {
    name: "Regen",
    text: "If you ever have to draw or gain Focus with an empty deck, your Drop pile shuffles back in as your new deck — but your Leader takes 5 damage each time. It keeps you in the game, but it isn't free.",
  },
];

export default function HowToPlay() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Learn to play</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">How to Play</h1>
      <p className="mt-4 max-w-[56ch] text-[var(--parchment-dim)]">
        Focus is a head-to-head Expandable Card Game. Reduce your opponent's Leader to 0 HP
        before they do the same to you. Matches are best-of-3.
      </p>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">The turn structure</h2>
        <p className="mt-2 text-sm text-[var(--parchment-dim)]">Every turn moves through four phases, in order:</p>
        <ol className="mt-6 flex flex-col gap-5">
          {PHASES.map((phase, i) => (
            <li key={phase.name} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--ember)]/50 font-mono text-sm font-semibold text-[var(--ember-soft)]">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display font-semibold text-[var(--parchment)]">{phase.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--parchment-dim)]">{phase.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="mt-14">
        <div className="rule-glow" />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">Zones</h2>
        <dl className="mt-6 flex flex-col gap-5">
          {ZONES.map((zone) => (
            <div key={zone.name}>
              <dt className="font-display font-semibold text-[var(--parchment)]">{zone.name}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-[var(--parchment-dim)]">{zone.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-14">
        <div className="rule-glow" />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">Playing a Skill</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {SKILL_STAGES.map((stage, i) => (
            <div key={stage.name} className="panel-cut border border-[var(--line)] bg-[var(--ash)]/50 p-5">
              <div className="eyebrow">
                {i + 1}. {stage.name}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--parchment-dim)]">{stage.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">Two rules to watch for</h2>
        <dl className="mt-6 flex flex-col gap-5">
          {WATCH_FOR.map((rule) => (
            <div key={rule.name}>
              <dt className="font-display font-semibold text-[var(--parchment)]">{rule.name}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-[var(--parchment-dim)]">{rule.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="panel-cut mt-14 border border-[var(--ember)]/30 bg-[var(--ash)]/60 p-8 text-center">
        <h2 className="font-display text-2xl font-semibold text-[var(--parchment)]">Best learned by doing</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--parchment-dim)]">
          Focus has a full in-app Tutorial that walks you through a real game turn by turn —
          Gather, Focus, Main, and Return — ending with you winning your first match.
        </p>
      </section>
    </div>
  );
}
