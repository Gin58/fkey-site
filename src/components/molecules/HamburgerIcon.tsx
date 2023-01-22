import cntl from 'cntl'

type Props = {
  isOpen: boolean
}

export const HamburgerIcon = ({ isOpen }: Props) => {
  return (
    <>
      <span className={isOpen ? OpenFirst : CloseFirst} />
      <span className={isOpen ? OpenSecond : CloseSecond} />
      <span className={isOpen ? OpenThird : CloseThird} />
    </>
  )
}

const Base = cntl`
  absolute
  bg-black
  w-full
  h-0.5
  rounded
`
const CloseFirst = `${Base} top-0 animate-menubarFirst`
const OpenFirst = `${Base} top-0 animate-activeMenubarFirst`
const Second = cntl`
  top-2.5
  transition-all
  duration-[250ms]
  delay-[250ms]
`
const CloseSecond = `${Base} ${Second} opacity-100`
const OpenSecond = `${Base} ${Second} opacity-0`

const CloseThird = `${Base} bottom-0 animate-menubarLast`
const OpenThird = `${Base} bottom-0 animate-activeMenubarLast`
