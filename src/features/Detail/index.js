import React, { useEffect, useState } from 'react'
import http from '../../service/http'
import { isEmpty } from 'ramda'
import CardDetail from './components/cardDetail'
import CommentBox from './components/commentBox'
import CommentLists from './components/commentList'
function Detail(props) {
  const id = props.match.params.id
  const [detail, getDetailData] = useState([])
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
    <div>
      {!isEmpty(detail) && <CardDetail {...detail} />}
      <CommentBox />
      {/* <CommentLists /> */}
    </div>
  )
}
export default Detail
