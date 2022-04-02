import React, { useContext, useState } from "react";
import { stepContext } from "../FormContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import { RiTeamFill } from "react-icons/ri";
import { HiUser } from "react-icons/hi";
import "../App.css";

const Step3 = () => {
  const { step, setStep, userObj, setUserObj } = useContext(stepContext);
  const [team, setTeam] = useState(false);
  const [me, setMe] = useState(false);

  const handleClick = () => {
    setUserObj({ ...userObj, use: "myself" });
    setTeam(false);
    setMe(true);
  };
  const handleClick2 = () => {
    setUserObj({ ...userObj, use: "team" });
    setTeam(true);
    setMe(false);
  };
  return (
    <>
      <h4 style={{ textAlign: "center" }}>How are you planning to use Eden?</h4>
      <p style={{ textAlign: "center" }}>
        We'll streamline your experience accordingly
      </p>
      <Row xs={1} md={2} lg={2} className="g-4" style={{ marginTop: "2%" }}>
        <Col>
          <Card
            onClick={handleClick}
            border={`${me ? "primary" : ""}`}
            style={{ marginRight: "3%", paddingRight: "10%", paddingTop: "5%" }}
          >
            <Card.Body>
              <HiUser className={` ${me ? "blue" : ""}`} />
              <Card.Title style={{ marginTop: "5%" }}>For my self</Card.Title>
              <Card.Text>
                Write better.Think more clearly.Stay organized.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            onClick={handleClick2}
            border={`${team ? "primary" : ""}`}
            style={{ marginLeft: "3%", paddingTop: "5%" }}
          >
            <Card.Body>
              <RiTeamFill className={` ${team ? "blue" : ""}`} />
              <Card.Title style={{ marginTop: "5%" }}>With my team</Card.Title>
              <Card.Text>
                Wikis, docs, tasks &amp; projects, all in one place.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button
        style={{ width: "100%", marginTop: "6%" }}
        variant="primary"
        type="submit"
        onClick={() => {
          setStep(step + 1);
        }}
      >
        Create Workspace
      </Button>
    </>
  );
};

export default Step3;
