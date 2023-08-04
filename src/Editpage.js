import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Editpage = ({ content, handleEdit, editTitle, setEditTitle, editBody, setEditBody }) => {
  const { id } = useParams();
  const contents = content.find(content => (content.id).toString() === id);
  useEffect(() => {
    if (contents) {
      setEditTitle(contents.topic);
      setEditBody(contents.body);
    }
  }, [contents, setEditBody, setEditTitle])
  return (
    <div>
      {
        <>
          <h2>Edit song</h2>
          <form className='newsong' onSubmit={(e) => e.preventDefault()}>
            <input
              className='songtitle'
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <textarea
              className='songbody'
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(contents.id)} className='btn btn-outline-warning'>Submit</button>
          </form>
        </>
      }
    </div>
  )
}

export default Editpage