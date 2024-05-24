import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./Comp.css";

const Comp = () => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/section");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setContents(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Container fluid>
      {contents.map((content, index) => (
        <Row key={index} className={`content-card mb-4 ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <Col md={4} className={`image-column ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
            <img src={content.image} alt="Content" className="content-image" />
          </Col>
          <Col md={8} className={`text-column ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <h3>{content.title}</h3>
            <p>{content.content}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Comp;
