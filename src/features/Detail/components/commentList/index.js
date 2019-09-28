import React from 'react'
import CommentItem from '../commentDetails'
function CommentLists({ data }) {
  return (
    <div>
      {data.map(item => (
        <CommentItem data={item} />
      ))}
    </div>
  )
}
export default CommentLists
