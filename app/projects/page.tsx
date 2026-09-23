import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - TrffnSec",
  description:
    "Security tools, experiments, research utilities, and projects built by TrffnSec.",
};

const projects = [
  {
    no: "01",
    status: "ACTIVE",
    version: "v0.2.0",
    title: "VulnWatch",
    code: "VULNWATCH",
    description:
      "A Chrome extension for passive technology detection, version evidence, and known-version vulnerability intelligence.",
    tags: [
      "CHROME",
      "SECURITY",
      "OSV",
      "PROJECTDISCOVERY",
      "RECON",
    ],
    image:
      "https://raw.githubusercontent.com/TrffnSec/VulnWatch/main/screenshots/overview-dark.png",
    href: "/projects/vulnweb",
    github: "https://github.com/TrffnSec/VulnWatch",
  },
] as const;

export default function ProjectsPage() {
  return (
    <main>
      <section className="inner-hero shell projects-index-hero">
        <div className="inner-hero-index">
          <span>06</span>
          <i />
        </div>

        <div className="inner-hero-copy">
          <p className="section-overline">
            PROJECTS / THINGS I BUILT BECAUSE I NEEDED THEM
          </p>

          <h1>
            Built to solve
            <br />
            <em>my own problems.</em>
          </h1>

          <p>
            Security tools, research experiments, browser utilities, and
            whatever else escaped the terminal and became an actual project.
          </p>
        </div>

        <div className="inner-hero-code">
          <span>PROJECTS</span>
          <strong>{String(projects.length).padStart(2, "0")}</strong>

          <span>STATUS</span>
          <b>BUILDING</b>

          <span>MODE</span>
          <strong>PUBLIC</strong>
        </div>
      </section>

      <section className="content-section shell projects-index-section">
        <div className="section-kicker">
          <span>01</span>
          <p>PROJECT INDEX / PICK A SIGNAL</p>
        </div>

        <div className="section-heading-row">
          <h2>
            Tools from
            <br />
            <em>the lab.</em>
          </h2>

          <p>
            Some are polished. Some are experiments. All of them started
            because doing something manually one more time felt unreasonable.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-index-card depth-card" key={project.code}>
              <a
                className="project-index-main"
                href={project.href}
                aria-label={`Open ${project.title}`}
              >
                <div className="project-index-image">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />

                  <div className="project-index-overlay" />

                  <span className="project-index-no">
                    {project.no}
                  </span>

                  <div className="project-index-status">
                    <i />
                    {project.status}
                  </div>

                  <div className="project-index-scan" />
                </div>

                <div className="project-index-copy">
                  <div className="project-index-meta">
                    <span>{project.code}</span>
                    <span>{project.version}</span>
                  </div>

                  <h2>{project.title}</h2>

                  <p>{project.description}</p>

                  <div className="project-index-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-index-open">
                    <span>OPEN PROJECT</span>
                    <strong>↗</strong>
                  </div>
                </div>
              </a>

              <a
                className="project-index-github"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <span>SOURCE / GITHUB</span>
                <span>↗</span>
              </a>
            </article>
          ))}

          <article className="project-index-card project-index-placeholder depth-card">
            <div className="project-placeholder-inner">
              <span>02 / NEXT</span>

              <div className="project-placeholder-glyph" aria-hidden="true">
                <i />
                <i />
                <b>+</b>
              </div>

              <h3>Something else is cooking.</h3>

              <p>
                More security tooling and research experiments will appear here
                when they survive long enough to deserve a name.
              </p>

              <code>STATUS / BUILDING</code>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-section shell projects-index-contact">
        <div className="contact-orbit" aria-hidden="true">
          <i />
          <i />
          <b>T/</b>
        </div>

        <p className="section-overline">
          BUILD / BREAK / FIX / PUSH
        </p>

        <h2>
          More weird things
          <br />
          <em>coming soon.</em>
        </h2>

        <a
          className="button button-primary contact-button"
          href="https://github.com/TrffnSec"
          target="_blank"
          rel="noreferrer"
        >
          <span>Browse GitHub</span>
          <span>↗</span>
        </a>
      </section>
    </main>
  );
}
