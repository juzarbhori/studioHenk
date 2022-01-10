import { Col, Row } from "antd";
import React from "react";
import ImageSelector from "../selector";
import ImageViewer from "../imageViewer";

const Home = ({
  setIsModalVisible,
  selectImage,
  productData,
  setProductData,
  setSelectImage,
}) => {
  console.log("obje11ct :>> ", selectImage);
  return (
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
  );
};

export default Home;
