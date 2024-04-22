"use client"
import React from 'react'
import { Button, Col, Form, Input, Row, Space, Tooltip, Typography } from "antd";
export default function TextArea() {
  const [form] = Form.useForm();

  const handleSubmit = (value) => {
    console.log(value);
    form.resetFields()
  }

  return (
    <>
      <div className="container fixed-bottom mb-4">
        <Row justify={"center"} className="">
          <Col xs={24} sm={20} md={12} className="">
            <Form
              form={form}
              onFinish={(e) => handleSubmit(e)}
              layout='vertical'
            >
              <div className="position-relative rounded-5 d-flex gap-2 align-items-center gap-2 bg-secondary p-3">
                <Form.Item name={'thought'} className='w-100 mb-0'>
                  <Input.TextArea autoFocus placeholder="Dump Your Thoughts Here" autoSize={{ maxRows: 3 }} className='bg-transparent border-0 text-dark fw-semibold fs-6' />
                </Form.Item>

                <Tooltip title="Dump Your Thought">
                  <Button htmlType='submit' type='ghost' icon={<i className='bi bi-chat-quote text-light fs-4' />} />
                </Tooltip>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  )
}
