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
import StripePayment from "./components/stripPayment/stripePayment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Footer from "./components/Footer";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/cartPage";
import AddDetails from "./components/addDetails";

import NavBarFun from "./components/Navbar";
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
    <>
      <NavBarFun />
      <div>
        <BrowserRouter basename="studioHenk">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setIsModalVisible={setIsModalVisible}
                  productData={productData}
                  setProductData={setProductData}
                  selectImage={selectImage}
                  setSelectImage={setSelectImage}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  loading={loading}
                  setIsModalVisible={setIsModalVisible}
                  isModalVisible={isModalVisible}
                />
              }
            />
            <Route path="/details" element={<AddDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
