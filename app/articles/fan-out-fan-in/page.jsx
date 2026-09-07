import Link from 'next/link';

export const metadata = {
  title: 'Integration Patterns: Fan-Out and Fan-In for Reliable Automation',
  description: 'How parallel enrichment, API orchestration, partial failures, and correlation help build resilient security automation workflows.'
};

export default function ArticlePage() {
  return (
    <main className="article-page">
      <article className="article-content">
        <Link href="/#articles" className="article-back">← Back to Articles</Link>
        <p className="eyebrow">INTEGRATION PATTERNS · 07 SEP 2026</p>
        <h1>Fan-Out and Fan-In for Reliable Automation</h1>
        <p className="article-lead">
          Security automation often needs information from multiple systems before it can make a decision. Running every integration sequentially makes the workflow slower and increases the impact of a single slow API. Fan-out and fan-in provide a cleaner pattern for parallel enrichment and controlled aggregation.
        </p>

        <h2>The problem</h2>
        <p>
          Consider an alert containing a suspicious IP address. A SOAR workflow may need to query threat intelligence, reputation, asset context, historical activity, and an internal database. If each API call runs one after another, total processing time becomes the sum of all API latencies.
        </p>
        <p>
          Worse, one slow or failed integration can delay the entire workflow. Production automation needs to tolerate partial failures without losing the overall investigation.
        </p>

        <h2>Fan-out: run independent work in parallel</h2>
        <p>
          Fan-out means taking one event and distributing it to multiple independent processing paths. Each branch performs a different enrichment or action at the same time.
        </p>
        <div className="article-diagram" role="img" aria-label="Fan-out from alert to parallel enrichment systems and fan-in to a decision">
          <div className="diagram-node">Security Alert</div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-grid">
            <div className="diagram-node">Threat Intel</div>
            <div className="diagram-node">Reputation</div>
            <div className="diagram-node">Asset Context</div>
            <div className="diagram-node">History</div>
          </div>
          <div className="diagram-arrow">↓</div>
          <div className="diagram-node">Aggregate Evidence → Decision</div>
        </div>
        <p>
          The branches are independent, so they can execute concurrently. The workflow does not need to wait for one enrichment before starting the next.
        </p>

        <h2>Fan-in: bring the evidence back together</h2>
        <p>
          Fan-in is the aggregation stage. Results from the parallel branches are collected, normalized, and correlated using a common identifier such as an alert ID or correlation ID.
        </p>
        <p>
          The important point is that fan-in should not assume every branch succeeded. A missing threat-intelligence response should be represented as missing evidence rather than silently treated as a negative verdict.
        </p>

        <h2>Handling partial failures</h2>
        <p>A production workflow should define what happens when individual branches fail:</p>
        <ul>
          <li>Apply timeouts to every external API call.</li>
          <li>Retry transient failures such as HTTP 429 and selected 5xx responses.</li>
          <li>Keep failed enrichment separate from a clean or negative result.</li>
          <li>Continue when the failed branch is non-critical.</li>
          <li>Escalate when a required evidence source is unavailable.</li>
          <li>Record the status and latency of every branch for observability.</li>
        </ul>

        <h2>A practical SOAR pattern</h2>
        <p>
          A useful implementation is: receive the alert → normalize the IOC → fan out enrichment requests → validate and normalize responses → fan in the evidence → apply deterministic policy → perform the approved action.
        </p>
        <p>
          For example, a high-confidence malicious IP could trigger containment, while an inconclusive result could route to analyst review. The decision layer should remain separate from the enrichment layer so that collecting evidence does not automatically cause a response action.
        </p>

        <h2>Production considerations</h2>
        <p>
          Parallelism improves latency, but unrestricted concurrency can overload downstream APIs. Use bounded concurrency, rate limits, timeouts, correlation IDs, structured logs, and clear failure states. For long-running workflows, queues and workers can provide additional control over load and retries.
        </p>

        <h2>Key takeaway</h2>
        <p>
          <strong>Fan-out improves speed by parallelizing independent work; fan-in improves reliability by bringing those results together into a controlled decision point.</strong> Combined with validation, timeouts, retries, rate limiting, and observability, this pattern is a strong foundation for resilient security automation.
        </p>
      </article>
    </main>
  );
}
