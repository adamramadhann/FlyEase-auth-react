import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IntroPage from './page/auth/IntroPage'
import LoginPage from './page/auth/LoginPage'
import RegisterPage from './page/auth/RegisterPage'
import HomePge from './page/dashboard/HomePge'

const App = () => {

  const isLogin = localStorage.getItem('isLogin') === 'true';

  if(isLogin) {
    return (
      <Routes>
        <Route path='/home' element={ <HomePge/> } />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path='/' element={ <IntroPage/> } />
      <Route path='/login' element={ <LoginPage/> } />
      <Route path='/register' element={ <RegisterPage/> } />
    </Routes>
  )
}

export default App