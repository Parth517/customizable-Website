import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Alert, ListGroup } from 'react-bootstrap';

const DeleteCardPage = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/cards');
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete-cards/${id}`);
      setMessage('Card deleted successfully');
      setCards(cards.filter(card => card._id !== id));
    } catch (error) {
      console.error('Error deleting card', error);
      setMessage('Failed to delete card');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Delete Cards</h2>
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
      <Row>
        <Col md={12}>
          <h3>Select Card to Delete</h3>
          <ListGroup>
            {Array.isArray(cards) && cards.length > 0 ? (
              cards.map((card, index) => (
                <ListGroup.Item key={card._id}>
                  {index + 1}. {card.title}
                  <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(card._id)}>
                    Delete
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <p>No cards found</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DeleteCardPage;
