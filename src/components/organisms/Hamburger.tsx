import { useState } from 'react'
import { HamburgerIcon } from '@/components/molecules/HamburgerIcon'
import { HamburgerList } from '@/components/molecules/HamburgerList'
export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-4 right-4 w-8 h-[22px] cursor-pointer z-50" onClick={() => setIsOpen((bool) => !bool)}>
        <HamburgerIcon isOpen={isOpen} />
      </div>
      <HamburgerList isOpen={isOpen} />
    </>
  )
}
