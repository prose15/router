import React from 'react'
import { Feed } from './Feed'

export const Post = ({content,setContent}) => {
  return (
    <div>
      {
        content.map((content)=>(
           <Feed key={content.id} content={content}/>
        ))
      }
    </div>
  )
}

