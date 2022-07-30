import { GetStaticPropsContext, NextPage } from "next"
import Image from "next/image"
import { useRouter } from 'next/router'
import { Context } from "react"

interface image {

}

interface Skin {
  id: number
  num: number
  name: string
  chroma: boolean
}

interface Champion {
  id: string
  key: string
  name: string
  title: string
  image: image
  skins: Skin[]
  lore: string
  blurb: string
  allytips: string[]
  enemytips: string[]
  tags: string[]
  partype: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }

}

type props = {
  champion: Champion
}

const Champion: NextPage<props> = ({ champion }) => {
  return (
    <>
      <h1>{champion.id}</h1>
      <img 
        src={`https://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion.id}.png`} 
        alt={`${champion.id}_logo`} 
      />
    </>
  )
}

export async function getServerSideProps(context: GetStaticPropsContext) {
  const  championId = context.params.championId;
  const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/${championId}.json`)
  const { data } = await res.json()
  const champion = data[championId]
  return { props: { champion } }
}

export default Champion