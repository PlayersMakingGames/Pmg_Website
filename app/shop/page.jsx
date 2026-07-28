import { supabase } from "@/lib/supabaseClient";

export const metadata = {
  title: "Shop",
  description: "Browse Elements, cosmetics, and alternate arts available in Focus.",
};

// Public catalog read straight from Supabase at request time — same
// shop_items table and RLS policy (select where active) the game client
// reads from, so this page never drifts out of sync with the real catalog.
// This is a preview only: purchases themselves happen in-app, where
// purchase_item() enforces price/ownership server-side.
export const revalidate = 300;

const CATEGORY_LABELS = {
  element: "Elements",
  deck_box: "Deck Boxes",
  card_sleeve: "Card Sleeves",
  alt_art: "Alternate Arts",
  quick_chat_emote: "Quick Chat Emotes",
  avatar: "Avatars",
  playmat: "Playmats",
};

export default async function ShopPage() {
  const { data: items, error } = await supabase
    .from("shop_items")
    .select("id, name, description, cost, category, coming_soon")
    .eq("active", true)
    .order("cost", { ascending: true });

  const grouped = new Map();
  for (const item of items || []) {
    const key = item.category || "other";
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(item);
  }

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Catalog</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">Shop</h1>
      <p className="mt-4 max-w-[58ch] text-[var(--parchment-dim)]">
        Elements, cosmetics, and alternate arts, priced in Gold. Sign in to the app to buy —
        every purchase there is verified server-side, so prices always match what's shown here.
      </p>

      {error && (
        <p className="mt-10 text-sm text-[var(--neon-amber)]">
          Couldn't load the catalog right now. Please try again shortly.
        </p>
      )}

      {!error && grouped.size === 0 && (
        <p className="mt-10 text-sm text-[var(--parchment-faint)]">No items available.</p>
      )}

      <div className="mt-14 flex flex-col gap-14">
        {Array.from(grouped.entries()).map(([category, categoryItems]) => (
          <section key={category}>
            <h2 className="font-display text-xl font-semibold text-[var(--parchment)]">
              {CATEGORY_LABELS[category] || category}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryItems.map((item) => (
                <div key={item.id} className="panel-cut flex flex-col border border-[var(--line)] bg-[var(--ash)]/50 p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-semibold text-[var(--parchment)]">{item.name}</h3>
                    {item.coming_soon && (
                      <span className="panel-cut-sm shrink-0 border border-[var(--line-strong)] px-2 py-0.5 font-mono text-[0.65rem] tracking-wide text-[var(--parchment-faint)]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--parchment-dim)]">{item.description}</p>
                  )}
                  <div className="mt-4 text-sm font-semibold text-[var(--gold)]">
                    {item.cost.toLocaleString()} Gold
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
