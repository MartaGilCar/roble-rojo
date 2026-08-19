export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "https://example.com";

  const pages = ["/", "/reservation"];

  const imagePaths = [
    "/nature.avif",
    "/ellas.avif",
    "/paloma.avif",
    "/paloma2.avif",
    "/polma3.avif",
    "/paulaplaya2_0006.avif",
    "/paulaplaya2_0009.avif",
    "/tercera_0034.avif",
    "/retrato.avif",
    "/yo2.avif",
    "/yop.avif",
    "/bosque.avif",
    "/bosqueZoom.avif",
    "/sombras.avif",
  ];

  const pageUrls = pages
    .map((page) => {
      const loc = `${baseUrl.replace(/\/$/, "")}${page}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  const imageUrls = imagePaths
    .map((p) => {
      const loc = `${baseUrl.replace(/\/$/, "")}${p}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  const urls = [pageUrls, imageUrls].filter(Boolean).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
