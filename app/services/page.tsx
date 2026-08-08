import type { Metadata } from "next";
import { RotatingQuery } from "../../components/rotating-query";

export const metadata: Metadata = { title: "Services - TrffnSec" };

const services = [
  { code: "SURFACE", title: "Attack Surface & Recon", text: "A map-first look at domains, endpoints, JavaScript, forgotten paths, and the assumptions hiding between assets.", tags: ["ASSET DISCOVERY", "JS ANALYSIS", "ENDPOINTS", "RECON"] },
  { code: "WEB", title: "Web Application Testing", text: "Focused offensive testing for web applications, with attention to access control, injection, browser-side issues, and business logic.", tags: ["ACCESS CONTROL", "XSS", "IDOR", "LOGIC"] },
  { code: "RESEARCH", title: "Security Research & Training", text: "Practical knowledge transfer built around real attack paths, research methodology, reporting, and how to think beyond a checklist.", tags: ["TRAINING", "METHODOLOGY", "REPORTING", "BUG BOUNTY"] },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="service-hero shell">
        <div className="service-hero-copy">
          <p className="section-overline"><span className="status-dot" /> OFFENSIVE WEB SECURITY / SERVICES</p>
          <h1>Finding web<br />vulnerabilities<br /><em>before attackers do.</em></h1>
          <RotatingQuery />
          <a className="button button-primary" href="mailto:trffnsec@gmail.com"><span>Start a conversation</span><span>↗</span></a>
        </div>
        <div className="service-radar depth-card" aria-hidden="true">
          <div className="radar-grid" /><div className="radar-circle r1" /><div className="radar-circle r2" /><div className="radar-circle r3" />
          <div className="radar-sweep" /><i className="radar-dot d1" /><i className="radar-dot d2" /><i className="radar-dot d3" />
          <div className="radar-readout"><span>SURFACE_SCAN</span><strong>03 SIGNALS</strong><small>AUTHORISED SCOPE</small></div>
        </div>
      </section>

      <section className="content-section service-list-section">
        <div className="shell">
          <div className="section-kicker"><span>01</span><p>CAPABILITIES / WHAT I DO</p></div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card depth-card" key={service.code}>
                <div className="service-card-top"><span>0{index + 1}</span><code>{service.code}</code></div>
                <div className="service-icon" aria-hidden="true"><i /><i /><b>{service.code.slice(0,2)}</b></div>
                <h2>{service.title}</h2><p>{service.text}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section shell process-section">
        <div className="section-kicker"><span>02</span><p>PROCESS / SIGNAL TO REPORT</p></div>
        <div className="section-heading-row"><h2>Method over<br /><em>random motion.</em></h2><p>A tight loop keeps the research grounded: understand the system, isolate the anomaly, prove control, then communicate the risk clearly.</p></div>
        <div className="process-line">
          {["MAP", "MODEL", "TEST", "PROVE", "REPORT"].map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong><i /></div>)}
        </div>
      </section>

      <section className="contact-section shell compact-contact">
        <p className="section-overline">NEED A SECOND SET OF EYES?</p>
        <h2>Let&apos;s talk <em>scope.</em></h2>
        <a className="button button-primary contact-button" href="mailto:augustinetriffin@gmail.com"><span>CONTACT TRFFNSEC</span><span>↗</span></a>
      </section>
    </main>
  );
}
