import React, { useEffect, useState } from 'react'
import http from '../../service/http'
import { isEmpty } from 'ramda'
import CardDetail from './components/cardDetail'
import CommentBox from './components/commentBox'
import CommentLists from './components/commentList'
import { Rate } from 'antd'
import NormalLoginForm from './components/FormInput'
import { PageHeader } from 'antd'

import './style.scss'
const MockData = [
  {
    id: 1,
    user: 'Minh',
    content: 'good',
    rate: 5,
    date: 1570617900405
  },
  {
    id: 2,
    user: 'Duy',
    rate: 1,
    content: 'best',
    date: 157061790044
  },
  {
    id: 3,
    user: 'Nghia',
    rate: 5,
    content: 'Hay',
    date: 1570617900402
  }
]
function Detail(props) {
  const id = props.match.params.id
  const [detail, getDetailData] = useState([])
  const [rate, getRate] = useState(1)
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

  useEffect(() => {
    getDetail()
  }, [])
  return (
    <React.Fragment>
      <PageHeader title="Detail Page" />

      <div className="detail-layout">
        {!isEmpty(detail) && <CardDetail {...detail} />}
        <div className="detail-feature">
          {/* <Rate value={rate} onChange={getRate} /> */}
          <NormalLoginForm
            mockData={MockData}
            handleRate={getRate}
            rate={rate}
          />
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
