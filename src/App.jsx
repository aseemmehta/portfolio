import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { NavLink, Navigate, Routes, Route, Link, useLocation } from 'react-router-dom'
import { profile, stack, experience, recommendations, projects, journey, sde, ai, certs, core } from './data.js'

const Ext = ({ href, className, children }) => <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
const Card = ({ p }) => (
  <article className={'card' + (p.details ? ' wide' : '')}><h3>{p.title}</h3>{p.blurb && <p>{p.blurb}</p>}
    {p.pills && <p className="chips">{p.pills.map(x => <span key={x}>{x}</span>)}</p>}
    {p.details && <ul>{p.details.map(d => <li key={d}>{d}</li>)}</ul>}
    {p.tags && <p className="tags">{p.tags.join(', ')}</p>}
    {p.link ? <Ext href={p.link}>View on GitHub</Ext> : <span className="priv">{p.label || 'Private project'}</span>}</article>)
const Topics = ({ items }) => <div className="topics">{items.map(([h, t, list, to]) => <section key={h}><h3>{h}</h3><p>{t}</p>{list && <ul>{list.map(([n, d]) => <li key={n}><b>{n}</b>: {d}</li>)}</ul>}{to && <p className="more"><Link to={to[1]}>{to[0]}</Link></p>}</section>)}</div>
const Group = ({ title, kind }) => <><h2>{title}</h2><div className="grid">{projects.filter(p => p.kind === kind).map(p => <Card key={p.title} p={p} />)}</div></>
const Page = ({ title, children }) => <section className="pg"><h1 className="ph">{title}</h1>{children}</section>


const Sun = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
const Moon = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>

const links = [['/', 'Home'], ['/journey', 'My Journey'], ['/sde', 'SDE'], ['/ai', 'AI'], ['/projects', 'Projects'], ['/certifications', 'Certifications']]
function Nav() {
  const ref = useRef(null)
  const { pathname } = useLocation()
  const [pill, setPill] = useState(null)
  useLayoutEffect(() => {
    const move = () => {
      const a = ref.current && ref.current.querySelector('a.active')
      setPill(a ? { x: a.offsetLeft, w: a.offsetWidth } : null)
    }
    move()
    window.addEventListener('resize', move)
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(move)
    return () => window.removeEventListener('resize', move)
  }, [pathname])
  return (<nav ref={ref}>
    {pill && <span className="pill" aria-hidden="true" style={{ transform: `translateX(${pill.x}px)`, width: pill.w }} />}
    {links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>)}
  </nav>)
}

const REVEAL = '.route .hero > *, .route .pg > :not(.split), .route .card, .route .job, .route blockquote, .route .side, .route h2, .route .topics section'
function useReveal(key) {
  useEffect(() => {
    const els = [...document.querySelectorAll(REVEAL)]
    els.forEach(el => {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el)
      el.style.setProperty('--d', Math.min(i, 6) * 80 + 'ms')
      el.classList.add('rv')
    })
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [key])
}

function useTheme() {
  const [t, setT] = useState(() => { try { return localStorage.getItem('theme') || 'light' } catch { return 'light' } })
  useEffect(() => { document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t) } catch {} }, [t])
  return [t, () => setT(t === 'light' ? 'dark' : 'light')]
}

