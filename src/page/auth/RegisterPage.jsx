import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className='text-xl font-bold text-blue-500' >
         <Link 
            className='font-bold' 
            to={'/'} 
        >
            back to intro page
        </Link>
    </div>
  )
}

export default RegisterPage