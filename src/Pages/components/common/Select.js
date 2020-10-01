import React from 'react'

export function Input({ register, name, ...rest }) {
  return <input name={name} ref={register} {...rest} />
}

export default function Select({
  register,
  options,
  name,
  defaultValue,
  ...rest
}) {
  return (
    <select name={name} ref={register} defaultValue={defaultValue} {...rest}>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  )
}
