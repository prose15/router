import React from 'react'
import { useParams } from 'react-router-dom'

export const Post = () => {
    const {id} =  useParams()
  return (
    <div><p>Post {id} </p></div>
  )
}
