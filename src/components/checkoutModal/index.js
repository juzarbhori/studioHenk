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
} from "antd";
import React, { useState } from "react";
import checkimg from "../../wall-mounted-tables-25206.webp";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { DeleteFilled } from "@ant-design/icons";
import StripePayment from "../stripPayment/stripePayment";

const { Option } = Select;

const stripePromise = loadStripe("pk_test_XvaarojtUDpxCKS7HRDdLiA000WTaNZijs");

const options = {
  // passing the client secret obtained from the server
  clientSecret: "sk_test_hOBquhxE5k2DbZgF3CvAoXFF00aAmVVhA2",
};

const ModalCheckout = ({ loading, setIsModalVisible, isModalVisible }) => {
  const [paymentModal, setPaymentModal] = useState(false);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const openPaymentModal = () => {
    setPaymentModal(true);
  };

  const closePaymentModal = () => {
    setPaymentModal(false);
  };

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

  return (
    <Modal
      title="Checkout List"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width={"90%"}
    >
      {loading ? (
        <Row>
          <Col span={6}>
            <Skeleton.Image className="image-skeleton" />
          </Col>
          <Col span={18}>
            <Skeleton active />
          </Col>
        </Row>
      ) : (
        <>
          <Row gutter={[8, 8]} className="text-right">
            <Col offset={14} span={2}>
              Price
            </Col>
            <Col span={2}>Quantity</Col>
            <Col span={3} offset={3}>
              Total
            </Col>
          </Row>
          <Divider className="fat-divider" />
          <Row gutter={[8, 8]}>
            <Col span={6}>
              <img
                src={checkimg}
                alt="imageCheckout"
                className="checkout-img"
              />
            </Col>
            <Col span={8}>
              <h2 className="checkout-title">New Classic</h2>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
              <p className="checkout-desc">
                Product number: T-RC-200-90-4-0720-STD-NC-B
              </p>
            </Col>
            <Col span={2} className="text-right">
              €2,285.00
            </Col>
            <Col span={2} className="text-right">
              <Select
                defaultValue="1"
                style={{ width: 60 }}
                onChange={handleChange}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc cursor">
                <DeleteFilled /> Delete
              </p>
            </Col>
            <Col span={2} className="text-right" offset={1}>
              €2,285.00
            </Col>
          </Row>
          <Divider />
          <Row gutter={[12, 12]}>
            <Col offset={16} span={5}>
              <p className="checkout-desc">Subtotal</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={16} span={5}>
              <p className="checkout-desc">Shipping</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={16} span={5}>
              <p className="checkout-desc">VAT (21%)</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={16} span={5}>
              <p className="checkout-desc">Total incl VAT</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={16} span={5}>
              <p className="checkout-desc">Down payment</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={16} span={5}>
              <p className="checkout-desc">Remaining costs at delivery</p>
            </Col>
            <Col span={3} className="text-right">
              <p className="checkout-desc">€2,285.00 </p>
            </Col>
            <Col offset={17} span={2}>
              <Button
                className="cancel-btn"
                onClick={() => {
                  setIsModalVisible(false);
                }}
              >
                Cancel
              </Button>
            </Col>
            <Col span={5}>
              <Button
                block
                className="add-btn"
                htmlType="submit"
                onClick={openPaymentModal}
              >
                Checkout
              </Button>
            </Col>
          </Row>
        </>
      )}
      <PaymentModal />
    </Modal>
  );
};

export default ModalCheckout;
