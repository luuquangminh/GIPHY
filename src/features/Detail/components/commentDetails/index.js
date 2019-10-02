import React from 'react'
import { Avatar } from 'antd'
import './styles.scss'
import { Rate } from 'antd'

function CommentItem({ data }) {
  return (
    <React.Fragment>
      <div className="comment">
        <div className="user-infor">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <span>{data.user}</span>
          <span className="rate">
            <Rate value={data.rate} />
          </span>
        </div>
        <div>{Date.now()}</div>
      </div>
      <div className="description">{data.content}</div>
    </React.Fragment>
  )
}
export default CommentItem
