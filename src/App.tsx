import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Checkout from './pages/Checkout'
import Layout from './pages/Layout'
import './App.css'
import Error404 from './pages/404'
import Template from './pages/Template'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='checkout' element={<Checkout/>}/>

      <Route path='/admin' element={<Layout/>}>
        <Route path='home' element={<Home/>}/>
         <Route path='gallery' element={<Gallery/>}/>
         <Route path='checkout' element={<Checkout/>}/>
         <Route path=':firstname' element={<Template/>}/>
      </Route>
    <Route path='*' element={<Error404/>}/>
     </Routes>
    </>
  )
}

export default App
