import React, { useContext } from 'react'
import SettingImg from '../assets/images/setting.svg'
import { Dot } from '../assets/images/icons'
import { Context } from '../context/AuthContext'

function Treds() {
  const {dark} = useContext(Context)
    return (
        <ul className={`w-[373px] pl-[15px] pr-[20px] bg-[#F7F9F9] ${dark && '!text-black'} rounded-[10px]`} >
          <li className="flex items-center justify-between py-[20px]">
            <strong className='text-[24px] font-bold' >Trends for you</strong>
            <img src={SettingImg} alt="setting-img" width={24} height={24} />
          </li>
          <ul className="space-y-4">
            {
              [0,1,2].map((_,index) => (
                <li className='flex relative' key={index}>
                  <div>
                    <span className=' text-[16px] text-[#393B41] leading-[21px]'>Trending in Germany</span>
                    <p className='font-semibold text-[20px] leading-[26px] my-[2px]'>Revolution</p>
                    <span className=' text-[16px] text-[#393B41] leading-[21px]'>50.4K Tweets</span>
                  </div>
                  <button className='absolute top-3 right-0'>
                    <Dot/>
                  </button>
                </li>
              ))
            }
          </ul>
          <li className='mt-[30px] pb-[25px]'>
            <p className='text-[#1DA1F2] text-[18px] leading-[18px]'>Show more</p>
          </li>
        </ul>
    )
}

export default Treds
