import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Card } from 'react-bootstrap';
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
    <>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={4} className="g-5">
          {cards.map((card, index) => (
            <Card text="white" className="custom-card" key={card._id || index}> {/* Use card._id if available, otherwise use index as fallback */}
              <Card.Img src={card.image} className="card-img" alt="Background" />
              <Card.ImgOverlay className="d-flex flex-column justify-content-end p-0">
                <Card.Body className="card-content bg-white text-dark p-3">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.content}</Card.Text>
                </Card.Body>
              </Card.ImgOverlay>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardDisplayPage;
