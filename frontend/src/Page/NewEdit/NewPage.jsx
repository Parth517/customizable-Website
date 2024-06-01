import { Col, Container, Row } from 'react-bootstrap';
import './NewPage.css';
import { BsStack } from "react-icons/bs";
import { MdStarBorder } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useState, useEffect } from 'react';
import axios from "axios";

const iconMapping = {
  "MULTI FORMAT MEDIA": <BsStack className="stack" />,
  "SMARTLY PLANNED": <MdStarBorder className="star" />,
  "BUILD BRANDS": <IoMdCheckmarkCircleOutline className="check" />,
};

const NewPage = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/newCard");
        setCards(res.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }
    fetchCards();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <Container className="newContain">
        <Row>
          {cards.map((card, index) => (
            <Col md={4} className='section1 text-center' key={index}>
              {iconMapping[card.title] || <BsStack className="stack" />} {/* Fallback icon if title doesn't match */}
              <h4 className="heading">{card.title}</h4>
              <p className="texts">{card.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default NewPage;
