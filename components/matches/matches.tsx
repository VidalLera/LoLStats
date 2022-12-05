import Image from 'next/image'
import React from 'react'
import { getMatch, getMatchIds } from 'services/match/match'
import { championImg, itemImg } from 'services/routes'
import { ITEMS_POSITIONS } from 'utils/const'

type props = {
  puuid: string
}

export async function Matches ({ puuid }: props) {
  const matchIds = (await getMatchIds(puuid)).slice(0, 5)

  return (
    <>
      <div>Matches</div>
      {
        /* @ts-expect-error */
        matchIds.map(matchId => <Match key={matchId} matchId={matchId} />)
      }
    </>
  )
}

export async function Match ({ matchId }: {matchId: string}) {
  const match = await getMatch(matchId)

  const KDA = match && match.kills + match.assists / match.deaths

  return (
    <div>
      <Image
        height={100}
        width={100}
        src={championImg(match.championName)}
        alt={match.championName}
      />
      KDA {match.kills}/{match.deaths}/{match.assists}
      <br />
      {KDA}
      <br />
      KP {match.challenges.killParticipation}
      {match.win ? 'Win' : 'Lose'}
      <div>
        Items
        <div>
          {
            /* @ts-expect-error */
            ITEMS_POSITIONS.map(itemPos => <ItemImage key={itemPos} itemId={match[itemPos]}/>)
          }
        </div>
      </div>
    </div>
  )
}

const ItemImage = ({ itemId }: { itemId: string }) => {
  return (
    <Image
      height={30}
      width={30}
      src={itemImg(itemId)}
      alt={'Item' + itemId}
    />
  )
}
