'use client'
import { PLATFORM } from 'utils/constants'
import { useState, ReactNode, FormEvent, ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'

export const DropDownInput = () => {
  const router = useRouter()
  const [selectedId, setSelectedId] = useState('EUW1')
  const [value, setValue] = useState('')

  const onSelect = (id: string) => setSelectedId(id)

  function handleSubmit (e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/lol/summoners/${value}`)
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)

  return (
    <form onSubmit={handleSubmit} className="flex">
      <DropDown selectedId={selectedId} onSelect={onSelect} />
      <Input value={value} setValue={onChange} />
    </form>
  )
}

type inputProps = {
  value: string,
  setValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, setValue }: inputProps) => {
  return (
    <div className="relative w-full">
      <input
        value={value}
        onChange={setValue}
        type="search"
        placeholder="Search for summoner/champion"
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      />
      <SearchButton />
    </div>
  )
}

export const SearchButton = () => {
  return (
    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <span className="sr-only">Search</span>
    </button>
  )
}

export const DropDown = ({ selectedId, onSelect }: {selectedId: string, onSelect: (name: string) => void }) => {
  const [hidden, setHidden] = useState(true)

  const hiddenHandler = () => setHidden(!hidden)
  const selectHandler = (name: string) => {
    onSelect(name)
    hiddenHandler()
  }

  return (
    <div className="relative">
      <DropDownButton selectedId={selectedId} hiddenHandler={hiddenHandler} />
      <DropDownList hidden={hidden} selectHandler={selectHandler} />
    </div>
  )
}

type DDLProps = {
  hidden: boolean,
  selectHandler: (name: string) => void
}

export const DropDownList = ({ hidden, selectHandler }: DDLProps) => {
  return (
    <div className={`${hidden && 'hidden'} z-10 absolute !top-[100%] my-1 w-full bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700`}>
      <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
        {
          PLATFORM.map(({ name, platform, icon }) =>
            <DropDownItem key={platform} id={platform} name={name} icon={icon} selectHandler={selectHandler} />
          )
        }
      </ul>
    </div>
  )
}

export const DropDownButton = ({ selectedId, hiddenHandler }: { selectedId: string, hiddenHandler: () => void }) => {
  const [selected] = PLATFORM.filter(({ platform }) => platform === selectedId)
  const { name, icon } = selected
  return (
    <>
      <label htmlFor="location-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Your Email
      </label>
      <button
        onClick={hiddenHandler}
        className="w-auto flex-nowrap flex-row z-10 flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg gap-1
        hover:bg-gray-200 focus:ring-4 !focus:outline-none focus:ring-gray-100
        dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      >
        <div>
          {icon}
        </div>
        <div>
          {name}
        </div>
      </button>
    </>
  )
}

export const DropDownItem = ({ id, name, icon, selectHandler }: { id: string, name: string, icon: ReactNode, selectHandler: (id: string) => void }) => {
  return (
    <li>
      <button onClick={() => selectHandler(id)} className="flex-nowrap flex-row inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" >
        <div className="flex items-center gap-1">
          <div>
            {icon}
          </div>
          <div>
            {name}
          </div>
        </div>
      </button>
    </li>
  )
}
