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
          <Col span={12}>
            <div className="first column">
              <Row>

                <h3>Detalii pentru facturare</h3>

                <Col md={{ span: 12 }}>
                  <Form.Item
                    label="Prenume"
                    name="firstName"
                    wrapperCol={{ span: 22 }}
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
                    label="Nume"
                    name="lastName"
                    wrapperCol={{ span: 22 }}
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
                    label="Nume companie (opțional)
                    "
                    name="company"
                    wrapperCol={{ span: 22 }}
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
                    label="Stradă *

                    "
                    name="street"
                    wrapperCol={{ span: 22 }}
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
                    label="Oraș *
                    "
                    name="city"
                    wrapperCol={{ span: 22 }}
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
                    label="Județ"
                    name="state"
                    wrapperCol={{ span: 22 }}
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
                    label="Cod poștal *
                    "
                    name="pincode"
                    wrapperCol={{ span: 22 }}
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
                    label="Telefon"
                    name="phoneNumber"
                    wrapperCol={{ span: 22 }}
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
                    label="Adresă email                     "
                    name="email"
                    wrapperCol={{ span: 22 }}
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
                <Col md={{ span: 24 }} className="text-right">
                  <Form.Item
                    wrapperCol={{
                      span: 22,
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
            </div>
          </Col>
          <Col span={12}>
            <div className="second-column">
              <Row>
                <Col md={{ span: 24 }} xs={{ span: 22 }}>
                  <h3 id="order_review_heading">Comanda ta</h3>                </Col>

                <Col md={{ span: 24 }} xs={{ span: 24 }}>
                  <h3 className="description-title fl">TABLEOP</h3>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 24 }} xs={{ span: 24 }}>
                  <h3 className="description-title fl">TABLEOP</h3>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fl">Material</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 12 }}>
                  <p className="description-data fr">HPL</p>
                </Col>
                <Col md={{ span: 12 }} xs={{ span: 6 }}>
                  <h3 className="price-subtitle fr">Total</h3>
                </Col>

                <Col md={{ span: 12 }} xs={{ span: 6 }}>
                  <h3 className="price-subtitle fr">€ 2570</h3>
                </Col>
                <Divider className="divider-margin" />
                <Col md={{ span: 24 }}>
                  <p className="delivery fl">Delivery & payment</p>
                </Col>



              </Row>
            </div>
          </Col>
        </Row>
      </Form>
      <PaymentModal />
    </div>
  );
};

export default AddDetails;
