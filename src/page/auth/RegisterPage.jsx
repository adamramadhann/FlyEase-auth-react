import React from 'react'
import { Link } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const RegisterPage = () => {
  return (
    <div 
    className='w-screen h-screen bg-[#4788D7] flex items-center justify-center flex-col' 
  >
    <h1 className='text-2xl font-extrabold text-white mb-10' >
      Sign Up
    </h1>

    {/* form login */}
    <form className='w-[328px] h-auto flex flex-col gap-3' >
      <InputProps
        label={'Email'}
        htmlFor={"email"}
        image={"/public/image/Email.svg"}
        alt={'icon email'}
        typeInput={'text'}
        placeholderInput={'masukan email'}
      />

      {/* input password */}
      <InputProps
        label={'Password'}
        htmlFor={"password"}
        image={"/public/image/Email.svg"}
        alt={'icon password'}
        typeInput={'password'}
        placeholderInput={'masukan password'}
      />

      {/* input repassword */}
      <InputProps
        label={'Repassword'}
        htmlFor={"repassword"}
        image={"/public/image/Email.svg"}
        alt={'icon repassword'}
        typeInput={'password'}
        placeholderInput={'masukan repassword'}
      />

      <button
        className='w-full py-3 bg-white rounded-full mt-8 text-lg font-semibold text-[#4788D7] '
      >
        Register
      </button>
    </form> 

    {/* content link register */}
    <p className='text-white text-sm mt-5' >
    do you have an account? <Link className='font-bold' to={'/register'} >Sign in</Link>
    </p>
  </div>
  )
}

export default RegisterPage