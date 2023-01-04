const createSitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            return `
                <url>
                    <loc>${page}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
`

export async function getServerSideProps({ res }: { res: any }) {
  const allPages = [
    ...['', 'projects'].map((page) => `https://www.pkkulhari.com/${page}`),
    'https://blog.pkkulhari.com',
  ]

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(createSitemap(allPages))
  res.end()

  return {
    props: {},
  }
}

export default function Sitemap() {
  return null
}
