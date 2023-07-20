import React from 'react'

export const Feed = ({content}) => {
  return (
    <div>
      <h2>{content.topic}</h2>
      <p>{(content.content).length <= 150 ? content.body: `${(content.content).slice(0,150)}.....`}</p>
      <hr/>
    </div>
  )
}
