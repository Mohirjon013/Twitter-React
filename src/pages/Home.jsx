import React, { useContext, useState } from 'react'
import whiteMode from '../assets/images/white-mode.svg'
import owl from '../assets/images/owl.jpg'
import imgIcon from '../assets/images/images.svg'
import gifIcon from '../assets/images/gif.svg'
import statusIcon from '../assets/images/status.svg'
import emojiIcon from '../assets/images/emoji.svg'
import dateIcon from '../assets/images/date.svg'



import cancel from '../assets/images/cancel.svg'
import loadingGif from '../assets/images/loading.gif'


import toast from 'react-hot-toast'
import PostItem from '../components/PostItem'
import { Context } from '../context/AuthContext'




function Home() {
  
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [postImgs, setPostImgs] = useState(null)

  const { token, post, setPost, dark,setDark } = useContext(Context)
  const name = token.login
  
  

  function handleSubmitForm(e){
    e.preventDefault()
    if(!inputValue.trim()){
      toast.error('Please type smth!') 
      setInputValue('')
      return
    }

    const data = {
      id:crypto.randomUUID(),
      icon:owl,
      title:name?.toUpperCase(),
      user:`@${name} · 1m`,
      text:inputValue,
      comment:false,
      reply:false,
      like:false,
      postImg:postImgs
    }

    toast.success(`@${name} tweeted successfully!`)
    setLoading(true)
    setTimeout(() => {
      setPost(prev => [ data, ...prev])
      setInputValue('')
      setPostImgs(null)
      setLoading(false)
    }, 800);
    
  }

  return (
    <div className=''>
      <div className="p-[20px] flex justify-between">
        <h1 className='text-[24px] font-bold  '>Home</h1> 
        <button onClick={() => setDark(prev => !prev)} type='button' className='cursor-pointer'>
          <img src={whiteMode} alt="white-mode" width={24} height={24} />
        </button>
      </div>

      <form className=' py-2 px-5 pb-8 border-y-[1px] border-y-[#D8D8D8] relative' onSubmit={handleSubmitForm}>
        <div className="flex gap-1">
          <img className='rounded-full mr-[10px]' src={owl} alt="owl-img" width={60} height={60} />
          <input className='w-[80%] p-1 outline-none text-lg font-medium' value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder='What’s happening' name='title' required autoComplete='off' />
        </div>

        <div className={`w-[530px] relative pt-4 ml-17 mt-4 rounded-2xl border-2 border-[#1DA1F2] ${postImgs ? 'block' : 'hidden'}`}>
          <button type='button' onClick={() => setPostImgs(null)} className='absolute right-2.5 top-3 cursor-pointer'>
            <img className='scale-[1.5]' src={cancel} alt="cancel-img" width={20} height={20} />
          </button>
          {postImgs ? <img className='rounded-3xl p-3' src={postImgs} alt='chose-img' width={500} height={453} /> : ''}
        </div>

        <div className="mt-5 pl-[75px] flex items-center gap-4">
          <label>
            <input onChange={(e) => setPostImgs(URL.createObjectURL(e.target.files[0]))} type="file" className='hidden' />
            <img className='cursor-pointer' src={imgIcon} alt="images-icon" width={24} height={24} />
          </label>
          <img src={gifIcon} alt="gif-icon" width={24} height={24} />
          <img src={statusIcon} alt="status-icon" width={24} height={24} />
          <img src={emojiIcon} alt="emoji-icon" width={24} height={24} />
          <img src={dateIcon} alt="emoji-icon" width={24} height={24} />
        </div>

        <button type={`${inputValue ? 'submit' : 'button'}`} className={`w-[110px] py-[13px] absolute bottom-1.5 right-5 text-[17px] text-white font-bold bg-[#1DA1F2] rounded-[76px] duration-300 ${inputValue ? 'cursor-pointer hover:opacity-70' : 'cursor-not-allowed hover:opacity-50 opacity-50'}`}>
          {loading ? <img className='mx-auto scale-[2] h-[22px]' src={loadingGif} alt='loading-gif' width={22}  /> : 'Tweet'}
        </button> 
      </form>

      <ul> {post.map((item) => <PostItem item={item} key={item.id} />)} </ul>
    </div>
  )
}

export default Home
