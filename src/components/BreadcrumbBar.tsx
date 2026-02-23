import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

const ChevronSep = () => (
  <span className="bc-sep" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M9 18l6-6-6-6" />
    </svg>
  </span>
);

export default function BreadcrumbBar({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="breadcrumb-bar" aria-label="Breadcrumb">
      <ol className="breadcrumb-inner">
        <li><Link href="/">Home</Link></li>
        {crumbs.map((c, i) => (
          <li key={i}>
            <ChevronSep />
            {c.href ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span className="bc-current" aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
