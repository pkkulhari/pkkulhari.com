import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { Fragment, useMemo } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import cn from 'classnames'

const Navbar = () => {
  const router = useRouter()
  const navItems = useMemo(
    () => [
      { title: 'Home', href: '/' },
      { title: 'Projects', href: '/projects' },
      { title: 'Blog', href: 'https://blog.pkkulhari.com' },
    ],
    []
  )

  return (
    <div className="mt-4 md:mt-10 relative">
      <Disclosure as="nav" className="sm:hidden">
        {({ open }) => (
          <>
            <Disclosure.Button>
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <Disclosure.Panel>
              <ul className="flex flex-col h-screen absolute bg-white inset-x-0 mt-4 z-10">
                {navItems.map((item) => (
                  <Fragment key={item.title}>
                    <Link href={item.href} key={item.title} className="py-4">
                      {item.title}
                    </Link>
                    <hr />
                  </Fragment>
                ))}
              </ul>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <nav className="hidden sm:block">
        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  router.pathname === item.href && 'bg-gray-200',
                  'py-1.5 px-3 rounded hover:bg-gray-200'
                )}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
