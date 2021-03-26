import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {



  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="bg bg-custom-1 p-0  text-center font-Mshtakan sticky-top ">
        <br />
        <Link to="./New">New</Link>
        <Link to="./Women">Women </Link>
        <Link to="./Men"> Men </Link>
        <Link to="./Traditional">Traditional </Link>
        <Link to="./Accessories"> Accessories </Link>
        <Link to="./Clearance">Clearance </Link>
      </div>
      <div
        my-2
        p-3
        style={{
          backgroundColor: "#F5EFEF",
          backgroundImage: "url(/image/img.jpg)",
          backgroundSize: "cover",
          height: "300px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" align-content-center row h-100">
          <div className="col-lg-10 my-auto">
            <div className="align-self-center mx-3 mb-3">
              <Button
                type="button"
                className="btn btn-custom-1 rounded-pill"
                Link
                to="/Women"
              >
                Shop Women
              </Button>
            </div>
            <div className="align-self-center mx-3">
              <Button
                type="button"
                className="btn btn-custom-1 rounded-pill"
                Link
                to="/Men"
              >
                Shop Men
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h3 className="my-3">WOMEN'S JEANS</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant ='danger'>{error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <h3 className="my-3">MEN'S JEANS</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant ='danger'>{error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
