import React from 'react'
import CommentItem from '../commentDetails'
function CommentLists({ data }) {
  return (
    <div>
      <h2>Review:</h2>
      {data.map(item => (
        <CommentItem data={item} />
      ))}
    </div>
  )
}
export default CommentLists
