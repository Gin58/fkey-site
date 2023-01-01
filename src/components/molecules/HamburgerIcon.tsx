import cntl from "cntl"
import styled from "styled-components"

export const HamburgerIcon = () => {
  return (
    <>
      <FirstSpan />
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

const FirstSpan = styled.span`
  position: absolute;
  background-color: #222222;
  width: 100%;
  height: 0.125rem;
  top: 0;
`
const FirstBorder = Border + ' top-0'
const SecondBorder = Border + ' top-2.5'
const ThirdBorder = Border + ' bottom-0'
