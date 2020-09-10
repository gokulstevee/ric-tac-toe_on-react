import React, { useState } from "react";
import logo from "./logo.svg";
import Icon from "./components/icon";

import { Container, Col, Row, Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const itemArray = new Array(9).fill("empty");

function App() {
  const [iscross, setIsCross] = useState(false);
  const [winMessage, SetWinMessage] = useState("");

  const reloadGame = () => {
    itemArray.fill("empty", 0, 9);
    setIsCross(false);
    SetWinMessage("");
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = iscross ? "cross" : "circle";
      setIsCross(!iscross);
    } else {
      return toast(itemArray[itemNumber] + ",Already filled", {
        type: "error",
      });
    }
    checkIsTie();
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row className="mt-5">
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-center text-uppercase">
                {winMessage}
              </h1>
              <Button block color="success" onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-uppercase text-warning">
              {iscross ? "cross" : "circle"} Turn
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card
                style={{ backgroundColor: "#4BCFFA" }}
                onClick={() => changeItem(index)}
              >
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
