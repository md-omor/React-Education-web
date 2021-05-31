import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Event from "../../data/Events";
import "./Events.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";

function Events() {
  return (
    <>
      <Container className="events__hero">
        <h2 className="testimonial__header">Events</h2>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
          corporis quas accusantium? Doloremque ea eaque animi labore et soluta.
        </p> */}
      </Container>
      <CardGroup className="events">
        {Event.map(({ image, title, time, place, description }) => {
          return (
            <Card className="events__card">
              <div className="card_img">
                <Card.Img variant="top" src={image} className="events__img" />
              </div>

              <Card.Body>
                <Card.Title className="events__title">{title}</Card.Title>

                <Card.Text className="events__des">
                  <BsCalendar />
                  {description}
                </Card.Text>

                <Card.Text className="events__des">
                  <BsCalendar />
                  {time}
                </Card.Text>

                <Card.Text className="events__des">
                  <IoLocationOutline />
                  {place}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
}

export default Events;
