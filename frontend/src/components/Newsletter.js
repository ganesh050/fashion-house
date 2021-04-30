import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { subscribeToNewsLetter } from "../actions/userActions";

const NewLetterScreen = () => {
  const dispatch = useDispatch();
  const newsLetter = useSelector((state) => state.newsLetter);
  const { email, newsletterChange, subscribeToNewsLetter, error } = newsLetter;

  const handleSubmit = (event) => {
    event.preventDefault();
    //    dispatch(subscribeToNewsletter());
    <h2>newsletterdispacth</h2>;
  };

  return (
    <div className="newsletter-form">
      <p>Sign Up for Our Newsletter</p>
      <form onSubmit={handleSubmit}>
        <div className="subscribe">
          <input
            type={"text"}
            // error={error["email"]}
            name={"email"}
            placeholder={"Please Enter Your Email"}
            value={email}
            onInputChange={(name, value) => {
              newsletterChange(name, value);
            }}
          />
          {/* <Button type="submit" variant="primary" text="Subscribe" /> */}
          {/* <button type="button" class="btn btn-light"> */}
          <Button
            type="button"
            className="btn btn-block"
            onClick={handleSubmit}
          >
            Subscribe
          </Button>
          {/* </button> */}
        </div>
      </form>
    </div>
  );
};

export default NewLetterScreen;
