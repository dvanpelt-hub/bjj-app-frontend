import React, { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import AsyncSelect from "react-select/async";

const fetchLocations = async (inputValue) => {
  if (!inputValue) return [];

  // fetch locations
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}`
  );
  const data = await response.json();
  
  // set values from results
  return data.map((location) => ({
    label: location.display_name,
    value: location.display_name,
  }));
};

const RegistrationForm = () => {

  // provide access to form instance
  const [form] = Form.useForm();
  const [location, setLocation] = useState(null);

  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    // when form complete, call onFinish to set redux
    <Form form={form} layout="vertical" onFinish={onFinish} style={{color: "white"}}>
      <Form.Item
        label={<span style={{color: "white"}}>Username</span>}
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
        style={{ color: "white" }}
      >
        <Input placeholder="Enter username" />
      </Form.Item>

      <Form.Item
        label={<span style={{color: "white"}}>Email</span>}
        name="email"
        rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        label={<span style={{color: "white"}}>Password</span>}
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      <Form.Item label={<span style={{color: "white"}}>Location</span>} name="location">
        <AsyncSelect
          cacheOptions
          loadOptions={fetchLocations}
          defaultOptions
          onChange={setLocation}
          placeholder="Search for a location"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
