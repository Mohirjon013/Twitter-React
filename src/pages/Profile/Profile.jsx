import React, { useContext, useState } from 'react'
import back from '../../assets/images/back.svg'
import bgImg from '../../assets/images/bg-img.png'
import profileImg from '../../assets/images/profile-img.png'
import location from '../../assets/images/location.svg'
import links from '../../assets/images/links.svg'
import born from '../../assets/images/born.svg'
import cancel from '../../assets/images/cancel.svg'




import { Context } from '../../context/AuthContext'
import {  Link, Outlet, useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal'


function Profile() {
  const { token, name, setName } = useContext(Context)


  const navigate = useNavigate()
  const [profileActive , setProfileActive] = useState("Tweets")
  const [avatarImg, setAvatarImg] = useState(profileImg)
  const [modal, setModal] = useState(false)


  const profileInfo = [
    {
      id: 1,
      icon: location,
      text: "Mashag'daman",
    },
    {
      id: 2,
      icon: links,
      text: 't.me/boburjon_mavlonov',
    },
    {
      id: 3,
      icon:born,
      text: 'Born November 24, 2000',
    }
  ]
  const tabs = [
    { id: 1, label: 'Tweets', link:'/profile' },
    { id: 2, label: 'Tweets & replies', link:'replies'  },
    { id: 3, label: 'Media', link:'media'  },
    { id: 4, label: 'Likes', link:'likes'  },
  ]

  const [userInfo, setUserInfo] = useState({
    img:avatarImg,
    name:name.toUpperCase(),
    title:'UX&UI designer at',
    email:'@bobur_mavlonov',
    companyName:'@abutechuz',
  })

  function handlSubmit(e){
    e.preventDefault()
    const data = {
      img:avatarImg,
      name:e.target.userName.value,
      title:e.target.info.value,
      email:e.target.userEmail.value,
      companyName:e.target.company.value,
    }
    setUserInfo(data)
    setName(data.name)
    setModal(false)
    setAvatarImg(profileImg)
    e.target.reset()
  }
  
  return (
    <div>
      <div className="pt-[18px] pl-[30px] pb-[15px] flex gap-7">
        <button className='cursor-pointer' onClick={() => navigate('/')}>
          <img src={back} alt="back" width={20} />
        </button>
        <div className="">
          <strong className='text-[20px] font-bold '>{userInfo.name.toUpperCase()}</strong> 
          <p className='text-[18px] text-gray-500 mt-[2px]'>1,070 Tweets</p>
        </div>
      </div>

      <img className='w-full pl-[1px]' src={bgImg} alt="bg-img" height={280} />

      <div className="flex items-center justify-between px-[25px] ">
        <img className='-mt-[75px]' src={userInfo.img} alt="profile-img" width={150} height={150} />
        <button onClick={() => setModal(true)} className='w-[120px] py-[10px] border-2 border-[#00000066] rounded-[50px] cursor-pointer'>Edit profile</button>
      </div>
       
      <div className="p-[25px] pb-[40px]">
        <strong>{userInfo.name.toUpperCase()}</strong>
        <p className='text-[16px] text-gray-500'>{userInfo.email}</p>
        <p className='mt-[10px]'>{userInfo.title} <span className='text-[#1DA1F2]'>{userInfo.companyName}</span> </p>

        <ul className='flex items-center gap-8 my-[15px]'>
          {profileInfo.map(item => (
            <li className='flex gap-[5px]' key={item.id}>
              <img src={item.icon} alt="icons" width={24} height={24} />
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          {[{num:67, text: 'Following'},{num:47, text: 'Followers'}].map((item, index) => <p className='font-bold text-[18px]' key={index}> {item.num} <span className='font-normal text-gray-400'>{item.text}</span> </p>)}
        </div>
      </div>

      <div className="flex items-center justify-between px-[25px] border-b-[2px] border-b-[#C4C4C4]">
        {tabs.map(item => <Link key={item.id} onClick={(e) => setProfileActive(e.target.textContent)} className={`${profileActive == item.label ? "before:left-0": ""} relative before:w-[100%] before:h-[4px] before:bg-blue-500 before:rounded-md before:absolute before:bottom-0 before:-left-[100%] duration-300 overflow-hidden font-bold text-[18px] pb-[19px] inline-block`} to={item.link}>{item.label}</Link>)}
      </div>
      <Outlet/>


      <Modal setIsOpen={setModal} isOpen={modal} extraStyle={'h-[550px] relative'}>
        <button className='cursor-pointer' onClick={() => setModal(false)}>
          <img className='scale-110 absolute right-4 top-4' src={cancel} alt="cancel" width={30} height={30} />
        </button>
        <form onSubmit={handlSubmit} className='w-full mt-1' >
          <label htmlFor="file">
            <input onChange={(e) => setAvatarImg(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' id='file' />
            <img className='w-[200px] h-[200px] mx-auto rounded-full object-cover cursor-pointer' src={avatarImg} alt="img" width={200} height={200} />
          </label>
          <div className="flex w-full justify-between mt-6">
            <div className="w-[48%]  flex flex-col gap-[20px]">
              <label className="flex flex-col">
                <span className='text-[15px] text-black'>First name :</span>
                <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter name " name="userName" autoComplete="off" required />
              </label>
              <label className="flex flex-col">
                <span className='text-[15px] text-black'>User email:</span>
                <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="email" placeholder="Enter email " name="userEmail" autoComplete="off" required />
              </label>
            </div>
            <div className="w-[48%]  flex flex-col gap-[20px]">
              <label className="flex flex-col">
                <span className='text-[15px] text-black'>Job title :</span>
                <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter Job title " name="info" autoComplete="off" required />
              </label>
              <label className="flex flex-col">
                <span className='text-[15px] text-black'>User company name :</span>
                <input className='bg-[#EEEEEE] placeholder:text-zinc-600 p-3 rounded-lg mt-2 outline-none focus:shadow  focus:shadow-gray-700' type="text" placeholder="Enter compny name " name="company" autoComplete="off" required />
              </label>
            </div>
          </div>

          <button className=" mt-5 p-2 text-[22px] w-full bg-[#1DA1F2] rounded-[30px] text-white" type='submit' >Update user</button>
        </form>
      </Modal>
    </div>
  )
}

export default Profile
