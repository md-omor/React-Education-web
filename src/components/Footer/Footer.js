import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../images/logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { BiBuildings, BiTimeFive } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__main">
      <Container className="footer">
        <Row>
          <Col md={4} sm={12}>
            <div className="footer_img">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer_des">
              <p>
                Excellence decisively nay man yet impression for contrasted
                remarkably. There spoke happy for you are out. Fertile how old
                address did showing because sitting replied six. Had arose guest
                visit going off child she new.
              </p>
              <div className="footer_contact">
                <p>
                  <FiPhoneCall /> 1-677-124-44227
                </p>
                <p>
                  <BiTimeFive /> Mon - Sat 8.00 - 18.00
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="desc__features">
              <div className="desc__links">
                <h4>LINKS</h4>
                <ul>
                  <li>Exams</li>
                  <li>Features</li>
                  <li>events</li>
                  <li>about</li>
                  <li>contact</li>
                </ul>
              </div>

              <div className="desc__links">
                <h4>SUPPORT</h4>
                <ul>
                  <li>Documentation</li>
                  <li>Forums</li>
                  <li>Feedback</li>
                  <li>Release Status</li>
                  <li>LearnPress</li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12} className='address__col'>
            <h4 className="add">ADDRESS</h4>
            <div className="footer__address">
              <div className="footer__email">
                <div className="fotter__address_icon">
                  <AiOutlineMail />
                </div>
                <div className="footer__all_">
                  <span>EMAIL</span>
                  <span>demo@demo.com</span>
                </div>
              </div>

              <div className="footer__office">
                <div className="fotter__address_icon">
                  <BiBuildings />
                </div>
                <div className="footer__all_">
                  <span>OFFICE</span>
                  <span>123 6th st. melbourne, fl 32904</span>
                </div>
              </div>

              <div className="footer__social_media">
                <FaFacebook />
                <GrLinkedin />
                <FaTwitter />
                <FaInstagram />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="terms__cond">
        <Container className="footer terms__footer">
          <Row>
            <Col sm={12} md={6}>
              © Copyright 2019. All Rights Reserved By Gajen
            </Col>
            <Col sm={12} md={6} className="terms__col">
              <Link to="/terms" className='social__link'>TERMS OF USER</Link> |
              <Link to="/license" className='social__link'>LICENSE</Link> |
              <Link to="/support" className='social__link'>SUPPORT</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

// home, pages, , events, Features,  about, contact
