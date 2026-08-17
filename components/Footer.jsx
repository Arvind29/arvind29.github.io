'use client';

import Link from 'next/link';
import siteConfig from '@/data/site.config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-lg">
        <div className="row mb-4">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer-section">
              <h5>{siteConfig.site.name}</h5>
              <p className="small">{siteConfig.site.description}</p>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-md-0">
            <div className="footer-section">
              <h5>Quick Links</h5>
              <div className="footer-links">
                <ul>
                  <li><Link href="#about">About</Link></li>
                  <li><Link href="#projects">Projects</Link></li>
                  <li><Link href="#blog">Blog</Link></li>
                  <li><Link href="#contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="footer-section">
              <h5>Connect</h5>
              <div className="footer-links">
                <ul>
                  {siteConfig.social.github && (
                    <li>
                      <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </li>
                  )}
                  {siteConfig.social.linkedin && (
                    <li>
                      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </li>
                  )}
                  {siteConfig.social.blog && (
                    <li>
                      <a href={siteConfig.social.blog} target="_blank" rel="noopener noreferrer">
                        Blog
                      </a>
                    </li>
                  )}
                  {siteConfig.social.email && (
                    <li>
                      <a href={siteConfig.social.email}>Email</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="row">
          <div className="col-12">
            <p className="small text-center mb-0">
              © {currentYear} {siteConfig.site.author}. Designed & built by hand.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
