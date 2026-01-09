import React from 'react'

const InputProps = ({ htmlFor, label, image, alt, typeInput, placeholderInput }) => {
  return (
    <label 
        htmlFor={htmlFor}
        className='text-lg text-white font-medium flex flex-col gap-2 mt-2'
    >
        {label}
        <span className='flex items-center gap-2 w-full bg-[#89CCFA] py-3 px-2 rounded-md' >
          <img 
            src={image}
            alt={alt}
          />
          <input 
            type={typeInput}
            placeholder={placeholderInput}
            className='outline-none text-[#938DB2]' 
          />
        </span>
    </label>
  )
}

export default InputProps