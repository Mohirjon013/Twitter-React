import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import lazyImg from '../assets/images/lazy.gif'
// import { Profile } from '../pages'
import Navbar from '../components/Navbar'
import Sitebar from '../components/Sitebar'
import { Reply,Media, Likes,Tweet } from '../pages'

const Home = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import('../pages/Home')), 1000);
}))

const Profile = lazy(() => new Promise(resolve => {
  return setTimeout(() => resolve(import('../pages/Profile/Profile')), 1000)
}))

const LoadingFallback = () => (
  <img className='w-[100px] mx-auto mt-24' src={lazyImg} alt='loading' />
)

function Dashboard() {
  
  return (
    <div className="flex">
      <Navbar/>
      <div className="w-[50%] h-[100vh] overflow-auto" >
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>}>
              <Route path='/profile' element={<Tweet/>} />
              <Route path='replies' element={<Reply/>} />
              <Route path='media' element={<Media/>} />
              <Route path='likes' element={<Likes/>} />


            </Route>
          </Routes>
        </Suspense>
      </div>
      <Sitebar/>
    </div>
  )
}

export default Dashboard
