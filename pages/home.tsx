import { NextPage } from "next"
import { useState } from "react"
import { useRouter } from 'next/router'

const Home: NextPage<any> = () => {

  const router = useRouter()
  const [summoner, setSummoner] = useState('')

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/summoner/${summoner}`)
  }

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSummoner(e.target.value)
  }

  return (
    <>
      <h1>Summoner</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="summonerName">
          Summoner Name:
        </label>
        <input type="text" name="summonerName" onChange={inputHandler} value={summoner} />
      </form>
    </>
  )
}

export default Home