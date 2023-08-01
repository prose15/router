import React from 'react'
import { useParams, Link } from 'react-router-dom'

export const Newpost = ({content,handleDelete}) => {
  const {id} = useParams();
  const contents = content.find(content => (content.id).toString() === id);
  
  return (
    <div>
        {
          contents && 
          <>
            <h2>{content.topic}</h2>
            <p>{content.body}</p>
            <button 
              onClick={()=> handleDelete(content.id)}>
              Delete post
            </button>
          </>
        }
        {
          !contents && 
          <>
            <h1>Page not found</h1>
            <p>Oops, its not working</p>
            <p>
              <Link to = '/'>
              Visit our home homepage
              bla bla
              </Link>
            </p>
          </>
        }
    </div>
  )
}
