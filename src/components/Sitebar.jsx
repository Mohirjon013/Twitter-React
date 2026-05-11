import React from 'react'
import { LoopIcon } from '../assets/images/icons'
import Picture from "../assets/images/pic.png"
import Treds from './Treds'
import MightLike from './MightLike'
import { useLocation } from 'react-router-dom'

function Sitebar() {
  const {pathname} = useLocation()
  
  return (
    <div className='w-[27%] h-[100vh] overflow-y-auto border-l-2 border-l-[#D8D8D8] pt-[20px] px-5'>

      <label className='relative '>
        <input className='w-[373px] pl-[60px] py-[15px] mb-[20px] text-[18px] text-[#5C6C79] bg-[#EFF3F4] rounded-[30px] outline-none' type="text" placeholder='Search Twitter' />
        <button className='absolute top-0 left-5' >
          <LoopIcon/>
        </button>
      </label>
      {pathname.includes("profile") ? <img className='mb-4' src={Picture} alt="picture img" width={373} height={178} /> : ""}

      <div className={`flex gap-5 ${pathname.includes("profile")  ? 'flex-col-reverse' : 'flex-col'}`}>
        <Treds/>
        <MightLike/>
      </div>

      <ul className="space-y-[5px] w-full mt-[30px]">
        <li className='flex items-center gap-2'>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Terms of Service</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Privacy Policy</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Cookie Policy</span>
        </li>
        <li className='flex items-center gap-2'>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Imprint</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>Ads Info</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>More ···</span>
          <span className='text-[16px] leading-[21px] text-[#536471]'>© 2021 Twitter, Inc.</span>
        </li>
      </ul>
    </div>
  )
}

export default Sitebar
