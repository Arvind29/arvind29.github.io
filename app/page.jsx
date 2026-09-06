import home from '@/data/home.json';
import sections from '@/data/sections.json';
import work from '@/data/work.json';
import articles from '@/data/articles.json';

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Destination({ item, className = '' }) {
  const props = item.external
    ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: item.href };

  return (
    <a className={`destination ${className}`} {...props}>
      <div>
        <span className="destination-label">{item.label}</span>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <span className="destination-arrow"><Arrow /></span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">{home.eyebrow}</p>
          <h1>
            {home.heading.split(home.highlight)[0]}
            <span>{home.highlight}</span>
            {home.heading.split(home.highlight)[1]}
          </h1>
          <p className="hero-role">{home.role}</p>
          <p className="hero-specialties">{home.specialties}</p>
          <p className="hero-description">{home.description}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={home.primaryCta.href}>{home.primaryCta.label} <Arrow /></a>
            <a className="button button-secondary" href={home.secondaryCta.href}>{home.secondaryCta.label}</a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img src={home.photo} alt={home.photoAlt} className="hero-photo" />
          </div>
          <p className="photo-caption">{home.photoCaption}</p>
        </div>
      </section>

      <section className="destinations" aria-label="Portfolio sections">
        <Destination item={sections.articles} className="articles" />
        <Destination item={sections.work} className="work" />
        <Destination item={sections.blog} className="blog" />
        <Destination item={sections.contact} className="contact" />
      </section>

      <section className="content-preview" id="articles">
        <div className="section-heading">
          <p className="eyebrow">LATEST</p>
          <h2>Articles</h2>
          <a href="#articles">View all <Arrow /></a>
        </div>
        <div className="article-list">
          {articles.slice(0, 3).map((article) => (
            <a href={article.url} className="article-row" key={article.title}>
              <span>{article.date}</span>
              <strong>{article.title}</strong>
              <span className="row-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="content-preview" id="work">
        <div className="section-heading">
          <p className="eyebrow">SELECTED</p>
          <h2>Work</h2>
          <a href="#work">View all <Arrow /></a>
        </div>
        <div className="work-list">
          {work.map((project) => (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="work-row" key={project.title}>
              <div>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
              </div>
              <div className="work-tags">{project.technologies.join(' · ')}</div>
              <span className="row-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">CONTACT</p>
        <h2>Let's connect.</h2>
        <p>For professional opportunities, collaborations or conversations about security automation and AI.</p>
        <a className="button button-primary" href="mailto:pandearvind098@gmail.com">Get in touch <Arrow /></a>
      </section>
    </main>
  );
}
