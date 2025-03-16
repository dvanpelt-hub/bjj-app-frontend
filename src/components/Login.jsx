import React from 'react';
import {Link} from "react-router"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

const Login = () => {
  
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
   <h2 className="m-2 text-xl">Login/Sign Up</h2> 
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 320,
        margin: 'auto',
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="!text-[#ffffff]">Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <Link to="/register">Register now!</Link>
      </Form.Item>
    </Form>
    </>
  );
};
export default Login;