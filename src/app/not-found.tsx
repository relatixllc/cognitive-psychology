import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--serif)", fontSize: "3rem", marginBottom: "1rem" }}>
        404
      </h1>
      <p style={{ fontSize: "1.1rem", color: "var(--gray-500)", marginBottom: "2rem" }}>
        This page doesn&rsquo;t exist yet. It may be under development.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--sans)",
          fontSize: ".9rem",
          color: "var(--accent)",
          textDecoration: "none",
          borderBottom: "1px solid var(--accent)",
        }}
      >
        &larr; Back to Home
      </Link>
    </div>
  );
}
