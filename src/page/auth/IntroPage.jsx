import React from 'react'
import { Link } from 'react-router-dom'

const IntroPage = () => {
  return (
    <div className='bg-[#4788D7] w-screen h-screen flex items-center justify-center flex-col relative' >
        <img src="/public/image/map.png" alt="map" className='absolute top-0' />
        {/* logo */}
        <div className='flex items-center gap-3' >
            <img src="/public/image/logo.svg" alt="logo FlyEase" />
            <h1 className='text-lg text-white font-extrabold' >FlyEase</h1>
        </div>
        {/* image pesawat */}
        <img src="/public/image/pewaswat.png" alt="pesawat" />
        {/* content intro page */}
        <div className='w-[328px] flex items-center flex-col text-white text-center mt-5' >
            <h1 className='text-3xl font-bold' >
                Find Your Flights Just One-Click Away
            </h1>
            <p className='text-sm mt-3' >
                Book flights easily, anytime, anywhere, right from your smartphone!
            </p>
            <Link className='w-full py-4 rounded-full bg-white text-[#4788D7] text-xl font-semibold mt-8' to={'/register'} >
                Get Started
            </Link>
            <p className='mt-3' >
                Already have an account? 
                <Link 
                    className='font-bold' 
                    to={'/login'} 
                >
                    Login
                </Link>
            </p>
        </div>
    </div>
  )
}

export default IntroPage