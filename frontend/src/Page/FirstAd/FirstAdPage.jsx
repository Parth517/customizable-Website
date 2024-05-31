import { Col, Container, Row } from "react-bootstrap";
import "./FirstAdPage.css";

const FirstAdPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Container className="newContain">
        <Row className="section2">
          <Col md={4} className="leftCol">
            <h2 className="head1">WE CREATE MASS PUBLIC'S EYE</h2>
            <h2 className="head2">ATTENTION</h2>
          </Col>
          <Col md={7} >
            <p className="rightCol">
              We are a value-driven organization. Our core values inspire us to
              push our boundaries and set benchmarks for others and have them
              believe that our organization is top class.
            </p>
            <div className="h5Container">
              <div>
                <h3 className="newHead">10+</h3>
                <h5>Screen Placed</h5>
              </div>
              <div>
                <h3 className="newHead">1k</h3>
                <h5>People Reached</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FirstAdPage;
