import Image from 'next/image'
import Link from 'next/link'
import { championImg } from 'services/lol/ddragon'
import { getChampions } from 'services/lol/static/champions'

export default async function Page () {
  const champions = await getChampions()

  return (
    <div>
      <h1>
        Champions
      </h1>
      {
        champions.map((champion) => (
          <div key={champion.id}>
            <Link href={`champions/${champion.name}`}>
              <div>
              <h1>{champion.id}</h1>
              <Image
                width={100}
                height={100}
                src={championImg(champion.id)}
                alt={`${champion.id}_logo`}
                />
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
