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
    const response = await fetch(
      "https://ecommerce-api-r62c.onrender.com/dj-rest-auth/registration/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: values.username,
          email: values.email,
          password1: values.password1,
          password2: values.password2,
        }),
      }
    );

    if (response.ok) {
      console.log("Success");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred.");
  }
};

const RegistrationDemo: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600, marginTop: "20rem" }}
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

export default RegistrationDemo;
