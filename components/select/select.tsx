import { select, optionClass } from "./select.module.css"

type props =  {
  options: any[]
  onChange: Function
}

const Select = ({ options, onChange }: props) => {
  return (
    <>
      <select className={select}>
        {
          options.map((option, i) => (
          <option value={option} key={i} onChange={onChange}>
            {option}
          </option>
          )
        )}
      </select>
    </>
  )
} 

export default Select