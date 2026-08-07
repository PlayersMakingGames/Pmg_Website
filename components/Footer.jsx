import Link from "next/link";
import { DISCORD_INVITE_URL } from "@/data/links";

const SITEMAP = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/games", label: "Games" },
  { href: "/news", label: "News" },
  { href: "/support", label: "Support" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--void-deep)]">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="font-display text-sm font-semibold tracking-wide text-[var(--parchment)]">
              PlayersMakingGames
            </div>
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-[var(--parchment-dim)]">
              An independent studio building card games worth mastering. Creators of Focus.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">Site</div>
            <ul className="flex flex-col gap-2">
              {SITEMAP.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[var(--parchment-dim)] hover:text-[var(--parchment)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="eyebrow mb-3">Community</div>
            <ul className="flex flex-col gap-2 text-sm text-[var(--parchment-dim)]">
              <li>
                <a href="mailto:hello@playersmakinggames.com" className="hover:text-[var(--parchment)]">
                  hello@playersmakinggames.com
                </a>
              </li>
              <li>
                {DISCORD_INVITE_URL ? (
                  <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--parchment)]">
                    Join our Discord
                  </a>
                ) : (
                  <span className="text-[var(--parchment-faint)]">Discord — coming soon</span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--parchment-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} PlayersMakingGames. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/focus/terms" className="hover:text-[var(--parchment-dim)]">
              Terms of Service
            </Link>
            <Link href="/focus/privacy" className="hover:text-[var(--parchment-dim)]">
              Privacy Policy
            </Link>
            <span className="font-mono">Focus and all card names are trademarks of PlayersMakingGames.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
