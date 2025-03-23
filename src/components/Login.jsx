import React, { useEffect } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex, Alert, message } from "antd";
import { loginUser } from "../redux/slices/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, access_token } = useSelector((state) => state.auth);

  const onFinish = (values) => {
    // dispatch asyncthunk to make API call and set user info in redux from response
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (access_token) {
      message.success("Login successful!");
      navigate("/");
    }
  }, [access_token, navigate]);

  useEffect(() => {
    if (error) {
      message.error(error);
    }
  }, [error]);

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
          margin: "auto",
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        {/* checks if an error occurs during login and displays alert */}
        {error && (
          <Form.Item>
            <Alert message={error} type="error" showIcon />
          </Form.Item>
        )}
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className="!text-[#ffffff]">Remember me</Checkbox>
            </Form.Item>
            <a href="">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" loading={loading}>
            Log in
          </Button>
          or <Link to="/register">Register now!</Link>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
