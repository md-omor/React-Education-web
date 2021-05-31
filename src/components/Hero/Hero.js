import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
} from "mdbreact";
import "./Hero.css";
import Button from "@material-ui/core/Button";

const Hero = () => {
  return (
    <div className="slider">
      <MDBContainer className="carousel__container">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100 slider_img"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                  alt="First slide"
                />
                <MDBMask overlay="black-light" />
              </MDBView>
              <MDBCarouselCaption className="carousel__caption">
                <h3 className="h3-responsive">
                  Learn from the biggest onlinen exam platfrom
                </h3>
                <p className="carousel__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum alias blanditii.
                </p>
                <Button className="carousel__button">Get Register</Button>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100 slider_img"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                  alt="Second slide"
                />
                <MDBMask overlay="black-strong" />
              </MDBView>
              <MDBCarouselCaption className="carousel__caption">
                <h3 className="h3-responsive">Grow your skills</h3>
                <p className="carousel__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi eum pariatur excepturi.
                </p>
                <Button className="carousel__button">Get Register</Button>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100 slider_img"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                  alt="Third slide"
                />
                <MDBMask overlay="black-slight" />
              </MDBView>
              <MDBCarouselCaption className="carousel__caption">
                <h3 className="h3-responsive">Extracurricular Activities </h3>
                <p className="carousel__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus totam consectetur eum magnam hic deserunt?
                </p>
                <Button className="carousel__button">Get Register</Button>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default Hero;
