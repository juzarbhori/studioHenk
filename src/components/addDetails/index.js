import React, { useState } from "react";
import {
  Button,
  Col,
  Divider,
  Input,
  Radio,
  Row,
  Select,
  Skeleton,
  Form,
  Modal,
  InputNumber,
} from "antd";

import { Elements } from "@stripe/react-stripe-js";

import { DeleteFilled } from "@ant-design/icons";
import StripePayment from "../stripPayment/stripePayment";
import { loadStripe } from "@stripe/stripe-js";
import { Link } from "react-router-dom";

const stripePromise = loadStripe("pk_test_XvaarojtUDpxCKS7HRDdLiA000WTaNZijs");

const options = {
  // passing the client secret obtained from the server
  clientSecret: "sk_test_hOBquhxE5k2DbZgF3CvAoXFF00aAmVVhA2",
};

const { Option } = Select;
const AddDetails = () => {
  const [paymentModal, setPaymentModal] = useState(false);

  const PaymentModal = () => {
    return (
      <Modal
        title="Proceed Checkout"
        visible={paymentModal}
        onOk={openPaymentModal}
        onCancel={closePaymentModal}
        footer={null}
      >
        <Elements stripe={stripePromise}>
          <StripePayment closePaymentModal={closePaymentModal} />
        </Elements>
      </Modal>
    );
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const openPaymentModal = () => {
    setPaymentModal(true);
  };

  const closePaymentModal = () => {
    setPaymentModal(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    if (values) {
      openPaymentModal(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="padding-main ">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row>
          <Col md={{ span: 24 }}>
            <Form.Item
              label="Company"
              name="company"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              name="title"
              label="Name Title"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
            >
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col md={{ span: 12 }}>
            <Form.Item
              label="First Name"
              name="firstName"
              wrapperCol={{ span: 18 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 12 }}>
            <Form.Item
              label="Last Name"
              name="lastName"
              wrapperCol={{ span: 18 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 8 }}>
            <Form.Item
              label="Street"
              name="street"
              wrapperCol={{ span: 15 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 8 }}>
            <Form.Item
              label="Street Number"
              name="streetNumber"
              wrapperCol={{ span: 15 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 8 }}>
            <Form.Item
              label="Addition"
              name="addition"
              wrapperCol={{ span: 15 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 12 }}>
            <Form.Item
              label="Zipcode"
              name="zipcode"
              wrapperCol={{ span: 18 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 12 }}>
            <Form.Item
              label="City"
              name="city"
              wrapperCol={{ span: 18 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              label="City"
              name="city"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Select defaultValue="lucy">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              label="Email"
              name="email"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
              style={{ width: "100%" }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              label="City"
              name="city"
              wrapperCol={{ span: 10 }}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col md={{ span: 24 }}>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 15,
              }}
            >
              <span className="cursor go-back">
                <Link to="/cart">Go Back</Link>
              </span>
              <Button className="add-btn checkout-btn" htmlType="submit">
                Checkout
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <PaymentModal />
    </div>
  );
};

export default AddDetails;
