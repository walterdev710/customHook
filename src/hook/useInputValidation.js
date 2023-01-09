import { useState } from "react"

const useInputValidation = initValue => {
    const[ value, setValue ] = useState(initValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    const validationInput = () => {
      return value.search(/\d/) > 0
    } 
  
    const colorValidate = validationInput() ? "text-danger" : null;
  
    return { value, onChange, validationInput, colorValidate }
}

export default useInputValidation;