export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = "https://icitee.it.kmitl.ac.th";
  const pages = ["/", "/about", "/call-for-papers"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages.map(page => `<url><loc>${baseUrl}${page}</loc></url>`).join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}
