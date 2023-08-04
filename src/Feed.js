import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const Feed = ({content}) => {
  return (
    <div className='Link'>
      <Link to ={`postpage/${content.id}`}>
      <h2>{content.topic}</h2>
      </Link>
      <p>{(content.body).length <= 150 ? content.body: `${(content.body).slice(0,150)}.....`}</p>
      
      <hr/>
    </div>
  )
}
