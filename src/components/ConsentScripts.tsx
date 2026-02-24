"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const STORAGE_KEY = "cookie-consent";

export default function ConsentScripts() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    function check() {
      setAccepted(localStorage.getItem(STORAGE_KEY) === "accepted");
    }
    check();
    window.addEventListener("consent-changed", check);
    return () => window.removeEventListener("consent-changed", check);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8NZRJ8P');`,
        }}
      />
      <Script
        id="adsense"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1296356819566983"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script
        id="gtag"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-6ZK0DVVZ1P"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6ZK0DVVZ1P');`,
        }}
      />
    </>
  );
}
