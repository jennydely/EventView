import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default function ReactDatePicker({ selected, onChange, onBlur }) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      onBlur={onBlur}
      dateFormat="yyyy-MM-dd"
    />
  )
}
