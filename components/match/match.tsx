import { Participant } from "model/Match";
import Image from "next/image";
import { championImg, itemImg } from "services/routes";
import { ITEMS_POSITIONS } from "utils/const";

type props = {
  match: Participant
}

export const Match = ({ match }: props) => {

  const KDA = match && match.kills + match.assists / match.deaths

  if (!match) return <>Loading ...</>
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
      {match.win ? "Win" : "Lose"}
      <div>
        Items
        <div>
          {
            // ITEMS_POSITIONS.map(itemPos => <ItemImage key={itemPos} itemId={match[itemPos]}/>)
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