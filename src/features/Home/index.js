import React, { useEffect, useState } from 'react'
import http from '../../service/http'
import { Row, Col, Avatar } from 'antd'
import { isEmpty } from 'ramda'
import HomeHoc from './hoc'
import { CardImage, useModal, useLoading, SpinLoading } from '../components'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import './style.scss'

function Home(props) {
  const { isShowing, toggle } = useModal()
  const [detailImage, setDetailImage] = useState([])
  const [loading, withLoading] = useLoading(false)
  const {
    homeData: { images },
    getData
  } = props
  const getFulldata = async () => {
    try {
      const fulldata = await withLoading(() =>
        http.get({
          path: 'trending',
          params: {
            api_key: 'dc6zaTOxFJmzC',
            limit: 20
          }
        })
      )
      getData(fulldata)
    } catch (error) {
      console.log('error', error)
    }
  }
  const GridLayout = () => {
    return isEmpty(images) ? (
      <div className="no-result">
        No result
        <div />
      </div>
    ) : (
      <div className="card-content">
        <Row gutter={20} type="flex" justify="center">
          {images.data.map((item, index) => (
            <div
              key={index}
              className="card-item"
              onClick={async () => {
                await setDetailImage(item)
                toggle()
              }}
            >
              <Col lg={{ span: 6, offset: 0 }}>
                <CardImage {...item} loading={loading} />
                {item.user ? (
                  <div className="profile">
                    {' '}
                    <Avatar src={`${item.user.avatar_url}`} />
                    <span className="user-name">{item.user.display_name}</span>
                  </div>
                ) : (
                  <div className="profile">
                    <Avatar icon="user" />
                    <span className="user-name">noname</span>
                  </div>
                )}
              </Col>
            </div>
          ))}
        </Row>
      </div>
    )
  }
  useEffect(() => {
    getFulldata()
  }, [])
  return (
    <React.Fragment>
      {loading ? <SpinLoading /> : GridLayout()}
      {isShowing && (
        <Lightbox
          mainSrc={detailImage.images['downsized_large'].url}
          onCloseRequest={toggle}
        />
      )}
    </React.Fragment>
  )
}
export default HomeHoc(Home)
