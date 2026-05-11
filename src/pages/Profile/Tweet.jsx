import React, { useContext } from 'react'
import PostItem from '../../components/PostItem'
import { Context } from '../../context/AuthContext'

function Tweet() {
  const { post } = useContext(Context)
  
  return (
    <div>
      <ul> {post.map((item) => <PostItem item={item} key={item.id} />)} </ul>
    </div>
  )
}

export default Tweet
