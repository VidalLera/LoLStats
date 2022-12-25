import Image from 'next/image'
import { championImg } from 'services/lol/ddragon'
import { getChampion } from 'services/lol/static/champions'

type props = {
  params: {
    championId: string
  }
}

export default async function Page ({ params: { championId } }: props) {
  const champion = await getChampion(championId)

  return (
    <>
      <h1>{champion.name}</h1>
      <Image
        width={100}
        height={100}
        src={championImg(champion.name)}
        alt={`${champion.name}_logo`}
      />
    </>
  )
}
