import axios from "axios";
import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

type FieldType = {
  username: string;
  password2: string;
  remember: boolean;
  email: string;
  password1: string;
};

const onFinish = async (values: FieldType) => {
  console.log("Success:", values);

  try {
    const response = await axios.post(
      "https://ecommerce-api-r62c.onrender.com/accounts/",
      {
        username: values.username,
        email: values.email,
        password1: values.password1,
        password2: values.password2,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // "X-CSRFToken": csrfToken, // Uncomment if you manage CSRF tokens
        },
        withCredentials: true, // Ensure credentials are included
      }
    );

    console.log("Response:", response.data);

    // Axios automatically checks for response.ok
    if (response.status === 200) {
      console.log("Success");
    } else {
      console.error("Error:", response.data);
      alert(`Failed to sign up: ${response.data.detail || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred.");
  }
};

const App: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: "Please input your email!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password1"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      label="Confirm Password"
      name="password2"
      rules={[{ required: true, message: "Please confirm your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default App;
