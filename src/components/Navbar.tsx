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
  return (
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
        <NavLink
          to="/book"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10"
        >
          Let&apos;s Talk
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
