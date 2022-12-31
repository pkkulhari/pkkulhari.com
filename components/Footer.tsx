import Link from 'next/link'
import { useMemo } from 'react'

const Footer = () => {
  const navItems = useMemo(
    () => [
      { title: 'Home', href: '/' },
      { title: 'Projects', href: '/projects' },
      { title: 'Blog', href: 'https://blog.pkkulhari.com' },
    ],
    []
  )

  const socials = useMemo(
    () => [
      { title: 'Twitter', href: 'https://twitter.com/pk_kulhari' },
      { title: 'Github', href: 'https://github.com/pkkulhari' },
      { title: 'Linkedin', href: 'https://linkedin.com/in/pkkulhari' },
    ],
    []
  )

  return (
    <div className="mt-14 mb-10">
      <hr />
      <div className="grid  grid-cols-2">
        <ul>
          {navItems.map((item) => (
            <li key={item.title} className="my-4">
              <Link href={item.href} className="text-sm">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {socials.map((social) => (
            <li key={social.title} className="my-4">
              <Link href={social.href} target="_blank" className="text-sm">
                {social.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-400 mt-4">© {new Date().getFullYear()} - Praveen Kumar</p>
    </div>
  )
}

export default Footer
