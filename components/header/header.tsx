import Select from "components/select/select"
import { useRouter } from "next/router"
import { ChangeEvent, useState } from "react"
import { PLATFORM } from "utils/const"

export const Header = () => {

  const router = useRouter()
  const [summoner, setSummoner] = useState('')
  const [region, setRegion] = useState('')

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/summoner/${summoner}`)
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSummoner(e.target.value)
  }

  const regionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegion(e.target.value)
  }

  return (
    <>
      <h1>Summoner</h1>
      <form onSubmit={formHandler}>
        <Select options={Object.keys(PLATFORM)} onChange={regionChange}/>
        <input type="text" name="summonerName" onChange={inputHandler} value={summoner} />
      </form>
    </>
  )
}