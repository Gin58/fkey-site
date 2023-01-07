import cntl from "cntl"

export const TopHeroText = () => {
  return (
    <div className={Text}>
      <h1 className="text-3xl md:text-5xl mb-4 font-bold">Web Specialist Company</h1>
      <span className="text-lg md:text-2xl">株式会社サイバーシップスは、ホームページ制作、システム開発、webマーケティングの専門会社です。</span>
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
