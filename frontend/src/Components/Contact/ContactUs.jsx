import { useState } from 'react';
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap';
import './ContactUs.css';
import CarousalPage from '../CarouselPage/CarousalPage';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <Container fluid>
      <CarousalPage />
      <br />
      <br />
      <Row className="my-3">
        <Col md={12}>
          <Card className="p-3">
            <Row>
              <Col md={3} className="border-end">
                <h3>Main Address</h3>
                <p>123 Main Street</p>
                <p>City, State, ZIP</p>
                <p>Country</p>
              </Col>
              <Col md={9}>
                <Row>
                  <h3>Contact Information</h3>
                  <Col md={4}>
                    <Card className="p-1 contact-card">
                      <p><strong>Name:</strong> Parth Deshpande</p>
                      <p><strong>Phone:</strong> <a href="tel:+911234567891">+91 1234567891</a></p>
                      <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="p-1 contact-card">
                      <p><strong>Name:</strong><strong> Parth Deshpande</strong></p>
                      <p><strong>Phone:</strong> <a href="tel:+911234567891">+91 1234567891</a></p>
                      <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="p-1 contact-card">
                      <p><strong>Name:</strong> Parth Deshpande</p>
                      <p><strong>Phone:</strong> <a href="tel:+911234567891">+91 1234567891</a></p>
                      <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="p-1 contact-card">
                      <p><strong>Name:</strong> Parth Deshpande</p>
                      <p><strong>Phone:</strong> <a href="tel:+911234567891">+91 1234567891</a></p>
                      <p><strong>Email:</strong> <a href="mailto:example@example.com">example@example.com</a></p>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h3>Get in Touch</h3>
          <Form onSubmit={handleSubmit} className="contact-form">
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formName">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default ContactUs;
