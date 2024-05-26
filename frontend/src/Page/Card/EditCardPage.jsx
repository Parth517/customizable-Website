import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, ListGroup } from 'react-bootstrap';

const EditCardPage = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/cards'); // Assuming cards are stored in the section endpoint
        console.log('Fetched cards:', res.data);
        if (Array.isArray(res.data)) {
          setCards(res.data);
        } else {
          console.error('Error: Response is not an array', res.data);
        }
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    setTitle(card.title);
    setImage(card.image);
    setContent(card.content);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/edit-cards/${selectedCard._id}`, { title, image, content });
      setMessage('Card updated successfully');
      setSelectedCard(null);
      setTitle('');
      setImage('');
      setContent('');
      setCards(cards.map(card => card._id === res.data._id ? res.data : card));
    } catch (error) {
      console.error('Error updating card', error);
      setMessage('Failed to update card');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Edit Cards</h2>
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
      <Row>
        <Col md={4}>
          <h3>Select Card to Edit</h3>
          <ListGroup>
            {Array.isArray(cards) && cards.length > 0 ? (
              cards.map((card, index) => (
                <ListGroup.Item key={card._id} action onClick={() => handleCardSelect(card)}>
                  {index + 1}. {card.title}
                </ListGroup.Item>
              ))
            ) : (
              <p>No cards found</p>
            )}
          </ListGroup>
        </Col>
        <Col md={8}>
          {selectedCard && (
            <Form className="mt-3">
              <h3>Edit Card</h3>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter card title"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Enter image URL"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter card content"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate}>
                Update Card
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EditCardPage;
