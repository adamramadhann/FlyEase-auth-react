import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IntroPage from './page/auth/IntroPage'
import LoginPage from './page/auth/LoginPage'
import RegisterPage from './page/auth/RegisterPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <IntroPage/> } />
      <Route path='/login' element={ <LoginPage/> } />
      <Route path='/register' element={ <RegisterPage/> } />
    </Routes>
  )
}

export default App