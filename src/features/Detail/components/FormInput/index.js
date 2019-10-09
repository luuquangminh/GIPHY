import React, { useState } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { Rate } from 'antd'

const NormalLoginForm = props => {
  //   const [rate, getRate] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    props.form.validateFields((err, values) => {
      console.log('onSubmit', values)
      const newItem = {
        user: values.username,
        rate: values.rate,
        content: values.comment,
        date: Date.now()
      }
      props.handleRate(values.rate)
      const newComment = props.mockData.push(newItem)
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  const { getFieldDecorator } = props.form

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>{getFieldDecorator('rate', {})(<Rate />)}</Form.Item>
      <Form.Item>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('comment', {
          rules: [{ required: true, message: 'Please input your Comments' }]
        })(
          <Input
            prefix={<Icon style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Comments"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(
  NormalLoginForm
)
export default Form.create()(NormalLoginForm)
