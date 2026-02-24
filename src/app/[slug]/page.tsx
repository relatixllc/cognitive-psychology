import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getSlugInfo, getAllSlugs } from "@/data/slugs";
import { content } from "@/data/content";
import { externalLinks } from "@/data/externalLinks";
import BreadcrumbBar from "@/components/BreadcrumbBar";
import PerceptionCalc from "@/components/PerceptionCalc";
import AttentionCalc from "@/components/AttentionCalc";
import MemoryCalc from "@/components/MemoryCalc";
import LearningCalc from "@/components/LearningCalc";
import LanguageCalc from "@/components/LanguageCalc";
import ThinkingCalc from "@/components/ThinkingCalc";
import DevelopmentCalc from "@/components/DevelopmentCalc";
import NeuroscienceCalc from "@/components/NeuroscienceCalc";
import ApplicationsCalc from "@/components/ApplicationsCalc";
import KeyFiguresCalc from "@/components/KeyFiguresCalc";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const info = getSlugInfo(slug);
  if (!info) return {};
  return {
    title: `${info.label} — Cognitive Psychology Reference`,
    description: `Learn about ${info.label} in cognitive psychology. Part of ${info.menuTitle} › ${info.groupLabel}.`,
  };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const info = getSlugInfo(slug);
  if (!info) notFound();

  const topic = content[slug];
  const hasContent = !!topic;

  return (
    <>
      <BreadcrumbBar
        crumbs={[
          { label: info.menuTitle, href: "/" },
          { label: info.groupLabel },
        ]}
      />

      <header className="article-hero">
        <div className="article-hero-inner">
          <div className="article-tag">{info.groupLabel}</div>
          <h1 className="article-h1">
            {info.label.includes("'") ? (
              <>
                {info.label.split("'")[0]}&rsquo;
                {info.label.split("'").slice(1).join("'")}
              </>
            ) : (
              info.label
            )}
          </h1>
          {hasContent && (
            <>
              <p className="article-lede">{topic.lede}</p>
              {topic.formula && (
                <div className="article-hero-formula">
                  <code>{topic.formula}</code>
                </div>
              )}
            </>
          )}
        </div>
        <div className="article-hero-pattern" aria-hidden="true" />
      </header>

      <article className="article-wrap">
        <div className="article-body">
          {hasContent ? (
            <div dangerouslySetInnerHTML={{ __html: topic.body }} />
          ) : (
            <>
              <p>
                This article on <strong>{info.label}</strong> is part of the{" "}
                {info.menuTitle} section under {info.groupLabel}. Full content
                is being developed and will be available soon.
              </p>
              <p>
                In the meantime, explore related topics through the navigation
                menu above.
              </p>
            </>
          )}
        </div>

        <div className="article-body">
          <PerceptionCalc slug={slug} />
          <AttentionCalc slug={slug} />
          <MemoryCalc slug={slug} />
          <LearningCalc slug={slug} />
          <LanguageCalc slug={slug} />
          <ThinkingCalc slug={slug} />
          <DevelopmentCalc slug={slug} />
          <NeuroscienceCalc slug={slug} />
          <ApplicationsCalc slug={slug} />
          <KeyFiguresCalc slug={slug} />
        </div>

        {hasContent && topic.references && topic.references.length > 0 && (
          <div className="article-references">
            <h3>References</h3>
            <ol className="references-list">
              {topic.references.map((ref, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: ref }} />
              ))}
            </ol>
          </div>
        )}

        {hasContent && topic.related && topic.related.length > 0 && (
          <div className="article-related">
            <h3>Related Topics</h3>
            <div className="related-grid">
              {topic.related.map((r) => (
                <Link key={r.slug} href={`/${r.slug}`} className="related-card">
                  <span className="rc-cat">{r.menu}</span>
                  <span className="rc-name">{r.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {(externalLinks[slug] ?? []).length > 0 && (
          <div className="article-external">
            <h3>External Links</h3>
            <ul className="external-list">
              {externalLinks[slug].map((link) => (
                <li key={link.url} className="external-item">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                  <span className="el-source">{link.source}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </>
  );
}
