import { companiesCrawled, posts, videoIds } from "../lib/content";

const acknowledgementNames = ["APPLE ×5", "NASA", "TRIVAGO", "HARMAN", "DCU", "FLYNAS", "ZAIN"];

const disciplines = [
  { no: "01", code: "RECON", title: "Map the surface", text: "Asset discovery, endpoint mapping, JavaScript analysis, and the quiet corners where overlooked attack surface tends to live." },
  { no: "02", code: "WEB", title: "Break assumptions", text: "Web application testing with an emphasis on access control, XSS, logic flaws, injection paths, and unintended trust boundaries." },
  { no: "03", code: "PROVE", title: "Show real impact", text: "A finding is strongest when the attacker path is concrete. I chase reproducibility, impact, and evidence - not scanner noise." },
  { no: "04", code: "SHARE", title: "Teach the trail", text: "Write-ups, training, tools, and lessons from real hunts, so useful methodology survives longer than a single report." },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow reveal-in">
            <span className="status-dot" aria-hidden="true" />
            <span>Independent security researcher</span>
            <span className="eyebrow-code">// TRF-01</span>
          </div>

          <h1 className="hero-title reveal-in delay-1" aria-label="TrffnSec">
            <span className="hero-title-ghost">TRFFN</span>
            <span>TRFFN</span><span className="hero-title-accent">SEC</span>
          </h1>

          <p className="hero-role reveal-in delay-2">Offensive web <span>security researcher.</span></p>
          <p className="hero-lede reveal-in delay-2">
            I find real-world vulnerabilities before attackers do - through recon, web hacking,
            bug bounty research, and an unhealthy curiosity for how systems break.
          </p>

          <div className="hero-actions reveal-in delay-3">
            <a className="button button-primary" href="/posts"><span>Explore research</span><span aria-hidden="true">↗</span></a>
            <a className="button button-quiet" href="mailto:trffnsec@gmail.com"><span>Let&apos;s connect</span><span aria-hidden="true">→</span></a>
          </div>

          <div className="hero-proof reveal-in delay-3" aria-label="Selected achievements">
            <div><strong>05</strong><span>Apple acknowledgements</span></div>
            <div><strong>NASA</strong><span>Hall of Fame</span></div>
            <div><strong>CEH</strong><span>Certified Ethical Hacker</span></div>
          </div>
        </div>

        <div className="hero-stage reveal-in delay-2" aria-label="Interactive security visualization">
          <div className="stage-hud stage-hud-top"><span>ATTACK SURFACE</span><span>LIVE</span></div>
          <div className="cyber-core" aria-hidden="true">
            <div className="core-halo halo-a" /><div className="core-halo halo-b" /><div className="core-halo halo-c" />
            <div className="core-orbit orbit-a"><i /></div><div className="core-orbit orbit-b"><i /></div>
            <div className="core-center"><span>0x</span><strong>TR</strong><small>SEC</small></div>
          </div>
          <div className="terminal-card">
            <div className="terminal-top"><span>research.log</span><span>● ● ●</span></div>
            <p><span>01</span> map the surface</p><p><span>02</span> find the anomaly</p>
            <p><span>03</span> prove the impact</p><p className="terminal-active"><span>04</span> report responsibly <b>_</b></p>
          </div>
          <div className="stage-hud stage-hud-bottom"><span>RECON</span><span>WEB</span><span>LOGIC</span><span>REPEAT</span></div>
        </div>

        <a className="scroll-cue" href="#signal" aria-label="Scroll to acknowledgements"><span>SCROLL TO DECODE</span><i aria-hidden="true" /></a>
      </section>

      <section className="signal-strip" id="signal" aria-label="Acknowledgements">
        <div className="signal-label">ACKNOWLEDGED /</div>
        <div className="signal-window"><div className="signal-track">
          {[...acknowledgementNames, ...acknowledgementNames].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}
        </div></div>
      </section>

      <section className="content-section shell about-snapshot" id="about-snapshot">
        <div className="section-kicker"><span>01</span><p>THE PERSON / BEHIND THE HANDLE</p></div>
        <div className="about-snapshot-grid">
          <div className="about-copy">
            <p className="section-overline">TRIFFIN AUGUSTINE AKA</p>
            <h2>Curiosity turned into a <em>security mindset.</em></h2>
            <p>I&apos;m Triffin Augustine, known in the hacking world as TrffnSec. With a passion for cybersecurity, I explore recon, web hacking, and bug bounty, uncovering vulnerabilities and helping others learn the craft.</p>
            <p>When I&apos;m not diving into security research, I&apos;m building tools, sharing knowledge, and pushing the boundaries of ethical hacking.</p>
            <a className="text-link" href="/about">Decode the full story <span>↗</span></a>
          </div>
          <div className="portrait-card depth-card">
            <div className="portrait-ui"><span>SUBJECT / TRFFNSEC</span><span>FOCUS 98%</span></div>
            <img src="https://raw.githubusercontent.com/TrffnSec/trffnsec/refs/heads/main/assets/2DFCE5C9-9E56-45D4-B3F8-4F67A09EF7B3.PNG" alt="Triffin Augustine, TrffnSec" loading="lazy" />
            <div className="portrait-reticle" aria-hidden="true"><i /><i /></div>
            <div className="portrait-caption"><span>OFFENSIVE SECURITY</span><strong>TR / FFN</strong></div>
          </div>
        </div>
      </section>

      <section className="content-section discipline-section">
        <div className="shell">
          <div className="section-kicker"><span>02</span><p>HOW I / APPROACH THE WORK</p></div>
          <div className="section-heading-row">
            <h2>Map. Break.<br /><em>Prove. Share.</em></h2>
            <p>No mystery-box scanner theatre. The interesting work begins when the normal path stops explaining what the application is actually doing.</p>
          </div>
          <div className="discipline-grid">
            {disciplines.map((item) => (
              <article className="discipline-card depth-card" key={item.code}>
                <div className="discipline-top"><span>{item.no}</span><code>{item.code}</code></div>
                <div className="discipline-glyph" aria-hidden="true"><i /><i /><b>{item.code.slice(0, 2)}</b></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section shell research-preview">
        <div className="section-kicker"><span>03</span><p>FIELD NOTES / FROM REAL HUNTS</p></div>
        <div className="section-heading-row compact"><h2>Research that left <em>a trail.</em></h2><a className="text-link" href="/posts">All field notes <span>↗</span></a></div>
        <div className="research-grid">
          {posts.map((post, index) => (
            <a className="research-card depth-card" href={post.href} target="_blank" rel="noreferrer" key={post.title}>
              <div className="research-image">
                <img src={post.image} alt="" loading="lazy" />
                <span className="research-no">0{index + 1}</span>
                <span className="research-tag">{post.tag}</span>
              </div>
              <div className="research-copy"><small>{post.date} / TRFFNSEC</small><h3>{post.title}</h3><p>{post.excerpt}</p><span className="card-arrow">READ ON MEDIUM ↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="companies-section">
        <div className="shell companies-head"><div className="section-kicker"><span>04</span><p>COMPANIES / I&apos;VE CRAWLED</p></div><p className="tiny-note">ATTACK SURFACE, CURIOSITY, REPEAT.</p></div>
        <div className="company-rail" aria-label="Companies I've crawled"><div className="company-track">
          {[...companiesCrawled, ...companiesCrawled].map((company, index) => <span key={`${company}-${index}`}>{company}<i /></span>)}
        </div></div>
      </section>

      <section className="content-section shell video-section">
        <div className="section-kicker"><span>05</span><p>HACKING VIDEOS / FROM THE WILD</p></div>
        <div className="section-heading-row compact"><h2>Watch the <em>weird stuff.</em></h2><a className="text-link" href="https://youtube.com/c/trffnsec" target="_blank" rel="noreferrer">YouTube <span>↗</span></a></div>
        <div className="video-rail">
          {videoIds.map((id, index) => (
            <a className="video-card depth-card" href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noreferrer" key={id}>
              <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt={`Hacking video ${index + 1}`} loading="lazy" />
              <span className="video-play" aria-hidden="true">▶</span><small>WILD / 0{index + 1}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-section shell">
        <div className="contact-orbit" aria-hidden="true"><i /><i /><b>T/</b></div>
        <p className="section-overline">HAVE A TARGET / NEED A SECOND SET OF EYES?</p>
        <h2>Let&apos;s find the crack<br /><em>before they do.</em></h2>
        <a className="button button-primary contact-button" href="mailto:trffnsec@gmail.com"><span>trffnsec@gmail.com</span><span>↗</span></a>
      </section>
    </main>
  );
}
