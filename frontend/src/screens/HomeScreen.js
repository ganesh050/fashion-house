import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import Categories from "../components/Categories";
import { listProducts } from "../actions/productActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword, pageNumber]);
  return (
    <>
      <Categories />
      <div
        className="rounded"
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
        <div className="container align-content-center row h-100">
          <div>
            <p className="align-self-center mx-3 mb-3">
              <Link to="/Women" class="btn btn-outline rounded-pill">
                Shop Women
              </Link>
            </p>
            <p className="align-self-center mx-3">
              <Link to="/Men" class="btn btn-outline rounded-pill">
                Shop Men
              </Link>
            </p>
          </div>
        </div>
      </div>
      <h3 className="my-3">WOMEN'S JEANS</h3>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={6} md={4} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} />
    </>
  );
};

export default HomeScreen;
