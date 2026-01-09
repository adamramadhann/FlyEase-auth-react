import React from 'react'
import { Link } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const LoginPage = () => {
  return (
    <div 
      className='w-screen h-screen bg-[#4788D7] flex items-center justify-center flex-col' 
    >
      <h1 className='text-2xl font-extrabold text-white mb-10' >
        Sign In
      </h1>

      {/* form login */}
      <form className='w-[328px] h-auto' >
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
        <p 
          className='text-end mt-1 text-white' 
        >
          Forgot password?
        </p>
        <button
          className='w-full py-3 bg-white rounded-full mt-8 text-lg font-semibold text-[#4788D7] '
        >
          Login
        </button>
      </form>
      
      {/* content sign in with */}
      <p className='text-center text-white font-semibold mt-10 text-sm' >
        OR <br /> sign in with
      </p>

      {/* link facebook dan google */}
      <div className='w-full flex items-center justify-center gap-3 my-5' >
         {/* link facebook */}
        <span className='w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center' >
          <img 
            src="/public/image/facebook.svg" 
            alt="logo facebook" 
            width={30} 
            height={30} 
          />
        </span>

         {/* link google */}
         <span className='w-[37px] h-[37px] rounded-full bg-white flex items-center justify-center' >
          <img 
            src="/public/image/google.svg" 
            alt="logo google" 
            width={30} 
            height={30} 
          />
        </span>
      </div>

      {/* content link register */}
      <p className='text-white text-sm' >
        Don’t have an account? <Link className='font-bold' to={'/register'} >Sign up</Link>
      </p>
    </div>
  )
}

export default LoginPage