import React from 'react'

function CommentItem({ data }) {
  return (
    <div>
      <div>{data.user}:</div>
      <div>{data.content}</div>
      <div>{Date.now()}</div>
    </div>
  )
}
export default CommentItem
