import { NEWS } from "@/data/news";
import NewsCard from "@/components/NewsCard";

export const metadata = {
  title: "News",
  description: "Patch notes and studio updates from PlayersMakingGames, in the order they shipped.",
  keywords: [
    "Focus TCG news",
    "Focus patch notes",
    "Focus TCG updates",
    "Focus dev log",
    "Focus changelog",
    "PlayersMakingGames",
    "Focus ECG",
    "expandable card game",
    "card game updates",
  ],
};

export default function News() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Dev log</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">News</h1>
      <p className="mt-4 max-w-[56ch] text-[var(--parchment-dim)]">
        Patch notes and studio updates, in the order they shipped.
      </p>

      <div className="mt-12 flex flex-col gap-6">
        {NEWS.map((item) => (
          <NewsCard key={item.slug} item={item} expanded />
        ))}
      </div>
    </div>
  );
}
