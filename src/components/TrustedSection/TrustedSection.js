import React from "react";
import './TrustedSection.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Trusted from "../../images/Trusted1.jpg";
import Trusted2 from "../../images/Trusted2.png";

const TrustedSection = () => {
  return (
    <Container className="trusted__container">
      <Row className='mb-5'>
        <Col sm={12} md={7} >
          <Image src={Trusted} rounded alt="trusted1" className="trusted1" />
        </Col>
        <Col sm={12} md={5}>
          <h3 className='trusted__title mt-5'>The Trusted Name for In-Home Exam.</h3>
          <p className='trusted__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            exercitationem cum consectetur, placeat deserunt maxime quam
            recusandae ducimus quos molestiae!
          </p>
        </Col>

        
        <Col sm={12} md={5} className='mt-5' >
          <h3 className='trusted__title mt-5'>The Trusted Name for In-Home Exam.</h3>
          <p className='trusted__description'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            exercitationem cum consectetur, placeat deserunt maxime quam
            recusandae ducimus quos molestiae!
          </p>
        </Col>
        <Col sm={12} md={7} className='mt-5'>
          <Image src={Trusted2} rounded alt="trusted1" className="trusted2" />
        </Col>
      </Row>
    </Container>
  );
};

export default TrustedSection;
