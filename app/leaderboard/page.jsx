import { supabase } from "@/lib/supabaseClient";

export const metadata = {
  title: "Leaderboard",
  description: "Top Focus players, ranked by wins.",
};

// profiles has an open SELECT policy (no auth data lives on it), so this
// reads it directly with the anon key.
export const revalidate = 120;

export default async function LeaderboardPage() {
  const { data: players, error } = await supabase
    .from("profiles")
    .select("username, favorite_element, games_played, wins")
    .gt("games_played", 0)
    .order("wins", { ascending: false })
    .order("games_played", { ascending: true })
    .limit(50);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <div className="eyebrow">Rankings</div>
      <h1 className="mt-3 font-display text-4xl font-bold text-[var(--parchment)] sm:text-5xl">Leaderboard</h1>
      <p className="mt-4 text-[var(--parchment-dim)]">Top 50 players, ranked by wins.</p>

      {error && (
        <p className="mt-10 text-sm text-[var(--neon-amber)]">
          Couldn't load the leaderboard right now. Please try again shortly.
        </p>
      )}

      {!error && (!players || players.length === 0) && (
        <p className="mt-10 text-sm text-[var(--parchment-faint)]">
          No ranked players yet — be the first to play a match.
        </p>
      )}

      {!error && players && players.length > 0 && (
        <div className="panel-cut mt-10 overflow-x-auto border border-[var(--line)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--line)] bg-[var(--ash)]/60 text-left">
                <th className="eyebrow px-5 py-3 font-medium">#</th>
                <th className="eyebrow px-5 py-3 font-medium">Player</th>
                <th className="eyebrow px-5 py-3 font-medium">Element</th>
                <th className="eyebrow px-5 py-3 text-right font-medium">Wins</th>
                <th className="eyebrow px-5 py-3 text-right font-medium">Played</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, i) => (
                <tr key={`${player.username}-${i}`} className="border-b border-[var(--line)] last:border-0">
                  <td className="px-5 py-3 text-[var(--parchment-faint)]">{i + 1}</td>
                  <td className="px-5 py-3 font-medium text-[var(--parchment)]">
                    {player.username || "Anonymous Duelist"}
                  </td>
                  <td className="px-5 py-3 text-[var(--parchment-dim)]">{player.favorite_element || "—"}</td>
                  <td className="px-5 py-3 text-right font-semibold text-[var(--ember-soft)]">{player.wins}</td>
                  <td className="px-5 py-3 text-right text-[var(--parchment-faint)]">{player.games_played}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
