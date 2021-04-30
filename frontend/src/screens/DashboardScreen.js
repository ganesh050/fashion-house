import React from "react";
import { ListGroup, Tab, Row, Col } from "react-bootstrap";
import ProfileScreen from "./ManageOrderScreen";
import ProfileUpdateScreen from "./ProfileUpdateScreen";

const DashboardScreen = ({ location, history }) => {
  return (
    <Tab.Container id="list-group-tabs" defaultActiveKey="#link1">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#1">
              Account Setting
            </ListGroup.Item>
            <ListGroup.Item action href="#2">
              Manage Orders
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#1">
              <ProfileUpdateScreen />
            </Tab.Pane>
            <Tab.Pane eventKey="#2">
              <ProfileScreen />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default DashboardScreen;
