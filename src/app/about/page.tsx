import type { Metadata } from "next";
import BreadcrumbBar from "@/components/BreadcrumbBar";

export const metadata: Metadata = {
  title: "About — Cognitive Psychology Reference",
  description: "About this Cognitive Psychology reference website.",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbBar crumbs={[{ label: "About" }]} />

      <header className="article-hero">
        <div className="article-hero-inner">
          <h1 className="article-h1">About</h1>
        </div>
        <div className="article-hero-pattern" aria-hidden="true" />
      </header>

      <article className="article-wrap">
        <div className="article-body">
          <p>
            This website is dedicated to my favorite psychology professor, Dr.
            Clinton Dennard of Tarleton State University, who inspired me to use
            my computer programming skills for doing research in psychology. His
            zeal for science was contagious and I do not recall any of his
            students that didn&rsquo;t like him. My first and only research
            project was to do a website for his Master&rsquo;s thesis having to
            do with player reacting to various situations in playing poker.
          </p>
          <p>
            I was stunned to hear of his passing and feel that science lost a
            star professor.
          </p>
        </div>
      </article>
    </>
  );
}
