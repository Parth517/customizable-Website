import { Card, Row, Col } from "react-bootstrap";
import "./BigCard.css";

const BigCard = () => {
  return (
    <>
      <Card className="big-card mb-4">
        <Row nogutters="true">
          <Col md={5} className="big-card-image-column">
            <img
              src="https://i.ibb.co/CmsJ0LZ/advertisement-586132-1280.jpg"
              alt="Big Card Content"
              className="big-card-content-image"
            />
          </Col>
          <Col md={7} className="big-card-text-column">
            <Card.Body>
              <Card.Title>Big Card Title</Card.Title>
              <Card.Text>
                This is the content of the big card. It has an image on the left
                and text on the right.
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default BigCard;
