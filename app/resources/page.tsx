import type { Metadata } from "next";
import { additionalResources, books, learningLinks } from "../../lib/content";

export const metadata: Metadata = { title: "Bug Bounty Resources - TrffnSec" };

const fundamentals = [
  ["HTML", "Understand forms, iframes, document structure, and how application data moves through the page."],
  ["JavaScript", "Learn DOM manipulation, events, Fetch/AJAX, client-side validation, and how to read minified code for hidden functionality."],
  ["Linux", "Get comfortable navigating files, permissions, processes, pipes, grep, find, chmod, and the command-line workflows security tools expect."],
  ["Python / Go", "Add a scripting language. Python is versatile for automation and APIs; Go is excellent for concurrent recon tooling and modifying the modern security toolchain."],
] as const;

const recon = [
  ["SUBDOMAIN ENUM", "Amass, Subfinder, Assetfinder - map the names before you map the application."],
  ["ENDPOINT DISCOVERY", "httpx, ffuf, crawling, and application navigation to uncover less obvious paths."],
  ["WEB ARCHIVES", "Use historical URLs to find deprecated endpoints and old application behaviour."],
  ["GITHUB DORKS", "Search public code for forgotten endpoints, configuration, and other exposed clues."],
  ["AUTOMATION", "Connect small tools into repeatable workflows. Scale only after you understand what the output means."],
] as const;

export default function ResourcesPage() {
  return (
    <main>
      <section className="resource-hero shell">
        <div className="resource-hero-copy">
          <p className="section-overline">THE COMPLETE GUIDE / START HERE</p>
          <h1>Getting started<br />in <em>bug bounty.</em></h1>
          <p>Before you run the tools, understand the system. This is the path I&apos;d give someone who wants enough foundation to know why a test works - not just what command to paste.</p>
        </div>
        <div className="learning-map depth-card" aria-label="Learning map">
          <span className="map-label">LEARNING_PATH.TRACE</span>
          <div className="map-node active"><i />WEB BASICS<small>START</small></div>
          <b /><div className="map-node"><i />LANGUAGE<small>HTML / JS</small></div>
          <b /><div className="map-node"><i />SECURITY<small>OWASP / LABS</small></div>
          <b /><div className="map-node"><i />RECON<small>MAP / CRAWL</small></div>
          <b /><div className="map-node"><i />HUNT<small>THINK / TEST</small></div>
        </div>
      </section>

      <section className="content-section shell foundation-section">
        <div className="section-kicker"><span>01</span><p>FOUNDATION / UNDERSTAND THE WEB</p></div>
        <div className="section-heading-row"><h2>Learn what you&apos;re<br /><em>trying to break.</em></h2><p>Hacking is not running tools. You need a mental model of how browsers, servers, networks, and application code communicate before anomalies mean anything.</p></div>
        <div className="learning-link-grid">
          {learningLinks.slice(0, 3).map(([title, text, href], index) => <a className="learning-link depth-card" href={href} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>↗</i></a>)}
        </div>
        <div className="fundamental-grid">
          {fundamentals.map(([title, text], index) => <article key={title}><span>0{index + 4}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="content-section academy-section">
        <div className="shell">
          <div className="section-kicker"><span>02</span><p>LEARNING PATH / PRACTICE</p></div>
          <div className="academy-grid">
            <div className="academy-copy"><h2>Stop reading.<br /><em>Touch the app.</em></h2><p>Once the fundamentals make sense, hands-on labs turn vocabulary into instinct. Start with PortSwigger&apos;s Web Security Academy, then use the OWASP Top 10 as a map - not a finish line.</p></div>
            <div className="academy-links">
              {learningLinks.slice(3).map(([title, text, href], index) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><div><strong>{title}</strong><small>{text}</small></div><i>↗</i></a>)}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section shell recon-section">
        <div className="section-kicker"><span>03</span><p>RECON / FIND THE SURFACE</p></div>
        <div className="section-heading-row"><h2>Good recon creates<br /><em>better questions.</em></h2><p>Gather enough context to see what is normal, then look for the asset, endpoint, or behaviour that does not fit the model.</p></div>
        <div className="recon-steps">
          {recon.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><code>{index === 0 ? "amass / subfinder" : index === 1 ? "httpx / ffuf / katana" : index === 2 ? "wayback" : index === 3 ? "github" : "bash / python / go"}</code></article>)}
        </div>
      </section>

      <section className="content-section resource-library-section">
        <div className="shell">
          <div className="section-kicker"><span>04</span><p>MORE SIGNAL / RESOURCES</p></div>
          <div className="resource-columns">
            <div><h2>Labs, reports<br />&amp; <em>good noise.</em></h2><div className="resource-link-list">{additionalResources.map(([title, text, href]) => <a href={href} target="_blank" rel="noreferrer" key={title}><div><strong>{title}</strong><span>{text}</span></div><i>↗</i></a>)}</div></div>
            <div><h2>Books worth<br /><em>marking up.</em></h2><div className="book-list">{books.map(([title, href], index) => <a href={href} target="_blank" rel="noreferrer" key={title}><span>0{index + 1}</span><strong>{title}</strong><i>↗</i></a>)}</div></div>
          </div>
        </div>
      </section>

      <section className="content-section shell resource-videos">
        <div className="section-kicker"><span>05</span><p>WATCH / TWO USEFUL STARTING POINTS</p></div>
        <div className="resource-video-grid">
          {[['RDQs7CpLI-k','Every Free Resource You Need To Become A Bug Bounty Hunter'],['SWXDST3arF0','My Favorite Ethical Hacking Books']].map(([id,title]) => <a className="video-card depth-card" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" key={id}><img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={title} loading="lazy" /><span className="video-play">▶</span><strong>{title}</strong></a>)}
        </div>
      </section>
    </main>
  );
}
