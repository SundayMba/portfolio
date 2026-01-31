import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const anchorLinks = [
  { label: 'Overview', href: '/#overview' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'DevOps', href: '/#devops' },
  { label: 'Contact', href: '/#contact' },
]

const pageLinks = [
  { label: 'About', href: '/about' },
  { label: 'Book a Call', href: '/book' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = ''
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f14]/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <NavLink to="/" className="font-display text-lg tracking-wide">
            Sunday Mba
          </NavLink>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {anchorLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
            {pageLinks.map((link) => (
              <NavLink key={link.href} to={link.href} className="transition hover:text-white">
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <NavLink
              to="/book"
              className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10 sm:inline-flex"
            >
              Let&apos;s Talk
            </NavLink>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-drawer"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/30 hover:bg-white/10 md:hidden"
            >
              <span className="flex flex-col gap-1">
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
                <span className="block h-[2px] w-6 bg-white" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        id="mobile-drawer"
        className={`fixed right-0 top-0 z-50 h-full w-[280px] bg-[#0b0f14] p-6 shadow-2xl transition-transform md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        inert={!open}
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-lg text-white">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-white/30 hover:bg-white/10"
          >
            ✕
          </button>
        </div>
        <nav className="mt-8 grid gap-4 text-sm text-slate-200">
          {anchorLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 transition hover:border-white/20"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          {pageLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className="rounded-lg border border-white/5 bg-white/5 px-4 py-3 transition hover:border-white/20"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/book"
            className="rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-4 py-3 text-emerald-100"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </NavLink>
        </nav>
      </aside>
    </>
  )
}

export default Navbar
