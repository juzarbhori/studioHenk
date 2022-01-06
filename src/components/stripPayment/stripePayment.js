import React, { useMemo, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button, Col, Row, Modal } from "antd";
import tickIcon from "../../tickIcon.png";

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    ["16px"]
  );

  return options;
};

const StripePayment = ({ closePaymentModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentSuccessModal, setPaymentSuccessModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    openPaymentSuccessModal();
  };

  const openPaymentSuccessModal = () => {
    setPaymentSuccessModal(true);
  };

  const closePaymentSuccessModal = () => {
    setPaymentSuccessModal(false);
    closePaymentModal();
  };

  const PaymentSuccessModal = () => {
    return (
      <Modal
        title="Payment Successfull"
        visible={paymentSuccessModal}
        onOk={openPaymentSuccessModal}
        onCancel={closePaymentSuccessModal}
        footer={null}
      >
        <div className="App">
          <img src={tickIcon} width="150" alt="icon" />
          <h2> Payment Succesfull </h2>
        </div>
      </Modal>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col span={24}>
          <CardElement options={options} />
        </Col>
        <Col span={24} className="text-right">
          <Button
            className="checkout-btn"
            htmlType="submit"
            type="submit"
            disabled={!stripe}
          >
            Pay
          </Button>
        </Col>
      </Row>
      <PaymentSuccessModal />
    </form>
  );
};

export default StripePayment;
