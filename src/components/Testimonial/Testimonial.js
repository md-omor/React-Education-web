import React from "react";
import "./Testimonial.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Demo1 from "../../images/demo1.jpg";
import Demo2 from "../../images/demo2.jpg";
import Demo3 from "../../images/demo3.jpg";
import Demo4 from "../../images/demo4.jpg";

const Testimonial = () => {
  return (
    <Container className="testimonial">
      <Row>
        <Col md={6} sm={12}>
          <h2 className="testimonial__header">Testimonials</h2>
        </Col>
        <Col md={6} sm={12}>
          <p className="testimonial__desc">
            We’ve been lucky enough to work with so many online educational
            platfrom. Check out what they’re saying.
          </p>
        </Col>
        <Col md={6} sm={12}>
          <div className="testimonial__image">
            <img src={Demo1} alt="demo1" className="test__singal_img" />
            <div className="test_mini_title">
              <p className="test__singal_title">Amazing Experience</p>
              <p className="test__singal_min_des">Made Up Inc</p>
            </div>
          </div>
          <div className="testimonial__description">
            <p className="test_des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eum
              ducimus amet reprehenderit voluptatibus distinctio blanditiis
              adipisci consectetur dolorum voluptates, repudiandae, facere fugit
              quia tempora?
            </p>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="testimonial__image">
            <img src={Demo2} alt="demo2" className="test__singal_img" />
            <div className="test_mini_title">
              <p className="test__singal_title">Great Job</p>
              <p className="test__singal_min_des">Made Up Limited</p>
            </div>
          </div>
          <div className="testimonial__description">
            <p className="test_des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eum
              ducimus amet reprehenderit voluptatibus distinctio blanditiis
              adipisci consectetur dolorum voluptates, repudiandae, facere fugit
              quia tempora?
            </p>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="testimonial__image">
            <img src={Demo3} alt="demo3" className="test__singal_img" />
            <div className="test_mini_title">
              <p className="test__singal_title">Fantastic Work</p>
              <p className="test__singal_min_des">Made Up Ltd</p>
            </div>
          </div>
          <div className="testimonial__description">
            <p className="test_des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eum
              ducimus amet reprehenderit voluptatibus distinctio blanditiis
              adipisci consectetur dolorum voluptates, repudiandae, facere fugit
              quia tempora?
            </p>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <div className="testimonial__image">
            <img src={Demo4} alt="demo4" className="test__singal_img" />
            <div className="test_mini_title">
              <p className="test__singal_title">Happy Customer</p>
              <p className="test__singal_min_des">Made Up Company</p>
            </div>
          </div>
          <div className="testimonial__description">
            <p className="test_des">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed eum
              ducimus amet reprehenderit voluptatibus distinctio blanditiis
              adipisci consectetur dolorum voluptates, repudiandae, facere fugit
              quia tempora?
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonial;
