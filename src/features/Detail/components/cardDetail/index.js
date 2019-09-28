import React from 'react'
import { Card } from 'antd'

function CardDetail(props) {
  const { Meta } = Card
  console.log(props)
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <div style={{ padding: '10px' }}>
            <div
              style={{
                padding: '10px',
                minHeight: '200px',

                backgroundImage: `url(${props.images['fixed_height'].url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top'
              }}
            />
          </div>
        }
      ></Card>
    </div>
  )
}
export default CardDetail
