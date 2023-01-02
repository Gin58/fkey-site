import cntl from "cntl"

type Props = {
  isOpen: boolean
}

export const HamburgerIcon = ({ isOpen }: Props) => {
  return (
    <>
      <span className={FirstBorder} />
      <span className={SecondBorder} />
      <span className={ThirdBorder} />
    </>
  )
}

const Border = cntl`
  absolute
  bg-black
  w-full
  h-0.5
  rounded
`
const FirstBorder = Border + ' top-0 animate-menubarFirst'
const SecondBorder = Border + ' top-2.5'
const ThirdBorder = Border + ' bottom-0 animate-menubarLast'
