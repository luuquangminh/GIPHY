import React from 'react'
import { Card, Icon } from 'antd'
import './style.scss'
const CardImage = ({ images, loading, history, id }) => {
  console.log('images', images)
  return (
    <Card
      style={{ width: 250 }}
      loading={loading}
      onClick={() => history.push(`/detail/${id}`)}
      cover={
        <div style={{ padding: '10px' }}>
          <div
            style={{
              padding: '10px',
              minHeight: '200px',

              backgroundImage: `url(${images['fixed_height'].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top'
            }}
          />
        </div>
      }
      actions={[
        <div>
          <Icon type="eye" theme="filled" />
          <span>2340</span>
        </div>,
        <div>
          <Icon type="message" theme="filled" />
          <span>30</span>
        </div>,
        <div>
          <Icon type="heart" theme="filled" />
          <span>10</span>
        </div>
      ]}
    >
      {/* <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      /> */}
    </Card>
  )
}
export default CardImage
