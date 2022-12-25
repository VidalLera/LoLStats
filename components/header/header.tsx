import { DropDownInput } from 'components/dropdown-input/dropdown-input'

export const Header = () => {
  return (
    <section className='p-10 py-5 flex w-full justify-between text-white bg-slate-900'>
      <Logo />
      <DropDownInput />
    </section>
  )
}

export const Logo = () => {
  return (
    <h1 className='text-5xl'>LoL-Stats</h1>
  )
}
