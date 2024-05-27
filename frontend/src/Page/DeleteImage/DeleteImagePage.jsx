import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Alert, ListGroup } from 'react-bootstrap';

const DeleteImagePage = () => {
  const [images, setImages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/images');
        console.log('Fetched images:', res.data);
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          console.error('Error: Response is not an array', res.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/delete-images/${id}`);
        setMessage('Image deleted successfully');
        setImages(images.filter(image => image._id !== id));
      } catch (error) {
        console.error('Error deleting image', error);
        setMessage('Failed to delete image');
      }
    }
  };

  return (
    <Container className="mt-5">
      <h2>Delete Images</h2>
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
      <Row>
        <Col md={12}>
          <h3>Select Image to Delete</h3>
          <ListGroup>
            {Array.isArray(images) && images.length > 0 ? (
              images.map((image, index) => (
                <ListGroup.Item key={image._id}>
                  {index + 1}. {image.label}
                  <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDelete(image._id)}>
                    Delete
                  </Button>
                </ListGroup.Item>
              ))
            ) : (
              <p>No images found</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default DeleteImagePage;
