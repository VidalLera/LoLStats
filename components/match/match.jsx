import Image from "next/image";
import { useState, useMemo } from "react";
import { itemsPositions } from "utils/const";
import { container, img } from "./match.module.css"

export const Match = ({ match }) => {

  const KDA = match && match.kills + match.assists / match.deaths

  if (!match) return <>Loading ...</>
  return (
    <div className={container}>
      <Image
        height={100}
        width={100} 
        src={`https://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${match.championName}.png`} 
        alt={match.championName} 
        className={img} 
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
            itemsPositions.map(itemPos => <ItemImage key={itemPos} itemId={match[itemPos]}/>)
          }
        </div>
      </div>
    </div>
  )
}
const ItemImage = ({ itemId }) => {
  return (
    <Image
      height={30}
      width={30}
      src={`https://ddragon.leagueoflegends.com/cdn/12.14.1/img/item/${itemId}.png`}
      alt={'Item' + itemId}
    />
  )
}