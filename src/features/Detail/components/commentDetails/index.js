import React from 'react'
import { Avatar } from 'antd'
import './styles.scss'
import { Rate } from 'antd'
import moment from 'moment'

function CommentItem({ data }) {
  return (
    <React.Fragment>
      <h2>Review:</h2>
      <div className="comment">
        <div className="user-infor">
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <span>{data.user}</span>
          <span className="rate">
            <Rate value={data.rate} disabled={true} />
          </span>
        </div>
        <div>{moment(data.date).fromNow()}</div>
      </div>
      <div className="description">{data.content}</div>
    </React.Fragment>
  )
}
export default CommentItem
