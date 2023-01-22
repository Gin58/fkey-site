import { useEffect, useState } from "react"

export const useTyping = (message: string, speed = 50) => {
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

  return {
    text
  }
}
