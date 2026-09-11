import siteConfig from '@/data/site.config.json';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-brand">{siteConfig.site.name}</div>
          <small style={{ color: 'var(--green)' }}>Security. Automation. AI.</small>
        </div>
        <div className="footer-links">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={siteConfig.social.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}
