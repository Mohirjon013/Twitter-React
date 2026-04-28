import React from 'react'

function InputStyle({exrtaStyle, type, name, placeholder}) {
  return (
    <input className={`w-full py-[23px] pl-[20px] border border-[#CCCCCC] rounded-[6px] outline-none ${exrtaStyle}`} type={type} name={name} placeholder={placeholder} required autoComplete='off' />
  )
}

export default InputStyle
