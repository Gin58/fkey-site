import { useState } from "react"

export const useTyping = () => {
  const [message, setMessage] = useState('')
  const [key, setKey] = useState(0)
  const [inputRock, setRock] = useState(false)

  const typeStart = (text = '') => {
    setKey(state => state + 1)
    setRock(true)
    setMessage(text)
  }

  return {
    typeStart,
    inputRock,
    key,
    message,
  }
}