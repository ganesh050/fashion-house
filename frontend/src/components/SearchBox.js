import React, { useState } from "react";
import { Form } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        className="form-control mr-sm-2 ml-sm-5"
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
      ></Form.Control>
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
        <i className="fas fa-search mx-3"></i>
      </button>
    </Form>
  );
};

export default SearchBox;
