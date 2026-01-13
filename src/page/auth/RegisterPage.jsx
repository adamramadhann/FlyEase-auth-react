import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputProps from '../../components/InputProps'

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email !== '' && password !== '' && password === repassword) {
      // simpan localstorage
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        navigate('/login');

    } else {
      alert('input email dan input password tidak boleh kosong serta input password harus sama dengan input repassword');
    }
  };

  return (
    <div 
    className='w-screen h-screen bg-[#4788D7] flex items-center justify-center flex-col' 
  >
    <h1 className='text-2xl font-extrabold text-white mb-10' >
      Sign Up
    </h1>

    {/* form login */}
    <form onSubmit={handleSubmit} className='w-[328px] h-auto flex flex-col gap-3' >
      <InputProps
        label={'Email'}
        htmlFor={"email"}
        image={"/public/image/Email.svg"}
        alt={'icon email'}
        typeInput={'text'}
        placeholderInput={'masukan email'}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* input password */}
      <InputProps
        label={'Password'}
        htmlFor={"password"}
        image={"/public/image/Email.svg"}
        alt={'icon password'}
        typeInput={'password'}
        placeholderInput={'masukan password'}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* input repassword */}
      <InputProps
        label={'Repassword'}
        htmlFor={"repassword"}
        image={"/public/image/Email.svg"}
        alt={'icon repassword'}
        typeInput={'password'}
        placeholderInput={'masukan repassword'}
        onChange={(e) => setRepassword(e.target.value)}
      />

      <button
        className='w-full py-3 bg-white rounded-full mt-8 text-lg font-semibold text-[#4788D7]'
        type='submit'
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