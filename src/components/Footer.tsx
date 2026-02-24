import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          Cognitive Psychology Reference &mdash; Built with Next.js, deployed on Cloudflare Workers.
        </p>
        <p className="footer-quote">
          &ldquo;The mind is not a vessel to be filled, but a fire to be kindled.&rdquo; <span>&mdash; Plutarch</span>
        </p>
        <p className="footer-attr">
          CognitivePsychology.com is a project of{" "}
          <a href="https://www.relatix.com" target="_blank" rel="noopener noreferrer">
            Relatix LLC
          </a>
          {" "}&mdash;{" "}
          <Link href="/Privacy_Policy">Privacy Policy</Link>
          {" "}&mdash;{" "}
          <Link href="/Contact_Us">Contact Us</Link>
        </p>
      </div>
    </footer>
  );
}
