import { Button, Col, Radio, Row, Form, Select, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const { Option } = Select;

const ImageSelector = ({
  setIsModalVisible,
  productData,
  setProductData,
  setSelectImage,
  selectImage,
}) => {
  const [count, setCount] = useState(0);
  const [priceData, setPriceData] = useState();

  // const [changeCss, setChangeCss] = useState([]);

  const callPriceApi = () => {
    axios
      .get(
        "http://phpstack-641661-2356143.cloudwaysapps.com/api/User/productPrice/abc"
      )
      .then(function (response) {
        setPriceData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    callPriceApi();
  }, []);

  const handleImageSelector = (pickedData) => {
    callPriceApi();
    setSelectImage(
      priceData?.image?.find((data) => data?.id === pickedData?.id)?.img
    );
  };

  const onFinish = (values) => {
    if (values) {
      setIsModalVisible(true);
    }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Col md={{ span: 12 }} xs={{ span: 24 }}>
      <Form
        name="select-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="main-container-right">
          <h3 className="main-head">CONFIGURE YOUR TABLE</h3>
          {Object?.keys(productData)?.map(function (step, index) {
            const steps = productData[step];
            return (
              <div key={index}>
                <h3 className="step-title">{steps.step}</h3>
                <h4 className="step-subtitle">{steps.title}</h4>

                {steps.type !== "select" ? (
                  <Form.Item name={steps?.value + "_img"} label="">
                    <Radio.Group defaultValue={steps?.default}>
                      <Row key={index}>
                        {steps.options.map((data, index) => {
                          return !data.img ? (
                            <Skeleton.Avatar
                              active={true}
                              size={100}
                              shape="square"
                            />
                          ) : (
                            <Col md={{ span: 5 }} xs={{ span: 8 }}>
                              <label key={data.id}>
                                <Radio
                                  value={data?.id}
                                  className="remove-radio"
                                />
                                <img
                                  src={data?.img}
                                  alt="icon"
                                  className="selector-size"
                                  onClick={() => {
                                    handleImageSelector(data);
                                  }}
                                />
                                <p className="label-text">{data?.text}</p>
                              </label>
                            </Col>
                          );
                        })}
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                ) : (
                  <Row gutter={[24, 24]}>
                    {steps.options.map((data, i) => {
                      return (
                        <Col
                          className="gutter-row"
                          key={i}
                          md={{ span: 24 }}
                          xs={{ span: 24 }}
                        >
                          <p>{data?.title}</p>
                          <Form.Item name={steps?.value + data?.value} label="">
                            <Select
                              style={{ width: "100%" }}
                              onChange={handleChange}
                              defaultValue={data?.default}
                            >
                              {data?.subOptions?.map((subData, i) => {
                                return (
                                  <Option value={subData?.value} key={i}>
                                    {subData?.label}
                                  </Option>
                                );
                              })}
                            </Select>
                          </Form.Item>
                        </Col>
                      );
                    })}
                  </Row>
                )}
              </div>
            );
          })}
        </div>
        <Row justify="end" gutter={[18, 18]} className="main-container-right">
          <Col md={{ offset: 13, span: 5 }} xs={{ span: 12 }}>
            <p className="cart-detail"></p>Quantity
          </Col>
          <Col md={{ span: 6 }} xs={{ span: 12 }}>
            <MinusCircleOutlined
              className="cursor minus-style"
              onClick={() => {
                setCount((prev) => {
                  if (prev === 0) {
                    return 0;
                  } else {
                    return prev - 1;
                  }
                });
              }}
            />
            <span className="cart-number">{count}</span>
            <PlusCircleOutlined
              className="cursor plus-style"
              onClick={() => {
                setCount((prev) => {
                  return prev + 1;
                });
              }}
            />
          </Col>
          <Col md={{ offset: 13, span: 5 }} xs={{ span: 12 }}>
            <p className="amount"> Amount</p>
          </Col>
          <Col md={{ span: 6 }} xs={{ span: 12 }}>
            € 2035
          </Col>
          <Col md={{ offset: 13, span: 11 }} xs={{ span: 24 }}>
            <p className="delivery-time">Delivery time 13-14 weeks</p>
          </Col>
          <Col md={{ offset: 13, span: 11 }} xs={{ span: 24 }}>
            <Form.Item>
              <Button className="add-btn" htmlType="submit">
                <Link to="/cart">Add to shopping cart</Link>
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default ImageSelector;
