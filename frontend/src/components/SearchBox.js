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
      {/* <Form.Control
    //   type="text"
    //   name="q"
    //   onChange={(e) => setKeyword(e.target.value)}
    //   placeholder="Search"
    //   className="mr-sm-2 ml-sm-5"
    // ></Form.Control>
    // <Button type="submit" variant="outline-success" className="p-2">
    //   <i class="fas fa-search mx-3"></i>
    // </Button> */}

      <input
        className="form-control mr-sm-2 ml-sm-5"
        type="search"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit">
        <i className="fas fa-search mx-3"></i>
      </button>
    </Form>
  );
};

export default SearchBox;
