import logo from "./logo.svg";
import "./App.css";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
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
import "antd/dist/antd.css";
import { dataMocks, dataMocks2, priceData } from "./dataMock";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import checkimg from "./wall-mounted-tables-25206.webp";
const { Option } = Select;

function App() {
  const [selectImage, setSelectImage] = useState(
    "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
  );

  const [mockData, setMockData] = useState(dataMocks);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [changeCss, setChangeCss] = useState([]);

  const handleImageSelector = (pickedData) => {
    if (pickedData.text === "Round") {
      setMockData(dataMocks2);
    } else {
      setMockData(dataMocks);
    }
    setSelectImage(
      priceData.image.find((data) => data?.id === pickedData?.id)?.img
    );
  };

  const onFinish = (values) => {
    if (values) {
      setIsModalVisible(true);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalCheckout = () => {
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
                <Button block className="add-btn" htmlType="submit">
                  Add to shopping cart
                </Button>
              </Col>
            </Row>
          </>
        )}
      </Modal>
    );
  };
  return (
    <div style={{ width: "99%", padding: "40px 0" }}>
      <Row gutter={[14, 14]}>
        <Col span={12}>
          <div className="main-container-left">
            {selectImage && (
              <img src={selectImage} alt="iamge" className="img-size" />
            )}

            <Row>
              <Col span={12}>
                <h3 className="price-title fl">Specifications of your table</h3>
              </Col>
              <Col span={12}>
                <h3 className="price-subtitle fr">€ 2570</h3>
              </Col>
              <Col span={24}>
                <h3 className="description-title fl">TABLEOP</h3>
              </Col>
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={24}>
                <h3 className="description-title fl">TABLEOP</h3>
              </Col>
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={12}>
                <p className="description-data fl">Material</p>
              </Col>
              <Col span={12}>
                <p className="description-data fr">HPL</p>
              </Col>
              <Divider className="divider-margin" />
              <Col span={24}>
                <p className="delivery fl">Delivery & payment</p>
              </Col>
              <Col span={24}>
                <p className="delivery-desc fl">
                  Did you find a piece of furniture you love? Once you've placed
                  your order, we ask for a down payment of € 500,-. Is your
                  order in stock or less than € 500,-? Then we ask you to pay
                  the full amount in advance. You can pay at checkout using
                  iDeal, Paypal, Credit Card or Bancontact (Mister Cash). The
                  rest of the amount can be paid by debit card at delivery or
                  pick up. You can pick up your order in Haarlem or have it
                  delivered for free within the Netherlands and Belgium. Note:
                  are your product(s) delivered outside of the Netherlands or
                  Belgium? Then the product(s) will only be shipped after
                  complete payment. Feel free to contact us for more information
                  about the delivery costs outside of the Netherlands and
                  Belgium.t
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={12}>
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
              {Object?.keys(mockData)?.map(function (step, index) {
                const steps = mockData[step];
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
                                <Col span={5}>
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
                            <Col className="gutter-row" key={i} span={24}>
                              <p>{data?.title}</p>
                              <Form.Item
                                name={steps?.value + data?.value}
                                label=""
                              >
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
            <Row justify="end" gutter={[18, 18]}>
              <Col offset={13} span={5}>
                <p className="cart-detail"></p>Quantity
              </Col>
              <Col span={6}>
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
              <Col offset={13} span={5}>
                <p className="amount"> Amount</p>
              </Col>
              <Col span={6}>€ 2035</Col>
              <Col offset={13} span={11}>
                <p className="delivery-time">Delivery time 13-14 weeks</p>
              </Col>
              <Col offset={13} span={11}>
                <Form.Item>
                  <Button block className="add-btn" htmlType="submit">
                    Add to shopping cart
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
      {modalCheckout()}
    </div>
  );
}

export default App;
