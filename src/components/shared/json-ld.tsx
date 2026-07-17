import { personJsonLd, websiteJsonLd } from "@/lib/metadata";

export function JsonLd() {
  const data = [personJsonLd(), websiteJsonLd()];

  return (
    <>
      {data.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
