import type { Metadata } from "next";
import BreadcrumbBar from "@/components/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Contact Us — Cognitive Psychology Reference",
  description:
    "Get in touch with the CognitivePsychology.com team for suggestions, error reports, complaints, or general inquiries.",
};

export default function ContactUsPage() {
  return (
    <>
      <BreadcrumbBar crumbs={[{ label: "Contact Us" }]} />

      <header className="article-hero">
        <div className="article-hero-inner">
          <h1 className="article-h1">Contact Us</h1>
        </div>
        <div className="article-hero-pattern" aria-hidden="true" />
      </header>

      <article className="article-wrap">
        <div className="article-body">
          <p>
            We welcome feedback from our readers. If you have something to share
            with the CognitivePsychology.com team, we&rsquo;d love to hear from
            you.
          </p>

          <h2>What You Can Contact Us About</h2>
          <ul>
            <li>
              <strong>Suggestions:</strong> Ideas for new topics, features, or
              improvements to the site.
            </li>
            <li>
              <strong>Error Reports:</strong> Factual inaccuracies, broken links,
              typos, or other issues you&rsquo;ve noticed in our content.
            </li>
            <li>
              <strong>Complaints:</strong> Concerns about the site, its content,
              or your experience using it.
            </li>
            <li>
              <strong>General Inquiries:</strong> Any other questions or comments
              about CognitivePsychology.com.
            </li>
          </ul>

          <h2>How to Reach Us</h2>
          <p>
            Send us an email at{" "}
            <strong>feedback at relatix.com</strong> (replace
            &ldquo;at&rdquo; with @) with the subject line &ldquo;cognitive
            psychology feedback.&rdquo;
          </p>
          <p>
            CognitivePsychology.com is a project of Relatix LLC.
          </p>
        </div>
      </article>
    </>
  );
}
