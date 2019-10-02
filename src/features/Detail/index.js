import React, { useEffect, useState } from 'react'
import http from '../../service/http'
import { isEmpty } from 'ramda'
import CardDetail from './components/cardDetail'
import CommentBox from './components/commentBox'
import CommentLists from './components/commentList'
import { Rate } from 'antd'
import './style.scss'
const MockData = [
  {
    id: 1,
    user: 'Minh',
    content: 'good',
    rate: 5,
    date: '1000'
  },
  {
    id: 2,
    user: 'Duy',
    rate: 1,
    content: 'best',
    date: '1000'
  }
]
function Detail(props) {
  const id = props.match.params.id
  const [detail, getDetailData] = useState([])
  const [rate, getRate] = useState(1)
  const handleRate = value => {
    console.log('value', value)
    getRate(value)
  }
  const getDetail = async () => {
    try {
      const { data } = await http.get({
        path: `${id}`,
        params: {
          api_key: 'dc6zaTOxFJmzC',
          limit: 20
        }
      })
      getDetailData(data)
    } catch (error) {
      console.log('error', error)
    }
  }
  console.log('fdfd', detail)

  useEffect(() => {
    getDetail()
  }, [])
  return (
    <React.Fragment>
      <div className="detail-layout">
        {!isEmpty(detail) && <CardDetail {...detail} />}
        <div className="detail-feature">
          <Rate value={rate} onChange={handleRate} />
          <CommentBox rate={rate} MockData={MockData} />
        </div>
        {/* <CommentLists /> */}
      </div>
      <div className="comment-list">
        <CommentLists data={MockData} rate={rate} />
      </div>
    </React.Fragment>
  )
}
export default Detail
