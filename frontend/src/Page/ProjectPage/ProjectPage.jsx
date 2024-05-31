import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Card,Col} from 'react-bootstrap';
import './ProjectPage.css';

const ProjectPage = () => {
  const [cards,setCards]=useState([])

  useEffect(()=>{
    const fetchCards = async () =>{
      try{
        const res = await axios.get('http://localhost:8080/api/cards');
        setCards(res.data);
      }catch(error){
        console.error('Error fetching cards:', error);

      }
    };
    fetchCards();
  },[])
  return (
    <>
      <Container className="mt-5">
        <Row xs={1} md={2} lg={4} className="g-5">
          {cards.map((card)=>(
            
                <Card text="white" className="custom-card">
            <Card.Img src="https://i.ibb.co/9p94DHk/mouse.jpg" className="card-img" alt="Background" />
            <Card.ImgOverlay className="d-flex flex-column justify-content-end p-0">
              <Card.Body className="card-content bg-white text-dark p-3">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>Some quick example text to build on the card title.</Card.Text>
              </Card.Body>
            </Card.ImgOverlay>
          </Card>
          ))}
        
        </Row>
      </Container>
    </>
  );
};

export default ProjectPage;
