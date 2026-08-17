'use client';

import siteConfig from '@/data/site.config.json';

export default function Contact() {
  return (
    <section className="section" id="contact" style={{ minHeight: '60vh', marginTop: '8rem', paddingTop: '10rem', paddingBottom: '6rem' }}>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="section-title text-center mb-5">Let's Connect</h2>

            <div className="row text-center mb-5">
              <div className="col-md-6 mb-4 mb-md-0">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">Email</h5>
                    <p className="text-muted">Lets chat about security automation and SOAR platforms</p>
                    <a href={siteConfig.social.email} className="btn btn-primary btn-sm">
                      Send Email
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card border-0 bg-light">
                  <div className="card-body">
                    <h5 className="card-title">Social Links</h5>
                    <p className="text-muted">Follow my work and connect on professional networks</p>
                    <div className="d-flex gap-2 justify-content-center">
                      {siteConfig.social.github && (
                        <a
                          href={siteConfig.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          GitHub
                        </a>
                      )}
                      {siteConfig.social.linkedin && (
                        <a
                          href={siteConfig.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          LinkedIn
                        </a>
                      )}
                      {siteConfig.social.blog && (
                        <a
                          href={siteConfig.social.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          Blog
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
