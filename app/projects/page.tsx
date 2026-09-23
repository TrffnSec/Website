// app/projects/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - TrffnSec",
  description:
    "Security tools, experiments, and research projects built by TrffnSec.",
};

const vulWatchFeatures = [
  {
    no: "01",
    code: "DETECT",
    title: "Technology detection",
    text: "Identifies exposed CMSs, JavaScript libraries, frameworks, WordPress components, and selected server or language signals.",
  },
  {
    no: "02",
    code: "VERSION",
    title: "Evidence first",
    text: "Shows the runtime value, generator tag, asset path, or response header behind a detected technology and version.",
  },
  {
    no: "03",
    code: "INTEL",
    title: "Vulnerability intelligence",
    text: "Checks supported package versions against OSV and supports optional GitHub, NVD, WPScan, and ProjectDiscovery integrations.",
  },
  {
    no: "04",
    code: "QUIET",
    title: "Quiet by default",
    text: "Strong affected-version matches can surface as badges while uncertain results stay inside the inspector instead of creating noise.",
  },
] as const;

const providers = [
  ["OSV", "NO KEY"],
  ["PROJECTDISCOVERY", "OPTIONAL KEY"],
  ["GITHUB", "OPTIONAL KEY"],
  ["NVD", "OPTIONAL KEY"],
  ["WPSCAN", "OPTIONAL KEY"],
] as const;

