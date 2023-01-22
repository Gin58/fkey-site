import { memo } from 'react'
import { useTyping } from '../../hooks/useTyping'

type Props = {
  cursor?: boolean
  className?: string
  speed?: number
  delay?: number
}

export const Typing = memo(function Typing({
  cursor = true,
  className = '',
  speed = 50,
  delay = 0.5
}: Props) {
  const { text } = useTyping('Web Specialist Company', speed, delay)

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
    >
      {text}
    </div>
  )
})
