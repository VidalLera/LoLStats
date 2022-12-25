import Image from 'next/image'
import { getUserMatch } from 'services/match/match'
import { championImg, itemImg } from 'services/routes'
import { ITEMS_POSITIONS } from 'utils/constants'

// type ItemPositions = Extract<keyof Participant, string>;

type props = {
  puuid: string,
  matchId: string
}

export async function Match ({ puuid, matchId }: props) {
  const match = await getUserMatch(puuid, matchId)

  const KDA = (match.kills + match.assists / match.deaths).toFixed(2)

  return (
    <div className='bg-gray-900 flex text-white rounded-xl'>
      <div>
      <Image
        height={100}
        width={100}
        src={championImg(match.championName)}
        alt={match.championName}
        className='rounded-md border border-white'
      />
      </div>
      <span className={match.win ? 'text-blue-500' : 'text-red-500'}>
        {match.win ? 'Win' : 'Lose'}
      </span>
      <span>
        KDA {match.kills}/{match.deaths}/{match.assists}
        <br />
        {KDA}
      </span>
      <span>
        KP {match.challenges.killParticipation.toFixed(2)}%
      </span>
      <span>
        {match.lane}
      </span>
      <div className='w-20'>
        Items
        <div className='flex'>
          {
            ITEMS_POSITIONS.map((itemPos) => {
              return <ItemImage key={itemPos} itemId={match[itemPos]}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

const ItemImage = ({ itemId }: { itemId: number }) => {
  if (itemId === 0) return <DefaultItem />

  return (
    <Image
      height={30}
      width={30}
      src={itemImg(itemId)}
      alt={'Item' + itemId}
      className='rounded w-8 h-8 border border-white '
    />
  )
}

const DefaultItem = () => {
  return (
    <div className='bg-black w-8 h-8 min-w-auto min-h-auto rounded border border-white ' />
  )
}
