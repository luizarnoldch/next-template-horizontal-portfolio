"use client"

import { usePathname } from "next/navigation"
import Link from "next/link";
import { cn } from "@/lib/utils";

// ShadCN Components
import { Sheet, SheetContent, SheetTrigger } from "@/ui/sheet";

// Icons
import { CiMenuFries } from "react-icons/ci"

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

type MobileNavProps = {}

const MobileNav: React.FC<MobileNavProps> = () => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Luke<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={
                cn(
                  link.path === pathname && "text-accent border-b-2 border-accent",
                  "text-xl capitalize hover:text-accent transition-all"
                )
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
