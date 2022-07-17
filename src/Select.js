import React from "react"
import { SelectBtn } from "./StartStyle"

const selectValues = [5, 7, 10]

const Select = ({ onChange }) => {
  return (
    <SelectBtn onChange={onChange}>
      {selectValues.map((optionVal) => (
        <option key={optionVal} value={optionVal}>
          {optionVal} x {optionVal}
        </option>
      ))}
    </SelectBtn>
  )
}

export { Select }
