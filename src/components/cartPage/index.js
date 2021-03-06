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
import React, { useState } from "react";
import checkimg from "../../wall-mounted-tables-25206.webp";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { DeleteFilled } from "@ant-design/icons";
import StripePayment from "../stripPayment/stripePayment";
import { Link } from "react-router-dom";

const { Option } = Select;

const CartPage = ({ loading, isModalVisible }) => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const cartPage = () => {
    return (
      <>
        <Row gutter={[8, 8]} className="text-right hidden-xs">
          <Col md={{ offset: 14, span: 2 }}><h6>Price</h6></Col>
          <Col md={{ span: 2 }}><h6>Quantity</h6></Col>
          <Col md={{ span: 3 }} offset={3}>
            <h6> Total</h6>
          </Col>
        </Row>
        <Divider className="fat-divider" />
        <Row gutter={[8, 8]}>
          <Col md={{ span: 6 }}>
            <img src={checkimg} alt="imageCheckout" className="checkout-img" />
          </Col>
          <Col md={{ span: 8 }} xs={{ span: 24 }}>
            <h2 className="checkout-title">New Classic</h2>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
            <p className="cart-desc">
              Product number: T-RC-200-90-4-0720-STD-NC-B
            </p>
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 8 }} className="text-right">
            ???2,285.00
          </Col>
          <Col md={{ span: 2 }} xs={{ span: 8 }} className="text-right">
            <Select
              defaultValue="1"
              style={{ width: 60 }}
              onChange={handleChange}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
            </Select>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 8 }} className="text-right">
            <p className="checkout-desc cursor">
              <DeleteFilled />
            </p>
          </Col>
          <Col
            md={{ span: 2 }}
            xs={{ span: 8 }}
            className="text-right"
            offset={1}
          >
            ???2,285.00
          </Col>
        </Row>
        <Divider />
        <Row gutter={[12, 12]}>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">Subtotal</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">Shipping</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">VAT (21%)</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">Total incl VAT</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">Down payment</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 16, span: 5 }} xs={{ span: 12 }}>
            <p className="checkout-desc">Remaining costs at delivery</p>
          </Col>
          <Col md={{ span: 3 }} xs={{ span: 12 }} className="text-right">
            <p className="checkout-desc">???2,285.00 </p>
          </Col>
          <Col md={{ offset: 17, span: 2 }} xs={{ span: 24 }}></Col>
          <Col md={{ offset: 17, span: 7 }} xs={{ span: 24 }}>
            <Button block className="add-btn" htmlType="submit">
              <Link to="/details">Add Details</Link>
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <div className="padding-main">{cartPage()}</div>
    </>
  );
};

export default CartPage;
