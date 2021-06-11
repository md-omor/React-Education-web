import React from "react";
import "./Counter.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBuilding } from "react-icons/bs";
import { BsCalendar } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { IoIosPeople } from "react-icons/io";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="counter">
      <Container className="counter__container">
        <Row>
          <Col sm={12} md={3} className="singal__counter">
            <BsBuilding /> <CountUp start={0} end={25} duration={8}></CountUp>
            <span>Success Exams </span>
          </Col>
          <Col sm={12} md={3} className="singal__counter">
            <VscFiles />
            <CountUp start={0} end={50} duration={8}></CountUp>
            <span>Number of students</span>
          </Col>
          <Col sm={12} md={3} className="singal__counter">
            <BsCalendar /> <CountUp start={0} end={30} duration={8}></CountUp>
            <span>Number of teachers</span>
          </Col>
          <Col sm={12} md={3} className="singal__counter">
            <IoIosPeople /> <CountUp start={0} end={18} duration={8}></CountUp>
            <span>Preaperd Exam</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Counter;
