import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <>
    <Container fluid className="about-us-container text-center">
        {/* Full-width image with controlled height */}
        <div className="image-wrapper">
          <img 
            src="https://fakeimg.pl/1200x560" 
            alt="Descriptive Alt Text" 
            className="full-width-restricted-height-image"
          />
        </div>

        <Row className="about-text-row align-items-center">
          <Col md={4} className="text-left">
            <h3>About Us</h3>
            <h1>Brand Name</h1>
          </Col>
          <Col md={8} className="text-right">
            <p className="fancy-text">“Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.”</p>
          </Col>
        </Row>

        {/* Business cards */}
        <Row className="no-gutters"> {/* Removed mt-5 class */}
          <Col md={4} className="p-0">
            <Card className="business-card">
              <Card.Body>
                <Card.Title>How We Advertise</Card.Title>
                <Card.Text>
                  We utilize a combination of digital and physical marketing strategies to ensure maximum reach and engagement for your brand.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0">
            <Card className="business-card">
              <Card.Body>
                <Card.Title>Our Placement Strategy</Card.Title>
                <Card.Text>
                  Strategic placement of screens in high-traffic areas to capture the attention of your target audience effectively.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="p-0">
            <Card className="business-card">
              <Card.Body>
                <Card.Title>Client Satisfaction</Card.Title>
                <Card.Text>
                  Our clients are our top priority. We ensure their satisfaction with tailored solutions and dedicated support.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Counters */}
        <Row className="counters">
          <Col xs={6} md={3} className="counter-item">
            <h2><CountUp end={150} duration={3} /></h2>
            <p>Brand Advertised</p>
          </Col>
          <Col xs={6} md={3} className="counter-item">
            <h2><CountUp end={75} duration={3} /></h2>
            <p>Screens Placed</p>
          </Col>
          <Col xs={6} md={3} className="counter-item">
            <h2><CountUp end={200} duration={3} /></h2>
            <p>Happy Clients</p>
          </Col>
          <Col xs={6} md={3} className="counter-item">
            <h2><CountUp end={300} duration={3} /></h2>
            <p>Projects Completed</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
