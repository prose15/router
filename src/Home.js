import React from 'react'
import { Feed } from './Feed'
import { Post } from './Post'

export const Home = ({content}) => {
  return (
    <main>
     {
      content.length ? (
      <Post content={content}/>
      ) : (
           <p>No songs to display.
           </p>
      )}
    </main>
  )
}
