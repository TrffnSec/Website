import type { Metadata } from "next";
import { HallGallery } from "../../components/hall-gallery";

export const metadata: Metadata = { title: "Hall of Fame — TrffnSec" };

export default function HallOfFamePage() {
  return (
    <main className="hof-page">
      <section className="hof-hero shell">
        <div className="hof-hero-copy">
          <p className="section-overline">CERTIFICATIONS / ACHIEVEMENTS</p>
          <h1>Hall of<br /><em>Fame.</em></h1>
          <p>Five milestones. One rotating evidence deck. Drag or use the controls to move through the archive.</p>
        </div>
        <div className="hof-coordinate" aria-hidden="true"><span>ARCHIVE</span><strong>05 / ITEMS</strong><i /><span>VERIFIED SIGNALS</span></div>
      </section>
      <section className="hof-gallery-section shell">
        <HallGallery />
      </section>
      <section className="hof-footnote shell"><span>RESPONSIBLE DISCLOSURE</span><i /><p>Recognition is nice. Making the internet a little harder to break is better.</p></section>
    </main>
  );
}
