import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Form, Input, Button, Select, DatePicker } from "antd";
import AsyncSelect from "react-select/async";
import { registerNewUser } from "../redux/slices/registerSlice";

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
  // provide access to form instance and built-in methods
  const [form] = Form.useForm();
  const [location, setLocation] = useState(null);
  const [accountType, setAccountType] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const selector = useSelector()

  // const { loading, success, error } = useSelector((state) => state.register);

  const onFinish = (values) => {
    dispatch(registerNewUser(values));
    navigate("/login");
  };

  const handleSetAccountType = (value) => {
    setAccountType(value);
  };

  return (
    // when form complete, call onFinish to set redux
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ color: "white", maxWidth: 320, margin: "auto" }}
    >
      {/* <Form.Item
        label={<span style={{ color: "white" }}>First name</span>}
        name="first_name"
        rules={[{ required: true, message: "Please enter your first name" }]}
      >
        <Input placeholder="Enter your first name" />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "white" }}>Last name</span>}
        name="last_name"
        rules={[{ required: true, message: "Please enter your last name" }]}
      >
        <Input placeholder="Enter your last name" />
      </Form.Item> */}

      {/* <Form.Item
        label={<span style={{ color: "white" }}>Date of birth</span>}
        name="Age"
        rules={[{ required: true, message: "Please enter your date of birth" }]}
      >
        <DatePicker
          format="YYYY-MM-DD"
          placeholder="Select date of birth"
          style={{ width: "100%" }}
        />
      </Form.Item> */}
      <Form.Item
        label={<span style={{ color: "white" }}>Email</span>}
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid email!",
          },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "white" }}>Password</span>}
        name="password"
        rules={[{ required: true, message: "Please enter your password!" }]}
      >
        <Input.Password placeholder="Enter password" />
      </Form.Item>

      {/* <Form.Item
        label={<span style={{ color: "white" }}>Location</span>}
        name="location"
      >
        <AsyncSelect
          cacheOptions
          loadOptions={fetchLocations}
          defaultOptions
          onChange={setLocation}
          placeholder="Search for a location"
        />
      </Form.Item> */}

      <Form.Item
        label={<span style={{ color: "white" }}>Account type</span>}
        name="role"
        rules={[
          { required: true, message: "Please select a type of account." },
        ]}
        style={{ color: "white" }}
      >
        <Select
          defaultValue="student"
          placeholder="Select account type"
          style={{ width: "100%" }}
          options={[
            { value: "Student", label: "Student" },
            { value: "Coach", label: "Coach" },
            { value: "Both", label: "Both" },
          ]}
          onChange={handleSetAccountType}
        />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: "white" }}>Username</span>}
        name="username"
        rules={[{ required: true, message: "Please enter your username!" }]}
        style={{ color: "white" }}
      >
        <Input placeholder="Enter username" />
      </Form.Item>

      {accountType === "Coach" || accountType === "Both" ? (
        <Form.Item
          label={<span style={{ color: "white" }}>Area(s) of expertise</span>}
          name="expertise"
          rules={[
            { required: true, message: "Please select area(s) of expertise." },
          ]}
          style={{ color: "white" }}
        >
          <Select
            defaultValue="Make a selection"
            placeholder="Make a selection"
            style={{ width: "100%" }}
            options={[
              { value: "gi", label: "Gi" },
              { value: "nogi", label: "No-gi" },
              { value: "leglocks", label: "Leg locks" },
              { value: "comp", label: "Comp prep" },
            ]}
          />
        </Form.Item>
      ) : null}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
