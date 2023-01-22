import cntl from 'cntl'
import { Typing } from './Typing'

export const TopHeroText = () => {
  return (
    <div className={Text}>
      <Typing className="text-3xl md:text-5xl mb-4 font-bold tracking-wider" />
      <span className="text-lg md:text-2xl">
        株式会社サイバーシップスは、ホームページ制作、システム開発、webマーケティングの専門会社です。
      </span>
    </div>
  )
}

const Text = cntl`
  absolute
  mx-4
  text-white
  top-[50%]
  transform
  translate-y-[-50%]
`
