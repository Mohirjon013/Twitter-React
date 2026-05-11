import React from 'react'
import working from '../../assets/images/working.gif'

function Reply() {
  return (
    <div className='h-[300px]'>
      <div className='text-center mt-20'>
        <div className='w-16 h-16 rounded-[16px] bg-[#E8EEFF] flex items-center justify-center mx-auto mb-5'>
          <img src={working} alt="process-img" width={25} height={25} />
        </div>
        <p className='text-[18px] font-semibold text-[#252733] mt-2'>Working on it</p>
        <p className='text-[14px] text-[#9FA2B4] mt-2'>This page is coming soon. Check back later.</p>
      </div>
    </div>
  )
}

export default Reply
