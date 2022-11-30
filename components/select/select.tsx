import { ChangeEvent } from "react"
// import { select, optionClass } from "./select.module.css"

type props =  {
  options: any[]
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ options, onChange }: props) => {
  return (
    <>
      <select onChange={onChange}>
        {
          options.map((option, i) => (
          <option value={option} key={i}>
            {option}
          </option>
          )
        )}
      </select>
    </>
  )
} 

export default Select