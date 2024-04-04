import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/Dashboard'



function App() {
  

  return (
    <div className='flex flex-col relative h-screen place-content-center items-center'>
      
        <img className='w-full h-full  absolute object-cover ' src='https://wallpapers.com/images/hd/lord-of-the-rings-landscape-waterfall-71cywuijml782f0b.jpg' alt='lotr image'></img>
        <Dashboard/>
      
    </div>
  )
}

export default App
