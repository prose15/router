import React from 'react'
import { Link } from 'react-router-dom';
import './index.css';

export const Postpage = ({newSongTitle,setNewSongTitle,newSongBody,setNewSongBody,handlesubmit}) => {
  return (
    <div className='form' onSubmit={handlesubmit}>
        <h2>Add your new medicine</h2>
        <form className='newsong'>
          <input
          className='songtitle'
          required
          placeholder='Song title'
          value={newSongTitle}
          onChange={(e)=>setNewSongTitle(e.target.value)}
          />
          <textarea
          className='songbody'
          required
          placeholder='Song'
          value={newSongBody}
          onChange={(e)=>setNewSongBody(e.target.value)}
          />
          <button className='btn btn-outline-warning' type='submit'>Submit</button>
        </form>
    </div>
  )
}
