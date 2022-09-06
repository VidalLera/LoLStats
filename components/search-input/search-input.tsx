import { useEffect, useState } from "react"

const Input = () => {
  const [regions, setRegions] = useState([])
  useEffect(() => {
    fetch("")
      .then(res => res.json())
      .then(setRegions)
  }, [])
  
}

export default Input