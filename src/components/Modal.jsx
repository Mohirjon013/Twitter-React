import React, { useContext } from 'react'
import { Context } from '../context/AuthContext'

function Modal({children, extraStyle}) {
    const {isModal, setIsModal} = useContext(Context)
    return (
      <div onClick={(e) => e.target.id === 'wrapper' ? setIsModal(false) : ''} id='wrapper' className={`fixed inset-0 backdrop-blur-md duration-300 ${isModal ? 'scale-100' : 'scale-0'}`}>
        <div className={`w-[600px] ${extraStyle} absolute inset-0 m-auto bg-[#498dd6] rounded-lg`}>
          {children}
        </div>
      </div>
    )
}

export default Modal
