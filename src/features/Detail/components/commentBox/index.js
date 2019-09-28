import React, { useState } from 'react'
import { Input } from 'antd'
import CommentLists from '../commentList'

const MockData = [
  {
    id: 1,
    user: 'Minh',
    content: 'good',
    date: '1000'
  },
  {
    id: 2,
    user: 'Duy',
    content: 'best',
    date: '1000'
  }
]
function CommentBox() {
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
      content: valueInput,
      date: '1000'
    }

    const newComment = MockData.push(newItem)
    getComment(MockData)
    console.log('value', comment)
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
      <CommentLists data={MockData} />
    </div>
  )
}

export default CommentBox
