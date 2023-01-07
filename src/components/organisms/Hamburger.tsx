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
      <div className="relative w-8 h-[22px] cursor-pointer z-50" onClick={() => setIsOpen((bool) => !bool)}>
        <HamburgerIcon isOpen={isOpen} />
      </div>
      <div className={isOpen ? OpenList : CloseList }>
        <ul className='w-full h-full p-10 mt-10 flex flex-col'>
          {list.map(item => (
            <a key={item.label} className={isOpen ? OpenListItem : CloseListItem}>
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
  bg-white
  transition-all
  duration-[250ms]
  delay-[250ms]
`

const OpenList = `${List} opacity-100 z-40`
const CloseList = `${List} opacity-0 -z-10`

const ListItem = cntl`
  py-4
  border-b
  border-solid
  border-black
  text-3xl
  flex
  justify-between
  items-center
  transform
  duration-[500ms]
  delay-[500ms]
`

const OpenListItem = `${ListItem} opacity-100 translate-x-0`
const CloseListItem = `${ListItem} opacity-0 -translate-x-4`
