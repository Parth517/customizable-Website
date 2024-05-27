import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Alert, ListGroup } from 'react-bootstrap';

const DeleteSectionPage = () => {
  const [sections, setSections] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/section');
        console.log('Fetched sections:', res.data);
        if (Array.isArray(res.data)) {
          setSections(res.data);
        } else {
          console.error('Error: Response is not an array', res.data);
        }
      } catch (error) {
        console.error('Error fetching sections:', error);
      }
    };
    fetchSections();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this section?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/delete-section/${id}`);
        setMessage('Section deleted successfully');
        setSections(sections.filter(section => section._id !== id));
      } catch (error) {
        console.error('Error deleting section', error);
        setMessage('Failed to delete section');
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>Delete Sections</h2>
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
      <Row>
        <Col md={12}>
          <h3>Select Section to Delete</h3>
          <ListGroup>
            {Array.isArray(sections) && sections.length > 0 ? (
              sections.map((section, index) => (
                <ListGroup.Item key={section._id}>
                  {index + 1}. {section.title}
                  <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(section._id)}>
                    Delete
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <p>No sections found</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DeleteSectionPage;
