import type { Metadata } from "next";
import { posts } from "../../lib/content";

export const metadata: Metadata = { title: "Research - TrffnSec" };

export default function PostsPage() {
  return (
    <main>
      <section className="inner-hero shell research-hero">
        <div className="inner-hero-index"><span>02</span><i /></div>
        <div className="inner-hero-copy"><p className="section-overline">FIELD NOTES / RESEARCH</p><h1>Stories from<br /><em>the hunt.</em></h1><p>Real bugs, wrong turns, useful methodology, and the details that survived the report.</p></div>
        <div className="research-hero-stat"><strong>{posts.length.toString().padStart(2,"0")}</strong><span>PUBLISHED<br />FIELD NOTES</span></div>
      </section>

      <section className="content-section shell posts-list">
        {posts.map((post, index) => (
          <article className="post-feature" key={post.title}>
            <a className="post-image depth-card" href={post.href} target="_blank" rel="noreferrer">
              <img src={post.image} alt={post.title} loading={index === 0 ? "eager" : "lazy"} />
              <span className="post-index">0{index + 1}</span><span className="post-open">OPEN ↗</span>
            </a>
            <div className="post-copy">
              <div className="post-meta"><span>{post.tag}</span><time>{post.date}</time></div>
              <h2><a href={post.href} target="_blank" rel="noreferrer">{post.title}</a></h2>
              <p>{post.excerpt}</p>
              <div className="post-author"><span>T/</span><p><strong>Triffin Augustine</strong><small>TRFFNSEC / SECURITY RESEARCHER</small></p></div>
              <a className="text-link" href={post.href} target="_blank" rel="noreferrer">Read on Medium <span>↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <section className="content-section shell research-note">
        <div><span>//</span><p>The bug is useful. The reasoning that found it is reusable.</p></div>
        <a className="button button-quiet" href="https://medium.com/@trffnsec" target="_blank" rel="noreferrer"><span>Follow on Medium</span><span>↗</span></a>
      </section>
    </main>
  );
}
