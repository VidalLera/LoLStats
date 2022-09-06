import Image from "next/image";
import Link from "next/link";
import Champion from "./champions/[championId]";

type props = {
  champions: Champion[];
}

const Champions = ({champions}: props) => {
  return (
    <div>
      {
        Object.entries(champions).map(([championId, champion]) => {
          return (
            <div key={champion.id}>
              <Link href={`champions/${championId}`}>
                <div>
                <h1>{champion.id}</h1>
                <Image 
                  width={100}
                  height={100}
                  src={`https://ddragon.leagueoflegends.com/cdn/12.14.1/img/champion/${champion.id}.png`} 
                  alt={`${champion.id}_logo`} 
                  />
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`)
  const { data } = await res.json()
  const champions = data
  return { props: { champions } }
}

export default Champions;