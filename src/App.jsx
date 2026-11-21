import { useEffect, useState } from 'react'
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import { profile, stack, experience, recommendations, projects, sde, ai, certs, core } from './data.js'

const Ext = ({ href, className, children }) => <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>
const Card = ({ p }) => (
  <article className="card"><h3>{p.title}</h3><p>{p.blurb}</p><p className="tags">{p.tags.join(', ')}</p>
    {p.link ? <Ext href={p.link}>View on GitHub</Ext> : <span className="priv">Private project</span>}</article>)
const Topics = ({ items }) => <div className="topics">{items.map(([h, t]) => <section key={h}><h3>{h}</h3><p>{t}</p></section>)}</div>
const Page = ({ title, children }) => <section className="pg"><h1 className="ph">{title}</h1>{children}</section>

function useTheme() {
  const [t, setT] = useState(() => { try { return localStorage.getItem('theme') || 'light' } catch { return 'light' } })
  useEffect(() => { document.documentElement.dataset.theme = t; try { localStorage.setItem('theme', t) } catch {} }, [t])
  return [t, () => setT(t === 'light' ? 'dark' : 'light')]
}

function Home() {
  return (<>
    <img className="heroimg" src={import.meta.env.BASE_URL + 'hero.webp'} alt="Illustration of a desk where data flows from a server rack through connected microservice nodes to two monitors" />
    <header className="intro2"><h1>{profile.heading}</h1>
      <div><p className="intro">{profile.intro}</p><div className="cta"><Ext className="btn" href={profile.linkedin}>Connect on LinkedIn</Ext><Link className="btn ghost" to="/projects">See my projects</Link></div></div>
    </header>
    <div className="split">
      <div>
        <section><h2>Production experience</h2>{experience.map(e => <div className="job" key={e.org}><h3>{e.role}, {e.org}</h3><small>{e.when}</small><ul>{e.points.map(x => <li key={x}>{x}</li>)}</ul></div>)}</section>
        <section><h2>Kind words</h2><div className="quotes">{recommendations.filter(r => r.featured).map(r => <blockquote key={r.who}>{r.quote}<cite>{r.who}, {r.role}</cite></blockquote>)}</div></section>
      </div>
      <aside>
        <div className="side"><h3>Core stack</h3><p className="chips">{core.map(c => <span key={c}>{c}</span>)}</p><Link to="/about">The full stack and my journey</Link></div>
        <div className="side"><h3>Say hello</h3><p>LinkedIn is the best way to reach me.</p><Ext className="btn sm" href={profile.linkedin}>Open LinkedIn</Ext></div>
      </aside>
    </div>
    <section><h2>Featured projects</h2><div className="grid feat">{projects.filter(p => p.featured).slice(0, 3).map(p => <Card key={p.title} p={p} />)}</div><Link className="more" to="/projects">See all projects</Link></section>
  </>)
}

function About() {
  return (<Page title="About me">
    <p className="intro">I started in SAP security at Infosys, moved into data and ML while earning my MS in Computer Science at RIT, and now build backend systems in Java and Python.</p>
    <section><h2>The full tech stack</h2>{Object.entries(stack).map(([k, v]) => <p key={k} className="row"><b>{k}</b><span>{v.join(', ')}</span></p>)}</section>
  </Page>)
}

export default function App() {
  const [theme, toggle] = useTheme()
  return (<div className="page">
    <div className="top">
      <Link to="/" className="brand">{profile.name}</Link>
      <nav><NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink><NavLink to="/sde">SDE</NavLink><NavLink to="/ai">AI</NavLink><NavLink to="/projects">Projects</NavLink><NavLink to="/certifications">Certifications</NavLink></nav>
      <div className="tools"><button className="tog" onClick={toggle} aria-label="Switch between light and dark theme">{theme === 'light' ? 'Dark mode' : 'Light mode'}</button><Ext className="btn sm" href={profile.linkedin}>LinkedIn</Ext></div>
    </div>
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sde" element={<Page title="Software development"><Topics items={sde} /></Page>} />
      <Route path="/ai" element={<Page title="Data science, ML and Gen AI"><Topics items={ai} /></Page>} />
      <Route path="/projects" element={<Page title="Projects"><h2>Software development</h2><div className="grid">{projects.filter(p => p.kind === 'sde').map(p => <Card key={p.title} p={p} />)}</div><h2>AI and data</h2><div className="grid">{projects.filter(p => p.kind === 'ai').map(p => <Card key={p.title} p={p} />)}</div></Page>} />
      <Route path="/certifications" element={<Page title="Certifications"><div className="grid">{certs.map(c => <article className="card" key={c.name}><h3>{c.name}</h3><p>{c.issuer}</p><Ext href={c.link}>Verify credential</Ext></article>)}</div></Page>} />
    </Routes></main>
    <footer><Ext className="btn" href={profile.linkedin}>Get in touch on LinkedIn</Ext></footer>
  </div>)
}
