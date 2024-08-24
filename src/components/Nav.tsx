"use client"

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavProps = {}

// Defining the Link structure
type LinkItem = {
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "service",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  }
]

const Nav: React.FC<NavProps> = () => {
  const pathname = usePathname()

  return (
    <nav className='flex gap-8'>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={cn(pathname === link.path && 'text-accent border-b-2 border-accent', 'capitalize font-medium hover:text-accent transition-all')}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
