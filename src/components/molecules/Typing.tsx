import { memo, useEffect, useState } from 'react'
import { useTyping } from '../../hooks/useTyping'

type Props = {
  cursor?: boolean
  className?: string
  speed?: number
}

export const Typing = memo(function Typing({
  cursor = true,
  className = '',
  speed = 50
}: Props) {
  const { text } = useTyping('Web Specialist Company', speed)

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
    >
      {text}
    </div>
  )
})
