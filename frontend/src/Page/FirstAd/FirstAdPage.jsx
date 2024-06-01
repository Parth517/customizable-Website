import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './FirstAdPage.css';
import axios from 'axios';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const endVal = parseInt(end);
    const incrementTime = (duration / endVal) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === endVal) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <h3 className="newHead">{count}</h3>;
};

const FirstAdPage = () => {
  const [dText, setDText] = useState([]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/text');
        setDText(res.data);
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };
    fetchText();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <Container className="newContain">
        {dText.map((text, index) => (
          <Row key={index} className="section2">
            <Col md={4} className="leftCol">
              <h2 className="head1">{text.title}</h2>
              <h2 className="head2">{text.hText}</h2>
            </Col>
            <Col md={7}>
              <p className="rightCol">
                {text.paragraph}
              </p>
              <div className="h5Container">
                <div>
                  <Counter end="10" duration="2" />
                  <h5>Screen Placed</h5>
                </div>
                <div>
                  <Counter end="1000" duration="2" />
                  <h5>People Reached</h5>
                </div>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default FirstAdPage;
