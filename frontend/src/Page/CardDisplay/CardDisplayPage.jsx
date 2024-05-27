import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CardDisplayPage.css';

const CardDisplayPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/cards');
        setCards(res.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCards();
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {cards.map((card) => (
          <Col key={card._id} md={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title className="card-title">{card.title}</Card.Title>
                <Card.Img variant="top" src={card.image} />
                <Card.Text className="card-text">
                  {card.content.split(' ').slice(0, 10).join(' ')}
                  {card.content.split(' ').length > 10 && (
                    <>
                      <span>... </span>
                      <Button variant="link" className="read-more-button" onClick={() => alert(card.content)}>Read more</Button>
                    </>
                  )}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardDisplayPage;
