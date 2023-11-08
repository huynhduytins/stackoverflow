import { Button } from '@/components/ui/button'
import React from 'react'

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button className="h-fit rounded-[6px] bg-light-800 px-4 py-2 text-[10px] font-medium uppercase text-light-400 dark:bg-dark-300 dark:text-light-500">
      {children}
    </Button>
  )
}

export default Tag
