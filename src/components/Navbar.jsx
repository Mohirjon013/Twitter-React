import React, { useContext, useState } from 'react'
import logoImg from '../assets/images/logo.svg'
import logoDark from '../assets/images/logo-dark.svg'

import owl from '../assets/images/owl.jpg'

import { BookmarksActive, BookmarksIcon, ExploreActive, ExploreIcon, HomeActive, HomeIcon, ListActive, ListIcon, MessageIcon, MoreIcon, MoreIcons, NotificationActive, NotificationIcon, ProfileActive, ProfileIcon } from '../assets/images/icons'
import { NavLink, useLocation } from 'react-router-dom'
import Modal from './Modal'
import { Context } from '../context/AuthContext'


function Navbar() {
  const [modalOut, setModalOut] = useState(false)
  const { name,dark } = useContext(Context)
  const {pathname} = useLocation()


  const navbarLink = [
    {
      id:1,
      title:'Home',
      icon:pathname == '/' ? <HomeActive/> : <HomeIcon/>,
      path:'/'
    },
    {
      id:2,
      title:'Explore',
      icon:pathname == '/explore' ? <ExploreActive/> : <ExploreIcon/>,
      path:'/explore'
    },
    {
      id:3,
      title:'Notifications',
      icon:pathname == '/notifications' ? <NotificationActive/> : <NotificationIcon/>,
      path:'/notifications'
    },
    {
      id:4,
      title:'Messages',
      icon:<MessageIcon/>,
      path:'/messages'
    },
    {
      id:5,
      title:'Bookmarks',
      icon:pathname == '/bookmarks' ? <BookmarksActive/> : <BookmarksIcon/>,
      path:'/bookmarks'
    },
    {
      id:6,
      title:'Lists',
      icon:pathname == '/list' ? <ListActive/> : <ListIcon/>,
      path:'/list'
    },
    {
      id:7,
      title:'Profile',
      icon:pathname.includes('/profile') ? <ProfileActive/> : <ProfileIcon/>,
      path:'/profile'
    },
    {
      id:8,
      title:'More',
      icon:<MoreIcon/>,
      path:'/more'
    },
  ]
  

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  }


  return (
    <>
      <div className='w-[23%] h-[100vh] overflow-y-auto pt-[31px] pr-[16px] pl-10 relative border-r-[2px] border-r-[#D8D8D8]'>
        {dark === true ? <img className='w-[40px] h-[30px] scale-130' src={logoDark} alt="logo-img" width={40} height={33}/> : <img className='w-[40px] h-[30px]' src={logoImg} alt="logo-img" width={40} height={33}/>}
        
        <div className="mt-[49px] space-y-[32px]">
          {
            navbarLink.map(item => (
              <NavLink className={'flex gap-5'} key={item.id} to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            ))
          }
        </div>

        <button type='button' className='w-[230px] py-[18px] mt-[30px] text-[18px] text-white font-extrabold bg-[#1DA1F2] rounded-[76px] cursor-pointer hover:opacity-70 duration-300'>
          Tweet
        </button> 

        <div className="flex absolute bottom-[32px]">
          <img className='rounded-full mr-[10px]' src={owl} alt="owl-img" width={50} height={50} />
          <div className="">
            <p className='text-[16px] font-semibold'>{name?.toUpperCase()}</p>
            <span className='text-[16px] font-normal text-gray-500'>@bobur_mavlonov</span>
          </div>
          <button onClick={() => setModalOut(true)} className='cursor-pointer duration-300 scale-115 pl-6'>
            <MoreIcons dark={dark}/>
          </button>
        </div>

        
      </div>

      <Modal setIsOpen={setModalOut} isOpen={modalOut} extraStyle={`h-[200px] ${dark && 'text-black'}`}>

        <h2 className='text-center text-3xl  font-semibold mt-8'>Do you want to log out ?</h2>

        <div className="mt-11 px-3 flex justify-between">
          <button onClick={handleLogOut} className='w-[48%] py-2 bg-[#1DA1F2] rounded-3xl text-white text-[25px] font-bold cursor-pointer duration-300 hover:opacity-80'>Yes</button>
          <button onClick={() => setModalOut(false)} className='w-[48%] py-2 bg-[#ce2141] rounded-3xl text-white text-[25px] font-bold cursor-pointer duration-300 hover:opacity-80'>Cancel</button>
        </div>
      </Modal>
    </>
  )
}
 
export default Navbar
