import { Summoner } from "model/Summoner";
import Image from "next/image";
import { useState, useMemo } from "react";


const itemsPos = [
  "item0",
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6"
]

type props = {
  summoner: Summoner
}
export const Profile = ({ summoner }: props) => {
  return (
    <div className={''}>
      <h2>{summoner.name}</h2>
      <Image
        src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/profileicon/${summoner.profileIconId}.png`} 
        alt={summoner.name} 
        width={100}  
        height={100}
      />
      <h3>{summoner.summonerLevel}</h3>
    </div>
  )
}

