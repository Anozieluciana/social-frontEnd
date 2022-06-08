import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header/Header'
import Homescreen from './HomeScreen/Homescreen'
import BuildMainScreen from './HomeScreen/BuildMainScreen'
import DisplayCard from './HomeScreen/DisplayCard'
import SignIn from './Auth/Signin'
import Signup from './Auth/Signup'
import ResetPassword from './Auth/ResetPassword'
import NewPassword from './Auth/NewPassword'
import DetailScreen from './Profile/Detail'


const App = () => {
  return (
   <BrowserRouter>
   <Header/>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/build' element={<BuildMainScreen/>}/>
        <Route path='/display' element={<DisplayCard/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
        <Route path='newpass' element={<NewPassword/>}/>
        <Route path='detail' element={<DetailScreen/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App