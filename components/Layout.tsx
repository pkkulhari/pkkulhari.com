import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
  [key: string]: any
}

const Layout = ({ children, ...customMeta }: Props) => {
  const router = useRouter()

  const meta = {
    title: 'Praveen Kumar - DevOps Engineer & Full Stack Developer',
    description:
      'Building fast and scalable web applications with a modern tech stack. Exploring DevOps world - Kubernetes, CI/CD, Terraform, etc.',
    image: 'http://pkkulhari.com/static/images/praveen-banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`http://pkkulhari.com${router.asPath}`} />
        <link rel="canonical" href={`http://pkkulhari.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Praveen Kumar" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pk_kulhari" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
