import { useEffect, useState } from "react"
const sleep = (second: number) => new Promise(resolve => setTimeout(resolve, second * 1000))

export const useTyping = (message: string, speed = 50, delay = 0) => {
  const [text, setText] = useState('')
  useEffect(() => {
    ;(async () => {
      await sleep(delay)
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
    })()
  }, [])

  return {
    text
  }
}
