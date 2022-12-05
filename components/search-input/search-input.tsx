import { ChangeEvent } from 'react'

type InputValue = string | number;

type props<T extends InputValue> = {
  type?: string,
  name?: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value : T
}

function Input<T extends InputValue> ({ type = 'search', name, placeholder, onChange, value }: props<T>) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      />
    </>
  )
}

export default Input
