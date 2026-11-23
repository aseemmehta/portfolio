import { Fragment } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from './data/projects.js'
import { Ext } from './ui.jsx'

const STATUS = { public: 'Public repo', private: 'Private project', academic: 'Academic project' }

const Flow = ({ nodes, layout }) => (
  <div className={'flow ' + layout}>
    {nodes.map((n, i) => (<Fragment key={n.name}>
      {layout === 'chain' && i > 0 && <span className="arr" aria-hidden="true">→</span>}
      <div className={'node' + (n.edge ? ' edge' : '')}>
        <h3>{n.name}</h3>
        {n.sub && <small>{n.sub}</small>}
        {n.badge && <span className={'port ' + (n.badgeKind || 'int')}>{n.badge}</span>}
        {n.text && <p>{n.text}</p>}
      </div>
    </Fragment>))}
  </div>)

const DataTable = ({ cols, rows }) => (
  <div className="tbl"><table>
    <thead><tr>{cols.map(c => <th key={c} scope="col">{c}</th>)}</tr></thead>
    <tbody>{rows.map(r => <tr key={r[0]}>{r.map((c, i) => i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>)}</tr>)}</tbody>
  </table></div>)

export default function ProjectDetail() {
  const { slug } = useParams()
  const p = getProject(slug)
  if (!p) return <Navigate to="/projects" replace />
  const d = p.detail || {}
  const a = d.architecture
  return (<article className="pg detail">
    <p className="back"><Link to="/projects">← Back to Projects</Link></p>
    <header className="dhead">
      <p className="eyebrow">{p.eyebrow}</p>
      <h1 className="dh">{p.title}</h1>
      <p className="chips">{p.allTags.map(t => <span key={t}>{t}</span>)}</p>
      <p className="repo">{p.repoStatus === 'public' && p.repoUrl
        ? <Ext className="btn sm" href={p.repoUrl}>View on GitHub</Ext>
        : <span className="priv">{STATUS[p.repoStatus]}</span>}</p>
    </header>
    {d.overview && <section className="ds"><h2>{d.overview.heading}</h2>{d.overview.paras.map(t => <p className="lead" key={t}>{t}</p>)}</section>}
    {a && <section className="ds"><h2>{a.heading}</h2>
      <Flow nodes={a.nodes} layout={a.layout || 'grid'} />
      {a.note && <p className="note">{a.note}</p>}
      {a.table && <DataTable cols={a.table.cols} rows={a.table.rows} />}
    </section>}
    {d.highlights && <section className="ds"><h2>{d.highlights.heading}</h2>
      <div className="grid hl">{d.highlights.items.map(h => <div className="card" key={h.title}><h3>{h.title}</h3><p>{h.text}</p></div>)}</div>
    </section>}
    {d.tables && d.tables.map(t => <section className="ds" key={t.heading}><h2>{t.heading}</h2>{t.intro && <p className="lead">{t.intro}</p>}<DataTable cols={t.cols} rows={t.rows} /></section>)}
    {d.outcomes && <section className="ds"><h2>{d.outcomes.heading}</h2><ul className="outcomes">{d.outcomes.items.map(o => <li key={o}>{o}</li>)}</ul></section>}
  </article>)
}
