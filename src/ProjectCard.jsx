import { Link } from 'react-router-dom'

// Compact teaser: eyebrow, title, 1-2 line summary, 3-4 stack pills, button to the detail page.
export default function ProjectCard({ p }) {
  return (<article className="card teaser">
    <p className="eyebrow">{p.eyebrow}</p>
    <h3>{p.title}</h3>
    <p className="sum">{p.summary}</p>
    <p className="chips">{p.cardTags.map(t => <span key={t}>{t}</span>)}</p>
    <Link className="btn sm" to={'/projects/' + p.slug}>{p.cta}</Link>
  </article>)
}
