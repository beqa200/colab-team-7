import React from "react";
import { Form, Input, Checkbox, Button } from "antd";

type FieldType = {
  username: string;
  password: string;
  remember: boolean;
};

const onFinish = async (values: FieldType) => {
  console.log("Success:", values);

  try {
    const response = await fetch(
      "https://ecommerce-api-r62c.onrender.com/dj-rest-auth/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      }
    );

    const contentType = response.headers.get("content-type");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data: any;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("Unexpected response format:", text);
      return;
    }

    console.log("Response:", data);

    if (response.ok) {
      console.log("Success");
      localStorage.setItem("token", data.access);
      window.location.reload();
    } else {
      console.error("Error:", data);
      alert(`Failed to sign in: ${data.detail || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An unexpected error occurred.");
  }
};

const SignIn: React.FC = () => (
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
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
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
        Sign In
      </Button>
    </Form.Item>
  </Form>
);

export default SignIn;
