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

  const check = (ele) => {
    return ele !== "empty";
  };
  const checkIsTie = () => {
    if (itemArray.every(check)) {
      return toast(`Game Tie`, { type: "warning" });
    }
  };

  const checkIsWinner = () => {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      SetWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[0]} won`, { type: "success" });
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      SetWinMessage(`${itemArray[3]} won`);
      toast(`${itemArray[3]} won`, { type: "success" });
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      SetWinMessage(`${itemArray[6]} won`);
      toast(`${itemArray[6]} won`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      SetWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[0]} won`, { type: "success" });
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      SetWinMessage(`${itemArray[1]} won`);
      toast(`${itemArray[1]} won`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      SetWinMessage(`${itemArray[2]} won`);
      toast(`${itemArray[2]} won`, { type: "success" });
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      SetWinMessage(`${itemArray[0]} won`);
      toast(`${itemArray[0]} won`, { type: "success" });
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      SetWinMessage(`${itemArray[2]} won`);
      toast(`${itemArray[2]} won`, { type: "success" });
    }
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
