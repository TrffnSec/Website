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
    note:
      "Built because copying version numbers into vulnerability databases all day was starting to feel less like hacking and more like unpaid data entry.",
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

  {
    no: "02",
    status: "ACTIVE",
    version: "v0.2.2",
    title: "CV Analysis Studio",
    code: "BIO???",
    description:
      "A Streamlit application for cyclic-voltammetry data analysis, marker review, electrochemical calculations, and Excel export.",
    note:
      "Built for a friend's biomedical research project. I do cybersecurity. Somehow I ended up calculating IPA, IPC and ΔE. Nobody knows how we got here.",
    tags: [
      "BIOMEDICAL",
      "PYTHON",
      "STREAMLIT",
      "CV ANALYSIS",
      "EXCEL",
    ],
    image:
      "https://opengraph.githubassets.com/cv-analysis-studio/TrffnSec/cv-analysis-studio",
    href: "/projects/cv-analysis-studio",
    github: "https://github.com/TrffnSec/cv-analysis-studio",
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
            PROJECTS / APPARENTLY I HAVE RANGE
          </p>
      
          <h1>
            Built to solve
            <br />
            <em>suspiciously different problems.</em>
          </h1>
      
          <p>
            Security tooling, research experiments, browser utilities and,
            for reasons I still cannot fully explain, biomedical electrochemistry.
            Welcome to the repo where career boundaries go to die.
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
            Some solve security problems. One solves biomedical research problems
            because a friend asked nicely and apparently that is enough to change
            my entire technical domain for a weekend.
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
                  
                  <p className="project-index-note">
                    <span>// FIELD NOTE</span>
                    {project.note}
                  </p>
                  
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
              <span>03 / NEXT</span>

              <div className="project-placeholder-glyph" aria-hidden="true">
                <i />
                <i />
                <b>+</b>
              </div>

              <h3>Whatever happens next.</h3>
              
              <p>
                Probably security tooling. Possibly something from another scientific
                discipline I have absolutely no business entering. History suggests
                both are equally possible.
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
