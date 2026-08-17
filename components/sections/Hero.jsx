import Link from 'next/link';
import siteConfig from '@/data/site.config.json';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container-lg">
        <div className="hero-content">
          <h1>
            {siteConfig.site.author}
          </h1>
          <p className="lead">
            {siteConfig.site.tagline}
          </p>
          <p className="text-white-75" style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
            Security Engineer. SOAR Specialist. Building automation tools for threat detection & incident response.
          </p>
          <div>
            <a href="#projects" className="btn btn-primary me-3 mb-2">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline-light mb-2">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
