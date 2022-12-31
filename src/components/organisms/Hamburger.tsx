import { useState } from 'react'
import { HamburgerIcon } from '@/components/molecules/HamburgerIcon'
export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-8 h-[22px] cursor-pointer" onClick={() => setIsOpen((bool) => !bool)}>
      <HamburgerIcon />
    </div>

  )
}