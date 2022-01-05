import { Button, Col, Radio, Row, Form, Select, Skeleton, Divider } from "antd";
import React from "react";

const ImageViewer = ({ selectImage }) => {
  return (
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
              your order, we ask for a down payment of € 500,-. Is your order in
              stock or less than € 500,-? Then we ask you to pay the full amount
              in advance. You can pay at checkout using iDeal, Paypal, Credit
              Card or Bancontact (Mister Cash). The rest of the amount can be
              paid by debit card at delivery or pick up. You can pick up your
              order in Haarlem or have it delivered for free within the
              Netherlands and Belgium. Note: are your product(s) delivered
              outside of the Netherlands or Belgium? Then the product(s) will
              only be shipped after complete payment. Feel free to contact us
              for more information about the delivery costs outside of the
              Netherlands and Belgium.t
            </p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ImageViewer;
