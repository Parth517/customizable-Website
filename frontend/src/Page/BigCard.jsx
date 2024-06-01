import { Card, Row, Col } from "react-bootstrap";
import "./BigCard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const BigCard = () => {
  const [bgCards,setBgCards]=useState([])

  useEffect(()=>{
    const fetchBgCard=async ()=>{
      try {
        const res=await axios.get('http://localhost:8080/api/bgCard')
        setBgCards(res.data)
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }
    fetchBgCard();
  },[]);
  return (
    <>
      <Card className="big-card mb-4">
        <Row nogutters="true">
          {bgCards.map((bgCard)=>(
            <>
            <Col md={5} className="big-card-image-column">
              <img
                src={bgCard.url}
                alt="Big Card Content"
                className="big-card-content-image" />
            </Col><Col md={7} className="big-card-text-column">
                <Card.Body>
                  <Card.Title className="big-card-title">{bgCard.title}</Card.Title>
                  <Card.Text>
                  {bgCard.text}
                  </Card.Text>
                </Card.Body>
              </Col>
              </>
          ))}
          
        </Row>
      </Card>
    </>
  );
};

export default BigCard;
