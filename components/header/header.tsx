'use client'
import Input from 'components/search-input/search-input'
import Select from 'components/select/select'
import { useRouter } from 'next/router'
import { ChangeEvent, FormEvent, useState } from 'react'
import { PLATFORM } from 'utils/const'

export const Header = () => {
  const router = useRouter()
  const [summoner, setSummoner] = useState('')
  const [region, setRegion] = useState('')

  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/summoner/${summoner}`)
  }

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSummoner(e.target.value)
    console.log(region)
  }

  const regionChange = (region: string) => {
    setRegion(region)
  }

  return (
    <>
      <h1>Summoner</h1>
      <form onSubmit={formHandler}>
        <Select options={Object.keys(PLATFORM)} onChange={regionChange}/>
        <Input placeholder="Search" onChange={inputHandler} value={summoner} />
        <input type="text" name="summonerName" onChange={inputHandler} value={summoner} />
      </form>
    </>
  )
}
