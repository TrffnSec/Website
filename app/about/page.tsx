import type { Metadata } from "next";
import { acknowledgements } from "../../lib/content";

export const metadata: Metadata = { title: "About — TrffnSec" };

export default function AboutPage() {
  return (
    <main>
      <section className="inner-hero shell">
        <div className="inner-hero-index"><span>01</span><i /></div>
        <div className="inner-hero-copy">
          <p className="section-overline">IDENTITY / TRIFFIN AUGUSTINE</p>
          <h1>Behind the<br /><em>handle.</em></h1>
          <p>Penetration tester. Bug bounty hunter. Security researcher. A curiosity problem that turned into a career path.</p>
        </div>
        <div className="inner-hero-code" aria-hidden="true"><span>PROFILE_ID</span><strong>TRF-01</strong><span>STATUS</span><b>ACTIVE</b></div>
      </section>

      <section className="content-section shell about-detail">
        <div className="about-photo depth-card">
          <img src="https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/my_picture.png" alt="Triffin Augustine (TrffnSec)" />
          <div className="about-photo-grid" aria-hidden="true" />
          <div className="about-photo-label"><span>TRIFFIN AUGUSTINE AKA</span><strong>TRFFNSEC</strong></div>
        </div>
        <div className="about-story">
          <div className="section-kicker"><span>ORIGIN</span><p>CURIOUS / BY DEFAULT</p></div>
          <h2>I like finding the part of a system that <em>doesn&apos;t behave.</em></h2>
          <p>I&apos;m Triffin Augustine, widely known in the security community as TrffnSec. I&apos;m a penetration tester, bug bounty hunter, and security researcher with a strong passion for discovering real-world vulnerabilities and helping organizations strengthen their security posture.</p>
          <p>My journey into ethical hacking started from pure curiosity and evolved into a professional pursuit as I began hunting vulnerabilities across public and private bug bounty programs. Over time, I&apos;ve identified and responsibly disclosed security issues including XSS, Host Header Injection, IDOR, access control flaws, and logic vulnerabilities across well-known platforms, universities, and enterprise applications.</p>
          <p>Today, I document findings through detailed write-ups on Medium, sharing attack paths, methodologies, and lessons learned. Alongside hunting, I focus on continuous learning, tool development, and community knowledge-sharing — practical, experience-driven security research is the whole point.</p>
          <div className="focus-tags"><span>WEB SECURITY</span><span>RECON</span><span>BUG BOUNTY</span><span>TOOLING</span><span>TRAINING</span></div>
        </div>
      </section>

      <section className="content-section acknowledgement-section">
        <div className="shell">
          <div className="section-kicker"><span>PROOF</span><p>RESPONSIBLE DISCLOSURE / ACKNOWLEDGEMENTS</p></div>
          <div className="section-heading-row"><h2>Some signals made it<br /><em>back from the wild.</em></h2><p>Selected acknowledgements from responsibly disclosed security research.</p></div>
          <div className="ack-list">
            {acknowledgements.map(([name, text], index) => (
              <article className="ack-row" key={name}>
                <span className="ack-index">0{index + 1}</span><h3>{name}</h3><p>{text}</p><i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section shell principles-section">
        <div className="section-kicker"><span>MODE</span><p>THE OPERATING PRINCIPLES</p></div>
        <div className="principle-grid">
          <article><small>01 / CURIOSITY</small><h3>Ask why twice.</h3><p>The first answer explains the feature. The second often explains the vulnerability.</p></article>
          <article><small>02 / EVIDENCE</small><h3>Make it reproducible.</h3><p>A clean attack path, negative controls, and useful evidence beat a dramatic claim every time.</p></article>
          <article><small>03 / SHARE</small><h3>Leave a trail.</h3><p>Good notes compound. Write-ups, tools, and methodology turn one hunt into the next researcher&apos;s head start.</p></article>
        </div>
      </section>
    </main>
  );
}
