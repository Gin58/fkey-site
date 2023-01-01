import cntl from "cntl"
import styled, { keyframes } from "styled-components"

export const HamburgerIcon = () => {
  return (
    <>
      <Span />
      <Span />
      <Span />
    </>
  )
}

const closeMenuBarFirst = keyframes`
  0% {
    transform: translateY(10px) rotate(45deg);
  }

  50% {
    transform: translateY(10px) rotate(0);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
`

const closeMenuBarLast = keyframes`
  0% {
    transform: translateY(-10px) rotate(-45deg);
  }

  50% {
    transform: translateY(-10px) rotate(0);
  }

  100% {
    transform: translateY(0) rotate(0);
  }
`

const Span = styled.span`
  position: absolute;
  left: 0;
  display: inline-block;
  width: 100%;
  height: 2px;
  background-color: #222222;
  border-radius: 4px;
  transition: all 0.4s;

  &:nth-of-type(1) {
    top: 0;
    animation: ${closeMenuBarFirst} 0.75s;    
  }

  &:nth-of-type(2) {
    top: 10px;
    opacity: 1;
    transition: all 0.25s 0.25s;
  }

  &:nth-of-type(3) {
    bottom: 0;
    animation: ${closeMenuBarLast} 0.75s; 
  }
`

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
