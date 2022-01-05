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
import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { dataMocks, dataMocks2, priceData } from "./dataMock";
import {
  PlusCircleOutlined,
  MinusCircleOutlined,
  DeleteFilled,
} from "@ant-design/icons";
import checkimg from "./wall-mounted-tables-25206.webp";
import ImageSelector from "./components/selector";
import ImageViewer from "./components/imageViewer";
import ModalCheckout from "./components/checkoutModal";
import StripePayment from "./components/stripPayment/stripePayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const { Option } = Select;

function App() {
  const [selectImage, setSelectImage] = useState(
    "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
  );

  const [productData, setProductData] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://phpstack-641661-2356143.cloudwaysapps.com/api/User/productDetails"
      )
      .then(function (response) {
        console.log("object :>> ", response);
        setProductData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ width: "99%", padding: "40px 0" }}>
      <Row gutter={[14, 14]}>
        <ImageViewer selectImage={selectImage} />
        {productData && (
          <ImageSelector
            setIsModalVisible={setIsModalVisible}
            productData={productData}
            setProductData={setProductData}
            selectImage={selectImage}
            setSelectImage={setSelectImage}
          />
        )}
      </Row>
      <ModalCheckout
        loading={loading}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </div>
  );
}

export default App;
