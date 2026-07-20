import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/games', label: 'Games' },
  { to: '/news', label: 'News' },
  { to: '/support', label: 'Support' },
]

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `relative py-1 text-sm tracking-wide transition-colors ${
          isActive ? 'text-[var(--parchment)]' : 'text-[var(--parchment-dim)] hover:text-[var(--parchment)]'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            className="absolute -bottom-1 left-0 h-px w-full origin-left bg-[var(--ember)] transition-transform"
            style={{ transform: isActive ? 'scaleX(1)' : 'scaleX(0)' }}
          />
        </>
      )}
    </NavLink>
  )
}

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--void)]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 26 26" className="shrink-0">
            <polygon
              points="13,1.5 24.5,7.5 24.5,18.5 13,24.5 1.5,18.5 1.5,7.5"
              fill="var(--ash-2)"
              stroke="var(--ember)"
              strokeWidth="1.2"
            />
            <path d="M13 6.5L18 13L13 19.5L8 13Z" fill="var(--ember)" className="transition-transform group-hover:scale-110" style={{ transformOrigin: '13px 13px' }} />
          </svg>
          <span className="font-display text-[1.05rem] font-semibold tracking-wide text-[var(--parchment)]">
            PlayersMakingGames
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
          <NavLink
            to="/games"
            className="panel-cut-sm border border-[var(--ember)]/50 bg-[var(--ember)]/10 px-4 py-1.5 text-sm font-medium text-[var(--ember-soft)] transition-colors hover:bg-[var(--ember)]/20"
          >
            Play Focus
          </NavLink>
        </nav>

        <button
          className="flex items-center justify-center rounded p-1.5 text-[var(--parchment)] md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 4L18 18M18 4L4 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6h16M3 11h16M3 16h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-[var(--line)] px-5 py-5 md:hidden">
          {LINKS.map((l) => (
            <NavItem key={l.to} {...l} onClick={() => setOpen(false)} />
          ))}
          <NavLink
            to="/games"
            onClick={() => setOpen(false)}
            className="panel-cut-sm w-fit border border-[var(--ember)]/50 bg-[var(--ember)]/10 px-4 py-1.5 text-sm font-medium text-[var(--ember-soft)]"
          >
            Play Focus
          </NavLink>
        </nav>
      )}
    </header>
  )
}
