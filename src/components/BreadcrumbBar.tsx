import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

const ChevronSep = () => (
  <span className="bc-sep">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </span>
);

export default function BreadcrumbBar({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <div className="breadcrumb-bar">
      <div className="breadcrumb-inner">
        <Link href="/">Home</Link>
        {crumbs.map((c, i) => (
          <span key={i}>
            <ChevronSep />
            {c.href ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span className="bc-current">{c.label}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
