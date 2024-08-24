"use client"

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type PageTransitionProps = {
  children: React.ReactNode
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathName = usePathname()

  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut"
            },
          }}
          className={cn("h-screen w-screen fixed bg-primary top-0 pointer-events-none")}
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
