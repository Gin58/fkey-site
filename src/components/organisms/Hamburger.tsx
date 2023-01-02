import { useState } from 'react'
import { HamburgerIcon } from '@/components/molecules/HamburgerIcon'
import cntl from 'cntl'

type List = {
  label: string
  href: string
}
type Props = {
  list: List[]
}
export const Hamburger = ({ list }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-4 right-4 w-8 h-[22px] cursor-pointer z-50" onClick={() => setIsOpen((bool) => !bool)}>
        <HamburgerIcon isOpen={isOpen} />
      </div>
      <div className={isOpen ? OpenList : CloseList }>
        <ul className='w-full h-full p-10 mt-10 flex flex-col'>
          {list.map(item => (
            <a key={item.label} className="py-4 border-b border-solid border-black text-3xl flex justify-between items-center">
              <li>
                {item.label}
              </li>
              <span className="text-sm">&rarr;</span>
            </a>
          ))}
        </ul>
      </div>
    </>
  )
}

const List = cntl`
  w-screen
  h-screen
  left-0
  top-0
  fixed
  bg-primary
  transition-all
  duration-[250ms]
  delay-[250ms]
`

const OpenList = `${List} opacity-100 z-40`
const CloseList = `${List} opacity-0 z-auto`