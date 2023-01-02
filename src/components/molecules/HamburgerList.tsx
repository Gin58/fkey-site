import cntl from "cntl"

type Props = {
  isOpen: boolean
}

export const HamburgerList = ({ isOpen }: Props) => {
  return (
    <div className={isOpen ? OpenList : CloseList }>
      <h1>hello</h1>
    </div>
  )
}

const List = cntl`
  fixed
  w-screen
  h-screen
  left-0
  top-0
  bg-primary
  z-40
  transition-all
  duration-[250ms]
  delay-[250ms]
`

const OpenList = `${List} opacity-100`
const CloseList = `${List} opacity-0`