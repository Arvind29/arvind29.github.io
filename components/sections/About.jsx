import siteConfig from '@/data/site.config.json';

export default function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container-lg">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title">About Me</h2>
            <div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {siteConfig.site.bio}
              </p>
              <p>
                Currently, I work as a Security Engineer at Swimlane, building and maintaining security automation workflows on the Swimlane Turbine SOAR platform. My expertise spans detection engineering, API integrations, playbook development, and threat intelligence automation.
              </p>
              <p>
                I'm passionate about building practical tools that solve real security problems. On the side, I run a technical blog (<a href="https://cyberunfo.wordpress.com" target="_blank" rel="noopener noreferrer">CyberInfo</a>) covering security automation, SOAR, APIs, and DevOps.
              </p>
              <p>
                When I'm not automating security workflows, you'll find me building full-stack web applications, contributing to open-source projects, or exploring the Indian equity markets.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card bg-white">
              <div className="card-body">
                <h4 className="card-title">Key Expertise</h4>
                <ul style={{ lineHeight: 2 }}>
                  <li>🛡️ <strong>SOAR Platforms:</strong> Swimlane Turbine</li>
                  <li>🔍 <strong>Detection Engineering:</strong> Alert tuning, risk scoring, playbook optimization</li>
                  <li>🔗 <strong>Integrations:</strong> SentinelOne, VirusTotal, WHOIS, Shodan, Apify</li>
                  <li>💻 <strong>Development:</strong> Python, FastAPI, Next.js, REST APIs</li>
                  <li>🚀 <strong>DevOps:</strong> GitHub Actions, CI/CD, Railway, Docker</li>
                  <li>📝 <strong>Technical Writing:</strong> Security automation, APIs, architecture design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
