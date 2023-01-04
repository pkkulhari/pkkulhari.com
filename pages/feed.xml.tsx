import RSS from 'rss'

export async function getServerSideProps({ res }: { res: any }) {
  const feed = new RSS({
    title: 'Praveen Kumar',
    site_url: 'http://www.pkkulhari.com',
    feed_url: 'http://www.pkkulhari.com/feed.xml',
  })

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600')
  res.write(feed.xml({ indent: true }))
  res.end()

  return {
    props: {},
  }
}

export default function RSSFeed() {
  return null
}
