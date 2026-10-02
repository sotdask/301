import { SITE_NAME, SITE_TAGLINE, SITE_URL, CONTACT_EMAIL } from "../../seo/config";

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: CONTACT_EMAIL,
    description: `${SITE_NAME} — ${SITE_TAGLINE}. Architecture and interior design studio based in Greece.`,
    sameAs: [],
    areaServed: ["Greece", "Cyprus"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default JsonLd;
