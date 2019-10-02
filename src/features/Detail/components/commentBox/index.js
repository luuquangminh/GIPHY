import React, { useState, useEffect } from 'react'
import { Input } from 'antd'
import CommentLists from '../commentList'

function CommentBox({ MockData, rate }) {
  const { TextArea } = Input
  const [valueInput, setValue] = useState()
  const [comment, getComment] = useState([])
  const handleChange = ({ target: { value } }) => {
    setValue(value)
  }
  const handleEnter = value => {
    const newItem = {
      id: Date.now(),
      user: 'Minh',
      rate: rate,
      content: valueInput,
      date: '1000'
    }

    const newComment = MockData.push(newItem)
    getComment(MockData)
    setValue('')
    console.log('ffff', comment)
  }
  return (
    <div>
      <Input
        value={valueInput}
        onChange={handleChange}
        onPressEnter={handleEnter}
        placeholder="Controlled autosize"
        autosize={{ minRows: 3, maxRows: 5 }}
      />
    </div>
  )
}

export default CommentBox