export default function ProjectsPage() {
  return (
    <main>
      {/* HERO */}
      <section className="inner-hero shell projects-hero">
        <div className="inner-hero-index">
          <span>06</span>
          <i />
        </div>

        <div className="inner-hero-copy">
          <p className="section-overline">PROJECTS / BUILD → BREAK → AUTOMATE</p>

          <h1>
            Tools built for
            <br />
            <em>the hunt.</em>
          </h1>

          <p>
            Security tooling, experiments, research utilities, and the things I
            build when repeating the same manual task starts getting annoying.
          </p>
        </div>

        <div className="inner-hero-code">
          <span>PROJECTS</span>
          <strong>ACTIVE</strong>

          <span>FOCUS</span>
          <b>SECURITY</b>

          <span>BUILD</span>
          <strong>PUBLIC</strong>
        </div>
      </section>

      {/* VULNWATCH FEATURE */}
      <section className="content-section shell project-feature-section">
        <div className="section-kicker">
          <span>01</span>
          <p>VULNWATCH / BROWSER SECURITY TOOLING</p>
        </div>

        <div className="project-feature-grid">
          <div className="project-feature-copy">
            <div className="project-status-row">
              <span className="project-live-dot" />
              <span>ACTIVE DEVELOPMENT</span>
              <i />
              <span>v0.2.0</span>
              <i />
              <span>MANIFEST V3</span>
            </div>

            <p className="section-overline">TRFFN / VULNWATCH</p>

            <h2>
              Less tab archaeology.
              <br />
              <em>More actual research.</em>
            </h2>

            <p className="project-lede">
              VulnWatch is a Chrome extension for passive technology detection
              and known-version vulnerability intelligence.
            </p>

            <p>
              It watches the technical signals a website already exposes,
              identifies supported technologies and versions, and helps connect
              those observations to known security advisories.
            </p>

            <p>
              The goal is not to replace manual research. It removes the boring
              part: finding a library, copying the version, opening another tab,
              searching advisories, losing the evidence, and doing it again.
            </p>

            <div className="project-actions">
              <a
                className="button button-primary"
                href="https://github.com/TrffnSec/VulnWatch"
                target="_blank"
                rel="noreferrer"
              >
                <span>View on GitHub</span>
                <span>↗</span>
              </a>

              <a
                className="button button-quiet"
                href="https://github.com/TrffnSec/VulnWatch/releases/latest"
                target="_blank"
                rel="noreferrer"
              >
                <span>Latest release</span>
                <span>↓</span>
              </a>
            </div>
          </div>

          <a
            className="project-preview depth-card"
            href="https://github.com/TrffnSec/VulnWatch"
            target="_blank"
            rel="noreferrer"
            aria-label="Open VulnWatch on GitHub"
          >
            <div className="project-preview-top">
              <span>VULNWATCH.UI</span>
              <span>LIVE PREVIEW</span>
            </div>

            <div className="project-preview-screen">
              <img
                src="https://raw.githubusercontent.com/TrffnSec/VulnWatch/main/screenshots/overview-dark.png"
                alt="VulnWatch Chrome extension interface"
                loading="lazy"
              />

              <div className="project-scan-line" />
            </div>

            <div className="project-preview-bottom">
              <span>PASSIVE DETECTION</span>
              <strong>OPEN PROJECT ↗</strong>
            </div>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="content-section project-capabilities-section">
        <div className="shell">
          <div className="section-kicker">
            <span>02</span>
            <p>CAPABILITIES / WHAT IT ACTUALLY DOES</p>
          </div>

          <div className="section-heading-row">
            <h2>
              Observe the signal.
              <br />
              <em>Keep the evidence.</em>
            </h2>

            <p>
              VulnWatch separates observations from conclusions. Detection,
              version evidence, and advisory intelligence remain visible so a
              researcher can decide what is actually worth investigating.
            </p>
          </div>

          <div className="project-capability-grid">
            {vulWatchFeatures.map((feature) => (
              <article
                className="project-capability-card depth-card"
                key={feature.code}
              >
                <div className="project-capability-top">
                  <span>{feature.no}</span>
                  <code>{feature.code}</code>
                </div>

                <div className="project-capability-glyph" aria-hidden="true">
                  <i />
                  <i />
                  <b>{feature.code.slice(0, 2)}</b>
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="content-section shell project-flow-section">
        <div className="section-kicker">
          <span>03</span>
          <p>WORKFLOW / PASSIVE BY DESIGN</p>
        </div>

        <div className="section-heading-row">
          <h2>
            Browser signal
            <br />
            to <em>research lead.</em>
          </h2>

          <p>
            No automatic exploitation. No hidden scanner firing requests at the
            target. VulnWatch starts with evidence already exposed to the
            browser.
          </p>
        </div>

        <div className="project-flow">
          <article>
            <span>01</span>
            <div>
              <small>OBSERVE</small>
              <h3>Read exposed signals</h3>
              <p>
                DOM metadata, runtime values, asset paths, and selected response
                headers.
              </p>
            </div>
            <code>browser → evidence</code>
          </article>

          <article>
            <span>02</span>
            <div>
              <small>IDENTIFY</small>
              <h3>Map technology + version</h3>
              <p>
                Preserve the evidence and classify how confident the version
                observation actually is.
              </p>
            </div>
            <code>evidence → component</code>
          </article>

          <article>
            <span>03</span>
            <div>
              <small>CHECK</small>
              <h3>Query vulnerability intelligence</h3>
              <p>
                Supported exact package versions can be checked against known
                advisory sources.
              </p>
            </div>
            <code>component → advisory</code>
          </article>

          <article>
            <span>04</span>
            <div>
              <small>VERIFY</small>
              <h3>Research the actual impact</h3>
              <p>
                A version match is a lead. Applicability and exploitability
                still require human validation.
              </p>
            </div>
            <code>lead → researcher</code>
          </article>
        </div>
      </section>

      {/* PROVIDERS */}
      <section className="content-section project-provider-section">
        <div className="shell">
          <div className="section-kicker">
            <span>04</span>
            <p>INTELLIGENCE / OPTIONAL PROVIDERS</p>
          </div>

          <div className="project-provider-layout">
            <div>
              <h2>
                Bring your keys.
                <br />
                <em>Or don&apos;t.</em>
              </h2>

              <p>
                Core technology detection does not require an account.
                VulnWatch can use additional vulnerability intelligence
                providers when the researcher chooses to configure them.
              </p>
            </div>

            <div className="project-provider-list">
              {providers.map(([name, status], index) => (
                <div key={name}>
                  <span>0{index + 1}</span>
                  <strong>{name}</strong>
                  <code>{status}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="content-section shell project-notes-section">
        <div className="section-kicker">
          <span>05</span>
          <p>NOTES / READ BEFORE PANICKING</p>
        </div>

        <div className="project-notes-grid">
          <article className="depth-card">
            <span>01 / MATCH ≠ EXPLOIT</span>
            <h3>An advisory match is a lead.</h3>
            <p>
              A detected affected version does not automatically prove that the
              vulnerable function is reachable, exploitable, or eligible for a
              security report.
            </p>
          </article>

          <article className="depth-card">
            <span>02 / PASSIVE FIRST</span>
            <h3>No automatic exploitation.</h3>
            <p>
              VulnWatch is built around passive browser-side observation and
              read-only vulnerability intelligence lookups.
            </p>
          </article>

          <article className="depth-card">
            <span>03 / YOUR DATA</span>
            <h3>No VulnWatch telemetry backend.</h3>
            <p>
              Detection runs locally. Optional external providers receive only
              the information required for the lookup being requested.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section shell project-contact">
        <div className="contact-orbit" aria-hidden="true">
          <i />
          <i />
          <b>TR</b>
        </div>

        <p className="section-overline">SOURCE AVAILABLE / BREAK IT RESPONSIBLY</p>

        <h2>
          Found something
          <br />
          <em>weird?</em>
        </h2>

        <div className="project-bottom-actions">
          <a
            className="button button-primary contact-button"
            href="https://github.com/TrffnSec/VulnWatch"
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore VulnWatch</span>
            <span>↗</span>
          </a>

          <a
            className="text-link"
            href="https://github.com/TrffnSec/VulnWatch/issues"
            target="_blank"
            rel="noreferrer"
          >
            Report an issue <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
