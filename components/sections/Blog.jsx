export default function Blog() {
  const recentPosts = [
    {
      id: 1,
      title: "AI Security Basics — LLMs in the Organisation",
      excerpt: "Organisations are deploying LLMs faster than they are securing them. This post covers how LLMs enter an organisation and all ten threats from the OWASP Top 10 for LLM Applications 2025.",
      date: "April 26, 2026",
      category: "AI Security",
      icon: "🤖",
      url: "https://cyberunfo.wordpress.com/2026/04/26/ai-security-basics-llms-in-the-organisation/",
    },
    {
      id: 2,
      title: "Model Context Protocol – MCP",
      excerpt: "MCP lets AI agents talk to real security tools — Splunk, SOAR, VirusTotal, Jira — in one natural language request. No tab switching. No manual queries.",
      date: "April 19, 2026",
      category: "Detection Engineering",
      icon: "🔧",
      url: "https://cyberunfo.wordpress.com/2026/04/19/model-context-protocol-mcp/",
    },
    {
      id: 3,
      title: "Designing Detection Algorithms — PowerShell Execution",
      excerpt: "PowerShell is one of the most abused techniques in the attacker's toolkit. Learn how to detect and hunt for PowerShell execution attacks using Technique T1059.001.",
      date: "April 5, 2026",
      category: "Detection Engineering",
      icon: "🔍",
      url: "https://cyberunfo.wordpress.com/2026/04/05/designing-detection-algorithms-powershell-execution/",
    },
    {
      id: 4,
      title: "Designing Risk-Based Detection for Security Alerts Using Context",
      excerpt: "In a real SOC environment, alerts come continuously. The common mistake is treating all alerts the same. Learn how to design risk-based detection using context.",
      date: "April 4, 2026",
      category: "Detection Engineering",
      icon: "⚠️",
      url: "https://cyberunfo.wordpress.com/2026/04/04/designing-risk-based-detection-for-security-alerts-using-context/",
    },
    {
      id: 5,
      title: "API Tokens: The Digital Keys That Guard Every Modern Application",
      excerpt: "Every single day, developers and security engineers write code that talks to other code. This post covers how API tokens work and how to secure them.",
      date: "March 19, 2026",
      category: "API Security",
      icon: "🔐",
      url: "https://cyberunfo.wordpress.com/2026/03/19/api-tokens-the-digital-keys-that-guard-every-modern-application/",
    },
    {
      id: 6,
      title: "How SOAR Saves GSOC Analysts From Alert Overload — A Beginner's Guide",
      excerpt: "Imagine your first day in a Global Security Operations Center. Your SIEM dashboard is red everywhere. 500+ alerts. Most are probably harmless. Some could be serious. Learn how SOAR automation saves analysts from burnout.",
      date: "August 15, 2025",
      category: "SOAR Playbook",
      icon: "⚡",
      url: "https://cyberunfo.wordpress.com/2025/08/15/how-soar-saves-gsoc-analysts-from-alert-overload-a-beginners-guide/",
    }
  ];

  return (
    <section className="section bg-light" id="blog">
      <div className="container-lg">
        <h2 className="section-title">
          <span style={{ marginRight: '0.5rem' }}>📚</span>
          From the CyberInfo Blog
        </h2>

        <div className="row g-4 mb-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="col-md-6 col-lg-4">
              <div className="card" style={{ borderTop: '3px solid #0066cc' }}>
                <div className="card-body d-flex flex-column">
                  {/* Post Icon */}
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                    {post.icon}
                  </div>

                  {/* Date & Category */}
                  <div className="mb-2">
                    <small className="text-muted">
                      📅 {post.date}
                    </small>
                    <br />
                    <span
                      className="badge"
                      style={{
                        fontSize: '0.75rem',
                        backgroundColor: '#e8f4f8',
                        color: '#0066cc',
                        border: '1px solid #0066cc',
                        marginTop: '0.5rem'
                      }}
                    >
                      {post.icon} {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h5 className="card-title">{post.title}</h5>

                  {/* Excerpt */}
                  <p className="card-text flex-grow-1">{post.excerpt}</p>

                  {/* Read Link */}
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-external"
                    style={{ fontWeight: '600', color: '#0066cc' }}
                  >
                    📖 Read Full Post →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <p className="text-muted mb-3">
              ✍️ Explore more articles on security automation, detection engineering, SOAR, APIs, and threat hunting
            </p>
            <a
              href="https://cyberunfo.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              🌐 Visit CyberInfo Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}