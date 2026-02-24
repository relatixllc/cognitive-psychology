import type { Metadata } from "next";
import BreadcrumbBar from "@/components/BreadcrumbBar";

export const metadata: Metadata = {
  title: "Privacy Policy — Cognitive Psychology Reference",
  description:
    "Privacy policy for CognitivePsychology.com, detailing how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbBar crumbs={[{ label: "Privacy Policy" }]} />

      <header className="article-hero">
        <div className="article-hero-inner">
          <h1 className="article-h1">Privacy Policy</h1>
        </div>
        <div className="article-hero-pattern" aria-hidden="true" />
      </header>

      <article className="article-wrap">
        <div className="article-body">
          <p>
            <strong>Effective Date:</strong> February 24, 2026
          </p>
          <p>
            This Privacy Policy describes how CognitivePsychology.com
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
            operated by Relatix LLC, collects, uses, and shares information when
            you visit our website at{" "}
            <a href="https://www.cognitivepsychology.com">
              www.cognitivepsychology.com
            </a>{" "}
            (the &ldquo;Site&rdquo;). By using the Site, you agree to the
            practices described in this policy.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit the Site, certain information is collected
            automatically through cookies, web beacons, and similar
            technologies. This may include:
          </p>
          <ul>
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Pages viewed and time spent on each page</li>
            <li>Date and time of your visit</li>
            <li>Device type and screen resolution</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>
            We do not require you to create an account or provide personal
            information to use the Site. If you contact us directly, we may
            receive additional information such as your name, email address, and
            the contents of your message.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Operate, maintain, and improve the Site</li>
            <li>Analyze usage trends and user behavior</li>
            <li>Monitor and prevent technical issues</li>
            <li>Serve relevant advertisements</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>
            The Site uses cookies and similar tracking technologies. Cookies are
            small data files stored on your device that help us improve your
            experience and understand how the Site is used. The types of cookies
            we use include:
          </p>
          <ul>
            <li>
              <strong>Essential cookies:</strong> Required for basic Site
              functionality such as remembering your accessibility preferences
              (text size, theme, contrast).
            </li>
            <li>
              <strong>Analytics cookies:</strong> Used to collect information
              about how visitors use the Site, including which pages are visited
              most often and whether users receive error messages. We use this
              data to improve the Site.
            </li>
            <li>
              <strong>Advertising cookies:</strong> Used by our advertising
              partners to build a profile of your interests and show you relevant
              advertisements on other sites.
            </li>
          </ul>
          <p>
            You can control cookies through your browser settings. Most browsers
            allow you to block or delete cookies. However, disabling cookies may
            affect the functionality of the Site.
          </p>

          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics, a web analytics service provided by Google
            LLC, to help us understand how visitors use the Site. Google
            Analytics uses cookies to collect information such as how often users
            visit the Site, what pages they visit, and what other sites they
            visited before coming to the Site.
          </p>
          <p>
            Google Analytics collects only the IP address assigned to you on the
            date you visit the Site, rather than your name or other identifying
            information. We do not combine the information collected through
            Google Analytics with personally identifiable information.
          </p>
          <p>
            You can opt out of Google Analytics by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>Google AdSense and Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on the Site. Google
            AdSense uses cookies to serve ads based on your prior visits to this
            Site and other websites. Google&rsquo;s use of advertising cookies
            enables it and its partners to serve ads based on your visit to the
            Site and/or other sites on the Internet.
          </p>
          <p>
            Third-party vendors, including Google, use cookies to serve ads based
            on your prior visits to this website or other websites. Google&rsquo;s
            use of the DoubleClick cookie enables it and its partners to serve
            ads based on your visits to this Site and/or other sites on the
            Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Ads Settings
            </a>
            . Alternatively, you may opt out of third-party vendor cookies for
            personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.aboutads.info/choices
            </a>
            .
          </p>

          <h2>Third-Party Services</h2>
          <p>
            In addition to Google Analytics and Google AdSense, we use the
            following third-party services:
          </p>
          <ul>
            <li>
              <strong>Google Tag Manager:</strong> Used to manage tracking
              scripts and tags on the Site.
            </li>
            <li>
              <strong>Cloudflare:</strong> Used for content delivery, performance
              optimization, and security. Cloudflare may collect certain
              technical data as described in their{" "}
              <a
                href="https://www.cloudflare.com/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                privacy policy
              </a>
              .
            </li>
          </ul>
          <p>
            These third-party services may collect information sent by your
            browser as part of a web page request, such as cookies or your IP
            address. Please refer to their respective privacy policies for
            information on how they handle your data.
          </p>

          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share information in the following circumstances:
          </p>
          <ul>
            <li>
              With service providers who assist us in operating the Site (such as
              hosting and analytics providers), subject to confidentiality
              obligations.
            </li>
            <li>
              If required by law, regulation, legal process, or governmental
              request.
            </li>
            <li>
              To protect the rights, property, or safety of CognitivePsychology.com,
              our users, or the public.
            </li>
          </ul>

          <h2>Data Retention</h2>
          <p>
            We retain automatically collected data for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy, unless a longer
            retention period is required or permitted by law. Analytics data is
            retained according to the default retention settings of the
            respective analytics services.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Opt out of personalized advertising</li>
          </ul>

          <h3>For California Residents (CCPA)</h3>
          <p>
            If you are a California resident, you have the right to request
            disclosure of the categories and specific pieces of personal
            information we have collected about you, the categories of sources
            from which your information is collected, the business purpose for
            collecting your information, and the categories of third parties with
            whom we share your information. You also have the right to request
            deletion of your personal information. We do not sell personal
            information as defined under the California Consumer Privacy Act
            (CCPA).
          </p>

          <h3>For European Economic Area Residents (GDPR)</h3>
          <p>
            If you are located in the European Economic Area (EEA), you have
            certain data protection rights under the General Data Protection
            Regulation (GDPR). Our legal basis for collecting and using your
            information is either your consent or our legitimate interest in
            operating and improving the Site. You may withdraw your consent at
            any time by adjusting your cookie settings or contacting us.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            The Site is not directed to children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected personal information from a child
            under 13, we will take steps to delete such information promptly. If
            you believe a child under 13 has provided us with personal
            information, please contact us.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect the information collected
            through the Site. However, no method of transmission over the
            Internet or method of electronic storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>

          <h2>Links to Other Websites</h2>
          <p>
            The Site may contain links to third-party websites, including
            Wikipedia, Google Scholar, and the APA Dictionary of Psychology. We
            are not responsible for the privacy practices or content of these
            external sites. We encourage you to read the privacy policy of every
            website you visit.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated effective date. We encourage
            you to review this Privacy Policy periodically for any changes. Your
            continued use of the Site after changes are posted constitutes your
            acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p>
            Relatix LLC
            <br />
            Email:{" "}
            <a href="mailto:privacy@cognitivepsychology.com">
              privacy@cognitivepsychology.com
            </a>
          </p>
        </div>
      </article>
    </>
  );
}
