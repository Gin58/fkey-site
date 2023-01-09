import { memo, useEffect, useState } from 'react'

type Props = {
  message: string
  cursor?: boolean
  className?: string
  speed?: number
}

export const Typing = memo(function Typing({
  message,
  cursor = true,
  className = '',
  speed = 50
}: Props) {
  const [text, setText] = useState('')

  useEffect(() => {
    const charItr = message[Symbol.iterator]()
    let timerId: number
    const showChar = () => {
      const nextChar = charItr.next()
      if (nextChar.done) {
        return
      }
      setText(current => current + nextChar.value)
      timerId = setTimeout(showChar, speed)
    }
    showChar()

    return () => clearTimeout(timerId);
  }, [])

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
    >
      {text}
    </div>
  )
})
