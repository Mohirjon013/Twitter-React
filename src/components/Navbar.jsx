import React, { useContext } from 'react'
import logoImg from '../assets/images/logo.svg'
import more from '../assets/images/more.svg'
import owl from '../assets/images/owl.jpg'

import { BookmarksIcon, ExploreIcon, HomeIcon, ListIcon, MessageIcon, MoreIcon, NotificationIcon, ProfileIcon } from '../assets/images/icons'
import { NavLink } from 'react-router-dom'
import Modal from './Modal'
import { Context } from '../context/AuthContext'

const navbarLink = [
    {
      id:1,
      title:'Home',
      icon:<HomeIcon/>,
      path:'/'
    },
    {
      id:2,
      title:'Explore',
      icon:<ExploreIcon/>,
      path:'/explore'
    },
    {
      id:3,
      title:'Notifications',
      icon:< NotificationIcon/>,
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
      icon:<BookmarksIcon/>,
      path:'/bookmarks'
    },
    {
      id:6,
      title:'Lists',
      icon:<ListIcon/>,
      path:'/list'
    },
    {
      id:7,
      title:'Profile',
      icon:<ProfileIcon/>,
      path:'/profile'
    },
    {
      id:8,
      title:'More',
      icon:<MoreIcon/>,
      path:'/more'
    },
]
function Navbar() {
  const {setIsModal} = useContext(Context)

  const handleLogOut = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  }
  
  return (
    <>
      <div className='w-[23%] h-[100vh] pt-[31px] pr-[16px] pl-35 relative'>
        <img src={logoImg} alt="logo-img" width={40} height={33}/>
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
            <p className='text-[16px] font-semibold'>Bobur</p>
            <span className='text-[16px] font-normal text-gray-500'>@bobur_mavlonov</span>
          </div>
          <button onClick={() => setIsModal(true)} className='cursor-pointer duration-300 scale-115'>
            <img className='ml-[48px]' src={more} alt="more" width={17} height={4} />
          </button>
        </div>

        
      </div>

      <Modal extraStyle={'h-[200px]'}>
        <h2 className='text-center text-3xl text-white font-semibold mt-8'>Do you want to log out ?</h2>

        <div className="mt-11 px-3 flex justify-between">
          <button onClick={handleLogOut} className='w-[48%] py-2 bg-[#7cc532] rounded-3xl text-white text-[25px] font-bold cursor-pointer duration-300 hover:opacity-80'>Yes</button>
          <button onClick={() => setIsModal(false)} className='w-[48%] py-2 bg-[#ce2141] rounded-3xl text-white text-[25px] font-bold cursor-pointer duration-300 hover:opacity-80'>Cancel</button>
        </div>
      </Modal>
    </>
  )
}
 
export default Navbar
