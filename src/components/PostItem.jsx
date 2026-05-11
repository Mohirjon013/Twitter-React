import React, { useState } from 'react'
import { CommentIcon, LikeIcon, ReplyIcon } from '../assets/images/icons'


function PostItem({item}) {
    const [comments, setComments] = useState(item.comment)
    const [repost, setRepost] = useState(item.reply)
    const [like, setLike] = useState(item.like)
    const [toggle, setToggle] = useState({comment: false, repost: false, like: false})
    function handleBtn(text){
        const isActive = toggle[text]
        setToggle(prev => ({...prev, [text]: !prev[text]}))
        if(text === 'comment') setComments(isActive ? item.comment : +item.comment + 1)
        else if(text === 'repost') setRepost(isActive ? item.reply : +item.reply + 1)
        else if(text === 'like') setLike(isActive ? item.like : +item.like + 1)
    }

    return (
        <li className='flex gap-2 px-[25px] pb-5 pt-[10px] border-b-1 border-b-[#D8D8D8]'>
            <img className='rounded-full h-[60px]' src={item.icon} alt="img-icons" width={60} height={60}/>
            <div>
                <strong className='text-[20px] font-bold mr-[5px]'>{item.title}</strong>
                <span className='text-[18px] font-normal text-gray-400'>{item.user}</span>
                <p>{item.text}</p>
                {item.postImg ? <img className=' rounded-3xl object-contain mt-[15px]' src={item.postImg} alt="post-img" width={679} height={453} /> : ''}

                <div className="flex items-center gap-[50px] mt-5">
                    <button onClick={() => handleBtn('comment')} className={`w-[50px]  cursor-pointer flex items-center gap-2 ${toggle.comment ? 'text-blue-400' : ''}`}>
                        <CommentIcon/>
                        <span className='text-[16px] text-[#536471]'>{comments}</span>
                    </button>
                    <button onClick={() => handleBtn('repost')} className={`w-[50px]  cursor-pointer flex items-center gap-2 ${toggle.repost ? 'text-green-400' : ''}`}>
                        <ReplyIcon/>
                        <span className='text-[16px] text-[#536471]'>{repost}</span>
                    </button>
                    <button onClick={() => handleBtn('like')} className={`w-[50px]  cursor-pointer flex items-center gap-2 ${toggle.like ? 'text-red-400' : ''}`}>
                        <LikeIcon/>
                        <span className='text-[16px] text-[#536471]'>{like}</span>
                    </button>
                </div>
            </div>
        </li>
    )
}

export default PostItem
