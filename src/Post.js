import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from './Feed'

export const Post = ({content,setContent}) => {
    const {id} =  useParams()
    console.log(content)
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

