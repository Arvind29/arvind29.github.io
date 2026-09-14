import Link from 'next/link';

export const metadata = {
  title: 'API Automation: Handle API Failures the Right Way',
  description: 'A practical guide to handling common API failures with retries, backoff, and controlled error handling in SOAR and Python automation.'
};

export default function ArticlePage() {
  return (
    <main className="article-page">
      <article className="article-content">
        <style>{`
          .article-diagram { overflow: hidden; }
          .diagram-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .diagram-grid .diagram-node { min-width: 0; overflow-wrap: anywhere; word-break: break-word; }
        `}</style>
        <Link href="/#articles" className="article-back">← Back to Articles</Link>
        <p className="eyebrow">API AUTOMATION · 13 SEP 2026</p>
        <h1>API Automation: Handle API Failures the Right Way</h1>
        <p className="article-lead">
          API automation often works perfectly in testing and then fails in production. The reason is simple: APIs fail. A reliable automation should know which failures to retry, which ones need a different action, and when to stop.
        </p>

        <h2>Common API failures</h2>
        <ul>
          <li><code>429</code> — Too many requests</li>
          <li><code>401</code> — Token expired or authentication failed</li>
          <li><code>404</code> — Resource no longer exists</li>
          <li><code>500</code> — Server error</li>
          <li><code>503</code> — Service temporarily unavailable</li>
        </ul>
        <p>Your automation should not treat all failures the same way.</p>

        <h2>A simple pattern</h2>
        <div className="article-diagram" role="img" aria-label="API call followed by success or error classification and controlled retry or stop">
          <div className="diagram-node">API Call</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Success?</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-grid">
            <div className="diagram-node">YES → Continue</div>
            <div className="diagram-node">NO → Check Error</div>
          </div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Temporary → Retry &nbsp; | &nbsp; Permanent → Log + Stop</div>
        </div>

        <h2>Example: Retry a 503</h2>
        <p>
          If an EDR API temporarily returns <code>503</code>, retrying immediately five times is a bad approach. It can increase load on an already unhealthy service.
        </p>
        <div className="article-diagram" role="img" aria-label="Exponential backoff example with three API attempts">
          <div className="diagram-node">Attempt 1 → 503 → wait 2 sec</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Attempt 2 → 503 → wait 4 sec</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Attempt 3 → 200 → Continue</div>
        </div>
        <p>This is called <strong>exponential backoff</strong>.</p>

        <h2>What should you retry?</h2>
        <p>Temporary failures are generally candidates for retry:</p>
        <p><code>429</code> · <code>502</code> · <code>503</code> · <code>504</code></p>
        <p>Other errors usually need a different action:</p>
        <ul>
          <li><code>401</code> → Refresh or re-authenticate</li>
          <li><code>400</code> → Fix the request</li>
          <li><code>403</code> → Check permissions</li>
          <li><code>404</code> → Verify the resource</li>
        </ul>

        <h2>SOAR example</h2>
        <p>Suppose a playbook performs:</p>
        <div className="article-diagram" role="img" aria-label="SOAR workflow from alert to EDR query, IOC enrichment and ticket creation">
          <div className="diagram-node">Get Alert</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Query EDR</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Enrich IOC</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Create Ticket</div>
        </div>
        <p>
          If the EDR API returns <code>503</code>, do not immediately fail the entire incident. Retry with backoff. If the API remains unavailable after the retry limit, mark the enrichment as failed and record the reason.
        </p>
        <div className="article-diagram" role="img" aria-label="EDR 503 response handled through retry with backoff and controlled failure">
          <div className="diagram-node">EDR API → 503</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Retry with Backoff</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-grid">
            <div className="diagram-node">Success → Continue</div>
            <div className="diagram-node">Failure → Record + Continue/Stop</div>
          </div>
        </div>

        <h2>Practical rule</h2>
        <p>For every API integration, define these four things before writing the playbook:</p>
        <div className="article-table">
          <table>
            <thead>
              <tr>
                <th>Question</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>What errors are retryable?</td><td>429, 503</td></tr>
              <tr><td>How many retries?</td><td>3</td></tr>
              <tr><td>How long between retries?</td><td>2s → 4s → 8s</td></tr>
              <tr><td>What happens after failure?</td><td>Log + continue/stop</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Key takeaway</h2>
        <p>
          Don&apos;t build automation around the assumption <strong>“API call = success.”</strong>
        </p>
        <p>
          Build it around <strong>“API call → success OR controlled failure.”</strong>
        </p>
        <p>
          This small design change makes SOAR and Python automations significantly more reliable in production.
        </p>

        <p className="article-tags">
          <strong>Tags:</strong> API Automation · SOAR · Cybersecurity Automation · Python · Error Handling · Retry · Exponential Backoff
        </p>
      </article>
    </main>
  );
}
