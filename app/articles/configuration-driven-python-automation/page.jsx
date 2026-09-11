import Link from 'next/link';

export const metadata = {
  title: 'Python Automation: Turning Hard-Coded Scripts into Configuration-Driven Workflows | Arvind Pande',
  description: 'How configuration-driven design makes Python automation reusable, maintainable, and production-ready for security operations.',
};

export default function ArticlePage() {
  return (
    <main className="article-page">
      <article className="article-content">
        <Link href="/#articles" className="article-back">← Back to Articles</Link>
        <p className="eyebrow">PYTHON AUTOMATION · 11 SEP 2026</p>
        <h1>Python Automation: Turning Hard-Coded Scripts into Configuration-Driven Workflows</h1>
        <p className="article-lead">A practical approach to making Python automation reusable, maintainable, and safer to operate across tenants, environments, APIs, and security workflows.</p>

        <p><strong>Category:</strong> Python Automation</p>
        <p><strong>Focus:</strong> Maintainability · Reusability · SOAR Engineering</p>

        <p>A Python automation often starts as a simple script:</p>
        <p><strong>Read an IOC → call an API → process the response → take an action.</strong></p>

        <p>The problem appears when the same automation needs to run against different tenants, environments, APIs, thresholds, or use cases.</p>
        <p>Instead of creating multiple scripts, a better approach is to make the logic reusable and the configuration changeable.</p>

        <h2>The Problem with Hard-Coded Automation</h2>
        <p>Consider a script containing:</p>
        <pre><code>{`API_URL = "https://api.example.com"
TIMEOUT = 30
MALICIOUS_THRESHOLD = 80
TENANT = "production"`}</code></pre>

        <p>It works, but changes become expensive.</p>
        <p>A small requirement such as:</p>
        <ul>
          <li>use another tenant</li>
          <li>change the timeout</li>
          <li>modify the confidence threshold</li>
          <li>test against another environment</li>
        </ul>
        <p>requires modifying the Python code.</p>
        <p>In production automation, this creates unnecessary risk. Every code change introduces another opportunity for regression, inconsistent behavior, or an avoidable deployment.</p>

        <h2>Configuration-Driven Design</h2>
        <p>Separate the automation into two layers:</p>
        <pre><code>{`┌──────────────────────┐
│     Configuration    │
│                      │
│ API URL              │
│ Timeout              │
│ Threshold            │
│ Environment          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│    Python Engine     │
│                      │
│ Validate             │
│ Call API             │
│ Process Response     │
│ Apply Logic          │
│ Return Result        │
└──────────────────────┘`}</code></pre>

        <p>The engine contains the behavior.</p>
        <p>The configuration contains the variables.</p>
        <p>This makes the same automation reusable across multiple scenarios without repeatedly changing the core implementation.</p>

        <h2>A Simple Example</h2>
        <p>Instead of:</p>
        <pre><code>{`def enrich_ioc(ioc):
    response = requests.get(
        "https://api.example.com/ioc/" + ioc,
        timeout=30
    )

    if response.json()["score"] > 80:
        return "malicious"

    return "clean"`}</code></pre>

        <p>Use configuration:</p>
        <pre><code>{`config = {
    "timeout": 30,
    "malicious_threshold": 80
}

def enrich_ioc(ioc, config):
    response = requests.get(
        f"https://api.example.com/ioc/{ioc}",
        timeout=config["timeout"]
    )

    score = response.json()["score"]

    if score >= config["malicious_threshold"]:
        return "malicious"

    return "clean"`}</code></pre>

        <p>Now the same engine can support different policies:</p>
        <pre><code>{`production = {
    "timeout": 30,
    "malicious_threshold": 80
}

high_sensitivity = {
    "timeout": 30,
    "malicious_threshold": 60
}`}</code></pre>

        <p>No change to the core logic is required.</p>

        <h2>Why This Matters in SOAR</h2>
        <p>This pattern becomes particularly useful when Python is used inside security automation.</p>
        <pre><code>{`SOAR Alert
    │
    ▼
Python Automation
    │
    ├── Configuration
    │      ├── API endpoint
    │      ├── Timeout
    │      ├── Threshold
    │      └── Environment
    │
    ▼
Threat Intelligence API
    │
    ▼
Normalized Result
    │
    ▼
SOAR Decision`}</code></pre>

        <p>The SOAR playbook can remain stable while configuration controls how the integration behaves.</p>
        <p>This is especially useful for:</p>
        <ul>
          <li>IOC enrichment</li>
          <li>SIEM queries</li>
          <li>EDR searches</li>
          <li>Vulnerability automation</li>
          <li>Ticket creation</li>
          <li>Cloud API operations</li>
          <li>Multi-tenant integrations</li>
        </ul>

        <h2>Keep Secrets Out of Configuration Files</h2>
        <p>Configuration-driven does not mean putting everything into JSON or YAML.</p>
        <p>Avoid:</p>
        <pre><code>{`{
  "api_key": "my-secret-key"
}`}</code></pre>

        <p>Instead:</p>
        <pre><code>{`{
  "api_url": "https://api.example.com",
  "timeout": 30,
  "threshold": 80
}`}</code></pre>

        <p>Retrieve credentials from the SOAR secret store, environment variables, or an approved secrets manager.</p>
        <p><strong>The principle is:</strong></p>
        <p><strong>Configuration controls behavior; secret management controls credentials.</strong></p>

        <h2>Practical Production Pattern</h2>
        <p>A mature Python automation can use four layers:</p>
        <pre><code>{`Input
  ↓
Validation
  ↓
Configuration
  ↓
Execution
  ↓
Normalization
  ↓
Decision
  ↓
Audit / Result`}</code></pre>

        <p>This separation makes the automation easier to test, troubleshoot, reuse, and eventually convert into a reusable SOAR integration.</p>

        <h2>Key Takeaway</h2>
        <p><strong>Don't build one Python script for every automation requirement. Build a reusable automation engine and make its behavior configuration-driven.</strong></p>
        <p>That small architectural change can turn a collection of scripts into a maintainable automation framework.</p>
      </article>
    </main>
  );
}
