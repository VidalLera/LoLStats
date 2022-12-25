import { Summoner } from 'model/Summoner'
import Image from 'next/image'
import { profileIcon } from 'services/routes'

type props = {
  summoner: Summoner
}

export const Profile = ({ summoner }: props) => {
  return (
    <div className={''}>
      <h2>{summoner.name}</h2>
      <Image
        src={profileIcon(summoner.profileIconId)}
        alt={summoner.name}
        width={100}
        height={100}
      />
      <h3>{summoner.summonerLevel}</h3>
      <div>{new Date(summoner.revisionDate).toLocaleDateString()}</div>
    </div>
  )
}
