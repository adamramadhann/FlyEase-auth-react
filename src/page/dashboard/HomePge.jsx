import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePge = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isLogin');
        navigate('/');
        window.location.reload();
    };

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-4' >
        <h1>Welcome to home page</h1>
        <button
            onClick={handleLogout}
            className='p-2 text-red-500 border font-bold'
        >
            LogOut
        </button>
    </div>
  )
}

export default HomePge