import RSS from 'rss'
import { getAllProjects } from '../lib/api'

export async function getServerSideProps({ res }: { res: any }) {
  const feed = new RSS({
    title: 'Praveen Kumar',
    site_url: 'https://pkkulhari.com',
    feed_url: 'https://pkkulhari.com/feed.xml',
  })

  const projects = await getAllProjects(true)

  projects.map((project) => {
    feed.item({
      title: project.title,
      url: `https://pkkulhari.com/projects/${project.slug}`,
      date: project.date,
      description: project.excerpt,
    })
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
