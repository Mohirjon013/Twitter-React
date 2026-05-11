import React, { useContext, useState } from 'react'
import LogoImg from '../assets/images/logo.svg'
import InputStyle from '../components/InputStyle'
import { Link } from "react-router-dom";
import loadingGif from '../assets/images/loading.gif'
import { Context } from '../context/AuthContext';
import toast from 'react-hot-toast';

function Login() {
  const {user, setToken, setName} = useContext(Context)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e){
    e.preventDefault()

    const data ={
      login:e.target.email.value.trim(),
      password:e.target.password.value.trim(),
    }
   
    const filteredUser = user.find(item => item.login === data.login && item.password === data.password)
    if(filteredUser){
      setLoading(true)
      toast.success(`Welcome to Twitter "${data.login.toUpperCase()}"`)

      setTimeout(() => {
        setToken(filteredUser)
        setName(filteredUser.login)
        setLoading(false)
      },1000)
    }
    else{
      setLoading(true)
      setTimeout(() => {
        toast.error('User is not found !')
        setLoading(false)
        e.target.reset()
      },1000)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='w-[450px] mx-auto mt-[80px]'>
      <img src={LogoImg} alt="logo-img" width={50} height={40} />
      <h1 className='text-[42px] font-extrabold'>Log in to Twitter</h1>

      <InputStyle exrtaStyle={'mt-[36px] w-full text-[18px]'} type={'text'} name={'email'} placeholder={'Phone number, email address'} />
      <InputStyle exrtaStyle={'mt-[25px] w-full text-[18px]'} type={'password'} name={'password'} placeholder={'Password'} />
      
      <button type='submit' className='w-full h-[59px] py-[18px] mt-[25px] text-[18px] text-white font-extrabold bg-[#1DA1F2] rounded-[76px] cursor-pointer hover:opacity-70 duration-300'>
        {loading ? <img className='scale-[3] mx-auto' src={loadingGif} alt='loading' width={22} /> : 'Log In'}
      </button>

      <div className="mt-[40px] flex justify-between">
        <p className='text-[18px] font-normal text-[#1DA1F2]' >Forgot password?</p>
        <Link to='/sign-up' className='text-[18px] font-normal text-[#1DA1F2]'>Sign up to Twitter</Link>
      </div>
    </form>
  )
}

export default Login
