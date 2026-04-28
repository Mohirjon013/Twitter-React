import React, { useContext, useState } from 'react'
import LogoImg from '../assets/images/logo.svg'
import InputStyle from '../components/InputStyle'
import { Link, useNavigate } from "react-router-dom";
import loadingGif from '../assets/images/loading.gif'
import toast from 'react-hot-toast';
import { Context } from '../context/AuthContext';

function Register() {
  const {setUser} = useContext(Context)
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)


  function handleRegisterBtn(e){
    e.preventDefault()

    const data ={
      id:crypto.randomUUID(),
      login:e.target.email.value.trim(),
      password:e.target.password.value.trim(),
      role: 'user'
    }

    setLoading(true)
    toast.success('Successfully registered 🎉')
    setTimeout(() => {
      setUser(prev => [...prev, data])
      navigate('/')
      setLoading(false)
    },1000)
  }
  
  
  return (
    <form onSubmit={handleRegisterBtn} className='w-[670px] mx-auto mt-[80px]'>
      <img className='mx-auto mb-[40px]' src={LogoImg} alt="logo-img" width={40} height={33} />
      <h1 className='text-[30px] font-bold'>Create an account</h1>

      <InputStyle exrtaStyle={'mt-[35px] w-full text-[18px]'} type={'text'} name={'email'} placeholder={'Phone number, email address'} />
      <InputStyle exrtaStyle={'mt-[25px] w-full text-[18px]'} type={'password'} name={'password'} placeholder={'Password'} />

      <Link to='/' className='text-[18px] font-normal text-[#1DA1F2] mt-5 block'>Sign In</Link>
      
      <button type='submit' className='w-full h-[59px] py-[18px] mt-[25px] text-[18px] text-white font-extrabold bg-[#1DA1F2] rounded-[76px] cursor-pointer hover:opacity-70 duration-300'>
        {loading ? <img className='scale-[3] mx-auto' src={loadingGif} alt='loading' width={22} /> : 'Log In'}
      </button>
    </form>
  )
}

export default Register
