import React from 'react'
import DatePicker from 'react-datepicker'
import Input from '../common/Input'
import 'react-datepicker/dist/react-datepicker.css'
//import './ReactDatePicker.css'

export default function ReactDatePicker({
  selected,
  onChange,
  onBlur,
  className,
  placeholderText,
  sendRef = () => {},
}) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      onBlur={onBlur}
      dateFormat="yyyy-MM-dd"
      className={className}
      placeholderText={placeholderText}
      popperClassName="some-custom-class"
      popperPlacement="top-end"
      popperModifiers={{
        offset: {
          enabled: true,
          offset: '5px, 10px',
        },
        preventOverflow: {
          enabled: true,
          escapeWithReference: false,
          boundariesElement: 'viewport',
        },
      }}
      customInput={<Input />}
      ref={(el) => {
        sendRef(el)
      }}
    />
  )
}