function Home() {
  const stage = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const tick = () => { raf = 0; if (stage.current) stage.current.style.setProperty('--p', Math.min(Math.max(window.scrollY / 700, 0), 1).toFixed(3)) }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick) }
    window.addEventListener('scroll', onScroll, { passive: true })
    tick()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return (<>
    <header className="hero">
      <div className="stage" ref={stage}><img className="heroimg" src={import.meta.env.BASE_URL + 'hero.webp'} alt="Illustration of a desk where data flows from a server rack through connected microservice nodes to two monitors" /></div>
      <p className="eyebrow">{profile.title}</p>
      <h1>{profile.heading}</h1>
      <p className="intro">{profile.intro}</p>
    </header>
    <div className="split">
      <div>
        <section><h2>Production experience</h2>{experience.map(e => <div className="job" key={e.org}><h3>{e.role}, {e.org}</h3><small>{e.when}</small><ul>{e.points.map(x => <li key={x}>{x}</li>)}</ul></div>)}</section>
        <section><h2>Kind words</h2><div className="quotes">{recommendations.filter(r => r.featured).map(r => <blockquote key={r.who}>{r.quote}<cite>{r.who}, {r.role}</cite></blockquote>)}</div><p className="morelink"><Ext className="more" href={profile.recsUrl}>Read all recommendations on LinkedIn</Ext></p></section>
      </div>
      <aside>
        <div className="side"><h3>Core stack</h3><p className="chips">{core.map(c => <span key={c}>{c}</span>)}</p><Link to="/journey">The full stack and my journey</Link></div>
        <div className="side"><h3>Say hello</h3><p>LinkedIn is the best way to reach me.</p><Ext className="btn sm" href={profile.linkedin}>Open LinkedIn</Ext></div>
      </aside>
    </div>
    <section><h2>Featured projects</h2><div className="grid feat">{projects.filter(p => p.featured).slice(0, 3).map(p => <Card key={p.title} p={p} />)}</div></section>
  </>)
}

function Journey() {
  return (<Page title="My Journey">
    <div className="split">
      <div>
        <p className="intro">My journey in tech started with a family Pentium II PC, taking it apart, partitioning drives, reinstalling operating systems, and building early webpages just to see how things worked. That same curiosity has shaped every stop since: spotting pain points and automating them away, pushing hard through an MS in Computer Science spanning both software engineering and data science, and building production systems from scratch across my internship and backend roles. At every stage, the goal has been the same: keep upskilling, stay close to the engineering, and leave systems stronger than I found them.</p>
        <section><h2>My path</h2><ol className="timeline">{journey.map(j => <li className={'mile' + (j.now ? ' now' : '')} key={j.org}><div className="card"><span className="when">{j.when}</span><h3>{j.org}</h3>{j.role && <p className="role">{j.role}</p>}<p>{j.text}</p></div></li>)}</ol></section>
      </div>
      <aside>
        <div className="side stack"><h3>The full tech stack</h3>{Object.entries(stack).map(([k, v]) => <div key={k}><h4>{k}</h4><p className="chips">{v.map(x => <span key={x}>{x}</span>)}</p></div>)}</div>
      </aside>
    </div>
  </Page>)
}

export default function App() {
  const [theme, toggle] = useTheme()
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  useReveal(pathname)
  const initials = profile.name.split(' ').map(w => w[0]).join('')
  return (<>
    <header className="bar"><div className="dock">
      <Link to="/" className="brand"><span className="mono">{initials}</span><span className="nm">{profile.name}</span></Link>
      <Nav />
      <button className="tog" onClick={toggle} aria-label="Switch between light and dark theme">{theme === 'light' ? <Moon /> : <Sun />}</button>
      {profile.github && <Ext className="btn sm ghost" href={profile.github}>GitHub</Ext>}
      <Ext className="btn sm" href={profile.linkedin}>LinkedIn</Ext>
    </div></header>
    <div className="page">
      <main key={pathname} className="route"><Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/about" element={<Navigate to="/journey" replace />} />
        <Route path="/sde" element={<Page title="Software development"><Topics items={sde} /></Page>} />
        <Route path="/ai" element={<Page title="Data science and machine learning"><Topics items={ai} /></Page>} />
      <Route path="/projects" element={<Page title="Projects"><Group title="Built using Gen AI" kind="genai" /><Group title="Software Development" kind="sde" /><Group title="Academic / Capstone Project" kind="academic" /></Page>} />
      <Route path="/certifications" element={<Page title="Certifications"><div className="grid g2">{certs.map(c => <article className="card" key={c.name}><h3>{c.name}</h3><p>{c.issuer}{c.when ? ', ' + c.when : ''}</p>{c.link ? <Ext href={c.link}>Verify credential</Ext> : null}</article>)}</div></Page>} />
      </Routes></main>
    </div>
  </>)
}
