import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Analysis Studio - TrffnSec Projects",
  description:
    "A Streamlit application for cyclic voltammetry data extraction, review, calculation, and Excel export.",
};

const features = [
  {
    no: "01",
    code: "IMPORT",
    title: "Drop in the data",
    text: "Upload individual CSV or Excel files, or feed an entire folder of supported CV datasets into the analysis workflow.",
  },
  {
    no: "02",
    code: "DETECT",
    title: "Find the important points",
    text: "Automatically identifies FBC, APC, BBC and CPC markers from cyclic voltammetry data, with a review threshold for uncertain detections.",
  },
  {
    no: "03",
    code: "REVIEW",
    title: "Human still gets a vote",
    text: "Detected markers can be reviewed and manually adjusted before any final calculation or export is accepted.",
  },
  {
    no: "04",
    code: "EXPORT",
    title: "Excel goes in. Better Excel comes out.",
    text: "Calculated IPA, IPC, IPA/IPC and ΔE values are assembled into a clean workbook ready for the next stage of research.",
  },
] as const;

const calculations = [
  ["IPA", "APC − FBC"],
  ["IPC", "BBC − CPC"],
  ["IPA / IPC", "IPA ÷ IPC"],
  ["ΔE", "EPA − EPC"],
] as const;

export default function CVAnalysisStudioPage() {
  return (
    <main>
      {/* HERO */}
      <section className="inner-hero shell projects-hero">
        <div className="inner-hero-index">
          <span>02</span>
          <i />
        </div>

        <div className="inner-hero-copy">
          <p className="section-overline">
            PROJECTS / BIOLOGY? CHEMISTRY? APPARENTLY YES.
          </p>

          <h1>
            Wait...
            <br />
            <em>this isn&apos;t cybersecurity.</em>
          </h1>

          <p>
            Correct. I checked twice. Somehow a security researcher ended up
            building a cyclic voltammetry analysis application for a biomedical
            research project. Long story. Useful tool.
          </p>
        </div>

        <div className="inner-hero-code">
          <span>DOMAIN</span>
          <strong>BIOMEDICAL</strong>

          <span>CONFUSION</span>
          <b>HIGH</b>

          <span>STATUS</span>
          <strong>WORKING</strong>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="content-section shell project-feature-section">
        <div className="section-kicker">
          <span>01</span>
          <p>CV ANALYSIS STUDIO / THE SCIENCE DETOUR</p>
        </div>

        <div className="project-feature-grid">
          <div className="project-feature-copy">
            <div className="project-status-row">
              <span className="project-live-dot" />
              <span>ACTIVE</span>
              <i />
              <span>v0.2.2</span>
              <i />
              <span>PYTHON / STREAMLIT</span>
            </div>

            <p className="section-overline">
              TRFFN / CV ANALYSIS STUDIO
            </p>

            <h2>
              A friend needed help.
              <br />
              <em>I somehow learned electrochemistry.</em>
            </h2>

            <p className="project-lede">
              CV Analysis Studio is a Streamlit application built to automate
              repetitive cyclic voltammetry data analysis for a biomedical
              research workflow.
            </p>

            <p>
              This project started because a friend needed a better way to
              process experimental CV datasets. The workflow involved locating
              specific electrochemical markers, calculating several derived
              values, reviewing questionable detections, and producing a clean
              Excel result.
            </p>

            <p>
              None of this was remotely related to my usual work in offensive
              security. Naturally, I built the application anyway.
            </p>

            <p>
              The result is a small analysis studio that accepts experimental
              data, performs automatic marker detection, lets the researcher
              verify or correct the results, calculates the required values,
              and exports everything into a final workbook.
            </p>

            <div className="project-actions">
              <a
                className="button button-primary"
                href="https://cv-analysis-studio.streamlit.app/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Open live app</span>
                <span>↗</span>
              </a>

              <a
                className="button button-quiet"
                href="https://github.com/TrffnSec/cv-analysis-studio"
                target="_blank"
                rel="noreferrer"
              >
                <span>View source</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          <a
            className="project-preview depth-card"
            href="https://github.com/TrffnSec/cv-analysis-studio"
            target="_blank"
            rel="noreferrer"
            aria-label="Open CV Analysis Studio on GitHub"
          >
            <div className="project-preview-top">
              <span>CV_ANALYSIS.STUDIO</span>
              <span>SCIENCE DETECTED</span>
            </div>

            <div className="project-preview-screen">
              <img
                src="https://opengraph.githubassets.com/cv-analysis-studio/TrffnSec/cv-analysis-studio"
                alt="CV Analysis Studio project"
                loading="lazy"
              />

              <div className="project-scan-line" />
            </div>

            <div className="project-preview-bottom">
              <span>PYTHON / STREAMLIT</span>
              <strong>VIEW SOURCE ↗</strong>
            </div>
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="content-section project-capabilities-section">
        <div className="shell">
          <div className="section-kicker">
            <span>02</span>
            <p>CAPABILITIES / WHAT THE SCIENCE MACHINE DOES</p>
          </div>

          <div className="section-heading-row">
            <h2>
              From raw curves
              <br />
              to <em>usable numbers.</em>
            </h2>

            <p>
              The goal was simple: remove repetitive manual processing without
              removing the researcher from the decision-making process.
              Automation handles the boring part. Humans still verify the
              science.
            </p>
          </div>

          <div className="project-capability-grid">
            {features.map((feature) => (
              <article
                className="project-capability-card depth-card"
                key={feature.code}
              >
                <div className="project-capability-top">
                  <span>{feature.no}</span>
                  <code>{feature.code}</code>
                </div>

                <div
                  className="project-capability-glyph"
                  aria-hidden="true"
                >
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

      {/* WORKFLOW */}
      <section className="content-section shell project-flow-section">
        <div className="section-kicker">
          <span>03</span>
          <p>WORKFLOW / FROM FILE TO RESULT</p>
        </div>

        <div className="section-heading-row">
          <h2>
            Upload.
            <br />
            Detect. <em>Review. Export.</em>
          </h2>

          <p>
            The application turns a repetitive analysis workflow into a guided
            pipeline while preserving manual review for detections that need a
            human eye.
          </p>
        </div>

        <div className="project-flow">
          <article>
            <span>01</span>

            <div>
              <small>IMPORT</small>
              <h3>Upload the experimental data</h3>
              <p>
                Load individual CSV, XLS, XLSX or XLSM files, or upload a folder
                containing multiple supported datasets.
              </p>
            </div>

            <code>files → workspace</code>
          </article>

          <article>
            <span>02</span>

            <div>
              <small>ANALYZE</small>
              <h3>Detect the CV markers</h3>
              <p>
                The application analyzes the data and identifies FBC, APC, BBC
                and CPC marker positions automatically.
              </p>
            </div>

            <code>curve → markers</code>
          </article>

          <article>
            <span>03</span>

            <div>
              <small>VERIFY</small>
              <h3>Review before trusting</h3>
              <p>
                Researchers can inspect the detected points and manually adjust
                them whenever automatic detection needs correction.
              </p>
            </div>

            <code>automation + human</code>
          </article>

          <article>
            <span>04</span>

            <div>
              <small>CALCULATE</small>
              <h3>Generate the electrochemical values</h3>
              <p>
                Once the marker positions are accepted, the application
                calculates IPA, IPC, IPA/IPC and ΔE.
              </p>
            </div>

            <code>markers → metrics</code>
          </article>

          <article>
            <span>05</span>

            <div>
              <small>EXPORT</small>
              <h3>Send it back to Excel</h3>
              <p>
                Final reviewed results are exported into a structured Excel
                workbook for the rest of the research workflow.
              </p>
            </div>

            <code>metrics → .xlsx</code>
          </article>
        </div>
      </section>

      {/* CALCULATIONS */}
      <section className="content-section project-provider-section">
        <div className="shell">
          <div className="section-kicker">
            <span>04</span>
            <p>MATH / YES, I ACTUALLY HAD TO IMPLEMENT THIS</p>
          </div>

          <div className="project-provider-layout">
            <div>
              <h2>
                Security guy
                <br />
                meets <em>electrochemistry.</em>
              </h2>

              <p>
                These are the derived values generated from the reviewed CV
                markers. At some point during development I stopped asking why
                I knew what APC and CPC meant and simply accepted my new life.
              </p>
            </div>

            <div className="project-provider-list">
              {calculations.map(([name, formula], index) => (
                <div key={name}>
                  <span>0{index + 1}</span>
                  <strong>{name}</strong>
                  <code>{formula}</code>
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
          <p>FIELD NOTES / HOW DID WE GET HERE?</p>
        </div>

        <div className="project-notes-grid">
          <article className="depth-card">
            <span>01 / ORIGIN STORY</span>

            <h3>This was not on the roadmap.</h3>

            <p>
              The project was built for a friend&apos;s biomedical research
              workflow. Apparently &quot;can you help me automate this?&quot;
              is all it takes to move me from vulnerability research into
              electrochemistry.
            </p>
          </article>

          <article className="depth-card">
            <span>02 / HUMAN IN THE LOOP</span>

            <h3>The app suggests. The researcher decides.</h3>

            <p>
              Automatic marker detection is useful, but experimental data is
              experimental data. Review and manual correction remain part of
              the workflow instead of pretending automation is infallible.
            </p>
          </article>

          <article className="depth-card">
            <span>03 / LESSON LEARNED</span>

            <h3>Code does not care what your field is.</h3>

            <p>
              Whether the input is an HTTP request or an electrochemical curve,
              the pattern is surprisingly familiar: understand the data,
              identify the important states, validate assumptions, and automate
              the boring part.
            </p>
          </article>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="content-section shell project-flow-section">
        <div className="section-kicker">
          <span>06</span>
          <p>STACK / WHAT HOLDS IT TOGETHER</p>
        </div>

        <div className="section-heading-row">
          <h2>
            Surprisingly normal
            <br />
            <em>software underneath.</em>
          </h2>

          <p>
            The scientific domain changed. The engineering problem did not:
            ingest data safely, make state visible, allow correction, calculate
            deterministically, and produce something useful.
          </p>
        </div>

        <div className="project-flow">
          <article>
            <span>01</span>

            <div>
              <small>LANGUAGE</small>
              <h3>Python</h3>
              <p>
                Core analysis, marker detection, calculations and export logic.
              </p>
            </div>

            <code>python</code>
          </article>

          <article>
            <span>02</span>

            <div>
              <small>INTERFACE</small>
              <h3>Streamlit</h3>
              <p>
                Provides the browser-based analysis interface and hosted
                workflow.
              </p>
            </div>

            <code>streamlit</code>
          </article>

          <article>
            <span>03</span>

            <div>
              <small>INPUT</small>
              <h3>CSV + Excel</h3>
              <p>
                Supports CSV, XLS, XLSX and XLSM datasets used by the research
                workflow.
              </p>
            </div>

            <code>csv / xls / xlsx</code>
          </article>

          <article>
            <span>04</span>

            <div>
              <small>OUTPUT</small>
              <h3>Structured workbooks</h3>
              <p>
                Final marker values and calculated results are returned as an
                Excel workbook.
              </p>
            </div>

            <code>analysis → excel</code>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="contact-section shell project-contact">
        <div className="contact-orbit" aria-hidden="true">
          <i />
          <i />
          <b>CV</b>
        </div>

        <p className="section-overline">
          CYBERSECURITY RESEARCHER / TEMPORARILY LOST IN SCIENCE
        </p>

        <h2>
          Somehow...
          <br />
          <em>it actually works.</em>
        </h2>

        <div className="project-bottom-actions">
          <a
            className="button button-primary contact-button"
            href="https://cv-analysis-studio.streamlit.app/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Launch CV Analysis Studio</span>
            <span>↗</span>
          </a>

          <a
            className="text-link"
            href="https://github.com/TrffnSec/cv-analysis-studio"
            target="_blank"
            rel="noreferrer"
          >
            Source on GitHub <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
